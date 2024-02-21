import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../Components/UI/Header';

const AppRoutes = () => {

    return (
        <div>
            <BrowserRouter>
            <Header></Header>
            <Routes>
                {/* <Route path='/Home' element={<Home></Home>}></Route> */}
            </Routes>

            </BrowserRouter>
           

        </div>
    );
};

export default AppRoutes;