// i18n
import "src/locales/i18n";

// scrollbar
import "simplebar-react/dist/simplebar.min.css";

// lightbox
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";

// map
import "mapbox-gl/dist/mapbox-gl.css";

// editor
import "react-quill/dist/quill.snow.css";

// carousel
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

// image
import "react-lazy-load-image-component/src/effects/blur.css";

// ----------------------------------------------------------------------

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import SnackbarProvider from "src/components/snackbar/snackbar-provider";
import { useScrollToTop } from "src/hooks/use-scroll-to-top";
import { LocalizationProvider } from "src/locales";
import Router from "src/routes/sections";
import ThemeProvider from "src/theme";
import { MotionLazy } from "./components/animate/motion-lazy";
import { SettingsProvider } from "./contexts/settings";
import TopLoadingBar from "./components/loading-screen/TopLoadingBar";

// ----------------------------------------------------------------------

export default function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 900); // demo
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  useScrollToTop();

  return (
    <LocalizationProvider>
      <SettingsProvider
        defaultSettings={{
          themeMode: "light", // 'light' | 'dark'
          themeDirection: "ltr", //  'rtl' | 'ltr'
          themeContrast: "default", // 'default' | 'bold'
          themeLayout: "vertical", // 'vertical' | 'horizontal' | 'mini'
          themeColorPresets: "default", // 'default' | 'cyan' | 'purple' | 'blue' | 'orange' | 'red'
          themeStretch: false,
        }}
      >
        <TopLoadingBar loading={loading}  />
        <ThemeProvider>
          <MotionLazy>
            <SnackbarProvider>
              <Router />
            </SnackbarProvider>
          </MotionLazy>
        </ThemeProvider>
      </SettingsProvider>
    </LocalizationProvider>
  );
}
