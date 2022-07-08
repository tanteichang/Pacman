import Application from "./Application";

interface IPosition {
    x: number;
    y: number
}

class Boundary extends Application {
    private postion: IPosition;
    static width: number = 40
    static height: number = 40

    constructor(position: IPosition) {
        super()
        this.postion = position;
    }

    draw(): void {
        this.context.fillStyle = 'blue';
        this.context.fillRect(this.postion.x, this.postion.y, Boundary.width, Boundary.height);
    }
}

export default Boundary;
