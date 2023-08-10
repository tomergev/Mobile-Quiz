import { 
  Image,
  Pressable,
} from 'react-native'

const OptionFlag = ({ 
  answer,
  choice,
  choiceIdsSelected,
  currentIndex,
  numOfIncorrectSelections,
  screenHeight,
  setChoiceIdsSelected,
  setCurrentIndex,
  setNumOfIncorrectSelections,
}) => {
  const createStyle = () => {
    const choiceStyle = { 
      backgroundColor: '#495057',
      borderRadius: 10,
      flex: 1, 
      margin: screenHeight / 200,
    }
    const choiceId = choice?.id
    const isChoiceSelected = choiceIdsSelected.includes(choiceId)
    if (isChoiceSelected) {
      const isChoiceAnswer = choiceId === answer?.id
      choiceStyle.borderColor = isChoiceAnswer ? 'green' : 'red'
      choiceStyle.borderWidth = 5
    }

    return choiceStyle
  }
  const onPress = () => {
    const choiceId = choice?.id
    setChoiceIdsSelected([...choiceIdsSelected, choice?.id])

    if (choiceId === answer?.id) {
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1)
        setChoiceIdsSelected([])
      }, 400)
    } else {
      setNumOfIncorrectSelections(numOfIncorrectSelections + 1)
    }
  }

  return (
    <Pressable
      disabled={choiceIdsSelected.includes(choice?.id)}
      onPress={onPress}
      style={createStyle}
    >
      <Image             
        resizeMode='center'
        source={{ uri: choice?.flag }} 
        style={{ flex: 1 }}
      />
    </Pressable>
  )
}

export default OptionFlag