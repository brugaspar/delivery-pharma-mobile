import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "./src/hooks/fonts.hook";

import { AuthenticationProvider } from "./src/contexts/AuthenticationContext";
import { Routes } from "./src/routes";

export default function App() {
  const [isFontsLoaded, setIsFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await useFonts();
      setIsFontsLoaded(true);
    }

    loadFonts();
  }, []);

  if (!isFontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <AuthenticationProvider>
        <Routes />
      </AuthenticationProvider>
    </NavigationContainer>
  );
}
