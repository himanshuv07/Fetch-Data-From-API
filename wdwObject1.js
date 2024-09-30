//* This line initiates a request to fetch the JSON file located at ./wdwObject.JSON.

fetch("./wdwObject.JSON")  // Fetching Data....

    // Takes the response and converts it from JSON format into a JavaScript object.
    .then(response => response.json()) // Directly parse the JSON....  

    // destructuring the object to directly access the product array
    .then(({ product }) => {
        const tbody = document.querySelector("tbody");

        // iterates over each item in the product array.
        product.forEach(value => {
            // console.log(product);

            // For each product, we extract its properties (like id, title, etc.) for easy access.
            const { id, title, price, description, image, category, rating } = value;

            // This block creates a new table row (<tr>) with the product data and appends it to the table body.
            tbody.innerHTML += `
                <tr>
                    <td>${id}</td>
                    <td>${title}</td>
                    <td>${price}</td>
                    <td>${description}</td>
                    <td><img src="${image}" alt="${title}"></td>
                    <td>${category}</td>
                    <td>${rating}</td>
                </tr>
            `;
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error); // Error Handling ...
    });

