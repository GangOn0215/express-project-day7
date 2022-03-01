class Car {
  constructor (modelName, modelYear, type, price) {
    this.modelName = modelName;
    this.modelYear = modelYear;
    this.type = type;
    this.price = price;
  }

  setModelName(nModelName) {
    this.modelName = nModelName;
  }
  setModelYear(nModelYear) {
    this.modelYear = nModelYear;
  }
  setType(nType) {
    this.type = nType;
  }
  setPrice(nPrice) {
    this.price = nPrice;
  }

  getModelName() {
    return this.modelName;
  }
  getModelYear() {
    return this.modelYear;
  }
  getType() {
    return this.type;
  }
  getPrice() {
    return this.price;
  }

}

class ElectricCar extends Car {
  constructor(modelName, modelYear, price, chargeTime) {
    super(modelName, modelYear, "e", price);
    
    this.chargeTime = chargeTime;
  }

  setChargeTime(nTime) {
    this.chargeTime = nTime;
  }

  getChargeTime() {
    return this.chargeTime;
  }
}

const ionic = new Car("ionic", 2021, "e", 4000);      // create car - ionic
const genesis = new Car("genesis", 2021, "g", 7000)   // create car - genesis

const ionicModelName = ionic.getModelName();
ionic.setPrice(4300);                           // 차량 가격 변경