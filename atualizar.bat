@echo off
:: ════════════════════════════════════════════════════════════════
::  atualizar.bat — Atualiza dashboard_data.js com dados do BQ e
::  publica automaticamente no GitHub Pages
::  Execute: duplo clique ou rode no terminal
:: ════════════════════════════════════════════════════════════════

setlocal
set REPO_DIR=%~dp0
set PYTHON="C:\Users\jefnogueira\AppData\Local\Google\Cloud SDK\google-cloud-sdk\platform\bundledpython\python.exe"
set GH="C:\Users\jefnogueira\AppData\Local\gh_cli\bin\gh.exe"

echo.
echo [1/3] Extraindo dados do BigQuery...
cd /d "%REPO_DIR%"
%PYTHON% scripts\update_data.py
if errorlevel 1 (
    echo ERRO na extracao do BigQuery. Verifique se esta autenticado:
    echo   gcloud auth application-default login
    pause
    exit /b 1
)

echo.
echo [2/3] Publicando no GitHub...
git add dashboard_data.js
git diff --cached --quiet
if errorlevel 1 (
    git commit -m "data: atualizacao automatica %DATE%"
    git push
    echo Publicado com sucesso!
) else (
    echo Nenhuma alteracao nos dados. Nada a publicar.
)

echo.
echo [3/3] Dashboard atualizado:
echo   https://jefnogueiralves.github.io/cartoes-expirados-dash/
echo.
pause
