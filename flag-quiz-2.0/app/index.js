import { useNavigation } from 'expo-router'
import { 
  useWindowDimensions,
  View, 
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles } from '../styles'

import AfricaSvg from '../assets/africa.svg'
import AsiaSvg from '../assets/asia.svg'
import AustraliaSvg from '../assets/australia.svg' 
import EuropeSvg from '../assets/europe.svg'
import NorthAmerica from '../assets/northAmerica.svg'
import SouthAmerica from '../assets/southAmerica.svg'

const App = () => {
  const navigation = useNavigation()
  const insets = useSafeAreaInsets()
  const { height: screenHeight } = useWindowDimensions()

  return <View style={{ flex: 1, paddingTop: insets.top }}>
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <View 
        style={{ 
          flex: 1,
          ...styles.shadow
        }}
        >
        <AustraliaSvg
          height={screenHeight / 5}
          onPress={() => navigation.navigate('DashboardQuizes', { continent: 'Oceania' })}
          style={{ alignSelf: 'center' }}
          width='100%'
        />

      </View>
      <View 
        style={{ 
          flex: 1,
          ...styles.shadow,
        }}
      >
        <NorthAmerica 
          height={screenHeight / 5}
          onPress={() => navigation.navigate('DashboardQuizes', { continent: 'North America' })}
          style={{ alignSelf: 'center' }}
          width='100%'
        />

      </View>
    </View>

    <View style={{ flex: 1, flexDirection: 'row' }}>
      <AfricaSvg 
        height={screenHeight / 5}
        onPress={() => navigation.navigate('DashboardQuizes', { continent: 'Africa' })}
        style={{ alignSelf: 'center' }}
        width='50%'
      />
      <SouthAmerica
        height={screenHeight / 5}
        onPress={() => navigation.navigate('DashboardQuizes', { continent: 'South America' })}
        style={{ alignSelf: 'center' }}
        width='50%'
      />
    </View>

    <View style={{ flex: 1, flexDirection: 'row' }}>
      <AsiaSvg 
        height={screenHeight / 5}
        onPress={() => navigation.navigate('DashboardQuizes', { continent: 'Asia' })}
        style={{ alignSelf: 'center' }}
        width='50%'
      />
      <EuropeSvg
        height={screenHeight / 5}
        onPress={() => navigation.navigate('DashboardQuizes', { continent: 'Europe' })}
        style={{ alignSelf: 'center' }}
        width='50%'
      />
    </View>
  </View>
}

export default App
