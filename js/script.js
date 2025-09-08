let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(id, nama, harga) {
  let produk = cart.find(p => p.id === id);
  if (produk) {
    produk.jumlah += 1;
  } else {
    cart.push({ id, nama, harga, jumlah: 1 });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(nama + " ditambahkan ke keranjang!");
}

function renderCart() {
  let cartTable = document.getElementById("cart-items");
  let totalHarga = 0;
  cartTable.innerHTML = "";
  cart.forEach((item, index) => {
    let subtotal = item.harga * item.jumlah;
    totalHarga += subtotal;
    cartTable.innerHTML += `
      <tr>
        <td>${item.nama}</td>
        <td>Rp${item.harga.toLocaleString()}</td>
        <td>${item.jumlah}</td>
        <td>Rp${subtotal.toLocaleString()}</td>
        <td><button onclick="removeFromCart(${index})">Hapus</button></td>
      </tr>
    `;
  });
  document.getElementById("total-harga").innerText = "Rp" + totalHarga.toLocaleString();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}
// ===== Checkout Form =====
const checkoutForm = document.getElementById("checkoutForm");
if (checkoutForm) {
  checkoutForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Ambil data dummy (tidak disimpan, hanya untuk demo)
    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const telp = document.getElementById("telp").value;
    const alamat = document.getElementById("alamat").value;
    const pembayaran = document.getElementById("pembayaran").value;

    alert(
      `✅ Pesanan berhasil dibuat!\n\n` +
      `Nama: ${nama}\n` +
      `Email: ${email}\n` +
      `Telp: ${telp}\n` +
      `Alamat: ${alamat}\n` +
      `Metode Pembayaran: ${pembayaran}\n\n` +
      `Terima kasih telah berbelanja di HaeMakeUp.`
    );

    clearCart(); // kosongkan keranjang
    window.location.href = "index.html"; // arahkan ke home
  });
}

