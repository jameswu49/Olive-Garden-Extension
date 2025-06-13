let counter = 0;

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.greeting === "hello") {
    counter++;
    return Promise.resolve({ farewell: "goodbye" });
  }

  if (request.status === "fetch number") {
    return Promise.resolve({ number: counter });
  }
});
