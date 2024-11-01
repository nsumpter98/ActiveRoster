import { Auth0Provider } from "@auth0/auth0-react";

import { ReactNode } from "react";

const Auth0ProviderWithHistory = ({ children }: { children: ReactNode }) => {
  const clientId = import.meta.env.VITE_CLIENT_ID;
  const domain = import.meta.env.VITE_ISSUER_BASE_URL;

  console.log("clientId", clientId);
  console.log("domain", domain);

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin + "/callback",
        audience: import.meta.env.VITE_AUTH0_AUDIENCE,
      }}
    >
      {children}
    </Auth0Provider>
  );
};
export default Auth0ProviderWithHistory;
