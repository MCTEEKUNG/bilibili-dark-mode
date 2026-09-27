# BiliBili Dark Mode (Manifest V3)

A lightweight and fast browser extension that enables a clean, eye-friendly Dark Mode for **Bilibili.tv** with persistent settings and seamless UI coverage.

Compatible with **Brave**, **Google Chrome**, **Microsoft Edge**, **Mozilla Firefox**, and other Chromium/Gecko-based browsers.

---

## ✨ Features

- 🌙 **Native Night Mode Integration**: Triggers Bilibili's built-in night styles complemented by curated, custom CSS fixes.
- ⚡ **Instant Loading (`document_start`)**: Injected at document start to eliminate white flashes when navigating between pages.
- 💾 **Persistent Preference**: Remembers your toggle state across sessions using local browser storage.
- 🎨 **Complete UI Darkening**:
  - Main feeds, channel pages, search results, and navigation bars.
  - Video player surroundings, comments section, and reply boxes.
  - Creator center, user profiles, history, and favorites.
- 🔄 **Real-Time Toggle**: Convenient popup toggle switch to turn Dark Mode on or off instantly without reloading.
- 🔒 **Privacy Focused**: No tracking, no external analytics, minimal required permissions (`storage`).

---

## 🚀 Installation Guide

### Option 1: Chromium Browsers (Brave, Chrome, Edge, Opera)

1. Clone or download this repository:
   ```bash
   git clone https://github.com/MCTEEKUNG/bilibili-dark-mode.git
   ```
2. Open your browser's extension manager:
   - **Brave**: `brave://extensions`
   - **Chrome**: `chrome://extensions`
   - **Edge**: `edge://extensions`
3. Enable **Developer mode** (toggle in the top-right corner).
4. Click **Load unpacked** (โหลดส่วนขยายที่คลายการบีบอัด).
5. Select the folder containing `manifest.json`.
6. Open [bilibili.tv](https://www.bilibili.tv/) and enjoy Dark Mode!

---

### Option 2: Mozilla Firefox

1. Open Firefox and go to `about:debugging#/runtime/this-firefox`.
2. Click **Load Temporary Add-on...**.
3. Select any file within the directory (such as `manifest.json`).

---

## 🛠 Project Structure

```text
├── icons/               # Extension icons (16, 32, 48, 96, 128 px)
├── content.css          # In-depth dark theme stylesheets for bilibili.tv
├── content.js           # Content script handling night-mode classes & observer
├── manifest.json        # Extension manifest (MV3 + Gecko settings)
├── popup.html           # Extension toolbar popup interface
├── popup.css            # Modern popup stylesheet
├── popup.js             # Logic for popup toggle and storage sync
└── README.md
```

---

## ⚙️ Permissions

- `storage`: Used solely to save your preference (`darkMode: true/false`) locally on your device.
- Host permissions for `*://*.bilibili.tv/*`.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to open an issue or submit a pull request if Bilibili updates their layout or if you spot any un-themed elements.

---

## 📄 License

Distributed under the [MIT License](LICENSE) (or Open Source).
