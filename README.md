# WebRTC Hide Local IPs with mDNS

<img width="362" height="212" alt="image" src="https://github.com/user-attachments/assets/6f5a9932-57a4-4e6d-a52e-6a686dcc80fb" />


A lightweight Chrome Extension (Manifest V3) that prevents local IP address leakage over WebRTC by forcing Chromium to use mDNS hostname anonymization.

Developed by **HuskyDG**.

---

## Why Use This Extension?

By default, WebRTC in Chromium-based browsers can expose your private/local IP address (e.g., `192.168.x.x` or `10.x.x.x`) to websites during peer-to-peer connection discovery (ICE candidate gathering). This can be used for browser fingerprinting and network tracking even if you are using a VPN.

This extension sets Chrome's WebRTC IP handling policy to `default_public_interface_only`. This ensures that:
- Your internal local IP addresses are hidden behind randomized mDNS hostnames (e.g., `xxxx-xxxx-xxxx-xxxx.local`).
- Only non-proxied public IP addresses or proxy connections are exposed when WebRTC is active.

<img width="880" height="391" alt="image" src="https://github.com/user-attachments/assets/0e1f2ccc-f8e3-4b34-8904-f182398463ef" />

---

## Installation instructions

### Chrome (Windows)

1. **Download source code:** Download the latest [Source code (zip)](https://github.com/vincentng295/WebRTC_mDNS/releases/latest) and extract it.
2. **Open the Extension Management page:** Access the path `chrome://extensions/` on Chrome browser (or Edge, Opera, Brave).
3. **Enable Developer Mode:** Flip the **Developer mode** switch in the top right corner to **On** state.
4. **Load Extension:** Click the **Load unpacked** button in the upper left corner, then point to the folder containing the source code of this Extension.
5. **Pin Extension:** Find the extension named *AdBlock Based-Hook Extension* and pin it to the toolbar for easy use.


### Android (Kiwi Browser / Edge Canary)

Since standard mobile browsers do not support custom extension injection via unpacked folders, you can use specialized browsers like Edge Canary to run this extension on Android.

#### Using Edge Canary (Advanced)
1. **Download CRX:** Download the latest [WebRTC_mDNS.crx](https://github.com/vincentng295/WebRTC_mDNS/releases/latest/download/WebRTC_mDNS.crx) directly to your Android device. *(No need to extract it, Edge Canary can read .crx files directly!)*
2. **Enable Developer Options in Edge Canary:** On your Android device, open Edge Canary, go to **Settings** > **About Microsoft Edge**. Tap the Edge Build Version logo 5-7 times rapidly until a "Developer Options" notification appears.
3. **Install:** Go back to the main Settings menu, enter **Developer Options** and tap on **Extension install by crx**, then tap the **Choose .crx file** and select the `WebRTC_mDNS.crx` file from your device storage. Tap **OK** to complete install.
---
