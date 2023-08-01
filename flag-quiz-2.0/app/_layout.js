import { Slot } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const Layout = () => (
  <SafeAreaProvider>
    <Slot />
    <StatusBar style='auto' />
  </SafeAreaProvider>
)

export default Layout