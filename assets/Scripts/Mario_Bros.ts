// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    TimerDireccion:number;
    MoverIzquierda:number;
    MoverDerecha:number;
    Mover:number;

    Subir:boolean;
    Bajar:boolean;
    EstoyEnSuelo:boolean;
    PuedoDerecha:boolean;
    PuedoIzquierda:boolean;
    EscaleraDeNuevo:boolean;
    EstoyEnEscalera:boolean;
    PuedoUsarEscalera:boolean;
    CambioDireccionEscalera:boolean;

    Direccion(){

        if(this.TimerDireccion >= 4 || !this.PuedoDerecha || !this.PuedoIzquierda || this.CambioDireccionEscalera){
            this.Mover = (Math.random()* -5)  + 2.5;
            this.TimerDireccion = 0;

            if(this.CambioDireccionEscalera) this.CambioDireccionEscalera = false;

            if(this.Mover > 0) {
                this.MoverDerecha = 1;
                this.MoverIzquierda = 0;
                this.node.scaleX = 1;
            }
            else {
                this.MoverIzquierda = 1;
                this.MoverDerecha = 0;
                this.node.scaleX = -1;
            }
        }  
    }

    Destruir(){ this.node.destroy(); }

    onCollisionEnter(otherCollider,selfCollider){

        if  (otherCollider.tag == 2 && selfCollider.tag == 21) {
            this.EstoyEnEscalera = true; 
            this.CambioDireccionEscalera = true;
        }

        if(otherCollider.tag == 40 && selfCollider.tag == 22) {
            this.node.parent.getComponent('Juego').ControlPuntaje(500);
            this.node.destroy(); 
        }

        
        if  (otherCollider.tag == 20 && selfCollider.tag == 21) {

            var Animacion = this.node.getComponent(cc.Animation);

            this.node.getComponent(cc.Animation).stop();

            if(this.PuedoUsarEscalera) {
 
                Animacion.playAdditive('Mario Escalera');
                this.Bajar = true; 
                this.PuedoUsarEscalera = false;

            }else {

                Animacion.playAdditive('Mario Martillo');
                this.Bajar = false;
                this.Subir = false;
            }
        }

        if  (otherCollider.tag == 30 && selfCollider.tag == 21) {

            var Animacion = this.node.getComponent(cc.Animation);
            this.node.getComponent(cc.Animation).stop();

            if(this.PuedoUsarEscalera) {

                Animacion.playAdditive('Mario Escalera');
                this.Subir = true; 
                this.PuedoUsarEscalera = false;

            }else {

                Animacion.playAdditive('Mario Martillo');
                this.Bajar = false;
                this.Subir = false;
            } 
        }

        if  (otherCollider.tag == 5 && selfCollider.tag == 4) this.PuedoDerecha = false;

        if  (otherCollider.tag == 6 && selfCollider.tag == 4) this.PuedoIzquierda = false;
    }

    onCollisionExit(otherCollider,selfCollider){

        if  (otherCollider.tag == 2 && selfCollider.tag == 21) {
            this.EstoyEnEscalera = false;
            this.PuedoUsarEscalera = true;
        }

        if  (otherCollider.tag == 5 && selfCollider.tag == 4) this.PuedoDerecha = true;

        if  (otherCollider.tag == 6 && selfCollider.tag == 4) this.PuedoIzquierda = true;
    }

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

        var manager = cc.director.getCollisionManager();
        manager.enabled = true;

        this.MoverIzquierda = 0;
        this.MoverDerecha = 0;

        this.EstoyEnEscalera = false;
        this.EstoyEnSuelo = true;

        this.PuedoDerecha = true;
        this.PuedoIzquierda = true;

       this.EscaleraDeNuevo = true;
        this.TimerDireccion = 5;

        this.PuedoUsarEscalera = true;

        var Animacion = this.node.getComponent(cc.Animation);
        Animacion.playAdditive('Mario Martillo');
    }

    start () {}

    update (dt) {
        var Animacion = this.node.getComponent(cc.Animation);

        this.TimerDireccion += dt;

        if(this.EstoyEnSuelo){

            this.Direccion();

            if (this.MoverDerecha == 1 && this.PuedoDerecha) this.node.setPosition(this.node.position.x += 100*dt,this.node.position.y);
            
            if (this.MoverIzquierda == 1 && this.PuedoIzquierda) this.node.setPosition(this.node.position.x -= 100*dt,this.node.position.y);
        }

        if (this.EstoyEnEscalera){

            if (this.Subir){

                this.node.setPosition(this.node.position.x, this.node.position.y += 200*dt);
                this.EstoyEnSuelo = false;

            }else if (this.Bajar){
            
                this.node.setPosition(this.node.position.x, this.node.position.y -= 200*dt);
                this.EstoyEnSuelo = false;

            }else this.EstoyEnSuelo = true;
        } 
    }
}
