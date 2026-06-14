# Nicola F. Salvaturi Portfolio

Portfolio berbasis React dan Vite. Deployment production menggunakan GitHub Pages dan GitHub Actions.

## Development

```bash
npm ci
npm run dev
```

## Production Check

```bash
npm run deploy:check
```

Perintah tersebut menjalankan lint dan production build sebelum perubahan dikirim ke repository.

## Deploy

1. Buka repository GitHub `nicolafeby/portofolio`.
2. Masuk ke **Settings > Pages**.
3. Pada **Build and deployment > Source**, pilih **GitHub Actions**.
4. Push perubahan ke branch `main`.

Workflow `.github/workflows/deploy.yml` akan otomatis membangun dan menerbitkan website ke:

`https://nicolafeby.github.io/portofolio/`

Deployment juga dapat dijalankan manual melalui tab **Actions**, pilih workflow **Deploy portfolio to GitHub Pages**, lalu klik **Run workflow**.

## Docker

Build dan jalankan container production secara lokal:

```bash
npm run docker:run
```

Website tersedia di `http://localhost:1998`. Untuk menjalankan tanpa Compose:

```bash
npm run docker:build
docker run --rm -p 1998:80 nicola-portfolio:local
```

Setiap push ke branch `main` juga menjalankan workflow `.github/workflows/docker.yml` dan menerbitkan image ke GitHub Container Registry:

`ghcr.io/nicolafeby/portofolio:latest`

Menjalankan image dari registry:

```bash
docker pull ghcr.io/nicolafeby/portofolio:latest
docker run -d --name nicola-portfolio -p 1998:80 --restart unless-stopped ghcr.io/nicolafeby/portofolio:latest
```
