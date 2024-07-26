// Task 1: Create an array containing information about different products, including their names, prices, and descriptions.

// let products = [
//     { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
//     { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
//     { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
// ];
// Task 2: Write a function to display the product information on the webpage dynamically.

// Task 3: Implement an event listener to trigger the display of products when the page loads.

let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];

function displayProducts(products){
    event.preventDefault(); 

    console.log("Product Information");
    // products.forEach(prod =>{
    //     console.log(prod);
    // })

    const prodlist = document.getElementById('product-list');

    products.forEach(product => {
    const prodDiv = document.createElement('div');
    prodDiv.innerHTML=`
    <h2>${product.name} </h2>
    <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
    <p><strong>Description : </strong> ${product.description}</p>
    `;
    prodlist.appendChild(prodDiv);
    });
}

// window.addEventListener('load', (event) => {
//     console.log('The page is fully loaded.');
//     displayProducts(products);
// });

