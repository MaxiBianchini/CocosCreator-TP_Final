// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.TextAsset)
    FileTXT:cc.TextAsset = null;

    @property(cc.Label)
    score:cc.Label = null;

    Puntaje:number;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

        this.FileTXT.url = cc.url.raw("assets/Puntaje.txt");

        this.Puntaje = Number(this.FileTXT.toString());
        this.score.string ='Puntaje Final - '+ this.FileTXT;

        this.FileTXT.text =  "0";
    }

    start () {}

    // update (dt) {}
}
