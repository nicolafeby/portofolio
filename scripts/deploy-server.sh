#!/bin/bash

set -e

CONTAINER_NAME="nicola-portfolio"
PORT="${PORT:-1998}"
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
SOURCE_DIR="$PROJECT_DIR/dist"
NGINX_CONFIG="$PROJECT_DIR/nginx.conf"

echo "Starting deployment for $CONTAINER_NAME..."

if ! command -v npm >/dev/null 2>&1; then
  echo "Error: npm belum terpasang."
  exit 1
fi

if ! command -v docker >/dev/null 2>&1; then
  echo "Error: Docker belum terpasang."
  exit 1
fi

if ! docker info >/dev/null 2>&1; then
  echo "Error: Docker daemon tidak aktif atau user tidak memiliki akses Docker."
  exit 1
fi

echo "Building website..."
cd "$PROJECT_DIR"
npm ci
npm run build

if [ ! -d "$SOURCE_DIR" ]; then
  echo "Error: folder dist tidak ditemukan di $SOURCE_DIR"
  exit 1
fi

if [ ! -f "$NGINX_CONFIG" ]; then
  echo "Error: nginx.conf tidak ditemukan di $NGINX_CONFIG"
  exit 1
fi

echo "Setting permission..."
chmod -R 755 "$SOURCE_DIR"

if [ "$(docker ps -aq -f name=^/${CONTAINER_NAME}$)" ]; then
  echo "Removing existing container..."
  docker rm -f "$CONTAINER_NAME"
fi

echo "Running new container..."
docker run -d \
  --name "$CONTAINER_NAME" \
  --restart unless-stopped \
  -p "$PORT:80" \
  -v "$SOURCE_DIR:/usr/share/nginx/html:ro" \
  -v "$NGINX_CONFIG:/etc/nginx/conf.d/default.conf:ro" \
  nginx:alpine

echo "Done!"
echo "Access: http://localhost:$PORT"
