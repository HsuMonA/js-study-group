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
  const dollar = document.createTextNode("$");
  divForDollar.appendChild(dollar);

  // add the divs to the newly created li
  li.appendChild(divForArticle);
  li.appendChild(divForDollar);
  li.appendChild(divForAmount);

  // add the lists and its content into the DOM
  document.querySelector("#ticket").appendChild(li);

  const sum = sumAmount();
  // const divForTotalAmount = document.createElement("div");
  // const sumTextNode = document.createTextNode(sum);
  let text = "TOTAL $ ";

  text += sum;
  // document.querySelector("#total").firstChild.data = text;
  //document.querySelector('#total').innerHTML = "Total: $ ", sumTextNode;
  // divForTotalAmount.appendChild(totalAmountText);
  // document.querySelector("#total").appendChild(divForTotalAmount);
  document.querySelector("#total").innerHTML = text;
  // document.querySelector("#total").innerText = "Hello <br> World";
}

function sumAmount() {
  // get the amount
  // let amountArray = document.querySelectorAll("#ticket > li > div:last-child");
  let amountArray = document.querySelectorAll("#ticket > li > div:last-child");
  let sum = 0;
  // let result = amountArray.reduce(
  //   (accumulator, currentValue) => accumulator + currentValue,
  //   sum
  // );
  // return result;
  // sum the amount
  for (let i = 0; i < amountArray.length; i++) {
    sum += Number(amountArray[i].innerHTML);
  }
  return sum;
  // create div and add sum in the div
  //const divForSum = document.createElement("div");
}

// click the calculate button
// display the article and amount
// sum the amount
// display the total amount
