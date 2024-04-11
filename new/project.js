let products = {
    data: [
      {
        
        productName: "Login page",
        category: "Login_page",
        image: "img/login_page_1.jpg",
        detail: "Border Line Animation",
        link:"login page/Login.html",
        
      },
      {
        id:2,
        productName: "Perfume",
        category: "Web_page",
        image: "img/perfume.jpg",
        detail: "Perfume Shop Web page",
        link:"perfume/perfume.html",
      },

    ],
  };

  
  
  for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    let cardLink = document.createElement("a");
    cardLink.setAttribute("href", i.link); 
    // Image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    // Create anchor tag for the image link
    let imageLink = document.createElement("a");
    imageLink.setAttribute("href", i.link); 
    // Image tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    // Append image to the image link
    imageLink.appendChild(image);
    // Append image link to the image container
    imgContainer.appendChild(imageLink);
    // Append image container to the card link
    cardLink.appendChild(imgContainer);
    card.appendChild(cardLink); 
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //detail
    let detail = document.createElement("h6");
    detail.innerText = i.detail;
    container.appendChild(detail);
  
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }
  
  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
  
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });
  
  //Initially display all products
  window.onload = () => {
    filterProduct("all");
  };