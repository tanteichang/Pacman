import Config, { ConfigBuilder } from "./Config";


export default class Application {
    private config: Config
    protected context: CanvasRenderingContext2D
    private canvas: HTMLCanvasElement
    constructor() {
        this.config = new ConfigBuilder()
        this.attchElement("canvas")
    }

    private updateCanvas() {
        this.canvas.width = this.config.screenWidth;
        this.canvas.height = this.config.screenHeight;
    }

    public setConfig(config: Config) {
        this.config = config
        this.updateCanvas()
    }

    public attchElement(id: string) {
        this.canvas = document.querySelector(id)!!;
        if (this.canvas === null) { throw new Error('canvas not found'); }
        this.context = this.canvas.getContext('2d')!!;
    }
}