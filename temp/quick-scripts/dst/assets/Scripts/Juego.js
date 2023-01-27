
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Juego.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcSnVlZ28udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFpUEM7UUE5T0csV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixZQUFNLEdBQWEsSUFBSSxDQUFDO1FBR3hCLGdCQUFVLEdBQVcsSUFBSSxDQUFDO1FBRzFCLFdBQUssR0FBVyxJQUFJLENBQUM7UUFHckIsY0FBUSxHQUFhLElBQUksQ0FBQztRQUcxQixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUc1QixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUc5QixXQUFLLEdBQVUsQ0FBQyxDQUFDO1FBR2pCLG9CQUFjLEdBQWdCLElBQUksQ0FBQztRQUduQyxrQkFBWSxHQUFnQixJQUFJLENBQUM7UUFHakMsa0JBQVksR0FBZ0IsSUFBSSxDQUFDO1FBR2pDLG1CQUFhLEdBQWdCLElBQUksQ0FBQztRQUdsQyxrQkFBWSxHQUFnQixJQUFJLENBQUM7UUFHakMsaUJBQVcsR0FBZ0IsSUFBSSxDQUFDO1FBR2hDLGtCQUFZLEdBQWdCLElBQUksQ0FBQzs7SUFpTXJDLENBQUM7SUE1S0csNkJBQVUsR0FBVjtRQUNJLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxD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QUMsTUFBTSxDQUFDOzhDQUNLO0lBRzFCO1FBREMsUUFBUSxDQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUM7Z0RBQ087SUFHM0I7UUFEQyxRQUFRLENBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQztpREFDUTtJQUc1QjtRQURDLFFBQVEsQ0FBRSxFQUFFLENBQUMsS0FBSyxDQUFDO21EQUNVO0lBRzlCO1FBREMsUUFBUSxFQUFFOzJDQUNNO0lBR2pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0RBQ1k7SUFHbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztrREFDVTtJQUdqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2tEQUNVO0lBR2pDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7bURBQ1c7SUFHbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztrREFDVTtJQUdqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2lEQUNTO0lBR2hDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7a0RBQ1U7SUFoRGhCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FpUDVCO0lBQUQsZUFBQztDQWpQRCxBQWlQQyxDQWpQcUMsRUFBRSxDQUFDLFNBQVMsR0FpUGpEO2tCQWpQb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eSAoY2MuUHJlZmFiKVxyXG4gICAgUmVkZXM6Y2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkgKGNjLlByZWZhYilcclxuICAgIEJhcnJpbDpjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSAoY2MuTm9kZSlcclxuICAgIERvbmtleUtvbmc6Y2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5IChjYy5Ob2RlKVxyXG4gICAgTWFyaW86Y2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5IChjYy5QcmVmYWIpXHJcbiAgICBQcmluY2VzYTpjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSAoY2MuTGFiZWwpXHJcbiAgICBDYXJ0ZWxWaWRhOmNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkgKGNjLkxhYmVsKVxyXG4gICAgQ2FydGVsQm9udXM6Y2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSAoY2MuTGFiZWwpXHJcbiAgICBDYXJ0ZWxQdW50YWplOmNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoKVxyXG4gICAgTGV2ZWw6bnVtYmVyID0gMDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuVGV4dEFzc2V0KVxyXG4gICAgRmlsZVRYVFB1bnRhamU6Y2MuVGV4dEFzc2V0ID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuVGV4dEFzc2V0KVxyXG4gICAgRmlsZVRYVE5pdmVsOmNjLlRleHRBc3NldCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIFNvbmlkb0luaWNpbzpjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBTb25pZG9Fbkp1ZWdvOmNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIFNvbmlkb011ZXJ0ZTpjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBTb25pZG9HYW5hcjpjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBTb25pZG9QdW50b3M6Y2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBBY3RpdmFyVGltZXJGaW5hbFBlcmRlcjpib29sZWFuO1xyXG4gICAgQWN0aXZhclNvbmlkb0p1ZWdvOmJvb2xlYW47XHJcbiAgICBBY3RpdmFyVGltZXJGaW5hbDpib29sZWFuO1xyXG4gICAgUGFyYVBlcmRpb0p1ZWdvOmJvb2xlYW47XHJcbiAgICBCYWphckJvbnVzOmJvb2xlYW47XHJcbiAgICBDcmVhclJlZDpib29sZWFuO1xyXG4gICAgWWFHYW5vOmJvb2xlYW47XHJcblxyXG4gICAgQm9udXM6bnVtYmVyO1xyXG4gICAgVGltZXJCb251czpudW1iZXI7XHJcbiAgICBUaW1lckZpbmFsOm51bWJlcjtcclxuICAgIFRpbWVyUmVkZXM6bnVtYmVyO1xyXG4gICAgVGltZXJTb25pZG86bnVtYmVyO1xyXG4gICAgcGxheWVyU2NvcmU6bnVtYmVyO1xyXG4gICAgcGxheWVydmlkYXM6bnVtYmVyO1xyXG5cclxuICAgIFBvc1g6bnVtYmVyO1xyXG4gICAgUG9zWTpudW1iZXI7XHJcblxyXG4gICAgQ3JlYXJSZWRlcygpe1xyXG4gICAgICAgIGxldCBOdWV2YVJlZCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuUmVkZXMpO1xyXG4gICAgICAgIE51ZXZhUmVkLnNldFBvc2l0aW9uKHRoaXMuTWFyaW8uZ2V0UG9zaXRpb24oKS54ICx0aGlzLk1hcmlvLmdldFBvc2l0aW9uKCkuIHkgKyAxNSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKE51ZXZhUmVkKTtcclxuICAgIH1cclxuXHJcbiAgICBDb250cm9sQm9udXMoKXtcclxuXHJcbiAgICAgICAgdGhpcy5Cb251cyAtPSAxMDA7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGlmKHRoaXMuQm9udXMgPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLkNhcnRlbEJvbnVzLnN0cmluZyA9ICcwMDAwJztcclxuICAgICAgICAgICAgdGhpcy5QZXJkaW8oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZih0aGlzLkJvbnVzIDwgMTAwMCkgdGhpcy5DYXJ0ZWxCb251cy5zdHJpbmcgPSAnMCcgKyB0aGlzLkJvbnVzLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgZWxzZSB0aGlzLkNhcnRlbEJvbnVzLnN0cmluZyA9IHRoaXMuQm9udXMudG9TdHJpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICBDb250cm9sUHVudGFqZShpKXtcclxuXHJcbiAgICAgICAgdGhpcy5wbGF5ZXJTY29yZSArPSBpO1xyXG5cclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuU29uaWRvUHVudG9zLGZhbHNlKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucGxheWVyU2NvcmUgPj0gMTAwMDAwKSB0aGlzLkNhcnRlbFB1bnRhamUuc3RyaW5nID0gJ1BVTlRBSkUtJysgdGhpcy5wbGF5ZXJTY29yZS50b1N0cmluZygpO1xyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMucGxheWVyU2NvcmUgPj0gMTAwMDApIHRoaXMuQ2FydGVsUHVudGFqZS5zdHJpbmcgPSAnUFVOVEFKRS0wJysgdGhpcy5wbGF5ZXJTY29yZS50b1N0cmluZygpO1xyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMucGxheWVyU2NvcmUgPj0gMTAwMCkgIHRoaXMuQ2FydGVsUHVudGFqZS5zdHJpbmcgPSAnUFVOVEFKRS0wMCcrIHRoaXMucGxheWVyU2NvcmUudG9TdHJpbmcoKTtcclxuICAgICAgICBlbHNlIGlmICh0aGlzLnBsYXllclNjb3JlID49IDEwMCkgICB0aGlzLkNhcnRlbFB1bnRhamUuc3RyaW5nID0gJ1BVTlRBSkUtMDAwJysgdGhpcy5wbGF5ZXJTY29yZS50b1N0cmluZygpO1xyXG4gICAgfVxyXG5cclxuICAgIENvbnRyb2xWaWRhcygpe1xyXG5cclxuICAgICAgICBpZiAodGhpcy5ZYUdhbm8pIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYoIXRoaXMuRG9ua2V5S29uZy5nZXRDb21wb25lbnQoJ0RvbmtleV9Lb25nJykuU3VwZXJGdWVyemEpe1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllcnZpZGFzIC09IDE7XHJcbiAgICAgICAgICAgIHRoaXMuQ2FydGVsVmlkYS5zdHJpbmcgPSAnMCcrIHRoaXMucGxheWVydmlkYXMudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudEluQ2hpbGRyZW4oJ0RvbmtleV9Lb25nJykuTWVNb3JpKCk7XHJcblxyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuU29uaWRvTXVlcnRlLGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuRG9ua2V5S29uZy5zZXRQb3NpdGlvbih0aGlzLlBvc1gsdGhpcy5Qb3NZKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnBsYXllcnZpZGFzID09IDApIHRoaXMuUGVyZGlvKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIENvbnRyb2xCYXJyaWwoaSl7XHJcblxyXG4gICAgICAgIHZhciBQb3NYID0gdGhpcy5Eb25rZXlLb25nLmdldFBvc2l0aW9uKCkueDtcclxuICAgICAgICB2YXIgUG9zWSA9IHRoaXMuRG9ua2V5S29uZy5nZXRQb3NpdGlvbigpLnk7XHJcblxyXG4gICAgICAgIGxldCBOdWV2b0JhcnJpbCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuQmFycmlsKTtcclxuICAgICAgICBpZihpID09IDEpIE51ZXZvQmFycmlsLnNldFBvc2l0aW9uKFBvc1ggKyAxMCAsUG9zWSAtIDEwKTtcclxuICAgICAgICBlbHNlIE51ZXZvQmFycmlsLnNldFBvc2l0aW9uKFBvc1ggLSAxMCAsUG9zWSAtIDEwKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoTnVldm9CYXJyaWwpO1xyXG4gICAgfVxyXG5cclxuICAgIFBlcmRpbygpe1xyXG5cclxuICAgICAgICBpZih0aGlzLkFjdGl2YXJUaW1lckZpbmFsUGVyZGVyKXtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuVGltZXJGaW5hbCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuQWN0aXZhclRpbWVyRmluYWxQZXJkZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5QYXJhUGVyZGlvSnVlZ28gPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5GaWxlVFhUUHVudGFqZS50ZXh0ID0gIHRoaXMucGxheWVyU2NvcmUudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgdGhpcy5GaWxlVFhUTml2ZWwudGV4dCA9ICB0aGlzLkxldmVsLnRvU3RyaW5nKCk7IFxyXG5cclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGxFZmZlY3RzKCk7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnTWVudV9QZXJkZXInKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgUGFyYXJKdWVnbyhpKXtcclxuXHJcbiAgICAgICAgdGhpcy5DcmVhclJlZCA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChpID09IDEpdGhpcy5CYWphckJvbnVzID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgR2Fubygpe1xyXG5cclxuICAgICAgICBpZih0aGlzLkFjdGl2YXJUaW1lckZpbmFsKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGxFZmZlY3RzKCk7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5Tb25pZG9HYW5hcixmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLllhR2FubyA9IHRydWU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLlRpbWVyRmluYWwgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLkFjdGl2YXJUaW1lckZpbmFsID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICB0aGlzLlBhcmFySnVlZ28oMSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBsYXllclNjb3JlICs9IHRoaXMuQm9udXM7XHJcbiAgICAgICAgICAgIHRoaXMuRmlsZVRYVFB1bnRhamUudGV4dCA9ICB0aGlzLnBsYXllclNjb3JlLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgaWYodGhpcy5MZXZlbCA9PSAxKSBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ0xldmVsIDInKTtcclxuICAgICAgICAgICAgZWxzZSBpZih0aGlzLkxldmVsID09IDIpIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnTGV2ZWwgMycpO1xyXG4gICAgICAgICAgICBlbHNlIGlmKHRoaXMuTGV2ZWwgPT0gMykgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdNZW51X0dhbmFyJyk7XHJcbiAgICAgICAgfSAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHRoaXMuVGltZXJSZWRlcyA9IDA7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJ2aWRhcyA9IDM7XHJcblxyXG4gICAgICAgIHRoaXMuVGltZXJCb251cyA9IDA7XHJcbiAgICAgICAgdGhpcy5Cb251cyA9IDUwMDA7XHJcblxyXG4gICAgICAgIHRoaXMuRmlsZVRYVFB1bnRhamUudXJsID0gY2MudXJsLnJhdyhcImFzc2V0cy9QdW50YWplLnR4dFwiKTtcclxuICAgICAgICB0aGlzLnBsYXllclNjb3JlID0gTnVtYmVyKHRoaXMuRmlsZVRYVFB1bnRhamUudG9TdHJpbmcoKSk7XHJcblxyXG4gICAgICAgIHRoaXMuQWN0aXZhclRpbWVyRmluYWxQZXJkZXIgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuQWN0aXZhclRpbWVyRmluYWwgPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLlBhcmFQZXJkaW9KdWVnbyA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLllhR2FubyA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLlBvc1ggPSB0aGlzLkRvbmtleUtvbmcuZ2V0UG9zaXRpb24oKS54O1xyXG4gICAgICAgIHRoaXMuUG9zWSA9IHRoaXMuRG9ua2V5S29uZy5nZXRQb3NpdGlvbigpLnk7XHJcblxyXG4gICAgICAgIHRoaXMuQ3JlYXJSZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuQmFqYXJCb251cyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5UaW1lclNvbmlkbyA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMuQWN0aXZhclNvbmlkb0p1ZWdvPSBmYWxzZTtcclxuICAgICAgICB0aGlzLlRpbWVyU29uaWRvID0gMDtcclxuXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLlNvbmlkb0luaWNpbyxmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge31cclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuVGltZXJTb25pZG8gPiAzICYmICF0aGlzLlBhcmFQZXJkaW9KdWVnbyl7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuQWN0aXZhclNvbmlkb0p1ZWdvKXtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGxFZmZlY3RzKCk7XHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuU29uaWRvRW5KdWVnbyx0cnVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuQWN0aXZhclNvbmlkb0p1ZWdvID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuVGltZXJSZWRlcyA+PSA0ICYmIHRoaXMuQ3JlYXJSZWQpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5DcmVhclJlZGVzKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlRpbWVyUmVkZXMgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgaWYgKHRoaXMuVGltZXJCb251cyA+PSAxICAmJiB0aGlzLkJhamFyQm9udXMpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5Db250cm9sQm9udXMoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuVGltZXJCb251cyA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKCF0aGlzLkFjdGl2YXJUaW1lckZpbmFsKSBpZih0aGlzLlRpbWVyRmluYWwgPj0gOCkgdGhpcy5HYW5vKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoIXRoaXMuQWN0aXZhclRpbWVyRmluYWxQZXJkZXIpIGlmKHRoaXMuVGltZXJGaW5hbCA+PSA0KSB0aGlzLlBlcmRpbygpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuVGltZXJTb25pZG8gKz0gZHQ7XHJcbiAgICAgICAgdGhpcy5UaW1lckZpbmFsICs9IGR0O1xyXG4gICAgICAgIHRoaXMuVGltZXJSZWRlcyArPSBkdDtcclxuICAgICAgICB0aGlzLlRpbWVyQm9udXMgKz0gZHQ7XHJcbiAgICB9XHJcbn1cclxuIl19