import React from 'react'
import Aside from '../Aside';
import Content from '../Content';
import MainHeader from '../MainHeader';

import { Grid } from './styles';



const Layout: React.FC =({children}) =>{
    return (
        <Grid>
            <MainHeader></MainHeader>
            <Aside></Aside>
            <Content>
                {children}
            </Content>
        </Grid>
    );
}

export default Layout;