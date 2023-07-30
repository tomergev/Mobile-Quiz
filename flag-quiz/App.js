import { StatusBar } from 'expo-status-bar'
import { 
  FlatList,
  Image,
  StyleSheet, 
  View, 
} from 'react-native'
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context'

import countries from './countries'
import createQuiz from './utils/createQuiz'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap', 
  },
  flag: {
    flex: 1,
    height: 200,
  },
})

const FlagQuiz = () => {
  const insets = useSafeAreaInsets()
  const countriesAfrica = countries.filter(c => c.continents.includes('Africa'))
  const data = createQuiz(countriesAfrica)
  console.log(data[0].choices)

  return (
    <View style={{ ...styles.container, paddingTop: insets.top }}>
      <FlatList
        data={data[0].choices}
        horizontal={false}  
        keyExtractor={c => c.name}
        numColumns={2}
        renderItem={({ item }) => {
          return <Image 
            resizeMode="center"
            source={{ uri: item.flag }} 
            style={styles.flag}
          />
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
