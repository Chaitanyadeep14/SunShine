document.addEventListener("DOMContentLoaded", function () {

    // Products data
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