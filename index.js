import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Sega from "./Sega/Sega.js";
import Sonic from "./Sonic/Sonic.js";
import Background from "./Background/Background.js";
import SonicsEye from "./SonicsEye/SonicsEye.js";
import SonicsHand from "./SonicsHand/SonicsHand.js";
import Tails from "./Tails/Tails.js";
import Ribbon from "./Ribbon/Ribbon.js";
import Stuff from "./Stuff/Stuff.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Sega: new Sega({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 10,
    size: 101,
    visible: true,
    layerOrder: 5
  }),
  Sonic: new Sonic({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 4
  }),
  Background: new Background({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 2
  }),
  SonicsEye: new SonicsEye({
    x: -40,
    y: 40,
    direction: 90,
    costumeNumber: 5,
    size: 100,
    visible: false,
    layerOrder: 7
  }),
  SonicsHand: new SonicsHand({
    x: 40,
    y: 20,
    direction: 90,
    costumeNumber: 2,
    size: 100,
    visible: false,
    layerOrder: 6
  }),
  Tails: new Tails({
    x: -238,
    y: 74,
    direction: 90,
    costumeNumber: 2,
    size: 100,
    visible: false,
    layerOrder: 3
  }),
  Ribbon: new Ribbon({
    x: 0,
    y: -174,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 1
  }),
  Stuff: new Stuff({
    x: 36,
    y: 28,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 8
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
