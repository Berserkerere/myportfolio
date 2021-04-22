// получить случайное число
function random(max) {
	// случайное число от 1 до макс.
	var rand = 1 + Math.random() * (max + 1);
	// округляем до целого
	rand = Math.floor(rand);
	// вернуть результат
	return rand;
}

/*-----------------------

Функции для создания элементов игры

-----------------------*/

// 	<div id="start-block"><button id="start-button">Начали</button></div>
function startBlockCreation () {
	// выбираем блок начада игры, присваюю айди "старт-блок"
	startBlock = document.createElement("div");
		startBlock.id = "start-block";
	title = document.createElement("h1");
		title.id = "title";
		title.innerHTML = "fruit ninja";
		// выбираем кнопку, присваюю айди и прописываю текст
	startButton = document.createElement("button");
	startButton.id = "start-button";
	startButton.innerHTML = "START";

	// присваюю "детей"
	startBlock.appendChild(title);
	startBlock.appendChild(startButton);
	gameField.appendChild(startBlock);
}

//<div id="stars"></div>
function starsCreation () {
	stars = document.createElement("div");
	stars.id = "stars";
	stars.innerHTML = "0";
	gameField.appendChild(stars);
}

//<span></span> x5
function lifesCreation () {
	lifes = document.createElement("div");
		lifes.id = "lifes";
	var currentCountLifes = 0;
	// цикл для количества жизней заданых в переменных
	while(currentCountLifes < countLifes) {
		var span = document.createElement("span");
		lifes.appendChild(span);
		currentCountLifes = currentCountLifes + 1;
	}

	gameField.appendChild(lifes);
}

//<h2>Время: <span id="timer">10</span></h2>
function timeBlockCreation () {
	var h2 = document.createElement("h2");
		h2.innerHTML = "Время: ";
		h2.style.paddingLeft = "20px";
		h2.style.color = "#FFFFFF";

		timerBlock = document.createElement("span");
		timerBlock.id = "timer";
		timerBlock.innerHTML = "100";
		h2.appendChild(timerBlock);

		infoBlock.appendChild(h2);
}

//<div id="ball"></div>
function ballCreation () {
	var ball = document.createElement("div");
	// добавляем тегу div, id = "ball"
	ball.className = "ball";
	// переменная для выбора количества шаров при появлении
	var direction = random(4);
	// условие выбора между шарами
	switch (direction) {
  case 1:
  // выбор черешни
    ball.className = "ball cherry";
    break;
  case 2:
  // выбор винограда
    ball.className = "ball grapes";
    break;
  case 3:
  // выбор апельсина
    ball.className = "ball orange";
    break;
  case 4:
  // выбор груши
    ball.className = "ball pear";
    break;
  case 5:
  // выбор бомбы
  	ball.className = "ball bomb";
  	break;
}

	// функция клика по мячу
	ball.onmousemove = function () {
		if (ball.className == "ball bomb") {
			countLifes = countLifes - 1;
			console.log(countLifes);
			lifesBlockDelete();
			lifesCreation();
			ball.remove();
			ballCreation();
			if (countLifes == 0) {
				gameOverr();
			}
			return;
		}

	if (ball.className != "wait" && ball.className != "ball bomb") {
		j = j + random(5);
		stars.innerHTML = j;

		// для выбора количества мячей при появлении
		setTimeout(function() {
			ball.remove();

			var beBall = document.querySelector(".ball");// element |
			if (beBall == null) {
				var ballCount = random(2);

				var currentCountBall = 0;
				while(currentCountBall < ballCount) {
					ballCreation();
					currentCountBall = currentCountBall + 1;
				}
			}
		}, 200);
	}
ball.className = "wait";	

};// конец события 
	// для выбора места появления
	setTimeout(function () {
		ball.style.top = random(300) + "px";
		ball.style.left = random(500) + "px";
		var deg = random(90);
		ball.style.transform = "rotate(-" + (deg + 10) + "deg)";
	}, 200)
	// для отнятие жизни пры вылета шара за край
	setTimeout(function() {
		ball.style.transition = "all 0s";

		var timerBall = setInterval(function() {
			ball.style.top = ball.offsetTop + 1 + "px";

			//ball.style.transform = 
				if(ball.offsetTop > 400) {
					ball.remove();
					ballCreation();
					// проверка если не бомба то отнимаем жизнь
					if(!ball.classList.contains('bomb')) {
						countLifes = countLifes - 1;
					}
					
					if (countLifes == 0) {
						gameOverr();
					}
					lifesBlockDelete();
					lifesCreation();
					clearInterval(timerBall);
				} 
		}, 10)

	}, 1000);

	if (status != "over") {
	// добавляем элемент шарика на игровое поле
	gameField.appendChild(ball);
	}
}

// создание конца игры
function gameOverBlockCreation () {
	timeBlockDelete ();
	var div = document.createElement("div");
		div.id = "gameOver";

	var h3 = document.createElement("h3");
		h3.innerHTML = "Your score : " + j + " points";

	var endButton = document.createElement("button");
		endButton.id = "end-button";
		endButton.innerHTML = "Start again?";

	div.appendChild(h3);
	div.appendChild(endButton);
	gameField.appendChild(div);

	document.getElementById("end-button").onclick = function() {
  location.reload(); // перезагружаем страницу
}
}


/*-----------------------

Функции для удаления элементов игры

-----------------------*/

function startBlockDelete () {
	startBlock.remove();
}

function ballDelete () {
	ball.remove();
}

function lifesBlockDelete () {
	lifes.remove();
}

function starsBlockDelete () {
	stars.remove();
}

function timeBlockDelete () {
	timerBlock.remove();
}

function clearGameField () {
	gameField.innerHTML = "";
}

