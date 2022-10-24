/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Tails extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("70847", "./Tails/costumes/70847.png", { x: 71, y: 43 }),
      new Costume("2", "./Tails/costumes/2.png", { x: 71, y: 43 }),
      new Costume("3", "./Tails/costumes/3.png", { x: 71, y: 43 }),
      new Costume("4", "./Tails/costumes/4.png", { x: 71, y: 43 }),
      new Costume("5", "./Tails/costumes/5.png", { x: 71, y: 43 }),
      new Costume("6", "./Tails/costumes/6.png", { x: 71, y: 43 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Ring" }, this.whenIReceiveRing)
    ];
  }

  *whenGreenFlagClicked() {
    this.costume = 70847;
    this.goto(-250, 74);
    this.visible = false;
    while (true) {
      this.costumeNumber += 1;
      yield;
    }
  }

  *whenIReceiveRing() {
    this.moveAhead();
    this.moveBehind(4);
    this.visible = true;
    yield* this.wait(0.05);
    yield* this.glide(14.5, 265, 74);
    this.visible = false;
    yield* this.wait(0.1);
    this.broadcast("Fade to black");
  }
}
