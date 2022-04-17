import React, { Component } from 'react';
import { connect } from 'react-redux';

class XucXac extends Component {
    render() {
        return (
            <div className='text-center mt-5'>{this.props.xucXac.map((item, index) => {
                return <div>
                    <img style={{ width: '50px' }} key={index} src={item.hinhAnh} alt={item.ma} />
                </div>
            })}
                <div className='my-5 border'><h1 className='h1' style={{fontSize: '100px'}}>{this.props.tongTien}</h1></div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        xucXac: state.TaiXiuReducer.xucXac,
        tongTien: state.TaiXiuReducer.tongTien
    }
}

export default connect(mapStateToProps, null)(XucXac);