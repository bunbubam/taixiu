const stateGame = {
    tongTien: 100,
    danhSachCuoc: [
        { ma: "chim", hinhAnh: "./asset/chim.jpg", diemCuoc: 0 },
        { ma: "cho", hinhAnh: "./asset/cho.jpg", diemCuoc: 0 },
        { ma: "chuot", hinhAnh: "./asset/chuot.png", diemCuoc: 0 },
        { ma: "meo", hinhAnh: "./asset/meo.jpg", diemCuoc: 0 },
    ],
    xucXac: [
        { ma: "chim", hinhAnh: "./asset/chim.jpg" },
        { ma: "chim", hinhAnh: "./asset/chim.jpg" },
        { ma: "chim", hinhAnh: "./asset/chim.jpg" },
    ]
}

const BauCuaTomCaReducer = (state = stateGame, action) => {
    switch (action.type) {
        case "DAT_CUOC": {
            let danhSachCuocUpdate = [...state.danhSachCuoc]
            const index = danhSachCuocUpdate.findIndex(quanCuoc => quanCuoc.ma === action.quanCuoc.ma)
            if (index !== -1) {
                if (state.tongTien > 0) {
                    danhSachCuocUpdate[index].diemCuoc += 10;
                    state.tongTien -= 10
                } else {
                    alert("xin vui lòng nạp thêm")
                }
            }
            return { ...state, danhSachCuoc: danhSachCuocUpdate }
        }
        case "PLAY_GAME": {
            //Tạo ra mảng xúc xắc mới từ mảng danhSachCuoc
            let mangXucXacNgauNhien = [];
            for (let i = 0; i < 3; i++) {
                //Random 3 lần và tạo xúc xắc 3 lần
                let soNgauNhien = Math.floor(Math.random() * 4);
                //Tạo xúc xắc ngẫu nhiên
                let xucXacNgauNhien = {
                    ma: state.danhSachCuoc[soNgauNhien].ma,
                    hinhAnh: state.danhSachCuoc[soNgauNhien].hinhAnh
                };
                mangXucXacNgauNhien.push(xucXacNgauNhien);
            }

            //Xử lý tăng điểm
            mangXucXacNgauNhien.forEach((xucXac, index) => {
                //Tìm từng quân cược trong mảng xúc xắc
                let indexQuanCuoc = state.danhSachCuoc.findIndex(quanCuoc => quanCuoc.ma === xucXac.ma);
                //Cập nhật tổng tiền 
                if (indexQuanCuoc !== -1) {
                    state.tongTien += state.danhSachCuoc[indexQuanCuoc].diemCuoc;
                }
            })
            //Xử lý hoàn tiền
            state.danhSachCuoc.forEach((quanCuoc, index) => {
                let indexXucXac = mangXucXacNgauNhien.findIndex(xucXacNN => xucXacNN.ma === quanCuoc.ma);
                if (indexXucXac !== -1) {
                    state.tongTien += quanCuoc.diemCuoc;
                }
            });
            //Reset mảng cược 
            let resetMangCuoc = state.danhSachCuoc.map((quanCuoc, index) => {
                return { ...quanCuoc, diemCuoc: 0 };
            })

            return { ...state, xucXac: mangXucXacNgauNhien, danhSachCuoc: resetMangCuoc }
        }
        default: return { ...state } //Giá trị mặc định khi ko có action nào là trả về 1 cái state chính bằng cái stateGame
    }
}
export default BauCuaTomCaReducer;