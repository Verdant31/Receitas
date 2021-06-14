const main = document.querySelector('main');

fetch('html/home.html').then(res => res.text()).then(html => {
    main.innerHTML = html;
})

function carregarHome() {
    fetch('html/home.html')
    .then(res => res.text())
    .then(html => {
        main.innerHTML = html;
    })
}
const menuHome = document.querySelector("#menuHome");
menuHome.onclick = function(e) {
    e.preventDefault();
    carregarHome();
}

function carregarReceitas() {
    fetch('html/list-recipe.html')
    .then(res => res.text())
    .then(html => {
        main.innerHTML = html;
    })
}
const receitas = document.querySelector("#receitas");
receitas.onclick = function(e) {
    e.preventDefault();
    carregarReceitas();
}


