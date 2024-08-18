//Bai tap 1

// Input

// Tính tổng điểm 3 môn người dùng nhập vào

document.getElementById("btnketQua").onclick = function () {
  console.log("Toi da bi click");

  const diem1 = Number(document.getElementById("diemMon1").value * 1);
  const diem2 = Number(document.getElementById("diemMon2").value * 1);
  const diem3 = Number(document.getElementById("diemMon3").value * 1);
  const khuVuc = Number(document.getElementById("chonKhuVuc").value);
  const doiTuong = Number(document.getElementById("chonDoiTuong").value);
  const diemChuan = Number(document.getElementById("diemChuan").value);

  //Switch case cho từng điểm cộng theo Khu vực

  let diemCongKhuVuc = 0;
  let tenKhuVuc = "";

  switch (khuVuc) {
    case 1:
      // KV A
      diemCongKhuVuc = 2;
      tenKhuVuc = "Khu vực A";
      break;

    case 2: // KV B
      diemCongKhuVuc = 1;
      tenKhuVuc = "Khu vực B";
      break;

    case 3: // KV C
      diemCongKhuVuc = 0.5;
      tenKhuVuc = "Khu vực C";
      break;
  }

  //Switch case cho điểm cộng theo từng đối tượng.
  let diemCongDoiTuong = 0;

  switch (doiTuong) {
    case 1: // DT 1
      diemCongDoiTuong = 2.5;
      break;

    case 2: // DT 2
      diemCongDoiTuong = 1.5;
      break;

    case 3: // DT3
      diemCongDoiTuong = 1;
      break;

    default:
      diemCongDoiTuong = 0;
      break;
  }

  // Kiểm tra xem có môn nào bị 0 điểm không, nếu có hiện thông báo rớt.
  if (diem1 == 0) {
    document.getElementById("ketQua").innerHTML =
      "Bạn đã rớt vì có môn 0 điểm😤";
    return;
  } else if (diem2 == 0) {
    document.getElementById("ketQua").innerHTML =
      "Bạn đã rớt vì có môn 0 điểm😤";
    return;
  } else if (diem3 == 0) {
    document.getElementById("ketQua").innerHTML =
      "Bạn đã rớt vì có môn 0 điểm😤";
    return;
  }

  // Tính tổng điểm có thêm ưu tiên
  let tongDiem = diem1 + diem2 + diem3 + diemCongKhuVuc + diemCongDoiTuong;

  // So sánh nếu tổng điểm lớn hơn hay nhỏ hơn, bằng điểm chuẩn.

  if (tongDiem >= diemChuan) {
    document.getElementById(
      "ketQua"
    ).innerHTML = `🤗 Chúc mừng bạn đã đậu với tổng điểm là ${tongDiem}.`;
  } else {
    document.getElementById(
      "ketQua"
    ).innerHTML = `😓Rất tiếc bạn đã rớt do tổng điểm nhỏ hơn điểm chuẩn với tổng điểm là ${tongDiem}`;
  }
};

// Bài tập 2

//Lấy thông tin từ input fields
document.getElementById("btnTienDien").onclick = function () {
  const hoTen = document.getElementById("hoTen").value;
  const soKwInput = document.getElementById("soKw").value;
  const soKw = Number(soKwInput);

  // Check số kw hợp lệ hay không.
  if (soKwInput === "") {
    alert("Vui lòng nhập số kWh.");
    return;
  }

  // Kiểm tra xem số kWh có hợp lệ không
  if (isNaN(soKwInput) || soKwInput < 0) {
    alert("Số kWh không hợp lệ.");
    return;
  }

  const tienDien = tinhTienDien(soKw);

  function tinhTienDien() {
    let tongTienDien = 0;

    if (soKw <= 50) {
      tongTienDien = soKw * 500;
    } else if (soKw <= 100) {
      tongTienDien = 50 * 500 + (soKw - 50) * 650;
    } else if (soKw <= 200) {
      tongTienDien = 50 * 500 + 50 * 650 + (soKw - 100) * 850;
    } else if (soKw <= 350) {
      tongTienDien = 50 * 500 + 50 * 650 + 100 * 850 + (soKw - 200) * 1100;
    } else {
      tongTienDien =
        50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKw - 350) * 1300;
    }

    const formattedtongTienDien = new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(tongTienDien);

    document.getElementById(
      "soTienDien"
    ).innerHTML = `👉 Họ tên: ${hoTen}, tổng tiền điện cho ${soKw} kWh là: ${formattedtongTienDien} .`;
  }
};

