
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