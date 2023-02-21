import { FC } from 'react'

import { Meta } from '@utils/meta/Meta'
import {Heading} from "@ui/Heading/Heading";

export const Home: FC = () => {
    return (
        <Meta title="Watch movies online" description="Watch the most populat movies in yout browser">
            <Heading title='Home page' classes='mb-3 text-2xl'/>
        </Meta>
    )
}
