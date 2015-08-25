'use strict';

// jshint devel:true
console.log('Welcome to Jeopardy!');

//KEYUP - type name
// $('#name').keyup(updateName);

// function updateName() {
//     var name = $('#name').val();
//     $('#user-name').text(name);
//     console.log('keyup! ' + name);
// }

// var questions = [{
//         name: 'Category One Here',
//         question: "question one here",
//         value: "$200"
//     }, {
//         name: 'Category Two Here',
//         question: "question one here",
//         value: "$200"

//     }
// ]

// Marc crappy suggestion
// function clickQuestion(question, value){


// }

// clickQuestion(questions[0])

// questions.name
// questions.question
// question.value


// var questions = [
//   {
//     name: 'Category 1',
//     clues: [
//             'question 1 here',
//             'question 2 here',
//             'question 3 here',
//             'question 4 here',
//             ]
//   },
//   {
//     name: 'Category 2',
//     clues: [
//             'question 1 here',
//             'question 2 here',
//             'question 3 here',
//             'question 4 here',
//             ]
//   },
//   {
//     name: 'Category 3',
//     clues: [
//             'question 1 here',
//             'question 2 here',
//             'question 3 here',
//             'question 4 here',
//             ]
//   },
//   {
//     name: 'Category 4',
//     clues: [
//             'question 1 here',
//             'question 2 here',
//             'question 3 here',
//             'question 4 here',
//             ]
//   },
// ];

// var values = ['$200', '$400', '$600', '$800'];



// jPrompt('Type something:', 'Prefilled value', 'Prompt Dialog', function(r) {
//     if( r ) alert('You entered ' + r);
// });


//SCORE FUNCTION
function updateScore() {
  chosen = ($(prompt).val());
  if (chosen == category.answer) {
    score++;
  }
  $('#score').html('Score: ' + category.value);
}


// update the score, duck positions, orientations, and state
// function step() {
// //this allows the score to update every 5 seconds
//   updateScore();

//QUESTIONS CLICK FUNCTION
//COLUMN ONE
function clickQuestion1() {
    var questionOne = [{
        name: 'Worldly',
        question: 'How many U.S. states border the Gulf of Mexico?',
        answer: 'WHAT IS FIVE'
    }];
    var value = '$200';
    $.each(questionOne, function(i, category) {
        alert('Category: ' + category.name);
        $.each(questionOne, function(i, question) {
            var response = prompt('Question: ' + category.question + 'Type your answer here (using all CAPS and no punctuation): ');
              if ( response === category.answer) {
                $(alert('That is correct!'));
              }
              else {
                $(alert('That is incorrect.'));
              }
        });
    });
    updateScore();
}

function clickQuestion2() {
    var questionTwo = [{
        name: 'Worldly',
        question: 'This continent is comprised of 51 countries.',
        answer: 'WHAT IS EUROPE'
    }];
    var value = '$400';
    $.each(questionTwo, function(i, category) {
        alert('Category: ' + category.name);
        $.each(questionTwo, function(i, question) {
            var response = prompt('Question: ' + category.question + 'Type your answer here (using all CAPS and no punctuation): ');
              if ( response === category.answer) {
                $(alert('That is correct!'));
                $updateScore();
              }
              else {
                $(alert('That is incorrect.'));
              }
        });
    });
    updateScore();
}

function clickQuestion3() {
    var questionThree = [{
        name: 'Worldly',
        question: 'question three here'
    }];
    var value = '$600';
    $.each(questionThree, function(i, category) {
        alert('Category: ' + category.name);
        $.each(questionThree, function(i, question) {
            prompt('Question: ' + category.question + ', value = ' + value);
        });
    });
}

function clickQuestion4() {
    var questionFour = [{
        name: 'Worldly',
        question: "question four here"
    }];
    var value = "$800";
    $.each(questionFour, function(i, category) {
        alert('Category: ' + category.name);
        $.each(questionFour, function(i, question) {
            prompt('Question: ' + category.question + ', value = ' + value);
        });
    });
}



//COLUMN TWO
function clickQuestion5() {
    var questionFive = [{
        name: 'Category Two Here',
        question: "question five here"
    }];
    var value = "$200";
    $.each(questionFive, function(i, category) {
        alert('Category: ' + category.name);
        $.each(questionFive, function(i, question) {
            prompt('Question: ' + category.question + ', value = ' + value);
        });
    });
}

function clickQuestion6() {
    var questionSix = [{
        name: 'Category Two Here',
        question: "question six here"
    }];
    var value = "$400";
    $.each(questionSix, function(i, category) {
        alert('Category: ' + category.name);
        $.each(questionSix, function(i, question) {
            prompt('Question: ' + category.question + ', value = ' + value);
        });
    });
}

function clickQuestion7() {
    var questionSeven = [{
        name: 'Category Two Here',
        question: "question seven here"
    }];
    var value = "$600";
    $.each(questionSeven, function(i, category) {
        alert('Category: ' + category.name);
        $.each(questionSeven, function(i, question) {
            prompt('Question: ' + category.question + ', value = ' + value);
        });
    });
}

function clickQuestion8() {
    var questionEight = [{
        name: 'Category Two Here',
        question: "question eight here"
    }];
    var value = "$800";
    $.each(questionEight, function(i, category) {
        alert('Category: ' + category.name);
        $.each(questionEight, function(i, question) {
            prompt('Question: ' + category.question + ', value = ' + value);
        });
    });
}



//COLUMN THREE
function clickQuestion9() {
    var questionNine = [{
        name: 'Category Three Here',
        question: "question nine here"
    }];
    var value = "$200";
    $.each(questionNine, function(i, category) {
        alert('Category: ' + category.name);
        $.each(questionNine, function(i, question) {
            prompt('Question: ' + category.question + ', value = ' + value);
        });
    });
}

