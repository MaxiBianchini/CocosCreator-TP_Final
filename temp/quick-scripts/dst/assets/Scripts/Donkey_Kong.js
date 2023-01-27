
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcRG9ua2V5X0tvbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUEwU0M7UUF2U0csa0JBQVksR0FBZ0IsSUFBSSxDQUFDO1FBR2pDLHdCQUFrQixHQUFnQixJQUFJLENBQUM7O0lBb1MzQyxDQUFDO0lBclFHLDhCQUFXLEdBQVgsVUFBWSxLQUFLO1FBQ2IsUUFBTyxLQUFLLENBQUMsT0FBTyxFQUFDO1lBQ2pCLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSTtnQkFFbEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7Z0JBRXhCLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtvQkFFbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7b0JBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztpQkFDL0M7Z0JBRUQsTUFBTTtZQUNWLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSztnQkFFbkIsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7Z0JBRXRCLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtvQkFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO29CQUVyQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO29CQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7aUJBQy9DO2dCQUVELE1BQU07WUFDVixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBRWhCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO2dCQUNyQixNQUFNO1lBQ1YsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJO2dCQUVsQixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztnQkFDcEIsTUFBTTtZQUNWLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSztnQkFFbkIsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFDO29CQUNqQixFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3pELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLHNCQUFzQixDQUFDLGNBQWMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUNoRixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztpQkFFNUI7cUJBQUssSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFDO29CQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztvQkFDMUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7b0JBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO29CQUN2QixFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUN0RDtnQkFDRCxNQUFNO1NBQ2I7SUFDTCxDQUFDO0lBRUQsOEJBQVcsR0FBWCxVQUFZLEtBQUs7UUFDYixRQUFPLEtBQUssQ0FBQyxPQUFPLEVBQUM7WUFDakIsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJO2dCQUVsQixJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztnQkFDeEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztnQkFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUM1QyxNQUFNO1lBQ1YsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLO2dCQUVuQixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztnQkFDdEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztnQkFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUM1QyxNQUFNO1lBQ1YsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUVoQixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztnQkFDckIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztnQkFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUM1QyxNQUFNO1lBQ1YsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJO2dCQUVsQixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztnQkFDcEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztnQkFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUM1QyxNQUFNO1NBQ2I7SUFDTCxDQUFDO0lBRUQsd0JBQUssR0FBTCxjQUFTLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUU1Qix5QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDN0IsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFFekIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7UUFDM0IsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFFekIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFFckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFFdkIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztJQUNqQyxDQUFDO0lBRUQsbUNBQWdCLEdBQWhCLFVBQWlCLGFBQWEsRUFBQyxZQUFZO1FBRXZDLElBQUssYUFBYSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksWUFBWSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUU7WUFFbEQsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFDO2dCQUViLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO2dCQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQzthQUN4QjtTQUNKO1FBRUQsSUFBSyxhQUFhLENBQUMsR0FBRyxJQUFJLEVBQUUsSUFBSSxZQUFZLENBQUMsR0FBRyxJQUFJLEVBQUU7WUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFOUcsSUFBSyxhQUFhLENBQUMsR0FBRyxJQUFJLEVBQUUsSUFBSSxZQUFZLENBQUMsR0FBRyxJQUFJLEVBQUU7WUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUVoRixJQUFLLGFBQWEsQ0FBQyxHQUFHLElBQUksRUFBRSxJQUFJLFlBQVksQ0FBQyxHQUFHLElBQUksRUFBRSxFQUFFO1lBRXBELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN2RSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztTQUMzQjtRQUVELElBQUssYUFBYSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksWUFBWSxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQUUsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFFbEYsSUFBSyxhQUFhLENBQUMsR0FBRyxJQUFJLEVBQUUsSUFBSSxZQUFZLENBQUMsR0FBRyxJQUFJLENBQUM7WUFBRSxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUUvRSxJQUFLLGFBQWEsQ0FBQyxHQUFHLElBQUksRUFBRSxJQUFJLFlBQVksQ0FBQyxHQUFHLElBQUksQ0FBQztZQUFFLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBRS9FLElBQUssYUFBYSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksWUFBWSxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQUUsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFFaEYsSUFBSyxhQUFhLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxZQUFZLENBQUMsR0FBRyxJQUFJLENBQUM7WUFBRSxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztJQUN0RixDQUFDO0lBRUQsa0NBQWUsR0FBZixVQUFnQixhQUFhLEVBQUMsWUFBWTtRQUV0QyxJQUFLLGFBQWEsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLFlBQVksQ0FBQyxHQUFHLElBQUksQ0FBQztZQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBRTFFLElBQUssYUFBYSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksWUFBWSxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFFbEYsSUFBSyxhQUFhLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxZQUFZLENBQUMsR0FBRyxJQUFJLENBQUM7WUFBRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUUvRSxJQUFLLGFBQWEsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLFlBQVksQ0FBQyxHQUFHLElBQUksQ0FBQztZQUFFLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1FBRWpGLElBQUssYUFBYSxDQUFDLEdBQUcsSUFBSSxFQUFFLElBQUksWUFBWSxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFFOUUsSUFBSyxhQUFhLENBQUMsR0FBRyxJQUFJLEVBQUUsSUFBSSxZQUFZLENBQUMsR0FBRyxJQUFJLENBQUM7WUFBRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUNsRixDQUFDO0lBRUQsd0JBQXdCO0lBRXhCLHlCQUFNLEdBQU47UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLFdBQVcsRUFBQyxJQUFJLENBQUMsQ0FBQztRQUMzRSxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUMsSUFBSSxDQUFDLFdBQVcsRUFBQyxJQUFJLENBQUMsQ0FBQztRQUV6RSxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDaEQsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFFdkIsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFFcEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDN0IsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFFekIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7UUFDM0IsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFFekIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFFckIsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFFckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFFdkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztRQUUxQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1FBRTdCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFRCx3QkFBSyxHQUFMLGNBQVUsQ0FBQztJQUVYLHlCQUFNLEdBQU4sVUFBUSxFQUFFO1FBRU4sSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRXJELElBQUksSUFBSSxDQUFDLGFBQWEsRUFBQztZQUVuQixJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBRXpGOztZQUFLLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBRTlCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVU7WUFBRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUVuRSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUM7WUFFbEIsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBRWhGLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztnQkFFckIsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7b0JBRXZCLFNBQVMsQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBQ3JDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7aUJBQ2pDO2dCQUVELElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxHQUFHLEdBQUMsRUFBRSxFQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzlFO1lBRUQsSUFBSSxJQUFJLENBQUMsY0FBYyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsY0FBYyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBRXBGLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUV0QixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtvQkFDdkIsU0FBUyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFDckMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztpQkFDakM7Z0JBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBQyxFQUFFLEVBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDOUU7U0FDSjtRQUVELElBQUksSUFBSSxDQUFDLGVBQWUsRUFBQztZQUVyQixJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUM7Z0JBRXpDLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO29CQUN2QixTQUFTLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDO29CQUN0QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO2lCQUNqQztnQkFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDNUUsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7YUFDN0I7aUJBQ0ssSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSyxJQUFJLENBQUMsVUFBVSxFQUFDO2dCQUUvQyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtvQkFDdkIsU0FBUyxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQztvQkFDdEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztpQkFDakM7Z0JBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxHQUFHLEdBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQzVFLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO2FBQzdCO1NBQ0o7UUFFRCxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUM7WUFFakIsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxFQUFFO2dCQUMzQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztnQkFDekIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQzthQUM3QjtZQUVELElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxFQUFFLENBQUM7U0FDL0I7SUFDTCxDQUFDO0lBdFNEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7a0RBQ1U7SUFHakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzt3REFDZ0I7SUFOdEIsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQTBTNUI7SUFBRCxlQUFDO0NBMVNELEFBMFNDLENBMVNxQyxFQUFFLENBQUMsU0FBUyxHQTBTakQ7a0JBMVNvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIFNvbmlkb1NhbHRhcjpjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBTb25pZG9Tb2x0YXJCYXJyaWw6Y2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcblxyXG4gICAgTW92ZXJJenF1aWVyZGE6bnVtYmVyO1xyXG4gICAgTW92ZXJEZXJlY2hhOm51bWJlcjtcclxuICAgIE1vdmVyQXJyaWJhOm51bWJlcjtcclxuICAgIE1vdmVyQWJham86bnVtYmVyO1xyXG5cclxuICAgIEVzdG95RW5Fc2NhbGVyYTpib29sZWFuO1xyXG4gICAgRXN0b3lFblN1ZWxvOmJvb2xlYW47XHJcblxyXG4gICAgUHVlZG9EZXJlY2hhOmJvb2xlYW47XHJcbiAgICBQdWVkb0l6cXVpZXJkYTpib29sZWFuO1xyXG5cclxuICAgIEZ1ZXJ6YVNhbHRvOm51bWJlcjtcclxuICAgIEdyYXZlZGFkOm51bWJlcjtcclxuICAgIEVzdG95U2FsdGFuZG86Ym9vbGVhbjtcclxuICAgIFB1ZWRvU2FsdGFyOmJvb2xlYW47XHJcbiAgICBZYVNhbHRvOmJvb2xlYW47XHJcblxyXG4gICAgUHVlZG9TdWJpcjpib29sZWFuO1xyXG4gICAgUHVlZG9CYWphcjpib29sZWFuO1xyXG5cclxuICAgIFN1cGVyRnVlcnphOmJvb2xlYW47XHJcbiAgICBUaW1lclN1cGVyRnVlcnphOm51bWJlcjtcclxuXHJcbiAgICBBY3RpdmFyQW5pbWFjaW9uOmJvb2xlYW47XHJcbiAgICBUaXJhckJhcnJpbDpib29sZWFuO1xyXG5cclxuICAgIEdhbm86Ym9vbGVhbjtcclxuXHJcbiAgICBNb3ZlclBsYXllcihldmVudCl7XHJcbiAgICAgICAgc3dpdGNoKGV2ZW50LmtleUNvZGUpe1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5sZWZ0OlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5Nb3Zlckl6cXVpZXJkYSA9IDE7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuVGlyYXJCYXJyaWwpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IC0xO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQWN0aXZhckFuaW1hY2lvbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnJpZ2h0OlxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuTW92ZXJEZXJlY2hhID0gMTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5UaXJhckJhcnJpbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkFjdGl2YXJBbmltYWNpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS51cDpcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLk1vdmVyQXJyaWJhID0gMTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kb3duOlxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuTW92ZXJBYmFqbyA9IDE7IFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnNwYWNlOlxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLlRpcmFyQmFycmlsKXtcclxuICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuU29uaWRvU29sdGFyQmFycmlsLGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUucGFyZW50LmdldENvbXBvbmVudEluQ2hpbGRyZW4oJ0JhcnJpbF9UaXJhcicpLk1vdmVyKHRoaXMubm9kZS5zY2FsZVgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuVGlyYXJCYXJyaWwgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZiAodGhpcy5QdWVkb1NhbHRhcil7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Fc3RveVNhbHRhbmRvID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLlB1ZWRvU2FsdGFyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5GdWVyemFTYWx0byA9IDMuNTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuU29uaWRvU2FsdGFyLGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBQYXJhclBsYXllcihldmVudCl7XHJcbiAgICAgICAgc3dpdGNoKGV2ZW50LmtleUNvZGUpe1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5sZWZ0OlxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuTW92ZXJJenF1aWVyZGEgPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5BY3RpdmFyQW5pbWFjaW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkucmlnaHQ6XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5Nb3ZlckRlcmVjaGEgPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5BY3RpdmFyQW5pbWFjaW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkudXA6XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5Nb3ZlckFycmliYSA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkFjdGl2YXJBbmltYWNpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kb3duOlxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuTW92ZXJBYmFqbyA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkFjdGl2YXJBbmltYWNpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBSZWluYSgpeyB0aGlzLkdhbm8gPSB0cnVlOyB9XHJcblxyXG4gICAgTWVNb3JpKCl7XHJcbiAgICAgICAgdGhpcy5Fc3RveUVuRXNjYWxlcmEgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLkVzdG95RW5TdWVsbyA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMuUHVlZG9JenF1aWVyZGEgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuUHVlZG9EZXJlY2hhID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5Fc3RveVNhbHRhbmRvID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5QdWVkb1NhbHRhciA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5ZYVNhbHRvID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuUHVlZG9TdWJpciA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuUHVlZG9CYWphciA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMuQWN0aXZhckFuaW1hY2lvbiA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgb25Db2xsaXNpb25FbnRlcihvdGhlckNvbGxpZGVyLHNlbGZDb2xsaWRlcil7XHJcblxyXG4gICAgICAgIGlmICAob3RoZXJDb2xsaWRlci50YWcgPT0gMSAmJiBzZWxmQ29sbGlkZXIudGFnID09IDApIHtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLllhU2FsdG8pe1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuRXN0b3lTYWx0YW5kbyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ZYVNhbHRvID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICAob3RoZXJDb2xsaWRlci50YWcgPT0gMjIgJiYgc2VsZkNvbGxpZGVyLnRhZyA9PSAxMCkgdGhpcy5ub2RlLnBhcmVudC5nZXRDb21wb25lbnQoJ0p1ZWdvJykuQ29udHJvbFZpZGFzKCk7XHJcblxyXG4gICAgICAgIGlmICAob3RoZXJDb2xsaWRlci50YWcgPT0gMjUgJiYgc2VsZkNvbGxpZGVyLnRhZyA9PSAxMCkgdGhpcy5TdXBlckZ1ZXJ6YSA9IHRydWU7XHJcblxyXG4gICAgICAgIGlmICAob3RoZXJDb2xsaWRlci50YWcgPT0gMzUgJiYgc2VsZkNvbGxpZGVyLnRhZyA9PSAxMCkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5nZXRDb21wb25lbnQoJ0p1ZWdvJykuQ29udHJvbEJhcnJpbCh0aGlzLm5vZGUuc2NhbGVYKTtcclxuICAgICAgICAgICAgdGhpcy5UaXJhckJhcnJpbCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAgKG90aGVyQ29sbGlkZXIudGFnID09IDIgJiYgc2VsZkNvbGxpZGVyLnRhZyA9PSAwKSB0aGlzLkVzdG95RW5Fc2NhbGVyYSA9IHRydWU7IFxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICAob3RoZXJDb2xsaWRlci50YWcgPT0gMjAgJiYgc2VsZkNvbGxpZGVyLnRhZyA9PSAwKSB0aGlzLlB1ZWRvU3ViaXIgPSBmYWxzZTsgXHJcblxyXG4gICAgICAgIGlmICAob3RoZXJDb2xsaWRlci50YWcgPT0gMzAgJiYgc2VsZkNvbGxpZGVyLnRhZyA9PSAwKSB0aGlzLlB1ZWRvQmFqYXIgPSBmYWxzZTsgXHJcblxyXG4gICAgICAgIGlmICAob3RoZXJDb2xsaWRlci50YWcgPT0gNSAmJiBzZWxmQ29sbGlkZXIudGFnID09IDQpIHRoaXMuUHVlZG9EZXJlY2hhID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICAob3RoZXJDb2xsaWRlci50YWcgPT0gNiAmJiBzZWxmQ29sbGlkZXIudGFnID09IDQpIHRoaXMuUHVlZG9JenF1aWVyZGEgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNvbGxpc2lvbkV4aXQob3RoZXJDb2xsaWRlcixzZWxmQ29sbGlkZXIpe1xyXG5cclxuICAgICAgICBpZiAgKG90aGVyQ29sbGlkZXIudGFnID09IDEgJiYgc2VsZkNvbGxpZGVyLnRhZyA9PSAwKSB0aGlzLllhU2FsdG8gPSB0cnVlO1xyXG5cclxuICAgICAgICBpZiAgKG90aGVyQ29sbGlkZXIudGFnID09IDIgJiYgc2VsZkNvbGxpZGVyLnRhZyA9PSAwKXRoaXMuRXN0b3lFbkVzY2FsZXJhID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICAob3RoZXJDb2xsaWRlci50YWcgPT0gNSAmJiBzZWxmQ29sbGlkZXIudGFnID09IDQpIHRoaXMuUHVlZG9EZXJlY2hhID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgIChvdGhlckNvbGxpZGVyLnRhZyA9PSA2ICYmIHNlbGZDb2xsaWRlci50YWcgPT0gNCkgdGhpcy5QdWVkb0l6cXVpZXJkYSA9IHRydWU7XHJcblxyXG4gICAgICAgIGlmICAob3RoZXJDb2xsaWRlci50YWcgPT0gMjAgJiYgc2VsZkNvbGxpZGVyLnRhZyA9PSAwKSB0aGlzLlB1ZWRvU3ViaXIgPSB0cnVlOyBcclxuXHJcbiAgICAgICAgaWYgIChvdGhlckNvbGxpZGVyLnRhZyA9PSAzMCAmJiBzZWxmQ29sbGlkZXIudGFnID09IDApIHRoaXMuUHVlZG9CYWphciA9IHRydWU7IFxyXG4gICAgfVxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLHRoaXMuTW92ZXJQbGF5ZXIsdGhpcyk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCx0aGlzLlBhcmFyUGxheWVyLHRoaXMpO1xyXG5cclxuICAgICAgICB2YXIgbWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKTtcclxuICAgICAgICBtYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLk1vdmVySXpxdWllcmRhID0gMDtcclxuICAgICAgICB0aGlzLk1vdmVyRGVyZWNoYSA9IDA7XHJcbiAgICAgICAgdGhpcy5Nb3ZlckFycmliYSA9IDA7XHJcbiAgICAgICAgdGhpcy5Nb3ZlckFiYWpvID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5Fc3RveUVuRXNjYWxlcmEgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLkVzdG95RW5TdWVsbyA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMuUHVlZG9JenF1aWVyZGEgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuUHVlZG9EZXJlY2hhID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5Fc3RveVNhbHRhbmRvID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5QdWVkb1NhbHRhciA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5ZYVNhbHRvID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuRnVlcnphU2FsdG8gPSA0O1xyXG4gICAgICAgIHRoaXMuR3JhdmVkYWQgPSA5LjgxO1xyXG5cclxuICAgICAgICB0aGlzLlB1ZWRvU3ViaXIgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLlB1ZWRvQmFqYXIgPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLlN1cGVyRnVlcnphID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5UaW1lclN1cGVyRnVlcnphID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5BY3RpdmFyQW5pbWFjaW9uID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5HYW5vID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge31cclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcblxyXG4gICAgICAgIHZhciBBbmltYWNpb24gPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLkVzdG95U2FsdGFuZG8pe1xyXG5cclxuICAgICAgICAgICAgdGhpcy5GdWVyemFTYWx0byAtPSB0aGlzLkdyYXZlZGFkICogZHQ7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbih0aGlzLm5vZGUucG9zaXRpb24ueCwgdGhpcy5ub2RlLnBvc2l0aW9uLnkgKz0gdGhpcy5GdWVyemFTYWx0byk7XHJcblxyXG4gICAgICAgIH1lbHNlIHRoaXMuUHVlZG9TYWx0YXIgPSB0cnVlO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuUHVlZG9TdWJpciB8fCAhdGhpcy5QdWVkb0JhamFyKSB0aGlzLkVzdG95RW5TdWVsbyA9IHRydWU7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLkVzdG95RW5TdWVsbyl7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5Nb3ZlckRlcmVjaGEgPT0gMSAmJiB0aGlzLlB1ZWRvRGVyZWNoYSAmJiAhdGhpcy5HYW5vICYmICF0aGlzLlRpcmFyQmFycmlsKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IDE7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuQWN0aXZhckFuaW1hY2lvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIEFuaW1hY2lvbi5wbGF5QWRkaXRpdmUoJ0RLIENhbWluYXInKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkFjdGl2YXJBbmltYWNpb24gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24odGhpcy5ub2RlLnBvc2l0aW9uLnggKz0gMTUwKmR0LHRoaXMubm9kZS5wb3NpdGlvbi55KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuTW92ZXJJenF1aWVyZGEgPT0gMSAmJiB0aGlzLlB1ZWRvSXpxdWllcmRhICYmICF0aGlzLkdhbm8gJiYgIXRoaXMuVGlyYXJCYXJyaWwpIHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IC0xO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLkFjdGl2YXJBbmltYWNpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBBbmltYWNpb24ucGxheUFkZGl0aXZlKCdESyBDYW1pbmFyJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5BY3RpdmFyQW5pbWFjaW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRoaXMubm9kZS5wb3NpdGlvbi54IC09IDE1MCpkdCx0aGlzLm5vZGUucG9zaXRpb24ueSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLkVzdG95RW5Fc2NhbGVyYSl7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5Nb3ZlckFycmliYSA9PSAxICYmIHRoaXMuUHVlZG9TdWJpcil7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuQWN0aXZhckFuaW1hY2lvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIEFuaW1hY2lvbi5wbGF5QWRkaXRpdmUoJ0RLIEVzY2FsZXJhJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5BY3RpdmFyQW5pbWFjaW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRoaXMubm9kZS5wb3NpdGlvbi54LCB0aGlzLm5vZGUucG9zaXRpb24ueSArPSAyMDAqZHQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5Fc3RveUVuU3VlbG8gPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlICBpZiAodGhpcy5Nb3ZlckFiYWpvID09IDEgICYmIHRoaXMuUHVlZG9CYWphcil7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuQWN0aXZhckFuaW1hY2lvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIEFuaW1hY2lvbi5wbGF5QWRkaXRpdmUoJ0RLIEVzY2FsZXJhJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5BY3RpdmFyQW5pbWFjaW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRoaXMubm9kZS5wb3NpdGlvbi54LCB0aGlzLm5vZGUucG9zaXRpb24ueSAtPSAyMDAqZHQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5Fc3RveUVuU3VlbG8gPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuU3VwZXJGdWVyemEpe1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuVGltZXJTdXBlckZ1ZXJ6YSA+IDUgKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuU3VwZXJGdWVyemEgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuVGltZXJTdXBlckZ1ZXJ6YSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuVGltZXJTdXBlckZ1ZXJ6YSArPSBkdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19