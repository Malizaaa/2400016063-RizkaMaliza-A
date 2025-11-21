let angkaRahasia = Math.floor(Math.random() * 20) + 1;

document.getElementById("tebak").addEventListener("click", function() {
  let tebakan = document.getElementById("angka").value;
  let hasil = document.getElementById("hasil");

  if (tebakan == "") {
    hasil.textContent = "Masukkan angka dulu!";
  } else if (tebakan < 1 || tebakan > 20) {
    hasil.textContent = "Angka harus 1 sampai 20.";
  } else if (tebakan == angkaRahasia) {
    hasil.textContent = "Benar! 🎉";
  } else if (tebakan < angkaRahasia) {
    hasil.textContent = "Terlalu kecil!";
  } else {
    hasil.textContent = "Terlalu besar!";
  }
});

document.getElementById("ulang").addEventListener("click", function() {
  angkaRahasia = Math.floor(Math.random() * 20) + 1;
  document.getElementById("angka").value = "";
  document.getElementById("hasil").textContent = "";
});
