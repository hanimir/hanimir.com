#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

REQUIRED_NODE="$(cat .nvmrc)"

load_nvm() {
  if command -v nvm >/dev/null 2>&1; then
    return
  fi

  if [ -s "$HOME/.nvm/nvm.sh" ]; then
    # shellcheck source=/dev/null
    . "$HOME/.nvm/nvm.sh"
  fi
}

load_nvm

if command -v nvm >/dev/null 2>&1; then
  nvm use "$REQUIRED_NODE" >/dev/null
else
  echo "nvm not found. Install nvm or run with node $REQUIRED_NODE."
fi

exec "$@"
