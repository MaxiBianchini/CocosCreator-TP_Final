
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Scripts/Banana');
require('./assets/Scripts/BarrilParado');
require('./assets/Scripts/Barril_Tirar');
require('./assets/Scripts/Boton_Instrucciones');
require('./assets/Scripts/Boton_Jugar');
require('./assets/Scripts/Boton_Menu');
require('./assets/Scripts/Donkey_Kong');
require('./assets/Scripts/FinalScore');
require('./assets/Scripts/Juego');
require('./assets/Scripts/Mario');
require('./assets/Scripts/Mario_Bros');
require('./assets/Scripts/ObjetosPuntos');
require('./assets/Scripts/Princesa');
require('./assets/Scripts/Redes');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Donkey_Kong.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcRG9ua2V5X0tvbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUEwU0M7UUF2U0csa0JBQVksR0FBZ0IsSUFBSSxDQUFDO1FBR2pDLHdCQUFrQixHQUFnQixJQUFJLENBQUM7O0lBb1MzQyxDQUFDO0lBclFHLDhCQUFXLEdBQVgsVUFBWSxLQUFLO1FBQ2IsUUFBTyxLQUFLLENBQUMsT0FBTyxFQUFDO1lBQ2pCLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSTtnQkFFbEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7Z0JBRXhCLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtvQkFFbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7b0JBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztpQkFDL0M7Z0JBRUQsTUFBTTtZQUNWLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSztnQkFFbkIsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7Z0JBRXRCLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtvQkFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO29CQUVyQixJQUFJ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QUFHLEdBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQzVFLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO2FBQzdCO1NBQ0o7UUFFRCxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUM7WUFFakIsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxFQUFFO2dCQUMzQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztnQkFDekIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQzthQUM3QjtZQUVELElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxFQUFFLENBQUM7U0FDL0I7SUFDTCxDQUFDO0lBdFNEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7a0RBQ1U7SUFHakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzt3REFDZ0I7SUFOdEIsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQTBTNUI7SUFBRCxlQUFDO0NBMVNELEFBMFNDLENBMVNxQyxFQUFFLENBQUMsU0FBUyxHQTBTakQ7a0JBMVNvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIFNvbmlkb1NhbHRhcjpjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBTb25pZG9Tb2x0YXJCYXJyaWw6Y2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcblxyXG4gICAgTW92ZXJJenF1aWVyZGE6bnVtYmVyO1xyXG4gICAgTW92ZXJEZXJlY2hhOm51bWJlcjtcclxuICAgIE1vdmVyQXJyaWJhOm51bWJlcjtcclxuICAgIE1vdmVyQWJham86bnVtYmVyO1xyXG5cclxuICAgIEVzdG95RW5Fc2NhbGVyYTpib29sZWFuO1xyXG4gICAgRXN0b3lFblN1ZWxvOmJvb2xlYW47XHJcblxyXG4gICAgUHVlZG9EZXJlY2hhOmJvb2xlYW47XHJcbiAgICBQdWVkb0l6cXVpZXJkYTpib29sZWFuO1xyXG5cclxuICAgIEZ1ZXJ6YVNhbHRvOm51bWJlcjtcclxuICAgIEdyYXZlZGFkOm51bWJlcjtcclxuICAgIEVzdG95U2FsdGFuZG86Ym9vbGVhbjtcclxuICAgIFB1ZWRvU2FsdGFyOmJvb2xlYW47XHJcbiAgICBZYVNhbHRvOmJvb2xlYW47XHJcblxyXG4gICAgUHVlZG9TdWJpcjpib29sZWFuO1xyXG4gICAgUHVlZG9CYWphcjpib29sZWFuO1xyXG5cclxuICAgIFN1cGVyRnVlcnphOmJvb2xlYW47XHJcbiAgICBUaW1lclN1cGVyRnVlcnphOm51bWJlcjtcclxuXHJcbiAgICBBY3RpdmFyQW5pbWFjaW9uOmJvb2xlYW47XHJcbiAgICBUaXJhckJhcnJpbDpib29sZWFuO1xyXG5cclxuICAgIEdhbm86Ym9vbGVhbjtcclxuXHJcbiAgICBNb3ZlclBsYXllcihldmVudCl7XHJcbiAgICAgICAgc3dpdGNoKGV2ZW50LmtleUNvZGUpe1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5sZWZ0OlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5Nb3Zlckl6cXVpZXJkYSA9IDE7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuVGlyYXJCYXJyaWwpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IC0xO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQWN0aXZhckFuaW1hY2lvbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnJpZ2h0OlxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuTW92ZXJEZXJlY2hhID0gMTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5UaXJhckJhcnJpbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkFjdGl2YXJBbmltYWNpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS51cDpcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLk1vdmVyQXJyaWJhID0gMTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kb3duOlxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuTW92ZXJBYmFqbyA9IDE7IFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnNwYWNlOlxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLlRpcmFyQmFycmlsKXtcclxuICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuU29uaWRvU29sdGFyQmFycmlsLGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUucGFyZW50LmdldENvbXBvbmVudEluQ2hpbGRyZW4oJ0JhcnJpbF9UaXJhcicpLk1vdmVyKHRoaXMubm9kZS5zY2FsZVgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuVGlyYXJCYXJyaWwgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZiAodGhpcy5QdWVkb1NhbHRhcil7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Fc3RveVNhbHRhbmRvID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLlB1ZWRvU2FsdGFyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5GdWVyemFTYWx0byA9IDMuNTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuU29uaWRvU2FsdGFyLGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBQYXJhclBsYXllcihldmVudCl7XHJcbiAgICAgICAgc3dpdGNoKGV2ZW50LmtleUNvZGUpe1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5sZWZ0OlxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuTW92ZXJJenF1aWVyZGEgPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5BY3RpdmFyQW5pbWFjaW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkucmlnaHQ6XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5Nb3ZlckRlcmVjaGEgPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5BY3RpdmFyQW5pbWFjaW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkudXA6XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5Nb3ZlckFycmliYSA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkFjdGl2YXJBbmltYWNpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kb3duOlxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuTW92ZXJBYmFqbyA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkFjdGl2YXJBbmltYWNpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBSZWluYSgpeyB0aGlzLkdhbm8gPSB0cnVlOyB9XHJcblxyXG4gICAgTWVNb3JpKCl7XHJcbiAgICAgICAgdGhpcy5Fc3RveUVuRXNjYWxlcmEgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLkVzdG95RW5TdWVsbyA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMuUHVlZG9JenF1aWVyZGEgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuUHVlZG9EZXJlY2hhID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5Fc3RveVNhbHRhbmRvID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5QdWVkb1NhbHRhciA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5ZYVNhbHRvID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuUHVlZG9TdWJpciA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuUHVlZG9CYWphciA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMuQWN0aXZhckFuaW1hY2lvbiA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgb25Db2xsaXNpb25FbnRlcihvdGhlckNvbGxpZGVyLHNlbGZDb2xsaWRlcil7XHJcblxyXG4gICAgICAgIGlmICAob3RoZXJDb2xsaWRlci50YWcgPT0gMSAmJiBzZWxmQ29sbGlkZXIudGFnID09IDApIHtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLllhU2FsdG8pe1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuRXN0b3lTYWx0YW5kbyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ZYVNhbHRvID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICAob3RoZXJDb2xsaWRlci50YWcgPT0gMjIgJiYgc2VsZkNvbGxpZGVyLnRhZyA9PSAxMCkgdGhpcy5ub2RlLnBhcmVudC5nZXRDb21wb25lbnQoJ0p1ZWdvJykuQ29udHJvbFZpZGFzKCk7XHJcblxyXG4gICAgICAgIGlmICAob3RoZXJDb2xsaWRlci50YWcgPT0gMjUgJiYgc2VsZkNvbGxpZGVyLnRhZyA9PSAxMCkgdGhpcy5TdXBlckZ1ZXJ6YSA9IHRydWU7XHJcblxyXG4gICAgICAgIGlmICAob3RoZXJDb2xsaWRlci50YWcgPT0gMzUgJiYgc2VsZkNvbGxpZGVyLnRhZyA9PSAxMCkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5nZXRDb21wb25lbnQoJ0p1ZWdvJykuQ29udHJvbEJhcnJpbCh0aGlzLm5vZGUuc2NhbGVYKTtcclxuICAgICAgICAgICAgdGhpcy5UaXJhckJhcnJpbCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAgKG90aGVyQ29sbGlkZXIudGFnID09IDIgJiYgc2VsZkNvbGxpZGVyLnRhZyA9PSAwKSB0aGlzLkVzdG95RW5Fc2NhbGVyYSA9IHRydWU7IFxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICAob3RoZXJDb2xsaWRlci50YWcgPT0gMjAgJiYgc2VsZkNvbGxpZGVyLnRhZyA9PSAwKSB0aGlzLlB1ZWRvU3ViaXIgPSBmYWxzZTsgXHJcblxyXG4gICAgICAgIGlmICAob3RoZXJDb2xsaWRlci50YWcgPT0gMzAgJiYgc2VsZkNvbGxpZGVyLnRhZyA9PSAwKSB0aGlzLlB1ZWRvQmFqYXIgPSBmYWxzZTsgXHJcblxyXG4gICAgICAgIGlmICAob3RoZXJDb2xsaWRlci50YWcgPT0gNSAmJiBzZWxmQ29sbGlkZXIudGFnID09IDQpIHRoaXMuUHVlZG9EZXJlY2hhID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICAob3RoZXJDb2xsaWRlci50YWcgPT0gNiAmJiBzZWxmQ29sbGlkZXIudGFnID09IDQpIHRoaXMuUHVlZG9JenF1aWVyZGEgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNvbGxpc2lvbkV4aXQob3RoZXJDb2xsaWRlcixzZWxmQ29sbGlkZXIpe1xyXG5cclxuICAgICAgICBpZiAgKG90aGVyQ29sbGlkZXIudGFnID09IDEgJiYgc2VsZkNvbGxpZGVyLnRhZyA9PSAwKSB0aGlzLllhU2FsdG8gPSB0cnVlO1xyXG5cclxuICAgICAgICBpZiAgKG90aGVyQ29sbGlkZXIudGFnID09IDIgJiYgc2VsZkNvbGxpZGVyLnRhZyA9PSAwKXRoaXMuRXN0b3lFbkVzY2FsZXJhID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICAob3RoZXJDb2xsaWRlci50YWcgPT0gNSAmJiBzZWxmQ29sbGlkZXIudGFnID09IDQpIHRoaXMuUHVlZG9EZXJlY2hhID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgIChvdGhlckNvbGxpZGVyLnRhZyA9PSA2ICYmIHNlbGZDb2xsaWRlci50YWcgPT0gNCkgdGhpcy5QdWVkb0l6cXVpZXJkYSA9IHRydWU7XHJcblxyXG4gICAgICAgIGlmICAob3RoZXJDb2xsaWRlci50YWcgPT0gMjAgJiYgc2VsZkNvbGxpZGVyLnRhZyA9PSAwKSB0aGlzLlB1ZWRvU3ViaXIgPSB0cnVlOyBcclxuXHJcbiAgICAgICAgaWYgIChvdGhlckNvbGxpZGVyLnRhZyA9PSAzMCAmJiBzZWxmQ29sbGlkZXIudGFnID09IDApIHRoaXMuUHVlZG9CYWphciA9IHRydWU7IFxyXG4gICAgfVxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLHRoaXMuTW92ZXJQbGF5ZXIsdGhpcyk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCx0aGlzLlBhcmFyUGxheWVyLHRoaXMpO1xyXG5cclxuICAgICAgICB2YXIgbWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKTtcclxuICAgICAgICBtYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLk1vdmVySXpxdWllcmRhID0gMDtcclxuICAgICAgICB0aGlzLk1vdmVyRGVyZWNoYSA9IDA7XHJcbiAgICAgICAgdGhpcy5Nb3ZlckFycmliYSA9IDA7XHJcbiAgICAgICAgdGhpcy5Nb3ZlckFiYWpvID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5Fc3RveUVuRXNjYWxlcmEgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLkVzdG95RW5TdWVsbyA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMuUHVlZG9JenF1aWVyZGEgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuUHVlZG9EZXJlY2hhID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5Fc3RveVNhbHRhbmRvID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5QdWVkb1NhbHRhciA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5ZYVNhbHRvID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuRnVlcnphU2FsdG8gPSA0O1xyXG4gICAgICAgIHRoaXMuR3JhdmVkYWQgPSA5LjgxO1xyXG5cclxuICAgICAgICB0aGlzLlB1ZWRvU3ViaXIgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLlB1ZWRvQmFqYXIgPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLlN1cGVyRnVlcnphID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5UaW1lclN1cGVyRnVlcnphID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5BY3RpdmFyQW5pbWFjaW9uID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5HYW5vID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge31cclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcblxyXG4gICAgICAgIHZhciBBbmltYWNpb24gPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLkVzdG95U2FsdGFuZG8pe1xyXG5cclxuICAgICAgICAgICAgdGhpcy5GdWVyemFTYWx0byAtPSB0aGlzLkdyYXZlZGFkICogZHQ7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbih0aGlzLm5vZGUucG9zaXRpb24ueCwgdGhpcy5ub2RlLnBvc2l0aW9uLnkgKz0gdGhpcy5GdWVyemFTYWx0byk7XHJcblxyXG4gICAgICAgIH1lbHNlIHRoaXMuUHVlZG9TYWx0YXIgPSB0cnVlO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuUHVlZG9TdWJpciB8fCAhdGhpcy5QdWVkb0JhamFyKSB0aGlzLkVzdG95RW5TdWVsbyA9IHRydWU7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLkVzdG95RW5TdWVsbyl7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5Nb3ZlckRlcmVjaGEgPT0gMSAmJiB0aGlzLlB1ZWRvRGVyZWNoYSAmJiAhdGhpcy5HYW5vICYmICF0aGlzLlRpcmFyQmFycmlsKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IDE7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuQWN0aXZhckFuaW1hY2lvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIEFuaW1hY2lvbi5wbGF5QWRkaXRpdmUoJ0RLIENhbWluYXInKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkFjdGl2YXJBbmltYWNpb24gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24odGhpcy5ub2RlLnBvc2l0aW9uLnggKz0gMTUwKmR0LHRoaXMubm9kZS5wb3NpdGlvbi55KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuTW92ZXJJenF1aWVyZGEgPT0gMSAmJiB0aGlzLlB1ZWRvSXpxdWllcmRhICYmICF0aGlzLkdhbm8gJiYgIXRoaXMuVGlyYXJCYXJyaWwpIHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IC0xO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLkFjdGl2YXJBbmltYWNpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBBbmltYWNpb24ucGxheUFkZGl0aXZlKCdESyBDYW1pbmFyJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5BY3RpdmFyQW5pbWFjaW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRoaXMubm9kZS5wb3NpdGlvbi54IC09IDE1MCpkdCx0aGlzLm5vZGUucG9zaXRpb24ueSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLkVzdG95RW5Fc2NhbGVyYSl7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5Nb3ZlckFycmliYSA9PSAxICYmIHRoaXMuUHVlZG9TdWJpcil7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuQWN0aXZhckFuaW1hY2lvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIEFuaW1hY2lvbi5wbGF5QWRkaXRpdmUoJ0RLIEVzY2FsZXJhJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5BY3RpdmFyQW5pbWFjaW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRoaXMubm9kZS5wb3NpdGlvbi54LCB0aGlzLm5vZGUucG9zaXRpb24ueSArPSAyMDAqZHQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5Fc3RveUVuU3VlbG8gPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlICBpZiAodGhpcy5Nb3ZlckFiYWpvID09IDEgICYmIHRoaXMuUHVlZG9CYWphcil7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuQWN0aXZhckFuaW1hY2lvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIEFuaW1hY2lvbi5wbGF5QWRkaXRpdmUoJ0RLIEVzY2FsZXJhJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5BY3RpdmFyQW5pbWFjaW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRoaXMubm9kZS5wb3NpdGlvbi54LCB0aGlzLm5vZGUucG9zaXRpb24ueSAtPSAyMDAqZHQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5Fc3RveUVuU3VlbG8gPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuU3VwZXJGdWVyemEpe1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuVGltZXJTdXBlckZ1ZXJ6YSA+IDUgKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuU3VwZXJGdWVyemEgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuVGltZXJTdXBlckZ1ZXJ6YSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuVGltZXJTdXBlckZ1ZXJ6YSArPSBkdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/BarrilParado.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f0e4fmvvbdAhLfsB/S+MUv2', 'BarrilParado');
// Scripts/BarrilParado.ts

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
    NewClass.prototype.onCollisionEnter = function (otherCollider, selfCollider) {
        if (otherCollider.tag == 10)
            this.node.destroy();
    };
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
    };
    NewClass.prototype.start = function () { };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQmFycmlsUGFyYWRvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEOztJQWlCQSxDQUFDO0lBZkcsbUNBQWdCLEdBQWhCLFVBQWlCLGFBQWEsRUFBQyxZQUFZO1FBRXZDLElBQUksYUFBYSxDQUFDLEdBQUcsSUFBSSxFQUFFO1lBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNyRCxDQUFDO0lBRUQsd0JBQXdCO0lBRXhCLHlCQUFNLEdBQU47UUFDSSxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDaEQsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDM0IsQ0FBQztJQUVELHdCQUFLLEdBQUwsY0FBVSxDQUFDO0lBZE0sUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWlCNUI7SUFBRCxlQUFDO0NBakJELEFBaUJDLENBakJxQyxFQUFFLENBQUMsU0FBUyxHQWlCakQ7a0JBakJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgb25Db2xsaXNpb25FbnRlcihvdGhlckNvbGxpZGVyLHNlbGZDb2xsaWRlcil7XHJcblxyXG4gICAgICAgIGlmIChvdGhlckNvbGxpZGVyLnRhZyA9PSAxMCkgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHZhciBtYW5hZ2VyID0gY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpO1xyXG4gICAgICAgIG1hbmFnZXIuZW5hYmxlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge31cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Boton_Instrucciones.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f6604Sw7k5FtYJ7aJA/aIvf', 'Boton_Instrucciones');
