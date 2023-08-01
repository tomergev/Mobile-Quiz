import { Link } from 'expo-router'
import { 
  FlatList, 
  View, 
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'


const CONTINENTS = [
  'Africa', 
  'Asia', 
  'Europe', 
  'North America', 
  'Oceania', 
  'South America', 
]

const App = () => {
  const insets = useSafeAreaInsets()
  
  return <View style={{ flex: 1, paddingTop: insets.top }}>
    <FlatList 
      data={CONTINENTS}
      numColumns={2}
      renderItem={({ item: continent }) => {
        return (
          <View style={{ flex: 1 }}>
            <Link 
              style={{ fontSize: 30 }}
              href={{
                pathname: '/DashboardQuiz',
                params: { continent },
              }}
            >
              {continent}
            </Link>
          </View>
        )
      }}
    />
  </View>
}

export default App
