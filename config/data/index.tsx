import moment from 'moment';

export const dtCouple = [
  {
    _id: 'couple_0',
    name: 'Wahyu Rikawati',
    img_tlg: '/img/rika-tlg.jpg',
    img_kdr: '/img/rika-kdr.jpg',
    father: 'Richwan',
    mother: 'Wiwik Wikaningsih',
    ig_url: 'https://instagram.com/rikawhy_',
  },
  {
    _id: 'couple_1',
    name: 'Muhammad Fariz Rahman',
    img_tlg: '/img/fariz-tlg.jpg',
    img_kdr: '/img/fariz-kdr.jpg',
    father: 'Rudy Hertiono',
    mother: 'R.A. Soeprijati',
    ig_url: 'https://instagram.com/ayisrhmn',
  },
];

export const eventTlg = {
  startResepsi: moment('2022-11-19 12:00'),
  endResepsi: moment('2022-11-19 15:00'),
  location: 'https://maps.app.goo.gl/esYLxeZFYUCoTNAJ9',
};

export const eventKdr = {
  start: moment('2023-12-29 16:00'),
  end: moment('2022-11-26 17:00'),
  location: 'https://maps.app.goo.gl/esYLxeZFYUCoTNAJ9',
};

export const storyData = {
  satu: {
    title: 'Pembukaan | 16:00 - 17:00',
    desc: "Dalam pembukaan acara Musyawarah Besar Yayasan Sanusiah Al-mansyuriah Sumedang, dimulai dengan pembacaan Ayat Suci Al-Qur'an untuk menciptakan momen khidmat. Disusul oleh pembacaan sholawat yang memberikan kehangatan spiritual. Sambutan pendiri yayasan menginspirasi hadirin dengan menguraikan visi dan perjalanan yayasan. Sebagai moderator, pembukaan ditutup dengan pengantar sebelum mempersilakan Ketua Yayasan, KH. Ita Zaenal Mutaqien, memberikan pemaparan lebih lanjut tentang pendirian YSAS. Melalui pengaturan panitia yang cermat, diharapkan hadirin dapat merasakan dan terlibat dalam semangat kemanusiaan yang menjadi fokus yayasan.",
  },
  dua: {
    title: 'Cofee Break + Persiapan Sholat magrib berjama’ah | 17:00 – 18:20',
    desc: "Selama istirahat kopi dan persiapan Sholat Maghrib berjama'ah, panitia menyajikan momen santai untuk para hadirin. Dalam rentang waktu 17:00 hingga 18:20, diharapkan peserta dapat menikmati coffee break sambil berdiskusi.",
  },
  tiga: {
    title: 'Tawasul + Sholat Isya Berjama’ah | 18:20 – 19:25',
    desc: "Mengikuti sesi tawasul, para peserta akan bersama-sama melanjutkan dengan pelaksanaan Sholat Isya berjama'ah dipimpin oleh KH. Ita Zaenal Mutaqien. Antusiasme dan kesakralan ibadah akan menyatukan hati dalam doa dan ketaatan, menciptakan pengalaman keagamaan yang mendalam dari pukul 18:20 hingga 19:25.",
  },
  empat: {
    title: 'Acara Inti',
    desc: "Dalam acara inti, peserta akan diarahkan melalui rangkaian kegiatan yang mencakup penjelasan program, pemaparan budgeting, dan diskusi program. Panitia akan memandu sesi ini dari pukul 19:25 hingga 21:15. Penjelasan program akan memberikan gambaran menyeluruh mengenai inisiatif yang akan dijalankan, disusul dengan pemaparan budgeting yang merinci alokasi dana untuk setiap program. Sesi diskusi kemudian memberikan peluang bagi peserta untuk berkontribusi, bertanya, dan memberikan masukan, menjadikan acara ini kolaboratif dan informatif.",
  },
  lima: {
    title: 'Penutupan | 21:15 - 21:38',
    desc: "Acara akan ditutup dengan momen penting, yakni penandatanganan Memorandum of Understanding (MOU) yang melibatkan pihak-pihak terkait. Dalam suasana khidmat, peserta akan bersama-sama menyaksikan penandatanganan kesepakatan ini sebagai langkah konkret menuju realisasi program. Setelah itu, acara ditutup dengan doa, menggambarkan harapan dan kesucian dalam mengakhiri pertemuan ini. Moderator dan panitia akan memandu penutupan dari pukul 21:15 hingga 21:38, memberikan sentuhan akhir yang berkesan pada Majelis Amal Yayasan Sosial Al-Quds.",
  },
  enam: {
    title: 'Makan Bersama | 21:38 - Selesai',
    desc: "Setelah penutupan acara, panitia akan mengundang peserta untuk bersama-sama menikmati makan bersama. Mulai dari pukul 21:38 hingga selesai, momen santai ini menciptakan kesempatan untuk mempererat hubungan, berbagi cerita, dan memperkokoh kebersamaan di antara para hadirin. Suasana makan bersama akan menjadi penutup yang hangat dan penuh keakraban setelah rangkaian acara yang informatif dan berkesan sepanjang hari.",
  },
};

export const imgGallery = [...Array(19)].map((_, i: number) => {
  return {
    original: `/img/gallery/img-${i + 1}.jpg`,
    thumbnail: `/img/gallery/img-thumb-${i + 1}.jpg`,
  };
});

export const snowfallConfig: any = {
  color: '#DEE4FD',
  snowflakeCount: 70,
  speed: [0, 2],
  wind: [0, 2],
  radius: [0.5, 1],
  style: {
    position: 'fixed',
    width: '100vw',
    height: '100vh',
    zIndex: 9999,
  },
};
