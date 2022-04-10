import React, { Component } from 'react';

class DemoChild extends Component {
    // getDatas = () => {
    //     return (
    //         this.props.fatherProps.mangSp.map((item, index) => {
    //             // key={index} thêm vào để sửa lỗi hiển thị trong console.log, nếu ko dùng cũng ko ảnh hưởng gì, mục đích clear console.log cho đẹp thôi
    //             return <div key={index}> 
    //                 <h1>{item.tenSP}</h1>
    //             </div>
    //         })
    //     )
    // }
    state = {
        img : this.props.fatherProps.mangSp[0].hinhAnh
    }
    changImg = (imgs) => {
        return(
            this.setState({
                img : imgs
            })
        )
    }
    render() { 
        const a = this.props.fatherProps.mangSp //Cách 1
        let {fatherProps} = this.props // Cách 2: cách viết props khác ngắn hơn
        return (
            <div className='row'>
                <div className='col-5 p-0'>
                    <div className='row'>
                        {a.map((item, index)=>{ //Cách 2: {fatherProps.mangSp.map((item, index)=>{ 
                            return <div key={index} className='col-6 p-0 d-flex align-items-center justify-content-center mb-5'>
                                {/*Cách 2: <button onClick={()=>this.changImg(fatherProps.hinhAnh)}> */}
                                <button onClick={()=>this.changImg(item.hinhAnh)}>
                                    {/*Cách 2: <img src={fatherProps.hinhAnh} height={300}/> */}
                                    <img src={item.hinhAnh} height={300}/>
                                </button>
                            </div>
                        })}
                    </div>
                </div>
                <div className='col-7 text-center'>
                    <div className='card h-100 d-flex align-items-center justify-content-center'>
                        <img src={this.state.img} width={400}/>
                        {this.props.dress}
                    </div>
                </div>
            </div>
        );
    }
}
 
export default DemoChild;