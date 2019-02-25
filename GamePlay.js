import React from 'react';
import { StyleSheet, Text, View,Animated } from 'react-native';
import arrayShuffle from 'array-shuffle'
import { StackActions, NavigationActions } from 'react-navigation'
export default class GamePlay extends React.Component {
        state={
            title:[],
            word:'',
            time:0,
            guessArray1:[],
            guessArray2:[],
            time:[1500,1300,1100,900,700,500]
    }
    
    static navigationOptions={
        header:null
      }
    componentDidMount(){
      var randomWords = require('random-words');
      var { navigation } = this.props;
      var user = navigation.getParam('userobj');

      wordlimit=(user.getStage()*3)
      randomWordArray=randomWords({exactly: wordlimit, maxLength: 4})
      randomWordArray2=randomWords({exactly: wordlimit, maxLength: 4})
      
      this.state.guessArray1=randomWordArray.concat(randomWordArray2)
      this.state.guessArray2=arrayShuffle(this.state.guessArray1)
      
      lives=user.getLives()
      attempts=0
      var name=setInterval(() => {
           this.setState({
               word:randomWordArray[attempts]
           })
           
           if(attempts>=wordlimit){
               this.setState({
                word:'' 
               })
               clearInterval(name)
               this.props.navigation.navigate('Answer',{userobj:user,guessArray:this.state.guessArray2,
                correctArray:randomWordArray})
           }
           else{
            attempts++
           }
      },  this.state.time[0]);
       
    }
  render() {
    
    
    return (
      <View style={styles.container}>
      <View style={stylesForWord.container} time={1500} fade={0} >
      <Text style={{color:"orange",textAlign:'center',fontFamily: 'monospace',fontSize: 40,fontWeight: 'bold'
      ,flex:1,flexDirection:"row"}}> {this.state.word} </Text>
    </View>
    </View>
    )}
}



  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'yellow',
      alignItems: 'center',
      justifyContent: 'center'
    },
  });
  const stylesForWord = StyleSheet.create({
    container: {
      height:250,
      width:250,
      flexDirection:'row',
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center'
    },
  });
