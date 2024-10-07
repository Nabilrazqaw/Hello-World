class Kapal {
  constructor(nama, jenis, panjang, lebar) {
    this.nama = nama;
    this.jenis = jenis;
    this.panjang = panjang;
    this.lebar = lebar;
  }
  infoKapal() {
    return `kapal ${this.nama} merupakan jenis ${this.jenis} yang berukuran ${this.panjang} M x ${this.lebar}m.`;}
  berlayar() {
    return `Kapal ${this.nama} sedang berlayar...`}
  docking() {
    return `Kapal ${this.nama} sedang docking...`;}}

class Kapalkecil extends Kapal {
  constructor(nama, jenis, panjang, lebar, kapasitas) {
    super(nama, jenis, panjang, lebar);
    this.kapasitaspenumpang = kapasitas;}
  infoKapal() {
    return `${super.infoKapal()} kapal ini memiliki kapasitas ${this.kapasitaspenumpang} orang`;}}
class KapalTanker extends Kapal {
  constructor(nama, jenis, panjang, lebar, kapasitasTanker) {
    super(nama, jenis, panjang, lebar);
    this.kapasitasTanker = kapasitasTanker;}
  infoKapal() {
    return `${super.infoKapal()} kapal ini memiliki kapasitas tanker ${this.kapasitasTanker} liter`;}}

class KapalPesiarbesar extends Kapal {
  constructor(nama, jenis, panjang, lebar, jumlahKabin) {
    super(nama, jenis, panjang, lebar);
    this.jumlahKabin = jumlahKabin;}

  infoKapal() {
    return `${super.infoKapal()} kapal ini memiliki ${this.jumlahKabin} kabin mewah`;}}

class KapalPerang extends Kapal {
  constructor(nama, jenis, panjang, lebar, jumlahMeriam) {
    super(nama, jenis, panjang, lebar);
    this.jumlahMeriam = jumlahMeriam;}
  infoKapal() {
    return `${super.infoKapal()} kapal ini memiliki ${this.jumlahMeriam} meriam`;}
  menembak() {
    return `Kapal ${this.nama} menembakkan meriam...`;}}

class KapalSelam extends Kapal {
  constructor(nama, jenis, panjang, lebar, kedalaman) {
    super(nama, jenis, panjang, lebar);
    this.kedalaman = kedalaman;}
  infoKapal() {
    return `${super.infoKapal()} kapal ini dapat menyelam hingga ${this.kedalaman} meter`;}
  menyelam() {
    return `Kapal ${this.nama} sedang menyelam...`;}}

class KapalFeriCepat extends Kapalkecil {
  constructor(nama, jenis, panjang, lebar, kapasitas, kecepatan) {
    super(nama, jenis, panjang, lebar, kapasitas);
    this.kecepatan = kecepatan;}
  infoKapal() {
    return `${super.infoKapal()} kapal ini memiliki kecepatan ${this.kecepatan} knot`;}
  berlayarCepat() {
    return `Kapal ${this.nama} sedang berlayar cepat...`;}}
    
class KapalPenelitian extends Kapal {
  constructor(nama, jenis, panjang, lebar, jumlahLaboratorium) {
    super(nama, jenis, panjang, lebar);
    this.jumlahLaboratorium = jumlahLaboratorium;}
  infoKapal() {
    return `${super.infoKapal()} kapal ini memiliki ${this.jumlahLaboratorium} laboratorium`;}
  melakukanPenelitian() {
    return `Kapal ${this.nama} sedang melakukan penelitian...`;}}

const kapalferry = new Kapalkecil("budiyono", "ferry", 200, 100, 600);
const kapalpenumpang = new Kapal("budiyono siregar", "ferry", 200, 100);
const kapalpesiar = new Kapal("titanic", "kapal pesiar", 300, 150);
const kapaltanker = new KapalTanker("tanker1", "tanker", 250, 120, 100000);
const kapalpesiarbesar = new KapalPesiarbesar("pesiar1", "kapal pesiar besar", 450, 250, 10000);
const kapalperang = new KapalPerang("perang1", "kapal perang", 200, 100, 10);
const Kapalmipa = new KapalPenelitian("kapal penelitian 1", "kapal penelitian", 200, 400, 150);
const kapalselam = new KapalSelam("selam1", "selam", 200, 100, 500);
const kapalperang2 = new KapalPerang("perang2", "perang", 200, 100, 10);

console.log(kapalferry.infoKapal());

console.log(kapaltanker.infoKapal());

console.log(kapalpesiarbesar.infoKapal());

console.log(kapalperang.infoKapal());
console.log(kapalperang.menembak());

console.log(kapalselam.infoKapal());
console.log(kapalselam.menyelam());

const kapalfericepat = new KapalFeriCepat("fericepat1", "feri cepat", 200, 100, 600, 30);
console.log(kapalfericepat.infoKapal());
console.log(kapalfericepat.berlayarCepat());

const kapalpenelitian = new KapalPenelitian("penelitian1", "penelitian", 200, 100, 5);
console.log(kapalpenelitian.infoKapal());
console.log(kapalpenelitian.melakukanPenelitian());


console.log(kapalferry.berlayar());
console.log(kapalpesiar.berlayar());
console.log(kapaltanker.berlayar());
console.log(kapalpesiarbesar.berlayar());

console.log(kapalferry.docking());
console.log(kapalpesiar.docking());
console.log(kapaltanker.docking());
console.log(kapalpesiarbesar.docking());