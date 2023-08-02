import { 
  useLocalSearchParams, 
  useNavigation,
} from 'expo-router'
import { 
  Button,
  View, 
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import countries from '../countries'
import createQuiz from '../utils/createQuiz'

const DashboardQuizes = () => {
  const { continent } = useLocalSearchParams() || {}
  const insets = useSafeAreaInsets()
  const navigation = useNavigation()

  const countriesFilteredByContinent = countries.filter((country) => (
    country.continents.includes(continent)
  ))
  const quiz = createQuiz(countriesFilteredByContinent)

  return (
    <View style={{ paddingTop: insets.top }}>
      <Button
        onPress={() => navigation.navigate('FlagQuiz', { quiz: JSON.stringify([quiz[0], quiz[1], quiz[2]]) })}
        title={continent}
        color='#841584'
      />
    </View>
  )
}

export default DashboardQuizes