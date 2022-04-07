const giaQuaDem = 200;
const giaPhatSinh = 30;

// const gioVao = new Date('2022-04-06 10:00:00');
// const gioRa = new Date('2022-04-07 10:00:00');

function tinhTienPhongNghi (gioVao, gioRa) {
    let thoiGianNghi = 0;
    let total = 0;
    if (gioVao.getHours() >= 12) {
        thoiGianNghi = Math.floor((gioRa - gioVao)/3600000) + 1;
    } else {
        thoiGianNghi = Math.floor((gioRa - gioVao)/3600000);
    }

    if (thoiGianNghi % 24 <= (giaQuaDem - giaQuaDem % giaPhatSinh)/giaPhatSinh) {
        total = giaQuaDem*(thoiGianNghi - (thoiGianNghi % 24))/24 + giaPhatSinh*(thoiGianNghi % 24)
    } else {
        total = giaQuaDem + giaQuaDem*(thoiGianNghi - (thoiGianNghi % 24))/24
    }

    return total;
}
console.log(tinhTienPhongNghi(new Date('2022-04-06 13:00:00'), new Date('2022-04-07 11:00:00')))
console.log(tinhTienPhongNghi(new Date('2022-04-06 13:00:00'), new Date('2022-04-07 13:00:00')))
console.log(tinhTienPhongNghi(new Date('2022-04-06 13:00:00'), new Date('2022-04-07 15:20:00')))
console.log(tinhTienPhongNghi(new Date('2022-04-06 13:00:00'), new Date('2022-04-07 20:00:00')))
console.log(tinhTienPhongNghi(new Date('2022-04-06 10:00:00'), new Date('2022-04-07 11:00:00')))