// Scripts/Boton_Instrucciones.ts

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
    NewClass.prototype.onLoad = function () {
        cc.director.preloadScene('Instrucciones');
        this.node.on('touchstart', function () {
            cc.director.loadScene('Instrucciones');
        });
    };
    NewClass.prototype.start = function () { };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQm90b25fSW5zdHJ1Y2Npb25lcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDs7SUFhQSxDQUFDO0lBWEcseUJBQU0sR0FBTjtRQUVJLEVBQUUsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBQztZQUMxQixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCx3QkFBSyxHQUFMLGNBQVUsQ0FBQztJQVZNLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FhNUI7SUFBRCxlQUFDO0NBYkQsQUFhQyxDQWJxQyxFQUFFLENBQUMsU0FBUyxHQWFqRDtrQkFib0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKCdJbnN0cnVjY2lvbmVzJyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKCd0b3VjaHN0YXJ0JyxmdW5jdGlvbigpe1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnSW5zdHJ1Y2Npb25lcycpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHt9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/FinalScore.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a5f0bYzcx1NC789AicNCuwn', 'FinalScore');
// Scripts/FinalScore.ts

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
        _this.FileTXT = null;
        _this.score = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        this.FileTXT.url = cc.url.raw("assets/Puntaje.txt");
        this.Puntaje = Number(this.FileTXT.toString());
        this.score.string = 'Puntaje Final - ' + this.FileTXT;
        this.FileTXT.text = "0";
    };
    NewClass.prototype.start = function () { };
    __decorate([
        property(cc.TextAsset)
    ], NewClass.prototype, "FileTXT", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "score", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcRmluYWxTY29yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQXlCQztRQXRCRyxhQUFPLEdBQWdCLElBQUksQ0FBQztRQUc1QixXQUFLLEdBQVksSUFBSSxDQUFDOztRQWtCdEIsaUJBQWlCO0lBQ3JCLENBQUM7SUFmRyx3QkFBd0I7SUFFeEIseUJBQU0sR0FBTjtRQUVJLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFFcEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFFLGtCQUFrQixHQUFFLElBQUksQ0FBQyxPQUFPLENBQUM7UUFFcEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUksR0FBRyxDQUFDO0lBQzdCLENBQUM7SUFFRCx3QkFBSyxHQUFMLGNBQVUsQ0FBQztJQW5CWDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzZDQUNLO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ0c7SUFOTCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBeUI1QjtJQUFELGVBQUM7Q0F6QkQsQUF5QkMsQ0F6QnFDLEVBQUUsQ0FBQyxTQUFTLEdBeUJqRDtrQkF6Qm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuVGV4dEFzc2V0KVxyXG4gICAgRmlsZVRYVDpjYy5UZXh0QXNzZXQgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHNjb3JlOmNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBQdW50YWplOm51bWJlcjtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG5cclxuICAgICAgICB0aGlzLkZpbGVUWFQudXJsID0gY2MudXJsLnJhdyhcImFzc2V0cy9QdW50YWplLnR4dFwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5QdW50YWplID0gTnVtYmVyKHRoaXMuRmlsZVRYVC50b1N0cmluZygpKTtcclxuICAgICAgICB0aGlzLnNjb3JlLnN0cmluZyA9J1B1bnRhamUgRmluYWwgLSAnKyB0aGlzLkZpbGVUWFQ7XHJcblxyXG4gICAgICAgIHRoaXMuRmlsZVRYVC50ZXh0ID0gIFwiMFwiO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHt9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Mario.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0b9982PBMVADruTcqjyezD8', 'Mario');
// Scripts/Mario.ts

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
    NewClass.prototype.onCollisionEnter = function (otherCollider, selfCollider) {
        if (otherCollider.tag == 40 && selfCollider.tag == 22) {
            this.node.parent.getComponent('Juego').PararJuego(0);
            this.node.parent.getComponent('Juego').ControlPuntaje(1000);
            this.node.destroy();
        }
    };
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
    };
    NewClass.prototype.start = function () { };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcTWFyaW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7O0lBc0JBLENBQUM7SUFwQkcsbUNBQWdCLEdBQWhCLFVBQWlCLGFBQWEsRUFBQyxZQUFZO1FBRXZDLElBQUcsYUFBYSxDQUFDLEdBQUcsSUFBSSxFQUFFLElBQUksWUFBWSxDQUFDLEdBQUcsSUFBSSxFQUFFLEVBQUU7WUFFbEQsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzVELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDdkI7SUFDTCxDQUFDO0lBRUQsd0JBQXdCO0lBRXhCLHlCQUFNLEdBQU47UUFDSSxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDaEQsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDM0IsQ0FBQztJQUVELHdCQUFLLEdBQUwsY0FBVSxDQUFDO0lBbkJNLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FzQjVCO0lBQUQsZUFBQztDQXRCRCxBQXNCQyxDQXRCcUMsRUFBRSxDQUFDLFNBQVMsR0FzQmpEO2tCQXRCb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIG9uQ29sbGlzaW9uRW50ZXIob3RoZXJDb2xsaWRlcixzZWxmQ29sbGlkZXIpe1xyXG5cclxuICAgICAgICBpZihvdGhlckNvbGxpZGVyLnRhZyA9PSA0MCAmJiBzZWxmQ29sbGlkZXIudGFnID09IDIyKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm5vZGUucGFyZW50LmdldENvbXBvbmVudCgnSnVlZ28nKS5QYXJhckp1ZWdvKDApO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucGFyZW50LmdldENvbXBvbmVudCgnSnVlZ28nKS5Db250cm9sUHVudGFqZSgxMDAwKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTsgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdmFyIG1hbmFnZXIgPSBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCk7XHJcbiAgICAgICAgbWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7fVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Boton_Menu.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1463fzuR0VE3oyExGmgaJ9H', 'Boton_Menu');
