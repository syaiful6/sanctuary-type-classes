'use strict';

var FL = require('fantasy-land');

var Z = require('..');


//  Tuple :: (a, b) -> Tuple a b
var Tuple = function Tuple(_1, _2) {
  if (!(this instanceof Tuple)) return new Tuple(_1, _2);
  this._1 = _1;
  this._2 = _2;
};

Tuple.prototype['@@type'] = 'sanctuary-type-classes/Tuple';

Tuple.prototype[FL.equals] = function(other) {
  return Z.equals(other._1, this._1) && Z.equals(other._2, this._2);
};

Tuple.prototype[FL.map] = function(f) {
  return Tuple(this._1, f(this._2));
};

Tuple.prototype[FL.bimap] = function(f, g) {
  return Tuple(f(this._1), g(this._2));
};

Tuple.prototype.inspect =
Tuple.prototype.toString = function() {
  return 'Tuple(' + Z.toString(this._1) + ', ' + Z.toString(this._2) + ')';
};

module.exports = Tuple;
