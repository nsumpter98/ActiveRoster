import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Auth0ProviderWithHistory from "./providers/Auth0ProviderWrapper.tsx";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Auth0ProviderWithHistory>
      <App />
    </Auth0ProviderWithHistory>
  </StrictMode>
);
