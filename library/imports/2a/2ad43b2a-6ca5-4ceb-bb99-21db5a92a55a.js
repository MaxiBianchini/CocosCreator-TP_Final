"use strict";
cc._RF.push(module, '2ad43sqbKVM67uZIdtakqVa', 'Donkey_Kong');
// Scripts/Donkey_Kong.ts

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
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.SonidoSaltar = null;
        _this.SonidoSoltarBarril = null;
        return _this;
    }
    NewClass.prototype.MoverPlayer = function (event) {
        switch (event.keyCode) {
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
                if (this.TirarBarril) {
                    cc.audioEngine.playEffect(this.SonidoSoltarBarril, false);
                    this.node.parent.getComponentInChildren('Barril_Tirar').Mover(this.node.scaleX);
                    this.TirarBarril = false;
                }
                else if (this.PuedoSaltar) {
                    this.EstoySaltando = true;
                    this.PuedoSaltar = false;
                    this.FuerzaSalto = 3.5;
                    cc.audioEngine.playEffect(this.SonidoSaltar, false);
                }
                break;
        }
    };
    NewClass.prototype.PararPlayer = function (event) {
        switch (event.keyCode) {
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
    };
    NewClass.prototype.Reina = function () { this.Gano = true; };
    NewClass.prototype.MeMori = function () {
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
    };
    NewClass.prototype.onCollisionEnter = function (otherCollider, selfCollider) {
        if (otherCollider.tag == 1 && selfCollider.tag == 0) {
            if (this.YaSalto) {
                this.EstoySaltando = false;
                this.YaSalto = false;
            }
        }
        if (otherCollider.tag == 22 && selfCollider.tag == 10)
            this.node.parent.getComponent('Juego').ControlVidas();
        if (otherCollider.tag == 25 && selfCollider.tag == 10)
            this.SuperFuerza = true;
        if (otherCollider.tag == 35 && selfCollider.tag == 10) {
            this.node.parent.getComponent('Juego').ControlBarril(this.node.scaleX);
            this.TirarBarril = true;
        }
        if (otherCollider.tag == 2 && selfCollider.tag == 0)
            this.EstoyEnEscalera = true;
        if (otherCollider.tag == 20 && selfCollider.tag == 0)
            this.PuedoSubir = false;
        if (otherCollider.tag == 30 && selfCollider.tag == 0)
            this.PuedoBajar = false;
        if (otherCollider.tag == 5 && selfCollider.tag == 4)
            this.PuedoDerecha = false;
        if (otherCollider.tag == 6 && selfCollider.tag == 4)
            this.PuedoIzquierda = false;
    };
    NewClass.prototype.onCollisionExit = function (otherCollider, selfCollider) {
        if (otherCollider.tag == 1 && selfCollider.tag == 0)
            this.YaSalto = true;
        if (otherCollider.tag == 2 && selfCollider.tag == 0)
            this.EstoyEnEscalera = false;
        if (otherCollider.tag == 5 && selfCollider.tag == 4)
            this.PuedoDerecha = true;
        if (otherCollider.tag == 6 && selfCollider.tag == 4)
            this.PuedoIzquierda = true;
        if (otherCollider.tag == 20 && selfCollider.tag == 0)
            this.PuedoSubir = true;
        if (otherCollider.tag == 30 && selfCollider.tag == 0)
            this.PuedoBajar = true;
    };
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.MoverPlayer, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.PararPlayer, this);
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
    };
    NewClass.prototype.start = function () { };
    NewClass.prototype.update = function (dt) {
        var Animacion = this.node.getComponent(cc.Animation);
        if (this.EstoySaltando) {
            this.FuerzaSalto -= this.Gravedad * dt;
            this.node.setPosition(this.node.position.x, this.node.position.y += this.FuerzaSalto);
        }
        else
            this.PuedoSaltar = true;
        if (!this.PuedoSubir || !this.PuedoBajar)
            this.EstoyEnSuelo = true;
        if (this.EstoyEnSuelo) {
            if (this.MoverDerecha == 1 && this.PuedoDerecha && !this.Gano && !this.TirarBarril) {
                this.node.scaleX = 1;
                if (this.ActivarAnimacion) {
                    Animacion.playAdditive('DK Caminar');
                    this.ActivarAnimacion = false;
                }
                this.node.setPosition(this.node.position.x += 150 * dt, this.node.position.y);
            }
            if (this.MoverIzquierda == 1 && this.PuedoIzquierda && !this.Gano && !this.TirarBarril) {
                this.node.scaleX = -1;
                if (this.ActivarAnimacion) {
                    Animacion.playAdditive('DK Caminar');
                    this.ActivarAnimacion = false;
                }
                this.node.setPosition(this.node.position.x -= 150 * dt, this.node.position.y);
            }
        }
        if (this.EstoyEnEscalera) {
            if (this.MoverArriba == 1 && this.PuedoSubir) {
                if (this.ActivarAnimacion) {
                    Animacion.playAdditive('DK Escalera');
                    this.ActivarAnimacion = false;
                }
                this.node.setPosition(this.node.position.x, this.node.position.y += 200 * dt);
                this.EstoyEnSuelo = false;
            }
            else if (this.MoverAbajo == 1 && this.PuedoBajar) {
                if (this.ActivarAnimacion) {
                    Animacion.playAdditive('DK Escalera');
                    this.ActivarAnimacion = false;
                }
                this.node.setPosition(this.node.position.x, this.node.position.y -= 200 * dt);
                this.EstoyEnSuelo = false;
            }
        }
        if (this.SuperFuerza) {
            if (this.TimerSuperFuerza > 5) {
                this.SuperFuerza = false;
                this.TimerSuperFuerza = 0;
            }
            this.TimerSuperFuerza += dt;
        }
    };
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "SonidoSaltar", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "SonidoSoltarBarril", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();