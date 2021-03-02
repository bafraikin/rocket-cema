
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

class Rocket {
  constructor() {
    this.rocket = document.querySelector("#rocket");
    var rocketBound = this.rocket.getBoundingClientRect();
    this.y = rocketBound.top;
    this.x = rocketBound.right;
  }

  giveAngle(angle) {
    this.angle = angle;
    this.rocket.style.transform = "rotate(" + angle + "deg)" ;
  }

  giveSpeed(speed) {
    this.speed = speed;
  }

  degreeToRadian(degree) {
    return degree * (Math.PI / 180);
  }

  launchIt() {
    Math.tan(degreeToRadian(this.angle))
  }
}
