import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import arrayShuffle from 'array-shuffle'
import { Appbar } from 'react-native-paper';
import AwesomeButtonCartman from 'react-native-really-awesome-button/src/themes/cartman';
import Video from 'react-native-video';

export default class GamePlay extends React.Component {
        state={
            title:[],
            word:'',
            time:0,
            guessArray1:[],
            guessArray2:[],
            time:[1500,1300,1100,900,700,500],
            lives:0,
            stage:0,
            usertitle:''
    }
    
    static navigationOptions={
        header:null
      }
    componentWillMount(){
      var { navigation } = this.props;
      var user = navigation.getParam('userobj');
      this.state.lives=user.getLives()
      this.state.stage=user.getStage()
      this.state.usertitle=user.getuser_title()
    }
    
    componentDidMount(){
      var randomWords = require('random-words');
      var { navigation } = this.props;
      var user = navigation.getParam('userobj');

      wordlimit=(user.getStage()*3)
      randomWordArray=randomWords({exactly: wordlimit, maxLength: 4})
      randomWordArray2=randomWords({exactly: wordlimit, maxLength: 4})

      for (let index = 0; index < randomWordArray.length; index++) {
        randomWordArray[index]= randomWordArray[index].toUpperCase();
        randomWordArray2[index]= randomWordArray2[index].toUpperCase();
      }

      this.state.guessArray1=randomWordArray.concat(randomWordArray2)
      this.state.guessArray2=arrayShuffle(this.state.guessArray1)
      
      this.state.lives=user.getLives()
      this.state.stage=user.getStage()

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
    setlivesIcon(){
      var tags=[]
      for (var index = 0; index < this.state.lives; index++) {
        tags.push(<Appbar.Action icon="favorite" key={index} size={17} color='white'/>)
      }
      return tags
    }
  render() {
       
    return (
      <View style={styles.container}>
      
      <Appbar style={{top:1,bottom:0,justifyContent :'center',backgroundColor:'#ea1c22'
        ,position: 'absolute',left: 0,right: 0,bottom: 0,flexDirection: 'row',height:100,alignContent:"center"
        ,borderBottomLeftRadius:30,borderBottomRightRadius:30}}>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
          {this.setlivesIcon()}
        <View
          style={{ flex: 1, paddingRight: 10 }}>
          <Text style={{color:"#ece000",textAlign:'center',fontFamily: 'monospace',fontSize: 20,fontWeight: 
          'bold',flex:1,flexDirection:"row",paddingTop:10,paddingLeft:15}}
          >STAGE:{this.state.stage}</Text>
        </View>
      </View>
        </Appbar>
      <View style={stylesForWord.container} time={1500} fade={0} borderRadius={20} marginTop={30} >
      <Text style={{color:"#ece000",textAlign:'center',fontFamily: 'monospace',fontSize: 40,fontWeight: 'bold'
      ,flex:1,flexDirection:"row"}}> {this.state.word} </Text>
    </View>
    {/* <AwesomeButtonCartman type="secondary" width={300} height={70} stretch={false}
          onPress={() => {
            this.props.navigation.navigate('GameOver',{userobj:user})
          }}
          style={{ borderBottomLeftRadius: 60, borderBottomRightRadius: 60, marginTop:50 }}
        >Get me out of this!</AwesomeButtonCartman> */}
        {/* <View style={styles.container }>
          
        </View> */}
        {/* <Appbar style={{top:0,bottom:1,justifyContent :'center',backgroundColor:'#ea1c22'
        ,position: 'absolute',left: 0,right: 0,bottom: 1,flexDirection: 'row',height:100,alignContent:"center"
        ,borderBottomLeftRadius:30,borderBottomRightRadius:30}}>
        <Text>{this.state.usertitle}</Text>
        </Appbar> */}
    </View>
    )}
}

  const styles = StyleSheet.create({
    container: {
      borderStyle:'solid',
       borderColor:'orange',
      elevation:100,
      flex: 1,
      backgroundColor: '#ededed',
      alignItems: 'center',
      justifyContent: 'center'
    },
  });
  const stylesForWord = StyleSheet.create({
    container: {
      elevation:100,
      height:'50%',
      width:'75%',
      flexDirection:'row',
      backgroundColor: '#ea1c22',
      alignItems: 'center',
      justifyContent: 'center'
    },
  });