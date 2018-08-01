// ========== Model ======= //
let catsModel = {
    cats: [{ 
            name: "Kedi",
            image: "./img/1.jpg",
            id: 0,
            clicks: 0 
        },
        { 
            name: "Graven",
            image: "./img/2.jpg",
            id: 1,
            clicks: 0
        },
        {
            name: "Fluffikins",
            image: "./img/3.jpg",
            id: 2,
            clicks: 0
        },
        {
            name: "Fangster",
            image: "./img/4.jpg",
            id: 3,
            clicks: 0
        },
        {
            name: "Mr. Widdershins",
            image: "./img/5.jpg",
            id: 4,
            clicks: 0
        }],
        currentCat: null
};

// function modelInit(){
//     if(!localStorage.cats){
//         localStorage.cats = JSON.stringify(cats);
//     }
// }
// function getAllCats(){
//     // cats.forEach((cat) => {
//     //     console.log(cat.name);
//     //     console.log(cat.image);
//     //     console.log(cat.id);
//     // });
//     return JSON.parse(localStorage.cats);
// }
// function add(obj) {
//     let data = JSON.parse(localStorage.cats);
//     data.push(obj);
//     localStorage.cats = JSON.stringify(data);
// }