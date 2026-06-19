#!/usr/bin/env sh
set -eu

APP_DIR="${APP_DIR:-/var/projects/james-abilong-portfolio}"
COMPOSE_FILE="${COMPOSE_FILE:-docker-compose.prod.yml}"

cd "$APP_DIR"

if [ -d .git ]; then
  git fetch --prune
  git pull --ff-only
fi

if [ -n "${GHCR_USERNAME:-}" ] && [ -n "${GHCR_TOKEN:-}" ]; then
  printf '%s' "$GHCR_TOKEN" | docker login ghcr.io -u "$GHCR_USERNAME" --password-stdin
fi

docker compose -f "$COMPOSE_FILE" pull portfolio || true
docker compose -f "$COMPOSE_FILE" up -d --build portfolio
docker image prune -f
