import { app, BrowserWindow } from "electron";

function createWindow() {
  const win = new BrowserWindow({
    width: 420,
    height: 900,
    resizable: true,
    frame: false,
    titleBarStyle: "hidden",
    backgroundColor: "#ffffffff",
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
    show: false,
  });

  const url = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
  win.loadURL(url).catch((err) => {
    console.error("Falha ao carregar a URL:", err);
  });

  win.once("ready-to-show", () => {
    win.show();
  });
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});