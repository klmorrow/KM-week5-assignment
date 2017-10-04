console.log('connected');
$('#submit-btn').click(changeBackground)

function removeBackground() {
  $('body').removeClass('nyc');
}
function changeBackground(event) {
  event.preventDefault();
  var userInput = $('#city-type').val();
  userInput = userInput.toLowerCase();
    if (userInput === 'nyc' || userInput === 'new york' || userInput === 'new york city') {
      removeBackground();
      $('body').addClass('nyc');
      $('#city-type').val('');
  }
    else if (userInput === 'sf' || userInput === 'san francisco' || userInput === 'bay area') {
      removeBackground();
      $('body').addClass('sf');
      $('#city-type').val('');
    }
    else if (userInput === 'austin' || userInput === 'atx') {
      removeBackground();
      $('body').addClass('austin');
      $('#city-type').val('');
    }
    else if (userInput === 'la' || userInput === 'lax' || userInput === 'los angeles') {
      removeBackground();
      $('body').addClass('la');
      $('#city-type').val('');
    }
    else if (userInput === 'sydney' || userInput === 'syd') {
      removeBackground();
      $('body').addClass('sydney');
      $('#city-type').val('');
    }
}
