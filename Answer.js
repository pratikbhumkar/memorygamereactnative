import React from 'react';
import {  Text, View,TouchableOpacity } from 'react-native';
import { FAB } from 'react-native-paper';

import DraggableFlatList from 'react-native-draggable-flatlist'
// import { Appbar } from 'react-native-paper';
export default class Answer extends React.Component {
    state = {
        arr:[],
        correctArray:[],
        user:{}
      }
        static navigationOptions={
            header:null
          }
          renderItem = ({ item, move, moveEnd }) => {
            return (
              <TouchableOpacity
                style={{ 
                  height: 100, 
                  backgroundColor:  '#ea1c22',
                  alignItems: 'center', 
                  elevation:100,
                  justifyContent: 'center',
                  marginTop: 4,
                  marginBottom: 8 
                }}
                onLongPress={move}
                onPressOut={moveEnd}
              >
                <Text style={{ 
                  fontWeight: 'bold', 
                  color: '#ece000',
                  elevation:300,
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
              backgroundColor: `white`,
            }))
            this.setState({
              data:newdata,
              user:user
            })
          }
          render() { 
            return (
          <View style={{ flex: 1 ,borderStyle:'solid', backgroundColor:'#ededed',
          borderColor:'#ededed',borderWidth:10}}>
          {/* <Appbar style={{top:1,bottom:0,justifyContent :'center',backgroundColor:'#ea1c22'
        ,position: 'absolute',left: 0,right: 0,bottom: 0,flexDirection: 'row',height:100,alignContent:"center"
        ,borderBottomLeftRadius:30,borderBottomRightRadius:30}}>
          <Text style={{color:"#ece000",textAlign:'center',fontFamily: 'monospace',fontSize: 20,fontWeight: 
          'bold'}}
          >Answer</Text>
        </Appbar> */}
          <DraggableFlatList
            data={this.state.data}
            renderItem={this.renderItem}
            keyExtractor={(item) => `draggable-item-${item.key}`}
            scrollPercent={5}
            onMoveEnd={({ data }) => this.setState({ data })}
          />
               <FAB.Group
              open={this.state.open}
              icon={this.state.open ? 'close' : 'add'}
              actions={[
                { icon: 'check', label: 'Submit', onPress: () =>{ 
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