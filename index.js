const content = document.querySelector('.content');
const userName = document.querySelector('.name');
const vacancy = document.querySelector('.vacancy');
const body = document.querySelector('body');

if(content) {
    content.addEventListener("click", function(e) {
        userName.classList.toggle('_active');
        vacancy.classList.toggle('_active');
    })
};

if(body) {
    body.addEventListener("keydown", function(e) {
        if(e.code == "Space") {
            userName.classList.add('_remove');
            vacancy.classList.add('_remove');
        }
    }); 
}