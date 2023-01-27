// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    Rodar:boolean;
    Derecha:boolean;

    onCollisionEnter(otherCollider,selfCollider){

        if (otherCollider.tag == 22 || otherCollider.tag == 5 || otherCollider.tag == 6) this.node.destroy(); 
    }

    Mover(i){

        this.Rodar = true;

        if ( i == 1) this.Derecha = true;
        else this.Derecha = false;

        this.node.getComponent(cc.Animation).play();
    }

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;

        this.Rodar = false;
    }

    start () {}

    update (dt) {

        if (this.Rodar){

            if (this.Derecha) this.node.setPosition(this.node.position.x += 300*dt,this.node.position.y);
            else this.node.setPosition(this.node.position.x -= 300*dt,this.node.position.y);
        }
    }
}
