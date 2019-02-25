import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';
import { Appbar,Avatar, Button,List,FlatList,FAB } from 'react-native-paper';
import AwesomeButtonCartman from 'react-native-really-awesome-button/src/themes/cartman';
import DraggableFlatList from 'react-native-draggable-flatlist'

export default class Login extends React.Component {
    state = {
        arr:[],
        correctArray:[],
        user:{}
      }
        static navigationOptions={
            header:null
          }
          renderItem = ({ item, index, move, moveEnd, isActive }) => {
            return (
              <TouchableOpacity
                style={{ 
                  height: 100, 
                  backgroundColor:  'orange',
                  alignItems: 'center', 
                  justifyContent: 'center' 
                }}
                onLongPress={move}
                onPressOut={moveEnd}
              >
                <Text style={{ 
                  fontWeight: 'bold', 
                  color: 'white',
                  fontSize: 32,
                }}>{item.label}</Text>
              </TouchableOpacity>
            )
          }
          componentWillMount(){
            var { navigation } = this.props;
            var user = navigation.getParam('userobj');
            var guessArray = navigation.getParam('guessArray');
            this.state.correctArray= navigation.getParam('correctArray');
            
            newdata= guessArray.map((d, index) => ({
              key: `item-${index}`,
              label: d,
              backgroundColor: `orange`,
            }))
            this.setState({
              data:newdata,
              user:user
            })
          }
          render() { 
            return (
          <View style={{ flex: 1 }}>
          <DraggableFlatList
            data={this.state.data}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => `draggable-item-${item.key}`}
            scrollPercent={5}
            onMoveEnd={({ data }) => this.setState({ data })}
          />
               <FAB.Group
              open={this.state.open}
              icon={this.state.open ? 'close' : 'add'}
              actions={[
                { icon: 'check', label: 'Submit', onPress: () =>{ 
                  console.log('here')
                  answerOutput=[]
                  for (item  in this.state.data) {
                    answerOutput=answerOutput.concat(this.state.data[item].label)
                  }
                  answerOutput=answerOutput.slice(0,this.state.correctArray.length)
                  flag=true
                  i=0
                  answerOutput.forEach(arrayitem => {
                    if(arrayitem != this.state.correctArray[i])
                      {
                        flag=false
                      }
                      i++
                  });
                  if(flag){
                    user=this.state.user
                    stage=user.getStage()
                    stage=stage+1
                    user.setStage(stage)
                    usertitle=user.getuser_title_index()
                    usertitle=usertitle+1
                    user.setuser_title_index(usertitle)
                    this.props.navigation.navigate('Correct',{userobj:user})
                  }
                  else{
                    user=this.state.user
                    livesLeft=user.getLives()
                    livesLeft=livesLeft-1
                    user.setLives(livesLeft)
                    if(livesLeft<=0){
                      this.props.navigation.navigate('GameOver',{userobj:user})
                    }
                    else{
                      this.props.navigation.navigate('Wrong',{userobj:user})
                    }
                  }
                  
                }},
                { icon: 'close', label: 'Reset', onPress: () => this.props.navigation.navigate('GamePlay') }
              ]}
              onStateChange={({ open }) => this.setState({ open })}
              onPress={() => {
                if (this.state.open) {
                  // do something if the speed dial is open
                }
              }}
            />
        </View>);
          }
        }

       
         