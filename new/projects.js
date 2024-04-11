let projects ={
    data : [
        {
        ProjectName: "Login Page",
        catagory: "Login Page",
        image:"img/login_page_1.jpg"
    },
    {
        ProjectName: "perfume",
        catagory: "webpage",
        image:"img/perfume.jpg"
    },
],
};

for(let i of projects.data){
    let card = document.createElement("div");
    card.classList.add("card","i.catagory");
    let imgcontainer = document.createElement("div");
    imgcontainer.classList.add("image-container");

    let image =document.createElement("img");
    image.setAttribute("src",i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    document.getElementById("projects").appendChild(card);
}