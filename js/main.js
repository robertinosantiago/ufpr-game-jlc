window.onload = function() {
    const config = {
        type: Phaser.Auto,
        parent: 'div-game',
        scale: {
            mode: Phaser.Scale.FIT,
            autoCenter: Phaser.Scale.CENTER_BOTH,
            width: 800,
            height: 600,
            
        },
        scene: [MenuPrincipal, Abertura, Cenario1, Cenario2, Encerramento]
    }

    const game = new Phaser.Game(config);
};