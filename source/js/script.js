// modules
import mobileHeight from './modules/mobile-height-adjust.js';
import slider from './modules/slider.js';
import menu from './modules/menu.js';
import footer from './modules/footer.js';
import chat from './modules/chat.js';
import result from './modules/result.js';
import form from './modules/form.js';
import social from './modules/social.js';
import FullPageScroll from './modules/full-page-scroll';

// init modules
mobileHeight();
slider();
menu();
footer();
chat();
result();
form();
social();

const fullPageScroll = new FullPageScroll();
fullPageScroll.init();

document.addEventListener(`DOMContentLoaded`, function () {
  document.querySelector(`body`).classList.add(`ready`);

  document.body.addEventListener(`click`, function (e) {
    if (e.target.dataset.href === `prizes` || e.target.dataset.href === `game`) {
      document.querySelector(`.intermediate-bg`).style.height = `100%`;
      setTimeout(function () {
        document.querySelector(`.intermediate-bg`).style.height = `0`;
      }, 500);
    }
  });
  document.body.addEventListener(`wheel`, function () {
    if (document.querySelector(`#prizes`).classList.contains(`active`) || document.querySelector(`#game`).classList.contains(`active`)) {
      document.querySelector(`.intermediate-bg`).style.height = `100%`;
      setTimeout(function () {
        document.querySelector(`.intermediate-bg`).style.height = `0`;
      }, 500);
    }
  });

  // animation text
  class AccentTypographyBuild {
    constructor(
        elementSelector,
        timer,
        classForActivate,
        property
    ) {
      this._TIME_SPACE = 100;

      this._elementSelector = elementSelector;
      this._timer = timer;
      this._classForActivate = classForActivate;
      this._property = property;
      this._element = document.querySelector(this._elementSelector);
      this._timeOffset = 0;
      
      this.prePareText();
    }
    createElement(letter) {
      const span = document.createElement(`span`);
      span.textContent = letter;
      span.style.transition = `${this._property} ${this._timer}ms ease ${this._timeOffset}ms`;
      this._timeOffset += 20;
      return span;
    }
    prePareText() {
      if (!this._element) {
        return;
      }
      const text = this._element.textContent.trim().split(` `).filter((latter)=>latter !== ``);

      const content = text.reduce((fragmentParent, word) => {
        const wordElement = Array.from(word).reduce((fragment, latter) => {
          fragment.appendChild(this.createElement(latter));
          return fragment;
        }, document.createDocumentFragment());
        const wordContainer = document.createElement(`span`);
        wordContainer.classList.add(`text__word`);
        wordContainer.appendChild(wordElement);
        fragmentParent.appendChild(wordContainer);
        return fragmentParent;
      }, document.createDocumentFragment());

      this._element.innerHTML = ``;
      this._element.appendChild(content);
    }
    runAnimation() {
      if (!this._element) {
        return;
      }
      this._element.classList.add(this._classForActivate);
    }

    destroyAnimation() {
      this._element.classList.remove(this._classForActivate);
    }
  }

  const animationTopScreenTextLine = new AccentTypographyBuild(`.intro__title`, 500, `active`, `transform`);
  const animationBottomScreenTextLine = new AccentTypographyBuild(`.intro__label`, 500, `active`, `transform`);
  setTimeout(()=>{
    animationTopScreenTextLine.runAnimation();
  }, 500);
  setTimeout(() => {
    animationBottomScreenTextLine.runAnimation();
  }, 500);
});

// 1. нужно подключить шейдеры (доделать!)
const setup3dInfrastructure = () => {
  const initialWidth = window.innerWidth;
  const initialHeight = window.innerHeight;
}
// end
// 2. сцены со смещением цвета Hue

// end

// 3. эффект сферического смещения — «Лупа»

// end

// 5. Mигание интенсивности эффекта Hue

// end

// 6. Анимация движения пузырьков

// end

// 7. Источники света на сцену личного проекта

// end

// 11. RawShaderMaterial

// end

// 12 . Замочная скважина

// end

// 13. «Замочная скважина»

// end

// 14.  ИИ «Соня»

// end


