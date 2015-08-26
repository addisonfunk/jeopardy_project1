'use strict';

// jshint devel:true
/*jshint devel:true */
/*global $:false */

/*global alert:false, prompt:false*/

console.log('Welcome to Jeopardy!');

//------------------------------KEEPING SCORE - IF/ELSE STATEMENT
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
        $.each(questionOne, function() {

            var response = prompt('Question: ' + category.question + '\n \n Helpful Hint: use all CAPS, start with (WHAT IS) and do not use punctuation.');

            if (response === category.answer) {
                $(alert('That is correct!'));
                updateScore(parseInt(value));

            }
            else {
                $(alert('That is incorrect.'));
                $(alert('The correct answer is: ' + category.answer));
            }
        });
    });
}

function clickQuestion2() {
    var questionTwo = [{
        name: 'Worldly',
        question: 'This continent is comprised of 51 countries.',
        answer: 'WHAT IS EUROPE'
    }];
    var value = '400';
    $.each(questionTwo, function(i, category) {
        alert('Category: ' + category.name);
        $.each(questionTwo, function() {

            var response = prompt('Question: ' + category.question + '\n \n Helpful Hint: use all CAPS, start with (WHAT IS) and do not use punctuation.');

            if (response === category.answer) {
                $(alert('That is correct!'));
                updateScore(parseInt(value));

            }
            else {
                $(alert('That is incorrect.'));
                $(alert('The correct answer is: ' + category.answer));
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
    var value = '600';
    $.each(questionThree, function(i, category) {
        alert('Category: ' + category.name);
        $.each(questionThree, function() {

            var response = prompt('Question: ' + category.question + '\n \n Helpful Hint: use all CAPS, start with (WHAT IS) and do not use punctuation.');

            if (response === category.answer) {
                $(alert('That is correct!'));
                updateScore(parseInt(value));

            }
            else {
                $(alert('That is incorrect.'));
                $(alert('The correct answer is: ' + category.answer));
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
    var value = '800';
    $.each(questionFour, function(i, category) {
        alert('Category: ' + category.name);
        $.each(questionFour, function() {

            var response = prompt('Question: ' + category.question + '\n \n Helpful Hint: use all CAPS, start with (WHAT IS) and do not use punctuation.');

            if (response === category.answer) {
                $(alert('That is correct!'));
                updateScore(parseInt(value));

            }
            else {
                $(alert('That is incorrect.'));
                $(alert('The correct answer is: ' + category.answer));
            }
        });
    });
}



//------------------------------COLUMN TWO
function clickQuestion5() {
    var questionFive = [{
        name: 'Movies',
        question: 'This late 90s film starred Richard Gere and Julia Roberts.',
        answer: 'WHAT IS THE RUNAWAY BRIDE'
    }];
    var value = '200';
    $.each(questionFive, function(i, category) {
        alert('Category: ' + category.name);
        $.each(questionFive, function() {

            var response = prompt('Question: ' + category.question + '\n \n Helpful Hint: use all CAPS, start with (WHAT IS) and do not use punctuation.');

            if (response === category.answer) {
                $(alert('That is correct!'));
                updateScore(parseInt(value));

            }
            else {
                $(alert('That is incorrect.'));
                $(alert('The correct answer is: ' + category.answer));
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
    var value = '400';
    $.each(questionSix, function(i, category) {
        alert('Category: ' + category.name);
        $.each(questionSix, function() {

            var response = prompt('Question: ' + category.question + '\n \n Helpful Hint: use all CAPS, start with (WHAT IS) and do not use punctuation.');

            if (response === category.answer) {
                $(alert('That is correct!'));
                updateScore(parseInt(value));

            }
            else {
                $(alert('That is incorrect.'));
                $(alert('The correct answer is: ' + category.answer));
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
    var value = '600';
    $.each(questionSeven, function(i, category) {
        alert('Category: ' + category.name);
        $.each(questionSeven, function() {

            var response = prompt('Question: ' + category.question + '\n \n Helpful Hint: use all CAPS, start with (WHAT IS) and do not use punctuation.');

            if (response === category.answer) {
                $(alert('That is correct!'));
                updateScore(parseInt(value));

            }
            else {
                $(alert('That is incorrect.'));
                $(alert('The correct answer is: ' + category.answer));
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
    var value = '800';
    $.each(questionEight, function(i, category) {
        alert('Category: ' + category.name);
        $.each(questionEight, function() {

            var response = prompt('Question: ' + category.question + '\n \n Helpful Hint: use all CAPS, start with (WHAT IS) and do not use punctuation.');

            if (response === category.answer) {
                $(alert('That is correct!'));
                updateScore(parseInt(value));

            }
            else {
                $(alert('That is incorrect.'));
                $(alert('The correct answer is: ' + category.answer));
            }
        });
    });
}


//------------------------------COLUMN THREE
function clickQuestion9() {
    var questionNine = [{
        name: 'The Universe',
        question: 'This planet is 4.5 billion years old.',
        answer: 'WHAT IS EARTH'
    }];
    var value = '200';
    $.each(questionNine, function(i, category) {
        alert('Category: ' + category.name);
        $.each(questionNine, function() {

            var response = prompt('Question: ' + category.question + '\n \n Helpful Hint: use all CAPS, start with (WHAT IS) and do not use punctuation.');

            if (response === category.answer) {
                $(alert('That is correct!'));
                updateScore(parseInt(value));

            }
            else {
                $(alert('That is incorrect.'));
                $(alert('The correct answer is: ' + category.answer));
            }
        });
    });
}

function clickQuestion10() {
    var questionTen = [{
        name: 'The Universe',
        question: 'This planet spins the fastest, rotating once every 10 hours.',
        answer: 'WHAT IS JUPITER'
    }];
    var value = '400';
    $.each(questionTen, function(i, category) {
        alert('Category: ' + category.name);
        $.each(questionTen, function() {

            var response = prompt('Question: ' + category.question + '\n \n Helpful Hint: use all CAPS, start with (WHAT IS) and do not use punctuation.');

            if (response === category.answer) {
                $(alert('That is correct!'));
                updateScore(parseInt(value));

            }
            else {
                $(alert('That is incorrect.'));
                $(alert('The correct answer is: ' + category.answer));
            }
        });
    });
}

function clickQuestion11() {
    var questionEleven = [{
        name: 'The Universe',
        question: 'This nuclear reaction (the same that powers a hydrogen bomb) powers the sun.',
        answer: 'WHAT IS FUSION'
    }];
    var value = '600';
    $.each(questionEleven, function(i, category) {
        alert('Category: ' + category.name);
        $.each(questionEleven, function() {

            var response = prompt('Question: ' + category.question + '\n \n Helpful Hint: use all CAPS, start with (WHAT IS) and do not use punctuation.');

            if (response === category.answer) {
                $(alert('That is correct!'));
                updateScore(parseInt(value));

            }
            else {
                $(alert('That is incorrect.'));
                $(alert('The correct answer is: ' + category.answer));
            }
        });
    });
}

function clickQuestion12() {
    var questionTwelve = [{
        name: 'The Universe',
        question: 'This spiral galaxy has a mass between 750 billion and one trillion solar masses with a dimater of 100,000 light years.',
        answer: 'WHAT IS THE MILKY WAY'
    }];
    var value = '800';
    $.each(questionTwelve, function(i, category) {
        alert('Category: ' + category.name);
        $.each(questionTwelve, function() {

            var response = prompt('Question: ' + category.question + '\n \n Helpful Hint: use all CAPS, start with (WHAT IS) and do not use punctuation.');

            if (response === category.answer) {
                $(alert('That is correct!'));
                updateScore(parseInt(value));

            }
            else {
                $(alert('That is incorrect.'));
                $(alert('The correct answer is: ' + category.answer));
            }
        });
    });
}


//------------------------------COLUMN FOUR
function clickQuestion13() {
    var questionThirteen = [{
        name: 'Disney',
        question: 'The location where Mufasa and his family live in the Lion King',
        answer: 'WHAT IS PRIDE ROCK'
    }];
    var value = '200';
    $.each(questionThirteen, function(i, category) {
        alert('Category: ' + category.name);
        $.each(questionThirteen, function() {

            var response = prompt('Question: ' + category.question + '\n \n Helpful Hint: use all CAPS, start with (WHAT IS) and do not use punctuation.');

            if (response === category.answer) {
                $(alert('That is correct!'));
                updateScore(parseInt(value));

            }
            else {
                $(alert('That is incorrect.'));
                $(alert('The correct answer is: ' + category.answer));
            }
        });
    });
}

function clickQuestion14() {
    var questionFourteen = [{
        name: 'Disney',
        question: 'The first roller coaster attraction at Walt Disney World',
        answer: 'WHAT IS SPACE MOUNTAIN'
    }];
    var value = '400';
    $.each(questionFourteen, function(i, category) {
        alert('Category: ' + category.name);
        $.each(questionFourteen, function() {

            var response = prompt('Question: ' + category.question + '\n \n Helpful Hint: use all CAPS, start with (WHAT IS) and do not use punctuation.');

            if (response === category.answer) {
                $(alert('That is correct!'));
                updateScore(parseInt(value));

            }
            else {
                $(alert('That is incorrect.'));
                $(alert('The correct answer is: ' + category.answer));
            }
        });
    });
}

function clickQuestion15() {
    var questionFifteen = [{
        name: 'Disney',
        question: 'This Disney Full Length Animated feature was the last one to use a storybook as an introduction in the beginning of the moive',
        answer: 'WHAT IS ROBIN HOOD'
    }];
    var value = '600';
    $.each(questionFifteen, function(i, category) {
        alert('Category: ' + category.name);
        $.each(questionFifteen, function() {

            var response = prompt('Question: ' + category.question + '\n \n Helpful Hint: use all CAPS, start with (WHAT IS) and do not use punctuation.');

            if (response === category.answer) {
                $(alert('That is correct!'));
                updateScore(parseInt(value));

            }
            else {
                $(alert('That is incorrect.'));
                $(alert('The correct answer is: ' + category.answer));
            }
        });
    });
}

function clickQuestion16() {
    var questionSixteen = [{
        name: 'Disney',
        question: 'The U.S. state where the animated feature, Dumbo, zooms in on to show where the circus will go for the winter',
        answer: 'WHAT IS FLORIDA'
    }];
    var value = '800';
    $.each(questionSixteen, function(i, category) {
        alert('Category: ' + category.name);
        $.each(questionSixteen, function() {

            var response = prompt('Question: ' + category.question + '\n \n Helpful Hint: use all CAPS, start with (WHAT IS) and do not use punctuation.');

            if (response === category.answer) {
                $(alert('That is correct!'));
                updateScore(parseInt(value));

            }
            else {
                $(alert('That is incorrect.'));
                $(alert('The correct answer is: ' + category.answer));
            }
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
document.getElementById('questionOne').onclick = function() {
    $('#questionOne').attr('id', 'trebekImage');
    $('#trebekImage').text('');
    $('#trebekImage').css('width', '88px');
};
document.getElementById('questionTwo').onclick = function() {
    $('#questionTwo').attr('id', 'trebekImage');
    $('#trebekImage').text('');
    $('#trebekImage').css('width', '88px');
};
document.getElementById('questionThree').onclick = function() {
    $('#questionThree').attr('id', 'trebekImage');
    $('#trebekImage').text('');
    $('#trebekImage').css('width', '88px');
};
document.getElementById('questionFour').onclick = function() {
    $('#questionFour').attr('id', 'trebekImage');
    $('#trebekImage').text('');
    $('#trebekImage').css('width', '88px');
};

document.getElementById('questionFive').onclick = function() {
    $('#questionFive').attr('id', 'trebekImage');
    $('#trebekImage').text('');
    $('#trebekImage').css('width', '88px');
};
document.getElementById('questionSix').onclick = function() {
    $('#questionSix').attr('id', 'trebekImage');
    $('#trebekImage').text('');
    $('#trebekImage').css('width', '88px');
};
document.getElementById('questionSeven').onclick = function() {
    $('#questionSeven').attr('id', 'trebekImage');
    $('#trebekImage').text('');
    $('#trebekImage').css('width', '88px');
};
document.getElementById('questionEight').onclick = function() {
    $('#questionEight').attr('id', 'trebekImage');
    $('#trebekImage').text('');
    $('#trebekImage').css('width', '88px');
};

document.getElementById('questionNine').onclick = function() {
    $('#questionNine').attr('id', 'trebekImage');
    $('#trebekImage').text('');
    $('#trebekImage').css('width', '88px');
};
document.getElementById('questionTen').onclick = function() {
    $('#questionTen').attr('id', 'trebekImage');
    $('#trebekImage').text('');
    $('#trebekImage').css('width', '88px');
};
document.getElementById('questionEleven').onclick = function() {
    $('#questionEleven').attr('id', 'trebekImage');
    $('#trebekImage').text('');
    $('#trebekImage').css('width', '88px');
};
document.getElementById('questionTwelve').onclick = function() {
    $('#questionTwelve').attr('id', 'trebekImage');
    $('#trebekImage').text('');
    $('#trebekImage').css('width', '88px');
};


document.getElementById('questionThirteen').onclick = function() {
    $('#questionThirteen').attr('id', 'trebekImage');
    $('#trebekImage').text('');
    $('#trebekImage').css('width', '88px');
};
document.getElementById('questionFourteen').onclick = function() {
    $('#questionFourteen').attr('id', 'trebekImage');
    $('#trebekImage').text('');
    $('#trebekImage').css('width', '88px');
};
document.getElementById('questionFifteen').onclick = function() {
    $('#questionFifteen').attr('id', 'trebekImage');
    $('#trebekImage').text('');
    $('#trebekImage').css('width', '88px');
};
document.getElementById('questionSixteen').onclick = function() {
    $('#questionSixteen').attr('id', 'trebekImage');
    $('#trebekImage').text('');
    $('#trebekImage').css('width', '88px');
};
