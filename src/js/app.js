/*      QAP 3
 * Please update the following with your information:
 *
 *      Name:       <Tyler_Engle>
 *      Student ID: <YOUR_STUDENT_ID>
 *      Date:       <SUBMISSION_DATE>
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { products, categories } = window;

const menu = document.querySelector("#menu");
const selectCategory = document.querySelector("#selected-category");
const categProducts = document.querySelector("#category-products");

window.addEventListener("load", (e) => {
  const button1 = document.createElement("button");
  button1.innerHTML = categories[0].name;
  button1.id = categories[0].id;
  menu.appendChild(button1);
});
window.addEventListener("load", (e) => {
  const button2 = document.createElement("button");
  button2.innerHTML = categories[1].name;
  button2.id = categories[1].id;
  menu.appendChild(button2);
});
window.addEventListener("load", (e) => {
  const button3 = document.createElement("button");
  button3.innerHTML = categories[2].name;
  button3.id = categories[2].id;
  menu.appendChild(button3);
});
window.addEventListener("load", (e) => {
  const head = document.querySelector("thead");
  head.innerHTML = `<td><strong>Name</strong></td><td><strong>description</strong></td><td><strong>Price</strong></td>`;
});

window.addEventListener("click", (e) => {
  if (e.target.id === categories[0].id) {
    //alert("howdy");
    selectCategory.innerHTML = "";
    selectCategory.innerHTML = categories[0].name;
    categProducts.innerHTML = "";
    products.forEach((product) => {
      if (product.category[0] === categories[0].id) {
        if (product.discontinued === "true") {
          return (
            alert(`${product.title} is discontinued`),
            console.log(`${product.title} is discontinued`)
          );
        }
        let productRow = `<tr id="${product.title}"><td>${product.title}</td><td>${product.description}</td><td>$${product.price}</td></tr>`;
        categProducts.innerHTML += productRow;
      }
    });
  } else if (e.target.id === categories[1].id) {
    selectCategory.innerHTML = "";
    selectCategory.innerHTML = categories[1].name;
    categProducts.innerHTML = "";
    products.forEach((product) => {
      if (product.category[0] === categories[1].id) {
        if (product.discontinued === "true") {
          return (
            alert(`${product.title} is discontinued`),
            console.log(`${product.title} is discontinued`)
          );
        }
        let productRow = `<tr id="${product.title}"><td>${product.title}</td><td>${product.description}</td><td>$${product.price}</td></tr>`;
        categProducts.innerHTML += productRow;
      }
    });
  } else if (e.target.id === categories[2].id) {
    selectCategory.innerHTML = "";
    selectCategory.innerHTML = categories[2].name;
    categProducts.innerHTML = "";
    products.forEach((product) => {
      if (product.category[0] === categories[2].id) {
        if (product.discontinued === "true") {
          return (
            alert(`${product.title} is discontinued`),
            console.log(`${product.title} is discontinued`)
          );
        }
        let productRow = `<tr id="${product.title}"><td>${product.title}</td><td>${product.description}</td><td>$${product.price}</td></tr>`;
        categProducts.innerHTML += productRow;
      }
    });
  }
});

window.addEventListener("click", (e) => {
  //console.log(e.target.parentNode);
  if (e.target.parentNode.id !== "menu") {
    console.log(e.target.parentNode.id);
  }
});

// // For debugging, display all of our data in the console
console.log({ products, categories }, "Store Data");
