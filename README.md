# Expo Router Windows issue.

Use [`expo-router`](https://expo.github.io/router) to build native navigation using files in the `app/` directory.

## 🚀 How to use

- `$ yarn install`
- Go to `node_modules/metro/src/lib/contextModuleTemplates.js`
- Add breakpoint to line 87 (`return Object.defineProperties(...`)
- Start Expo through vscode run and debug
- Open the app on device with Expo Go
- See breakpoint with incorrect values
- Fix the issue with `$ yarn patch-package`
- Retry and validate it returns right values

## 📝 Notes

- [Expo Router: Docs](https://expo.github.io/router)
- [Expo Router: Repo](https://github.com/expo/router)
- [Request for Comments](https://github.com/expo/router/discussions/1)
