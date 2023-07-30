import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { 
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text, 
  View, 
} from 'react-native'
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context'

import countries from './countries'
import createQuiz from './utils/createQuiz'

const styles = StyleSheet.create({
  flag: {
    flex: 1,
    height: 200,
  },
})

const FlagQuiz = () => {
  const insets = useSafeAreaInsets()
  const countriesAfrica = countries.filter(c => c.continents.includes('Africa'))
  const quizAfricanCountries = createQuiz(countriesAfrica)
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <View style={{ paddingTop: insets.top }}>
      <Text style={{ textAlign: 'center' }}>{quizAfricanCountries[currentIndex].answer.name}</Text>
      
      <FlatList
        data={quizAfricanCountries[currentIndex].choices}
        horizontal={false}  
        keyExtractor={c => c.name}
        numColumns={2}
        renderItem={({ item }) => {
          return <Pressable
            onPress={() => setCurrentIndex(current => current + 1)}
            style={styles.flag}
          >
            <Image             
              resizeMode="center"
              source={{ uri: item.flag }} 
              style={styles.flag}
            />
          </Pressable>
        }}
      />
    </View>
  )
}

const App = () => {
  return (
    <SafeAreaProvider>
      <FlagQuiz />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  )
}

export default App
