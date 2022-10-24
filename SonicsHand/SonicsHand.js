/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class SonicsHand extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./SonicsHand/costumes/costume1.svg", {
        x: 24,
        y: 28
      }),
      new Costume("costume2", "./SonicsHand/costumes/costume2.svg", {
        x: 24,
        y: 28
      }),
      new Costume("costume3", "./SonicsHand/costumes/costume3.svg", {
        x: 24.00000000000003,
        y: 28
      }),
      new Costume("costume4", "./SonicsHand/costumes/costume4.svg", {
        x: 24,
        y: 28
      }),
      new Costume("costume5", "./SonicsHand/costumes/costume5.svg", {
        x: 24,
        y: 28
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Ring" }, this.whenIReceiveRing),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Ribbon" },
        this.whenIReceiveRibbon
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Fade to black" },
        this.whenIReceiveFadeToBlack
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    while (true) {
      this.goto(40, 20);
      this.moveAhead();
      yield;
    }
  }

  *whenIReceiveRing() {
    this.visible = true;
    this.costume = "costume1";
  }

  *whenIReceiveRibbon() {
    yield* this.wait(1.5);
    for (let i = 0; i < 4; i++) {
      yield* this.wait(0.09);
      this.costumeNumber += 1;
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
