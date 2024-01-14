import * as Const from '../const'

type directionType = "up" | "down" | "left" | "right" | undefined;

type collisionCheckerType = {
    direction:directionType
    callback:()=>void,
}

const collisionChecker = ({direction,callback}:collisionCheckerType) =>{

    switch (direction) {
          case "up": {
            if (
              active.x + this.gp.tilesize >= passiveX + passive.x - 3 &&
              active.x <= passiveX + this.gp.tilesize + passive.x - 3 &&
              active.y + this.gp.tilesize >= passiveY + passive.y &&
              active.y <= passiveY + this.gp.tilesize + passive.y
            ) {
              callback(index);
            }
            break;
          }
          case "down": {
            if (
              active.x + this.gp.tilesize >= passiveX + passive.x &&
              active.x <= passiveX + this.gp.tilesize + passive.x &&
              active.y + this.gp.tilesize + 80 >= passiveY + passive.y &&
              active.y <= passiveY + this.gp.tilesize + passive.y - 20
            ) {
              callback(index);
            }
            break;
          }
          case "left": {
            if (
              active.x + this.gp.tilesize >= passiveX + passive.x &&
              active.x - 20 <= passiveX + this.gp.tilesize + passive.x &&
              active.y + this.gp.tilesize >= passiveY + passive.y - 20 &&
              active.y <= passiveY + this.gp.tilesize + passive.y - 20
            ) {
              callback(index);
            }
            break;
          }
          case "right": {
            if (
              active.x + this.gp.tilesize + 20 >= passiveX + passive.x &&
              active.x <= passiveX + this.gp.tilesize + passive.x &&
              active.y + this.gp.tilesize >= passiveY + passive.y - 20 &&
              active.y <= passiveY + this.gp.tilesize + passive.y - 20
            ) {
              callback(index);
            }
            break;
          }
}
// type collisionCheckingType = {
//     direction: "up" | "down" | "left" | "right";
//     passive: { x: number; y: number };
//     active: { x: number; y: number };
//     index?: number;
//   };
// const collisionChecking = (
//     { direction, passive, active, index }: collisionCheckingType,
//     collision: (index:number)=>void
//   ) => {
//     let passiveX: number = passive.x - active.x;
//     let passiveY: number = passive.y - active.y;

//     switch (direction) {
//       case "up": {
//         if (
//           active.x + this.gp.tilesize >= passiveX + passive.x - 3 &&
//           active.x <= passiveX + this.gp.tilesize + passive.x - 3 &&
//           active.y + this.gp.tilesize >= passiveY + passive.y &&
//           active.y <= passiveY + this.gp.tilesize + passive.y
//         ) {
//           collision(index);
//         }
//         break;
//       }
//       case "down": {
//         if (
//           active.x + this.gp.tilesize >= passiveX + passive.x &&
//           active.x <= passiveX + this.gp.tilesize + passive.x &&
//           active.y + this.gp.tilesize + 80 >= passiveY + passive.y &&
//           active.y <= passiveY + this.gp.tilesize + passive.y - 20
//         ) {
//           collision(index);
//         }
//         break;
//       }
//       case "left": {
//         if (
//           active.x + this.gp.tilesize >= passiveX + passive.x &&
//           active.x - 20 <= passiveX + this.gp.tilesize + passive.x &&
//           active.y + this.gp.tilesize >= passiveY + passive.y - 20 &&
//           active.y <= passiveY + this.gp.tilesize + passive.y - 20
//         ) {
//           collision(index);
//         }
//         break;
//       }
//       case "right": {
//         if (
//           active.x + this.gp.tilesize + 20 >= passiveX + passive.x &&
//           active.x <= passiveX + this.gp.tilesize + passive.x &&
//           active.y + this.gp.tilesize >= passiveY + passive.y - 20 &&
//           active.y <= passiveY + this.gp.tilesize + passive.y - 20
//         ) {
//           collision(index);
//         }
//         break;
//       }
//     }
//   };
