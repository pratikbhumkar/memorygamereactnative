import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';
import { Appbar,Avatar, Button,List,FlatList,FAB } from 'react-native-paper';
import AwesomeButtonCartman from 'react-native-really-awesome-button/src/themes/cartman';

export default class Wrong extends React.Component {
    static navigationOptions={
        header:null
      }
      redirectToGameScreen(){
        setTimeout(() => {
          var { navigation } = this.props;
          var user = navigation.getParam('userobj');
          this.props.navigation.navigate('GamePlay',{userobj:user})
        }, 1500)
          
      }
      
    render() {
      return <View style={styles.container}>
      <Text style={{ 
        fontWeight: 'bold', 
        color: 'white',
        fontSize: 32,
      }}>Your answer was incorrect, Please try again!</Text>
       {this.redirectToGameScreen()}
      </View> 
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'yellow',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });