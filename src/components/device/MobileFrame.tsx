"use client";

// URL da aplicacao Next.js para o iframe de preview
const PREVIEW_URL = "http://localhost:3000";

import styles from "./MobileFrame.module.css";
import { DEVICES } from "@/lib/devices";

export function MobileFrame() {
  const device = DEVICES.iphone;

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.device}
        style={{ width: device.width, height: device.height }}
      >
        {/* Status Bar */}
        <div className={styles.statusBar}>
          <div className={styles.statusLeft}>09:41</div>

          <div className={styles.statusRight}>
            <div className={styles.wifi}>
              <span />
              <span />
              <span />
            </div>

            <div className={styles.battery}>
              <div className={styles.batteryLevel} />
            </div>
          </div>
        </div>

        {/* WebView */}
        <iframe
          src={PREVIEW_URL}
          className={styles.iframe}
          title="DevFrame Preview"
        />
      </div>
    </div>
  );
}
