import React from 'react';
import {authorize} from 'react-native-app-auth';
import keycloakConfig from '../../config/config';
import { saveAccessToken, saveRefreshToken } from './fetchTokens'; 
import { Alert} from 'react-native';
const Login = async () => {
  try {
    // React-native-app-auth login 
    console.log(keycloakConfig);
    const authState = await authorize(keycloakConfig);
    console.log(authState);
Alert.alert("Logged In")

    // Save accessToken using Keychain
    const accessTokenSaved = await saveAccessToken(authState.accessToken);
    if (accessTokenSaved) {
      console.log('Login: Access token saved successfully.');
    }

    // Save refreshToken using Keychain if available
    if (authState.refreshToken) {
      const refreshTokenSaved = await saveRefreshToken(authState.refreshToken);
      if (refreshTokenSaved) {
        console.log('Login: Refresh token saved successfully.');
      }
    }

  } catch (error) {
    console.log('Login error:', error);
  }
};

export default Login;
