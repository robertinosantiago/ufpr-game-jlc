class Cenario1 extends Phaser.Scene {

    constructor() {
        super({key: 'cenario1'});
    }

    preload() {
        this.load.image('c1-fundo', 'assets/cenario1/fundo.png');
        this.load.image('c1-cama', 'assets/cenario1/cama.png');
        this.load.image('c1-gaveteiro', 'assets/cenario1/gaveteiro.png');
        this.load.image('c1-abajur', 'assets/cenario1/abajur.png');
        this.load.image('c1-livros1', 'assets/cenario1/livros1.png');
        this.load.image('c1-livros2', 'assets/cenario1/livros2.png');
        this.load.image('c1-livros3', 'assets/cenario1/livros3.png');
        this.load.image('c1-vaso', 'assets/cenario1/vaso.png');
        this.load.image('c1-estrela', 'assets/estrela.png');
        this.load.image('c1-bau', 'assets/cenario1/bau.png');

        this.load.image('c1-next', 'assets/seta.png');
    }

    create() {
        this.dica1 = false;
        this.dica2 = false;

        this.fundo = this.add.image(400, 300, 'c1-fundo');
        this.cama = this.add.image(400, 410, 'c1-cama');

        this.gaveteiroEsquerdo = this.add.image(75, 420, 'c1-gaveteiro');
        this.gaveteiroDireito = this.add.image(720, 420, 'c1-gaveteiro');

        this.abajurEsquerdo = this.add.image(50, 337, 'c1-abajur').setInteractive();
        this.abajurDireito = this.add.image(745, 337, 'c1-abajur');

        this.livros1 = this.add.image(85, 206, 'c1-livros1');
        this.livros2 = this.add.image(95, 359, 'c1-livros2');
        this.livros3 = this.add.image(693, 364, 'c1-livros3');

        this.vaso = this.add.image(725, 206, 'c1-vaso').setInteractive();

        this.estrela = this.add.image(400, 500, 'c1-estrela').setInteractive();

        this.bau = this.add.image(400, 520, 'c1-bau').setInteractive();

        this.seta = this.add.image(720, 500, 'c1-next').setVisible(false).setInteractive();

        this.input.setDraggable(this.bau);

        this.abajurEsquerdo.on('pointerdown', function(){
            $('#modalC1Dica1').modal('show');
            this.dica1 = true;
            
        }, this);

        this.vaso.on('pointerdown', function(){
            $('#modalC1Dica2').modal('show');
            this.dica2 = true;
        }, this);

        this.estrela.on('pointerdown', function(){
            $('#modalC1Questao').modal('show');
        }, this);

        this.input.on('drag', function(pointer, gameObject, dragX, dragY){
            if (this.dica1 == true && this.dica2 == true) {
                gameObject.x = dragX;
                gameObject.y = dragY;
            }
        }, this);

        this.seta.on('pointerdown', function(){
            this.scene.start('cenario2');
        }, this);

        const app = this;

        $(document).on('click', '#c1-alternativa1', function(){
            alert('Parabéns, você acertou');
            app.seta.setVisible(true);
            app.estrela.setVisible(false);
            $('#modalC1Questao').modal('hide');
        });

        $(document).on('click', '#c1-alternativa2', function(){
            alert('Errou. Tente novamente.');
            $('#modalC1Questao').modal('hide');
        });

        $(document).on('click', '#c1-alternativa3', function(){
            alert('Errou. Tente novamente.');
            $('#modalC1Questao').modal('hide');
        });

        $(document).on('click', '#c1-alternativa4', function(){
            alert('Errou. Tente novamente.');
            $('#modalC1Questao').modal('hide');
        });

        $(document).on('click', '#c1-alternativa5', function(){
            alert('Errou. Tente novamente.');
            $('#modalC1Questao').modal('hide');
        });

    }
}