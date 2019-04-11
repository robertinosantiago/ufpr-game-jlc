class Cenario2 extends Phaser.Scene {

    constructor() {
        super({key: 'cenario2'});
    }

    preload() {
        this.load.image('c2-fundo', 'assets/cenario2/fundo.png');
        this.load.image('c2-folha', 'assets/cenario2/folha.png');
        this.load.image('c2-vaso', 'assets/cenario2/vaso.png');
        this.load.image('c2-abajur', 'assets/cenario2/abajur.png');

        this.load.image('c2-next', 'assets/seta.png');
    }

    create() {
        this.dica1 = false;
        this.dica2 = false;

        this.fundo = this.add.image(400, 300, 'c2-fundo');
        
        this.abajur = this.add.image(745, 380, 'c2-abajur').setInteractive();
        
        this.vaso = this.add.image(95, 470, 'c2-vaso').setInteractive();

        this.folha = this.add.image(650, 300, 'c2-folha').setInteractive();

        this.seta = this.add.image(720, 500, 'c2-next').setVisible(false).setInteractive();

        
        this.abajur.on('pointerdown', function(){
            $('#modalC2Dica1').modal('show');
            this.dica1 = true;
        }, this);
        
        this.vaso.on('pointerdown', function(){
            $('#modalC2Dica2').modal('show');
            this.dica2 = true;
        }, this);
        
        this.folha.on('pointerdown', function(){
            if (this.dica1 == true && this.dica2 == true) {
                $('#modalC2Questao').modal('show');
            }
        }, this);
        
        this.seta.on('pointerdown', function(){
            this.scene.start('encerramento');
        }, this);
        
        const app = this;
        
        $(document).on('click', '#c2-alternativa1', function(){
            alert('Parabéns, você acertou');
            app.seta.setVisible(true);
            app.folha.setVisible(false);
            $('#modalC2Questao').modal('hide');
        });

        $(document).on('click', '#c2-alternativa2', function(){
            alert('Errou. Tente novamente.');
        });

        $(document).on('click', '#c2-alternativa3', function(){
            alert('Errou. Tente novamente.');
        });

        $(document).on('click', '#c2-alternativa4', function(){
            alert('Errou. Tente novamente.');
        });

        $(document).on('click', '#c2-alternativa5', function(){
            alert('Errou. Tente novamente.');
        });

    }
}