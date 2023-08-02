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
import { AntDesign } from '@expo/vector-icons'

const styles = StyleSheet.create({
  flag: {
    flex: 1,
    height: 200,
  },
})

const FlagQuiz = () => {
  const insets = useSafeAreaInsets()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [choiceIdsSelected, setChoiceIdsSelected] = useState([])
  const [numOfIncorrectSelections, setNumOfIncorrectSelections] = useState(0)
  const params = useLocalSearchParams() || {}
  const quiz = JSON.parse(params.quiz || []) 

  return (
    <View
      style={{
        flex: 1,
        padding: 10,
        paddingTop: insets.top,
      }}
    >
      <View style={{ flexDirection: 'row-reverse' }}>
        <AntDesign 
          color='red' 
          name={numOfIncorrectSelections <= 0 ? 'heart' : 'hearto'} 
          size={18} 
          style={{ marginLeft: 2 }}
        />
        <AntDesign 
          color='red' 
          name={numOfIncorrectSelections <= 1 ? 'heart' : 'hearto'}  
          size={18} 
          style={{ marginLeft: 2 }}
        />
        <AntDesign 
          color='red' 
          name={numOfIncorrectSelections <= 2 ? 'heart' : 'hearto'}  
          size={18} 
        />
      </View>
      <View 
        style={{ 
          flex: 2, 
          justifyContent: 'center',
        }}
      >
        <Text 
          style={{
            alignSelf: 'center',
            fontSize: 20,
          }}
        >
          {quiz[currentIndex]?.answer?.name}
        </Text>
      </View>
      <ProgressBar 
        height={10} 
        progress={(currentIndex / quiz.length)} 
        style={{ marginBottom: 2 }}
        width={null} 
      />
      <View style={{ flex: 4 }}>
        <FlatList
          data={quiz[currentIndex]?.choices}
          horizontal={false}  
          keyExtractor={c => c.name}
          numColumns={2}
          renderItem={({ item: choice }) => {
            const choiceStyle = { ...styles.flag }
            const isChoiceSelected = choiceIdsSelected.includes(choice.id)
            if (isChoiceSelected) {
              const isChoiceAnswer = choice.id === quiz[currentIndex]?.answer?.id
              choiceStyle.borderColor = isChoiceAnswer ? 'green' : 'red'
              choiceStyle.borderWidth = 5
            }
            return <Pressable
              disabled={choiceIdsSelected.includes(choice.id)}
              onPress={() => {
                setChoiceIdsSelected([...choiceIdsSelected, choice.id])

                if (choice.id === quiz[currentIndex]?.answer?.id) {
                  setTimeout(() => {
                    // TODO: Need to figure out what to do when a quiz is finished
                    if (currentIndex <= quiz.length - 1) {
                      setCurrentIndex((currentIndex) => currentIndex + 1)
                    }
                    setChoiceIdsSelected([])
                  }, 400)
                } else {
                  setNumOfIncorrectSelections((numOfIncorrectSelections) => numOfIncorrectSelections + 1)
                }
              }}
              style={choiceStyle}
            >
              <Image             
                resizeMode='center'
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