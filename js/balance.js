let money_spent_marta;
let money_spent_andrea;
let total_spent_html_element;
let total_spent_js_variable = 0; // to avoid undefined
let andrea_balance = 0;
let marta_balance = 0;

const userAndrea = "andrea";
const userMarta = "marta";

function balanceCalculation(money_spent, user) {
  andrea_balance_html = document.getElementById("andrea_balance");
  marta_balance_html = document.getElementById("marta_balance");

  if (user === "andrea") {
    andrea_balance += money_spent / 2;
    marta_balance -= money_spent / 2;
  } else if (user === "marta") {
    andrea_balance -= money_spent / 2;
    marta_balance += money_spent / 2;
  }

  andrea_balance_html.innerHTML = andrea_balance.toFixed(2);
  marta_balance_html.innerHTML = marta_balance.toFixed(2);
}

document.getElementById("button_andrea").onclick = function () {
  money_spent_andrea = document.getElementById("money_spent_andrea").value;
  let float_parse_money_andrea = parseFloat(money_spent_andrea);

  if (!isNaN(float_parse_money_andrea)) {
    total_spent_js_variable += float_parse_money_andrea; // now it will not return undefined

    balanceCalculation(float_parse_money_andrea, userAndrea);

    total_spent_html_element = document.getElementById("total_spent");
    total_spent_html_element.innerHTML = total_spent_js_variable.toFixed(2); // it shows 2 decimals
  } else {
    console.log("Invalid data. Insert a number");
  }
};

document.getElementById("button_marta").onclick = function () {
  money_spent_marta = document.getElementById("money_spent_marta").value;
  let float_parse_money_marta = parseFloat(money_spent_marta);

  if (!isNaN(float_parse_money_marta)) {
    total_spent_js_variable += float_parse_money_marta;

    balanceCalculation(float_parse_money_marta, userMarta);

    total_spent_html_element = document.getElementById("total_spent");
    total_spent_html_element.innerHTML = total_spent_js_variable.toFixed(2);
  } else {
    console.log("Invalid data. Insert a number");
  }
};
