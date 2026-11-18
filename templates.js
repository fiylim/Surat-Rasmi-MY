// Tambah/betulkan templat di sini. Add or fix templates here (PRs welcome).
// {{medan}} diganti daripada borang. Setiap item dalam "isi" = satu perenggan.
// Perenggan pertama tidak bernombor; selebihnya dinomborkan (konvensyen surat rasmi).
const TEMPLATES = {
  cuti_kelas: {
    nama: "Permohonan cuti / ketidakhadiran kelas",
    per: "PERMOHONAN CUTI KELAS {{kursus}}",
    fields: [
      {id:"kursus", label:"Kursus (nama & kod)", ph:"cth: MPU3122"},
      {id:"tarikhKelas", label:"Tarikh kelas", ph:"cth: 5 November 2026"},
      {id:"sebab", label:"Sebab", ph:"cth: masalah log masuk Microsoft Teams"}
    ],
    isi: [
      "Dengan segala hormatnya saya merujuk perkara di atas.",
      "Saya, {{nama}} (ID pelajar: {{id}}) dari {{prog}}, memohon cuti bagi kelas {{kursus}} yang telah berlangsung pada {{tarikhKelas}}.",
      "Ketidakhadiran saya adalah disebabkan {{sebab}}.",
      "Saya akan berusaha mengejar pelajaran dan menyiapkan sebarang tugasan yang ketinggalan.",
      "Saya amat berharap permohonan ini dapat dipertimbangkan. Segala kerjasama dan perhatian pihak tuan/puan amat saya hargai."
    ]
  },
  cuti_sakit: {
    nama: "Pemakluman ketidakhadiran kerana sakit",
    per: "PEMAKLUMAN KETIDAKHADIRAN KERANA SAKIT",
    fields: [
      {id:"tarikhSakit", label:"Tarikh / tempoh sakit", ph:"cth: 3 hingga 4 November 2026"},
      {id:"kursus", label:"Kursus terlibat (pilihan)", ph:"cth: IIB11503"}
    ],
    isi: [
      "Dengan segala hormatnya saya merujuk perkara di atas.",
      "Saya, {{nama}} (ID pelajar: {{id}}) dari {{prog}}, ingin memaklumkan bahawa saya tidak dapat hadir ke kelas/aktiviti akademik pada {{tarikhSakit}} kerana tidak sihat.",
      "Saya telah mendapatkan rawatan dan sijil cuti sakit disertakan sebagai bukti.",
      "Saya memohon kebenaran tuan/puan untuk mengecualikan ketidakhadiran saya dan saya akan mengejar pelajaran yang ketinggalan."
    ]
  },
  lanjut_tugasan: {
    nama: "Permohonan lanjutan tarikh tugasan",
    per: "PERMOHONAN LANJUTAN TARIKH PENGHANTARAN TUGASAN {{kursus}}",
    fields: [
      {id:"kursus", label:"Kursus", ph:"cth: IIB11503"},
      {id:"tugasan", label:"Nama tugasan", ph:"cth: Assignment 1"},
      {id:"tarikhAsal", label:"Tarikh akhir asal", ph:"cth: 20 November 2026"},
      {id:"tarikhBaru", label:"Tarikh dipohon", ph:"cth: 27 November 2026"},
      {id:"sebab", label:"Sebab", ph:"cth: masalah kesihatan"}
    ],
    isi: [
      "Dengan segala hormatnya saya merujuk perkara di atas.",
      "Saya, {{nama}} (ID pelajar: {{id}}) dari {{prog}}, memohon lanjutan tarikh penghantaran {{tugasan}} bagi kursus {{kursus}} daripada {{tarikhAsal}} kepada {{tarikhBaru}}.",
      "Permohonan ini dibuat kerana {{sebab}}.",
      "Saya berjanji akan menyiapkan dan menghantar tugasan tersebut sebelum tarikh yang dipohon.",
      "Kerjasama dan pertimbangan pihak tuan/puan amat saya hargai."
    ]
  },
  rayuan: {
    nama: "Rayuan (keputusan / peperiksaan)",
    per: "RAYUAN {{perkara}}",
    fields: [
      {id:"perkara", label:"Perkara rayuan (huruf besar)", ph:"cth: SEMAKAN SEMULA MARKAH KURSUS IIB11503"},
      {id:"sebab", label:"Sebab / butiran rayuan", ph:"Terangkan ringkas dan jelas"}
    ],
    isi: [
      "Dengan segala hormatnya saya merujuk perkara di atas.",
      "Saya, {{nama}} (ID pelajar: {{id}}) dari {{prog}}, ingin merayu berkaitan perkara di atas.",
      "{{sebab}}",
      "Sehubungan itu, saya memohon agar rayuan ini dipertimbangkan dengan sewajarnya. Dokumen sokongan (jika ada) dilampirkan bersama surat ini."
    ]
  },
  pengesahan: {
    nama: "Permohonan surat pengesahan pelajar",
    per: "PERMOHONAN SURAT PENGESAHAN STATUS PELAJAR",
    fields: [
      {id:"tujuan", label:"Tujuan surat", ph:"cth: permohonan pinjaman PTPTN"}
    ],
    isi: [
      "Dengan segala hormatnya saya merujuk perkara di atas.",
      "Saya, {{nama}} (ID pelajar: {{id}}) merupakan pelajar {{prog}}. Saya memohon surat pengesahan status pelajar untuk tujuan {{tujuan}}.",
      "Segala kerjasama dan bantuan pihak tuan/puan amat saya hargai."
    ]
  }
};
