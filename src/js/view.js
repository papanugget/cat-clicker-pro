// ========== view ========= //
const catListViewer = {
    init: function(){
        // select DOM elements
        this.catList = document.querySelector('#catList')
        this.render();
    },
    render: function(){
        let htmlStr = '';
        let cats = controller.getCats();
        cats.forEach((cat) => {
            htmlStr += `
                <li class="catButton">${cat.name}</li> 
                `;
                catList.innerHTML = htmlStr;
        });
        // catList.addEventListener('click', (catCopy) => {
        //     console.log(catCopy);
        //         let catCopy = e.target.innerHTML;
        //         cats.forEach((cat) => {
        //             console.log(cat.name);
        //             console.log(catCopy);
        //             if(cat.name === catCopy){
        //                 controller.setCurrent(catCopy);
        //             }
        //         });
        //         catViewer.render();
        // });
        catList.addEventListener('click', (e) => {
            // console.log(e.target.innerHTML);
            cats.forEach((cat) => {
                if(e.target.innerHTML === cat.name){
                    // console.log(cat);
                    controller.setCurrent(cat);
                    catViewer.render();
                }
            });
        });
    }
};
const catViewer = {
    init: function(){
        this.catDisplay = document.querySelector('#catDisplay');
        this.clickCounter = document.querySelector('#clicks');
        catDisplay.addEventListener('click', (e) => {
            // console.log(e.target.value);
            if(e.target.className === 'catImage'){
                controller.clickCount();
            }
        });
        this.render();
    },
    render: function(){
        // console.log(controller.getCurrent());
        let htmlStr = '';
        let currentCat = controller.getCurrent();
        htmlStr = `
            <img src="${currentCat.image}" class="catImage">
            <p>Name: ${currentCat.name}</p>
            <p>ID#: ${currentCat.id}</p>
            <p>Number of clicks:<span id="clicks">${currentCat.clicks}</span><p>
        `;
        catDisplay.innerHTML = htmlStr;
        adminView.formFill();
    }
};
const adminView = {
    init: function(){
        // admin area DOM elements
        this.adminBtn = document.querySelector("#adminBtn");
        this.adminForm = document.querySelector('#adminForm');
        this.cancelBtn = document.querySelector('#cancelBtn');
        this.submitBtn = document.querySelector('#submitBtn');
        this.catName = document.querySelector('#catName');
        this.catURL = document.querySelector('#catURL');
        this.catClicks = document.querySelector('#catClicks');
        // console.log(catName);
        // console.log(adminBtn);
        // console.log(adminForm);
        adminBtn.addEventListener('click', this.toggleAdmin,
            // let currentCat = controller.getCurrent();
            // console.log(currentCat);
            // catName.value = currentCat.name;
            // catURL.value = currentCat.image;
            // catClicks.value = currentCat.clicks;
            // return (adminForm.classList.contains('hidden') ? adminForm.classList.remove('hidden') : adminForm.classList.add('hidden'));
        );
        cancelBtn.addEventListener('click', this.toggleAdmin);
        submitBtn.addEventListener('click', this.submitData);
    },
    toggleAdmin: function(e){
        // console.log('button clicked');
        e.preventDefault();
        adminForm.classList.contains('hidden') ? adminForm.classList.remove('hidden') : adminForm.classList.add('hidden');
        adminView.formFill();
    },
    formFill: function(){
        // console.log('form fill called');
        let currentCat = controller.getCurrent();
        catName.value = currentCat.name;
        catURL.value = currentCat.image;
        catClicks.value = currentCat.clicks;
    },
    submitData: function(e){
        controller.updateCat();
        adminView.toggleAdmin(e);
    }
};

// const catList = document.querySelector('#catList');
// function catListRender(){
//     let htmlStr = '';
//     let cats = controller.getCats();
//     catList.addEventListener('click', (e) => {
//         console.log('cat list clicked');
//     });
//     cats.forEach((cat) => {
//         htmlStr += `
//             <li class="catButton">${cat.name}</li>
//         `;
//         // console.log(htmlStr);
//         catList.innerHTML = htmlStr;
//     });
// }
// const catViewer = {
//     init: function(){
//         // select DOM elements
//         this.catDisplay = document.querySelector('#catDisplay');
//         this.clickCountDisplay = document.querySelector('#clicks');
//         // add eventlistener to cat display 
//         catDisplay.addEventListener('click', (e) => {
//             if(e.target.className = 'catImage'){
//                 controller.clickCount();
//             }
//         });
//         this.render();
//     },
//     render: function(){
//         let currentCat = controller.getCurrent();
//         let display = '';
//         clickCountDisplay.innerHTML = currentCat.clicks;
//         if()
//     }

// }
// console.log('controller connected!');
// const catList = document.querySelector('#catList');
// const catPic = document.querySelector('#catDisplay');
// // add event listener to UL target
// catList.addEventListener('click', catClick);
// // add event listener to cat pics
// catPic.addEventListener('click', clickCount);
// // console.log('view connected');
// function viewInit(){
//     this.catList = document.querySelector('#catList');
//     this.catDisplay = document.querySelector('#catDisplay');
//     this.clickCount = document.querySelector('#clicks');
// }
// function catClick(cat){
//     let catName = cat.target.textContent;
//     // console.log(catName);
//     catRender(catName);
// }
// function catListRender(){
//     let htmlStr = '';
//     getCats().forEach((cat) => {
//         htmlStr += `
//             <li class="catButton">${cat.name}</li>
//         `
//     });
//     this.catList.innerHTML = htmlStr;
// }
// function catRender(catName){
//     let catView = '';
//     // loop thru cats array and match catName to cat.name
//     getCats().forEach((cat) => {
//         if(cat.name === catName){
//             // console.log(cat);
//             // console.log(catName);
//             catView = `
//                 <img src="${cat.image}" class="catImage">
//                 <p>Name: ${cat.name}</p>
//                 <p>ID#: ${cat.id}</p>
//                 <p>Number of clicks:<span id="clicks">0</span><p>
//             `
//         catDisplay.innerHTML = catView;
//         }
//         // console.log(cat.name);
//         // console.log(catName);
//         // if(cat.name === catName){
//         //     console.log('hello');
//         // }
//     });
// }
// function clickRender(clicks){
//     const clickCounter = document.getElementById('clicks');
//     clickCounter.innerHTML = clicks;
// }