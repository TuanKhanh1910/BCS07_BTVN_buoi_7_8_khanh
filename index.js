var arr1 = [];
document.getElementById("btnThemSo").onclick = function () {
  var nhapSoN = +document.getElementById("nhapSoN").value;
  arr1.push(nhapSoN);
  document.getElementById("KetQuaThemSo").innerHTML =
    "Các số đã được thêm: " + arr1;
};

// Tính tổng số dương
document.getElementById("btnSoDuong").onclick = function () {
  var tongSoDuong = 0;
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] > 0) {
      tongSoDuong += arr1[i];
    }
  }
  document.getElementById("ketQuaTinhTong").innerHTML =
    "Tổng các số dương là " + tongSoDuong;
};

// Đếm số dương:
document.getElementById("btnDemso").onclick = function () {
  var demCacSoDuong = 0;
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] > 0) {
      demCacSoDuong++;
    }
  }
  document.getElementById("ketQuaDemSo").innerHTML =
    "Có tất cả là  " + demCacSoDuong + " số dương";
};

// Tìm số dương nhỏ nhất

document.getElementById("btnSoDuongNhoNhat").onclick = function () {
  var arrSoDuong = [];
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] > 0) {
      arrSoDuong.push(arr1[i]);
    } else if (arr1[i] < 0) {
      document.getElementById("ketQuaTimSoNhoNhat").innerHTML =
        "Không có số dương nào hết!";
    }
  }
  //   các bước xử lí để tìm số dương nhỏ nhất
  var soDuongNhoNhat = arrSoDuong[0];
  for (var m = 1; m < arrSoDuong.length; m++) {
    var SoDuong = arrSoDuong[m];
    if (SoDuong < soDuongNhoNhat) {
      soDuongNhoNhat = SoDuong;
    }
    document.getElementById("ketQuaTimSoNhoNhat").innerHTML =
      "Số dương nhỏ nhất là " + soDuongNhoNhat;
  }
};

// tìm số nhỏ nhất
document.getElementById("btnSoNhoNhat").onclick = function () {
  var soNhoNhat = arr1[0];
  for (var i = 1; i < arr1.length; i++) {
    var soNho = arr1[i];
    if (soNho < soNhoNhat) {
      soNhoNhat = soNho;
    }
  }
  document.getElementById("ketQuaTimNhoNhat").innerHTML =
    "Số nhỏ nhất là: " + soNhoNhat;
};

// tìm số chẵn cuối cùng:
document.getElementById("btnSoChanCuoiCung").onclick = function () {
  var soChanCuoiCung = 0;
  for (var i = arr1.length; i > 1; i--) {
    if (arr1[i] % 2 == 0) {
      soChanCuoiCung = arr1[i];
      document.getElementById("ketQuaTimSoChanCuoiCung").innerHTML =
        "Số chẵn cuối cùng là: " + soChanCuoiCung;
      break;
    } else if (arr1[i] != 0) {
      document.getElementById("ketQuaTimSoChanCuoiCung").innerHTML =
        -1 + " vì không có số chẵn nào hết";
    }
  }
};

// Đổi chỗ vị trí cho 2 số bất kì trong mảng khi người dùng nhập vị trí của số đó trong mảng
document.getElementById("btnDoiCho").onclick = function () {
  var viTriSoThu1 = +document.getElementById("soThu1").value;
  var viTriSoThu2 = +document.getElementById("soThu2").value;

  var doiViTri = "";
  doiViTri = arr1[viTriSoThu1];
  arr1[viTriSoThu1] = arr1[viTriSoThu2];
  arr1[viTriSoThu2] = doiViTri;
  document.getElementById("ketQuaDoiCho").innerHTML =
    "Sau khi đổi vị chỗ kết quả là: " + arr1;
};

// Sắp xếp tăng dần
document.getElementById("btnSapXep").onclick = function () {
  document.getElementById("ketQuaSapXepTangDan").innerHTML =
    "Kết quả sau khi sắp xếp theo thứ tự tăng dần là: " + arr1.sort();
};

// tìm số nguyên tố đầu tiên:
function kiemTraSoNguyenTo(number) {
  var checkSNT = true;
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      checkSNT = false;
      break;
    }
  }

  return checkSNT;
}

document.getElementById("btnSNT").onclick = function () {
  var soNguyenTo = 0;
  for (var i = 0; i < arr1.length; i++) {
    var checkSNT = kiemTraSoNguyenTo(arr1[i]);
    if (checkSNT) {
      soNguyenTo += arr1[i];
      document.getElementById("ketQuaTimSNT").innerHTML =
        "Số nguyên tố đầu tiên là: " + soNguyenTo;
      break;
    } else if (checkSNT == false) {
      document.getElementById("ketQuaTimSNT").innerHTML =
        -1 + " vì không có số nguyên tố nào";
    }
  }
};

// Đếm số nguyên
document.getElementById("btnDemSoNguyen").onclick = function () {
  var demSoNguyen = 0;
  for (i = 0; i < arr1.length; i++) {
    if (Number.isInteger(arr1[i])) {
      demSoNguyen++;
    }
  }
  document.getElementById("ketQuaDemSoNguyen").innerHTML =
    "Có tất là " + demSoNguyen + " số nguyên";
};

// so sánh các số âm và số dương
document.getElementById("btnSoSanh").onclick = function () {
  var soDuong = 0;
  var soAm = 0;
  var ketQua = "";
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] > 0) {
      soDuong++;
    }
    if (arr1[i] < 0) {
      soAm++;
    }
  }
  //   for (var i = 0; i < arr1.length; i++) {}
  if (soDuong > soAm) {
    ketQua = "Số dương " + " > " + " Số âm";
  } else if (soDuong < soAm) {
    ketQua = "Số dương " + " < " + " Số âm";
  } else if (soDuong == soAm) {
    ketQua = "Số dương " + " = " + " Số âm";
  }
  document.getElementById("ketQuaSoSanh").innerHTML = ketQua;
};
