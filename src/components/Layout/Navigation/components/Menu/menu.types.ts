import { MaterialIconType } from '../../../../../types/IIcon'

export interface IMenuItem {
    icon: MaterialIconType;
    title: string;
    link: string;
}

export interface IMenu {
    title: string;
    items: IMenuItem[];
}