// Scripts/Boton_Menu.ts

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
    NewClass.prototype.onLoad = function () {
        cc.director.preloadScene('Menu_Inicial');
        this.node.on('touchstart', function () {
            cc.director.loadScene('Menu_Inicial');
        });
    };
    NewClass.prototype.start = function () {
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQm90b25fTWVudS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDs7SUFlQSxDQUFDO0lBYkcseUJBQU0sR0FBTjtRQUVJLEVBQUUsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBQztZQUMxQixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN0QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCx3QkFBSyxHQUFMO0lBRUEsQ0FBQztJQVpnQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBZTVCO0lBQUQsZUFBQztDQWZELEFBZUMsQ0FmcUMsRUFBRSxDQUFDLFNBQVMsR0FlakQ7a0JBZm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZSgnTWVudV9JbmljaWFsJyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKCd0b3VjaHN0YXJ0JyxmdW5jdGlvbigpe1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnTWVudV9JbmljaWFsJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ObjetosPuntos.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f2b23CrJHZM5Y3FGDC5aUwU', 'ObjetosPuntos');
// Scripts/ObjetosPuntos.ts

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
    NewClass.prototype.onCollisionEnter = function (otherCollider, selfCollider) {
        if (otherCollider.tag == 10) {
            this.node.parent.getComponent('Juego').ControlPuntaje(250);
            this.node.destroy();
        }
    };
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
    };
    NewClass.prototype.start = function () { };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcT2JqZXRvc1B1bnRvcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDs7SUFvQkEsQ0FBQztJQWxCRyxtQ0FBZ0IsR0FBaEIsVUFBaUIsYUFBYSxFQUFDLFlBQVk7UUFFdkMsSUFBRyxhQUFhLENBQUMsR0FBRyxJQUFJLEVBQUUsRUFBRTtZQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzNELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDdkI7SUFDTCxDQUFDO0lBRUQsd0JBQXdCO0lBRXhCLHlCQUFNLEdBQU47UUFDSSxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDaEQsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDM0IsQ0FBQztJQUVELHdCQUFLLEdBQUwsY0FBVSxDQUFDO0lBakJNLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FvQjVCO0lBQUQsZUFBQztDQXBCRCxBQW9CQyxDQXBCcUMsRUFBRSxDQUFDLFNBQVMsR0FvQmpEO2tCQXBCb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIG9uQ29sbGlzaW9uRW50ZXIob3RoZXJDb2xsaWRlcixzZWxmQ29sbGlkZXIpe1xyXG5cclxuICAgICAgICBpZihvdGhlckNvbGxpZGVyLnRhZyA9PSAxMCkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucGFyZW50LmdldENvbXBvbmVudCgnSnVlZ28nKS5Db250cm9sUHVudGFqZSgyNTApO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpOyBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB2YXIgbWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKTtcclxuICAgICAgICBtYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHt9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Banana.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b1dd9hPD+FFSY972yuDI3gd', 'Banana');
