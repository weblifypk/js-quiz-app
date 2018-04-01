/*-----------------------------------*\
$ The Quiz Begins...
\*-----------------------------------*/

// Quiz Creator;
function CQuiz(que, o1, o2, o3, o4, ans, d)  {
    this.question = que;
    this.opt1 = o1;
    this.opt2 = o2;
    this.opt3 = o3;
    this.opt4 = o4;
    this.answer = ans;
    this.asked = d;
}

// Question 1
var q1 = new CQuiz(
    'Which function among the following lets to register a function to be invoked repeatedly after a certain time?',
    'setTimeout()',
    'setTotaltime()',
    'setInterval()',
    'none of the mentioned',
    3,
    0
);

// Question 2
var q2 = new CQuiz(
    'To which object does the location property belong?',
    'Window',
    'Position',
    'Element',
    'Location',
    1,
    0
);

// Question 3
var q3 = new CQuiz(
    'What is the result of the following code snippet? <br> <pre> window.location === document.location </pre>',
    'False',
    'True',
    '1',
    '0',
    2,
    0
)

// Question 4
var q4 = new CQuiz(
    'Which of the following is not a framework?',
    'jQuery',
    '.NET',
    'JavaScript',
    'None of the mentioned',
    3,
    0
);

// total question...
var totQ = [q1,q2,q3,q4];
var queDone = 0; // question asked...
var userAns = [];

// showing steps (dots)...
steps(totQ.length);
function steps(quizLength) {
    var mainStepDiv = document.getElementById('steps');
    for(var i = 0; i < quizLength; i++) {
        var span = document.createElement('span');
        span.className = 'step';
        mainStepDiv.appendChild(span);
        // craetes " <span class="step"></span> ";
    }
}

var p = document.getElementById('que');     // the question paragraph

var O1 = document.getElementById('opt1');   // option 01
var O2 = document.getElementById('opt2');   // option 02
var O3 = document.getElementById('opt3');   // option 03
var O4 = document.getElementById('opt4');   // option 04

// places random questions...
function randomQ() {
    var thisAsked = false;
    var x = Math.floor(Math.random() * 4); // get a random number b/w 0-3
    while((totQ[x].asked === 0) == true) {
        thisAsked = true;
        totQ[x].asked = 1;
        queDone = ++queDone;
        p.innerHTML = totQ[x].question;
        O1.nextElementSibling.innerHTML = totQ[x].opt1
        O2.nextElementSibling.innerHTML = totQ[x].opt2
        O3.nextElementSibling.innerHTML = totQ[x].opt3
        O4.nextElementSibling.innerHTML = totQ[x].opt4
    }
    if(!thisAsked){
        if(queDone != totQ.length) 
        randomQ();
    }
}

// firing first question...
randomQ();

// user clicks NEXT...
function next() {
    if (!validateForm()) return false; // exit if no option in the current tab is selected

    // setting up btn and steps counter...
    topping(queDone)

    // if reached the end of the questions
    if(queDone == totQ.length) {
        alert('Good Job! Calculating Result');
        return false;
    }

    // otherwise, fires next question...
    randomQ();
}

// targetting all checkboxes...
var chkBox = document.getElementsByClassName('custom-control-input');

// deals with validation of radio options and adds to the user's answer Array...
function validateForm() { 
    var valid = false;
    for (var i = 0; i < chkBox.length; i++) { // checks every radio btn
        if(chkBox[i].checked) { // if found checked
            valid = true;
            userAns.unshift(chkBox[i].value); // store user's answer
            console.log(userAns);
            chkBox[i].checked = false;
            nextBtn.setAttribute('disabled', 'disabled'); // disbale button for next question
            break;
        }
    }
    if(!valid)   { // if no option selected
        alert("Please Select Any Option...");
        nextBtn.setAttribute('disabled', 'disabled');
    }
    if (valid) // if the valid status is true, mark the step as finished
    document.getElementsByClassName("step")[queDone-1].className += " finish";

    return valid; // return the valid status
}

// enable btn if radio btn is checked
var nextBtn = document.getElementById('next-button');
function enableBtn(i) { 
    if(i.checked) nextBtn.removeAttribute('disabled');
    else nextBtn.setAttribute('disabled', 'disabled');
}


function topping(n) {
    if (n == totQ.length-1)  // dynamic next button
    document.getElementById('next-button').innerHTML = 'Submit';
    else if (n == totQ.length) {
        document.getElementById('next-button').innerHTML = 'No Questions';
        nextBtn.setAttribute('disabled', 'disabled');
    }
    else
    document.getElementById('next-button').innerHTML = 'Next';

    fixStepIndicator(n) // it will display the correct step indicator
}

function fixStepIndicator(n) { // removes the "active" class of all steps...
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
    }
    x[n-1].className += " active"; // and adds the "active" class on the current step
}

// function serialQ() {
//     for(i = 0; i < totQ.length; i++){
//         if(totQ[i].asked == 0){
//             console.log(i);
//             totQ[i].asked = 1;
//             queDone = ++queDone;
//             console.log('done: ' + queDone);
//             break;
//         } else {
//             if(queDone == totQ.length) {
//                 console.log('no-question');
//                 break;
//             }
//         }
//     }
// }