import { useLocalSearchParams } from 'expo-router'
import { useState } from 'react'
import { 
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text, 
  View, 
} from 'react-native'
import ProgressBar from 'react-native-progress/Bar'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import countries from '../countries'
import createQuiz from '../utils/createQuiz'

const styles = StyleSheet.create({
  flag: {
    flex: 1,
    height: 200,
  },
  answer: {
    alignSelf: 'center',
    fontSize: 20,
  }
})


const FlagQuiz = () => {
  const insets = useSafeAreaInsets()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [choiceIdSelected, setChoiceIdSelected] = useState(null)
  const quiz = []

  return (
    <View
      style={{
        flex: 1,
        padding: 10,
        paddingTop: insets.top,
      }}
    >
      <View 
        style={{ 
          flex: 2, 
          justifyContent: 'center',
        }}
      >
        <ProgressBar 
          height={10} 
          progress={(currentIndex / quiz.length)} 
          width={null} 
        />
        <Text style={styles.answer}>
          {quiz[currentIndex]?.answer?.name}
        </Text>
      </View>
      <View 
        style={{ flex: 4, backgroundColor: 'grey' }}
      >
        <FlatList
          data={quiz[currentIndex]?.choices}
          horizontal={false}  
          keyExtractor={c => c.name}
          numColumns={2}
          renderItem={({ item: choice }) => {
            const choiceStyle = { ...styles.flag }
            const isChoiceSelected = choice.id === choiceIdSelected
            if (isChoiceSelected) {
              const isChoiceAnswer = choice.id === quiz[currentIndex]?.answer?.id
              choiceStyle.borderColor = isChoiceAnswer ? 'green' : 'red'
              choiceStyle.borderWidth = 5
            }
            return <Pressable
              onPress={() => {
                setChoiceIdSelected(choice.id)

                if (choice.id === quiz[currentIndex]?.answer?.id) {
                  setTimeout(() => {
                    // TODO: Need to figure out what to do when a quiz is finished
                    if (currentIndex <= quiz.length - 1) {
                      setCurrentIndex((currentIndex) => currentIndex + 1)
                    }
                    setChoiceIdSelected(null)
                  }, 400)
                }
              }}
              style={choiceStyle}
            >
              <Image             
                resizeMode="center"
                source={{ uri: choice.flag }} 
                style={styles.flag}
              />
            </Pressable>
          }}
        />
      </View>
    </View>
  )
}

export default FlagQuiz