// Scripts/Banana.ts

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
    NewClass.prototype.onCollisionEnter = function (otherCollider, selfCollider) {
        if (otherCollider.tag == 10) {
            this.node.parent.getComponent('Juego').ControlPuntaje(100);
            this.node.destroy();
        }
    };
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
    };
    NewClass.prototype.start = function () { };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQmFuYW5hLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEOztJQW9CQSxDQUFDO0lBbEJHLG1DQUFnQixHQUFoQixVQUFpQixhQUFhLEVBQUMsWUFBWTtRQUV2QyxJQUFJLGFBQWEsQ0FBQyxHQUFHLElBQUksRUFBRSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDM0QsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUN2QjtJQUNMLENBQUM7SUFFRCx3QkFBd0I7SUFFeEIseUJBQU0sR0FBTjtRQUNJLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUNoRCxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUMzQixDQUFDO0lBRUQsd0JBQUssR0FBTCxjQUFVLENBQUM7SUFqQk0sUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQW9CNUI7SUFBRCxlQUFDO0NBcEJELEFBb0JDLENBcEJxQyxFQUFFLENBQUMsU0FBUyxHQW9CakQ7a0JBcEJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgb25Db2xsaXNpb25FbnRlcihvdGhlckNvbGxpZGVyLHNlbGZDb2xsaWRlcil7XHJcblxyXG4gICAgICAgIGlmIChvdGhlckNvbGxpZGVyLnRhZyA9PSAxMCkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucGFyZW50LmdldENvbXBvbmVudCgnSnVlZ28nKS5Db250cm9sUHVudGFqZSgxMDApO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpOyBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB2YXIgbWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKTtcclxuICAgICAgICBtYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHt9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Princesa.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5bd33IJJClH/6xC4K6O9jFL', 'Princesa');
