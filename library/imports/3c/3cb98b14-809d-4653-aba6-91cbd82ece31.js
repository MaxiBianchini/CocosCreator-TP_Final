"use strict";
cc._RF.push(module, '3cb98sUgJ1GU6umkcvYLs4x', 'Mario_Bros');
// Scripts/Mario_Bros.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewClass.prototype.Direccion = function () {
        if (this.TimerDireccion >= 4 || !this.PuedoDerecha || !this.PuedoIzquierda || this.CambioDireccionEscalera) {
            this.Mover = (Math.random() * -5) + 2.5;
            this.TimerDireccion = 0;
            if (this.CambioDireccionEscalera)
                this.CambioDireccionEscalera = false;
            if (this.Mover > 0) {
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
    };
    NewClass.prototype.Destruir = function () { this.node.destroy(); };
    NewClass.prototype.onCollisionEnter = function (otherCollider, selfCollider) {
        if (otherCollider.tag == 2 && selfCollider.tag == 21) {
            this.EstoyEnEscalera = true;
            this.CambioDireccionEscalera = true;
        }
        if (otherCollider.tag == 40 && selfCollider.tag == 22) {
            this.node.parent.getComponent('Juego').ControlPuntaje(500);
            this.node.destroy();
        }
        if (otherCollider.tag == 20 && selfCollider.tag == 21) {
            var Animacion = this.node.getComponent(cc.Animation);
            this.node.getComponent(cc.Animation).stop();
            if (this.PuedoUsarEscalera) {
                Animacion.playAdditive('Mario Escalera');
                this.Bajar = true;
                this.PuedoUsarEscalera = false;
            }
            else {
                Animacion.playAdditive('Mario Martillo');
                this.Bajar = false;
                this.Subir = false;
            }
        }
        if (otherCollider.tag == 30 && selfCollider.tag == 21) {
            var Animacion = this.node.getComponent(cc.Animation);
            this.node.getComponent(cc.Animation).stop();
            if (this.PuedoUsarEscalera) {
                Animacion.playAdditive('Mario Escalera');
                this.Subir = true;
                this.PuedoUsarEscalera = false;
            }
            else {
                Animacion.playAdditive('Mario Martillo');
                this.Bajar = false;
                this.Subir = false;
            }
        }
        if (otherCollider.tag == 5 && selfCollider.tag == 4)
            this.PuedoDerecha = false;
        if (otherCollider.tag == 6 && selfCollider.tag == 4)
            this.PuedoIzquierda = false;
    };
    NewClass.prototype.onCollisionExit = function (otherCollider, selfCollider) {
        if (otherCollider.tag == 2 && selfCollider.tag == 21) {
            this.EstoyEnEscalera = false;
            this.PuedoUsarEscalera = true;
        }
        if (otherCollider.tag == 5 && selfCollider.tag == 4)
            this.PuedoDerecha = true;
        if (otherCollider.tag == 6 && selfCollider.tag == 4)
            this.PuedoIzquierda = true;
    };
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
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
    };
    NewClass.prototype.start = function () { };
    NewClass.prototype.update = function (dt) {
        var Animacion = this.node.getComponent(cc.Animation);
        this.TimerDireccion += dt;
        if (this.EstoyEnSuelo) {
            this.Direccion();
            if (this.MoverDerecha == 1 && this.PuedoDerecha)
                this.node.setPosition(this.node.position.x += 100 * dt, this.node.position.y);
            if (this.MoverIzquierda == 1 && this.PuedoIzquierda)
                this.node.setPosition(this.node.position.x -= 100 * dt, this.node.position.y);
        }
        if (this.EstoyEnEscalera) {
            if (this.Subir) {
                this.node.setPosition(this.node.position.x, this.node.position.y += 200 * dt);
                this.EstoyEnSuelo = false;
            }
            else if (this.Bajar) {
                this.node.setPosition(this.node.position.x, this.node.position.y -= 200 * dt);
                this.EstoyEnSuelo = false;
            }
            else
                this.EstoyEnSuelo = true;
        }
    };
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();