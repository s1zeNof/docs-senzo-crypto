#!/usr/bin/env bash
# Senzo Node Network (SNN) - Worker Daemon Launcher for Linux / macOS
set -e

echo "=============================================================="
echo "   🚀 SENZO NODE NETWORK (SNN) - WORKER DAEMON LAUNCHER"
echo "=============================================================="
echo ""

if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js v18+:"
    echo "   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -"
    echo "   sudo apt-get install -y nodejs"
    exit 1
fi

echo "✓ Detected Node.js $(node -v)"
TARGET_FILE="/tmp/senzo-worker.cjs"

if [ ! -f "scripts/senzo-worker.cjs" ]; then
    echo "📡 Downloading latest Senzo Worker script..."
    curl -sSL "https://raw.githubusercontent.com/s1zeNof/SenzoCrypto/main/scripts/senzo-worker.cjs" -o "$TARGET_FILE"
    SCRIPT_PATH="$TARGET_FILE"
else
    SCRIPT_PATH="scripts/senzo-worker.cjs"
fi

echo "🚀 Launching Senzo Worker..."
node "$SCRIPT_PATH" "$@"
