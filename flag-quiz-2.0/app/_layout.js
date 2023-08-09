import { Slot } from 'expo-router'
import { StatusBar } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const Layout = () => (
  <SafeAreaProvider>
    <StatusBar barStyle='light-content' /> 
    <Slot />
  </SafeAreaProvider>
)

export default Layout