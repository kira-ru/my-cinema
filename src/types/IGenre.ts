import {MaterialIconType} from "./IIcon";

export interface IGenre {
    _id: string,
    name: string,
    slug: string,
    description: string,
    icon: MaterialIconType
}