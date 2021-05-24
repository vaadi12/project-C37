class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    question.hide();

    background("yellow");


    //write code to show a heading for showing the result of Quiz
    text("RESULT OF THE QUIZ",200,215)
    text("RED ONE IS WRONG ANSWER AND GREEN ONE IS RIGHT",200,350)

    //call getContestantInfo( ) here
    Contestant.getPlayerInfo();

    //write condition to check if contestantInfor is not undefined
     if(allContestants!==undefined){
       var displayAnswers=200
       for(var plr in allContestants){
         var Correctans="2"
         if(Correctans===allContestants[plr].answer)
           fill("green")
         else
         fill("red")
         displayAnswers=displayAnswers+30
         text(allContestants[plr].name+":"+allContestants[plr].answer,250,displayAnswers)
       }
     }


     
    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}
