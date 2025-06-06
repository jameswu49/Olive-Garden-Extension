//
//  Main.js
//  Olive-Garden
//
//  Created by Jimmy Wu on 6/4/25.
//

// Main.js

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("#olive-garden-button");
  if (button) {
    button.addEventListener("click", (e) => {
      window.webkit.messageHandlers.controller.postMessage({
        action: "openLink",
        url: "https://www.olivegarden.com",
      });
    });
  }
});
