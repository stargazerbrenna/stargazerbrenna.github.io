function swapTiles(cell1, cell2) {
	var tempCell = document.getElementById(cell1).className; 
	document.getElementById(cell1).className = document.getElementById(cell2).className;
	document.getElementById(cell2).className = tempCell;
}

let moveCount = 0;
let time = 0;
let timeInterval = null;
let gameStarted = false;

function shuffle() 
{
	for (var row = 1; row <= 4; row++) {
		for (var column = 1; column <= 4; column++) {
			var rowTemp = Math.floor(Math.random() * 4 + 1);
			var columnTemp = Math.floor(Math.random() * 4 + 1);
			swapTiles("cell" + row + column, "cell" + rowTemp + columnTemp);
		}
	}
	startTimer();
}

function startTimer() 
{
	time = 0;
	document.getElementById("time").innerText = time;
	timeInterval = setInterval(() => {
		time++;
		document.getElementById("time").innerText = time;
	}, 1000);
}

function stopTimer() 
{
	clearInterval(timeInterval);
	gameStarted = false;
}

function simpleGame() 
{
	document.getElementById("cell11").className = "tile1";
	document.getElementById("cell12").className = "tile2";
	document.getElementById("cell13").className = "tile3";
	document.getElementById("cell14").className = "tile4";
	document.getElementById("cell21").className = "tile5";
	document.getElementById("cell22").className = "tile6";
	document.getElementById("cell23").className = "tile7";
	document.getElementById("cell24").className = "tile8";
	document.getElementById("cell31").className = "tile9";
	document.getElementById("cell32").className = "tile10";
	document.getElementById("cell33").className = "tile11";
	document.getElementById("cell34").className = "tile12";
	document.getElementById("cell41").className = "tile13";
	document.getElementById("cell42").className = "tile14";
	document.getElementById("cell43").className = "tile15";
	document.getElementById("cell44").className = "tile16";
	swapTiles("cell43", "cell44");
	startTimer();
}

function clickTile(row, column) 
{
	var cell = document.getElementById("cell" + row + column);
	var tile = cell.className;
	
	if (tile != "tile16") {
		if (column < 4) {
			if (document.getElementById("cell" + row + (column + 1)).className == "tile16") {
				swapTiles("cell" + row + column, "cell" + row + (column + 1));
				moveCount++;
				setTimeout(() => {win()}, 1000);
				return;
			}
		}
		if (column > 1) {
			if (document.getElementById("cell" + row + (column - 1)).className == "tile16") {
				swapTiles("cell" + row + column, "cell" + row + (column - 1));
				moveCount++;
				setTimeout(() => {win()}, 1000);
				return;
			}
		}
		if (row > 1) {
			if (document.getElementById("cell" + (row - 1) + column).className == "tile16") {
				swapTiles("cell" + row + column, "cell" + (row - 1) + column);
				moveCount++;
				setTimeout(() => {win()}, 1000);
				return;
			}
		}
		if (row < 4) {
			if (document.getElementById("cell" + (row + 1) + column).className == "tile16") {
				swapTiles("cell" + row + column, "cell" + (row + 1) + column);
				moveCount++;
				setTimeout(() => {win()}, 1000);
				return;
			}
		}
	}
}

function win() 
{
	if (
		document.getElementById("cell11").className == "tile1" &&
		document.getElementById("cell12").className == "tile2" &&
		document.getElementById("cell13").className == "tile3" &&
		document.getElementById("cell14").className == "tile4" &&
		document.getElementById("cell21").className == "tile5" &&
		document.getElementById("cell22").className == "tile6" &&
		document.getElementById("cell23").className == "tile7" &&
		document.getElementById("cell24").className == "tile8" &&
		document.getElementById("cell31").className == "tile9" &&
		document.getElementById("cell32").className == "tile10" &&
		document.getElementById("cell33").className == "tile11" &&
		document.getElementById("cell34").className == "tile12" &&
		document.getElementById("cell41").className == "tile13" &&
		document.getElementById("cell42").className == "tile14" &&
		document.getElementById("cell43").className == "tile15" &&
		document.getElementById("cell44").className == "tile16"
	) 
	{
		stopTimer();
		window.alert("You win!\n Time spent in seconds: " + time + "\n Number of moves used: " + moveCount + "\nTo play again, click new game or simple game.");
		window.location.reload(); 
		moveCount = 0;
	}
}