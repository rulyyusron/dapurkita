import React from 'react';
import classes from './ann.module.css'

const Announcement = () => {
  return (
    <div className={classes.container}>
        <div className={classes.wrapper}>
            <div className={classes.left}>
                <h3 className={classes.info}>Product Information</h3>

                <div className={classes.info_cek}>
                    <p>Cek Ketersediaan produk ?</p>
                    <span>
                        Ketersediaan produkdapat di cek melalui halaman dapur kita atau dapat menghubungi admin melalui customer service
                    </span>
                </div>
                <div className={classes.info_detail}>
                    <p>Cek detail produk anda</p>

                    <span>Klik produk yang kamu inginkan, kemudian lihat keterangan di bawah / samping gambar, terdapat spesifikasi produk, berat, jumlah, harga, promo, minimal pemesanan , ketersediaan produk sesuai dengan jumlah promo, deskripsi produk, dan lain sebagainya</span>
                </div>
            </div>
            <div className={classes.right}>
                <h3 className={classes.info}>Status Orders</h3>

                <div className={classes.info_cek}>
                <p>Cek orderan anda ?</p>
                    <span>
                        Pilih menu transaksi pada aplikasi dapurkita atau dengan membuka  menu akun transaksi, lihat pada status order / pemesanan yang tertera atau klik card untuk melihat detail status pemesanan
                    </span>
                </div>
                <div className={classes.info_detail}>
                <p>Pesanan tidak sesuai / kurang ?</p>
                    <span>
                        Pesanan yang tidak lengkap biasanya terjadi saat produk yang kamu pesan tidak tersedia atau tidak dalam kondisi panen, kami akan melakukan pengembalian dana berupa voucer dengan jumlah sesuai produk yang tidak tersedia
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Announcement