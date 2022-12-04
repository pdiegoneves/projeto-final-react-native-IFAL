import { View, Image } from 'react-native';

import programing from '../../../assets/images/programing.gif'

function VisionScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         <Image source={programing} />
      </View>
    );
}
  
export default VisionScreen;