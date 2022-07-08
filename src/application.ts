import Application from './engine/Application';
import Config, { ConfigBuilder } from './engine/Config'
import { initMap } from './game/map';

function init() {
    const application = new Application()
    application.attchElement("#gameFrame")
    const config = new ConfigBuilder()
        .setScreenHeight(window.innerHeight)
        .setScreenWidth(window.innerWidth)
    const appConfig = new Config(config)
    application.setConfig(appConfig)


    initMap()
}


export {
    init
}
