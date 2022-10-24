/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stuff extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Stuff/costumes/costume1.svg", {
        x: 407,
        y: 80.69998500000003
      })
    ];

    this.sounds = [
      new Sound(
        "Don't listen to this",
        "./Stuff/sounds/Don't listen to this.wav"
      )
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Ring" }, this.whenIReceiveRing)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    while (true) {
      this.moveAhead();
      yield;
    }
  }

  *whenIReceiveRing() {
    this.visible = true;
  }
}
