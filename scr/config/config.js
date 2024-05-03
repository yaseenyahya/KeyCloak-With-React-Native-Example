const host = '192.168.0.100';
const port = '8080';
const portRedir = '8080';
const realm = 'app1';

// Använd dessa variabler för att bygga konfigurationen
// const keycloakConfig = {
const keycloakConfig = {

  issuer: `http://${host}:${port}/realms/${realm}`,
  clientId: 'account',
  redirectUrl: `io.identityserver.demo:/oauthredirect`, 
  additionalParameters: {},
  scopes: ['openid', 'profile'],
  dangerouslyAllowInsecureHttpRequests:true,
  serviceConfiguration: {
    authorizationEndpoint: `http://${host}:${port}/realms/${realm}/protocol/openid-connect/auth`,
    tokenEndpoint: `http://${host}:${port}/realms/${realm}/protocol/openid-connect/token`,
    revocationEndpoint: `http://${host}:${port}/realms/${realm}/protocol/openid-connect/logout`,
  },
};

export default keycloakConfig;

