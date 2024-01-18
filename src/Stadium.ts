import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

export class Stadium implements Mappable{
  stdName: string;
  stdCatchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  stdImage: string;
  color: string;

  constructor() {
    this.stdName = faker.company.name();
    this.stdCatchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude()
    };
    this.stdImage = faker.internet.avatar()
  }

  markerContent(): string {
    return `
    <div style="text-align: center;">
      <img src= ${this.stdImage}>
      Staidum Name is : ${this.stdName}
    </div>`;
  }
}