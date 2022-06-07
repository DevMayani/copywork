var studentName = document.getElementById("name");
var school = document.getElementById("school");

var subjectOne = document.getElementById("Subject1");
var subjectTwo = document.getElementById("Subject2");
var subjectThree = document.getElementById("Subject3");
var subjectFour = document.getElementById("Subject4");
var subjectFive = document.getElementById("Subject5");

var scoreOne = document.getElementById("score-one");
var scoreTwo = document.getElementById("score-two");
var scoreThree = document.getElementById("score-three");
var scoreFour = document.getElementById("score-four");
var scoreFive = document.getElementById("score-five");

var Form = document.getElementById("form");


Form.addEventListener('submit',function(e){
    e.preventDefault()

if(studentName.value == "" || school.value == "" || subjectOne.value == "" || subjectTwo.value == "" || subjectThree.value == "" || subjectFour.value == "" || subjectFive.value == ""){
    return document.getElementById("error").innerHTML = "Invalid Input"
}else{
    document.getElementById("error").innerHTML = ""
}


if(subjectOne.value == subjectTwo.value || subjectOne.value == subjectThree.value || subjectOne.value == subjectFour.value || subjectOne.value == subjectFive.value) {
    return document.getElementById("subjectError").innerHTML = "Duplicate Subject"
}else {
    document.getElementById("subjectError").innerHTML = ""
}

if(subjectTwo.value == subjectOne.value || subjectTwo.value == subjectThree.value || subjectTwo.value == subjectFour.value || subjectTwo.value == subjectFive.value) {
    return document.getElementById("subjectError").innerHTML = "Duplicate Subject"
}else {
    document.getElementById("subjectError").innerHTML = ""
}

if(subjectThree.value == subjectOne.value || subjectThree.value == subjectTwo.value || subjectThree.value == subjectFour.value || subjectThree.value == subjectFive.value) {
    return document.getElementById("subjectError").innerHTML = "Duplicate Subject"
}else {
    document.getElementById("subjectError").innerHTML = ""
}


if(subjectFour.value == subjectOne.value || subjectFour.value == subjectTwo.value || subjectFour.value == subjectThree.value || subjectFour.value == subjectFive.value) {
    return document.getElementById("subjectError").innerHTML = "Duplicate Subject"
}else {
    document.getElementById("subjectError").innerHTML = ""
}


if(subjectFive.value == subjectOne.value || subjectFive.value == subjectTwo.value || subjectFive.value == subjectThree.value || subjectFive.value == subjectFour.value) {
    return document.getElementById("subjectError").innerHTML = "Duplicate Subject"
}else {
    document.getElementById("subjectError").innerHTML = ""
}
 
score1 = parseInt(scoreOne.value);
score2 = parseInt(scoreTwo.value);
score3 = parseInt(scoreThree.value);
score4 = parseInt(scoreFour.value);
score5 = parseInt(scoreFive.value);

var total = score1+score2+score3+score4+score5 ;
var average = total/5
var finalAverage = Math.round(average);


if(finalAverage < 50) {
    document.getElementById("result").innerHTML = `Dear <b> ${studentName.value} </b>, Your Final Score is <b> ${finalAverage} <b>,You are not Eligible to write the Exam.`
}else if(finalAverage > 50) {
    document.getElementById("result").innerHTML = `Congratulations <b> ${studentName.value} </b>, Your Final Score is <b> ${finalAverage} </b>,You Passed the Exam.`

}
    









}); 