;

function checkWebP(callback) {
    let webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
};

checkWebP(function (support) {
    if (support) {
        //Do what you whant =)
        document.querySelector('body').classList.add('webp');
    } else {
        //Do what you whant =)
        document.querySelector('body').classList.add('no-webp');
    }

})
console.log('HELLO');