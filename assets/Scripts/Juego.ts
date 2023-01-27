// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property (cc.Prefab)
    Redes:cc.Prefab = null;

    @property (cc.Prefab)
    Barril:cc.Prefab = null;

    @property (cc.Node)
    DonkeyKong:cc.Node = null;

    @property (cc.Node)
    Mario:cc.Node = null;

    @property (cc.Prefab)
    Princesa:cc.Prefab = null;

    @property (cc.Label)
    CartelVida:cc.Label = null;

    @property (cc.Label)
    CartelBonus:cc.Label = null;

    @property (cc.Label)
    CartelPuntaje:cc.Label = null;

    @property()
    Level:number = 0;

    @property(cc.TextAsset)
    FileTXTPuntaje:cc.TextAsset = null;

    @property(cc.TextAsset)
    FileTXTNivel:cc.TextAsset = null;

    @property(cc.AudioClip)
    SonidoInicio:cc.AudioClip = null;

    @property(cc.AudioClip)
    SonidoEnJuego:cc.AudioClip = null;

    @property(cc.AudioClip)
    SonidoMuerte:cc.AudioClip = null;

    @property(cc.AudioClip)
    SonidoGanar:cc.AudioClip = null;

    @property(cc.AudioClip)
    SonidoPuntos:cc.AudioClip = null;

    ActivarTimerFinalPerder:boolean;
    ActivarSonidoJuego:boolean;
    ActivarTimerFinal:boolean;
    ParaPerdioJuego:boolean;
    BajarBonus:boolean;
    CrearRed:boolean;
    YaGano:boolean;

    Bonus:number;
    TimerBonus:number;
    TimerFinal:number;
    TimerRedes:number;
    TimerSonido:number;
    playerScore:number;
    playervidas:number;

    PosX:number;
    PosY:number;

    CrearRedes(){
        let NuevaRed = cc.instantiate(this.Redes);
        NuevaRed.setPosition(this.Mario.getPosition().x ,this.Mario.getPosition(). y + 15);
        this.node.addChild(NuevaRed);
    }

    ControlBonus(){

        this.Bonus -= 100;
            
        if(this.Bonus == 0) {
            this.CartelBonus.string = '0000';
            this.Perdio();
        }
        else if(this.Bonus < 1000) this.CartelBonus.string = '0' + this.Bonus.toString();
        else this.CartelBonus.string = this.Bonus.toString();
    }

    ControlPuntaje(i){

        this.playerScore += i;

        cc.audioEngine.playEffect(this.SonidoPuntos,false);

        if (this.playerScore >= 100000) this.CartelPuntaje.string = 'PUNTAJE-'+ this.playerScore.toString();
        else if (this.playerScore >= 10000) this.CartelPuntaje.string = 'PUNTAJE-0'+ this.playerScore.toString();
        else if (this.playerScore >= 1000)  this.CartelPuntaje.string = 'PUNTAJE-00'+ this.playerScore.toString();
        else if (this.playerScore >= 100)   this.CartelPuntaje.string = 'PUNTAJE-000'+ this.playerScore.toString();
    }

    ControlVidas(){

        if (this.YaGano) return;

        if(!this.DonkeyKong.getComponent('Donkey_Kong').SuperFuerza){
            this.playervidas -= 1;
            this.CartelVida.string = '0'+ this.playervidas.toString();
            this.node.getComponentInChildren('Donkey_Kong').MeMori();

            cc.audioEngine.playEffect(this.SonidoMuerte,false);

            this.DonkeyKong.setPosition(this.PosX,this.PosY);
        }

        if (this.playervidas == 0) this.Perdio();
    }


    ControlBarril(i){

        var PosX = this.DonkeyKong.getPosition().x;
        var PosY = this.DonkeyKong.getPosition().y;

        let NuevoBarril = cc.instantiate(this.Barril);
        if(i == 1) NuevoBarril.setPosition(PosX + 10 ,PosY - 10);
        else NuevoBarril.setPosition(PosX - 10 ,PosY - 10);
        
        this.node.addChild(NuevoBarril);
    }

    Perdio(){

        if(this.ActivarTimerFinalPerder){

            this.TimerFinal = 0;
            this.ActivarTimerFinalPerder = false;
            this.ParaPerdioJuego = true;

            this.FileTXTPuntaje.text =  this.playerScore.toString();
            this.FileTXTNivel.text =  this.Level.toString(); 

        }else {
            cc.audioEngine.stopAllEffects();
            cc.director.loadScene('Menu_Perder');
        }
    }

    PararJuego(i){

        this.CrearRed = false;
        if (i == 1)this.BajarBonus = false;
    }

    Gano(){

        if(this.ActivarTimerFinal){
            
            cc.audioEngine.stopAllEffects();
            cc.audioEngine.playEffect(this.SonidoGanar,false);

            this.YaGano = true;
            
            this.TimerFinal = 0;
            this.ActivarTimerFinal = false;

            this.PararJuego(1);

            this.playerScore += this.Bonus;
            this.FileTXTPuntaje.text =  this.playerScore.toString();

        }else {
            if(this.Level == 1) cc.director.loadScene('Level 2');
            else if(this.Level == 2) cc.director.loadScene('Level 3');
            else if(this.Level == 3) cc.director.loadScene('Menu_Ganar');
        }      
    }

    // LIFE-CYCLE CALLBACKS:


    onLoad () {
        this.TimerRedes = 0;
        this.playervidas = 3;

        this.TimerBonus = 0;
        this.Bonus = 5000;

        this.FileTXTPuntaje.url = cc.url.raw("assets/Puntaje.txt");
        this.playerScore = Number(this.FileTXTPuntaje.toString());

        this.ActivarTimerFinalPerder = true;
        this.ActivarTimerFinal = true;

        this.ParaPerdioJuego = false;

        this.YaGano = false;

        this.PosX = this.DonkeyKong.getPosition().x;
        this.PosY = this.DonkeyKong.getPosition().y;

        this.CrearRed = true;
        this.BajarBonus = true;
        this.TimerSonido = 0;

        this.ActivarSonidoJuego= false;
        this.TimerSonido = 0;

        cc.audioEngine.playEffect(this.SonidoInicio,false);
    }

    start () {}

    update (dt) {

        if(this.TimerSonido > 3 && !this.ParaPerdioJuego){

            if (!this.ActivarSonidoJuego){
                cc.audioEngine.stopAllEffects();
                cc.audioEngine.playEffect(this.SonidoEnJuego,true);
                this.ActivarSonidoJuego = true;
            }

            if (this.TimerRedes >= 4 && this.CrearRed){
                this.CrearRedes();
                this.TimerRedes = 0;
            }
    
            if (this.TimerBonus >= 1  && this.BajarBonus){
                this.ControlBonus();
                this.TimerBonus = 0;
            }
        }

        if(!this.ActivarTimerFinal) if(this.TimerFinal >= 8) this.Gano();
        
        if(!this.ActivarTimerFinalPerder) if(this.TimerFinal >= 4) this.Perdio();
        
        this.TimerSonido += dt;
        this.TimerFinal += dt;
        this.TimerRedes += dt;
        this.TimerBonus += dt;
    }
}
