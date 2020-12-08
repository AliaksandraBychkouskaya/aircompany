const { PassengerPlane } = require('./planes/passengerPlane');
const { MilitaryPlane } = require('./planes/militaryPlane');
const { ExperimentalPlane } = require('./planes/experimentalPlane');
const { MILITARY_TYPE } = require('./models/militaryType');

class Airport {
  constructor(planes) {
    this.planes = planes;
  }

  getPassengerPlanes() {
    const passengerPlanes = [];
    for (const plane of this.planes) {
      if (plane instanceof PassengerPlane) {
        passengerPlanes.push(plane);
      }
    }
    return passengerPlanes;
  }

  getMilitaryPlanes() {
    const militaryPlanes = [];
    this.planes.forEach((plane) => {
      if (plane instanceof MilitaryPlane) {
        militaryPlanes.push(plane);
      }
    });
    return militaryPlanes;
  }

  getExperimentalPlanes() {
    const experimentalPlanes = [];
    this.planes.forEach((plane) => {
      if (plane instanceof ExperimentalPlane) {
        experimentalPlanes.push(plane);
      }
    });
    return experimentalPlanes;
  }

  getPassengerPlaneWithMaxPassengersCapacity() {
    const passengerPlanes = this.getPassengerPlanes();
    let planeWithMaxCapacity = passengerPlanes[0];
    for (let i = 0; i < passengerPlanes.length; i += 1) {
      if (passengerPlanes[i].PassengersCapacity > planeWithMaxCapacity
        .PassengersCapacity) {
        planeWithMaxCapacity = passengerPlanes[i];
      }
    }
    return planeWithMaxCapacity;
  }

  getTransportMilitaryPlanes() {
    const transportMilitaryPlanes = [];
    const militaryPlanes = this.getMilitaryPlanes();
    for (let i = 0; i < militaryPlanes.length; i += 1) {
      if (militaryPlanes[i].militaryType === MILITARY_TYPE.TRANSPORT) {
        transportMilitaryPlanes.push(militaryPlanes[i]);
      }
    }
    return transportMilitaryPlanes;
  }

  getBomberMilitaryPlanes() {
    const bomberMilitaryPlanes = [];
    const militaryPlanes = this.getMilitaryPlanes();
    for (let i = 0; i < militaryPlanes.length; i += 1) {
      if (militaryPlanes[i].militaryType === MILITARY_TYPE.BOMBER) {
        bomberMilitaryPlanes.push(militaryPlanes[i]);
      }
    }
    return bomberMilitaryPlanes;
  }

  sortByMaxDistance() {
    this.planes.sort((a, b) => {
      if (a.maxFlightDistance > b.maxFlightDistance) {
        return 1;
      }
      return -1;
    });
    return this;
  }

  sortByMaxSpeed() {
    this.planes.sort((a, b) => {
      if (a.maxSpeed > b.maxSpeed) {
        return 1;
      }
      return -1;
    });
    return this;
  }

  sortByMaxLoadCapacity() {
    this.planes.sort((a, b) => {
      if (a.maxLoadCapacity > b.maxLoadCapacity) {
        return 1;
      }
      return -1;
    });
    return this;
  }

  getPlanes() {
    return this.planes;
  }

  static print(planes) {
    return JSON.stringify(planes);
  }
}

module.exports = { Airport };
