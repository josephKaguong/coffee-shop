// Rest of the import statements
 import { Poppins_400Regular } from '@expo-google-fonts/poppins/400Regular';
import { useFonts } from 'expo-font';

import { Stack } from 'expo-router';


import * as SplashScreen from 'expo-splash-screen';

import { useEffect } from 'react';


SplashScreen.preventAutoHideAsync();


export default function RootLayout() {
  const [loaded, error] = useFonts({
    
    Poppins_400Regular,
    
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <Stack/>
  )
}
