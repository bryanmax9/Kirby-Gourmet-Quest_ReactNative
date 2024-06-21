# Kirby-Gourmet-Quest_ReactNative


## Setup for creating a projec on React Native
- React Documentation: https://docs.expo.dev/tutorial/create-your-first-app/

1. **Install Expo CLI Globally:**
   ```bash
   npm install -g expo-cli
   ```

2. **Creating project folder:**
   ```bash
   npx create-expo-app KirbyGourmetApp --template blank
   ```

3. **Running Project:**
   ```bash
   cd .\KirbyGourmetApp\
   npx expo start
   ```

3. **Add ReactNative Paper:**
   ```bash
   npm install react-native-paper
   ```
   
4. **Install Node.js version 18:**
   ```bash
   nvm install 18
   nvm use 18
   ```

   and install yarn
   ```bash
   yarn install
   ```
   
6. **Add styled-components(this is to allow avoiding redundant styling):**
   ```bash
   npm install styled-components --legacy-peer-deps
   ```
7. **Add Google Fonts:**
   ```bash
   npm install expo-font --legacy-peer-deps
   ```
   Than:
   ```bash
   npm install @expo-google-fonts/oswald --legacy-peer-deps
   ```
8. **Install SVG Module:**
   ```bash
   npm install react-native-svg --legacy-peer-deps
   ```

9. **Install React Native Navigation:**
   ```bash
   yarn install
   yarn add @react-navigation/native @react-navigation/bottom-tabs
   yarn add react-native-screens react-native-safe-area-context
   ```
   


