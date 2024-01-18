import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

export class Admin implements Mappable {
  name: string;
  phone: string;
  age: number;
  address: string;
  location: {
    lat: number;
    lng: number;
  };
  image: string;
  color: string;


  constructor() {
    this.name = faker.person.firstName();
    this.phone = faker.phone.number();
    this.age = faker.number.int();
    this.address = faker.location.streetAddress();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude()
    };
    this.image = faker.internet.avatar()
  }

  markerContent(): string {
    return `
    <div style="text-align: center;">
      <img src= ${this.image}>
      Admin Name is : ${this.name}
    </div>`;
  }
}