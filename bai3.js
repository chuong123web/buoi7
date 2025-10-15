let dsSinhVien = [];

const nhapSinhVien = (ten, tuoi, diaChi, sdt) => ({ ten, tuoi, diaChi, sdt });
const xayDungChuoi = sv =>
    `Tên: ${sv.ten}, Tuổi: ${sv.tuoi}, Địa chỉ: ${sv.diaChi}, SĐT: ${sv.sdt}`;

const inDanhSachSV = ds =>
    ds.forEach(sv => console.log(xayDungChuoi(sv)));

const xapXepDanhSachSV = ds =>
    [...ds].sort((a, b) => a.ten.localeCompare(b.ten));

const timSinhVienTheoSDT = (ds, sdt) =>
    ds.find(sv => sv.sdt === sdt) || "Không tìm thấy sinh viên";

const locSinhVienTheoTuoi = (ds, tuoi) =>
    ds.filter(sv => sv.tuoi === tuoi);
dsSinhVien.push(nhapSinhVien("Nguyễn Văn A", 20, "Hà Nội", "0123456789"));
dsSinhVien.push(nhapSinhVien("Trần Thị B", 21, "Đà Nẵng", "0987654321"));
dsSinhVien.push(nhapSinhVien("Lê Văn C", 20, "Hải Phòng", "0112233445"));

console.log("Danh sách sinh viên:");
inDanhSachSV(dsSinhVien);

console.log("Danh sách sau khi sắp xếp:");
inDanhSachSV(xapXepDanhSachSV(dsSinhVien));

console.log("Tìm sinh viên theo SĐT 0987654321:", timSinhVienTheoSDT(dsSinhVien, "0987654321"));
console.log("Lọc sinh viên theo tuổi = 20:", locSinhVienTheoTuoi(dsSinhVien, 20));
