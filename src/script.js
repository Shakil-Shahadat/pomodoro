'use strict';

let secCounter;


function playTimer()
{
	secCounter = setInterval( decreaseSec, 1000 );

	// Change the onclick event
	document.querySelector( '.playBtn' ).setAttribute( 'onclick', 'pauseTimer()' );

	// Change the title attribute
	document.querySelector( '.playBtn' ).setAttribute( 'title', 'Pause Pomodoro' );

	// Change play button image
	document.querySelector( '.playBtn' ).querySelector( 'img' ).setAttribute( 'src', 'src/pause.svg' );

	// Enable reset button
	document.querySelector( '.resetBtn' ).removeAttribute( 'disabled' );
}

function decreaseSec()
{
	var currentSec = parseInt( $( '#sec' ).text() );
	var currentMin = parseInt( $( '#min' ).text() );

	if ( currentSec === 0 && currentMin === 0 )
	{
		resetTimer();
		alert( 'Times Up!' );
	}
	else if ( currentSec === 0 && currentMin > 0 )
	{
		$( '#sec' ).text( '59' );
		if ( currentMin < 11 ) $( '#min' ).text( '0' + --currentMin );
		else $( '#min' ).text( --currentMin );
	}
	else if ( currentSec < 11 ) $( '#sec' ).text( '0' + --currentSec );
	else $( '#sec' ).text( --currentSec );

	$( 'title' ).text( $( '#timer' ).text().trim() );
}

function pauseTimer()
{
	clearTimeout( secCounter );

	// Change the onclick event
	document.querySelector( '.playBtn' ).setAttribute( 'onclick', 'playTimer()' );

	// Change play button image
	document.querySelector( '.playBtn' ).querySelector( 'img' ).setAttribute( 'src', 'src/play.svg' );

	// Set attribute
	document.title = 'Brain Trainer - A Pomodoro Productivity Timer';
}

function resetTimer()
{
	clearTimeout( secCounter );
	$( 'button' ).eq( 0 ).find( 'i' ).removeClass( 'fa-pause' );
	$( 'button' ).eq( 0 ).find( 'i' ).addClass( 'fa-play' );
	$( 'button' ).eq( 0 ).attr( 'onclick', 'playTimer()' );
	$( 'button' ).eq( 1 ).attr( 'disabled', true );
	$( '#min' ).text( '25' );
	$( '#sec' ).text( '00' );
}
