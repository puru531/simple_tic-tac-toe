var player1 = "Player X";
var player2 = "Player Y";
// function startGame() {
// 	player1=prompt("Player 1 name :");
// 	player2=prompt("Player 2 name :");
// 	document.getElementById('player1').innerHTML=player1;
// 	document.getElementById('player2').innerHTML=player2;
// }


function myfunc() {
	var box1=document.getElementById("box1").value;
	var box2=document.getElementById("box2").value;
	var box3=document.getElementById("box3").value;
	var box4=document.getElementById("box4").value;
	var box5=document.getElementById("box5").value;
	var box6=document.getElementById("box6").value;
	var box7=document.getElementById("box7").value;
	var box8=document.getElementById("box8").value;
	var box9=document.getElementById("box9").value;



	//if player1 wins disable all the boxes

	//top row
	if((box1=='x' || box1=='X') && (box2=='x' || box2=='X') && (box3=='x' || box3=='X')){
		document.getElementById('message').innerHTML=player1 +" won!";
		box4=document.getElementById("box4").disabled = true;
		box5=document.getElementById("box5").disabled = true;
		box6=document.getElementById("box6").disabled = true;
		box7=document.getElementById("box7").disabled = true;
		box8=document.getElementById("box8").disabled = true;
		box9=document.getElementById("box9").disabled = true;
		window.alert(player1 +" won!");
	}

	// middle row
	else if((box4=='x' || box4=='X') && (box5=='x' || box5=='X') && (box6=='x' || box6=='X')){
		document.getElementById('message').innerHTML=player1 +" won!";
		document.getElementById("box1").disabled = true;
		document.getElementById("box2").disabled = true;
		document.getElementById("box3").disabled = true;
		document.getElementById("box7").disabled = true;
		document.getElementById("box8").disabled = true;
		document.getElementById("box9").disabled = true;
		window.alert(player1 +" won!");
	}

	//bottom row
	else if((box7=='x' || box7=='X') && (box8=='x' || box8=='X') && (box9=='x' || box9=='X')){
		document.getElementById('message').innerHTML=player1 +" won!";
		document.getElementById("box1").disabled = true;
		document.getElementById("box2").disabled = true;
		document.getElementById("box3").disabled = true;
		document.getElementById("box4").disabled = true;
		document.getElementById("box5").disabled = true;
		document.getElementById("box6").disabled = true;
		window.alert(player1 +" won!");
	}


	// left column
	else if((box1=='x' || box1=='X') && (box4=='x' || box4=='X') && (box7=='x' || box7=='X')){
		document.getElementById('message').innerHTML=player1 +" won!";
		document.getElementById("box2").disabled = true;
		document.getElementById("box4").disabled = true;
		document.getElementById("box5").disabled = true;
		document.getElementById("box6").disabled = true;
		document.getElementById("box8").disabled = true;
		document.getElementById("box9").disabled = true;
		window.alert(player1 +" won!");
	}

	//middle comumn
	else if((box2=='x' || box2=='X') && (box5=='x' || box5=='X') && (box8=='x' || box8=='X')){
		document.getElementById('message').innerHTML=player1 +" won!";
		document.getElementById("box1").disabled = true;
		document.getElementById("box3").disabled = true;
		document.getElementById("box4").disabled = true;
		document.getElementById("box6").disabled = true;
		document.getElementById("box7").disabled = true;
		document.getElementById("box9").disabled = true;
		window.alert(player1 +" won!");
	}

	//right column
	else if((box3=='x' || box3=='X') && (box6=='x' || box6=='X') && (box9=='x' || box9=='X')){
		document.getElementById('message').innerHTML=player1 +" won!";
		document.getElementById("box1").disabled = true;
		document.getElementById("box2").disabled = true;
		document.getElementById("box4").disabled = true;
		document.getElementById("box5").disabled = true;
		document.getElementById("box7").disabled = true;
		document.getElementById("box8").disabled = true;
		window.alert(player1 +" won!");
	}
	//first diagonal
	else if((box1=='x' || box1=='X') && (box5=='x' || box5=='X') && (box9=='x' || box9=='X')){
		document.getElementById('message').innerHTML=player1 +" won!";
		document.getElementById("box2").disabled = true;
		document.getElementById("box3").disabled = true;
		document.getElementById("box4").disabled = true;
		document.getElementById("box6").disabled = true;
		document.getElementById("box7").disabled = true;
		document.getElementById("box8").disabled = true;
		window.alert(player1 +" won!");
	}
	//second diagonal
	else if((box3=='x' || box3=='X') && (box5=='x' || box5=='X') && (box7=='x' || box7=='X')){
		document.getElementById('message').innerHTML=player1 +" won!";
		document.getElementById("box1").disabled = true;
		document.getElementById("box2").disabled = true;
		document.getElementById("box4").disabled = true;
		document.getElementById("box6").disabled = true;
		document.getElementById("box8").disabled = true;
		document.getElementById("box9").disabled = true;
		window.alert(player1 +" won!");
	}








	//if player2 wins disable all the boxes

	//top row
	else if((box1=='0') && (box2=='0') && (box3=='0')){
		document.getElementById('message').innerHTML=player2 + " won!";
		box4=document.getElementById("box4").disabled = true;
		box5=document.getElementById("box5").disabled = true;
		box6=document.getElementById("box6").disabled = true;
		box7=document.getElementById("box7").disabled = true;
		box8=document.getElementById("box8").disabled = true;
		box9=document.getElementById("box9").disabled = true;
		window.alert(player2 + " won!");
	}

	// middle row
	else if((box4=='0') && (box5=='0') && (box6=='0')){
		document.getElementById('message').innerHTML=player2 + " won!";
		document.getElementById("box1").disabled = true;
		document.getElementById("box2").disabled = true;
		document.getElementById("box3").disabled = true;
		document.getElementById("box7").disabled = true;
		document.getElementById("box8").disabled = true;
		document.getElementById("box9").disabled = true;
		window.alert(player2 + " won!");
	}

	//bottom row
	else if((box7=='0') && (box8=='0') && (box9=='0')){
		document.getElementById('message').innerHTML=player2 + " won!";
		document.getElementById("box1").disabled = true;
		document.getElementById("box2").disabled = true;
		document.getElementById("box3").disabled = true;
		document.getElementById("box4").disabled = true;
		document.getElementById("box5").disabled = true;
		document.getElementById("box6").disabled = true;
		window.alert(player2 + " won!");
	}


	// left column
	else if((box1=='0') && (box4=='0') && (box7=='0')){
		document.getElementById('message').innerHTML=player2 + " won!";
		document.getElementById("box2").disabled = true;
		document.getElementById("box4").disabled = true;
		document.getElementById("box5").disabled = true;
		document.getElementById("box6").disabled = true;
		document.getElementById("box8").disabled = true;
		document.getElementById("box9").disabled = true;
		window.alert(player2 + " won!");
	}

	//middle comumn
	else if((box2=='0') && (box5=='0') && (box8=='0')){
		document.getElementById('message').innerHTML=player2 + " won!";
		document.getElementById("box1").disabled = true;
		document.getElementById("box3").disabled = true;
		document.getElementById("box4").disabled = true;
		document.getElementById("box6").disabled = true;
		document.getElementById("box7").disabled = true;
		document.getElementById("box9").disabled = true;
		window.alert(player2 + " won!");
	}

	//right column
	else if((box3=='0') && (box6=='0') && (box9=='0')){
		document.getElementById('message').innerHTML=player2 + " won!";
		document.getElementById("box1").disabled = true;
		document.getElementById("box2").disabled = true;
		document.getElementById("box4").disabled = true;
		document.getElementById("box5").disabled = true;
		document.getElementById("box7").disabled = true;
		document.getElementById("box8").disabled = true;
		window.alert(player2 + " won!");
	}
	//first diagonal
	else if((box1=='0') && (box5=='0') && (box9=='0')){
		document.getElementById('message').innerHTML=player2 + " won!";
		document.getElementById("box2").disabled = true;
		document.getElementById("box3").disabled = true;
		document.getElementById("box4").disabled = true;
		document.getElementById("box6").disabled = true;
		document.getElementById("box7").disabled = true;
		document.getElementById("box8").disabled = true;
		window.alert(player2 + " won!");
	}
	//second diagonal
	else if((box3=='0') && (box5=='0') && (box7=='0')){
		document.getElementById('message').innerHTML=player2 + " won!";
		document.getElementById("box1").disabled = true;
		document.getElementById("box2").disabled = true;
		document.getElementById("box4").disabled = true;
		document.getElementById("box6").disabled = true;
		document.getElementById("box8").disabled = true;
		document.getElementById("box9").disabled = true;
		window.alert(player2 + " won!");
	}


	//Checking the match tie
	else if ((box1 == 'X' || box1 == 'x' || box1 == '0') && 
		(box2 == 'X' || box2 == 'x' || box2 == '0') && 
		(box3 == 'X' || box3 == 'x' || box3 == '0') && 
		(box4 == 'X' || box4 == 'x' || box4 == '0') && 
		(box5 == 'X' || box5 == 'x' || box5 == '0') && 
		(box6 == 'X' || box6 == 'x' || box6 == '0') &&
        (box7 == 'X' || box7 == 'x' || box7 == '0') && 
        (box8 == 'X' || box8 == 'x' || box8 == '0') && 
        (box9 == 'X' || box9 == 'x' || box9 == '0')) 
	{
		document.getElementById('message').innerHTML="Match Tie";
		window.alert("Match Tie");
	}
	
	else{
		if(flag==1){
			document.getElementById('message').innerHTML=player1 +"'s turn";
		}
		else{
			document.getElementById('message').innerHTML=player2 + "'s turn";
		}
	}
}




