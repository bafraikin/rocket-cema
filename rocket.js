// const data = require("./data.js")

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

class Rocket {
  constructor(speed, angle) {
    this.rocket = document.querySelector("#rocket");
    var rocketBound = this.rocket.getBoundingClientRect();
    this.y = rocketBound.top;
    this.x = rocketBound.right;
    this.speed = speed;
    this.angle = angle;
    this.giveAngle();
    this.loadAsterdoid();
  }

  giveAngle() {
    if (this.angle <= 90 && this.angle >= 0)
      this.rocket.style.transform = "rotate(" + (90 - this.angle) + "deg)" ;
    if (this.angle > 90 && this.angle <= 180)
      this.rocket.style.transform = "rotate(" + (360 - (this.angle - 90))  + "deg)" ;
  }

  degreeToRadian(degree) {
    return degree * (Math.PI / 180);
  }

  calculateDirection() {
    if (this.angle >= 0 && this.angle < 45)
      this.launchIt(0, 80 - (0 / Math.tan(this.degreeToRadian(this.angle)) + 20));
    if (this.angle >= 45 && this.angle <= 90)
      this.launchIt(50 - 80 * Math.tan(this.degreeToRadian(90 - this.angle)), 0);
    if (this.angle > 90 && this.angle <= 135)
      this.launchIt(50 + 80 * Math.tan(this.degreeToRadian(this.angle - 90)), 0);
    if (this.angle >= 135 && this.angle <= 180)
      this.launchIt(100, 80 - (0 / Math.tan(this.degreeToRadian(this.angle)) + 20));
  }

  loadAsterdoid() {
    var cssAnimation = document.createElement('style');
    cssAnimation.type = 'text/css';
    let rules;
    if (this.angle == 60) {
      rules = document.createTextNode(
        '@keyframes asteroide { 0% { top: 30vh; left: 2vw;} 62% { top: 31vh; left: 69vw;} 100% {top: 0vh; left: 80vw;}}'
      );
    }
    else if (this.angle == 79) {
      rules = document.createTextNode(
        '@keyframes asteroide { 0% { top: 30vh; left: 2vw;} 50% { top: 35vh; left: 52vw;} 100% {top: 80vh; left: 80vw;}}'
      );
    }
    else {
      rules = document.createTextNode(
        '@keyframes asteroide { 0% { top: 30vh; left: 2vw;} 100% {top: 60vh; left: 100vw;}}'
      );
    }
    var addAnimationRule = document.createTextNode('#asteroide {animation: 7s linear 1s infinite running asteroide;}')
    cssAnimation.appendChild(rules);
    cssAnimation.appendChild(addAnimationRule);
    document.getElementsByTagName("head")[0].appendChild(cssAnimation); 
  };

  launchIt(finalX, finalY) {
    var cssAnimation = document.createElement('style');
    cssAnimation.type = 'text/css';
    var rules = document.createTextNode(
    '@keyframes rocket {' +
    '0% { right: var(--rocket-right); top: var(--rocket-top); }'+
    '100%' + `{ right: ${finalX}vw; top: ${finalY}vh }}`);
    var addAnimationRule = document.createTextNode('#rocket {animation: 7s linear 1s infinite running rocket;}')
    cssAnimation.appendChild(rules);
    cssAnimation.appendChild(addAnimationRule);
    document.getElementsByTagName("head")[0].appendChild(cssAnimation);    
  }
};

const rocket = new Rocket(data.speed, data.angle);
rocket.calculateDirection();