// Scripts/Princesa.ts

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
    NewClass.prototype.onCollisionEnter = function (otherCollider, selfCollider) {
        if (otherCollider.tag == 10) {
            this.node.parent.getComponent('Juego').Gano();
            this.node.parent.getComponentInChildren('Donkey_Kong').Reina();
        }
    };
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
    };
    NewClass.prototype.start = function () { };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcUHJpbmNlc2EudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7O0lBb0JBLENBQUM7SUFsQkcsbUNBQWdCLEdBQWhCLFVBQWlCLGFBQWEsRUFBQyxZQUFZO1FBRXZDLElBQUcsYUFBYSxDQUFDLEdBQUcsSUFBSSxFQUFFLEVBQUU7WUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLHNCQUFzQixDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2xFO0lBQ0wsQ0FBQztJQUVELHdCQUF3QjtJQUV4Qix5QkFBTSxHQUFOO1FBQ0ksSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQ2hELE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQzNCLENBQUM7SUFFRCx3QkFBSyxHQUFMLGNBQVUsQ0FBQztJQWpCTSxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBb0I1QjtJQUFELGVBQUM7Q0FwQkQsQUFvQkMsQ0FwQnFDLEVBQUUsQ0FBQyxTQUFTLEdBb0JqRDtrQkFwQm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBvbkNvbGxpc2lvbkVudGVyKG90aGVyQ29sbGlkZXIsc2VsZkNvbGxpZGVyKXtcclxuXHJcbiAgICAgICAgaWYob3RoZXJDb2xsaWRlci50YWcgPT0gMTApIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5nZXRDb21wb25lbnQoJ0p1ZWdvJykuR2FubygpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucGFyZW50LmdldENvbXBvbmVudEluQ2hpbGRyZW4oJ0RvbmtleV9Lb25nJykuUmVpbmEoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB2YXIgbWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKTtcclxuICAgICAgICBtYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHt9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Redes.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '18d08Hy5P5FM7hqJNmO3cc5', 'Redes');
