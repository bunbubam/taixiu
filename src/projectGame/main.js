import React, { Component } from 'react';
import DanhSachCuoc from './DanhSachCuoc';
import XucXac from './XucXac';

class Main extends Component {
    render() { 
        return (<div>
            <XucXac/>
            <DanhSachCuoc/>
        </div>);
    }
}
 
export default Main;