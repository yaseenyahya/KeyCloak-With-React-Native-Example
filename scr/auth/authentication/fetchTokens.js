import * as Keychain from 'react-native-keychain';

export const getAccessToken = async () => {
  try {
    const credentials = await Keychain.getGenericPassword({
      service: 'accessToken',
    });
    const accessToken = credentials ? credentials.password : null;
    console.log('FetchTokens: accesstoken is: ', accessToken);
    return accessToken;
  } catch (error) {
    console.error('Error retrieving the access token:', error);
    return null;
  }
};

export const getRefreshToken = async () => {
  try {
    const credentials = await Keychain.getGenericPassword({
      service: 'refreshToken',
    });
    const refreshToken = credentials ? credentials.password : null;
    console.log('FetchTokens: refreshtoken is: ', refreshToken);
    return refreshToken;
  } catch (error) {
    console.error('Error retrieving the refresh token:', error);
    return null;
  }
};

export const saveAccessToken = async accessToken => {
  try {
    const result = await Keychain.setGenericPassword(
      'accessToken',
      accessToken,
      {service: 'accessToken'},
    );
    console.log('FetchTokens: Access Token saved successfully:', result);

    // Utlöser en uppdatering av auth statusen i hela applikationen
    emitter.emit('updateAuth');
    console.log('FetchTokens: Event emitted');

    return true;
  } catch (error) {
    //console.error('FetchTokens: Error saving the access token:', error);
    return false;
  }
};

export const saveRefreshToken = async refreshToken => {
  try {
    const result = await Keychain.setGenericPassword(
      'refreshToken',
      refreshToken,
      {service: 'refreshToken'},
    );
    console.log('FetchTokens: Refresh Token saved successfully:', result);
    return true;
  } catch (error) {
    console.error('FetchTokens: Error saving the refresh token:', error);
    return false;
  }
};
