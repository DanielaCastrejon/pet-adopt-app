import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {

  useFonts ({
    'JosefinSans':require('./../assets/fonts/JosefinSans-Bold.ttf'),
    'JosefinSans':require('./../assets/fonts/JosefinSans-Medium.ttf'),
    'JosefinSans':require('./../assets/fonts/JosefinSans-Regular.ttf')
  })



  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="login/index"
      options={{
        headerShown:false
      }}
      />


    </Stack>
  );
}
