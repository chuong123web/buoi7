function tinhLaiKep(vonGoc, laiSuat = 0.05, soNam = 1) {
    return vonGoc * Math.pow(1 + laiSuat, soNam);
}
console.log("Lãi kép (declaration):", tinhLaiKep(1000000, 0.07, 5));
const tinhLaiKep2 = (vonGoc, laiSuat = 0.05, soNam = 1) =>
    vonGoc * Math.pow(1 + laiSuat, soNam);

console.log("Lãi kép (arrow):", tinhLaiKep2(500000, 0.1, 3));
