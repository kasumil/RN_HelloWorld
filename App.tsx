/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Dimensions,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

function App(): React.JSX.Element {
  const [colorState, setColorState] = useState('white');
  const style = styles(colorState);

  const handlePress = () => {
    setColorState(prevState => (prevState === 'white' ? 'black' : 'white'));
  };

  return (
    <View style={style.container}>
      <ScrollView>
        <View style={style.scrollView}>
          <View style={style.view}>
            <Text style={style.text}>Hello, World!</Text>
            <Text style={style.text}>This is a sample React Native app.</Text>

            <TextInput
              style={[style.input, {marginTop: 20}]}
              value={colorState}
              readOnly
            />
            <Pressable
              style={({pressed}) => [
                style.button,
                pressed ? {opacity: 0.5} : null,
              ]}
              onPress={handlePress}>
              <Text style={style.buttonText}>Press Color Change</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = colorState =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colorState === 'white' ? '#fff' : '#000',
    },
    scrollView: {
      paddingTop: 20,
      paddingBottom: 20,
      paddingHorizontal: 10,
      width: WIDTH,
      height: HEIGHT,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
    view: {
      width: WIDTH - 40,
      padding: 20,
      backgroundColor: 'white',
      borderRadius: 10,
      marginBottom: 20,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    text: {
      fontSize: 16,
      color: '#333',
    },
    button: {
      backgroundColor: '#007BFF',
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
    },
    input: {
      height: 40,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 20,
    },
  });

export default App;
