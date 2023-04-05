function getInputArticle() {
  return document.querySelector("#description").value;
}

function getInputAmount() {
  return document.querySelector("#amount").value;
}

function addListItem() {
  // create a new li element
  const li = document.createElement("li");

  // create div and add article in the div
  const divForArticle = document.createElement("div");
  const articleText = document.createTextNode(getInputArticle());
  divForArticle.appendChild(articleText);

  // create div and add amount in the div
  const divForAmount = document.createElement("div");
  const amountText = document.createTextNode(getInputAmount());
  divForAmount.appendChild(amountText);

  // create div and add $ in the div
  const divForDollar = document.createElement("div");
  divForDollar.classList.add("dollar-sign");
  const dollar = document.createTextNode("$");
  divForDollar.appendChild(dollar);

  // add the divs to the newly created li
  li.appendChild(divForArticle);
  li.appendChild(divForDollar);
  li.appendChild(divForAmount);

  // add the lists and its content into the DOM
  document.querySelector("#ticket").appendChild(li);

  const sum = sumAmount();
  let text = "TOTAL $";
  text += sum;
  document.querySelector("#total").innerHTML = text;
}

function sumAmount() {
  // get the amount
  let amountArray = document.querySelectorAll("#ticket > li > div:last-child");
  let sum = 0;
  for (let i = 0; i < amountArray.length; i++) {
    sum += Number(amountArray[i].innerHTML);
  }
  return sum;
}
