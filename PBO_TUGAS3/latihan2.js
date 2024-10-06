class Kapal {
  constructor(nama, jenis, panjang, lebar) {
    this.nama = nama;
    this.jenis = jenis;
    this.panjang = panjang;
    this.lebar = lebar;
  }

  infoKapal() {
    return `kapal ${this.nama} merupakan jenis ${this.jenis} yang berukuran ${this.panjang} M x ${this.lebar}m.`;
  }

  berlayar() {
    return `Kapal ${this.nama} sedang berlayar...`;
  }

  docking() {
    return `Kapal ${this.nama} sedang docking...`;
  }
}

class Kapalkecil extends Kapal {
  constructor(nama, jenis, panjang, lebar, kapasitas) {
    super(nama, jenis, panjang, lebar);
    this.kapasitaspenumpang = kapasitas;
  }

  infoKapal() {
    return `${super.infoKapal()} kapal ini memiliki kapasitas ${this.kapasitaspenumpang} orang`;
  }
}

class KapalTanker extends Kapal {
  constructor(nama, jenis, panjang, lebar, kapasitasTanker) {
    super(nama, jenis, panjang, lebar);
    this.kapasitasTanker = kapasitasTanker;
  }

  infoKapal() {
    return `${super.infoKapal()} kapal ini memiliki kapasitas tanker ${this.kapasitasTanker} liter`;
  }
}

class KapalPesiarbesar extends Kapal {
  constructor(nama, jenis, panjang, lebar, jumlahKabin) {
    super(nama, jenis, panjang, lebar);
    this.jumlahKabin = jumlahKabin;
  }

  infoKapal() {
    return `${super.infoKapal()} kapal ini memiliki ${this.jumlahKabin} kabin mewah`;
  }
}

const kapalferry = new Kapalkecil("budiyono", "ferry", 200, 100, 600);
const kapalpenumpang = new Kapal("budiyono siregar", "ferry", 200, 100);
const kapalpesiar = new Kapal("titanic", "kapal pesiar", 300, 150);
const kapaltanker = new KapalTanker("tanker1", "tanker", 250, 120, 100000);
const kapalpesiarbesar = new KapalPesiarbesar("queen mary", "kapal pesiar mewah", 350, 180, 50);
  
console.log(kapalferry.infoKapal());
console.log(kapalpesiar.infoKapal());
console.log(kapaltanker.infoKapal());
console.log(kapalpesiarbesar.infoKapal());

console.log(kapalferry.berlayar());
console.log(kapalpesiar.berlayar());
console.log(kapaltanker.berlayar());
console.log(kapalpesiarbesar.berlayar());

console.log(kapalferry.docking());
console.log(kapalpesiar.docking());
console.log(kapaltanker.docking());
console.log(kapalpesiarbesar.docking());