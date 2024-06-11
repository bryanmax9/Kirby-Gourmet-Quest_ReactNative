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

3. **Setting up Eslint:**

   Use first this command:
   ```bash
   yarn add --dev eslint prettier @react-native-community/eslint-config
   ```

   Than on the root folder, we create a file ".eslintrc" with this code:
   ```bash
   {
      "extends": "@react-native-community",
      "rules": {
         "quotes": [2, "double", { "avoidEscape": true}]
      }     
   }

   ```

   


