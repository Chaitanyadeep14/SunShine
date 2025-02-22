document.addEventListener("DOMContentLoaded", function () {
    const products = [
        { name: "Metal Manufacturing Equipment", image: "placeholder.svg" },
        { name: "Automotive Engine Parts", image: "placeholder.svg" },
        { name: "Precision Engineered Components", image: "placeholder.svg" },
        { name: "CNC Machine Components", image: "placeholder.svg" },
        { name: "Precision Shaft", image: "placeholder.svg" },
        { name: "Precision Tools", image: "placeholder.svg" }
    ];

    const productList = document.getElementById("product-list");

    function displayProducts(filteredProducts) {
        productList.innerHTML = "";
        filteredProducts.forEach(product => {
            const productCard = document.createElement("div");
            productCard.classList.add("product-card");

            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <div>${product.name}</div>
            `;

            productList.appendChild(productCard);
        });
    }

    displayProducts(products);

    document.getElementById("search-btn").addEventListener("click", function () {
        const searchQuery = document.getElementById("search").value.toLowerCase();
        const filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(searchQuery)
        );
        displayProducts(filteredProducts);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const filterLinks = document.querySelectorAll('.filter-link');

    filterLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            // Remove active class from all links
            filterLinks.forEach(link => link.classList.remove('active'));

            // Add active class to the clicked link
            this.classList.add('active');
        });
    });
});
