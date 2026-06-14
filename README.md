# Nicola F. Salvaturi Portfolio

Portfolio berbasis React dan Vite dengan deployment Docker manual.

## Development

```bash
npm ci
npm run dev
```

## Production Check

```bash
npm run lint
npm run build
```

## Deploy Manual di Server Linux

Pastikan Docker dan Docker Compose plugin sudah terpasang. Setelah repository tersedia di server, jalankan:

```bash
git pull origin main
bash scripts/deploy-server.sh
```

Script akan membangun image dari source, menjalankan container, dan memeriksa health status. Website tersedia di:

`http://IP_SERVER:1998`

Untuk menggunakan port lain:

```bash
PORT=8080 bash scripts/deploy-server.sh
```

Melihat status, log, atau menghentikan container:

```bash
docker compose ps
docker compose logs -f portfolio
docker compose down
```

## Docker Lokal

```bash
npm run docker:run
```

Website tersedia di `http://localhost:1998`. Untuk menjalankan tanpa Compose:

```bash
npm run docker:build
docker run --rm -p 1998:80 nicola-portfolio:local
```