// Scripts/Redes.ts

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
    NewClass.prototype.onCollisionEnter = function (otherCollider, selfCollider) {
        if (otherCollider.tag == 10 && selfCollider.tag == 1)
            this.node.parent.getComponent('Juego').ControlVidas();
    };
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        this.FuerzaSalto = (Math.random() * +2) + 10;
        this.Angulo = (Math.random() * -5) + 2;
        if (this.Angulo > 0)
            this.Direccion = 1;
        else
            this.Direccion = -1;
        this.Gravedad = 9.81;
    };
    NewClass.prototype.start = function () { };
    NewClass.prototype.update = function (dt) {
        this.FuerzaSalto -= this.Gravedad * dt;
        this.node.setPosition(this.node.position.x + this.Angulo, this.node.position.y += this.FuerzaSalto);
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcUmVkZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7O0lBbUNBLENBQUM7SUE1QkcsbUNBQWdCLEdBQWhCLFVBQWlCLGFBQWEsRUFBQyxZQUFZO1FBRXZDLElBQUssYUFBYSxDQUFDLEdBQUcsSUFBSSxFQUFFLElBQUksWUFBWSxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ2pILENBQUM7SUFFRCx3QkFBd0I7SUFFeEIseUJBQU0sR0FBTjtRQUVJLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUNoRCxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUV2QixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUksRUFBRSxDQUFDO1FBQzdDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUUsQ0FBQyxDQUFDLENBQUMsR0FBSSxDQUFDLENBQUM7UUFFdkMsSUFBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUM7WUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQzs7WUFDbEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUV6QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUN6QixDQUFDO0lBRUQsd0JBQUssR0FBTCxjQUFVLENBQUM7SUFFWCx5QkFBTSxHQUFOLFVBQVEsRUFBRTtRQUVOLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN4RyxDQUFDO0lBbENnQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBbUM1QjtJQUFELGVBQUM7Q0FuQ0QsQUFtQ0MsQ0FuQ3FDLEVBQUUsQ0FBQyxTQUFTLEdBbUNqRDtrQkFuQ29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBBbmd1bG86bnVtYmVyO1xyXG4gICAgR3JhdmVkYWQ6bnVtYmVyO1xyXG4gICAgRGlyZWNjaW9uOm51bWJlcjtcclxuICAgIEZ1ZXJ6YVNhbHRvOm51bWJlcjtcclxuXHJcbiAgICBvbkNvbGxpc2lvbkVudGVyKG90aGVyQ29sbGlkZXIsc2VsZkNvbGxpZGVyKXtcclxuXHJcbiAgICAgICAgaWYgIChvdGhlckNvbGxpZGVyLnRhZyA9PSAxMCAmJiBzZWxmQ29sbGlkZXIudGFnID09IDEpIHRoaXMubm9kZS5wYXJlbnQuZ2V0Q29tcG9uZW50KCdKdWVnbycpLkNvbnRyb2xWaWRhcygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcblxyXG4gICAgICAgIHZhciBtYW5hZ2VyID0gY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpO1xyXG4gICAgICAgIG1hbmFnZXIuZW5hYmxlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMuRnVlcnphU2FsdG8gPSAoTWF0aC5yYW5kb20oKSogKzIpICArIDEwO1xyXG4gICAgICAgIHRoaXMuQW5ndWxvID0gKE1hdGgucmFuZG9tKCkqIC01KSAgKyAyO1xyXG4gICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5Bbmd1bG8gPiAwKSB0aGlzLkRpcmVjY2lvbiA9IDE7XHJcbiAgICAgICAgZWxzZSB0aGlzLkRpcmVjY2lvbiA9IC0xO1xyXG5cclxuICAgICAgICB0aGlzLkdyYXZlZGFkID0gOS44MTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7fVxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuXHJcbiAgICAgICAgdGhpcy5GdWVyemFTYWx0byAtPSB0aGlzLkdyYXZlZGFkICogZHQ7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRoaXMubm9kZS5wb3NpdGlvbi54ICsgdGhpcy5Bbmd1bG8sIHRoaXMubm9kZS5wb3NpdGlvbi55ICs9IHRoaXMuRnVlcnphU2FsdG8pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Boton_Jugar.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '513ff1L3lpDVYHRGpkNfbPB', 'Boton_Jugar');
// Scripts/Boton_Jugar.ts

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
    NewClass.prototype.onLoad = function () {
        cc.director.preloadScene('Level 1');
        this.node.on('touchstart', function () {
            cc.director.loadScene('Level 1');
        });
    };
    NewClass.prototype.start = function () { };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQm90b25fSnVnYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7O0lBYUEsQ0FBQztJQVhHLHlCQUFNLEdBQU47UUFFSSxFQUFFLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUM7WUFDMUIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsd0JBQUssR0FBTCxjQUFVLENBQUM7SUFWTSxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBYTVCO0lBQUQsZUFBQztDQWJELEFBYUMsQ0FicUMsRUFBRSxDQUFDLFNBQVMsR0FhakQ7a0JBYm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG5cclxuICAgICAgICBjYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUoJ0xldmVsIDEnKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oJ3RvdWNoc3RhcnQnLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdMZXZlbCAxJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge31cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Mario_Bros.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcTWFyaW9fQnJvcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDs7SUFxS0EsQ0FBQztJQXBKRyw0QkFBUyxHQUFUO1FBRUksSUFBRyxJQUFJLENBQUMsY0FBYyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyx1QkFBdUIsRUFBQztZQUN0RyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUksR0FBRyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO1lBRXhCLElBQUcsSUFBSSxDQUFDLHVCQUF1QjtnQkFBRSxJQUFJLENBQUMsdUJBQXVCLEdBQUcsS0FBSyxDQUFDO1lBRXRFLElBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUU7Z0JBQ2YsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO2dCQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7YUFDeEI7aUJBQ0k7Z0JBQ0QsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO2dCQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxD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LENBQUMsS0FBSyxFQUFDO2dCQUVqQixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDNUUsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7YUFFN0I7O2dCQUFLLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1NBQ2xDO0lBQ0wsQ0FBQztJQXBLZ0IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXFLNUI7SUFBRCxlQUFDO0NBcktELEFBcUtDLENBcktxQyxFQUFFLENBQUMsU0FBUyxHQXFLakQ7a0JBcktvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgVGltZXJEaXJlY2Npb246bnVtYmVyO1xyXG4gICAgTW92ZXJJenF1aWVyZGE6bnVtYmVyO1xyXG4gICAgTW92ZXJEZXJlY2hhOm51bWJlcjtcclxuICAgIE1vdmVyOm51bWJlcjtcclxuXHJcbiAgICBTdWJpcjpib29sZWFuO1xyXG4gICAgQmFqYXI6Ym9vbGVhbjtcclxuICAgIEVzdG95RW5TdWVsbzpib29sZWFuO1xyXG4gICAgUHVlZG9EZXJlY2hhOmJvb2xlYW47XHJcbiAgICBQdWVkb0l6cXVpZXJkYTpib29sZWFuO1xyXG4gICAgRXNjYWxlcmFEZU51ZXZvOmJvb2xlYW47XHJcbiAgICBFc3RveUVuRXNjYWxlcmE6Ym9vbGVhbjtcclxuICAgIFB1ZWRvVXNhckVzY2FsZXJhOmJvb2xlYW47XHJcbiAgICBDYW1iaW9EaXJlY2Npb25Fc2NhbGVyYTpib29sZWFuO1xyXG5cclxuICAgIERpcmVjY2lvbigpe1xyXG5cclxuICAgICAgICBpZih0aGlzLlRpbWVyRGlyZWNjaW9uID49IDQgfHwgIXRoaXMuUHVlZG9EZXJlY2hhIHx8ICF0aGlzLlB1ZWRvSXpxdWllcmRhIHx8IHRoaXMuQ2FtYmlvRGlyZWNjaW9uRXNjYWxlcmEpe1xyXG4gICAgICAgICAgICB0aGlzLk1vdmVyID0gKE1hdGgucmFuZG9tKCkqIC01KSAgKyAyLjU7XHJcbiAgICAgICAgICAgIHRoaXMuVGltZXJEaXJlY2Npb24gPSAwO1xyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5DYW1iaW9EaXJlY2Npb25Fc2NhbGVyYSkgdGhpcy5DYW1iaW9EaXJlY2Npb25Fc2NhbGVyYSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5Nb3ZlciA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuTW92ZXJEZXJlY2hhID0gMTtcclxuICAgICAgICAgICAgICAgIHRoaXMuTW92ZXJJenF1aWVyZGEgPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLk1vdmVySXpxdWllcmRhID0gMTtcclxuICAgICAgICAgICAgICAgIHRoaXMuTW92ZXJEZXJlY2hhID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAtMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gIFxyXG4gICAgfVxyXG5cclxuICAgIERlc3RydWlyKCl7IHRoaXMubm9kZS5kZXN0cm95KCk7IH1cclxuXHJcbiAgICBvbkNvbGxpc2lvbkVudGVyKG90aGVyQ29sbGlkZXIsc2VsZkNvbGxpZGVyKXtcclxuXHJcbiAgICAgICAgaWYgIChvdGhlckNvbGxpZGVyLnRhZyA9PSAyICYmIHNlbGZDb2xsaWRlci50YWcgPT0gMjEpIHtcclxuICAgICAgICAgICAgdGhpcy5Fc3RveUVuRXNjYWxlcmEgPSB0cnVlOyBcclxuICAgICAgICAgICAgdGhpcy5DYW1iaW9EaXJlY2Npb25Fc2NhbGVyYSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihvdGhlckNvbGxpZGVyLnRhZyA9PSA0MCAmJiBzZWxmQ29sbGlkZXIudGFnID09IDIyKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5wYXJlbnQuZ2V0Q29tcG9uZW50KCdKdWVnbycpLkNvbnRyb2xQdW50YWplKDUwMCk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7IFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgIChvdGhlckNvbGxpZGVyLnRhZyA9PSAyMCAmJiBzZWxmQ29sbGlkZXIudGFnID09IDIxKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgQW5pbWFjaW9uID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnN0b3AoKTtcclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMuUHVlZG9Vc2FyRXNjYWxlcmEpIHtcclxuIFxyXG4gICAgICAgICAgICAgICAgQW5pbWFjaW9uLnBsYXlBZGRpdGl2ZSgnTWFyaW8gRXNjYWxlcmEnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuQmFqYXIgPSB0cnVlOyBcclxuICAgICAgICAgICAgICAgIHRoaXMuUHVlZG9Vc2FyRXNjYWxlcmEgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICBBbmltYWNpb24ucGxheUFkZGl0aXZlKCdNYXJpbyBNYXJ0aWxsbycpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5CYWphciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5TdWJpciA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAgKG90aGVyQ29sbGlkZXIudGFnID09IDMwICYmIHNlbGZDb2xsaWRlci50YWcgPT0gMjEpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBBbmltYWNpb24gPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5zdG9wKCk7XHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLlB1ZWRvVXNhckVzY2FsZXJhKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgQW5pbWFjaW9uLnBsYXlBZGRpdGl2ZSgnTWFyaW8gRXNjYWxlcmEnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuU3ViaXIgPSB0cnVlOyBcclxuICAgICAgICAgICAgICAgIHRoaXMuUHVlZG9Vc2FyRXNjYWxlcmEgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICBBbmltYWNpb24ucGxheUFkZGl0aXZlKCdNYXJpbyBNYXJ0aWxsbycpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5CYWphciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5TdWJpciA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgIChvdGhlckNvbGxpZGVyLnRhZyA9PSA1ICYmIHNlbGZDb2xsaWRlci50YWcgPT0gNCkgdGhpcy5QdWVkb0RlcmVjaGEgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgIChvdGhlckNvbGxpZGVyLnRhZyA9PSA2ICYmIHNlbGZDb2xsaWRlci50YWcgPT0gNCkgdGhpcy5QdWVkb0l6cXVpZXJkYSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ29sbGlzaW9uRXhpdChvdGhlckNvbGxpZGVyLHNlbGZDb2xsaWRlcil7XHJcblxyXG4gICAgICAgIGlmICAob3RoZXJDb2xsaWRlci50YWcgPT0gMiAmJiBzZWxmQ29sbGlkZXIudGFnID09IDIxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuRXN0b3lFbkVzY2FsZXJhID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuUHVlZG9Vc2FyRXNjYWxlcmEgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgIChvdGhlckNvbGxpZGVyLnRhZyA9PSA1ICYmIHNlbGZDb2xsaWRlci50YWcgPT0gNCkgdGhpcy5QdWVkb0RlcmVjaGEgPSB0cnVlO1xyXG5cclxuICAgICAgICBpZiAgKG90aGVyQ29sbGlkZXIudGFnID09IDYgJiYgc2VsZkNvbGxpZGVyLnRhZyA9PSA0KSB0aGlzLlB1ZWRvSXpxdWllcmRhID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG5cclxuICAgICAgICB2YXIgbWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKTtcclxuICAgICAgICBtYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLk1vdmVySXpxdWllcmRhID0gMDtcclxuICAgICAgICB0aGlzLk1vdmVyRGVyZWNoYSA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMuRXN0b3lFbkVzY2FsZXJhID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5Fc3RveUVuU3VlbG8gPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLlB1ZWRvRGVyZWNoYSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5QdWVkb0l6cXVpZXJkYSA9IHRydWU7XHJcblxyXG4gICAgICAgdGhpcy5Fc2NhbGVyYURlTnVldm8gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuVGltZXJEaXJlY2Npb24gPSA1O1xyXG5cclxuICAgICAgICB0aGlzLlB1ZWRvVXNhckVzY2FsZXJhID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdmFyIEFuaW1hY2lvbiA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICBBbmltYWNpb24ucGxheUFkZGl0aXZlKCdNYXJpbyBNYXJ0aWxsbycpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHt9XHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIHZhciBBbmltYWNpb24gPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcblxyXG4gICAgICAgIHRoaXMuVGltZXJEaXJlY2Npb24gKz0gZHQ7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuRXN0b3lFblN1ZWxvKXtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuRGlyZWNjaW9uKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5Nb3ZlckRlcmVjaGEgPT0gMSAmJiB0aGlzLlB1ZWRvRGVyZWNoYSkgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRoaXMubm9kZS5wb3NpdGlvbi54ICs9IDEwMCpkdCx0aGlzLm5vZGUucG9zaXRpb24ueSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAodGhpcy5Nb3Zlckl6cXVpZXJkYSA9PSAxICYmIHRoaXMuUHVlZG9JenF1aWVyZGEpIHRoaXMubm9kZS5zZXRQb3NpdGlvbih0aGlzLm5vZGUucG9zaXRpb24ueCAtPSAxMDAqZHQsdGhpcy5ub2RlLnBvc2l0aW9uLnkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuRXN0b3lFbkVzY2FsZXJhKXtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLlN1YmlyKXtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24odGhpcy5ub2RlLnBvc2l0aW9uLngsIHRoaXMubm9kZS5wb3NpdGlvbi55ICs9IDIwMCpkdCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkVzdG95RW5TdWVsbyA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgfWVsc2UgaWYgKHRoaXMuQmFqYXIpe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbih0aGlzLm5vZGUucG9zaXRpb24ueCwgdGhpcy5ub2RlLnBvc2l0aW9uLnkgLT0gMjAwKmR0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuRXN0b3lFblN1ZWxvID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICB9ZWxzZSB0aGlzLkVzdG95RW5TdWVsbyA9IHRydWU7XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Barril_Tirar.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2be4baDvB9Bc645cRgSvFVY', 'Barril_Tirar');
