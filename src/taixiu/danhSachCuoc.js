import React, { Component } from 'react';
import { connect } from 'react-redux';

class DanhSachCuoc extends Component {
    render() {
        return (
            <div className='row'>{this.props.danhSachCuoc.map((item, index) => {
                return <div key={index} className='col-12 col-md-6 text-center'>
                    <div className='card'>
                        <img src={item.hinhAnh} className='img-fluid' /><br/>
                        <span style={{ fontSize: '50px', color: 'red' }}>{item.diemCuoc}</span>
                    </div>
                </div>
            })}</div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        danhSachCuoc: state.TaiXiuReducer.danhSachCuoc
    }
}

export default connect(mapStateToProps, null)(DanhSachCuoc);