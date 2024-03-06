import { Rating } from "./rating";

export interface Offre {
    reference: string;
    title: string;
    location: string;
    description: string;
    deadline: Date;
    contratType: string;
    skills: string;
    experienceLevel: string;
    favorite:boolean;
    ratings?: Rating[]; 
  }
  