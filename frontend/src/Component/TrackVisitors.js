import { useEffect } from "react";
import axios from "axios";

const TrackVisitor = () => {
  useEffect(() => {
    const trackUser = async () => {
      const ipResponse = await axios.get("https://api64.ipify.org?format=json");
      const userAgent = navigator.userAgent;
      const browser = /Chrome/.test(userAgent) ? "Chrome" : /Firefox/.test(userAgent) ? "Firefox" : "Other";
      const device = /Mobi|Android/i.test(userAgent) ? "Mobile" : "Desktop";

      await axios.post("http://localhost:8000/api/track-visitor", {
        ip: ipResponse.data.ip,
        device,
        browser,
      });
    };

    trackUser();
  }, []);

  return null;
};

export default TrackVisitor;
