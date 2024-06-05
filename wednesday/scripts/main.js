function getProduct(product) {
    const div = document.createElement("div");
    div.classList.add("card");
    div.appendChild(getTitle(product.name));
    div.appendChild(getImages(product.images));
    div.appendChild(getDescription(product.description));
    div.appendChild(getPrice(product.price));
    div.appendChild(getBuyButton(product));
    return div
}
function getImages(images) {
    const img = document.createElement("img");
    img.classList.add("image");
    const image = images[0];
    img.src = image.path;
    img.alt = image.name;
    return img
}
function getTitle(name) {
    const div = document.createElement("div");
    div.classList.add("title");
    div.innerText = name

    return div
}
function getBuyButton(product) {
    const button = document.createElement("button");
    button.classList.add("btn");
    button.innerText = "Add to Cart"
    button.dataset.product = encodeURI(JSON.stringify(product));
    button.addEventListener("click", e => addItem(product));
    return button;
}
function getPrice(amount) {
    const div = document.createElement("div");
    div.classList.add("amount");
    div.innerText = "$" + amount.toFixed(2)

    return div
}

function getDescription(description) {
    const div = document.createElement("div");
    div.classList.add("desc");
    div.innerHTML = description

    return div
}
function getLine(item) {
    const ext = item.qty * item.product.price;
    return `
        <tr>
            <td class="qty"><input type="number" value="${item.qty}"></td>
            <td class="name">    ${item.product.name}</td>
            <td class="desc">    ${item.product.description}</td>
            <td class="price"> $ ${item.product.price.toFixed(2)}</td>
            <td class="ext">   $ ${ext.toFixed(2)}</td>
            <td class="actions"><span class="remove">remove</span></td>
            
        </tr>
    `;
}
function displayCart() {
    cart.innerHTML = `
    <table>
        <tr>
            <th>QTY</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>EXT PRICE</th>
            <th>Actions</th>
        </tr>
        ${cartItems.map(getLine).join("")}
    </table>`
}
let cartItems = [];
function addItem(product, qty = 1) {
    cartItems.push({ "qty": qty, "product": product }) //create object literal
    displayCart();
}
document.addEventListener("DOMContentLoaded", async e => {
    // products.innerHTML = "???";
    const response = await fetch("./data/products.json");
    const data = await response.json();
    data.forEach(p => products.appendChild(getProduct(p)));
})