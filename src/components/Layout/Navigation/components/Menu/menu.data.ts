import { IMenu } from '@components/Layout/Navigation/components/Menu/menu.types'

export const MAIN_MENU: IMenu = {
    title: 'Menu',
    items: [
        { title: 'Home', icon: 'MdHome', link: '/' },
        { title: 'Discovery', icon: 'MdExplore', link: '/Genres' },
        { title: 'Fresh movies', icon: 'MdRefresh', link: '/fresh' },
        { title: 'Trending now', icon: 'MdLocalFireDepartment', link: '/trending' },
    ],
}

export const GENERALS: IMenu = {
    title: 'General',
    items: [
        { title: 'Profile', icon: 'MdSettings', link: '/profile' },
    ],
}



