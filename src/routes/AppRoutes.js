import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../Components/UI/Header';
import Login from '../pages/Login'
import Home from '../pages/Home'
import ProjectList from '../pages/ProjectList'
import Category from '../pages/Category'
import ContactUs from '../pages/ContactUs'
import QueryList from '../pages/QueryList'
import NewProject from '../pages/NewProject'
const AppRoutes = () => {

    return (
        <div>
            <BrowserRouter>
                <Header></Header>
                <Routes>
                    <Route path='' element={<Login></Login>}></Route>
                    <Route path='/Home' element={<Home></Home>}></Route>
                    <Route path='/Project' element={<ProjectList></ProjectList>}></Route>
                    <Route path='/Category' element={<Category></Category>}></Route>
                    <Route path='/ContactUs' element={<ContactUs></ContactUs>}></Route>
                    <Route path='/Query' element={<QueryList></QueryList>}></Route>
                    <Route path='/NewProject' element={<NewProject></NewProject>}></Route>
                </Routes>

            </BrowserRouter>


        </div>
    );
};

export default AppRoutes;