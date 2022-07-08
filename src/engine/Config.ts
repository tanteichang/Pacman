export class ConfigBuilder {
    screenWidth: number = 0
    screenHeight: number = 0

    constructor() {
    }

    setScreenWidth(width: number): ConfigBuilder {
        this.screenWidth = width
        return this
    }
    setScreenHeight(height: number): ConfigBuilder {
        this.screenHeight = height
        return this
    }
}

export default class Config {
    screenWidth: number
    screenHeight: number
    constructor(builder: ConfigBuilder) {
        this.screenWidth = builder.screenWidth
        this.screenHeight = builder.screenHeight
    }
}