import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Certificate from '../Certificate/Certificate';
import CheckSertificate from '../CheckSrtificate/CheckSertificate';

import Info from '../Info/Info';
import { useLocation } from 'react-router-dom';

import BurgerMenuDesktop from '../../../mainComponent/mainPage/burgerMenuDesktop/BurgerMenuDesktop';
import BurgerMenu from '../../../mainComponent/mainPage/burgerMenu/BurgerMenu';
import MvpConnectDesktop from '../../../mainComponent/mvpConnect/mvpConnectDesktop/MvpConnectDesktop';
import MvpConnectMobile from './mvpConnectMobile/MvpConnectMobile';

const Layout = (props) => {
    const { state } = useLocation();
    const { innerWidth } = window;
    console.log(props);
    return (
        <div>
            {state ? (
                <div>
                    {props.state.displaySize.isDesktop ? (
                        <BurgerMenuDesktop />
                    ) : (
                        <BurgerMenu />
                    )}
                    <Certificate img={state.sertificateImage} />
                    <Info items={state.items} />
                    {props.state.displaySize.isDesktop ? (
                        <MvpConnectDesktop />
                    ) : (
                        <MvpConnectMobile />
                    )}
                    {/* <div style={{ width: '100%', height: '40px' }}></div> */}
                </div>
            ) : (
                <div></div>
            )}
        </div>
    );
};

export default Layout;
