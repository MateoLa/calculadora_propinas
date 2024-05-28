# Calculadora de Propinas

Desarrollada en React, usando Vite y TailwindCSS como framework para hojas de estilos.<br>
Contiene un Custom hook y usa useMemo y otros.

##  Tailwind

Seguimos la guía de [instalación](https://tailwindcss.com/docs/guides/vite) para un framework (Vite)

Una ventaja de Tailwind es que el código CSS se escribe en cada componente por lo que no hay que importar hojas de estilos en el proyecto.<br>
Algunas clases de Tailwind se heredan y otras no.

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR (home module replacement) and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
