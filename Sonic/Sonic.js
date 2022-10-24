/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sonic extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("sonic in ring", "./Sonic/costumes/sonic in ring.png", {
        x: 232,
        y: 214
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "Ring" }, this.whenIReceiveRing),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Fade to black" },
        this.whenIReceiveFadeToBlack
      )
    ];
  }

  *whenIReceiveRing() {
    this.visible = true;
    this.goto(0, 0);
    this.moveAhead();
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveFadeToBlack() {
    for (let i = 0; i < 10; i++) {
      this.effects.brightness += -10;
      yield* this.wait(0);
      yield;
    }
  }
}
