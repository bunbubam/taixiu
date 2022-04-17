const stateGame = {
    tongTien: 100,
    danhSachCuoc: [
        { ma: 1, hinhAnh: "./asset/tai.png", diemCuoc: 0 },
        { ma: 2, hinhAnh: "./asset/xiu.png", diemCuoc: 0 }
    ],
    xucXac: [
        { ma: 1, hinhAnh: "./asset/xx1.png" },
        { ma: 2, hinhAnh: "./asset/xx2.png" },
        { ma: 3, hinhAnh: "./asset/xx3.png" },
        { ma: 4, hinhAnh: "./asset/xx4.png" },
        { ma: 5, hinhAnh: "./asset/xx5.png" },
        { ma: 6, hinhAnh: "./asset/xx6.png" }
    ]
}

const TaiXiuReducer = (state = stateGame, action) => {
    switch (action.type) {
        case "DAT_CUOC": {
            let danhSachCuocUpdate = [...state.danhSachCuoc]
            const index = danhSachCuocUpdate.findIndex(taiXiu => taiXiu.ma === action.taiXiu.ma)
            if (index !== -1) {
                if (state.tongTien > 0) {
                    danhSachCuocUpdate[index].diemCuoc += 10;
                    state.tongTien -= 10
                } else {
                    alert("xin vui lòng nạp thêm")
                }
                return { ...state, danhSachCuoc: danhSachCuocUpdate }
            }
        }
        case "PLAY_GAME": {
            let mangXucXacNgauNhien = [];
            for(let i = 0; i < 6; i++) {
                let soNgauNhien = Math.floor(Math.random() * 2);
                let xucXacNgauNhien = {
                    ma: state.xucXac[soNgauNhien].ma,
                    hinhAnh: state.xucXac[soNgauNhien].hinhAnh
                };
                mangXucXacNgauNhien.push(xucXacNgauNhien);
            }
            //Xử lý tăng điểm
        }
        default: return { ...state }
    }
}

export default TaiXiuReducer;