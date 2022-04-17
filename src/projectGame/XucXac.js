import React, { Component } from 'react';
import { connect } from 'react-redux';
import { playGameAction } from '../redux/action/action';

class XucXac extends Component {
    renderXucXac = () => {
        return this.props.xucXac.map((item, index) => {
            return <img style={{ width: '50px' }} key={index} src={item.hinhAnh} alt={item.ma} />
        });
    }
    render() {
        // console.log(this.props.xucXac);
        return (
            <div>
                <button className="btn btn-success" onClick={() => { this.props.playGame() }}>Play game</button>
                <div>
                    {this.renderXucXac()}
                </div>
                <div>
                    {this.props.tongTien}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        xucXac: state.BauCuaTomCaReducer.xucXac,
        tongTien: state.BauCuaTomCaReducer.tongTien
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        playGame: () => {
            dispatch(playGameAction())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(XucXac)