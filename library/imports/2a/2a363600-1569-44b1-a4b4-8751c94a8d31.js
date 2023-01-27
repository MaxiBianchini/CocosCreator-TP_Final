"use strict";
cc._RF.push(module, '2a363YAFWlEsaS0h1HJSo0x', 'Juego');
// Scripts/Juego.ts

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
        _this.Redes = null;
        _this.Barril = null;
        _this.DonkeyKong = null;
        _this.Mario = null;
        _this.Princesa = null;
        _this.CartelVida = null;
        _this.CartelBonus = null;
        _this.CartelPuntaje = null;
        _this.Level = 0;
        _this.FileTXTPuntaje = null;
        _this.FileTXTNivel = null;
        _this.SonidoInicio = null;
        _this.SonidoEnJuego = null;
        _this.SonidoMuerte = null;
        _this.SonidoGanar = null;
        _this.SonidoPuntos = null;
        return _this;
    }
    NewClass.prototype.CrearRedes = function () {
        var NuevaRed = cc.instantiate(this.Redes);
        NuevaRed.setPosition(this.Mario.getPosition().x, this.Mario.getPosition().y + 15);
        this.node.addChild(NuevaRed);
    };
    NewClass.prototype.ControlBonus = function () {
        this.Bonus -= 100;
        if (this.Bonus == 0) {
            this.CartelBonus.string = '0000';
            this.Perdio();
        }
        else if (this.Bonus < 1000)
            this.CartelBonus.string = '0' + this.Bonus.toString();
        else
            this.CartelBonus.string = this.Bonus.toString();
    };
    NewClass.prototype.ControlPuntaje = function (i) {
        this.playerScore += i;
        cc.audioEngine.playEffect(this.SonidoPuntos, false);
        if (this.playerScore >= 100000)
            this.CartelPuntaje.string = 'PUNTAJE-' + this.playerScore.toString();
        else if (this.playerScore >= 10000)
            this.CartelPuntaje.string = 'PUNTAJE-0' + this.playerScore.toString();
        else if (this.playerScore >= 1000)
            this.CartelPuntaje.string = 'PUNTAJE-00' + this.playerScore.toString();
        else if (this.playerScore >= 100)
            this.CartelPuntaje.string = 'PUNTAJE-000' + this.playerScore.toString();
    };
    NewClass.prototype.ControlVidas = function () {
        if (this.YaGano)
            return;
        if (!this.DonkeyKong.getComponent('Donkey_Kong').SuperFuerza) {
            this.playervidas -= 1;
            this.CartelVida.string = '0' + this.playervidas.toString();
            this.node.getComponentInChildren('Donkey_Kong').MeMori();
            cc.audioEngine.playEffect(this.SonidoMuerte, false);
            this.DonkeyKong.setPosition(this.PosX, this.PosY);
        }
        if (this.playervidas == 0)
            this.Perdio();
    };
    NewClass.prototype.ControlBarril = function (i) {
        var PosX = this.DonkeyKong.getPosition().x;
        var PosY = this.DonkeyKong.getPosition().y;
        var NuevoBarril = cc.instantiate(this.Barril);
        if (i == 1)
            NuevoBarril.setPosition(PosX + 10, PosY - 10);
        else
            NuevoBarril.setPosition(PosX - 10, PosY - 10);
        this.node.addChild(NuevoBarril);
    };
    NewClass.prototype.Perdio = function () {
        if (this.ActivarTimerFinalPerder) {
            this.TimerFinal = 0;
            this.ActivarTimerFinalPerder = false;
            this.ParaPerdioJuego = true;
            this.FileTXTPuntaje.text = this.playerScore.toString();
            this.FileTXTNivel.text = this.Level.toString();
        }
        else {
            cc.audioEngine.stopAllEffects();
            cc.director.loadScene('Menu_Perder');
        }
    };
    NewClass.prototype.PararJuego = function (i) {
        this.CrearRed = false;
        if (i == 1)
            this.BajarBonus = false;
    };
    NewClass.prototype.Gano = function () {
        if (this.ActivarTimerFinal) {
            cc.audioEngine.stopAllEffects();
            cc.audioEngine.playEffect(this.SonidoGanar, false);
            this.YaGano = true;
            this.TimerFinal = 0;
            this.ActivarTimerFinal = false;
            this.PararJuego(1);
            this.playerScore += this.Bonus;
            this.FileTXTPuntaje.text = this.playerScore.toString();
        }
        else {
            if (this.Level == 1)
                cc.director.loadScene('Level 2');
            else if (this.Level == 2)
                cc.director.loadScene('Level 3');
            else if (this.Level == 3)
                cc.director.loadScene('Menu_Ganar');
        }
    };
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
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
        this.ActivarSonidoJuego = false;
        this.TimerSonido = 0;
        cc.audioEngine.playEffect(this.SonidoInicio, false);
    };
    NewClass.prototype.start = function () { };
    NewClass.prototype.update = function (dt) {
        if (this.TimerSonido > 3 && !this.ParaPerdioJuego) {
            if (!this.ActivarSonidoJuego) {
                cc.audioEngine.stopAllEffects();
                cc.audioEngine.playEffect(this.SonidoEnJuego, true);
                this.ActivarSonidoJuego = true;
            }
            if (this.TimerRedes >= 4 && this.CrearRed) {
                this.CrearRedes();
                this.TimerRedes = 0;
            }
            if (this.TimerBonus >= 1 && this.BajarBonus) {
                this.ControlBonus();
                this.TimerBonus = 0;
            }
        }
        if (!this.ActivarTimerFinal)
            if (this.TimerFinal >= 8)
                this.Gano();
        if (!this.ActivarTimerFinalPerder)
            if (this.TimerFinal >= 4)
                this.Perdio();
        this.TimerSonido += dt;
        this.TimerFinal += dt;
        this.TimerRedes += dt;
        this.TimerBonus += dt;
    };
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "Redes", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "Barril", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "DonkeyKong", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "Mario", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "Princesa", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "CartelVida", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "CartelBonus", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "CartelPuntaje", void 0);
    __decorate([
        property()
    ], NewClass.prototype, "Level", void 0);
    __decorate([
        property(cc.TextAsset)
    ], NewClass.prototype, "FileTXTPuntaje", void 0);
    __decorate([
        property(cc.TextAsset)
    ], NewClass.prototype, "FileTXTNivel", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "SonidoInicio", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "SonidoEnJuego", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "SonidoMuerte", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "SonidoGanar", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "SonidoPuntos", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();