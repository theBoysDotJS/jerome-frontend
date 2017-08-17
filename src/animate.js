import anime from 'animejs';

class Anime {
messageSlide(){ anime({
  targets: '.message-bubble--flexbox',
  translateX: 200,

    });

  };
cardExpand(){
  var logo_anim_in = anime({
  targets: ['.convo-card'],
  rotate: 10,
  duration: 400,
  autoplay: false,
  easing: 'easeInOutSine',
  loop: false
});

function over(){
  logo_anim_in.play({
    rotate: 10,
  });
}

function out(){
  logo_anim_in.play({
    rotate: 0,
  });
}


}
}
export default new Anime();
