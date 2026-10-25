/*
 * 網站的多語版本：中文是完整版（index.html 裡），其餘語言是給看護看的精簡版。
 * 每種語言一個物件：name 是選單上的字，sections 是 [標題, HTML 內文] 的陣列。
 * 翻譯由開發者完成、尚未經母語者審閱；要改就改這裡那一句。
 * 東帝汶（2025 年加入 ASEAN）的官方語言是德頓語與葡萄牙語，兩種都有。
 */
const PAGES = {
  "en": {
    name: "English",
    title: "CRCL-BELL infrared eye-gaze call bell",
    download: "Windows software", download_btn: "Download installer", releases: "All versions",
    sections: [
      ["What it is", `<p>With motor neuron disease the body gradually stops following commands: speaking and pressing a bell get harder day by day, while the eyes can usually still look. In the daytime someone is nearby and can see what is needed; at night the family has to sleep too, and a patient who wants to turn over, feels unwell or needs someone often has no choice but to wait. We built this call bell for the night: the patient looks at the lights, and the bell brings someone. The lights are near-infrared — only three faint red dots are visible, the room stays dark, and nobody's sleep is disturbed; those three dots are also exactly what the patient looks at. Setting up means following the on-screen guidance to aim and focus the camera; the patient practises “right light, then left light” a few times and soon has it — so that both patient and family can sleep in peace.</p>
<ul><li>The device is a small box clamped to the bed or table, 50–70 cm in front of the patient's eyes, with three near-infrared lights (only faint red dots are visible) and a camera.</li>
<li>The patient <strong>looks at the lights in order</strong> (by default right, then left, about one second each) and the computer rings. A wrong order or a casual glance does not ring it.</li>
<li>Nothing touches the patient and nothing is attached; another person can use it right away.</li>
<li>One Windows computer plus the box is all it needs.</li></ul>`],
      ["Who it is for and how to get it", `<p>It was developed for the patients of the <strong>Taiwan Motor Neuron Disease Association</strong>. The first units are lent to patients through the Association.</p>
<ul><li><strong>Patients and families</strong>: contact the Association to apply for a trial; they arrange the device, training and feedback.</li>
<li><strong>Other care organisations or researchers</strong>: write to us (see Contact). This is still a release candidate under field testing and is not yet generally available.</li>
<li><strong>Software</strong>: use the download button above. It opens without the box, so you can look at the interface first.</li></ul>`],
      ["How it works", `<p>The three infrared lights flash in turn. The camera subtracts each picture from the previous one, leaving only the three reflections of the lights on the cornea; they form a small triangle. The pupil is found with a circle detector. Whichever reflection the pupil centre is closest to is the light being watched; it must be watched for about one second to count. When the lights are watched in the set order, the bell rings; if the next light is not watched within a few seconds, the attempt is cancelled to avoid false alarms.</p>
<p>The program is a native Windows program in ten interface languages: Traditional Chinese, English, Vietnamese, Indonesian, Malay, Filipino, Thai, Khmer, Burmese and Lao.</p>`],
      ["Infrared safety — please read", `<p>The device uses near-infrared LEDs, the same kind of light as a TV remote; only three faint red dots are visible. So far the team has only made <strong>preliminary estimates from component data and its own measurements</strong>; they indicate exposure below the IEC 62471 limits at the intended 50–70 cm distance. <strong>This is not a formal safety certification.</strong> Testing of the whole device by an independent laboratory is planned but not yet done.</p>
<p>Until then: keep the device at 50–70 cm, never closer; do not put the eye close to the lights and stare at them; do not use it longer than needed; stop at once and tell the team if the eyes feel tired, dry or uncomfortable. People with eye disease, recent eye surgery or light sensitivity should ask a doctor first.</p>`],
      ["Installing", `<p>Needs a Windows 10 or 11 (64-bit) laptop or desktop, two free USB ports (camera and control cable) and a working speaker. No administrator password is needed.</p>
<ol><li>Download the installer with the button above and run it.</li>
<li>If a blue “Windows protected your PC” screen appears: click <strong>More info → Run anyway</strong>.</li>
<li>If “Smart App Control has blocked this app” appears (new Windows 11 PCs): go to Settings → Privacy & security → Windows Security → App & browser control → Smart App Control and turn it <strong>Off</strong>, then install again.</li>
<li>The first time, the computer needs internet once: press the button in the program to install the control-box driver.</li>
<li>When a new version exists, the program shows a notice at the top; press “Download and install”. Upgrading keeps your settings.</li></ol>
<p>The installer is not yet digitally signed (a code-signing certificate is being applied for), so steps 2 and 3 are normal. Download only from this page or the GitHub Releases page.</p>`],
      ["Project and team", `<p>Supported by the 2026 project “Eye-controlled call bell for the MND Association”, a cooperation between <strong>National Taipei University</strong> (SMSPL Lab, Department of Communication Engineering) and the <strong>Taiwan Motor Neuron Disease Association</strong>. Principal investigator: Prof. Chen-Yu Chiang; the full team is listed in the Chinese version of this page.</p>`],
      ["Contact", `<ul><li><strong>Technical and cooperation</strong>: Prof. Chen-Yu Chiang, National Taipei University — <a href="mailto:cychiang@mail.ntpu.edu.tw">cychiang@mail.ntpu.edu.tw</a></li>
<li><strong>Patients applying for a trial</strong>: the Taiwan Motor Neuron Disease Association.</li>
<li><strong>Software problems</strong>: e-mail the log file (callbell.log in the program folder) with the time and what happened.</li></ul>
<p>Status: release candidate under field testing; it is an assistive call device, <strong>not a medical device</strong>, and does not replace human care and checks. Translations have not been reviewed by native speakers — please report mistakes.</p>`]
    ]
  },
  "vi": {
    name: "Tiếng Việt",
    title: "CRCL-BELL chuông gọi điều khiển bằng mắt (hồng ngoại)",
    download: "Phần mềm Windows", download_btn: "Tải bộ cài", releases: "Tất cả phiên bản",
    sections: [
      ["Đây là gì", `<p>Với bệnh thần kinh vận động, cơ thể dần không còn nghe theo ý muốn: nói và bấm chuông mỗi ngày một khó hơn, trong khi mắt thường vẫn nhìn được. Ban ngày có người bên cạnh, còn thấy được nhu cầu; ban đêm gia đình cũng phải ngủ, người bệnh muốn trở mình, thấy khó chịu, muốn gọi người thì thường chỉ biết chờ. Chúng tôi làm chuông gọi này cho ban đêm: người bệnh nhìn đèn, chuông sẽ gọi người đến. Đèn dùng tia hồng ngoại gần — chỉ thấy ba chấm đỏ rất mờ, phòng vẫn tối, giấc ngủ của ai cũng không bị quấy rầy; ba chấm đó cũng chính là mục tiêu để người bệnh nhìn. Lắp đặt chỉ cần làm theo hướng dẫn trên màn hình để chỉnh camera cho đúng và rõ; người bệnh tập vài lần “nhìn đèn phải, rồi đèn trái” là quen ngay — để cả người bệnh và gia đình đều ngủ yên.</p>
<ul><li>Thiết bị là một hộp nhỏ kẹp ở mép giường hoặc bàn, cách mắt người bệnh 50–70 cm, có ba đèn hồng ngoại gần (chỉ thấy chấm đỏ mờ) và một camera.</li>
<li>Người bệnh <strong>nhìn lần lượt các đèn</strong> (mặc định phải trước, rồi trái, mỗi đèn khoảng một giây) thì máy tính reo chuông. Sai thứ tự hoặc nhìn lướt qua sẽ không reo.</li>
<li>Không chạm vào người bệnh, không dán gì lên người; đổi người khác vẫn dùng ngay được.</li>
<li>Chỉ cần một máy tính Windows và hộp này.</li></ul>`],
      ["Dành cho ai, lấy ở đâu", `<p>Hệ thống được phát triển cho người bệnh của <strong>Hiệp hội bệnh nhân bệnh thần kinh vận động Đài Loan</strong> (hiệp hội xơ cứng teo cơ). Những bộ đầu tiên được Hiệp hội cho người bệnh mượn dùng thử.</p>
<ul><li><strong>Người bệnh và gia đình</strong>: liên hệ Hiệp hội để đăng ký dùng thử; Hiệp hội sắp xếp thiết bị, hướng dẫn và thu nhận ý kiến.</li>
<li><strong>Cơ sở chăm sóc hoặc nhà nghiên cứu khác</strong>: viết thư cho chúng tôi (xem Liên hệ). Đây vẫn là bản thử nghiệm đang được dùng thử thực tế, chưa cung cấp rộng rãi.</li>
<li><strong>Phần mềm</strong>: bấm nút tải ở trên. Không có hộp vẫn mở được để xem giao diện.</li></ul>`],
      ["Hoạt động thế nào", `<p>Ba đèn hồng ngoại nháy lần lượt. Camera trừ mỗi ảnh với ảnh trước, chỉ còn lại ba điểm phản chiếu của đèn trên giác mạc, tạo thành một tam giác nhỏ. Đồng tử được tìm bằng thuật toán nhận dạng hình tròn. Tâm đồng tử gần điểm phản chiếu nào thì người bệnh đang nhìn đèn đó; phải nhìn khoảng một giây mới tính. Nhìn đúng thứ tự thì chuông reo; nếu trong vài giây không nhìn đèn tiếp theo thì lần đó bị hủy để tránh reo nhầm.</p>
<p>Chương trình chạy trực tiếp trên Windows, giao diện có mười ngôn ngữ: tiếng Trung phồn thể, Anh, Việt, Indonesia, Mã Lai, Philippines, Thái, Khmer, Miến Điện và Lào.</p>`],
      ["An toàn hồng ngoại — xin đọc kỹ", `<p>Thiết bị dùng đèn LED hồng ngoại gần, cùng loại ánh sáng như điều khiển TV; chỉ thấy ba chấm đỏ mờ. Đến nay nhóm <strong>mới chỉ ước tính sơ bộ từ thông số linh kiện và tự đo</strong>; kết quả cho thấy mức phơi nhiễm ở khoảng cách 50–70 cm thấp hơn giới hạn của tiêu chuẩn IEC 62471. <strong>Đây chưa phải là chứng nhận an toàn chính thức.</strong> Việc gửi toàn bộ thiết bị cho phòng thí nghiệm độc lập kiểm định đang được lên kế hoạch, chưa hoàn thành.</p>
<p>Trước khi có báo cáo đó, xin tuân thủ: đặt thiết bị cách 50–70 cm, không gần hơn; không đưa mắt sát đèn và nhìn chằm chằm; không dùng lâu hơn mức cần thiết; nếu mắt mỏi, khô, khó chịu hoặc có bất kỳ lo ngại nào, dừng ngay và báo cho nhóm. Người có bệnh về mắt, mới phẫu thuật mắt hoặc nhạy cảm với ánh sáng nên hỏi bác sĩ trước.</p>`],
      ["Cài đặt", `<p>Cần máy tính Windows 10 hoặc 11 (64-bit), hai cổng USB trống (camera và dây điều khiển), loa phát được tiếng. Không cần mật khẩu quản trị.</p>
<ol><li>Tải bộ cài bằng nút ở trên và chạy.</li>
<li>Nếu hiện màn hình xanh “Windows đã bảo vệ PC của bạn”: bấm <strong>Thông tin khác → Vẫn chạy</strong>.</li>
<li>Nếu hiện “Smart App Control đã chặn ứng dụng này” (máy Windows 11 mới): vào Settings → Privacy & security → Windows Security → App & browser control → Smart App Control, chọn <strong>Tắt</strong>, rồi cài lại.</li>
<li>Lần đầu dùng, máy cần có internet một lần: bấm nút trong chương trình để cài driver hộp điều khiển.</li>
<li>Khi có phiên bản mới, chương trình báo ở đầu màn hình; bấm “Tải và cài đặt”. Nâng cấp không làm mất cài đặt của bạn.</li></ol>
<p>Bộ cài chưa có chữ ký số (đang xin chứng chỉ), nên bước 2 và 3 là bình thường. Chỉ tải từ trang này hoặc trang Releases trên GitHub.</p>`],
      ["Dự án và nhóm", `<p>Được hỗ trợ bởi dự án năm 2026 “Chuông gọi điều khiển bằng mắt cho Hiệp hội bệnh thần kinh vận động”, hợp tác giữa <strong>Đại học Quốc lập Đài Bắc</strong> (phòng thí nghiệm SMSPL, Khoa Kỹ thuật Truyền thông) và <strong>Hiệp hội bệnh nhân bệnh thần kinh vận động Đài Loan</strong>. Chủ nhiệm: PGS. Chen-Yu Chiang (江振宇); danh sách đầy đủ ở bản tiếng Trung của trang này.</p>`],
      ["Liên hệ", `<ul><li><strong>Kỹ thuật và hợp tác</strong>: PGS. Chen-Yu Chiang, Đại học Quốc lập Đài Bắc — <a href="mailto:cychiang@mail.ntpu.edu.tw">cychiang@mail.ntpu.edu.tw</a></li>
<li><strong>Người bệnh đăng ký dùng thử</strong>: Hiệp hội bệnh nhân bệnh thần kinh vận động Đài Loan.</li>
<li><strong>Lỗi phần mềm</strong>: gửi e-mail kèm tệp nhật ký (callbell.log trong thư mục chương trình), thời điểm và tình huống xảy ra.</li></ul>
<p>Tình trạng: bản thử nghiệm đang dùng thử thực tế; là thiết bị hỗ trợ gọi người, <strong>không phải thiết bị y tế</strong>, không thay thế việc chăm sóc và thăm khám của con người. Bản dịch chưa được người bản ngữ kiểm tra — xin báo lỗi nếu có.</p>`]
    ]
  },
  "id": {
    name: "Bahasa Indonesia",
    title: "CRCL-BELL bel panggil kendali mata (inframerah)",
    download: "Perangkat lunak Windows", download_btn: "Unduh penginstal", releases: "Semua versi",
    sections: [
      ["Apa ini", `<p>Pada penyakit neuron motorik, tubuh lambat laun tidak lagi menuruti perintah: berbicara dan menekan bel makin hari makin sulit, sementara mata biasanya masih bisa melihat. Siang hari ada orang di dekatnya yang bisa melihat kebutuhannya; malam hari keluarga juga harus tidur, dan pasien yang ingin berbalik badan, merasa tidak nyaman, atau butuh seseorang sering kali hanya bisa menunggu. Kami membuat bel panggil ini untuk malam hari: pasien melihat lampu, dan bel memanggil orang. Lampunya inframerah dekat — hanya tiga titik merah samar yang terlihat, kamar tetap gelap, tidur siapa pun tidak terganggu; tiga titik itu juga tepat menjadi sasaran yang dilihat pasien. Pemasangan cukup mengikuti panduan di layar untuk mengarahkan dan memfokuskan kamera; pasien berlatih beberapa kali “lampu kanan, lalu lampu kiri” dan segera terbiasa — agar pasien dan keluarga sama-sama bisa tidur tenang.</p>
<ul><li>Perangkatnya kotak kecil yang dijepit di tepi tempat tidur atau meja, 50–70 cm di depan mata pasien, dengan tiga lampu inframerah dekat (hanya titik merah samar yang terlihat) dan sebuah kamera.</li>
<li>Pasien <strong>melihat lampu secara berurutan</strong> (bawaan: kanan dulu, lalu kiri, masing-masing sekitar satu detik) dan komputer berbunyi. Urutan salah atau lirikan sekilas tidak membunyikannya.</li>
<li>Tidak menyentuh pasien, tidak ada yang ditempel; orang lain bisa langsung memakainya.</li>
<li>Cukup satu komputer Windows dan kotak ini.</li></ul>`],
      ["Untuk siapa dan cara mendapatkannya", `<p>Dikembangkan untuk pasien <strong>Asosiasi Penyakit Neuron Motorik Taiwan</strong>. Unit pertama dipinjamkan kepada pasien melalui Asosiasi.</p>
<ul><li><strong>Pasien dan keluarga</strong>: hubungi Asosiasi untuk mendaftar uji coba; Asosiasi mengatur perangkat, pelatihan, dan masukan.</li>
<li><strong>Lembaga perawatan atau peneliti lain</strong>: kirim surel kepada kami (lihat Kontak). Ini masih versi kandidat yang sedang diuji di lapangan, belum tersedia untuk umum.</li>
<li><strong>Perangkat lunak</strong>: gunakan tombol unduh di atas. Tanpa kotak pun bisa dibuka untuk melihat antarmukanya.</li></ul>`],
      ["Cara kerja", `<p>Tiga lampu inframerah berkedip bergantian. Kamera mengurangi setiap gambar dengan gambar sebelumnya sehingga tersisa tiga pantulan lampu di kornea yang membentuk segitiga kecil. Pupil ditemukan dengan pendeteksi lingkaran. Pantulan yang paling dekat dengan pusat pupil adalah lampu yang sedang dilihat; harus dilihat sekitar satu detik agar dihitung. Jika urutannya benar, bel berbunyi; jika lampu berikutnya tidak dilihat dalam beberapa detik, percobaan dibatalkan untuk menghindari bunyi palsu.</p>
<p>Program berjalan langsung di Windows dengan sepuluh bahasa antarmuka: Mandarin tradisional, Inggris, Vietnam, Indonesia, Melayu, Filipina, Thai, Khmer, Burma, dan Lao.</p>`],
      ["Keamanan inframerah — harap dibaca", `<p>Perangkat memakai LED inframerah dekat, jenis cahaya yang sama dengan remote TV; hanya tiga titik merah samar yang terlihat. Sejauh ini tim <strong>baru membuat perkiraan awal dari data komponen dan pengukuran sendiri</strong>; hasilnya menunjukkan paparan pada jarak 50–70 cm berada di bawah batas standar IEC 62471. <strong>Ini bukan sertifikasi keamanan resmi.</strong> Pengujian seluruh perangkat oleh laboratorium independen sedang direncanakan, belum selesai.</p>
<p>Sebelum laporan itu ada: letakkan perangkat 50–70 cm, jangan lebih dekat; jangan mendekatkan mata ke lampu dan menatapnya; jangan dipakai lebih lama dari yang diperlukan; segera hentikan dan beri tahu tim jika mata lelah, kering, tidak nyaman, atau ada kekhawatiran. Orang dengan penyakit mata, baru operasi mata, atau sensitif cahaya sebaiknya bertanya ke dokter dulu.</p>`],
      ["Pemasangan", `<p>Perlu laptop/desktop Windows 10 atau 11 (64-bit), dua port USB kosong (kamera dan kabel kontrol), dan speaker yang berbunyi. Tidak perlu kata sandi administrator.</p>
<ol><li>Unduh penginstal dengan tombol di atas lalu jalankan.</li>
<li>Jika muncul layar biru “Windows protected your PC”: klik <strong>More info → Run anyway</strong>.</li>
<li>Jika muncul “Smart App Control has blocked this app” (PC Windows 11 baru): buka Settings → Privacy & security → Windows Security → App & browser control → Smart App Control, pilih <strong>Off</strong>, lalu pasang lagi.</li>
<li>Saat pertama kali, komputer perlu internet sekali: tekan tombol di program untuk memasang driver kotak kontrol.</li>
<li>Jika ada versi baru, program menampilkan pemberitahuan di bagian atas; tekan “Unduh dan pasang”. Pembaruan tidak menghapus pengaturan Anda.</li></ol>
<p>Penginstal belum ditandatangani secara digital (sertifikat sedang diajukan), jadi langkah 2 dan 3 normal. Unduh hanya dari halaman ini atau halaman Releases di GitHub.</p>`],
      ["Proyek dan tim", `<p>Didukung oleh proyek 2026 “Bel panggil kendali mata untuk Asosiasi MND”, kerja sama <strong>National Taipei University</strong> (Lab SMSPL, Departemen Teknik Komunikasi) dan <strong>Asosiasi Penyakit Neuron Motorik Taiwan</strong>. Peneliti utama: Prof. Chen-Yu Chiang (江振宇); daftar tim lengkap ada di versi Mandarin halaman ini.</p>`],
      ["Kontak", `<ul><li><strong>Teknis dan kerja sama</strong>: Prof. Chen-Yu Chiang, National Taipei University — <a href="mailto:cychiang@mail.ntpu.edu.tw">cychiang@mail.ntpu.edu.tw</a></li>
<li><strong>Pasien yang ingin uji coba</strong>: Asosiasi Penyakit Neuron Motorik Taiwan.</li>
<li><strong>Masalah perangkat lunak</strong>: kirim surel berisi berkas log (callbell.log di folder program), waktu, dan kejadiannya.</li></ul>
<p>Status: versi kandidat dalam uji lapangan; alat bantu memanggil, <strong>bukan alat medis</strong>, tidak menggantikan perawatan dan pengawasan manusia. Terjemahan belum diperiksa penutur asli — mohon laporkan kesalahan.</p>`]
    ]
  },
  "ms": {
    name: "Bahasa Melayu",
    title: "CRCL-BELL loceng panggil kawalan mata (inframerah)",
    download: "Perisian Windows", download_btn: "Muat turun pemasang", releases: "Semua versi",
    sections: [
      ["Apakah ini", `<p>Dengan penyakit neuron motor, badan beransur-ansur tidak lagi menurut perintah: bercakap dan menekan loceng semakin hari semakin sukar, sedangkan mata biasanya masih boleh melihat. Pada waktu siang ada orang berdekatan yang nampak keperluannya; pada waktu malam keluarga juga perlu tidur, dan pesakit yang mahu membalikkan badan, berasa tidak selesa atau memerlukan seseorang selalunya hanya mampu menunggu. Kami membina loceng panggil ini untuk waktu malam: pesakit melihat lampu, dan loceng memanggil orang. Lampunya inframerah dekat — hanya tiga titik merah samar yang kelihatan, bilik kekal gelap, tidur sesiapa pun tidak terganggu; tiga titik itu jugalah sasaran yang dilihat pesakit. Pemasangan hanya mengikut panduan di skrin untuk menghala dan memfokuskan kamera; pesakit berlatih beberapa kali “lampu kanan, kemudian lampu kiri” dan cepat biasa — supaya pesakit dan keluarga sama-sama boleh tidur lena.</p>
<ul><li>Perantinya kotak kecil yang diapit di tepi katil atau meja, 50–70 cm di hadapan mata pesakit, dengan tiga lampu inframerah dekat (hanya titik merah samar kelihatan) dan sebuah kamera.</li>
<li>Pesakit <strong>melihat lampu mengikut urutan</strong> (lalai: kanan dahulu, kemudian kiri, kira-kira satu saat setiap satu) dan komputer berbunyi. Urutan salah atau pandangan sekilas tidak membunyikannya.</li>
<li>Tidak menyentuh pesakit, tiada apa dilekatkan; orang lain boleh terus menggunakannya.</li>
<li>Cukup sebuah komputer Windows dan kotak ini.</li></ul>`],
      ["Untuk siapa dan cara mendapatkannya", `<p>Dibangunkan untuk pesakit <strong>Persatuan Penyakit Neuron Motor Taiwan</strong>. Unit pertama dipinjamkan kepada pesakit melalui Persatuan.</p>
<ul><li><strong>Pesakit dan keluarga</strong>: hubungi Persatuan untuk memohon percubaan; Persatuan mengatur peranti, latihan dan maklum balas.</li>
<li><strong>Pusat jagaan atau penyelidik lain</strong>: e-mel kami (lihat Hubungi). Ini masih versi calon yang sedang diuji di lapangan, belum disediakan untuk umum.</li>
<li><strong>Perisian</strong>: gunakan butang muat turun di atas. Tanpa kotak pun boleh dibuka untuk melihat antara muka.</li></ul>`],
      ["Cara ia berfungsi", `<p>Tiga lampu inframerah berkelip bergilir. Kamera menolak setiap gambar dengan gambar sebelumnya, meninggalkan tiga pantulan lampu pada kornea yang membentuk segi tiga kecil. Anak mata dicari dengan pengesan bulatan. Pantulan yang paling hampir dengan pusat anak mata ialah lampu yang sedang dilihat; mesti dilihat kira-kira satu saat untuk dikira. Jika urutannya betul, loceng berbunyi; jika lampu seterusnya tidak dilihat dalam beberapa saat, percubaan dibatalkan untuk mengelakkan bunyi palsu.</p>
<p>Program berjalan terus pada Windows dengan sepuluh bahasa antara muka: Cina tradisional, Inggeris, Vietnam, Indonesia, Melayu, Filipina, Thai, Khmer, Burma dan Lao.</p>`],
      ["Keselamatan inframerah — sila baca", `<p>Peranti menggunakan LED inframerah dekat, jenis cahaya yang sama seperti alat kawalan jauh TV; hanya tiga titik merah samar kelihatan. Setakat ini pasukan <strong>hanya membuat anggaran awal daripada data komponen dan pengukuran sendiri</strong>; keputusannya menunjukkan pendedahan pada jarak 50–70 cm berada di bawah had piawaian IEC 62471. <strong>Ini bukan pensijilan keselamatan rasmi.</strong> Ujian seluruh peranti oleh makmal bebas sedang dirancang, belum selesai.</p>
<p>Sebelum laporan itu ada: letakkan peranti 50–70 cm, jangan lebih dekat; jangan dekatkan mata ke lampu dan merenungnya; jangan guna lebih lama daripada yang perlu; berhenti serta-merta dan beritahu pasukan jika mata letih, kering, tidak selesa atau ada kebimbangan. Mereka yang berpenyakit mata, baru dibedah mata atau sensitif cahaya patut bertanya doktor dahulu.</p>`],
      ["Pemasangan", `<p>Perlu komputer riba/meja Windows 10 atau 11 (64-bit), dua port USB kosong (kamera dan kabel kawalan) dan pembesar suara yang berbunyi. Tidak perlu kata laluan pentadbir.</p>
<ol><li>Muat turun pemasang dengan butang di atas dan jalankan.</li>
<li>Jika skrin biru “Windows protected your PC” muncul: klik <strong>More info → Run anyway</strong>.</li>
<li>Jika “Smart App Control has blocked this app” muncul (PC Windows 11 baharu): buka Settings → Privacy & security → Windows Security → App & browser control → Smart App Control, pilih <strong>Off</strong>, kemudian pasang semula.</li>
<li>Kali pertama, komputer perlu internet sekali: tekan butang dalam program untuk memasang pemacu kotak kawalan.</li>
<li>Apabila ada versi baharu, program memaparkan notis di bahagian atas; tekan “Muat turun dan pasang”. Naik taraf mengekalkan tetapan anda.</li></ol>
<p>Pemasang belum ditandatangani secara digital (sijil sedang dipohon), jadi langkah 2 dan 3 adalah normal. Muat turun hanya dari halaman ini atau halaman Releases di GitHub.</p>`],
      ["Projek dan pasukan", `<p>Disokong oleh projek 2026 “Loceng panggil kawalan mata untuk Persatuan MND”, kerjasama <strong>National Taipei University</strong> (Makmal SMSPL, Jabatan Kejuruteraan Komunikasi) dan <strong>Persatuan Penyakit Neuron Motor Taiwan</strong>. Penyiasat utama: Prof. Chen-Yu Chiang (江振宇); senarai penuh pasukan ada dalam versi Cina halaman ini.</p>`],
      ["Hubungi", `<ul><li><strong>Teknikal dan kerjasama</strong>: Prof. Chen-Yu Chiang, National Taipei University — <a href="mailto:cychiang@mail.ntpu.edu.tw">cychiang@mail.ntpu.edu.tw</a></li>
<li><strong>Pesakit memohon percubaan</strong>: Persatuan Penyakit Neuron Motor Taiwan.</li>
<li><strong>Masalah perisian</strong>: e-mel fail log (callbell.log dalam folder program) bersama masa dan apa yang berlaku.</li></ul>
<p>Status: versi calon dalam ujian lapangan; alat bantu memanggil, <strong>bukan peranti perubatan</strong>, tidak menggantikan jagaan dan pemantauan manusia. Terjemahan belum disemak penutur asli — sila laporkan kesilapan.</p>`]
    ]
  },
  "fil": {
    name: "Filipino",
    title: "CRCL-BELL infrared eye-gaze call bell",
    download: "Software para sa Windows", download_btn: "I-download ang installer", releases: "Lahat ng bersyon",
    sections: [
      ["Ano ito", `<p>Sa motor neuron disease, unti-unting hindi na sumusunod ang katawan: araw-araw nagiging mas mahirap ang pagsasalita at pagpindot ng bell, pero karaniwang nakakatingin pa rin ang mga mata. Sa araw may tao sa tabi na nakakakita ng pangangailangan; sa gabi kailangan ding matulog ng pamilya, at ang pasyenteng gustong tumagilid, hindi komportable, o may kailangan ay madalas na naghihintay na lang. Ginawa namin ang call bell na ito para sa gabi: titingnan ng pasyente ang mga ilaw, at tatawag ng tao ang bell. Near-infrared ang mga ilaw — tatlong malabong pulang tuldok lang ang nakikita, nananatiling madilim ang kuwarto, at walang naiistorbo sa pagtulog; ang tatlong tuldok ding iyon ang tinitingnan ng pasyente. Sa pag-set up, sundin lang ang gabay sa screen para itutok at i-focus ang camera; magsasanay ang pasyente nang ilang beses ng “kanang ilaw, tapos kaliwang ilaw” at mabilis itong masasanay — para kapwa makatulog nang mahimbing ang pasyente at pamilya.</p>
<ul><li>Ang device ay maliit na kahon na ikinakabit sa gilid ng kama o mesa, 50–70 cm sa harap ng mata ng pasyente, may tatlong near-infrared na ilaw (malabong pulang tuldok lang ang nakikita) at camera.</li>
<li><strong>Titingnan ng pasyente ang mga ilaw nang sunud-sunod</strong> (default: kanan muna, tapos kaliwa, mga isang segundo bawat isa) at tutunog ang computer. Hindi tutunog kung mali ang pagkakasunod o basta sulyap lang.</li>
<li>Walang dumidikit sa pasyente, walang ikinakabit; agad magagamit ng ibang tao.</li>
<li>Isang Windows computer at ang kahon lang ang kailangan.</li></ul>`],
      ["Para kanino at paano makukuha", `<p>Ginawa ito para sa mga pasyente ng <strong>Taiwan Motor Neuron Disease Association</strong>. Ang mga unang unit ay ipinapahiram sa mga pasyente sa pamamagitan ng Asosasyon.</p>
<ul><li><strong>Pasyente at pamilya</strong>: makipag-ugnayan sa Asosasyon para mag-apply ng trial; sila ang mag-aasikaso ng device, pagtuturo, at feedback.</li>
<li><strong>Ibang care facility o mananaliksik</strong>: mag-email sa amin (tingnan ang Contact). Release candidate pa ito na sinusubukan sa aktwal na gamit at hindi pa available sa publiko.</li>
<li><strong>Software</strong>: gamitin ang download button sa itaas. Mabubuksan ito kahit walang kahon para makita ang interface.</li></ul>`],
      ["Paano ito gumagana", `<p>Salitang kumikislap ang tatlong infrared na ilaw. Ibinabawas ng camera ang bawat larawan sa nauna, kaya natitira lang ang tatlong repleksyon ng ilaw sa cornea na bumubuo ng maliit na tatsulok. Hinahanap ang pupil gamit ang circle detector. Kung aling repleksyon ang pinakamalapit sa gitna ng pupil, iyon ang ilaw na tinitingnan; dapat tingnan nang mga isang segundo para mabilang. Kapag tama ang pagkakasunod, tutunog ang bell; kung hindi natingnan ang susunod na ilaw sa loob ng ilang segundo, kinakansela ang pagsubok para maiwasan ang maling tunog.</p>
<p>Native Windows program ito na may sampung wika ng interface: Traditional Chinese, English, Vietnamese, Indonesian, Malay, Filipino, Thai, Khmer, Burmese, at Lao.</p>`],
      ["Kaligtasan sa infrared — pakibasa", `<p>Gumagamit ang device ng near-infrared LED, parehong uri ng liwanag ng TV remote; tatlong malabong pulang tuldok lang ang nakikita. Hanggang ngayon, <strong>paunang pagtataya lang mula sa datos ng mga bahagi at sariling pagsukat</strong> ang nagawa ng team; ipinapakita nitong mas mababa sa limitasyon ng IEC 62471 ang exposure sa 50–70 cm. <strong>Hindi ito pormal na sertipikasyon ng kaligtasan.</strong> Plinaplano pa ang pagsusuri ng buong device ng independiyenteng laboratoryo at hindi pa tapos.</p>
<p>Hangga't wala pa iyon: ilagay ang device sa 50–70 cm, huwag mas malapit; huwag ilapit ang mata sa ilaw at titigan ito; huwag gamitin nang mas matagal sa kailangan; itigil agad at sabihin sa team kung napapagod, natutuyo, o hindi komportable ang mata. Ang may sakit sa mata, kaka-opera lang ng mata, o sensitibo sa liwanag ay magtanong muna sa doktor.</p>`],
      ["Pag-install", `<p>Kailangan ng Windows 10 o 11 (64-bit) na laptop o desktop, dalawang bakanteng USB port (camera at control cable), at gumaganang speaker. Hindi kailangan ng administrator password.</p>
<ol><li>I-download ang installer gamit ang button sa itaas at patakbuhin.</li>
<li>Kung lumabas ang asul na “Windows protected your PC”: i-click ang <strong>More info → Run anyway</strong>.</li>
<li>Kung lumabas ang “Smart App Control has blocked this app” (bagong Windows 11 PC): pumunta sa Settings → Privacy & security → Windows Security → App & browser control → Smart App Control at piliin ang <strong>Off</strong>, saka i-install ulit.</li>
<li>Sa unang gamit, kailangan ng internet nang isang beses: pindutin ang button sa program para i-install ang driver ng control box.</li>
<li>Kapag may bagong bersyon, may lalabas na abiso sa itaas ng program; pindutin ang “Download and install”. Hindi mabubura ang settings mo sa pag-upgrade.</li></ol>
<p>Wala pang digital signature ang installer (inaaplayan pa ang certificate), kaya normal ang hakbang 2 at 3. Mag-download lang mula sa pahinang ito o sa Releases page sa GitHub.</p>`],
      ["Proyekto at team", `<p>Suportado ng 2026 na proyektong “Eye-controlled call bell para sa MND Association”, kooperasyon ng <strong>National Taipei University</strong> (SMSPL Lab, Department of Communication Engineering) at ng <strong>Taiwan Motor Neuron Disease Association</strong>. Principal investigator: Prof. Chen-Yu Chiang (江振宇); nasa Chinese na bersyon ng pahinang ito ang buong listahan ng team.</p>`],
      ["Contact", `<ul><li><strong>Teknikal at kooperasyon</strong>: Prof. Chen-Yu Chiang, National Taipei University — <a href="mailto:cychiang@mail.ntpu.edu.tw">cychiang@mail.ntpu.edu.tw</a></li>
<li><strong>Pasyenteng mag-a-apply ng trial</strong>: Taiwan Motor Neuron Disease Association.</li>
<li><strong>Problema sa software</strong>: i-email ang log file (callbell.log sa folder ng program) kasama ang oras at nangyari.</li></ul>
<p>Status: release candidate na sinusubukan sa aktwal na gamit; assistive na pantawag ito, <strong>hindi medical device</strong>, at hindi pamalit sa pag-aalaga at pagbabantay ng tao. Hindi pa nasusuri ng native speaker ang mga salin — pakiulat ang mga mali.</p>`]
    ]
  },
  "th": {
    name: "ไทย",
    title: "CRCL-BELL กริ่งเรียกควบคุมด้วยสายตา (อินฟราเรด)",
    download: "ซอฟต์แวร์ Windows", download_btn: "ดาวน์โหลดตัวติดตั้ง", releases: "ทุกเวอร์ชัน",
    sections: [
      ["นี่คืออะไร", `<p>โรคเซลล์ประสาทสั่งการทำให้ร่างกายค่อย ๆ ไม่ทำตามใจสั่ง การพูดและการกดกริ่งยากขึ้นทุกวัน แต่ดวงตามักยังมองได้ กลางวันมีคนอยู่ใกล้ ๆ ยังเห็นว่าต้องการอะไร แต่กลางคืนครอบครัวก็ต้องนอน ผู้ป่วยที่อยากพลิกตัว ไม่สบาย หรืออยากเรียกใคร มักทำได้เพียงรอ เราสร้างกริ่งเรียกนี้ขึ้นเพื่อกลางคืน: ผู้ป่วยมองไฟ กริ่งก็จะเรียกคนมา ไฟเป็นอินฟราเรดใกล้ — มองเห็นเพียงจุดแดงจาง ๆ สามจุด ห้องยังมืด ไม่รบกวนการนอนของใคร และจุดสามจุดนั้นก็คือเป้าที่ผู้ป่วยต้องมองพอดี การติดตั้งเพียงทำตามคำแนะนำบนหน้าจอเพื่อเล็งและปรับโฟกัสกล้อง ผู้ป่วยฝึก “มองไฟขวา แล้วไฟซ้าย” ไม่กี่ครั้งก็คล่อง — เพื่อให้ทั้งผู้ป่วยและครอบครัวนอนหลับได้อย่างสบายใจ</p>
<ul><li>อุปกรณ์เป็นกล่องเล็ก ๆ หนีบที่ขอบเตียงหรือโต๊ะ ห่างจากตาผู้ป่วย 50–70 ซม. มีไฟอินฟราเรดใกล้สามดวง (เห็นเพียงจุดแดงจาง ๆ) และกล้องหนึ่งตัว</li>
<li>ผู้ป่วย<strong>มองไฟตามลำดับ</strong> (ค่าเริ่มต้นขวาก่อนแล้วซ้าย ดวงละประมาณหนึ่งวินาที) คอมพิวเตอร์จะส่งเสียง มองผิดลำดับหรือมองผ่าน ๆ จะไม่ดัง</li>
<li>ไม่สัมผัสตัวผู้ป่วย ไม่ต้องติดอะไร เปลี่ยนคนก็ใช้ได้ทันที</li>
<li>ใช้แค่คอมพิวเตอร์ Windows หนึ่งเครื่องกับกล่องนี้</li></ul>`],
      ["สำหรับใคร และขอรับได้อย่างไร", `<p>พัฒนาขึ้นสำหรับผู้ป่วยของ<strong>สมาคมผู้ป่วยโรคเซลล์ประสาทสั่งการแห่งไต้หวัน</strong> ชุดแรกให้ผู้ป่วยยืมใช้ผ่านสมาคม</p>
<ul><li><strong>ผู้ป่วยและครอบครัว</strong>: ติดต่อสมาคมเพื่อสมัครทดลองใช้ สมาคมจะจัดเตรียมอุปกรณ์ สอนการใช้ และรับฟังความเห็น</li>
<li><strong>สถานดูแลหรือนักวิจัยอื่น</strong>: ส่งอีเมลถึงเรา (ดูที่ติดต่อ) ยังเป็นเวอร์ชันทดลองที่กำลังทดสอบใช้งานจริง ยังไม่เปิดให้ทั่วไป</li>
<li><strong>ซอฟต์แวร์</strong>: ใช้ปุ่มดาวน์โหลดด้านบน ไม่มีกล่องก็เปิดดูหน้าจอได้</li></ul>`],
      ["ทำงานอย่างไร", `<p>ไฟอินฟราเรด 3 ดวงกะพริบสลับกัน กล้องนำภาพแต่ละภาพลบกับภาพก่อนหน้า จึงเหลือเพียงจุดสะท้อนของไฟ 3 จุดบนกระจกตา ซึ่งประกอบเป็นสามเหลี่ยมเล็ก ๆ รูม่านตาถูกค้นหาด้วยตัวตรวจจับวงกลม จุดสะท้อนที่อยู่ใกล้ศูนย์กลางรูม่านตาที่สุดคือไฟที่กำลังมอง ต้องมองประมาณหนึ่งวินาทีจึงนับ เมื่อมองถูกลำดับ กริ่งจะดัง หากไม่มองไฟดวงถัดไปภายในไม่กี่วินาที ความพยายามครั้งนั้นจะถูกยกเลิกเพื่อป้องกันการดังผิดพลาด</p>
<p>โปรแกรมทำงานบน Windows โดยตรง มีภาษาของหน้าจอ 10 ภาษา: จีนตัวเต็ม อังกฤษ เวียดนาม อินโดนีเซีย มาเลย์ ฟิลิปปินส์ ไทย เขมร พม่า และลาว</p>`],
      ["ความปลอดภัยของอินฟราเรด — โปรดอ่าน", `<p>อุปกรณ์ใช้ LED อินฟราเรดใกล้ ซึ่งเป็นแสงชนิดเดียวกับรีโมตทีวี มองเห็นเพียงจุดแดงจาง ๆ สามจุด จนถึงตอนนี้ทีมงาน<strong>ทำเพียงการประมาณเบื้องต้นจากข้อมูลชิ้นส่วนและการวัดเอง</strong> ผลชี้ว่าที่ระยะ 50–70 ซม. การรับแสงต่ำกว่าขีดจำกัดของมาตรฐาน IEC 62471 <strong>นี่ยังไม่ใช่การรับรองความปลอดภัยอย่างเป็นทางการ</strong> การส่งอุปกรณ์ทั้งชุดให้ห้องปฏิบัติการอิสระทดสอบอยู่ระหว่างวางแผน ยังไม่เสร็จ</p>
<p>ก่อนจะมีรายงานนั้น โปรดปฏิบัติ: วางอุปกรณ์ห่าง 50–70 ซม. ไม่ใกล้กว่านี้; อย่าเอาตาเข้าใกล้ไฟและจ้อง; อย่าใช้นานเกินจำเป็น; หากตาล้า ตาแห้ง ไม่สบาย หรือมีข้อกังวลใด ให้หยุดทันทีและแจ้งทีมงาน ผู้ที่มีโรคตา เพิ่งผ่าตัดตา หรือไวต่อแสง ควรปรึกษาแพทย์ก่อน</p>`],
      ["การติดตั้ง", `<p>ต้องใช้คอมพิวเตอร์ Windows 10 หรือ 11 (64 บิต) ช่อง USB ว่าง 2 ช่อง (กล้องและสายควบคุม) และลำโพงที่มีเสียง ไม่ต้องใช้รหัสผู้ดูแลระบบ</p>
<ol><li>ดาวน์โหลดตัวติดตั้งด้วยปุ่มด้านบนแล้วเรียกใช้</li>
<li>หากขึ้นหน้าจอสีน้ำเงิน “Windows protected your PC”: คลิก <strong>More info → Run anyway</strong></li>
<li>หากขึ้น “Smart App Control has blocked this app” (เครื่อง Windows 11 ใหม่): ไปที่ Settings → Privacy & security → Windows Security → App & browser control → Smart App Control เลือก <strong>Off</strong> แล้วติดตั้งใหม่</li>
<li>ครั้งแรกคอมพิวเตอร์ต้องต่ออินเทอร์เน็ตหนึ่งครั้ง: กดปุ่มในโปรแกรมเพื่อติดตั้งไดรเวอร์กล่องควบคุม</li>
<li>เมื่อมีเวอร์ชันใหม่ โปรแกรมจะแจ้งด้านบน กด “ดาวน์โหลดและติดตั้ง” การอัปเกรดไม่ลบการตั้งค่าของคุณ</li></ol>
<p>ตัวติดตั้งยังไม่มีลายเซ็นดิจิทัล (กำลังขอใบรับรอง) ขั้นตอนที่ 2 และ 3 จึงเป็นเรื่องปกติ ดาวน์โหลดจากหน้านี้หรือหน้า Releases บน GitHub เท่านั้น</p>`],
      ["โครงการและทีมงาน", `<p>สนับสนุนโดยโครงการปี 2026 “กริ่งเรียกควบคุมด้วยสายตาสำหรับสมาคม MND” ความร่วมมือระหว่าง<strong>มหาวิทยาลัยแห่งชาติไทเป</strong> (ห้องปฏิบัติการ SMSPL ภาควิชาวิศวกรรมการสื่อสาร) กับ<strong>สมาคมผู้ป่วยโรคเซลล์ประสาทสั่งการแห่งไต้หวัน</strong> หัวหน้าโครงการ: ศ. Chen-Yu Chiang (江振宇) รายชื่อทีมงานทั้งหมดอยู่ในหน้าภาษาจีน</p>`],
      ["ติดต่อ", `<ul><li><strong>ด้านเทคนิคและความร่วมมือ</strong>: ศ. Chen-Yu Chiang มหาวิทยาลัยแห่งชาติไทเป — <a href="mailto:cychiang@mail.ntpu.edu.tw">cychiang@mail.ntpu.edu.tw</a></li>
<li><strong>ผู้ป่วยสมัครทดลองใช้</strong>: สมาคมผู้ป่วยโรคเซลล์ประสาทสั่งการแห่งไต้หวัน</li>
<li><strong>ปัญหาซอฟต์แวร์</strong>: ส่งอีเมลพร้อมไฟล์บันทึก (callbell.log ในโฟลเดอร์โปรแกรม) เวลา และเหตุการณ์</li></ul>
<p>สถานะ: เวอร์ชันทดลองที่กำลังทดสอบใช้งานจริง เป็นอุปกรณ์ช่วยเรียกคน <strong>ไม่ใช่เครื่องมือแพทย์</strong> และไม่ทดแทนการดูแลและตรวจเยี่ยมโดยคน คำแปลยังไม่ผ่านการตรวจจากเจ้าของภาษา — โปรดแจ้งข้อผิดพลาด</p>`]
    ]
  },
  "km": {
    name: "ខ្មែរ",
    title: "CRCL-BELL កណ្ដឹងហៅបញ្ជាដោយភ្នែក (អ៊ីនហ្វ្រារ៉េដ)",
    download: "កម្មវិធី Windows", download_btn: "ទាញយកកម្មវិធីដំឡើង", releases: "កំណែទាំងអស់",
    sections: [
      ["នេះជាអ្វី", `<p>ជាមួយជំងឺណឺរ៉ូនចលនា រាងកាយបន្តិចម្ដងៗលែងស្ដាប់បញ្ជា៖ ការនិយាយ និងការចុចកណ្ដឹងកាន់តែពិបាកពីមួយថ្ងៃទៅមួយថ្ងៃ ខណៈភ្នែកជាធម្មតានៅអាចមើលបាន។ ពេលថ្ងៃមានមនុស្សនៅក្បែរ ឃើញតម្រូវការបាន ប៉ុន្តែពេលយប់ គ្រួសារក៏ត្រូវគេងដែរ ហើយអ្នកជំងឺដែលចង់ក្រឡាប់ខ្លួន មិនស្រួលខ្លួន ឬត្រូវការនរណាម្នាក់ ច្រើនតែបានត្រឹមរង់ចាំ។ យើងបង្កើតកណ្ដឹងហៅនេះសម្រាប់ពេលយប់៖ អ្នកជំងឺមើលភ្លើង កណ្ដឹងក៏ហៅមនុស្សមក។ ភ្លើងជាអ៊ីនហ្វ្រារ៉េដជិត — មើលឃើញតែចំណុចក្រហមស្រអាប់បីប៉ុណ្ណោះ បន្ទប់នៅតែងងឹត គ្មាននរណាម្នាក់រំខានដំណេកឡើយ ហើយចំណុចទាំងបីនោះក៏ជាគោលដៅដែលអ្នកជំងឺត្រូវមើលដែរ។ ការតម្លើងគ្រាន់តែធ្វើតាមការណែនាំលើអេក្រង់ដើម្បីតម្រង់ និងផ្ដោតកាមេរ៉ា អ្នកជំងឺហាត់ «ភ្លើងស្ដាំ រួចភ្លើងឆ្វេង» ពីរបីដង ក៏ស្ទាត់ — ដើម្បីឲ្យទាំងអ្នកជំងឺ និងគ្រួសារគេងបានស្រួល។</p>
<ul><li>ឧបករណ៍ជាប្រអប់តូចមួយតោងនៅគែមគ្រែ ឬតុ ចម្ងាយ ៥០–៧០ សង់ទីម៉ែត្រពីភ្នែកអ្នកជំងឺ មានភ្លើងអ៊ីនហ្វ្រារ៉េដជិត ៣ (ឃើញតែចំណុចក្រហមស្រអាប់) និងកាមេរ៉ាមួយ។</li>
<li>អ្នកជំងឺ<strong>មើលភ្លើងតាមលំដាប់</strong> (លំនាំដើម៖ ស្ដាំមុន រួចឆ្វេង មួយៗប្រហែលមួយវិនាទី) កុំព្យូទ័ររោទ៍។ លំដាប់ខុស ឬក្រឡេកមើលមិនធ្វើឲ្យរោទ៍ទេ។</li>
<li>មិនប៉ះអ្នកជំងឺ មិនបិទអ្វីលើខ្លួន អ្នកផ្សេងអាចប្រើបានភ្លាម។</li>
<li>ត្រូវការតែកុំព្យូទ័រ Windows មួយ និងប្រអប់នេះ។</li></ul>`],
      ["សម្រាប់អ្នកណា និងទទួលបានដោយរបៀបណា", `<p>ត្រូវបានអភិវឌ្ឍសម្រាប់អ្នកជំងឺនៃ<strong>សមាគមអ្នកជំងឺជំងឺណឺរ៉ូនចលនានៃតៃវ៉ាន់</strong>។ ឈុតដំបូងត្រូវបានឲ្យអ្នកជំងឺខ្ចីប្រើតាមរយៈសមាគម។</p>
<ul><li><strong>អ្នកជំងឺ និងគ្រួសារ</strong>៖ ទាក់ទងសមាគមដើម្បីស្នើសុំសាកល្បង សមាគមរៀបចំឧបករណ៍ ការបង្រៀន និងការប្រមូលមតិ។</li>
<li><strong>មណ្ឌលថែទាំ ឬអ្នកស្រាវជ្រាវផ្សេង</strong>៖ សរសេរអ៊ីមែលមកយើង (មើលទំនាក់ទំនង)។ នេះនៅជាកំណែសាកល្បងដែលកំពុងត្រូវបានសាកល្បងជាក់ស្ដែង មិនទាន់ផ្ដល់ជូនជាទូទៅទេ។</li>
<li><strong>កម្មវិធី</strong>៖ ប្រើប៊ូតុងទាញយកខាងលើ។ គ្មានប្រអប់ក៏អាចបើកមើលចំណុចប្រទាក់បាន។</li></ul>`],
      ["ដំណើរការយ៉ាងដូចម្ដេច", `<p>ភ្លើងអ៊ីនហ្វ្រារ៉េដ ៣ ភ្លឹបភ្លែតៗឆ្លាស់គ្នា។ កាមេរ៉ាដករូបនីមួយៗចេញពីរូបមុន នៅសល់តែចំណុចឆ្លុះ ៣ នៃភ្លើងនៅលើកែវភ្នែក ដែលបង្កើតជាត្រីកោណតូចមួយ។ កូនភ្នែកត្រូវបានរកឃើញដោយឧបករណ៍រកឃើញរង្វង់។ ចំណុចឆ្លុះណាដែលនៅជិតចំណុចកណ្ដាលកូនភ្នែកបំផុត នោះជាភ្លើងដែលកំពុងមើល ត្រូវមើលប្រហែលមួយវិនាទីទើបរាប់។ បើមើលត្រូវលំដាប់ កណ្ដឹងរោទ៍ បើមិនមើលភ្លើងបន្ទាប់ក្នុងរយៈពេលពីរបីវិនាទី ការព្យាយាមនោះត្រូវបានលុបចោល ដើម្បីជៀសវាងការរោទ៍ខុស។</p>
<p>កម្មវិធីដំណើរការផ្ទាល់លើ Windows ដោយមានភាសាចំណុចប្រទាក់ ១០៖ ចិនបុរាណ អង់គ្លេស វៀតណាម ឥណ្ឌូនេស៊ី ម៉ាឡេ ហ្វីលីពីន ថៃ ខ្មែរ ភូមា និងឡាវ។</p>`],
      ["សុវត្ថិភាពអ៊ីនហ្វ្រារ៉េដ — សូមអាន", `<p>ឧបករណ៍ប្រើ LED អ៊ីនហ្វ្រារ៉េដជិត ជាពន្លឺប្រភេទដូចរីម៉ូតទូរទស្សន៍ មើលឃើញតែចំណុចក្រហមស្រអាប់បី។ រហូតមកដល់ពេលនេះ ក្រុមការងារ<strong>បានធ្វើតែការប៉ាន់ស្មានបឋមពីទិន្នន័យគ្រឿងបន្លាស់ និងការវាស់ដោយខ្លួនឯង</strong> លទ្ធផលបង្ហាញថានៅចម្ងាយ ៥០–៧០ សង់ទីម៉ែត្រ ការប៉ះពាល់ទាបជាងដែនកំណត់នៃស្តង់ដារ IEC 62471។ <strong>នេះមិនមែនជាវិញ្ញាបនបត្រសុវត្ថិភាពផ្លូវការទេ។</strong> ការធ្វើតេស្តឧបករណ៍ទាំងមូលដោយមន្ទីរពិសោធន៍ឯករាជ្យកំពុងត្រូវបានគ្រោង មិនទាន់រួចរាល់។</p>
<p>មុនពេលមានរបាយការណ៍នោះ៖ ដាក់ឧបករណ៍ចម្ងាយ ៥០–៧០ សង់ទីម៉ែត្រ កុំជិតជាងនេះ កុំយកភ្នែកទៅជិតភ្លើង ហើយសម្លឹង កុំប្រើយូរជាងចាំបាច់ បើភ្នែកអស់កម្លាំង ស្ងួត មិនស្រួល ឬមានការព្រួយបារម្ភ សូមឈប់ភ្លាម និងប្រាប់ក្រុមការងារ។ អ្នកមានជំងឺភ្នែក ទើបវះកាត់ភ្នែក ឬងាយប្រតិកម្មនឹងពន្លឺ គួរសួរគ្រូពេទ្យមុន។</p>`],
      ["ការដំឡើង", `<p>ត្រូវការកុំព្យូទ័រ Windows 10 ឬ 11 (64 ប៊ីត) រន្ធ USB ទំនេរ ២ (កាមេរ៉ា និងខ្សែបញ្ជា) និងឧបករណ៍បំពងសំឡេងដែលឮ។ មិនត្រូវការពាក្យសម្ងាត់អ្នកគ្រប់គ្រងទេ។</p>
<ol><li>ទាញយកកម្មវិធីដំឡើងដោយប៊ូតុងខាងលើ រួចដំណើរការ។</li>
<li>បើលេចអេក្រង់ពណ៌ខៀវ “Windows protected your PC”៖ ចុច <strong>More info → Run anyway</strong>។</li>
<li>បើលេច “Smart App Control has blocked this app” (កុំព្យូទ័រ Windows 11 ថ្មី)៖ ទៅ Settings → Privacy & security → Windows Security → App & browser control → Smart App Control ជ្រើស <strong>Off</strong> រួចដំឡើងម្ដងទៀត។</li>
<li>លើកដំបូង កុំព្យូទ័រត្រូវមានអ៊ីនធឺណិតម្ដង៖ ចុចប៊ូតុងក្នុងកម្មវិធីដើម្បីដំឡើងកម្មវិធីបញ្ជាប្រអប់បញ្ជា។</li>
<li>ពេលមានកំណែថ្មី កម្មវិធីបង្ហាញការជូនដំណឹងនៅខាងលើ ចុច «ទាញយក និងដំឡើង»។ ការធ្វើបច្ចុប្បន្នភាពរក្សាការកំណត់របស់អ្នក។</li></ol>
<p>កម្មវិធីដំឡើងមិនទាន់មានហត្ថលេខាឌីជីថលទេ (កំពុងស្នើសុំវិញ្ញាបនបត្រ) ដូច្នេះជំហាន ២ និង ៣ គឺធម្មតា។ ទាញយកតែពីទំព័រនេះ ឬទំព័រ Releases លើ GitHub ប៉ុណ្ណោះ។</p>`],
      ["គម្រោង និងក្រុមការងារ", `<p>គាំទ្រដោយគម្រោងឆ្នាំ 2026 «កណ្ដឹងហៅបញ្ជាដោយភ្នែកសម្រាប់សមាគម MND» ជាកិច្ចសហការរវាង<strong>សាកលវិទ្យាល័យជាតិតៃប៉ិ</strong> (មន្ទីរពិសោធន៍ SMSPL នាយកដ្ឋានវិស្វកម្មទូរគមនាគមន៍) និង<strong>សមាគមអ្នកជំងឺជំងឺណឺរ៉ូនចលនានៃតៃវ៉ាន់</strong>។ ប្រធានគម្រោង៖ សាស្ត្រាចារ្យ Chen-Yu Chiang (江振宇) បញ្ជីក្រុមការងារពេញលេញមាននៅកំណែភាសាចិននៃទំព័រនេះ។</p>`],
      ["ទំនាក់ទំនង", `<ul><li><strong>បច្ចេកទេស និងកិច្ចសហការ</strong>៖ សាស្ត្រាចារ្យ Chen-Yu Chiang សាកលវិទ្យាល័យជាតិតៃប៉ិ — <a href="mailto:cychiang@mail.ntpu.edu.tw">cychiang@mail.ntpu.edu.tw</a></li>
<li><strong>អ្នកជំងឺស្នើសុំសាកល្បង</strong>៖ សមាគមអ្នកជំងឺជំងឺណឺរ៉ូនចលនានៃតៃវ៉ាន់។</li>
<li><strong>បញ្ហាកម្មវិធី</strong>៖ ផ្ញើអ៊ីមែលជាមួយឯកសារកំណត់ហេតុ (callbell.log ក្នុងថតកម្មវិធី) ពេលវេលា និងអ្វីដែលបានកើតឡើង។</li></ul>
<p>ស្ថានភាព៖ កំណែសាកល្បងកំពុងសាកល្បងជាក់ស្ដែង ជាឧបករណ៍ជំនួយហៅមនុស្ស <strong>មិនមែនឧបករណ៍វេជ្ជសាស្ត្រ</strong> មិនជំនួសការថែទាំ និងការត្រួតពិនិត្យដោយមនុស្សទេ។ ការបកប្រែមិនទាន់ត្រូវបានពិនិត្យដោយអ្នកនិយាយភាសាកំណើត — សូមរាយការណ៍កំហុស។</p>`]
    ]
  },
  "my": {
    name: "မြန်မာ",
    title: "CRCL-BELL အနီအောက်ရောင်ခြည် မျက်လုံးထိန်း ခေါ်ခေါင်းလောင်း",
    download: "Windows ဆော့ဖ်ဝဲ", download_btn: "သွင်းယူဖိုင် ဒေါင်းလုဒ်", releases: "ဗားရှင်းအားလုံး",
    sections: [
      ["ဒါက ဘာလဲ", `<p>မော်တာ နယူရွန် ရောဂါကြောင့် ခန္ဓာကိုယ်သည် တဖြည်းဖြည်း အမိန့်ကို မလိုက်နာတော့ပါ— စကားပြောခြင်းနှင့် ခေါင်းလောင်း နှိပ်ခြင်းသည် တစ်နေ့ထက်တစ်နေ့ ပိုခက်လာပြီး မျက်လုံးကတော့ များသောအားဖြင့် ကြည့်နိုင်နေဆဲ ဖြစ်သည်။ နေ့ခင်း အနီးတွင် လူရှိ၍ လိုအပ်ချက်ကို မြင်နိုင်သေးသော်လည်း ညတွင် မိသားစုလည်း အိပ်ရမည်ဖြစ်ရာ လူနာက လှည့်အိပ်ချင်၊ မသက်မသာ ဖြစ်၊ လူခေါ်ချင်လျှင် စောင့်ရုံသာ ဖြစ်တတ်သည်။ ဤခေါ်ခေါင်းလောင်းကို ညအတွက် ပြုလုပ်ထားသည်— လူနာက မီးကို ကြည့်လျှင် ခေါင်းလောင်းက လူကို ခေါ်ပေးသည်။ မီးသည် အနီးကပ် အနီအောက်ရောင်ခြည် ဖြစ်၍ မှိန်သော အနီရောင် အစက်သုံးစက်သာ မြင်ရပြီး အခန်း မှောင်နေဆဲ၊ မည်သူ့ အိပ်စက်မှုကိုမျှ မနှောင့်ယှက်ပါ။ ထိုအစက်သုံးစက်သည် လူနာ ကြည့်ရမည့် ပစ်မှတ်လည်း ဖြစ်သည်။ တပ်ဆင်ရာတွင် မျက်နှာပြင် လမ်းညွှန်ချက်အတိုင်း ကင်မရာကို ချိန်၍ ကြည်အောင် လုပ်ရုံ၊ လူနာက “ညာမီး ပြီးမှ ဘယ်မီး” ကို အကြိမ်အနည်းငယ် လေ့ကျင့်လျှင် မကြာမီ ကျွမ်းကျင်သွားသည်— လူနာရော မိသားစုပါ စိတ်ချလက်ချ အိပ်နိုင်စေရန်။</p>
<ul><li>ကိရိယာသည် ကုတင်ဘေး သို့မဟုတ် စားပွဲဘေးတွင် ညှပ်ထားသော သေတ္တာငယ်၊ လူနာ၏ မျက်လုံးမှ 50–70 cm အကွာ၊ အနီးကပ် အနီအောက်ရောင်ခြည် မီးသုံးလုံး (မှိန်သော အနီရောင် အစက်သာ မြင်ရ) နှင့် ကင်မရာတစ်လုံး ပါသည်။</li>
<li>လူနာက <strong>မီးများကို အစဉ်လိုက် ကြည့်လျှင်</strong> (မူလ: ညာ အရင်၊ ပြီးမှ ဘယ်၊ တစ်လုံးလျှင် တစ်စက္ကန့်ခန့်) ကွန်ပျူတာ မြည်သည်။ အစဉ်မှားလျှင် သို့မဟုတ် ခပ်ပေါ့ပေါ့ ကြည့်ရုံဖြင့် မမြည်ပါ။</li>
<li>လူနာကို မထိ၊ ဘာမှ မကပ်၊ အခြားသူလည်း ချက်ချင်း သုံးနိုင်သည်။</li>
<li>Windows ကွန်ပျူတာတစ်လုံးနှင့် ဤသေတ္တာသာ လိုသည်။</li></ul>`],
      ["ဘယ်သူ့အတွက်လဲ၊ ဘယ်လို ရယူမလဲ", `<p><strong>ထိုင်ဝမ် မော်တာ နယူရွန် ရောဂါ အသင်း</strong> ၏ လူနာများအတွက် တီထွင်ထားသည်။ ပထမအသုတ်ကို အသင်းမှတစ်ဆင့် လူနာများအား ငှားရမ်းသည်။</p>
<ul><li><strong>လူနာနှင့် မိသားစု</strong>— စမ်းသုံးရန် အသင်းကို ဆက်သွယ်ပါ၊ အသင်းက ကိရိယာ၊ သင်ကြားမှုနှင့် တုံ့ပြန်ချက် စုဆောင်းမှုကို စီစဉ်ပေးသည်။</li>
<li><strong>အခြား ပြုစုစောင့်ရှောက်ရေး ဌာန သို့မဟုတ် သုတေသီ</strong>— ကျွန်ုပ်တို့ထံ အီးမေးလ် ပို့ပါ (ဆက်သွယ်ရန် ကြည့်ပါ)။ ယခုထိ လက်တွေ့ စမ်းသပ်နေဆဲ ဗားရှင်း ဖြစ်ပြီး အများပြည်သူအတွက် မပေးသေးပါ။</li>
<li><strong>ဆော့ဖ်ဝဲ</strong>— အပေါ်က ဒေါင်းလုဒ် ခလုတ်ကို သုံးပါ။ သေတ္တာ မရှိလည်း ဖွင့်၍ မျက်နှာပြင်ကို ကြည့်နိုင်သည်။</li></ul>`],
      ["ဘယ်လို အလုပ်လုပ်သလဲ", `<p>အနီအောက်ရောင်ခြည် မီးသုံးလုံး အလှည့်ကျ မှိတ်တုတ်သည်။ ကင်မရာက ပုံတစ်ပုံချင်းကို ယခင်ပုံနှင့် နုတ်သဖြင့် မျက်ကြည်လွှာပေါ်ရှိ မီး၏ အလင်းပြန်စက် သုံးစက်သာ ကျန်ပြီး တြိဂံငယ်တစ်ခု ဖြစ်သည်။ မျက်ဆံကို စက်ဝိုင်း ရှာဖွေစနစ်ဖြင့် ရှာသည်။ မျက်ဆံ ဗဟိုနှင့် အနီးဆုံး အလင်းပြန်စက်သည် ကြည့်နေသော မီး ဖြစ်ပြီး တစ်စက္ကန့်ခန့် ကြည့်မှ ရေတွက်သည်။ အစဉ်မှန်လျှင် ခေါင်းလောင်း မြည်သည်၊ စက္ကန့်အနည်းငယ်အတွင်း နောက်မီးကို မကြည့်လျှင် မှားမြည်ခြင်း ရှောင်ရန် ပယ်ဖျက်သည်။</p>
<p>ပရိုဂရမ်သည် Windows ပေါ် တိုက်ရိုက် လည်ပတ်ပြီး မျက်နှာပြင် ဘာသာစကား ၁၀ မျိုး ရှိသည်— ရိုးရာတရုတ်၊ အင်္ဂလိပ်၊ ဗီယက်နမ်၊ အင်ဒိုနီးရှား၊ မလေး၊ ဖိလစ်ပိုင်၊ ထိုင်း၊ ခမာ၊ မြန်မာနှင့် လာအို။</p>`],
      ["အနီအောက်ရောင်ခြည် ဘေးကင်းမှု — ကျေးဇူးပြု၍ ဖတ်ပါ", `<p>ကိရိယာသည် တီဗီ ရီမုတ်နှင့် အမျိုးအစားတူ အနီးကပ် အနီအောက်ရောင်ခြည် LED ကို သုံးပြီး မှိန်သော အနီရောင် အစက်သုံးစက်သာ မြင်ရသည်။ ယခုအထိ အဖွဲ့သည် <strong>အစိတ်အပိုင်း ဒေတာမှ ကနဦး ခန့်မှန်းချက်နှင့် ကိုယ်တိုင် တိုင်းတာမှုသာ</strong> ပြုလုပ်ထားပြီး 50–70 cm အကွာတွင် ထိတွေ့မှုသည် IEC 62471 စံနှုန်း ကန့်သတ်ချက်အောက် ရှိကြောင်း ပြသည်။ <strong>ဤသည် တရားဝင် ဘေးကင်းမှု အသိအမှတ်ပြုချက် မဟုတ်ပါ။</strong> ကိရိယာတစ်ခုလုံးကို လွတ်လပ်သော ဓာတ်ခွဲခန်းက စမ်းသပ်ရန် စီစဉ်နေပြီး မပြီးသေးပါ။</p>
<p>ထိုအစီရင်ခံစာ မရမီ— ကိရိယာကို 50–70 cm တွင် ထားပါ၊ ပိုမနီးပါစေနှင့်၊ မျက်လုံးကို မီးနှင့် ကပ်၍ မစိုက်ကြည့်ပါနှင့်၊ လိုအပ်သည်ထက် ပိုကြာကြာ မသုံးပါနှင့်၊ မျက်လုံး ပင်ပန်း၊ ခြောက်၊ မသက်မသာ ဖြစ်လျှင် သို့မဟုတ် စိုးရိမ်စရာ ရှိလျှင် ချက်ချင်း ရပ်ပြီး အဖွဲ့ကို ပြောပါ။ မျက်စိရောဂါ ရှိသူ၊ မျက်စိ ခွဲစိတ်ပြီးခါစ သို့မဟုတ် အလင်းနှင့် မတည့်သူများ ဆရာဝန်ကို အရင် မေးပါ။</p>`],
      ["သွင်းယူခြင်း", `<p>Windows 10 သို့မဟုတ် 11 (64-bit) ကွန်ပျူတာ၊ အလွတ် USB ပေါက် ၂ ခု (ကင်မရာနှင့် ထိန်းချုပ်ကြိုး)၊ အသံထွက်သော စပီကာ လိုသည်။ စီမံခန့်ခွဲသူ စကားဝှက် မလိုပါ။</p>
<ol><li>အပေါ်က ခလုတ်ဖြင့် သွင်းယူဖိုင်ကို ဒေါင်းလုဒ်လုပ်ပြီး ဖွင့်ပါ။</li>
<li>အပြာရောင် “Windows protected your PC” ပေါ်လျှင်— <strong>More info → Run anyway</strong> ကို နှိပ်ပါ။</li>
<li>“Smart App Control has blocked this app” ပေါ်လျှင် (Windows 11 စက်သစ်)— Settings → Privacy & security → Windows Security → App & browser control → Smart App Control သို့ သွား၍ <strong>Off</strong> ရွေးပြီး ပြန်သွင်းပါ။</li>
<li>ပထမအကြိမ် ကွန်ပျူတာ အင်တာနက် တစ်ကြိမ် လိုသည်— ပရိုဂရမ်ထဲက ခလုတ်ကို နှိပ်၍ ထိန်းချုပ်သေတ္တာ ဒရိုက်ဗာ သွင်းပါ။</li>
<li>ဗားရှင်းအသစ် ရှိလျှင် ပရိုဂရမ် ထိပ်တွင် အသိပေးသည်၊ “ဒေါင်းလုဒ်လုပ်ပြီး သွင်း” ကို နှိပ်ပါ။ အဆင့်မြှင့်ခြင်းသည် ဆက်တင်များကို မဖျက်ပါ။</li></ol>
<p>သွင်းယူဖိုင်တွင် ဒစ်ဂျစ်တယ် လက်မှတ် မရှိသေးပါ (လက်မှတ် လျှောက်ထားဆဲ) ထို့ကြောင့် အဆင့် ၂ နှင့် ၃ သည် ပုံမှန် ဖြစ်သည်။ ဤစာမျက်နှာ သို့မဟုတ် GitHub Releases စာမျက်နှာမှသာ ဒေါင်းလုဒ်လုပ်ပါ။</p>`],
      ["စီမံကိန်းနှင့် အဖွဲ့", `<p>2026 ခုနှစ် “MND အသင်းအတွက် မျက်လုံးထိန်း ခေါ်ခေါင်းလောင်း” စီမံကိန်းက ထောက်ပံ့ပြီး <strong>အမျိုးသား တိုင်ပေ တက္ကသိုလ်</strong> (SMSPL ဓာတ်ခွဲခန်း၊ ဆက်သွယ်ရေး အင်ဂျင်နီယာဌာန) နှင့် <strong>ထိုင်ဝမ် မော်တာ နယူရွန် ရောဂါ အသင်း</strong> ပူးပေါင်းဆောင်ရွက်သည်။ အဓိက သုတေသီ— ပါမောက္ခ Chen-Yu Chiang (江振宇)၊ အဖွဲ့ စာရင်းအပြည့်အစုံကို ဤစာမျက်နှာ၏ တရုတ်ဘာသာ ဗားရှင်းတွင် ကြည့်ပါ။</p>`],
      ["ဆက်သွယ်ရန်", `<ul><li><strong>နည်းပညာနှင့် ပူးပေါင်းဆောင်ရွက်မှု</strong>— ပါမောက္ခ Chen-Yu Chiang၊ အမျိုးသား တိုင်ပေ တက္ကသိုလ် — <a href="mailto:cychiang@mail.ntpu.edu.tw">cychiang@mail.ntpu.edu.tw</a></li>
<li><strong>စမ်းသုံးရန် လျှောက်ထားသော လူနာများ</strong>— ထိုင်ဝမ် မော်တာ နယူရွန် ရောဂါ အသင်း။</li>
<li><strong>ဆော့ဖ်ဝဲ ပြဿနာ</strong>— မှတ်တမ်းဖိုင် (ပရိုဂရမ် ဖိုင်တွဲထဲက callbell.log)၊ အချိန်နှင့် ဖြစ်ပျက်ချက်ကို အီးမေးလ် ပို့ပါ။</li></ul>
<p>အခြေအနေ— လက်တွေ့ စမ်းသပ်ဆဲ ဗားရှင်း၊ လူခေါ်ရန် အထောက်အကူ ကိရိယာ ဖြစ်ပြီး <strong>ဆေးဘက်ဆိုင်ရာ ကိရိယာ မဟုတ်ပါ</strong>၊ လူ၏ ပြုစုစောင့်ရှောက်မှုနှင့် စစ်ဆေးမှုကို အစားမထိုးပါ။ ဘာသာပြန်ကို မိခင်ဘာသာစကား ပြောသူများ မစစ်ဆေးရသေးပါ — အမှားများကို သတင်းပို့ပါ။</p>`]
    ]
  },
  "lo": {
    name: "ລາວ",
    title: "CRCL-BELL ກະດິ່ງເອີ້ນຄົນຄວບຄຸມດ້ວຍສາຍຕາ (ອິນຟຣາເຣດ)",
    download: "ຊອບແວ Windows", download_btn: "ດາວໂຫຼດຕົວຕິດຕັ້ງ", releases: "ທຸກເວີຊັນ",
    sections: [
      ["ນີ້ແມ່ນຫຍັງ", `<p>ພະຍາດເຊລປະສາດສັ່ງການເຮັດໃຫ້ຮ່າງກາຍຄ່ອຍໆ ບໍ່ເຮັດຕາມໃຈສັ່ງ: ການເວົ້າແລະການກົດກະດິ່ງຍາກຂຶ້ນທຸກມື້ ແຕ່ຕາມັກຍັງເບິ່ງໄດ້. ກາງເວັນມີຄົນຢູ່ໃກ້ ຍັງເຫັນວ່າຕ້ອງການຫຍັງ ແຕ່ກາງຄືນຄອບຄົວກໍຕ້ອງນອນ ຄົນເຈັບທີ່ຢາກພິກຕົວ ບໍ່ສະບາຍ ຫຼືຢາກເອີ້ນໃຜ ມັກເຮັດໄດ້ແຕ່ລໍຖ້າ. ພວກເຮົາສ້າງກະດິ່ງເອີ້ນນີ້ຂຶ້ນເພື່ອກາງຄືນ: ຄົນເຈັບເບິ່ງໄຟ ກະດິ່ງກໍເອີ້ນຄົນມາ. ໄຟເປັນອິນຟຣາເຣດໃກ້ — ເຫັນພຽງຈຸດແດງຈາງໆ ສາມຈຸດ ຫ້ອງຍັງມືດ ບໍ່ລົບກວນການນອນຂອງໃຜ ແລະສາມຈຸດນັ້ນກໍຄືເປົ້າທີ່ຄົນເຈັບຕ້ອງເບິ່ງພໍດີ. ການຕິດຕັ້ງພຽງເຮັດຕາມຄຳແນະນຳເທິງໜ້າຈໍເພື່ອເລັງແລະປັບໂຟກັສກ້ອງ ຄົນເຈັບຝຶກ “ໄຟຂວາ ແລ້ວໄຟຊ້າຍ” ສອງສາມເທື່ອກໍຄ່ອງ — ເພື່ອໃຫ້ທັງຄົນເຈັບແລະຄອບຄົວນອນຫຼັບໄດ້ຢ່າງສະບາຍໃຈ.</p>
<ul><li>ອຸປະກອນເປັນກ່ອງນ້ອຍໆ ໜີບໄວ້ຂອບຕຽງຫຼືໂຕະ ຫ່າງຈາກຕາຄົນເຈັບ 50–70 ຊມ ມີໄຟອິນຟຣາເຣດໃກ້ 3 ດວງ (ເຫັນພຽງຈຸດແດງຈາງໆ) ແລະກ້ອງໜຶ່ງໜ່ວຍ.</li>
<li>ຄົນເຈັບ<strong>ເບິ່ງໄຟຕາມລຳດັບ</strong> (ຄ່າເລີ່ມຕົ້ນ: ຂວາກ່ອນ ແລ້ວຊ້າຍ ດວງລະປະມານໜຶ່ງວິນາທີ) ຄອມພິວເຕີຈະດັງ. ເບິ່ງຜິດລຳດັບຫຼືເບິ່ງຜ່ານໆ ຈະບໍ່ດັງ.</li>
<li>ບໍ່ແຕະຕົວຄົນເຈັບ ບໍ່ຕ້ອງຕິດຫຍັງ ປ່ຽນຄົນກໍໃຊ້ໄດ້ທັນທີ.</li>
<li>ໃຊ້ພຽງຄອມພິວເຕີ Windows ໜຶ່ງເຄື່ອງກັບກ່ອງນີ້.</li></ul>`],
      ["ສຳລັບໃຜ ແລະຂໍຮັບໄດ້ແນວໃດ", `<p>ພັດທະນາຂຶ້ນສຳລັບຄົນເຈັບຂອງ<strong>ສະມາຄົມພະຍາດເຊລປະສາດສັ່ງການແຫ່ງໄຕ້ຫວັນ</strong>. ຊຸດທຳອິດໃຫ້ຄົນເຈັບຢືມໃຊ້ຜ່ານສະມາຄົມ.</p>
<ul><li><strong>ຄົນເຈັບແລະຄອບຄົວ</strong>: ຕິດຕໍ່ສະມາຄົມເພື່ອສະໝັກທົດລອງໃຊ້; ສະມາຄົມຈັດອຸປະກອນ ສອນການໃຊ້ ແລະຮັບຟັງຄຳເຫັນ.</li>
<li><strong>ສະຖານດູແລຫຼືນັກຄົ້ນຄວ້າອື່ນ</strong>: ສົ່ງອີເມວຫາພວກເຮົາ (ເບິ່ງຕິດຕໍ່). ຍັງເປັນເວີຊັນທົດລອງທີ່ກຳລັງທົດສອບໃຊ້ແທ້ ຍັງບໍ່ເປີດໃຫ້ທົ່ວໄປ.</li>
<li><strong>ຊອບແວ</strong>: ໃຊ້ປຸ່ມດາວໂຫຼດຂ້າງເທິງ. ບໍ່ມີກ່ອງກໍເປີດເບິ່ງໜ້າຈໍໄດ້.</li></ul>`],
      ["ເຮັດວຽກແນວໃດ", `<p>ໄຟອິນຟຣາເຣດ 3 ດວງກະພິບສະຫຼັບກັນ. ກ້ອງເອົາພາບແຕ່ລະພາບລົບກັບພາບກ່ອນ ຈຶ່ງເຫຼືອແຕ່ຈຸດສະທ້ອນຂອງໄຟ 3 ຈຸດເທິງກະຈົກຕາ ເປັນສາມຫຼ່ຽມນ້ອຍໆ. ຮູມ່ານຕາຖືກຊອກດ້ວຍຕົວກວດຈັບວົງມົນ. ຈຸດສະທ້ອນທີ່ໃກ້ໃຈກາງຮູມ່ານຕາທີ່ສຸດຄືໄຟທີ່ກຳລັງເບິ່ງ ຕ້ອງເບິ່ງປະມານໜຶ່ງວິນາທີຈຶ່ງນັບ. ເບິ່ງຖືກລຳດັບ ກະດິ່ງຈະດັງ; ຖ້າບໍ່ເບິ່ງໄຟດວງຕໍ່ໄປພາຍໃນສອງສາມວິນາທີ ຄັ້ງນັ້ນຈະຖືກຍົກເລີກເພື່ອປ້ອງກັນການດັງຜິດ.</p>
<p>ໂປຣແກຣມແລ່ນເທິງ Windows ໂດຍກົງ ມີພາສາໜ້າຈໍ 10 ພາສາ: ຈີນຕົວເຕັມ ອັງກິດ ຫວຽດນາມ ອິນໂດເນເຊຍ ມາເລ ຟີລິບປິນ ໄທ ຂະເໝນ ມຽນມາ ແລະລາວ.</p>`],
      ["ຄວາມປອດໄພຂອງອິນຟຣາເຣດ — ກະລຸນາອ່ານ", `<p>ອຸປະກອນໃຊ້ LED ອິນຟຣາເຣດໃກ້ ເປັນແສງຊະນິດດຽວກັບຣີໂໝດໂທລະທັດ ເຫັນພຽງຈຸດແດງຈາງໆ ສາມຈຸດ. ຈົນເຖິງຕອນນີ້ ທີມງານ<strong>ເຮັດພຽງການປະເມີນເບື້ອງຕົ້ນຈາກຂໍ້ມູນຊິ້ນສ່ວນແລະການວັດເອງ</strong>; ຜົນສະແດງວ່າທີ່ໄລຍະ 50–70 ຊມ ການຮັບແສງຕ່ຳກວ່າຂີດຈຳກັດຂອງມາດຕະຖານ IEC 62471. <strong>ນີ້ຍັງບໍ່ແມ່ນການຢັ້ງຢືນຄວາມປອດໄພຢ່າງເປັນທາງການ.</strong> ການສົ່ງອຸປະກອນທັງຊຸດໃຫ້ຫ້ອງທົດລອງອິດສະຫຼະທົດສອບກຳລັງວາງແຜນ ຍັງບໍ່ສຳເລັດ.</p>
<p>ກ່ອນຈະມີບົດລາຍງານນັ້ນ: ວາງອຸປະກອນຫ່າງ 50–70 ຊມ ບໍ່ໃກ້ກວ່ານີ້; ຢ່າເອົາຕາເຂົ້າໃກ້ໄຟແລ້ວຈ້ອງ; ຢ່າໃຊ້ດົນເກີນຈຳເປັນ; ຖ້າຕາເມື່ອຍ ຕາແຫ້ງ ບໍ່ສະບາຍ ຫຼືມີຄວາມກັງວົນໃດ ໃຫ້ຢຸດທັນທີແລະແຈ້ງທີມງານ. ຜູ້ມີພະຍາດຕາ ຫາກໍຜ່າຕັດຕາ ຫຼືໄວຕໍ່ແສງ ຄວນປຶກສາແພດກ່ອນ.</p>`],
      ["ການຕິດຕັ້ງ", `<p>ຕ້ອງໃຊ້ຄອມພິວເຕີ Windows 10 ຫຼື 11 (64 ບິດ) ຊ່ອງ USB ຫວ່າງ 2 ຊ່ອງ (ກ້ອງແລະສາຍຄວບຄຸມ) ແລະລຳໂພງທີ່ມີສຽງ. ບໍ່ຕ້ອງໃຊ້ລະຫັດຜູ້ບໍລິຫານ.</p>
<ol><li>ດາວໂຫຼດຕົວຕິດຕັ້ງດ້ວຍປຸ່ມຂ້າງເທິງ ແລ້ວແລ່ນ.</li>
<li>ຖ້າຂຶ້ນໜ້າຈໍສີຟ້າ “Windows protected your PC”: ກົດ <strong>More info → Run anyway</strong>.</li>
<li>ຖ້າຂຶ້ນ “Smart App Control has blocked this app” (ເຄື່ອງ Windows 11 ໃໝ່): ໄປ Settings → Privacy & security → Windows Security → App & browser control → Smart App Control ເລືອກ <strong>Off</strong> ແລ້ວຕິດຕັ້ງໃໝ່.</li>
<li>ຄັ້ງທຳອິດ ຄອມພິວເຕີຕ້ອງຕໍ່ອິນເຕີເນັດໜຶ່ງຄັ້ງ: ກົດປຸ່ມໃນໂປຣແກຣມເພື່ອຕິດຕັ້ງໄດຣເວີກ່ອງຄວບຄຸມ.</li>
<li>ເມື່ອມີເວີຊັນໃໝ່ ໂປຣແກຣມຈະແຈ້ງຢູ່ເທິງ ກົດ “ດາວໂຫຼດແລະຕິດຕັ້ງ”. ການອັບເກຣດບໍ່ລຶບການຕັ້ງຄ່າຂອງທ່ານ.</li></ol>
<p>ຕົວຕິດຕັ້ງຍັງບໍ່ມີລາຍເຊັນດິຈິຕອນ (ກຳລັງຂໍໃບຢັ້ງຢືນ) ຂັ້ນຕອນ 2 ແລະ 3 ຈຶ່ງເປັນເລື່ອງປົກກະຕິ. ດາວໂຫຼດຈາກໜ້ານີ້ຫຼືໜ້າ Releases ເທິງ GitHub ເທົ່ານັ້ນ.</p>`],
      ["ໂຄງການແລະທີມງານ", `<p>ສະໜັບສະໜູນໂດຍໂຄງການປີ 2026 “ກະດິ່ງເອີ້ນຄວບຄຸມດ້ວຍສາຍຕາສຳລັບສະມາຄົມ MND” ຄວາມຮ່ວມມືລະຫວ່າງ<strong>ມະຫາວິທະຍາໄລແຫ່ງຊາດໄທເປ</strong> (ຫ້ອງທົດລອງ SMSPL ພາກວິຊາວິສະວະກຳການສື່ສານ) ກັບ<strong>ສະມາຄົມພະຍາດເຊລປະສາດສັ່ງການແຫ່ງໄຕ້ຫວັນ</strong>. ຫົວໜ້າໂຄງການ: ສຈ. Chen-Yu Chiang (江振宇); ລາຍຊື່ທີມງານເຕັມຢູ່ໃນໜ້າພາສາຈີນ.</p>`],
      ["ຕິດຕໍ່", `<ul><li><strong>ດ້ານເຕັກນິກແລະຄວາມຮ່ວມມື</strong>: ສຈ. Chen-Yu Chiang ມະຫາວິທະຍາໄລແຫ່ງຊາດໄທເປ — <a href="mailto:cychiang@mail.ntpu.edu.tw">cychiang@mail.ntpu.edu.tw</a></li>
<li><strong>ຄົນເຈັບສະໝັກທົດລອງໃຊ້</strong>: ສະມາຄົມພະຍາດເຊລປະສາດສັ່ງການແຫ່ງໄຕ້ຫວັນ.</li>
<li><strong>ບັນຫາຊອບແວ</strong>: ສົ່ງອີເມວພ້ອມໄຟລ໌ບັນທຶກ (callbell.log ໃນໂຟລເດີໂປຣແກຣມ) ເວລາ ແລະເຫດການ.</li></ul>
<p>ສະຖານະ: ເວີຊັນທົດລອງທີ່ກຳລັງທົດສອບໃຊ້ແທ້; ເປັນອຸປະກອນຊ່ວຍເອີ້ນຄົນ <strong>ບໍ່ແມ່ນອຸປະກອນການແພດ</strong> ແລະບໍ່ທົດແທນການດູແລແລະການກວດຂອງຄົນ. ຄຳແປຍັງບໍ່ຜ່ານການກວດຈາກເຈົ້າຂອງພາສາ — ກະລຸນາແຈ້ງຂໍ້ຜິດພາດ.</p>`]
    ]
  },
  "tet": {
    name: "Tetun",
    title: "CRCL-BELL sino bolu ho matan (infravermellu)",
    download: "Software Windows", download_btn: "Download instaladór", releases: "Versaun hotu",
    sections: [
      ["Ne'e saida", `<p>Ho moras neurón motor, isin neineik la tuir ona komandu: ko'alia no hanehan sino sai susar liu loron ba loron, maibé matan baibain sei bele haree. Loron nia laran iha ema besik ne'ebé haree presiza saida; kalan nia laran família mós tenke toba, no moras-na'in ne'ebé hakarak fila isin, sente la di'ak ka presiza ema dala barak bele de'it hein. Ami halo sino bolu ne'e ba kalan: moras-na'in haree ahi, no sino bolu ema mai. Ahi mak infravermellu besik — haree de'it pontu mean tolu ne'ebé la naroman, kuartu nafatin nakukun, no ema ida nia toba la perturba; pontu tolu ne'e mós mak buat ne'ebé moras-na'in haree. Instalasaun tuir de'it orientasaun iha ekrã atu hadia no foka kámara; moras-na'in treinu dala balu “ahi loos, depois ahi karuk” no lalais badinas — atu moras-na'in no família hotu bele toba hakmatek.</p>
<ul><li>Ekipamentu mak kaixa ki'ik ida kesi iha kama ka meza nia sorin, 50–70 cm iha moras-na'in nia matan oin, ho ahi infravermellu besik tolu (haree de'it pontu mean la naroman) no kámara ida.</li>
<li>Moras-na'in <strong>haree ahi tuir orden</strong> (padraun: loos uluk, depois karuk, kada ida segundu ida) no komputadór tanis. Orden sala ka haree lalais de'it la halo tanis.</li>
<li>La kona moras-na'in, la tau buat ruma iha isin; ema seluk bele uza kedas.</li>
<li>Presiza de'it komputadór Windows ida no kaixa ne'e.</li></ul>`],
      ["Ba sé no hetan oinsá", `<p>Dezenvolve ba moras-na'in sira husi <strong>Asosiasaun Moras Neurón Motor Taiwan</strong>. Unidade dahuluk sira empresta ba moras-na'in liu husi Asosiasaun.</p>
<ul><li><strong>Moras-na'in no família</strong>: kontaktu Asosiasaun atu husu koko; sira organiza ekipamentu, treinu no feedback.</li>
<li><strong>Sentru kuidadu ka peskizadór seluk</strong>: haruka email mai ami (haree Kontaktu). Ne'e sei versaun kandidatu ne'ebé koko hela iha terenu, seidauk disponível ba públiku.</li>
<li><strong>Software</strong>: uza butaun download iha leten. La ho kaixa mós bele loke atu haree interfase.</li></ul>`],
      ["Funsiona oinsá", `<p>Ahi infravermellu tolu lakan tuir malu. Kámara hasai imajen ida-idak husi imajen molok, hela de'it refleksaun tolu husi ahi iha kórnea, ne'ebé forma triángulu ki'ik ida. Pupila hetan ho detektór sírkulu. Refleksaun ne'ebé besik liu ba sentru pupila mak ahi ne'ebé haree hela; tenke haree segundu ida atu konta. Bainhira haree tuir orden loos, sino tanis; se la haree ahi tuir mai iha segundu balu, tentativa kansela atu evita tanis sala.</p>
<p>Programa la'o diretamente iha Windows ho lian interfase sanulu: Xinés tradisionál, Inglés, Vietnamita, Indonéziu, Malaiu, Filipinu, Tailandés, Khmer, Birmanés no Lao.</p>`],
      ["Seguransa infravermellu — favór lee", `<p>Ekipamentu uza LED infravermellu besik, naroman hanesan kontrolu remotu TV; haree de'it pontu mean tolu ne'ebé la naroman. To'o agora ekipa <strong>halo de'it estimativa preliminár husi dadus komponente no medisaun rasik</strong>; rezultadu hatudu katak iha distánsia 50–70 cm espozisaun kraik liu limite padraun IEC 62471. <strong>Ne'e la'ós sertifikasaun seguransa ofisiál.</strong> Teste ba ekipamentu tomak husi laboratóriu independente planu hela, seidauk hotu.</p>
<p>Molok relatóriu ne'e: tau ekipamentu iha 50–70 cm, la besik liu; keta tau matan besik ahi no hateke; keta uza kleur liu presiza; para kedas no hatete ba ekipa se matan kole, maran, la konfortável ka iha preokupasaun. Ema ho moras matan, foin halo sirurjia matan ka sensível ba naroman tenke husu doutór uluk.</p>`],
      ["Instalasaun", `<p>Presiza laptop ka desktop Windows 10 ka 11 (64-bit), portu USB mamuk rua (kámara no kabu kontrolu), no altifalante ne'ebé funsiona. La presiza senha administradór.</p>
<ol><li>Download instaladór ho butaun iha leten no halo la'o.</li>
<li>Se ekrã azul “Windows protected your PC” mosu: klik <strong>More info → Run anyway</strong>.</li>
<li>Se “Smart App Control has blocked this app” mosu (PC Windows 11 foun): bá Settings → Privacy & security → Windows Security → App & browser control → Smart App Control, hili <strong>Off</strong>, depois instala fali.</li>
<li>Dala uluk, komputadór presiza internet dala ida: hanehan butaun iha programa atu instala driver kaixa kontrolu.</li>
<li>Bainhira iha versaun foun, programa hatudu avizu iha leten; hanehan “Download and install”. Atualizasaun la hamoos ita-nia konfigurasaun.</li></ol>
<p>Instaladór seidauk iha asinatura dijitál (sertifikadu husu hela), entaun pasu 2 no 3 normál. Download de'it husi pájina ne'e ka pájina Releases iha GitHub.</p>`],
      ["Projetu no ekipa", `<p>Apoiu husi projetu 2026 “Sino bolu ho matan ba Asosiasaun MND”, kooperasaun entre <strong>National Taipei University</strong> (Laboratóriu SMSPL, Departamentu Enjeñaria Komunikasaun) no <strong>Asosiasaun Moras Neurón Motor Taiwan</strong>. Investigadór prinsipál: Prof. Chen-Yu Chiang (江振宇); lista ekipa kompletu iha versaun Xinés pájina ne'e.</p>`],
      ["Kontaktu", `<ul><li><strong>Tékniku no kooperasaun</strong>: Prof. Chen-Yu Chiang, National Taipei University — <a href="mailto:cychiang@mail.ntpu.edu.tw">cychiang@mail.ntpu.edu.tw</a></li>
<li><strong>Moras-na'in husu koko</strong>: Asosiasaun Moras Neurón Motor Taiwan.</li>
<li><strong>Problema software</strong>: haruka email ho ficheiru log (callbell.log iha pasta programa), oras no saida mak akontese.</li></ul>
<p>Estadu: versaun kandidatu iha teste terenu; ekipamentu ajuda atu bolu, <strong>la'ós ekipamentu médiku</strong>, la troka kuidadu no vizita husi ema. Tradusaun seidauk revista husi ema nativu — favór relata sala.</p>`]
    ]
  },
  "pt": {
    name: "Português",
    title: "CRCL-BELL campainha de chamada por olhar (infravermelhos)",
    download: "Software para Windows", download_btn: "Transferir o instalador", releases: "Todas as versões",
    sections: [
      ["O que é", `<p>Com a doença do neurónio motor o corpo deixa gradualmente de obedecer: falar e carregar numa campainha tornam-se mais difíceis de dia para dia, enquanto os olhos normalmente ainda conseguem olhar. De dia há alguém por perto que vê o que é preciso; de noite a família também tem de dormir, e o doente que quer virar-se, se sente mal ou precisa de alguém muitas vezes só pode esperar. Fizemos esta campainha para a noite: o doente olha para as luzes e a campainha chama alguém. As luzes são de infravermelho próximo — só se veem três pontos vermelhos muito ténues, o quarto fica escuro e o sono de ninguém é perturbado; esses três pontos são precisamente o que o doente olha. Para instalar basta seguir as indicações no ecrã para apontar e focar a câmara; o doente treina algumas vezes “luz da direita, depois luz da esquerda” e depressa se habitua — para que doente e família possam dormir descansados.</p>
<ul><li>O dispositivo é uma pequena caixa presa à cama ou à mesa, a 50–70 cm dos olhos do doente, com três luzes de infravermelho próximo (só se veem pontos vermelhos ténues) e uma câmara.</li>
<li>O doente <strong>olha para as luzes por ordem</strong> (por defeito a da direita, depois a da esquerda, cerca de um segundo cada) e o computador toca. Uma ordem errada ou um olhar casual não a faz tocar.</li>
<li>Nada toca no doente, nada é colado; outra pessoa pode usá-la de imediato.</li>
<li>Basta um computador Windows e a caixa.</li></ul>`],
      ["Para quem é e como obter", `<p>Foi desenvolvida para os doentes da <strong>Associação Taiwanesa de Doença do Neurónio Motor</strong>. As primeiras unidades são emprestadas aos doentes através da Associação.</p>
<ul><li><strong>Doentes e famílias</strong>: contactem a Associação para pedir um período de experiência; ela trata do equipamento, da formação e da recolha de opiniões.</li>
<li><strong>Outras instituições de cuidados ou investigadores</strong>: escrevam-nos (ver Contacto). Trata-se ainda de uma versão candidata em testes no terreno, ainda não disponível ao público.</li>
<li><strong>Software</strong>: use o botão de transferência acima. Abre mesmo sem a caixa, para ver a interface.</li></ul>`],
      ["Como funciona", `<p>As três luzes infravermelhas piscam à vez. A câmara subtrai cada imagem à anterior, deixando só os três reflexos das luzes na córnea, que formam um pequeno triângulo. A pupila é localizada com um detetor de círculos. O reflexo mais próximo do centro da pupila indica a luz que está a ser olhada; é preciso olhar cerca de um segundo para contar. Se a ordem estiver certa, a campainha toca; se a luz seguinte não for olhada em poucos segundos, a tentativa é cancelada para evitar falsos alarmes.</p>
<p>O programa corre diretamente no Windows e tem dez línguas de interface: chinês tradicional, inglês, vietnamita, indonésio, malaio, filipino, tailandês, khmer, birmanês e lao.</p>`],
      ["Segurança dos infravermelhos — leia, por favor", `<p>O dispositivo usa LED de infravermelho próximo, o mesmo tipo de luz de um comando de televisão; só se veem três pontos vermelhos ténues. Até agora a equipa fez apenas <strong>estimativas preliminares a partir dos dados dos componentes e medições próprias</strong>, que indicam uma exposição abaixo dos limites da norma IEC 62471 à distância prevista de 50–70 cm. <strong>Isto não é uma certificação de segurança formal.</strong> O ensaio do dispositivo completo por um laboratório independente está planeado mas ainda não foi feito.</p>
<p>Até lá: mantenha o dispositivo a 50–70 cm, nunca mais perto; não aproxime os olhos das luzes nem as fixe; não use mais tempo do que o necessário; pare de imediato e avise a equipa se os olhos ficarem cansados, secos ou desconfortáveis. Pessoas com doenças oculares, cirurgia ocular recente ou sensibilidade à luz devem consultar primeiro um médico.</p>`],
      ["Instalação", `<p>É necessário um computador com Windows 10 ou 11 (64 bits), duas portas USB livres (câmara e cabo de controlo) e um altifalante a funcionar. Não é precisa palavra-passe de administrador.</p>
<ol><li>Transfira o instalador com o botão acima e execute-o.</li>
<li>Se aparecer o ecrã azul “O Windows protegeu o seu PC”: clique em <strong>Mais informações → Executar mesmo assim</strong>.</li>
<li>Se aparecer “O Smart App Control bloqueou esta aplicação” (PCs novos com Windows 11): vá a Definições → Privacidade e segurança → Segurança do Windows → Controlo de aplicações e browser → Smart App Control e escolha <strong>Desativado</strong>; depois instale de novo.</li>
<li>Na primeira utilização o computador precisa de internet uma vez: carregue no botão do programa para instalar o controlador da caixa de controlo.</li>
<li>Quando houver uma versão nova, o programa mostra um aviso no topo; carregue em “Transferir e instalar”. A atualização mantém as suas definições.</li></ol>
<p>O instalador ainda não tem assinatura digital (o certificado está a ser pedido), pelo que os passos 2 e 3 são normais. Transfira apenas desta página ou da página Releases no GitHub.</p>`],
      ["Projeto e equipa", `<p>Apoiado pelo projeto de 2026 “Campainha de chamada por olhar para a Associação de DNM”, uma cooperação entre a <strong>Universidade Nacional de Taipei</strong> (Laboratório SMSPL, Departamento de Engenharia de Comunicações) e a <strong>Associação Taiwanesa de Doença do Neurónio Motor</strong>. Investigador principal: Prof. Chen-Yu Chiang (江振宇); a equipa completa está na versão chinesa desta página.</p>`],
      ["Contacto", `<ul><li><strong>Técnico e cooperação</strong>: Prof. Chen-Yu Chiang, Universidade Nacional de Taipei — <a href="mailto:cychiang@mail.ntpu.edu.tw">cychiang@mail.ntpu.edu.tw</a></li>
<li><strong>Doentes que queiram experimentar</strong>: Associação Taiwanesa de Doença do Neurónio Motor.</li>
<li><strong>Problemas com o software</strong>: envie por e-mail o ficheiro de registo (callbell.log na pasta do programa), a hora e o que aconteceu.</li></ul>
<p>Estado: versão candidata em testes no terreno; é um dispositivo de apoio à chamada, <strong>não é um dispositivo médico</strong> e não substitui os cuidados e a vigilância humana. As traduções não foram revistas por falantes nativos — agradecemos que comuniquem erros.</p>`]
    ]
  }
};
