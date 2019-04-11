class Encerramento extends Phaser.Scene {
    constructor() {
        super({key: 'encerramento'});
    }

    preload() {
        this.load.image('logo', 'assets/logo.png');
        
    }

    create() {
        this.logo = this.add.image(400, 300, 'logo');
    }
}