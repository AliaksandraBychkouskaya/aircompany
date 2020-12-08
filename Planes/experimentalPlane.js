const { Plane } = require('./plane');

class ExperimentalPlane extends Plane {
  constructor(model, maxSpeed, maxFlightDistance, maxLoadCapacity, type, classificationLevel) {
    super(model, maxSpeed, maxFlightDistance, maxLoadCapacity);
    this._type = type;
    this._classificationLevel = classificationLevel;
  }

  get type() {
    return this.type;
  }

  set type(typeValue) {
    this._type = typeValue;
  }

  get classificationLevel() {
    return this._classificationLevel;
  }

  set classificationLevel(classificationLevelValue) {
    this._classificationLevel = classificationLevelValue;
  }
}

module.exports = { ExperimentalPlane };
