<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Brain Trainer - A Pomodoro Productivity Timer</title>
	<link rel="shortcut icon" href="src/favicon.ico">
	<link rel="stylesheet" href="src/style.css">
</head>
<body>

<div class="container">

	<input class="task" type="text" placeholder="Task Name" size="30">

	<div class="timer">
		<span class="min">25</span>:<span class="sec">00</span>
	</div>

	<div class="controls">

		<button class="playBtn" onclick="playTimer()" title="Play Pomodoro">
			<img src="src/play.svg">
		</button>

		<button class="resetBtn" onclick="resetTimer()" disabled="true" title="Reset Timer">
			<img src="src/arrow-counterclockwise.svg">
		</button>

		<button onclick="" title="Take a break">
			<img src="src/cup-hot.svg">
		</button>

		<button onclick="" title="Info">
			<img src="src/info-lg.svg">
		</button>

		<button onclick="" title="Settings">
			<img src="src/gear.svg">
		</button>

	</div>

</div>

<script src="src/script.js"></script>
</body>
</html>
