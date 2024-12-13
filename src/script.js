// Enable JavaScript strict mode
'use strict';

// Variable required for the timer
let secCounter;


// A function to shorten querySelector calls
function qs( cls )
{
	return document.querySelector( cls );
}


// A function to start the timer
function playTimer()
{
	// Call decreaseSec() every second to update the time
	secCounter = setInterval( decreaseSec, 1000 );

	// Change the onclick event
	document.querySelector( '.playBtn' ).setAttribute( 'onclick', 'pauseTimer()' );

	// Change the title attribute
	document.querySelector( '.playBtn' ).setAttribute( 'title', 'Pause Pomodoro' );

	// Change play button image
	document.querySelector( '.playBtn' ).querySelector( 'img' ).setAttribute( 'src', 'src/pause.svg' );

	// Enable reset button
	document.querySelector( '.resetBtn' ).removeAttribute( 'disabled' );
} // End of playTimer()


// A function to decrease the time in the timer
function decreaseSec()
{
	let currentMin = parseInt( document.querySelector( '.min' ).innerText );
	let currentSec = parseInt( document.querySelector( '.sec' ).innerText );

	if ( currentSec === 0 && currentMin === 0 )
	{
		resetTimer();
		if ( document.querySelector( '.task' ).value === '' )
		{
			alert( 'Times Up!' );
		}
		else
		{
			alert( '\'' + document.querySelector( '.task' ).value + '\' ends!' );
		}
	}
	else if ( currentSec === 0 && currentMin > 0 )
	{
		document.querySelector( '.sec' ).innerText = '59';
		if ( currentMin < 11 )
		{
			document.querySelector( '.min' ).innerText = '0' + --currentMin;
		}
		else
		{
			document.querySelector( '.min' ).innerText = --currentMin;
		}
	}
	else if ( currentSec < 11 )
	{
		document.querySelector( '.sec' ).innerText = '0' + --currentSec;
	}
	else
	{
		document.querySelector( '.sec' ).innerText = --currentSec;
	}

	document.title = document.querySelector( '.timer' ).innerText;
} // End of decreaseSec()


// A function to pause the timer
function pauseTimer()
{
	// Turn off the timer
	clearTimeout( secCounter );

	// Change the onclick event
	document.querySelector( '.playBtn' ).setAttribute( 'onclick', 'playTimer()' );

	// Change the title attribute
	document.querySelector( '.playBtn' ).setAttribute( 'title', 'Play Pomodoro' );

	// Change play button image
	document.querySelector( '.playBtn' ).querySelector( 'img' ).setAttribute( 'src', 'src/play.svg' );

	// Set attribute
	document.title = 'Pomodoro Timer';
} // End of pauseTimer()


// A function to reset the pomodoro
function resetTimer()
{
	// Turn off the timer
	clearTimeout( secCounter );

	// Change the onclick event
	document.querySelector( '.playBtn' ).setAttribute( 'onclick', 'playTimer()' );

	// Change the title attribute
	document.querySelector( '.playBtn' ).setAttribute( 'title', 'Play Pomodoro' );

	// Change play button image
	document.querySelector( '.playBtn' ).querySelector( 'img' ).setAttribute( 'src', 'src/play.svg' );

	// Disable reset button
	document.querySelector( '.resetBtn' ).setAttribute( 'disabled', 'true' );

	// Set default time
	document.querySelector( '.min' ).innerText = '25';
	document.querySelector( '.sec' ).innerText = '00';
} // End of resetTimer()
