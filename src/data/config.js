// ============================================================
// EDIT ME: all the basic personalization lives in this file.
// ============================================================

const config = {
  // Her name, shown on the landing page.
  herName: "PUNYAA!!",

  // Landing page copy.
  heroSubtitle: "A little something from all the people who love you.",
  enterButtonLabel: "ENTER →",

  // Letters page copy.
  lettersTitle: "Letters For You",
  lettersSubtitle:
    "From the people who couldn't possibly fit everything they wanted to say into one message.",

  // Memories (photo collage) page copy.
  memoriesTitle: "A Collection of You",
  memoriesSubtitle:
    "Because apparently there are too many memories to fit into one birthday message.",
  memoriesEmptyMessage: "Let's fill this with memories.",
  memoriesOpenButtonLabel: "Open the memories →",

  // Video page copy.
  videoTitle: "Okay, We Have One More Thing...",
  videoCaption: "Made with way too much love.",

  // Video + poster + music file paths.
  // Replace these files in /src/assets/ then keep the same filenames,
  // or change the paths below to match whatever you name them.
  videoSrc: "/src/assets/video/birthday-video.mp4",
  videoPoster: "/src/assets/video/poster.jpg",
  musicSrc: "/src/assets/music/song.mp3",
  musicLabel: "Our song",

  // Optional sound effects. If a file is missing the site still works fine,
  // it just won't play that sound.
  sounds: {
    scrollOpen: "/src/assets/sounds/scroll-open.mp3",
    photoPlace: "/src/assets/sounds/photo-place.mp3",
    click: "/src/assets/sounds/click.mp3",
  },
  soundEffectsEnabled: true,

  // ---- Hidden final surprise ----
  // Set to false to disable this feature entirely.
  finalSurpriseEnabled: true,
  // How many letters + whether the collage/video must be viewed
  // before the surprise unlocks.
  finalSurpriseRequirements: {
    lettersToOpen: 3,
    mustFinishCollage: true,
    mustWatchVideo: true,
  },
  finalSurpriseIntro: "Have the best birthday punsiee",
  finalSurpriseMessage: `We all got together to make this because we love you 
  and we wanted to show you just how much, we hope you like it.

Happy birthday. We love you.`,

  // ---- "Do not click" button on the Memories page ----
  // A little trap: clicking it shakes the screen, blurs it, then
  // reveals an embarrassing photo. Replace the file below with a
  // real (bad) photo of her. Set enabled to false to remove it.
  doNotClickEnabled: true,
  doNotClickLabel: "DO NOT CLICK",
  doNotClickPhotoSrc: "/src/assets/special/do-not-click.png",
  doNotClickCaption: "We told you not to click it.",
};

export default config;
