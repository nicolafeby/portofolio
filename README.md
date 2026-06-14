# Nicola F. Salvaturi Portfolio

Portfolio berbasis React dan Vite dengan deployment Docker manual menggunakan Nginx.

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

Pastikan Node.js, npm, dan Docker sudah terpasang. Docker Compose tidak diperlukan. Setelah repository tersedia di server, jalankan dari root repository:

```bash
git pull origin main
bash scripts/deploy-server.sh
```

Atau dari folder `scripts`:

```bash
./deploy-server.sh
```

Jangan menambahkan kata `run` sebelum nama script.

Script akan menjalankan `npm ci`, membuat folder production `dist`, menghapus container lama, lalu menjalankan container Nginx baru. Website tersedia di:

`http://IP_SERVER:1998`

Untuk menggunakan port lain:

```bash
PORT=8080 bash scripts/deploy-server.sh
```

Melihat status, log, atau menghentikan container:

```bash
docker ps -f name=nicola-portfolio
docker logs -f nicola-portfolio
docker rm -f nicola-portfolio
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
