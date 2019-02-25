import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';
import { Appbar,Avatar, Button,List,FlatList,FAB } from 'react-native-paper';
import AwesomeButtonCartman from 'react-native-really-awesome-button/src/themes/cartman';
import ViewShot from "react-native-view-shot";

export default class Correct extends React.Component {
    static navigationOptions={
        header:null
      }
      redirectToGameScreen(){
        setTimeout(() => {
          var { navigation } = this.props;
          var user = navigation.getParam('userobj');
          this.props.navigation.navigate('GamePlay',{userobj:user})
        }, 3000)
          
      }
      takeScreenShot()
      {
        this.refs.viewShot.capture().then(uri => {
          console.log("Screenshot taken", uri);
        });
      }
      
    render() {
      return(
      <View style={styles.container}>
      <ViewShot ref="viewShot" options={{ format: "jpg", quality: 0.9 }}>
      <Text style={{ 

        fontWeight: 'bold', 
        color: 'red',
        fontSize: 32,
      }}>Congratulations!</Text>
      <Text style={{ 
        fontWeight: 'bold', 
        color: 'red',
        fontSize: 32,
      }}>On To the next stage!</Text>
     {this.redirectToGameScreen()}
     </ViewShot>
     <FAB
            style={{position: 'absolute',                                          
            bottom: 25,                                                    
            right: 25} }
            large
            icon="star"
            onPress={() => {
              this.takeScreenShot()
            }}
        />
      </View>
      )
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