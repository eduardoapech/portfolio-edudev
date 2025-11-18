# Guia de Migração

## 📦 Movendo Assets

Para que o projeto React funcione corretamente, você precisa mover os arquivos para a pasta `public`:

### Assets
Mova os arquivos de `assets/` para `public/assets/`:
- background.jpg
- favicon.ico
- home.jpg
- mobile.jpg
- portfolio-projetos.jpg
- projeto1.png até projeto5.png

### Static
Mova os arquivos de `static/` para `public/static/`:
- Desenvolvedor-Curriculo-atualizado.pdf

### Comandos PowerShell (opcional)

```powershell
# Mover assets
Move-Item -Path assets\* -Destination public\assets\ -Force

# Mover static
Move-Item -Path static\* -Destination public\static\ -Force
```

## 🗑️ Arquivos Antigos (podem ser removidos após migração)

Após confirmar que tudo funciona, você pode remover:
- `about.html`
- `projetcs.html`
- `static/script.js` (o código foi convertido para React)
- `static/style.css` (os estilos foram divididos em componentes)

O `index.html` na raiz foi substituído pelo novo arquivo do Vite.

