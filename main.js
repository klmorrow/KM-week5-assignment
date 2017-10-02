console.log('connected');
$('#submit-btn').click(changeBackground)

function changeBackground(event) {
  event.preventDefault();
  var userInput = $('#city-type').val();
    if (userInput === 'nyc' || userInput === 'new york' || userInput === 'new york city') {
      $('body').addClass('nyc');
      $('#city-type').val('');
  }
    else if (userInput === 'SF' || userInput === 'San Francisco' || userInput === 'Bay Area') {
      $('body').addClass('sf');
      $('#city-type').val('');
    }
    else if (userInput === 'Austin' || userInput === 'ATX') {
      $('body').addClass('austin');
      $('#city-type').val('');
    }
    else if (userInput === 'LA' || userInput === 'LAX' || userInput === 'Los Angeles') {
      $('body').addClass('la');
      $('#city-type').val('');
    }
    else if (userInput === 'Sydney' || userInput === 'SYD') {
      $('body').addClass('sydney');
      $('#city-type').val('');
    }
}
