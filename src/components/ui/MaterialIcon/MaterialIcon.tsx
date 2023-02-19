import {FC} from "react";
import {MaterialIconType} from "../../../types/IIcon";
import * as MaterialIcons from 'react-icons/md'

export const MaterialIcon: FC<{name: MaterialIconType}> = ({name}) => {
    const IconMaterial = MaterialIcons[name]

    return <IconMaterial/> || <MaterialIcons.MdDragIndicator/>
};