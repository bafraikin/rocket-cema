
class Rocket {
  constructor() {
    this.rocket = document.querySelector("#rocket");
    var rocketBound = this.rocket.getBoundingClientRect();
    this.y = rocketBound.y + rocketBound.height / 2;
    this.x = rocketBound.x + rocketBound.width / 2;
  }

  giveAngle(angle) {
    this.angle = angle;
    this.rocket.style.transform = "rotate(" + angle + "deg)" ;
  }

  giveSpeed(speed) {
    this.speed = speed;
  }

  launchIt() {
      Math.tan(angle);
  }
}
