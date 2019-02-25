import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,AsyncStorage } from 'react-native';
import { Appbar,Avatar, Button,List,FlatList,FAB } from 'react-native-paper';
import AwesomeButtonCartman from 'react-native-really-awesome-button/src/themes/cartman';
import User from './User'

export default class Login extends React.Component {
  state = {
    data: [...Array(20)].map((d, index) => ({
      key: `item-${index}`,
      label: index,
      backgroundColor: `rgb(${Math.floor(Math.random() * 255)}, ${index * 5}, ${132})`,
    })),
    firstname:'',
    lastname:'',
    user:{}
  }
    static navigationOptions={
        header:null
      }
   
  componentWillMount(){
    var userobj={}
    async function  getData(){
      // var user={}
      try{
        userobj=await AsyncStorage.getItem('user');
        userobj=JSON.parse(userobj)
        // console.log(userobj)
        // console.log(userobj.hasOwnProperty('FirstName'))
      }
      catch{
        console.log('caught')
      }
    }
    getData().then(()=>{
      if(!(userobj.hasOwnProperty('FirstName'))){

      }
      else{
        user=new User()
        user.setFirstName(userobj.FirstName)
        user.setLastName(userobj.LastName)
        user.setLives(userobj.lives)
        user.setStage(1)
        user.setuser_title_index(0)
        this.props.navigation.navigate('MainScreen',{userobj:user})
      }
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Appbar style={{top:1,bottom:0,justifyContent :'center'
        ,position: 'absolute',left: 0,right: 0,bottom: 0,flexDirection: 'row',height:100,alignContent:"center"
        ,borderBottomLeftRadius:30,borderBottomRightRadius:30}}>
        <Text style={{color:"white",textAlign:'center',fontFamily: 'monospace',fontSize: 30,fontWeight: 'bold',flex:1,flexDirection:"row"}}> Signup!</Text>
        </Appbar>
        <Avatar.Text size={80} label="PB" />
        
        
        <TextInput
        style={{height: 40, borderColor: 'gray',fontWeight: 'bold',width:250}}
        onChangeText={(fname)=>{
          this.state.firstname=fname
        }}
        placeholder="First Name goes here">
        </TextInput>
        
        <TextInput
        style={{height: 40, borderColor: 'gray',fontWeight: 'bold',width:250}} 
        onChangeText={(Lname)=>{
          this.state.lastname=Lname
        }} placeholder="Last Name goes here">
        </TextInput>
        
        <AwesomeButtonCartman type="secondary" width={300} height={70} stretch={false}
        style={{borderBottomLeftRadius:60,borderBottomRightRadius:60}}
        onPress={()=>{
          userobj=new User()
          userobj.setFirstName(this.state.firstname)
          userobj.setLastName(this.state.lastname)
          userobj.setLives(3)
          userobj.setStage(1)
          userobj.setuser_title_index(0)
          AsyncStorage.setItem('user',JSON.stringify(userobj))
          this.props.navigation.navigate('MainScreen',{userobj:userobj})
          }}>Submit</AwesomeButtonCartman>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
