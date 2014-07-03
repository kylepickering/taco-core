$(document).ready(function(){
  var spins = 0,
      steps = 0,
      word = 'Taco',
      $taco = $('#taco'),
      $body = $('body'),
      $spinCounter = $('#spins'),
      $message = $('<div id="message"/>'),
      image = 'http://tacospin.com/assets/img/taco.jpg';

  if (image) {
    $taco.css('background-image', 'url(' + image + ')');
  }

  setInterval(
    function () {
      $taco.animate({rotate: '+=10deg'}, 0);
      steps++;

      if(steps === 36){
        $spinCounter.show();
        steps = 0;
        spins++;
        $spinCounter.html(spins);
      }

      if(spins === 10){
        $message.html('You\'re Spinning a ' + word);
        $body.append($message);
        $message.fadeIn('slow');
      }

      if(spins === 20){
        $message.html('You Really Like ' + word + '!');
        $body.append($message);
      }

      if(spins === 30){
        $message.fadeOut('slow');
      }

      if(spins === 40){
        $message.html('You\'re a Mother F\'ing ' + word);
        $message.fadeIn('slow');
        $body.append($message);
      }

      if(spins === 50){
        $message.html('You\'re My ' + word);
        $body.append($message);
      }

      if(spins === 100){
        $message.html('One Hundred Spins! You Don\'t Fool Around.');
        $body.append($message);
        $message.fadeIn('slow');
      }

      if(spins === 120){
        $message.fadeOut('slow');
      }

      if(spins === 10000){
        $message.html('Uhhh... ' + word + ' Spin Master?');
        $body.append($message);
        $message.fadeIn('slow');
      }

      if(spins === 100000){
        $message.html('Nobody Likes ' + word + ' More Than You.');
        $body.append($message);
      }

      if(spins === 1000000){
        $message.html('Time For You to Open a ' + word + ' Shop.');
        $body.append($message);
      }
    }, 40
  );
});
