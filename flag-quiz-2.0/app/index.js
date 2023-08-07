import { Link } from 'expo-router'
import { 
  FlatList, 
  useWindowDimensions,
  View, 
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import AsiaSvg from '../assets/asia.svg'
import AfricaSvg from '../assets/africa.svg'
import EuropeSvg from '../assets/europe.svg'
import NorthAmerica from '../assets/northAmerica.svg'
import SouthAmerica from '../assets/southAmerica.svg'

const CONTINENTS = [
  'Africa', 
  'Asia', 
  'Europe', 
  'North America', 
  'Oceania', 
  'South America', 
]

const App = () => {
  const insets = useSafeAreaInsets()

  return <View style={{ flex: 1, paddingTop: insets.top }}>
    <FlatList 
      data={CONTINENTS}
      numColumns={2}
      renderItem={({ item: continent }) => {
        return (
          <View style={{ flex: 1 }}>
            <Link 
              style={{ fontSize: 30 }}
              href={{
                pathname: '/DashboardQuizes',
                params: { continent },
              }}
            >
              {continent}
            </Link>
          </View>
        )
      }}
    />

    <AsiaSvg
      width="100%"
      height="200"
    />  
    <NorthAmerica
      width="100%"
      height="200"
    />  
    <SouthAmerica 
      width="100%"
      height="200"
    />  
    <EuropeSvg 
      width="100%"
      height="200"
    />  
    <AfricaSvg 
      width="100%"
      height="200"
    />  

    {/* <SvgUri
      width="100%"
      height="200"
      uri="https://upload.wikimedia.org/wikipedia/commons/3/3d/Asian_states_map_1.svg"
    />
    <SvgUri
      width="100%"
      height="200"
      uri="https://svgsilh.com/svg/151588.svg"
    />
    <SvgUri
      width="100%"
      height="200"
      uri="https://svgsilh.com/svg_v2/23571.svg"
    />
    <SvgUri
      width="100%"
      height="200"
      uri="https://upload.wikimedia.org/wikipedia/commons/6/66/Blank_Map-Africa.svg"
    /> */}
    
    
    {/* <Image
      width="100%"
      height="200"
      source='https://freesvg.org/img/azie.png'
    /> */}
  </View>
}

export default App
