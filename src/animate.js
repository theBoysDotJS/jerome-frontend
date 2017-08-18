import anime from 'animejs';

class Anime {
messageSlide(){ anime({
  targets: '.message-bubble--flexbox',
  translateX: 200,

    });

  };
cardSwipe(cb){
  anime({
  targets: '.convo-card',
  translateY: 2000,
  duration: 250,
  easing: "easeOutQuad"
})
 cb();
};
chatSwipe(){
  anime({
    targets: '.chat-input',
    translateY: [2000, 0],
    duration: 1500,
    easing: "easeInOutQuad"
  });
};

titleSwipe(){
  anime({
    targets: '.nav-title',
    translateY: [0, -200, 0],
    duration: 2000,
    elasticity: 355
  })
};



}
export default new Anime();
