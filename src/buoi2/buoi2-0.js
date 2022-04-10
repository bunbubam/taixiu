import React, { Component } from 'react';
import imgBlackCar from '../asset/img/imgBlackCar.jpg';
import imgRedCar from '../asset/img/imgRedCar.jpg';
import imgSilverCar from '../asset/img/imgSilverCar.jpg';

class Buoi2_0 extends Component {
    state = {
        img : imgBlackCar
    }
    colorCar = (imgs) => {
        return(
            this.setState({
                img : imgs
            })
        )
    }
    render() { 
        return (
            <div className="d-flex justify-content-center">
                <div className="card w-50">
                    <img src={this.state.img}/>
                </div>
                <div className="card-body d-flex justify-content-center">
                    <button className="btn btn-black border rounded-circle" onClick={()=>this.colorCar(imgBlackCar)}>Xe màu Đen</button>
                    <button className="btn btn-red border rounded-circle mx-3" onClick={()=>this.colorCar(imgRedCar)}>Xe màu Đỏ</button>
                    <button className="btn btn-silver border rounded-circle" onClick={()=>this.colorCar(imgSilverCar)}>Xe màu Bạc</button>
                </div>
            </div>
        );
    }
}
export default Buoi2_0;