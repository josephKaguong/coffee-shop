import { useFonts } from 'expo-font';
import { Stack } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import '../global.css';

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  
  const [loaded,error]=useFonts({
    'poppins':require('typeface-poppins')
  })

  useEffect(()=>{
       if(loaded){
       SplashScreen.hideAsync()
  }
  },[loaded,error])
 
  if(!loaded || !error){
    return null
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)/home"/>
    </Stack>

  ) 
}
