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

//------------------------------SHOW AND HIDE
$(document).ready(function() {
    $('#show').click(function() {
        $('.row').toggle();
    });
});

//------------------------------KEEPING SCORE - IF/ELSE STATEMENT
var score = 0;
var sum = 0;

function updateScore(score) {
    sum += score;
    $('#score').html('$' + sum);
}

//------------------------------QUESTIONS CLICK FUNCTION
//------------------------------COLUMN ONE
function clickQuestion1() {
    var questionOne = [{
        name: 'Worldly',
        question: 'This was the official language in 87 nations and territories in 1994',
        answer: 'WHAT IS ENGLISH'
    }];
    var value = '200';
    $.each(questionOne, function(i, category) {
        alert('Category: ' + category.name);
        $.each(questionOne, function(i, question) {

            var response = prompt('Question: ' + category.question + '\n Type your answer here: ' + '\n \n Helpful Hint: use all CAPS and start with (WHAT IS).');

            if (response == category.answer) {
                $(alert('That is correct!'));
                updateScore(parseInt(value));

            }
            else {
                $(alert('That is incorrect.'));
            }
        });
    });
}

//PLACEHOLDER FOR QUESTIONSD

function clickQuestion2() {
    var questionTwo = [{
        name: 'Worldly',
        question: 'This continent is comprised of 51 countries.',
        answer: 'WHAT IS EUROPE'
    }];
    var value = '400';
    $.each(questionTwo, function(i, category) {
        alert('Category: ' + category.name);
        $.each(questionTwo, function(i, question) {

            var response = prompt('Question: ' + category.question + '\n Type your answer here: ' + '\n Helpful Hint: use all CAPS and start with (WHAT IS).');

            if (response == category.answer) {
                $(alert('That is correct!'));
                updateScore(parseInt(value));

            }
            else {
                $(alert('That is incorrect.'));
            }
        });
    });
}

function clickQuestion3() {
    var questionThree = [{
        name: 'Worldly',
        question: 'The third-largest continent in square miles.',
        answer: 'WHAT IS NORTH AMERICA'
    }];
    var value = '$600';
    $.each(questionThree, function(i, category) {
        alert('Category: ' + category.name);
        $.each(questionThree, function(i, question) {
            var response = prompt('Question: ' + category.question + 'Type your answer here (using all CAPS and no punctuation): ');
            if (response === category.answer) {
                $(alert('That is correct!'));
                updateScore(value);
            }
            else {
                $(alert('That is incorrect.'));
            }
        });
    });
}

function clickQuestion4() {
    var questionFour = [{
        name: 'Worldly',
        question: 'This country is only bordered by Spain.',
        answer: 'WHAT IS PORTUGAL'
    }];
    var value = "$800";
    $.each(questionFour, function(i, category) {
        alert('Category: ' + category.name);
        $.each(questionFour, function(i, question) {
            var response = prompt('Question: ' + category.question + 'Type your answer here (using all CAPS and no punctuation): ');
            if (response === category.answer) {
                $(alert('That is correct!'));
                updateScore(value);
            }
            else {
                $(alert('That is incorrect.'));
            }
        });
    });
}



//------------------------------COLUMN TWO
function clickQuestion5() {
    var questionFive = [{
        name: 'Movies',
        question: "This late 90s film starred Richard Gere and Julia Roberts.",
        answer: 'WHAT IS THE RUNAWAY BRIDE'
    }];
    var value = "$200";
    $.each(questionFive, function(i, category) {
        alert('Category: ' + category.name);
        $.each(questionFive, function(i, question) {
            var response = prompt('Question: ' + category.question + 'Type your answer here (using all CAPS and no punctuation): ');
            if (response === category.answer) {
                $(alert('That is correct!'));
                updateScore(value);
            }
            else {
                $(alert('That is incorrect.'));
            }
        });
    });
}

function clickQuestion6() {
    var questionSix = [{
        name: 'Movies',
        question: 'This 1975 blockbuster shows Roy Scheider utter: "We need a bigger boat."',
        answer: 'WHAT IS JAWS'
    }];
    var value = "$400";
    $.each(questionSix, function(i, category) {
        alert('Category: ' + category.name);
        $.each(questionSix, function(i, question) {
            var response = prompt('Question: ' + category.question + 'Type your answer here (using all CAPS and no punctuation): ');
            if (response === category.answer) {
                $(alert('That is correct!'));
                updateScore(value);
            }
            else {
                $(alert('That is incorrect.'));
            }
        });
    });
}

function clickQuestion7() {
    var questionSeven = [{
        name: 'Movies',
        question: 'This Adam Sandler comedy featured Bob Barkers screen debut.',
        answer: 'WHAT IS HAPPY GILMORE'
    }];
    var value = "$600";
    $.each(questionSeven, function(i, category) {
        alert('Category: ' + category.name);
        $.each(questionSeven, function(i, question) {
            var response = prompt('Question: ' + category.question + 'Type your answer here (using all CAPS and no punctuation): ');
            if (response === category.answer) {
                $(alert('That is correct!'));
                updateScore(value);
            }
            else {
                $(alert('That is incorrect.'));
            }
        });
    });
}

function clickQuestion8() {
    var questionEight = [{
        name: 'Movies',
        question: 'This title role was played by more than 40 characters in a 1995 Oscar-winning movie',
        answer: 'WHAT IS BABE'
    }];
    var value = "$800";
    $.each(questionEight, function(i, category) {
        alert('Category: ' + category.name);
        $.each(questionEight, function(i, question) {
            var response = prompt('Question: ' + category.question + 'Type your answer here (using all CAPS and no punctuation): ');
            if (response === category.answer) {
                $(alert('That is correct!'));
                updateScore(value);
            }
            else {
                $(alert('That is incorrect.'));
            }
        });
    });
}



//------------------------------COLUMN THREE
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


//------------------------------COLUMN FOUR
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

//------------------------------Clicking the values to make them react
//------------------------------COLUMN ONE CLICKS
$('#questionOne').click(clickQuestion1);
$('#questionTwo').click(clickQuestion2);
$('#questionThree').click(clickQuestion3);
$('#questionFour').click(clickQuestion4);

//------------------------------COLUMN TWO CLICKS
$('#questionFive').click(clickQuestion5);
$('#questionSix').click(clickQuestion6);
$('#questionSeven').click(clickQuestion7);
$('#questionEight').click(clickQuestion8);

//------------------------------COLUMN THREE CLICKS
$('#questionNine').click(clickQuestion9);
$('#questionTen').click(clickQuestion10);
$('#questionEleven').click(clickQuestion11);
$('#questionTwelve').click(clickQuestion12);

//------------------------------COLUMN FOUR CLICKS
$('#questionThirteen').click(clickQuestion13);
$('#questionFourteen').click(clickQuestion14);
$('#questionFifteen').click(clickQuestion15);
$('#questionSixteen').click(clickQuestion16);


//------------------------------HIDE SQUARE AFTER CLICK
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
