// ========== controller =========== // 
const controller = {
    init: function(){
        // sets current cat to first in array
        catsModel.currentCat = catsModel.cats[0];
        catListViewer.init();
        catViewer.init();
        adminView.init();
    },
    // inits views
    getCurrent: function(){
        return catsModel.currentCat;
    },
    getCats: function(){
        return catsModel.cats;
    },
    // sets currently viewed cat to obj
    setCurrent: function(obj){
        catsModel.currentCat = obj;
    },
    // click counter
    clickCount: function(){
        // increments clicks for currentCat
        catsModel.currentCat.clicks++;
        // re-renders catViewer with updated click count
        catViewer.render();
    },
    // update cat
    updateCat: function(){
        // console.log('array updated');
        // selects catList
        let catList = document.querySelectorAll('.catButton');
        // console.log(catList);
        // checks for matching cat name in list and updates name in list 
        catList.forEach((catName) => {
            if(catName.innerHTML === catsModel.currentCat.name){
                catName.innerHTML = adminView.catName.value;
            }
        });
        // sets values of currentCat to the values from the admin form
        catsModel.currentCat.name = adminView.catName.value;
        catsModel.currentCat.image = adminView.catURL.value;
        catsModel.currentCat.clicks = adminView.catClicks.value;
        // renders catViewer with updated values
        catViewer.render();
    }
};
controller.init();
// function controllerInit(){
//     modelInit();
//     viewInit();
// }
// function getCats(){
//     return getAllCats();
// }

// function setCurrent(cat){
//     catsModel.currentCat = cat;
// }
// function clickCount(){
//     catsModel.currentCat.clicks++;
//     clickRender();
// }
