/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Background extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("5", "./Background/costumes/5.png", { x: 320, y: 253 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Ring" }, this.whenIReceiveRing),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Fade to black" },
        this.whenIReceiveFadeToBlack
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveRing() {
    this.visible = true;
    this.costume = 5;
  }

  *whenIReceiveFadeToBlack() {
    for (let i = 0; i < 10; i++) {
      this.effects.brightness += -10;
      yield* this.wait(0);
      yield;
    }
  }
}
