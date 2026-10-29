@echo off
chcp 65001 >nul
title 个人博客 - 本地预览
cd /d "%~dp0"

if not exist node_modules (
  echo 首次运行，正在安装依赖，请稍候...
  call npm install
)

echo.
echo 正在启动本地预览，几秒后会自动打开浏览器...
echo 地址：http://127.0.0.1:4321
echo 关闭本窗口即停止服务。
echo.
start "" cmd /c "timeout /t 4 >nul & start http://127.0.0.1:4321"
call npm run dev -- --port 4321 --host 127.0.0.1
pause
