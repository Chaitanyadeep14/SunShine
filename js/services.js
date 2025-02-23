document.addEventListener("DOMContentLoaded", function () {
    const products = [
        { name: "Metal Manufacturing Equipment", image: "https://firebasestorage.googleapis.com/v0/b/storage-bbd27.firebasestorage.app/o/Website%20Storage%2FServices%2FProduct-1.jpg?alt=media&token=61fddef3-5426-44fd-8f95-fafd3258d566" },
        { name: "Automotive Engine Parts", image: "https://firebasestorage.googleapis.com/v0/b/storage-bbd27.firebasestorage.app/o/Website%20Storage%2FServices%2FProduct-2.jpg?alt=media&token=bee9b18b-5f15-42a3-8ab3-eb5295d8557e" },
        { name: "Precision Engineered Components", image: "https://firebasestorage.googleapis.com/v0/b/storage-bbd27.firebasestorage.app/o/Website%20Storage%2FServices%2FProduct-3.jpg?alt=media&token=b7eaafec-1446-4171-aa22-6e59689f3146" },
        { name: "CNC Machine Components", image: "https://firebasestorage.googleapis.com/v0/b/storage-bbd27.firebasestorage.app/o/Website%20Storage%2FServices%2FProduct-4.jpg?alt=media&token=ab8b2518-dfcd-4cac-9daf-db24cfbc80c6" },
        { name: "Precision Shaft", image: "https://firebasestorage.googleapis.com/v0/b/storage-bbd27.firebasestorage.app/o/Website%20Storage%2FServices%2FProduct-5.jpg?alt=media&token=864753b4-8e9a-4c39-821d-e995ed1a423e" },
        { name: "Precision Tools", image: "https://firebasestorage.googleapis.com/v0/b/storage-bbd27.firebasestorage.app/o/Website%20Storage%2FServices%2FProduct-6.jpg?alt=media&token=c6d58ec6-f0c4-4f26-a0d2-e475ae702233" },
        { name: "4mm Aluminium Gravity Die Castings", image: "https://firebasestorage.googleapis.com/v0/b/storage-bbd27.firebasestorage.app/o/Website%20Storage%2FServices%2FProduct-7.jpg?alt=media&token=5b43a395-a4f2-4bec-8af5-c267af354f13"},
        { name: "Aluminium Universal Gravity Die Casting", image: "https://firebasestorage.googleapis.com/v0/b/storage-bbd27.firebasestorage.app/o/Website%20Storage%2FServices%2FProduct-8.jpg?alt=media&token=2d0332f8-835f-4ca2-ae9c-cb0e22b69200"},
        { name: "2mm Aluminium Gravity Die Castings", image: "https://firebasestorage.googleapis.com/v0/b/storage-bbd27.firebasestorage.app/o/Website%20Storage%2FServices%2FProduct-9.jpg?alt=media&token=e8e450d3-d567-4430-bef0-c879b9e85ada"},
        { name: "Aluminium Pressure Die Casting", image: "https://firebasestorage.googleapis.com/v0/b/storage-bbd27.firebasestorage.app/o/Website%20Storage%2FServices%2FProduct-10.jpg?alt=media&token=46184816-86e6-4c49-9920-66f8997d5f87"}
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
