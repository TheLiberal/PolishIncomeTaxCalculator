// Variables

//? Umowa o prace
let przychod;
let ubezpieczenieSpoleczne;
let podstawaOpodatkowania;
let miejsceZamieszkania;
let podatek;
let ubezpieczenieZdrowotne;
let ubezpieczenieZdrowotne2;
let kwotaNaReke;
let kwotaDoUrzeduSkarbowego;

//? Umowa zlecenie
let zlPrzychod;
let zlKosztyUzyskaniaPrzychodu;
let zlPodatek;
let zlUbezpieczenieZdrowotne;
let zlKwotaNaReke;
let zlKwotaDoUrzeduSkarbowego;

//? Umowa o dzielo
let dzPrzychod;
let dzKosztyUzyskaniaPrzychodu;
let dzPodatek;
let dzKwotaNaReke;
let dzKwotaDoUrzeduSkarbowego;

//! UMOWA O PRACE
document
  .getElementById("calculate_umowa_o_prace")
  .addEventListener("click", umowaOPrace);

function umowaOPrace(e) {
  // Przychod
  przychod = document.getElementById("przychod").value;
  przychod = parseFloat(przychod, 10);

  //   ZUS
  ubezpieczenieSpoleczne = przychod * 0.1371;
  ubezpieczenieSpoleczne = +ubezpieczenieSpoleczne.toFixed(2);
  document.getElementById(
    "ubezpieczenie_spoleczne"
  ).value = ubezpieczenieSpoleczne;

  //   Miejsce zamieszkania
  let select = document.getElementById("miejsce_zamieszkania");
  selectedOption = select.value;
  if (selectedOption == "Tak") {
    miejsceZamieszkania = 111.25;
  } else {
    miejsceZamieszkania = 139.06;
  }

  //   Podstawa opodatkowania i podatek
  podstawaOpodatkowania = Math.round(
    przychod - ubezpieczenieSpoleczne - miejsceZamieszkania
  );
  podatek = podstawaOpodatkowania * 0.18 - 46.34;
  podatek = +podatek.toFixed(2);
  document.getElementById("podatek").value = podatek;

  //   Ubezpieczenie zdrowotne
  ubezpieczenieZdrowotne = 0.0125 * (przychod - ubezpieczenieSpoleczne);
  ubezpieczenieZdrowotne = +ubezpieczenieZdrowotne.toFixed(2);
  document.getElementById(
    "ubezpieczenie_zdrowotne"
  ).value = ubezpieczenieZdrowotne;

  //   Na reke
  kwotaNaReke =
    przychod - podatek - ubezpieczenieSpoleczne - ubezpieczenieZdrowotne;
  kwotaNaReke = +kwotaNaReke.toFixed(2);
  document.getElementById("kwota_na_reke").value = kwotaNaReke;

  //   Do US
  ubezpieczenieZdrowotne2 = (przychod - ubezpieczenieSpoleczne) * 0.0775;
  kwotaDoUrzeduSkarbowego = podatek - ubezpieczenieZdrowotne;
  kwotaDoUrzeduSkarbowego = +kwotaDoUrzeduSkarbowego.toFixed(2);
  document.getElementById(
    "kwota_do_urzedu_skarbowego"
  ).value = kwotaDoUrzeduSkarbowego;
  $("label").addClass("active");
}

//! UMOWA ZLECENIE
document
  .getElementById("calculate_umowa_zlecenie")
  .addEventListener("click", umowaZlecenie);

function umowaZlecenie(e) {
  // Przychod
  zlPrzychod = document.getElementById("zl_przychod").value;
  zlPrzychod = parseFloat(zlPrzychod, 10);

  //   Koszty uzyskania przychodu
  zlKosztyUzyskaniaPrzychodu = zlPrzychod * 0.2;
  document.getElementById(
    "zl_koszty_uzyskania_przychodu"
  ).value = zlKosztyUzyskaniaPrzychodu;

  //   Podatek
  zlPodatek = (zlPrzychod - zlKosztyUzyskaniaPrzychodu) * 0.18;
  zlPodatek = Math.round(zlPodatek);
  document.getElementById("zl_podatek").value = zlPodatek;

  //   Ubezpiecznie zdrowotne
  zlUbezpieczenieZdrowotne = (zlPrzychod - zlKosztyUzyskaniaPrzychodu) * 0.0775;
  document.getElementById(
    "zl_ubezpieczenie_zdrowotne"
  ).value = zlUbezpieczenieZdrowotne;

  zlKwotaDoUrzeduSkarbowego = zlPodatek - zlUbezpieczenieZdrowotne;
  document.getElementById(
    "zl_kwota_do_urzedu_skarbowego"
  ).value = zlKwotaDoUrzeduSkarbowego;

  //   Kwota na reke
  zlKwotaNaReke =
    zlPrzychod -
    zlKwotaDoUrzeduSkarbowego -
    zlUbezpieczenieZdrowotne -
    (zlPrzychod - zlKosztyUzyskaniaPrzychodu) * 0.0125;
  document.getElementById("zl_kwota_na_reke").value = zlKwotaNaReke;
  e.preventDefault();
  $("label").addClass("active");
}

//! UMOWA O DZIELO
document
  .getElementById("calculate_umowa_o_dzielo")
  .addEventListener("click", umowaODzielo);

function umowaODzielo(e) {
  // Przychod
  dzPrzychod = document.getElementById("dz_przychod").value;
  dzPrzychod = parseFloat(dzPrzychod, 10);

  //   Koszty uzyskania przychodu
  dzKosztyUzyskaniaPrzychodu =
    document.getElementById("dz_koszty_uzyskania_przychodu").value *
    0.01 *
    dzPrzychod;
  document.getElementById(
    "dz_koszty_uzyskania_przychodu_kwota"
  ).value = dzKosztyUzyskaniaPrzychodu;

  //   Podatek
  dzPodatek = (dzPrzychod - dzKosztyUzyskaniaPrzychodu) * 0.18;
  document.getElementById("dz_podatek").value = dzPodatek;

  //   Kwota na reke
  dzKwotaNaReke = dzPrzychod - dzPodatek;
  document.getElementById("dz_kwota_na_reke").value = dzKwotaNaReke;

  e.preventDefault();
  $("label").addClass("active");
}