function clickQuestion10() {
    var questionTen = [{
        name: 'Category Three Here',
        question: "question ten here"
    }];
    var value = "$400";
    $.each(questionTen, function(i, category) {
        alert('Category: ' + category.name);
        $.each(questionTen, function(i, question) {
            prompt('Question: ' + category.question + ', value = ' + value);
        });
    });
}

function clickQuestion11() {
    var questionEleven = [{
        name: 'Category Three Here',
        question: "question ten here"
    }];
    var value = "$600";
    $.each(questionEleven, function(i, category) {
        alert('Category: ' + category.name);
        $.each(questionEleven, function(i, question) {
            prompt('Question: ' + category.question + ', value = ' + value);
        });
    });
}

function clickQuestion12() {
    var questionTwelve = [{
        name: 'Category Three Here',
        question: "question twelve here"
    }];
    var value = "$800";
    $.each(questionTwelve, function(i, category) {
        alert('Category: ' + category.name);
        $.each(questionTwelve, function(i, question) {
            prompt('Question: ' + category.question + ', value = ' + value);
        });
    });
}


//COLUMN FOUR
function clickQuestion13() {
    var questionThirteen = [{
        name: 'Category Four Here',
        question: "question thirteen here"
    }];
    var value = "$200";
    $.each(questionThirteen, function(i, category) {
        alert('Category: ' + category.name);
        $.each(questionThirteen, function(i, question) {
            prompt('Question: ' + category.question + ', value = ' + value);
        });
    });
}

function clickQuestion14() {
    var questionFourteen = [{
        name: 'Category Four Here',
        question: "question fourteen here"
    }];
    var value = "$400";
    $.each(questionFourteen, function(i, category) {
        alert('Category: ' + category.name);
        $.each(questionFourteen, function(i, question) {
            prompt('Question: ' + category.question + ', value = ' + value);
        });
    });
}

function clickQuestion15() {
    var questionFifteen = [{
        name: 'Category Four Here',
        question: "question fifteen here"
    }];
    var value = "$600";
    $.each(questionFifteen, function(i, category) {
        alert('Category: ' + category.name);
        $.each(questionFifteen, function(i, question) {
            prompt('Question: ' + category.question + ', value = ' + value);
        });
    });
}

function clickQuestion16() {
    var questionSixteen = [{
        name: 'Category Four Here',
        question: "question sixteen here"
    }];
    var value = "$800";
    $.each(questionSixteen, function(i, category) {
        alert('Category: ' + category.name);
        $.each(questionSixteen, function(i, question) {
            prompt('Question: ' + category.question + ', value = ' + value);
        });
    });
}

//Clicking the values to make them react
//COLUMN ONE CLICKS
$('#questionOne').click(clickQuestion1);
$('#questionTwo').click(clickQuestion2);
$('#questionThree').click(clickQuestion3);
$('#questionFour').click(clickQuestion4);

//COLUMN TWO CLICKS
$('#questionFive').click(clickQuestion5);
$('#questionSix').click(clickQuestion6);
$('#questionSeven').click(clickQuestion7);
$('#questionEight').click(clickQuestion8);

//COLUMN THREE CLICKS
$('#questionNine').click(clickQuestion9);
$('#questionTen').click(clickQuestion10);
$('#questionEleven').click(clickQuestion11);
$('#questionTwelve').click(clickQuestion12);

//COLUMN FOUR CLICKS
$('#questionThirteen').click(clickQuestion13);
$('#questionFourteen').click(clickQuestion14);
$('#questionFifteen').click(clickQuestion15);
$('#questionSixteen').click(clickQuestion16);


//HIDE SQUARE AFTER CLICK
document.getElementById('questionOne').onclick = function(e) {
  e.target.style.visibility = 'hidden';
}
document.getElementById('questionTwo').onclick = function(e) {
  e.target.style.visibility = 'hidden';
}
document.getElementById('questionThree').onclick = function(e) {
  e.target.style.visibility = 'hidden';
}
document.getElementById('questionFour').onclick = function(e) {
  e.target.style.visibility = 'hidden';
}

document.getElementById('questionFive').onclick = function(e) {
  e.target.style.visibility = 'hidden';
}
document.getElementById('questionSix').onclick = function(e) {
  e.target.style.visibility = 'hidden';
}
document.getElementById('questionSeven').onclick = function(e) {
  e.target.style.visibility = 'hidden';
}
document.getElementById('questionEight').onclick = function(e) {
  e.target.style.visibility = 'hidden';
}

document.getElementById('questionNine').onclick = function(e) {
  e.target.style.visibility = 'hidden';
}
document.getElementById('questionTen').onclick = function(e) {
  e.target.style.visibility = 'hidden';
}
document.getElementById('questionEleven').onclick = function(e) {
  e.target.style.visibility = 'hidden';
}
document.getElementById('questionTwelve').onclick = function(e) {
  e.target.style.visibility = 'hidden';
}


document.getElementById('questionThirteen').onclick = function(e) {
  e.target.style.visibility = 'hidden';
}
document.getElementById('questionFourteen').onclick = function(e) {
  e.target.style.visibility = 'hidden';
}
document.getElementById('questionFifteen').onclick = function(e) {
  e.target.style.visibility = 'hidden';
}
document.getElementById('questionSixteen').onclick = function(e) {
  e.target.style.visibility = 'hidden';
}




//KEEPING SCORE - IF/ELSE STATEMENT
var score = 0;
function updateScore() {
    $('#score').empty().text(score);
}

// get everything going.
// $(function() {
//   $('.duck').on('click', function(event) {
//     die($(event.target));
//   });
//   setInterval(step, gameSpeed);
// });
