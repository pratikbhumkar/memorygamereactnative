import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Avatar } from 'react-native-paper';
import ViewShot from "react-native-view-shot";

export default class Correct extends React.Component {
  state={
    usertitle:'',
    lives:0,
    initials:''
  }
    static navigationOptions={
        header:null
      }

     

      componentDidMount(){
        var { navigation } = this.props;
        var user = navigation.getParam('userobj');
        index=user.getuser_title_index()
        temp=user.getFirstName()[0]+user.getLastName()[0]

        this.setState({
          usertitle:user.getuser_title(),
          lives:user.getLives(),
          initials:temp
        })
        
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
        <View style={styles.container} >
        <View style={styles.containerForcontent}  borderRadius={20} borderStyle='solid' borderColor='#ea1c22'>
        <ViewShot ref="viewShot" options={{ format: "jpg", quality: 0.9 }}>
        <Avatar.Text size={130} label={this.state.initials.toLocaleUpperCase()} color="#ece000" style={{
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
        <Text style={styles.textContent}>{'Congratulations!'.toLocaleUpperCase()}</Text>
        <Text style={styles.textContent}>You are now {this.state.usertitle.toLocaleUpperCase()}</Text>
       {this.redirectToGameScreen()}
       </ViewShot>
       {/* <FAB
              style={{position: 'absolute',                                          
              bottom: 25,                                                    
              right: 25} }
              large
              icon="star"
              onPress={() => {
                this.takeScreenShot()
              }}/> */}
          </View>
        </View>
      )
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ededed',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textContent:{
      color:"#ece000",textAlign:'center',fontFamily: 'monospace',fontSize: 30,
      fontWeight: 'bold',elevation:100
    },
    containerForcontent: {
      borderWidth:5,
      elevation:100,
      height:'75%',
      width:'85%',
      flexDirection:'row',
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center'
    },
  });