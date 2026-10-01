// Loads Spotify's embed iFrame API once and hands back the IFrameAPI
// object every SpotifyPlayer can use to create a controllable player.
let apiPromise = null;

export default function loadSpotifyIframeApi() {
  if (apiPromise) return apiPromise;

  apiPromise = new Promise((resolve) => {
    if (window.Spotify?.Embed) {
      resolve(window.Spotify.Embed);
      return;
    }

    window.onSpotifyIframeApiReady = (IFrameAPI) => {
      resolve(IFrameAPI);
    };

    const script = document.createElement("script");
    script.src = "https://open.spotify.com/embed/iframe-api/v1";
    script.async = true;
    document.body.appendChild(script);
  });

  return apiPromise;
}