//function to reset the game
function myfunc_2(){
	location.reload();
	document.getElementById("box1").value = '';
	document.getElementById("box2").value = '';
	document.getElementById("box3").value = '';
	document.getElementById("box4").value = '';
	document.getElementById("box5").value = '';
	document.getElementById("box6").value = '';
	document.getElementById("box7").value = '';
	document.getElementById("box8").value = '';
	document.getElementById("box9").value = '';
}








// checking the turn of the players
flag=1;
function myfunc_3() {
	if(flag==1){
		document.getElementById("box1").value = 'X';
		document.getElementById("box1").disabled = true;
		flag=0;
	}
	else {
		document.getElementById("box1").value = '0';
		document.getElementById("box1").disabled = true;
		flag=1;
	}
}

function myfunc_4() {
	if(flag==1){
		document.getElementById("box2").value = 'X';
		document.getElementById("box2").disabled = true;
		flag=0;
	}
	else {
		document.getElementById("box2").value = '0';
		document.getElementById("box2").disabled = true;
		flag=1;
	}
}

function myfunc_5() {
	if(flag==1){
		document.getElementById("box3").value = 'X';
		document.getElementById("box3").disabled = true;
		flag=0;
	}
	else {
		document.getElementById("box3").value = '0';
		document.getElementById("box3").disabled = true;
		flag=1;
	}
}

