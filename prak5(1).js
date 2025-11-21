const quotes = [
  "Setiap hari adalah kesempatan baru untuk menjadi lebih baik.",
  "Jangan takut gagal, takutlah kalau tidak mencoba.",
  "Lakukan yang terbaik hari ini, agar esok lebih mudah."
];

document.getElementById("generate").addEventListener("click", function() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").textContent = quotes[randomIndex];
});
