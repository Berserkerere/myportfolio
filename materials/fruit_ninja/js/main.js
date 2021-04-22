function start() {
	startBlockCreation();

	timeBlockCreation();

	startButton.onclick = letsgo;
}

function letsgo () {
	status = "go";
	startBlockDelete();
	lifesCreation();
	starsCreation();
	ballCreation();
	gametime();
}

// вызов функции
start();

function gameOverr () {
	status = "over";
	starsBlockDelete();
	lifesBlockDelete();
	timeBlockDelete ()
	clearGameField();
	gameOverBlockCreation();	
}

// функция отчета времени
function gametime () {
	var clock = setInterval(function() {
		// делаем обратный отсчет
		timerBlock.innerHTML = timerBlock.innerHTML - 1;
		// когда отсчет доходит до 0
		 if(timerBlock.innerHTML == 0) {
		 	// останавливаем отсчет
		 	clearInterval(clock);
		 	// конец игры
		 	gameOverr();
		 }
	}, 1000);
}