console.log("Hello World!", browser);

const button = document.getElementById("button");

button.addEventListener("click", async () => {
  const counter = document.getElementById("counter");
  counter.textContent = parseInt(counter.textContent) + 1;
  const response = await browser.runtime.sendMessage({ greeting: "hello" });
  const responseDiv = document.getElementById("response");
  responseDiv.textContent = response.farewell;
});

const counterDiv = document.getElementById("counter");

browser.runtime.sendMessage({ status: "fetch number" }).then((response) => {
  counterDiv.textContent = response.number;
});
