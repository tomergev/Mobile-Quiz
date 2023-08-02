import { 
  Text, 
  View, 
} from 'react-native'

const ResultQuiz = ({ numCorrectAnswers } = {}) => {
  return (
    <View
      style={{ 
        flex: 1,
        justifyContent: 'center',
      }}
    >
      <View 
        style={{
          alignSelf: 'center',
          flexDirection: 'column',
        }}
      >
        <Text>
          Result: {numCorrectAnswers}
        </Text>
        <Text>
          Best: (Feature coming soon)
        </Text>
      </View>
    </View>
  )
}

export default ResultQuiz
