import React, { Component } from 'react';
import { connect } from 'react-redux';
import { datCuocAction } from '../redux/action/action';

class DanhSachCuoc extends Component {
    render() {
        return (
            <div className='row'>{this.props.danhSachCuoc.map((quanCuoc, index) => {
                return <div className='col-3 mt-2' key={index}>
                    <button className='text-center h-100' onClick={() => { this.props.datCuoc(quanCuoc) }}>
                        <img src={quanCuoc.hinhAnh} className='img-fluid' /><br />
                        <span style={{ fontSize: '50px', color: 'red' }}>{quanCuoc.diemCuoc}</span>
                    </button>
                </div>
            })}</div>
        );
    }
}



//Lấy dữ liệu để render trên cái Component DanhSachCuoc ở trên (lấy ở bên file reducer.js) - dùng để show dữ liệu
const mapStateToProps = (state) => {
    console.log(state);
    return {
        danhSachCuoc: state.BauCuaTomCaReducer.danhSachCuoc //gán danhSachCuoc cách trỏ BauCuaTomCaReducer.danhSachCuoc
    }
}

//Nhận Action xử lý
const mapDispatchToProps = (dispatch) => {
    return {
        datCuoc: (quanCuoc) => {
            dispatch(datCuocAction(quanCuoc))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DanhSachCuoc)

// map dispatch to toprops là nới nhận action
// map state to props là render ra giao diện