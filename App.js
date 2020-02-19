import React from 'react';
import {SafeAreaView,View,Text} from 'react-native';
import Homepage from './components/Homepage';






const App: () => React$Node = () => {
  return (
    <SafeAreaView>
         <View>
               <Text>Dclf Hub</Text>
              <Homepage/>
         </View>

      </SafeAreaView>

  );
};


export default App;
