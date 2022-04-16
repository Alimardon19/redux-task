import React from "react";
import { Routes, Route, NavLink, useLocation } from 'react-router-dom';
import Xodim from "./page/xodim/xodim";
import Lavozim from "./page/lavozim/lavozim";
import Daraja from "./page/daraja/daraja";

function App() {
    const { pathname } = useLocation();


    return(
        <div className={'block'}>
            <div className={'main'}>
                <NavLink to={'/xodim'}>
                    <h5 className={`${pathname === '/xodim' ? "activ" : ''}`}> Xodimlar </h5>
                </NavLink>
                <NavLink to={'/lavozim'}>
                    <h5 className={`${pathname === '/lavozim' ? "activ" : ''}`}> Lavozim </h5>
                </NavLink>
                <NavLink to={'/daraja'}>
                    <h5 className={`${pathname === '/daraja' ? "activ" : ''}`}> Ilmiy Daraja </h5>
                </NavLink>
            </div>
            <div className={'content'}>
                <Routes>
                    <Route path={'/xodim'} element={<Xodim/>} />
                    <Route path={'/lavozim'} element={<Lavozim/>} />
                    <Route path={'/daraja'} element={<Daraja/>} />
                </Routes>
            </div>
        </div>
    )
}

export default App;