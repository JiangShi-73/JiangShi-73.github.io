@echo off
chcp 65001 >nul
title 发布到线上 - jiangshi
cd /d "%~dp0"

echo.
echo ==========================================
echo   发布到 https://jiangshi-73.github.io/
echo ==========================================
echo.
echo 改动清单：
git status --short
echo.

git diff --quiet && git diff --cached --quiet
if not errorlevel 1 (
  echo   没有检测到改动，不用发布。
  echo.
  pause
  exit /b 0
)

set "msg=更新内容"
set /p msg=这次改了什么？（直接回车 = 更新内容）: 
if "%msg%"=="" set "msg=更新内容"

echo.
echo [1/3] 构建中...
call npm run build
if errorlevel 1 (
  echo.
  echo   X 构建失败，上面有报错，没有发布。
  pause
  exit /b 1
)

echo [2/3] 提交...
git add -A
git commit -m "%msg%" >nul
if errorlevel 1 (
  echo   X 提交失败。
  pause
  exit /b 1
)

echo [3/3] 推送到 GitHub...
git push
if errorlevel 1 (
  echo.
  echo   X 推送失败，多半是网络。等一会儿再双击一次就行。
  pause
  exit /b 1
)

echo.
echo   OK 发布完成，大约 1 分钟后生效：
echo        https://jiangshi-73.github.io/
echo.
pause
