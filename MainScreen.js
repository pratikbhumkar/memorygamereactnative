import React from 'react';
import { StyleSheet, View, Image, AsyncStorage, Linking } from 'react-native';
import AwesomeButtonCartman from 'react-native-really-awesome-button/src/themes/cartman';

export default class MainScreen extends React.Component {
  state = {

  }
  static navigationOptions = {
    header: null
  }

  render() {
    var { navigation } = this.props;
    var user = navigation.getParam('userobj');

    return (
      <View style={styles.container}>
        <Image source={require('./game_logo.png')} style={{
          flex: 1,
          alignSelf: 'stretch',
          width: undefined,
          height: undefined
        }}></Image>

        <AwesomeButtonCartman type="secondary" width={300} height={70} stretch={false}
          onPress={() => {
            this.props.navigation.navigate('GamePlay', { userobj: user })
          }}
          style={{ borderBottomLeftRadius: 60, borderBottomRightRadius: 60 }}
        >PLAY</AwesomeButtonCartman>

        <AwesomeButtonCartman type="secondary" width={300} height={70} stretch={false}
          onPress={() => {
            try {
              AsyncStorage.removeItem('user');
              this.props.navigation.navigate('login')
            }
            catch (exception) {
            }
          }}
          style={{ borderBottomLeftRadius: 60, borderBottomRightRadius: 60 }}
        >RESET PROFILE</AwesomeButtonCartman>
         
        {/* <AwesomeButtonCartman type="secondary" width={300} height={70} stretch={false}
          onPress={() => {
            <Video source={{uri: "https://www.youtube.com/watch?v=Wp31HBq3BG4"}}   // Can be a URL or a local file.
            ref={(ref) => {
         this.player = ref
       }}/>
          }}
          style={{ borderBottomLeftRadius: 60, borderBottomRightRadius: 60 }}
        >Tutorial</AwesomeButtonCartman> */}


        <AwesomeButtonCartman type="secondary" width={300} height={70} stretch={false}
          onPress={() => {
            Linking.openURL("http://google.com");
          }}
          style={{ borderBottomLeftRadius: 60, borderBottomRightRadius: 60 }}
        >RATE US!</AwesomeButtonCartman>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  },backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
