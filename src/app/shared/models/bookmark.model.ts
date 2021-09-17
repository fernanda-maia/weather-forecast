import { Coord } from "./weather.model";


export interface Bookmark {
    id?: number;
    coord?: Coord;
    name?: string;
    country?: string;
}