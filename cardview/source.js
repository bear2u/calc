$(document).ready(function () {

var colorArray=["#019875","#1E8BC3","#D91E18","#D35400","#8E44AD","#C0392B"];
var cardState;
var currentQuestion=0;
var qbank=new Array;

loadDB();

function loadDB(){
    //숫자를 생성해서 여기에 넣어준다?    
 let count = 50;
 for(i=0;i<count;i++){
    let num1 = Math.floor(Math.random()*9)+1;
    let num2 = Math.floor(Math.random()*9)+1;
    qbank[i]=[];
    qbank[i][0]=num1 + "+" + num2;
    qbank[i][1]=num1 + num2;
 }//for
    beginActivity(); 
}//loadDB

function beginActivity(){
 cardState=0;
 var color1=colorArray[Math.floor(Math.random()*colorArray.length)];
 $("#cardArea").empty();
 $("#cardArea").append('<div id="card1" class="card">' + qbank[currentQuestion][0] + '</div>');
 $("#cardArea").append('<div id="card2" class="card">' + qbank[currentQuestion][1] + '</div>');
 $("#card1").css("background-color",color1);
 $("#card2").css("background-color","#34495E");
 $("#card2").css("top","200px");
 $("#cardArea").on("click",function(){
  if(cardState!=1){
   cardState=1;
   //togglePosition();
   $("#card1").animate({top: "-=200"}, 150, function() {cardState=0;togglePosition();});
   $("#card2").animate({top: "-=200"}, 150, function() {togglePosition2();});
  }//if
 });//click function
 currentQuestion++;
 $("#buttonArea").empty();
 $("#buttonArea").append('<div id="nextButton">NEXT</div>');
 $("#nextButton").on("click",function(){
  if(currentQuestion<qbank.length){beginActivity();}
  else{displayFinalMessage();}
 });//click function
}//beginactivity

function togglePosition(){
 if($("#card1").position().top==-200){$("#card1").css("top","200px");};
}//toggle

function togglePosition2(){
 if($("#card2").position().top==-200){$("#card2").css("top","200px");};
}//toggle2

function displayFinalMessage(){
 $("#buttonArea").empty();
 $("#cardArea").empty();
 $("#cardArea").append('<div id="finalMessage">You have finished the activity.</div>');
}//final message

});