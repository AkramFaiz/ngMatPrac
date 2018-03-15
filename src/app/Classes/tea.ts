import { TasteRating } from "./tasteRating";
import { PlaceLocation } from "./placeLocation";

export class tea{
    _id: string;
    type: string;
    rating: number;
    notes: string;
    tastingRate: TasteRating;

    constructor(public name:string ="",public place: string="",
        public location: PlaceLocation = null){
            this.location=new PlaceLocation;
            this.tastingRate = new TasteRating;
    }
}