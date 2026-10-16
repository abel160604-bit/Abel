
document.addEventListener("DOMContentLoaded", function () {
  // Tahun pada footer
  document.querySelectorAll(".year").forEach(function (element) {
    element.textContent = new Date().getFullYear();
  });

  // Data untuk halaman detail proyek
  const projects = {
    portfolio: {
      title: "Website Portofolio",
      category: "Web Development",
      cover: "HTML & CSS",
      description: "Website untuk memperkenalkan diri dan menampilkan karya.",
      goal: "Membuat website pribadi yang rapi, responsif, dan mudah digunakan.",
      technologies: ["HTML", "CSS", "Bootstrap 5", "JavaScript"],
      color: "cover-one"
    },
    python: {
      title: "Program Sederhana",
      category: "Pemrograman",
      cover: "PYTHON",
      description: "Latihan algoritma, logika, dan pemrograman menggunakan Python.",
      goal: "Melatih pemahaman tentang variabel, kondisi, perulangan, dan fungsi.",
      technologies: ["Python", "Algoritma"],
      color: "cover-two"
    },
    jaringan: {
      title: "Praktikum Jaringan",
      category: "Jaringan Komputer",
      cover: "NETWORK",
      description: "Pembelajaran konfigurasi jaringan dan berbagi file.",
      goal: "Memahami konsep dasar jaringan dan komunikasi antarkomputer.",
      technologies: ["Jaringan", "VirtualBox", "Samba"],
      color: "cover-three"
    },
    uiux: {
      title: "Desain Antarmuka",
      category: "Desain",
      cover: "UI / UX",
      description: "Latihan membuat rancangan antarmuka yang mudah digunakan.",
      goal: "Mengenal tata letak, konsistensi, dan kenyamanan pengguna.",
      technologies: ["UI/UX", "Desain Digital"],
      color: "cover-four"
    },
    database: {
      title: "Rancangan Basis Data",
      category: "Basis Data",
      cover: "DATABASE",
      description: "Latihan membuat tabel dan hubungan antarentitas.",
      goal: "Memahami perancangan data, relasi, dan query dasar.",
      technologies: ["ERD", "SQL", "Database"],
      color: "cover-five"
    },
    wono: {
      title: "Wono Lokal & Cerita",
      category: "Proyek Web",
      cover: "WONO LOKAL",
      description: "Konsep website informasi potensi lokal dan UMKM.",
      goal: "Memperkenalkan informasi lokal melalui website yang mudah dijelajahi.",
      technologies: ["HTML", "CSS", "Bootstrap"],
      color: "cover-six"
    }
  };

  const params = new URLSearchParams(window.location.search);
  const projectKey = params.get("proyek") || "portfolio";
  const project = projects[projectKey];

  if (document.getElementById("detailJudul")) {
    const selected = project || {
      title: "Proyek Tidak Ditemukan",
      category: "Informasi",
      cover: "PROYEK",
      description: "Maaf, proyek yang kamu pilih tidak tersedia.",
      goal: "Silakan kembali ke daftar proyek.",
      technologies: [],
      color: "cover-one"
    };

    document.getElementById("detailJudul").textContent = selected.title;
    document.getElementById("detailKategori").textContent = selected.category;
    document.getElementById("detailDeskripsi").textContent = selected.description;
    document.getElementById("detailTujuan").textContent = selected.goal;

    const cover = document.getElementById("detailCover");
    cover.textContent = selected.cover;
    cover.className = "project-cover " + selected.color;

    const techContainer = document.getElementById("detailTeknologi");
    techContainer.replaceChildren();

    selected.technologies.forEach(function (technology) {
      const badge = document.createElement("span");
      badge.className = "tag";
      badge.textContent = technology;
      techContainer.appendChild(badge);
    });
  }

  // Validasi login
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const username = document.getElementById("username");
      const password = document.getElementById("password");
      const message = document.getElementById("loginMessage");

      const usernameValue = username.value.trim();
      const passwordValue = password.value;

      username.classList.remove("is-invalid", "is-valid");
      password.classList.remove("is-invalid", "is-valid");
      message.className = "alert d-none";
      message.textContent = "";

      let valid = true;

      if (usernameValue === "") {
        username.classList.add("is-invalid");
        valid = false;
      } else {
        username.classList.add("is-valid");
      }

      if (passwordValue.length < 8) {
        password.classList.add("is-invalid");
        valid = false;
      } else {
        password.classList.add("is-valid");
      }

      if (!valid) {
        message.className = "alert alert-danger";
        message.textContent =
          "Login gagal. Isi username atau email dan password minimal 8 karakter.";
        return;
      }

      message.className = "alert alert-success";
      message.textContent =
        "Validasi berhasil! Ini hanya simulasi, bukan login akun sungguhan.";
    });
  }
});
