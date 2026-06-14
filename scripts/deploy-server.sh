#!/usr/bin/env bash

set -Eeuo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(cd "${SCRIPT_DIR}/.." && pwd)"

export PORT="${PORT:-1998}"

cd "${PROJECT_DIR}"

if ! command -v docker >/dev/null 2>&1; then
  echo "Error: Docker belum terpasang." >&2
  exit 1
fi

if ! docker info >/dev/null 2>&1; then
  echo "Error: Docker daemon tidak aktif atau user tidak memiliki akses Docker." >&2
  exit 1
fi

if ! docker compose version >/dev/null 2>&1; then
  echo "Error: Docker Compose plugin belum tersedia." >&2
  exit 1
fi

echo "Building portfolio image..."
docker compose build --pull

echo "Starting portfolio on port ${PORT}..."
docker compose up -d --remove-orphans

container_id="$(docker compose ps -q portfolio)"
if [[ -z "${container_id}" ]]; then
  echo "Error: container portfolio tidak ditemukan." >&2
  docker compose logs --tail=100 portfolio
  exit 1
fi

echo "Waiting for container health check..."
for attempt in $(seq 1 40); do
  status="$(docker inspect --format '{{if .State.Health}}{{.State.Health.Status}}{{else}}{{.State.Status}}{{end}}' "${container_id}")"

  if [[ "${status}" == "healthy" ]]; then
    echo "Deployment successful: http://localhost:${PORT}"
    docker compose ps
    exit 0
  fi

  if [[ "${status}" == "unhealthy" || "${status}" == "exited" || "${status}" == "dead" ]]; then
    break
  fi

  sleep 3
done

echo "Error: container gagal mencapai status healthy." >&2
docker compose ps
docker compose logs --tail=100 portfolio
exit 1
