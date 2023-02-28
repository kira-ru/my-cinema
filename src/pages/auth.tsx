import {FC} from "react";
import {NextPage} from "next";
import {Auth} from "@components/screens/Auth/Auth";

const AuthPage: FC<NextPage> = () => {

    return (
        <>
            <Auth/>
        </>
    );
};

export default AuthPage