import React, { Component } from 'react';
import DemoChild from './demoChild';
import Img from '../asset/img/momo.jpg';
import Img1 from '../asset/img/momo1.jpg';
import Img2 from '../asset/img/momo2.jpg';
import Img3 from '../asset/img/momo3.jpg';
//stateless
class Demoprops extends Component {
    listArray = {
        mangSp: [
            {maSP: 1,tenSP: "Mỡ Mỡ",gia: 100, hinhAnh: Img},
            {maSP: 2,tenSP: "Mỡ Mỡ 1",gia: 120, hinhAnh: Img1},
            {maSP: 3,tenSP: "Mỡ Mỡ 2",gia: 130, hinhAnh: Img2},
            {maSP: 4,tenSP: "Mỡ Mỡ 3",gia: 140, hinhAnh: Img3},
        ]
    }
    // getDatas = () => {
    //     return (
    //         this.listArray.mangSp.map((item, index) => {
    //             // key={index} thêm vào để sửa lỗi hiển thị trong console.log, nếu ko dùng cũng ko ảnh hưởng gì, mục đích clear console.log cho đẹp thôi
    //             return <div key={index}> 
    //                 <h1>{item.tenSP}</h1>
    //             </div>
    //         })
    //     )
    // }
    demo = () => {
        return(
            <div>hahahaha</div>
        )
    }
    render() { 
        return (
            <div>
                {/* {this.getDatas()} */}
                {/* Ko có onClick thì ko viết bằng Arrow Function chỉ cần gọi bth this.getDatas() */}
                <DemoChild fatherProps = {this.listArray} dress={this.demo()}/>
            </div>
        );
    }
}
 
export default Demoprops;