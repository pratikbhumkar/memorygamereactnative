

export default class User {
    User(){
        lives=3
        usertitle=''
        FirstName="Default"
        LastName="default"
        stage=1
        user_title_index=0
    }
    getuser_title_index(){
        return this.user_title_index
    }
    setuser_title_index(user_title_index){
        user_title_array=['Noob','Beginner','Dominating','Mega King','Unstoppable','Wicked Sick','Monster','Godlike','Beyond Godlike']
        this.usertitle=user_title_array[user_title_index]
        this.user_title_index=user_title_index
    }
    getLives(){
        return this.lives
    }
    setLives(lives){
         this.lives=lives
    }
    
    getuser_title(){
        return this.usertitle
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