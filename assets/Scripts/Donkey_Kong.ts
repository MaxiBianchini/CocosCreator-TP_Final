// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.AudioClip)
    SonidoSaltar:cc.AudioClip = null;

    @property(cc.AudioClip)
    SonidoSoltarBarril:cc.AudioClip = null;


    MoverIzquierda:number;
    MoverDerecha:number;
    MoverArriba:number;
    MoverAbajo:number;

    EstoyEnEscalera:boolean;
    EstoyEnSuelo:boolean;

    PuedoDerecha:boolean;
    PuedoIzquierda:boolean;

    FuerzaSalto:number;
    Gravedad:number;
    EstoySaltando:boolean;
    PuedoSaltar:boolean;
    YaSalto:boolean;

    PuedoSubir:boolean;
    PuedoBajar:boolean;

    SuperFuerza:boolean;
    TimerSuperFuerza:number;

    ActivarAnimacion:boolean;
    TirarBarril:boolean;

    Gano:boolean;

    MoverPlayer(event){
        switch(event.keyCode){
            case cc.macro.KEY.left:
              
                this.MoverIzquierda = 1;

                if (this.TirarBarril) {

                    this.node.scaleX = -1;
                    this.ActivarAnimacion = true;
                    this.node.getComponent(cc.Animation).stop();
                }
                
                break;
            case cc.macro.KEY.right:

                this.MoverDerecha = 1;

                if (this.TirarBarril) {
                    this.node.scaleX = 1;
                     
                    this.ActivarAnimacion = true;
                    this.node.getComponent(cc.Animation).stop();
                }
                
                break;
            case cc.macro.KEY.up:

                this.MoverArriba = 1;
                break;
            case cc.macro.KEY.down:

                this.MoverAbajo = 1; 
                break;
            case cc.macro.KEY.space:

                if (this.TirarBarril){
                    cc.audioEngine.playEffect(this.SonidoSoltarBarril,false);
                    this.node.parent.getComponentInChildren('Barril_Tirar').Mover(this.node.scaleX);
                    this.TirarBarril = false;

                }else if (this.PuedoSaltar){
                    this.EstoySaltando = true;
                    this.PuedoSaltar = false;
                    this.FuerzaSalto = 3.5;
                    cc.audioEngine.playEffect(this.SonidoSaltar,false);
                }
                break;
        }
    }

    PararPlayer(event){
        switch(event.keyCode){
            case cc.macro.KEY.left:

                this.MoverIzquierda = 0;
                this.ActivarAnimacion = true;
                this.node.getComponent(cc.Animation).stop();
                break;
            case cc.macro.KEY.right:

                this.MoverDerecha = 0;
                this.ActivarAnimacion = true;
                this.node.getComponent(cc.Animation).stop();
                break;
            case cc.macro.KEY.up:

                this.MoverArriba = 0;
                this.ActivarAnimacion = true;
                this.node.getComponent(cc.Animation).stop();
                break;
            case cc.macro.KEY.down:

                this.MoverAbajo = 0;
                this.ActivarAnimacion = true;
                this.node.getComponent(cc.Animation).stop();
                break;
        }
    }

    Reina(){ this.Gano = true; }

    MeMori(){
        this.EstoyEnEscalera = false;
        this.EstoyEnSuelo = true;

        this.PuedoIzquierda = true;
        this.PuedoDerecha = true;

        this.EstoySaltando = false;
        this.PuedoSaltar = true;
        this.YaSalto = false;

        this.PuedoSubir = false;
        this.PuedoBajar = true;

        this.ActivarAnimacion = true;
    }

    onCollisionEnter(otherCollider,selfCollider){

        if  (otherCollider.tag == 1 && selfCollider.tag == 0) {

            if (this.YaSalto){

                this.EstoySaltando = false;
                this.YaSalto = false;
            }
        }

        if  (otherCollider.tag == 22 && selfCollider.tag == 10) this.node.parent.getComponent('Juego').ControlVidas();

        if  (otherCollider.tag == 25 && selfCollider.tag == 10) this.SuperFuerza = true;

        if  (otherCollider.tag == 35 && selfCollider.tag == 10) {

            this.node.parent.getComponent('Juego').ControlBarril(this.node.scaleX);
            this.TirarBarril = true;
        }

        if  (otherCollider.tag == 2 && selfCollider.tag == 0) this.EstoyEnEscalera = true; 
        
        if  (otherCollider.tag == 20 && selfCollider.tag == 0) this.PuedoSubir = false; 

        if  (otherCollider.tag == 30 && selfCollider.tag == 0) this.PuedoBajar = false; 

        if  (otherCollider.tag == 5 && selfCollider.tag == 4) this.PuedoDerecha = false;

        if  (otherCollider.tag == 6 && selfCollider.tag == 4) this.PuedoIzquierda = false;
    }

    onCollisionExit(otherCollider,selfCollider){

        if  (otherCollider.tag == 1 && selfCollider.tag == 0) this.YaSalto = true;

        if  (otherCollider.tag == 2 && selfCollider.tag == 0)this.EstoyEnEscalera = false;

        if  (otherCollider.tag == 5 && selfCollider.tag == 4) this.PuedoDerecha = true;

        if  (otherCollider.tag == 6 && selfCollider.tag == 4) this.PuedoIzquierda = true;

        if  (otherCollider.tag == 20 && selfCollider.tag == 0) this.PuedoSubir = true; 

        if  (otherCollider.tag == 30 && selfCollider.tag == 0) this.PuedoBajar = true; 
    }

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.MoverPlayer,this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this.PararPlayer,this);

        var manager = cc.director.getCollisionManager();
        manager.enabled = true;

        this.MoverIzquierda = 0;
        this.MoverDerecha = 0;
        this.MoverArriba = 0;
        this.MoverAbajo = 0;

        this.EstoyEnEscalera = false;
        this.EstoyEnSuelo = true;

        this.PuedoIzquierda = true;
        this.PuedoDerecha = true;

        this.EstoySaltando = false;
        this.PuedoSaltar = true;
        this.YaSalto = false;

        this.FuerzaSalto = 4;
        this.Gravedad = 9.81;

        this.PuedoSubir = false;
        this.PuedoBajar = true;

        this.SuperFuerza = false;
        this.TimerSuperFuerza = 0;

        this.ActivarAnimacion = true;

        this.Gano = false;
    }

    start () {}

    update (dt) {

        var Animacion = this.node.getComponent(cc.Animation);

        if (this.EstoySaltando){

            this.FuerzaSalto -= this.Gravedad * dt;
            this.node.setPosition(this.node.position.x, this.node.position.y += this.FuerzaSalto);

        }else this.PuedoSaltar = true;

        if (!this.PuedoSubir || !this.PuedoBajar) this.EstoyEnSuelo = true;

        if (this.EstoyEnSuelo){

            if (this.MoverDerecha == 1 && this.PuedoDerecha && !this.Gano && !this.TirarBarril) {

                this.node.scaleX = 1;

                if (this.ActivarAnimacion) {
                    
                    Animacion.playAdditive('DK Caminar');
                    this.ActivarAnimacion = false;
                }

                this.node.setPosition(this.node.position.x += 150*dt,this.node.position.y);
            }

            if (this.MoverIzquierda == 1 && this.PuedoIzquierda && !this.Gano && !this.TirarBarril) {
                
                this.node.scaleX = -1;

                if (this.ActivarAnimacion) {
                    Animacion.playAdditive('DK Caminar');
                    this.ActivarAnimacion = false;
                }

                this.node.setPosition(this.node.position.x -= 150*dt,this.node.position.y);
            }
        }

        if (this.EstoyEnEscalera){

            if (this.MoverArriba == 1 && this.PuedoSubir){

                if (this.ActivarAnimacion) {
                    Animacion.playAdditive('DK Escalera');
                    this.ActivarAnimacion = false;
                }

                this.node.setPosition(this.node.position.x, this.node.position.y += 200*dt);
                this.EstoyEnSuelo = false;
            }
            else  if (this.MoverAbajo == 1  && this.PuedoBajar){

                if (this.ActivarAnimacion) {
                    Animacion.playAdditive('DK Escalera');
                    this.ActivarAnimacion = false;
                }

                this.node.setPosition(this.node.position.x, this.node.position.y -= 200*dt);
                this.EstoyEnSuelo = false;
            }
        }

        if (this.SuperFuerza){

            if (this.TimerSuperFuerza > 5 ){
                this.SuperFuerza = false;
                this.TimerSuperFuerza = 0;
            }

            this.TimerSuperFuerza += dt;
        }
    }
}
