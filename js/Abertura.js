class Abertura extends Phaser.Scene {
    constructor() {
        super({key: 'abertura'});
    }

    preload() {
        this.load.image('abertura', 'assets/abertura.png');
        this.load.image('seta', 'assets/seta.png');
        
    }

    create() {
        this.abertura = this.add.image(400, 300, 'abertura');
        this.seta = this.add.image(720, 500, 'seta').setInteractive();
        
        this.seta.on('pointerdown', function(pointer){ 
            this.scene.start('cenario1');
        }, this);
        
    }
}