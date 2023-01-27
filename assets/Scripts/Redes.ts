// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    Angulo:number;
    Gravedad:number;
    Direccion:number;
    FuerzaSalto:number;

    onCollisionEnter(otherCollider,selfCollider){

        if  (otherCollider.tag == 10 && selfCollider.tag == 1) this.node.parent.getComponent('Juego').ControlVidas();
    }

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

        var manager = cc.director.getCollisionManager();
        manager.enabled = true;

        this.FuerzaSalto = (Math.random()* +2)  + 10;
        this.Angulo = (Math.random()* -5)  + 2;
       
        if(this.Angulo > 0) this.Direccion = 1;
        else this.Direccion = -1;

        this.Gravedad = 9.81;
    }

    start () {}

    update (dt) {

        this.FuerzaSalto -= this.Gravedad * dt;
        this.node.setPosition(this.node.position.x + this.Angulo, this.node.position.y += this.FuerzaSalto);
    }
}
