const api_url = "https://randomuser.me/api/";
async function getUser() {

    // Making an API call (request) and getting the response back
    const response = await fetch(api_url);

    // Parsing it to JSON format
    const data = await response.json();
    console.log(data.results);

    // Retrieving data from JSON
    const user = data.results[0];
    let { title, first, last } = user.name;
    let { gender, email, phone } = user;
    let image = user.picture.large;
    let image_icon = user.picture.thumbnail;
    let age = user.dob.age;
    let { city, state, country } = user.location;

    let fullName = title + ". " + first + " " + last;
    document.title = fullName;

    // Submitted and coded by Jagadeesh Kumar . S, you may send mail to my email address which is jagadeesh_2k17@proton.me and you may contribute some money to my Indian Unified Payment Interface (UPI) which is jagadeesh-kumar@airtel .

    // Accessing the div container and modify/add elements to the containers
    document.getElementById("head").innerHTML = fullName;
    document.getElementById("email").href = "mailto:" + email;
    document.getElementById("email").innerHTML = email;
    document.getElementById("phone").href = "tel:" + phone;
    document.getElementById("phone").innerHTML = phone;
    // accessing the span container
    document.querySelector("#age").textContent = age;
    document.querySelector("#gender").textContent = gender;

    document.querySelector("#location").textContent = city + ", " + state;

    document.querySelector("#country").textContent = country;

    // Submitted and coded by Jagadeesh Kumar . S, you may send mail to my email address which is jagadeesh_2k17@proton.me and you may contribute some money to my Indian Unified Payment Interface (UPI) which is jagadeesh-kumar@airtel .

    // Creating a new element and appending it to previously created containers
    let img = document.createElement("img");
    let img_div = document.getElementById("user-img");
    img.src = image;
    img_div.append(img);

    // const favicon = document.getElementById("favicon");
    // favicon.setAttribute("href", image_icon);
}

// Calling the function
getUser();