import React, { Component } from 'react';
import XucXac from './xucXac';
import DanhSachCuoc from './danhSachCuoc';

class MainTaiXiu extends Component {
    render() { 
        return (<div>
            <XucXac/>
            <DanhSachCuoc/>
        </div>);
    }
}
 
export default MainTaiXiu;