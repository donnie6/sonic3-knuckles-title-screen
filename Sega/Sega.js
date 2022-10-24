/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sega extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("sega logo", "./Sega/costumes/sega logo.png", {
        x: 320,
        y: 253
      }),
      new Costume("sega logo2", "./Sega/costumes/sega logo2.png", {
        x: 320,
        y: 253
      }),
      new Costume("sega logo3", "./Sega/costumes/sega logo3.png", {
        x: 320,
        y: 253
      }),
      new Costume("sega logo4", "./Sega/costumes/sega logo4.png", {
        x: 320,
        y: 253
      }),
      new Costume("sega logo5", "./Sega/costumes/sega logo5.svg", {
        x: 91.5,
        y: 31
      }),
      new Costume("sega logo6", "./Sega/costumes/sega logo6.svg", {
        x: 91.5,
        y: 70
      }),
      new Costume("sega logo7", "./Sega/costumes/sega logo7.svg", {
        x: 91.5,
        y: 80
      }),
      new Costume("sega logo8", "./Sega/costumes/sega logo8.svg", {
        x: 91.5,
        y: 92
      }),
      new Costume("sega logo9", "./Sega/costumes/sega logo9.svg", {
        x: 91.5,
        y: 105
      }),
      new Costume("sega logo10", "./Sega/costumes/sega logo10.svg", {
        x: 91.5,
        y: 114
      }),
      new Costume("sega logo11", "./Sega/costumes/sega logo11.svg", {
        x: 91.5,
        y: 114
      }),
      new Costume("sega logo12", "./Sega/costumes/sega logo12.svg", {
        x: 160,
        y: 103
      }),
      new Costume("sega logo13", "./Sega/costumes/sega logo13.svg", {
        x: 160,
        y: 91
      }),
      new Costume("sega logo14", "./Sega/costumes/sega logo14.svg", {
        x: 116,
        y: 112
      }),
      new Costume("sega logo15", "./Sega/costumes/sega logo15.svg", {
        x: 91,
        y: 108
      }),
      new Costume("sega logo16", "./Sega/costumes/sega logo16.svg", {
        x: 64,
        y: 107
      }),
      new Costume("sega logo17", "./Sega/costumes/sega logo17.png", {
        x: 320,
        y: 252
      })
    ];

    this.sounds = [
      new Sound("Sega logo", "./Sega/sounds/Sega logo.wav"),
      new Sound(
        "Sonic 3 Title Screen",
        "./Sega/sounds/Sonic 3 Title Screen.mp3"
      ),
      new Sound(
        "Title Screen - Sonic & Knuckles [OST]",
        "./Sega/sounds/Title Screen - Sonic & Knuckles [OST].mp3"
      )
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = true;
    this.costume = "sega logo";
    this.moveAhead();
    this.goto(0, 0);
    yield* this.playSoundUntilDone("Sega logo");
    yield* this.wait(0.1);
    yield* this.startSound("Sonic 3 Title Screen");
    for (let i = 0; i < 15; i++) {
      this.costumeNumber += 1;
      yield* this.wait(0.1);
      yield;
    }
    yield* this.wait(this.random(0.009, 0.2));
    this.costume = "sega logo16";
    yield* this.wait(this.random(0, 0.009));
    this.costume = "sega logo17";
    this.broadcast("Ring");
    yield* this.wait(0.1);
    this.visible = false;
  }
}
