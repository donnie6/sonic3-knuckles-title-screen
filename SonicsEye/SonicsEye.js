/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class SonicsEye extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./SonicsEye/costumes/costume1.svg", {
        x: 16,
        y: 24
      }),
      new Costume("costume2", "./SonicsEye/costumes/costume2.svg", {
        x: 16,
        y: 24
      }),
      new Costume("costume3", "./SonicsEye/costumes/costume3.svg", {
        x: 16,
        y: 24
      }),
      new Costume("costume4", "./SonicsEye/costumes/costume4.svg", {
        x: 16,
        y: 24
      }),
      new Costume("costume5", "./SonicsEye/costumes/costume5.svg", {
        x: 16,
        y: 24
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
      this.moveAhead();
      this.goto(-40, 40);
      yield;
    }
  }

  *whenIReceiveRing() {
    this.visible = true;
    this.costume = "costume1";
  }

  *whenIReceiveRibbon() {
    yield* this.wait(0.5);
    for (let i = 0; i < 4; i++) {
      this.costumeNumber += 1;
      yield* this.wait(0.13);
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
