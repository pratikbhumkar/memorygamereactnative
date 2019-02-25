
import React from 'react';

export default class User extends React.Component {
    User(){
        user_title=["Noob","Dominating","Mega King","Unstoppable","Wicked Sick","Monster","Godlike","Beyond Godlike"]
        lives=3
        FirstName="Default"
        LastName="default"
        stage=1
        user_title_index=0
    }
    getuser_title_index(){
        return this.user_title_index
    }
    setuser_title_index(user_title_index){
         this.user_title_index=user_title_index
    }
    getLives(){
        return this.lives
    }
    setLives(lives){
         this.lives=lives
    }
    
    getuser_title(){
        return this.user_title
    }
    setFirstName(FirstName){
        this.FirstName=FirstName
    }
    getFirstName(){
        return this.FirstName
    }
    setLastName(LastName){
        this.LastName=LastName
    }
    getLastName(){
        return this.LastName
    }
    setStage(stage){
        this.stage=stage
    }
    getStage(){
        return this.stage
    }
}