function playTimer()
{
	secCounter = setInterval( decreaseSec, 1000 );
	$( '#button-play' )
		.attr( 'onclick', 'pauseTimer()' )
		.find( 'i' )
		.removeClass( 'fa-play' )
		.addClass( 'fa-pause' );
	$( 'button' ).eq( 1 ).attr( 'disabled', false );
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
	$( '#button-play' )
		.attr( 'onclick', 'playTimer()' )
		.find( 'i' )
		.removeClass( 'fa-pause' )
		.addClass( 'fa-play' );

	$( 'title' ).text( 'Brain Trainer - A Pomodoro Productivity Timer' );
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