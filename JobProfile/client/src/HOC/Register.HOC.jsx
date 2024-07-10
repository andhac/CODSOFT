import React from 'react';
import {Route, Routes} from "react-router-dom";
import RegisterPageLayout from "../layout/RegisterPage.layout";


const RegisterHoc = ({component:Component, path ,...rest}) => {
    return (
        <>
            <Routes>
                <Route {...rest}
                path={path}
                       element={
                    <RegisterPageLayout>
                        <Component/>
                    </RegisterPageLayout>
                       }
                >

                </Route>
            </Routes>
        </>
    );
};

export default RegisterHoc;