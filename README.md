# Mantis Place redesign

This project was created using [Expo-CLI](https://docs.expo.io/workflow/expo-cli/). Optimizing for Android, then later tweaking for web and ios.

NOTE: After today, I am moving back to working on the react project. I will add logic there first (involving hooks and redux); then will translate to here for practice.

## Done (March 28, 2021)

- Added screenshots of what has been completed so far.

## Screenshots

- Products Page

![productspage](https://github.com/rebekahkahn/mantisplace-reactnative-design/blob/master/shared/screenshots/products-page.png)

- Single Product Page

![productpage](https://github.com/rebekahkahn/mantisplace-reactnative-design/blob/master/shared/screenshots/product-page.png)

## To Do

- StyleSheet formatting
- Make navigation header show the product name rather than "Mantis Info"
- Add react-redux

## Dependencies

For fonts:

```bash
expo install expo-app-loading
expo install expo-font
```

For navigation:

```bash
yarn add @react-navigation/native
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view react-stack-navigation react-navigation-drawer
```

## Start Project

Install [Android Emulator](https://docs.expo.io/workflow/android-studio-emulator/), then:

```bash
expo start
```

## Languages/Libraries used

- react
- react-native
- react-native-paper
