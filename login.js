import React from 'react';
import { StyleSheet, Text, View,TextInput,AsyncStorage } from 'react-native';
import { Appbar,Avatar } from 'react-native-paper';
import AwesomeButtonCartman from 'react-native-really-awesome-button/src/themes/cartman';
import User from './User'

export default class Login extends React.Component {
  state = {
    firstname:'',
    lastname:'',
    user:{},
    initials:''
  }
    static navigationOptions={
        header:null
      }
   
  componentWillMount(){
    var userobj={}
    async function  getData(){
      try{
        userobj=await AsyncStorage.getItem('user');
        userobj=JSON.parse(userobj)
      }
      catch{
        console.log('caught')
      }
    }
    getData().then(()=>{
      if(userobj !== null){
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
      }
      
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Appbar style={{top:1,bottom:0,justifyContent :'center'
        ,position: 'absolute',left: 0,right: 0,bottom: 0,flexDirection: 'row',height:100,
        backgroundColor:"#ea1c22",alignContent:"center"
        }}>
        <Text style={{color:"#ece000",textAlign:'center',fontFamily: 'monospace',fontSize: 30,
        fontWeight: 'bold',flex:1,flexDirection:"row"}}>SIGN UP!</Text>
        </Appbar>

        <Avatar.Text size={130} label={this.state.initials} color="#ece000" style={{
           color:"#ece000",
           padding:20,
           backgroundColor:'#ea1c22',
           shadowColor: "#000000",
           shadowOpacity: 0.8,
           shadowRadius: 2,
           shadowOffset: {
             height: 10,
             width: 10
           }
        }}/>
        
        
        <TextInput
        style={{height: 40, borderColor: 'gray',fontWeight: 'bold',width:250}}
        onChangeText={(fname)=>{
          this.state.firstname=fname
          this.setState({
            initials:fname[0].toLocaleUpperCase()
          })
          
        }}
        placeholder="First Name goes here">
        </TextInput>
        
        <TextInput
        style={{height: 40, borderColor: 'gray',fontWeight: 'bold',width:250}} 
        onChangeText={(Lname)=>{
          this.state.lastname=Lname.toLocaleUpperCase()
          temp=this.state.initials.toLocaleUpperCase()
          temp=this.state.firstname[0]+Lname[0]
          this.setState({
            initials:temp.toLocaleUpperCase()
          })
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
          
          }}>SUBMIT</AwesomeButtonCartman>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ededed',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
