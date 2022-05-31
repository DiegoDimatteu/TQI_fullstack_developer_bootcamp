function changeMode() {
    changeClasses();
    changeText();
}

function changeClasses(){
    botao.classList.toggle('dark-mode');
    h1.classList.toggle('dark-mode');
    body.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
}

function changeText() {
    if(body.classList.contains('dark-mode')) {
        botao.innerHTML = 'Light Mode';
        h1.innerHTML = 'Dark Mode ON';
        return;
    }
    else {
        botao.innerHTML = 'Dark Mode';
        h1.innerHTML = 'Light Mode ON';
        return;
    }
}

const botao = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

botao.addEventListener('click', changeMode);

console.log(botao);