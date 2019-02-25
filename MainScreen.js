import React from 'react';
import { StyleSheet, Text, View,TextInput,Image,AsyncStorage } from 'react-native';
import { Appbar,FAB  } from 'react-native-paper';
import AwesomeButtonCartman from 'react-native-really-awesome-button/src/themes/cartman';
// import gamelogo from './assets/game_logo.PNG'
export default class Login extends React.Component {
    static navigationOptions={
        header:null
      }

  

  render() {
    var { navigation } = this.props;
    var user = navigation.getParam('userobj');
   
    return (
    <View style={styles.container}>
        <Image source={require('./game_logo.png')} style={{flex: 1,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined}}></Image>
        <AwesomeButtonCartman type="secondary" width={300} height={70} stretch={false}
        onPress={()=>{
           this.props.navigation.navigate('GamePlay',{userobj:user})
          }}
        style={{borderBottomLeftRadius:60,borderBottomRightRadius:60}}
        >Play</AwesomeButtonCartman>
        
        <AwesomeButtonCartman type="secondary" width={300} height={70} stretch={false}
        style={{borderBottomLeftRadius:60,borderBottomRightRadius:60}}
        >Tutorial</AwesomeButtonCartman>

        <AwesomeButtonCartman type="secondary" width={300} height={70} stretch={false}
        onPress={()=>{
          this.props.navigation.navigate('login',{userobj:user})
         }}
        style={{borderBottomLeftRadius:60,borderBottomRightRadius:60}}
        >Reset Profile</AwesomeButtonCartman>

        <FAB
            style={{position: 'absolute',                                          
            bottom: 25,                                                    
            right: 25} }
            large
            icon="star"
            onPress={() => console.log('Pressed')}
        />
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
    },
  });