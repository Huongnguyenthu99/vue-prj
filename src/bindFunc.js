function Car(type, fuelType) {
    this.type = type;
    this.fuelType = fuelType;

    console.log("this", this, this.type, this.fuelType);
}

Car("123", "456");