function myfunc_6() {
	if(flag==1){
		document.getElementById("box4").value = 'X';
		document.getElementById("box4").disabled = true;
		flag=0;
	}
	else {
		document.getElementById("box4").value = '0';
		document.getElementById("box4").disabled = true;
		flag=1;
	}
}

function myfunc_7() {
	if(flag==1){
		document.getElementById("box5").value = 'X';
		document.getElementById("box5").disabled = true;
		flag=0;
	}
	else {
		document.getElementById("box5").value = '0';
		document.getElementById("box5").disabled = true;
		flag=1;
	}
}

function myfunc_8() {
	if(flag==1){
		document.getElementById("box6").value = 'X';
		document.getElementById("box6").disabled = true;
		flag=0;
	}
	else {
		document.getElementById("box6").value = '0';
		document.getElementById("box6").disabled = true;
		flag=1;
	}
}

function myfunc_9() {
	if(flag==1){
		document.getElementById("box7").value = 'X';
		document.getElementById("box7").disabled = true;
		flag=0;
	}
	else {
		document.getElementById("box7").value = '0';
		document.getElementById("box7").disabled = true;
		flag=1;
	}
}

function myfunc_10() {
	if(flag==1){
		document.getElementById("box8").value = 'X';
		document.getElementById("box8").disabled = true;
		flag=0;
	}
	else {
		document.getElementById("box8").value = '0';
		document.getElementById("box8").disabled = true;
		flag=1;
	}
}

function myfunc_11() {
	if(flag==1){
		document.getElementById("box9").value = 'X';
		document.getElementById("box9").disabled = true;
		flag=0;
	}
	else {
		document.getElementById("box9").value = '0';
		document.getElementById("box9").disabled = true;
		flag=1;
	}
}


