
















/*
// Function to fetch dog images
async function fetchDogs() {
    try {
        // Fetch six random dog images from the API
        const response = await fetch("https://dog.ceo/api/breeds/image/random/6");
        const data = await response.json(); // Convert response to JSON
        
        displayDogs(data.message); // Pass the array of image URLs to displayDogs function
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Function to display images using .map()
function displayDogs(images) {
    const gallery = document.getElementById("gallery");
    
    // Use .map() to create the HTML elements for each dog image
    const dogCards = images.map(imageUrl => `
        <div class="card">
            <img src="${imageUrl}" alt="Random Dog">
        </div>
    `).join(""); // Convert the array into a single HTML string

    gallery.innerHTML = dogCards; // Inject the generated HTML into the gallery
}


// Function to create and insert HTML elements dynamically
function displayDogs(images) {
    const gallery = document.getElementById("gallery");
    gallery.innerHTML = ""; // Clear previous content

    images.forEach(imageUrl => {
        // Create card div
        const card = document.createElement("div");
        card.classList.add("card");

        // Create image element
        const img = document.createElement("img");
        img.src = imageUrl;
        img.alt = "Random Dog";

        // Append elements to card and then to gallery
        card.appendChild(img);
        gallery.appendChild(card);
    });
} */
