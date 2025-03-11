
document.addEventListener("DOMContentLoaded", function () {

    // Products data
    const products = [
        { name: "15 Inch Aluminium Pressure Die Casting", image: "https://firebasestorage.googleapis.com/v0/b/storage-bbd27.firebasestorage.app/o/Website%20Storage%2FServices%2FProducts%2FProduct-1.png?alt=media&token=c3688a9d-b5a7-4e52-be57-d0d8a2cebe57" },
        { name: "Aluminum Die Casting", image: "https://firebasestorage.googleapis.com/v0/b/storage-bbd27.firebasestorage.app/o/Website%20Storage%2FServices%2FProducts%2FProduct-2.png?alt=media&token=b6c1d101-7950-4b56-8b8a-0af3a57c7c1b" },
        { name: "Cast Iron Roof Drain", image: "https://firebasestorage.googleapis.com/v0/b/storage-bbd27.firebasestorage.app/o/Website%20Storage%2FServices%2FProducts%2FProduct-3.png?alt=media&token=102de8b0-c5f5-4739-ba61-6dca3c180a75" },
        { name: "Wax Die Mould", image: "https://firebasestorage.googleapis.com/v0/b/storage-bbd27.firebasestorage.app/o/Website%20Storage%2FServices%2FProducts%2FProduct-4.png?alt=media&token=d12e12a9-feb7-4c1e-8ec3-c3d9ad0b6d57" },
        { name: "Pressure Die Casting", image: "https://firebasestorage.googleapis.com/v0/b/storage-bbd27.firebasestorage.app/o/Website%20Storage%2FServices%2FProducts%2FProduct-5.png?alt=media&token=86f9f74c-6fdc-45df-a61a-5065b1058f86" },
        { name: "Aluminium High Tension Clamp Die Casting", image: "https://firebasestorage.googleapis.com/v0/b/storage-bbd27.firebasestorage.app/o/Website%20Storage%2FServices%2FProducts%2FProduct-6.png?alt=media&token=50774191-ad50-4bed-89c6-d0a883ffee71" },
        { name: "Aluminium Pressure Die Casting", image: "https://firebasestorage.googleapis.com/v0/b/storage-bbd27.firebasestorage.app/o/Website%20Storage%2FServices%2FProducts%2FProduct-7.png?alt=media&token=b5706c26-2e7d-4718-ae06-69b9d6bca050"},
        { name: "Investment Casting", image: "https://firebasestorage.googleapis.com/v0/b/storage-bbd27.firebasestorage.app/o/Website%20Storage%2FServices%2FProducts%2FProduct-8.png?alt=media&token=ab9017cc-4be0-4a9a-81a9-25921725ac09"},
        { name: "Gravity Die Castings", image: "https://firebasestorage.googleapis.com/v0/b/storage-bbd27.firebasestorage.app/o/Website%20Storage%2FServices%2FProducts%2FProduct-9.png?alt=media&token=368e1447-7735-45ec-b2e6-4e950e6164d9"},
        { name: "Aluminium Pressure Die Casting", image: "https://firebasestorage.googleapis.com/v0/b/storage-bbd27.firebasestorage.app/o/Website%20Storage%2FServices%2FProducts%2FProduct-10.png?alt=media&token=99f85c7d-84d1-4de5-acae-7926fbddcc31"},
        { name: "Aluminium Pressure Die Casting", image: "https://firebasestorage.googleapis.com/v0/b/storage-bbd27.firebasestorage.app/o/Website%20Storage%2FServices%2FProducts%2FProduct-11.png?alt=media&token=8c3fb915-79d6-4c35-9417-a18051b31bf7"},
        { name: "Gravity Die Casting", image: "https://firebasestorage.googleapis.com/v0/b/storage-bbd27.firebasestorage.app/o/Website%20Storage%2FServices%2FProducts%2FProduct-12.png?alt=media&token=9309d7e4-bb98-4623-8c99-d058bbf03f07"}

    ];


    // Display products
    const productList = document.getElementById("product-list");
    if (productList) {
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

        // Initially display all products
        displayProducts(products);

        // Search functionality
        const searchBtn = document.getElementById("search-btn");
        if (searchBtn) {
            searchBtn.addEventListener("click", function () {
                const searchQuery = document.getElementById("search").value.toLowerCase();
                const filteredProducts = products.filter(product =>
                    product.name.toLowerCase().includes(searchQuery)
                );
                displayProducts(filteredProducts);
            });
        }
        
        // Optional: Search on enter key press
        const searchInput = document.getElementById("search");
        if (searchInput) {
            searchInput.addEventListener("keypress", function(event) {
                if (event.key === "Enter") {
                    event.preventDefault();
                    if (searchBtn) searchBtn.click();
                }
            });
        }
    }

    // Service category filtering
    const filterLinks = document.querySelectorAll('.filter-link');
    const serviceContents = document.querySelectorAll('.service-content');
    const filterNavbar = document.querySelector('.filter-navbar');
    
    // Function to check if we're on mobile
    function isMobile() {
        return window.innerWidth <= 650;
    }
    
    // Function to switch active service
    function switchActiveService(categoryToShow) {
        // Remove active class from all links
        filterLinks.forEach(item => {
            item.classList.remove('active');
        });
        
        // Add active class to clicked link
        const activeLink = document.querySelector(`.filter-link[data-category="${categoryToShow}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
        
        // Hide all service contents
        serviceContents.forEach(content => {
            content.style.display = 'none';
        });
        
        // Show the selected service content
        const selectedContent = document.getElementById(`${categoryToShow}-content`);
        if (selectedContent) {
            selectedContent.style.display = 'block';
        }
        
        // Close dropdown if on mobile
        if (isMobile()) {
            setTimeout(() => {
                filterNavbar.classList.remove('open');
            }, 300);
        }
    }
    
    // Dropdown toggle function
    function toggleFilterDropdown(e) {
        if (!isMobile()) return;
        
        // If clicking on a non-active link, let the normal handler work
        if (e.target.classList.contains('filter-link') && !e.target.classList.contains('active')) {
            return;
        }
        
        // Toggle dropdown
        filterNavbar.classList.toggle('open');
        e.stopPropagation();
    }
    
    // Add click event to filter navbar for toggling dropdown
    if (filterNavbar) {
        filterNavbar.addEventListener('click', toggleFilterDropdown);
        
        // Close dropdown when clicking elsewhere
        document.addEventListener('click', function(e) {
            if (isMobile() && !filterNavbar.contains(e.target)) {
                filterNavbar.classList.remove('open');
            }
        });
        
        // Handle window resize
        window.addEventListener('resize', function() {
            if (!isMobile()) {
                filterNavbar.classList.remove('open');
            }
        });
    }
    
    // Add click event to all filter links
    filterLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const categoryToShow = this.getAttribute('data-category');
            switchActiveService(categoryToShow);
            
            // Update URL hash without jumping
            history.pushState(null, null, `#${categoryToShow}`);
        });
    });
    
    // Handle URL hash on page load
    function handleUrlHash() {
        const hash = window.location.hash.substring(1); // Remove the # symbol
        if (hash) {
            const categoryMap = {
                'cnc': 'cnc-vnc',
                'die': 'die-casting',
                'lathe': 'lathe',
                'drill': 'drill-tap',
                'hydraulic': 'hydraulic-press'
            };
            
            const category = categoryMap[hash] || hash;
            switchActiveService(category);
        }
    }
    
    // Handle hash change events (back/forward navigation)
    window.addEventListener('hashchange', handleUrlHash);
    
    // Call initially to handle direct links
    handleUrlHash();
    
    // Add image loading error handling
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.onerror = function() {
            // Replace with a default image if loading fails
            this.src = 'https://via.placeholder.com/400x300?text=Image+Not+Available';
            this.onerror = null; // Prevent infinite loop
        };
    });
});