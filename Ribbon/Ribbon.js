/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Ribbon extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Sonic 3 Ribbon", "./Ribbon/costumes/Sonic 3 Ribbon.png", {
        x: 256,
        y: 19
      }),
      new Costume("Sonic 3 Ribbon2", "./Ribbon/costumes/Sonic 3 Ribbon2.png", {
        x: 256,
        y: 19
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "Ring" }, this.whenIReceiveRing),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Ring" }, this.whenIReceiveRing2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Fade to black" },
        this.whenIReceiveFadeToBlack
      )
    ];

    this.vars.ySpeed = -174;
  }

  *whenIReceiveRing() {
    this.moveAhead();
    this.visible = true;
    yield* this.wait(0);
    while (!(this.y > -2)) {
      this.vars.ySpeed += 8.2;
      this.y = this.vars.ySpeed;
      yield;
    }
    yield* this.wait(0);
    for (let i = 0; i < 2; i++) {
      this.vars.ySpeed += 1.4;
      this.y = this.vars.ySpeed;
      yield;
    }
    yield* this.wait(0.1);
    for (let i = 0; i < 10; i++) {
      this.vars.ySpeed += -4.8;
      this.y = this.vars.ySpeed;
      yield;
    }
    yield* this.wait(0.1);
    for (let i = 0; i < 7; i++) {
      this.vars.ySpeed += 4.2;
      this.y = this.vars.ySpeed;
      yield;
    }
    this.costume = "Sonic 3 Ribbon2";
    this.broadcast("Ribbon");
  }

  *whenGreenFlagClicked() {
    this.goto(0, -174);
    this.vars.ySpeed = -174;
    this.visible = false;
    this.costume = "Sonic 3 Ribbon";
    this.moveBehind();
  }

  *whenIReceiveRing2() {
    while (true) {
      this.moveAhead();
      yield;
    }
  }

  *whenIReceiveFadeToBlack() {
    for (let i = 0; i < 10; i++) {
      this.effects.brightness += -10;
      yield* this.wait(0);
      yield;
    }
  }
}
