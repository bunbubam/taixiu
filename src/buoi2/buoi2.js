import React, { Component } from 'react';
import img1 from '../asset/img/applephone.jpg';
import img2 from '../asset/img/vsphone.jpg';

class Buoi2 extends Component {
    // State: là sự thay đổi trong 1 trang web, cái nào cần thay đổi thì quăng vào state
    // Databiding: {} là gọi hàm trong chuỗi HTML
    state = { //state trường hợp này là 1 object
        img : img1
    }
    // Function scope viết được ngoài render() nhưng sẽ không khai báo const như function trong render(). Và khi dùng function đó ở đâu thì phải dùng this trỏ vào tên function đó
    enters = (imgs) => {
        return(
            this.setState({
                img:imgs
            })
        )
    }

    //
    render() {
        // const a = () => {
        //     alert(123)
        // }
        // const enters = (imgs) => {
        //     // Phương thức setState({Giá trị để đè lên state mặc định}): dùng để đè giá trị lên 1 state khác
        //     return(
        //         this.setState({
        //             // Key setState phải trùng với Key của state. VD: img của state giống img của setState
        //             img : imgs
        //         })
        //     )
        // }
        return (
            <div>
                {/* onClick trong React viết hoa chữ C */}
                {/* truyền tên a ko có () thì phải tương tác vs DOM mới chạy dc Function, còn truyền a có () thì function sẽ auto chạy mà không cần tương tác với DOM */}
                {/* <button onClick={a}>Nhấp vào</button>  */}
                
                <button onClick={()=>this.enters(img1)}>apple</button>
                {/* Cách viết gọi hàm Arrow Function khi có tham số thì phải viết ()=>this.TeenFunction(thamSố) */}
                <img src={this.state.img} />
                <button onClick={()=>this.enters(img2)}>vivo</button>
            </div>
        );
    }
}
export default Buoi2;