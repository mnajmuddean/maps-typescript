/// <reference types="@types/google.maps" />

import { Admin } from "./Admin";
import { Stadium } from "./Stadium";
import { CustomMap } from "./CustomMap";

const admin = new Admin();
const stadium = new Stadium();
const customMap = new CustomMap('map');

customMap.addMarker(admin);
customMap.addMarker(stadium)