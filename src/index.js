const siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN
  nav: {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  cta: {
    h1: "Bu DOM Mükemmel",
    button: "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik":
      "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik":
      "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği":
      "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği":
      "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği":
      "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  iletisim: {
    "iletişim-h4": "İletişim",
    adres: "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    telefon: "+90 (123) 456-7899",
    email: "satis@birsirketsitesi.com.tr",
  },
  footer: {
    copyright: "Copyright Bir Şirket Sitesi 2022",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log("Proje açıldı!");

/* Kodlar Buradan aşağıya */

const anchor = document.getElementsByTagName("a");

for (let i = 0; i < anchor.length; i++) {
  anchor[i].textContent = siteContent.nav[`nav-item-${i + 1}`];
  anchor[i].classList.add("italic");
  if (i === 6) {
    anchor[i].textContent = siteContent.footer.copyright;
    anchor[i].classList.remove("italic");
    anchor[i].classList.add("bold");
  }
}

let i = 0;
const fotolar = document.getElementsByTagName("img");
for (let key in siteContent.images) {
  fotolar[i].setAttribute("src", siteContent.images[key]);
  i++;
}

document.getElementsByTagName("h1")[0].textContent = siteContent.cta.h1;
document.getElementsByTagName("button")[0].textContent = siteContent.cta.button;

const smallHeading = document.getElementsByTagName("h4");

const paragraph = document.getElementsByTagName("p");
i = 0;
let c = 0;
for (let key in siteContent["ana-içerik"]) {
  if (key.includes("h4")) {
    smallHeading[i].textContent = siteContent["ana-içerik"][key];
    i++;
  }
  if (key.includes("içeri")) {
    paragraph[c].textContent = siteContent["ana-içerik"][key];
    c++;
  }
}

for (let key in siteContent.iletisim) {
  if (key.includes("h4")) {
    smallHeading[i].textContent = siteContent.iletisim[key];
    i++;
  } else {
    paragraph[c].textContent = siteContent.iletisim[key];
    c++;
  }
}
