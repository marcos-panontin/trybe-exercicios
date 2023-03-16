const buttons = document.querySelectorAll('button')
const main = document.querySelector('main');

const changeProperty = (event) => {
    let property = event.target.parentNode.id;
    let value = event.target.innerHTML;
    main.style[property] = value;
    localStorage.setItem(property, value);
};

for (let button of buttons) {
    button.addEventListener("click", changeProperty);
}

for (let item of Object.entries(localStorage)) {
    main.style[item[0]] = item[1];
}














