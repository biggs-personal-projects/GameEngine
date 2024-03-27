import { Acceleration } from "./acceleration";
import { Position } from "./position";
import { Velocity } from "./velocity";



export class Entity {
  position: Position;
  velocity: Velocity;
  acceleration: Acceleration;

  update(): void {
    
  }

  move() {
    this.position.x += this.velocity.vx;
    this.position.y += this.velocity.vy;
    // TODO: Add acceleration...if we use it?
  }
}