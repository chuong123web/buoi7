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
