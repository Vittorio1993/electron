const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");
// 在 app.js 或其他 JavaScript 文件中
const nativeModule = require("native-module");
const isOnline = nativeModule.isInternetConnected(); // 注意是 isInternetConnected
console.log(isOnline ? "Online" : "Offline");

// Wait until the app is ready
app.once("ready", () => {
  // Create a new window
  window = new BrowserWindow({
    // Set the initial width to 500px
    width: 500,
    // Set the initial height to 400px
    height: 400,
    // set the title bar style
    titleBarStyle: "hiddenInset",
    // set the background color to black
    backgroundColor: "#111",
    // Don't show the window until it's ready, this prevents any white flickering
    show: false,
  });

  window.loadURL(
    url.format({
      pathname: path.join(__dirname, "index.html"),
      protocol: "file:",
      slashes: true,
    })
  );

  window.once("ready-to-show", () => {
    window.show();
  });
});
