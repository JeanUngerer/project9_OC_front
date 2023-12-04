import {Genras} from "./genras";



export interface Adresse{
  id: number;

  number: number;

 street: string;

}
export interface Patient {
  id: number;

  firstName: string;

  lastName: string;

  birthdate: Date;

  genra: Genras;

  adresse: Adresse;

  phone: string;
}
