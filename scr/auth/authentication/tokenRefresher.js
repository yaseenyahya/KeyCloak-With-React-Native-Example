
import { refresh } from 'react-native-app-auth'; 
import { keycloakConfig } from '../../config/config'; 
import { getRefreshToken, saveAccessToken, saveRefreshToken } from './fetchTokens';

const refreshAccessToken = async () => {
  try {
    // Hämta refreshToken från Keychain
    const refreshToken = await getRefreshToken();
    if (!refreshToken) {
      console.error('No refresh token available');
      throw new Error('Refresh token not found');
    }

    // Förnyar access token med hjälp av refresh token
    const result = await refresh(keycloakConfig, {
      refreshToken: refreshToken,
    });

    // Spara uppdaterade tokeninformation
    await saveAccessToken(result.accessToken);
    await saveRefreshToken(result.refreshToken);

    console.log('Access token refreshed successfully.');
  } catch (error) {
    console.error('Error refreshing access token:', error);
    throw new Error('Failed to refresh access token');
  }
};

export default refreshAccessToken;
