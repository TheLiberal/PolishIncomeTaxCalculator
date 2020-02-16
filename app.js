document.querySelector(".button").addEventListener("click", runEvent);

function runEvent(e) {
  let income;
  let netto;
  let zus;
  let basetax;
  let tax;
  let health1;
  let health2;
  let us;

  income = document.getElementById("input").value;
  income = parseFloat(income, 10);

  zus = income * 0.1371;
  zus = +zus.toFixed(2);
  document.getElementById("zus").value = zus;

  basetax = Math.round(income - zus - 139.06);
  tax = basetax * 0.18 - 46.34;
  tax = +tax.toFixed(2);
  document.getElementById("tax").value = tax;

  health1 = 0.0125 * (income - zus);
  health1 = +health1.toFixed(2);
  document.getElementById("health").value = health1;

  netto = income - tax - zus - health1;
  netto = +netto.toFixed(2);
  document.getElementById("netto").value = netto;

  health2 = (income - zus) * 0.0775;
  us = tax - health2;
  us = +us.toFixed(2);
  document.getElementById("us").value = us;

  e.preventDefault();
}
