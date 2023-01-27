
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