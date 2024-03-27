import { Entity } from './entity';
import { Position } from './position';

export class Velocity {
    vx: number;
    vy: number;
    constructor(vx: any, vy: any) {
        this.vx = vx;
        this.vy = vy;
    }

    // TODO: Do I want this????
    move(position: Position) {
        position.x += this.vx;
        position.y += this.vy;
    }

    // TODO: Or...do I want this????
    static move2(entity: Entity) {
        entity.position.x += entity.velocity.vx;
        entity.position.y += entity.velocity.vy;
    }
}