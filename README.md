# FinanceApp - Versión Standalone (GitHub Pages)

Aplicación de gestión financiera personal que funciona completamente en el navegador con localStorage.

## Características

- ✅ Dashboard con gráficos interactivos
- ✅ Registro de ingresos y gastos
- ✅ CRUD de transacciones con filtros
- ✅ Gestión de cuentas y transferencias
- ✅ Control presupuestario
- ✅ Análisis financiero completo
- ✅ Detección de gastos inusuales
- ✅ Recomendaciones automáticas
- ✅ Datos demo incluidos
- ✅ Responsive design

## Deploy en GitHub Pages

### Opción 1: GitHub Actions (Recomendado)

1. Crea un repositorio en GitHub
2. Sube la carpeta `standalone` al repositorio
3. Ve a **Settings > Pages**
4. Selecciona **GitHub Actions** como source
5. El workflow se ejecutará automáticamente

### Opción 2: Deploy manual

1. Crea un repositorio en GitHub
2. Sube el archivo `index.html` directamente
3. Ve a **Settings > Pages**
4. Selecciona **main branch** como source

## Usuario Demo

- Email: `demo@finance.com`
- Contraseña: `demo123`

## Tecnologías

- HTML5
- CSS3 (Custom Properties, Grid, Flexbox)
- JavaScript vanilla
- Chart.js (gráficos)
- localStorage (persistencia de datos)

## Archivos

```
standalone/
├── index.html          # Aplicación completa
├── .github/
│   └── workflows/
│       └── deploy.yml  # GitHub Actions
└── README.md           # Esta documentación
```