// Bài 3 - Tính thuế thu nhập cá nhân
document.getElementById("btnTinhThue").onclick = function () {
  const hoTen = document.getElementById("fullName").value;
  const tongThuNhapNam = document.getElementById("tongThuNhapNam").value * 1;
  const soNguoiPhuThuoc = document.getElementById("soNguoiPhuThuoc").value * 1;

  // Kiểm tra nếu để trống tổng thu nhập thuế -> hiện thông báo
  if (tongThuNhapNam === 0) {
    alert(`Vui lòng nhập tổng thu nhập năm`);
    return;
  }

  // Kiểm tra nếu tổng thu nhập năm nhỏ hơn 4,5 triệu, hiện thông báo không hợp lệ.
  if (tongThuNhapNam < 4.5e6) {
    alert(`Vui lòng nhập tổng thu nhập năm hợp lệ`);
    return;
  }

  function tinhThueThuNhap(tongThuNhapNam, soNguoiPhuThuoc) {
    const giamTruNguoiPhuThuoc = soNguoiPhuThuoc * 4.4e6;
    let thuNhapTinhThue = tongThuNhapNam - giamTruNguoiPhuThuoc;
    let thueThuNhap = 0;

    switch (true) {
      case thuNhapTinhThue > 960e6:
        thueThuNhap += (thuNhapTinhThue - 960e6) * 0.35;
        thuNhapTinhThue = 960e6;
      case thuNhapTinhThue > 624e6:
        thueThuNhap += (thuNhapTinhThue - 624e6) * 0.3;
        thuNhapTinhThue = 624e6;
      case thuNhapTinhThue > 384e6:
        thueThuNhap += (thuNhapTinhThue - 384e6) * 0.25;
        thuNhapTinhThue = 384e6;
      case thuNhapTinhThue > 216e6:
        thueThuNhap += (thuNhapTinhThue - 216e6) * 0.2;
        thuNhapTinhThue = 216e6;
      case thuNhapTinhThue > 120e6:
        thueThuNhap += (thuNhapTinhThue - 120e6) * 0.15;
        thuNhapTinhThue = 120e6;
      case thuNhapTinhThue > 60e6:
        thueThuNhap += (thuNhapTinhThue - 60e6) * 0.1;
        thuNhapTinhThue = 60e6;
      default:
        thueThuNhap += thuNhapTinhThue * 0.05;
    }

    return thueThuNhap;
  }

  const thueThuNhap = tinhThueThuNhap(tongThuNhapNam, soNguoiPhuThuoc);

  const formattedThueThuNhap = new Intl.NumberFormat("vi-VN").format(
    thueThuNhap
  );

  document.getElementById(
    "ketQuaThue"
  ).innerHTML = `Họ tên: ${hoTen}, Tiền thuế thu nhập cá nhân là ${formattedThueThuNhap} VND, Số người phụ thuộc: ${soNguoiPhuThuoc}`;
};

// Bài 4 - Tính tiền Cáp

//Field số kết nối chỉ hiện khi lựa chọn = Doanh nghiệp
function hienSoKetNoi() {
  const loaiKhachHang = document.getElementById("loaiKhachHang").value;
  const SoKetNoi = document.getElementById("soKetNoi");

  if (loaiKhachHang === "business") {
    soKetNoi.style.display = "block";
  } else {
    soKetNoi.style.display = "none";
  }
}

// Sự kiện onclick lấy dữ liệu.
document.getElementById("btnTinhTienCap").onclick = function () {
  // console.log("hello");
  const loaiKH = document.getElementById("loaiKhachHang").value;
  // console.log(loaiKH);
  const maKH = document.getElementById("maKhachHang").value;
  // console.log(maKH);
  const soKenh = document.getElementById("soKenh").value * 1;
  // console.log(soKenh);
  const soKetNoi = document.getElementById("soKetNoi").value * 1;
  // console.log(soKetNoi);

  //
  //Alert cảnh báo khi không có loại khách hàng được chọn.
  if (loaiKH == "default") {
    alert("Bạn chưa chọn loại Khách Hàng!");
  }

  // Xử lý

  function tinhTienCap() {
    let tienCap = 0;

    // Neu kh la doanh nghiep
    if (loaiKH === "business") {
      if (soKetNoi <= 10) {
        tienCap = 75;// số tiền cáp mặc định.
      } else {
        tienCap = 75 + (soKetNoi - 10) * 5; // Nhan 5$ cho moi ket noi them tu ket noi thu 11
      } 

      tienCap += 15; // phí cáp mặc định hằng tháng doanh nghiệp đóng.
      tienCap += soKenh * 50; // Mỗi kênh cao cấp doanh nghiệp là $50.
    } else if (loaiKH === "home") {
      tienCap = 25; // Phí cáp mặc định hằng tháng nhà dân đóng.
      tienCap += soKenh * 7.5; // đóng thêm $7.5 cho mỗi kênh cao cấp
    }
    return tienCap;
  }
    const tienCap = tinhTienCap();
    document.getElementById("tienCap").innerHTML = `Mã KH: ${maKH},Tổng tiền cáp: $${tienCap}`;
  };
