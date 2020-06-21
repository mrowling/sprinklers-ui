const isLocalBrowser = () => window.location.hostname === "localhost";

export const config = {
  protocol: isLocalBrowser() ? "http" : "https",
  apiHost: isLocalBrowser()
    ? "localhost:8000"
    : "sprinklers.erinandmitchell.com",
};
