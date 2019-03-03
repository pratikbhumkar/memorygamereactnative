import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
export default class Wrong extends React.Component {
  state={
    usertitle:'',
    lives:0,
    initials:''
  }
  componentDidMount(){
    var { navigation } = this.props;
    var user = navigation.getParam('userobj');
    temp=user.getFirstName()[0]+user.getLastName()[0]
    index=user.getuser_title_index()
    this.setState({
      usertitle:user.getuser_title(),
      lives:user.getLives(),
      initials:temp
    })
  }
    static navigationOptions={
        header:null
      }
      redirectToGameScreen(){
        setTimeout(() => {
          var { navigation } = this.props;
          var user = navigation.getParam('userobj');
          this.props.navigation.navigate('GamePlay',{userobj:user})
        }, 2000)
      }
    render() {
      return  <View style={styles.container} >
                <View style={styles.containerForcontent}  borderRadius={20} borderStyle='solid' >
                
                <Text style={styles.textContent}>WRONG!</Text>
                {this.redirectToGameScreen()}
                </View> 
              </View>
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
      color:"orange",textAlign:'center',fontFamily: 'monospace',fontSize: 35,
      fontWeight: 'bold',elevation:100
    },
    containerForcontent: {
      elevation:100,
      height:'75%',
      width:'85%',
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center'
    },
  });