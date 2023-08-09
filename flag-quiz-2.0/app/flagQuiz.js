import { AntDesign } from '@expo/vector-icons'
import { useLocalSearchParams } from 'expo-router'
import { useState } from 'react'
import { 
  FlatList,
  Image,
  Pressable,
  Text, 
  useWindowDimensions,
  View, 
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import Hearts from '../components/Hearts'
import ProgressBar from '../components/ProgressBar'
import ResultQuiz from '../components/ResultQuiz' 

const FlagQuiz = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [choiceIdsSelected, setChoiceIdsSelected] = useState([])
  const [numOfIncorrectSelections, setNumOfIncorrectSelections] = useState(0)
  const insets = useSafeAreaInsets()
  const { height: screenHeight } = useWindowDimensions()
  const params = useLocalSearchParams() || {}
  const quiz = JSON.parse(params.quiz || []) 
  const isQuizDone = numOfIncorrectSelections >= 3 || quiz[currentIndex] === undefined

  return (
    <View
      style={{
        flex: 1,
        padding: 10,
        paddingTop: insets.top,
      }}
    >
      {
        isQuizDone ? <ResultQuiz numCorrectAnswers={currentIndex} /> : (
          <>
            <View style={{ flex: 2 }}>
              <Hearts numOfIncorrectSelections={numOfIncorrectSelections} />
              <View 
                style={{ 
                  flex: 1, 
                  justifyContent: 'center',
                }}
              >
                <Text 
                  style={{
                    alignSelf: 'center',
                    color: 'white',
                    fontSize: 20,
                  }}
                >
                  {quiz[currentIndex]?.answer?.name}
                </Text>
              </View>
              <ProgressBar progress={currentIndex / quiz.length} />
            </View>
            <View style={{ flex: 4 }}>
              <FlatList
                data={quiz[currentIndex]?.choices}
                horizontal={false}  
                keyExtractor={c => c.name}
                numColumns={2}
                renderItem={({ item: choice }) => {
                  const choiceStyle = { 
                    backgroundColor: '#495057',
                    borderRadius: 10,
                    flex: 1, 
                    height: screenHeight / 3.25, 
                    margin: screenHeight / 200,
                  }
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
                          setCurrentIndex(currentIndex + 1)
                          setChoiceIdsSelected([])
                        }, 400)
                      } else {
                        setNumOfIncorrectSelections(numOfIncorrectSelections + 1)
                      }
                    }}
                    style={choiceStyle}
                  >
                    <Image             
                      resizeMode='center'
                      source={{ uri: choice.flag }} 
                      style={{ flex: 1 }}
                    />
                  </Pressable>
                }}
              />
            </View>
          </>
        )
      }
    </View>
  )
}

export default FlagQuiz