// Scripts/Barril_Tirar.ts

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
    NewClass.prototype.onCollisionEnter = function (otherCollider, selfCollider) {
        if (otherCollider.tag == 22 || otherCollider.tag == 5 || otherCollider.tag == 6)
            this.node.destroy();
    };
    NewClass.prototype.Mover = function (i) {
        this.Rodar = true;
        if (i == 1)
            this.Derecha = true;
        else
            this.Derecha = false;
        this.node.getComponent(cc.Animation).play();
    };
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        this.Rodar = false;
    };
    NewClass.prototype.start = function () { };
    NewClass.prototype.update = function (dt) {
        if (this.Rodar) {
            if (this.Derecha)
                this.node.setPosition(this.node.position.x += 300 * dt, this.node.position.y);
            else
                this.node.setPosition(this.node.position.x -= 300 * dt, this.node.position.y);
        }
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQmFycmlsX1RpcmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEOztJQXVDQSxDQUFDO0lBbENHLG1DQUFnQixHQUFoQixVQUFpQixhQUFhLEVBQUMsWUFBWTtRQUV2QyxJQUFJLGFBQWEsQ0FBQyxHQUFHLElBQUksRUFBRSxJQUFJLGFBQWEsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLGFBQWEsQ0FBQyxHQUFHLElBQUksQ0FBQztZQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDekcsQ0FBQztJQUVELHdCQUFLLEdBQUwsVUFBTSxDQUFDO1FBRUgsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFFbEIsSUFBSyxDQUFDLElBQUksQ0FBQztZQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDOztZQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUUxQixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEQsQ0FBQztJQUVELHdCQUF3QjtJQUV4Qix5QkFBTSxHQUFOO1FBQ0ksSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQ2hELE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBRXZCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCx3QkFBSyxHQUFMLGNBQVUsQ0FBQztJQUVYLHlCQUFNLEdBQU4sVUFBUSxFQUFFO1FBRU4sSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFDO1lBRVgsSUFBSSxJQUFJLENBQUMsT0FBTztnQkFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksR0FBRyxHQUFDLEVBQUUsRUFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Z0JBQ3hGLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxHQUFHLEdBQUMsRUFBRSxFQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ25GO0lBQ0wsQ0FBQztJQXRDZ0IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXVDNUI7SUFBRCxlQUFDO0NBdkNELEFBdUNDLENBdkNxQyxFQUFFLENBQUMsU0FBUyxHQXVDakQ7a0JBdkNvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgUm9kYXI6Ym9vbGVhbjtcclxuICAgIERlcmVjaGE6Ym9vbGVhbjtcclxuXHJcbiAgICBvbkNvbGxpc2lvbkVudGVyKG90aGVyQ29sbGlkZXIsc2VsZkNvbGxpZGVyKXtcclxuXHJcbiAgICAgICAgaWYgKG90aGVyQ29sbGlkZXIudGFnID09IDIyIHx8IG90aGVyQ29sbGlkZXIudGFnID09IDUgfHwgb3RoZXJDb2xsaWRlci50YWcgPT0gNikgdGhpcy5ub2RlLmRlc3Ryb3koKTsgXHJcbiAgICB9XHJcblxyXG4gICAgTW92ZXIoaSl7XHJcblxyXG4gICAgICAgIHRoaXMuUm9kYXIgPSB0cnVlO1xyXG5cclxuICAgICAgICBpZiAoIGkgPT0gMSkgdGhpcy5EZXJlY2hhID0gdHJ1ZTtcclxuICAgICAgICBlbHNlIHRoaXMuRGVyZWNoYSA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdmFyIG1hbmFnZXIgPSBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCk7XHJcbiAgICAgICAgbWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5Sb2RhciA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHt9XHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5Sb2Rhcil7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5EZXJlY2hhKSB0aGlzLm5vZGUuc2V0UG9zaXRpb24odGhpcy5ub2RlLnBvc2l0aW9uLnggKz0gMzAwKmR0LHRoaXMubm9kZS5wb3NpdGlvbi55KTtcclxuICAgICAgICAgICAgZWxzZSB0aGlzLm5vZGUuc2V0UG9zaXRpb24odGhpcy5ub2RlLnBvc2l0aW9uLnggLT0gMzAwKmR0LHRoaXMubm9kZS5wb3NpdGlvbi55KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------
