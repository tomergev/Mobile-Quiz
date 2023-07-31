import { StatusBar } from 'expo-status-bar'
import { Link } from 'expo-router'
import { View } from 'react-native'
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context'


const Dashboard = () => {
  const insets = useSafeAreaInsets()
  return <View style={{ paddingTop: insets.top }}>
    <Link href="/flagQuiz">Flag Quiz</Link>
  </View>
}

const App = () => {
  return (
    <SafeAreaProvider>
      <Dashboard />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  )
}

export default App
