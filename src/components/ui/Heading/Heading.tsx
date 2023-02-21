import {FC} from "react";
import cn from "classnames";

interface HeadingProps {
    title: string,
    classes?: string,
}

export const Heading: FC<HeadingProps> = ({title, classes}) => {
    return (
        <h1 className={cn(`text-gray-600 font-semibold text-3xl`, classes)}>
            {title}
        </h1>
    );
};