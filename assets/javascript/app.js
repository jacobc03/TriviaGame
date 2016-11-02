
//Questions with choices and which index holds the correct answer
var allQuestions = [{
    question: 'What is the last name of a bastard child born of the North?',
    choices: ['Sand', 'Storm', 'Snow', 'Flowers'],
    correctAnswer: 2
},
{
    question: 'Who pushed young Bran Stark out of the window in season one?',
    choices: ['Tyrion Lannister', 'Jammie Lannister', 'Theon Greyjoy', 'Khal Drogo'],
    correctAnswer: 1
},
{
    question: 'Who raised the Dire Wolf named Ghost?',
    choices: ['Jon Snow', 'Sansa Stark', 'Eddard Stark', 'Bran Stark'],
    correctAnswer: 0
},
{   
    question: 'How many Dragons does Daenerys Targaryen have?',
    choices: ['3', '1', '5', '6'],
    correctAnswer: 0
},
{
    question: 'What was the name of the sinister castle where Arya and Gendry were held prisoner in season two?',
    choices: ['Casterly Rock', 'Moat Cailin', 'Harrenhal', 'Kings Landing'],
    correctAnswer: 2
},
{   
    question: 'What is the name of the so-called King Beyond the Wall, the leader of the Wildings?',
    choices: ['Jeor Mormont', 'Mance Rayder', 'Qhorin Halfhand', 'Jon Snow'],
    correctAnswer: 1
},
{
    question: 'What is the name of a person that can enter the minds of animals?',
    choices: ['A sellsword', 'Grand Maester', 'A warg', 'A wizard'],
    correctAnswer: 2
},
{   
    question: 'Which Stark child was proclaimed King of the North?',
    choices: ['Rickon', 'Arya Stark', 'Bran Stark', 'Robb Stark'],
    correctAnswer: 3
}];
//Game Starts when the start button is clicked
$('#startButton').click(function(){
  $('#startButton').hide();

    var currentQuestion = 0;
    var rightAnswers=0;
    var wrongAnswers=0;
    var unAnswered=0;
    var div1= $("<div>");
    var div2= $('<div>');
    var div3= $('<div>');
    var div4= $('<div>');
    var div5= $('<div>');

    function gameAreaUpdate(){
        div1.html(allQuestions[currentQuestion].question);
        div2.html(allQuestions[currentQuestion].choices[0]);
        div3.html(allQuestions[currentQuestion].choices[1]);
        div4.html(allQuestions[currentQuestion].choices[2]);
        div5.html(allQuestions[currentQuestion].choices[3]);
        div1.attr('class',"questions");
        div2.attr('class',"answers ahover");
        div3.attr('class',"answers ahover");
        div4.attr('class',"answers ahover");
        div5.attr('class',"answers ahover");
    }
    function gameAreaScoreboard(){
        div1.html("All done, heres how you did!");
        div2.html("Correct Answers:"+rightAnswers);
        div3.html("Wrong Answers:"+rightAnswers);
        div4.html("Unanswered:"+unAnswered);
        div5.html().empty;
    }
//call gameAreaUpdate fuction when start button is clicked.
    gameAreaUpdate();
    $('#gameArea').append(div1).append(div2).append(div3).append(div4).append(div5);
 
    
    var time= 10;
    $("#timeRemain").html(time);
    var counter; 

    function startTimer(){
        counter=setInterval(timer, 1000);//1000 will  run it every 1 second
    }
//Start timer countdown when sart button is clicked
    startTimer();

    function timer(){
        time--;
        $("#timeRemain").html(time);
        if (time <= 0){
         clearInterval(counter);
         //counter ended, do something here
         $("#timeRemain").html(time);
         currentQuestion++;
         gameAreaUpdate();
         time=10;
         $("#timeRemain").html(time);
        startTimer();
        unAnswered++;
        console.log("unAnswered"+unAnswered);
         

      } 
     }

$('div.answers').click(function(){
    var userPick=$(this).html();
    if (userPick==allQuestions[currentQuestion].choices[allQuestions[currentQuestion].correctAnswer]) {
        rightAnswers++;
        currentQuestion++;
        time=10;
        $("#timeRemain").html(time);
        clearInterval(counter);
        startTimer();
        gameAreaUpdate();
        console.log("right:" + rightAnswers);
    } else{
        wrongAnswers++;
        currentQuestion++;
        time=10;
        $("#timeRemain").html(time);
        clearInterval(counter);
        startTimer();      
        gameAreaUpdate();
        console.log("wrong"+wrongAnswers);

    }
});




})


