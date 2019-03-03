import React from 'react';
import { StyleSheet, Text, View ,AsyncStorage} from 'react-native';
import { FAB,Avatar } from 'react-native-paper';
import AwesomeButtonCartman from 'react-native-really-awesome-button/src/themes/cartman';
import ViewShot from "react-native-view-shot";
import User from './User'

export default class GameOver extends React.Component {
    state={
        usertitle:'',
        lives:0,
        username:'',
        initials:''
      }
      componentDidMount(){
        var { navigation } = this.props;
        var user = navigation.getParam('userobj');
        temp=user.getFirstName()[0]+user.getLastName()[0]
        this.setState({
          initials:temp,
          usertitle:user.getuser_title(),
          username:user.getFirstName()+' '+user.getLastName()
        })

      }
    takeScreenShot()
    {
      this.refs.viewShot.capture().then(uri => {
        console.log("Screenshot taken", uri);
      });
    }
    
    render() { 
        return (
            <View style={styles.container} >
            {/* <Appbar style={{top:1,bottom:0,justifyContent :'center', backgroundColor:"#ea1c22"
        ,position: 'absolute',left: 0,right: 0,bottom: 0,flexDirection: 'row',height:100,alignContent:"center"
        }}>
        <Text style={{color:"#ece000",textAlign:'center',fontFamily: 'monospace',fontSize: 25,
        fontWeight: 'bold',flex:1,flexDirection:"row"}}>Game Over</Text>
        </Appbar> */}
        
      <View style={styles.containerForcontent}  >
      <ViewShot ref="viewShot" options={{ format: "jpg", quality: 0.9 }}>
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
      <Text style={styles.textContent}>Game Over</Text>
      <Text style={styles.textContent}>{this.state.username}</Text>
      <Text style={styles.textContent}>You are {this.state.usertitle}</Text>
      
      
     </ViewShot>
     
        </View>
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
          }}>Play Again!</AwesomeButtonCartman>
          <AwesomeButtonCartman type="secondary" width={300} height={70} stretch={false}
        onPress={()=>{
          Linking.openURL("http://google.com");
         }}
        style={{borderBottomLeftRadius:60,borderBottomRightRadius:60}}
        >Rate us!</AwesomeButtonCartman>
      </View>
        )
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ededed',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    shadowColor: "#0000",
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    shadowOffset: {
      width: 10,
      height: 8,
    }
  },
  textContent:{
    color:"#ece000",textAlign:'center',fontSize: 35,
    fontWeight: 'bold',elevation:100
  },
  containerForcontent: {
    shadowColor: "#0000",
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    shadowOffset: {
      width: 10,
      height: 8,
    },
    elevation:100,
    height:'65%',
    width:'90%',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  },
});