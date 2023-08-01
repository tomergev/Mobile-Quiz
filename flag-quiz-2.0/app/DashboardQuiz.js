import { 
  Link,
  useLocalSearchParams, 
} from 'expo-router'
import { 
  View, 
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const DashboardQuizes = () => {
  const { continent } = useLocalSearchParams() || {}
  const insets = useSafeAreaInsets()

  return (
    <View style={{ flex: 1, paddingTop: insets.top }}>
      <Link
        style={{ fontSize: 30 }}
        href={{
          pathname: '/FlagQuiz',
        }}
      >
        {continent}
      </Link>
    </View>
  )
}

export default DashboardQuizes