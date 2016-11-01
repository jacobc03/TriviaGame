var allQuestions = [{
    question: 'What is the last name of a bastard child born of the North?',
    choices: ['Sand', 'Storm', 'Snow', 'Flowers'],
    correctAnswer: 3
},
{
    question: 'Who pushed young Bran Stark out of the window in season one?',
    choices: ['Tyrion Lannister', 'Jammie Lannister', 'Theon Greyjoy', 'Khal Drogo'],
    correctAnswer: 2
},
{
    question: 'Who raised the Dire Wolf named Ghost?',
    choices: ['Jon Snow', 'Sansa Stark', 'Eddard Stark', 'Bran Stark'],
    correctAnswer: 1
},
{   
    question: 'How many Dragons does Daenerys Targaryen have?',
    choices: ['3', '1', '5', '6'],
    correctAnswer: 1
},
{
    question: 'What was the name of the sinister castle where Arya and Gendry were held prisoner in season two?',
    choices: ['Casterly Rock', 'Moat Cailin', 'Harrenhal', 'Kings Landing'],
    correctAnswer: 3
},
{   
    question: 'What is the name of the so-called King Beyond the Wall, the leader of the Wildings?',
    choices: ['Jeor Mormont', 'Mance Rayder', 'Qhorin Halfhand', 'Jon Snow'],
    correctAnswer: 2
},
{
    question: 'What is the name of a person that can enter the minds of animals?',
    choices: ['A sellsword', 'Grand Maester', 'A warg', 'A wizard'],
    correctAnswer: 3
},
{   
    question: 'Which Stark child was proclaimed King of the North?',
    choices: ['Rickon', 'Arya Stark', 'Bran Stark', 'Robb Stark'],
    correctAnswer: 4
}];

//$('#startButton').click(function(){

//})
var x = 0;
var div1= $("<div>").html(allQuestions[x].question);
var div2= $('<div>').html(allQuestions[x].choices[0]);
var div3= $('<div>').html(allQuestions[x].choices[1]);
var div4= $('<div>').html(allQuestions[x].choices[2]);
var div5= $('<div>').html(allQuestions[x].choices[3]);
div1.attr('class',"questions");
div2.attr('class',"answers");
div3.attr('class',"answers");
div4.attr('class',"answers");
div5.attr('class',"answers");
$('#gameArea').append(div1).append(div2).append(div3).append(div4).append(div5);

var time= 30;
$("#timeRemain").html(time);



