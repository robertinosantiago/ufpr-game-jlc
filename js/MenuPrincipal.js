class MenuPrincipal extends Phaser.Scene {
    constructor() {
        super({key: 'menuPrincipal'});
    }

    preload() {
        this.load.image('logo', 'assets/logo.png');
        this.load.image('jogar', 'assets/jogar.png');
        this.load.image('sobre', 'assets/sobre.png');
    }

    create() {
        this.logo = this.add.image(300, 110, 'logo');
        this.jogar = this.add.image(350, 200, 'jogar').setInteractive();
        this.sobre = this.add.image(400, 250, 'sobre').setInteractive();

        this.jogar.on('pointerdown', function(pointer){
            this.scene.start('abertura');
        }, this);

        this.sobre.on('pointerdown', function(pointer){
            $('#modalSobre').modal('show');
        });
        
    }
}