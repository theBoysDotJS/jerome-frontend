import anime from 'animejs';

class Anime {
messageSlide(){ anime({
  targets: '.message-bubble--flexbox',
  translateX: 200,

    });
  }
}

export default new Anime();
