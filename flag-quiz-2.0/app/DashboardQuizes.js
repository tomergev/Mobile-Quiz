import { 
  useLocalSearchParams, 
  useNavigation,
} from 'expo-router'
import { 
  Button,
  Text,
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
    <View style={{ flex: 1, paddingTop: insets.top }}>
      <Text style={{ fontSize: 20, textAlign: 'center' }}>
        {continent}
      </Text>
      <Button
        onPress={() => navigation.navigate('FlagQuiz', { quiz: JSON.stringify([quiz[0], quiz[1], quiz[2]]) })}
        title='4 Flags'
      />
      <Button
        onPress={() => navigation.navigate('CountryNameQuiz', { quiz: JSON.stringify([quiz[0], quiz[1], quiz[2]]) })}
        title='4 Countries'
      />
    </View>
  )
}

export default DashboardQuizes