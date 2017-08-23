import anime from 'animejs';

class Anime {
	messageSlide() {
		anime({targets: '.message-bubble--flexbox', translateX: 200});

	};
	cardExpand() {
		var logo_anim_in = anime({
			targets: ['.convo-card'],
			rotate: 10,
			duration: 400,
			autoplay: false,
			easing: 'easeInOutSine',
			loop: false
		});


  };
messageSlideMine(){ anime({
    targets: '.message-bubble--flexbox',
    translateX: -12,

      });

    };
cardSwipe(cb){
  anime({
  targets: '.convo-card',
  rotate: "-25deg",
  translateX: -2000,
  // duration: 500,
  easing: "easeOutCirc"
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

buttonPop(){
	anime({
		targets: '.send-button',
		scale: 1.3,
		duration: 500

	})
}

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
