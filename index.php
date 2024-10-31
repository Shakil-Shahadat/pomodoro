<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Brain Trainer - A Pomodoro Productivity Timer</title>
	<link rel="shortcut icon" href="src/favicon.ico">
	<link rel="stylesheet" href="src/style.css">
	<link rel="stylesheet" href="src/font-awesome-4.7.0/css/font-awesome.min.css">
</head>
<body>

<div id="container">

	<input id="task" type="text" placeholder="Task" size="30">

	<div id="timer">
		<span id="min">25</span>:<span id="sec">00</span>
	</div>

	<div id="controls">

		<button id="button-play" onclick="playTimer()" title="Play Pomodoro">
			<i class="fa fa-play"></i>
		</button>

		<button onclick="resetTimer()" disabled="true" title="Reset Timer">
			<i class="fa fa-repeat"></i>
		</button>

		<button onclick="" title="Take a break">
			<i class="fa fa-coffee"></i>
		</button>

		<button onclick="" title="Info">
			<i class="fa fa-info"></i>
		</button>

		<button onclick="" title="Settings">
			<i class="fa fa-cog"></i>
		</button>

	</div> <!-- div controls finish -->

</div>

<script src="../../src/jquery/jquery.js"></script>
<script src="src/script.js"></script>
</body>
</html>
