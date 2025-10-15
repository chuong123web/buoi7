console.log("Thể tích hình hộp (3,4,5):", tinhTheTichHinhHop(3,4,5));
function tinhTheTichHinhHop(chieuDai, chieuRong, chieuCao) {
    if (chieuDai <= 0 || chieuRong <= 0 || chieuCao <= 0) {
        return "Thông số không hợp lệ, vui lòng nhập lại!";
    }
    return chieuDai * chieuRong * chieuCao;
}
const tinhTheTichHinhHop2 = (chieuDai, chieuRong, chieuCao) =>
    (chieuDai > 0 && chieuRong > 0 && chieuCao > 0) 
        ? chieuDai * chieuRong * chieuCao 
        : "Thông số không hợp lệ, vui lòng nhập lại!";

console.log("Arrow function:", tinhTheTichHinhHop2(2,3,4));
