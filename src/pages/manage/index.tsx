import { NextPageAuth } from '@providers/AuthProvider/types'

import { Admin } from '@screens/Admin/Admin'

const AdminPage: NextPageAuth = () => {
    return <Admin />
}

AdminPage.isOnlyAdmin = true
export default AdminPage
