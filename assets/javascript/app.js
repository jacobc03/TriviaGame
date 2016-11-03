
//Questions with choices and which index holds the correct answer
var allQuestions = [{
    question: 'What is the last name of a bastard child born of the North?',
    choices: ['Sand', 'Storm', 'Snow', 'Flowers'],
    correctAnswer: 2,
    src: "../images/snow.gif"
},
{
    question: 'Who pushed young Bran Stark out of the window in season one?',
    choices: ['Tyrion Lannister', 'Jammie Lannister', 'Theon Greyjoy', 'Khal Drogo'],
    correctAnswer: 1,
    src: "../images/jammie.gig"
},
{
    question: 'Who raised the Dire Wolf named Ghost?',
    choices: ['Jon Snow', 'Sansa Stark', 'Eddard Stark', 'Bran Stark'],
    correctAnswer: 0,
    src: "../images/ghost.gif"
},
{   
    question: 'How many Dragons does Daenerys Targaryen have?',
    choices: ['3', '1', '5', '6'],
    correctAnswer: 0,
    src: "../images/dragon.gif"
},
{
    question: 'What was the name of the sinister castle where Arya and Gendry were held prisoner in season two?',
    choices: ['Casterly Rock', 'Moat Cailin', 'Harrenhal', 'Kings Landing'],
    correctAnswer: 2,
    src: "../images/harren.jpeg"
},
{   
    question: 'What is the name of the so-called King Beyond the Wall, the leader of the Wildings?',
    choices: ['Jeor Mormont', 'Mance Rayder', 'Qhorin Halfhand', 'Jon Snow'],
    correctAnswer: 1,
    src: "../images/mance.gif"
},
{
    question: 'What is the name of a person that can enter the minds of animals?',
    choices: ['A sellsword', 'Grand Maester', 'A warg', 'A wizard'],
    correctAnswer: 2,
    src: "../images/warg.gif"
},
{   
    question: 'Which Stark child was proclaimed King of the North?',
    choices: ['Rickon', 'Arya Stark', 'Bran Stark', 'Robb Stark'],
    correctAnswer: 3,
    src: "../images/robb.gif"
},
{   
    question: 'Here because of Uncaught TypeError: Cannot read property "question" of undefined(…)',
    choices: ['er', 'er', 'er', 'er'],
    correctAnswer: 3,
    src: "../images/got.jpeg"
}];

    var currentQuestion = 0;
    var rightAnswers=0;
    var wrongAnswers=0;
    var unAnswered=0;
    var currentQuestion=0;
    var time= 15;
    var div1= $("<div>");
    var div2= $('<div>');
    var div3= $('<div>');
    var div4= $('<div>');
    var div5= $('<div>');
    var div6= $('<div>');
    var div7= $('<div>');
    var div8= $('<div>');
    var div9= $('<div>');
//Game Starts when the start button is clicked
$('#startButton').click(function(){
    $('#restartButton').click(function(){
        location.reload()
    });

    $('#startButton').hide();
    $('#time').show();
     
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
        div1.html("All done, here's how you did!");
        div2.html("Correct Answers:"+rightAnswers);
        div3.html("Wrong Answers:"+wrongAnswers);
        div4.html("Unanswered:"+unAnswered);
        div5.html("");
        stopTimer();
//cheating with my reset button
        $('#restartButton').show();
      }
      function right(){
        var fix= currentQuestion;
        fix--;
        div6.html("Your Pick is Correct!").delay(3000).hide(0);
        div7.html(allQuestions[fix].choices[allQuestions[fix].src]).delay(3000).hide(0);
        div6.attr('class',"picked");
        div7.attr('class',"picked");
        $('#gameArea').append(div6).append(div7);
        showRight();

      }
      function wrong(){
        var fix= currentQuestion;
        fix--;
        div7.html("Your Pick is Wrong!").delay(3000).hide(0);
        div8.html("The correct answer is "+allQuestions[fix].choices[allQuestions[fix].correctAnswer]).delay(3000).hide(0);
        div9.html(allQuestions[fix].choices[allQuestions[fix].src]).delay(3000).hide(0);
        div7.attr('class',"picked");
        div8.attr('class',"picked");
        div9.attr('class',"picked");
        $('#gameArea').append(div7).append(div8).append(div9);
        showWrong();

      }
       function showRight(){
            div6.html().show;
            div7.html().show;
        }
        function showWrong(){
            div7.html().show;
            div8.html().show;
            div9.html().show;
        }
      
//call gameAreaUpdate fuction when start button is clicked.
    if (currentQuestion<=8) {
        gameAreaUpdate();
        $('#gameArea').append(div1).append(div2).append(div3).append(div4).append(div5);
    };
//
    
    $("#timeRemain").html(time);
    var counter; 

    function startTimer(){
        counter=setInterval(timer, 1000);//1000 will  run it every 1 second
    }
//This function stops the timer when called upon
    function stopTimer(){
        clearTimeout(counter);
    }
//Start timer countdown when start button is clicked
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
         time=15;
         $("#timeRemain").html(time);
        startTimer();
        unAnswered++;
        console.log("unAnswered"+unAnswered);
        if (currentQuestion>=7) {gameAreaScoreboard();}
        console.log(currentQuestion);   
        } 
     }

    $('div.answers').click(function(){
        var userPick=$(this).html();
            if (userPick==allQuestions[currentQuestion].choices[allQuestions[currentQuestion].correctAnswer]) {
            rightAnswers++;
            currentQuestion++;
            time=15;
            $("#timeRemain").html(time);
            clearInterval(counter);
            startTimer(); 
            gameAreaUpdate();
            right();
            console.log("right:" + rightAnswers);
                if (currentQuestion>=8) {
                gameAreaScoreboard();
                }
            console.log(currentQuestion);
        
            } else if (userPick!=allQuestions[currentQuestion].choices[allQuestions[currentQuestion].correctAnswer]) {
            wrongAnswers++;
            currentQuestion++;
            time=15;
            $("#timeRemain").html(time);
            clearInterval(counter);
            startTimer();      
            gameAreaUpdate();
            wrong();
            console.log("wrong"+wrongAnswers);
                if (currentQuestion>=8) {
                gameAreaScoreboard();
                }
            console.log(currentQuestion);
            } 
    });
})
/*function pick(){
    $("#gameArea").append("you are correct");
setTimeout(function() { $("#gameArea").hide(); }, 3000);
$("#gameArea").show().replaceWith(gameAreaUpdate());
}*/






