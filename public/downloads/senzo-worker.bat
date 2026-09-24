@echo off
title Senzo Node Network - Community Worker Daemon
color 0B
echo ==============================================================
echo    SENZO NODE NETWORK (SNN) - WORKER DAEMON LAUNCHER
echo ==============================================================
echo.
echo [1/3] Checking Node.js runtime...
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is not installed or not in PATH!
    echo Please download and install Node.js v18+ from https://nodejs.org
    echo After installing, simply double-click this file again.
    echo.
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('node -v') do set NODE_VER=%%i
echo  - Found Node.js %NODE_VER%
echo.
echo [2/3] Syncing latest Senzo Worker script...
if not exist "%TEMP%\senzo-worker.cjs" (
    powershell -Command "[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; (New-Object System.Net.WebClient).DownloadFile('https://raw.githubusercontent.com/s1zeNof/SenzoCrypto/main/scripts/senzo-worker.cjs', '%TEMP%\senzo-worker.cjs')" 2>nul
)

set WORKER_SCRIPT=scripts\senzo-worker.cjs
if not exist "%WORKER_SCRIPT%" (
    set WORKER_SCRIPT=%TEMP%\senzo-worker.cjs
)

echo [3/3] Starting Senzo Worker Daemon...
echo.
node "%WORKER_SCRIPT%" %*
if %errorlevel% neq 0 (
    echo.
    echo Daemon stopped. Press any key to exit.
    pause
)
