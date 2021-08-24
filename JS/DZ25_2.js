let cheque = [
    { name: "Унитаз", number: 2, price: 12555 },
    { name: "12 Стульев", number: 12, price: 100265 },
    { name: "Робот пылесос", number: 1, price: 40155 },
    { name: "Мойка", number: 2, price: 11155 },
    { name: "Шкаф", number: 3, price: 8005 },
]

function showItem(pr) {
    const item = document.createElement('li');
    const item_name = document.createElement('p');
    item_name.setAttribute("class", "cheque__list-name");
    item_name.innerHTML = pr.name;

    const item_price = document.createElement('p');
    item_price.setAttribute("class", "cheque__list-price");
    item_price.innerHTML = `${pr.number.toFixed(2)} x ${pr.price.toFixed(2)} = ${(pr.number * pr.price).toFixed(2)}`;

    const item_code = document.createElement('p');
    item_code.setAttribute("class", "cheque__list-code");
    let tmp = Math.floor(Math.random() * 100);
    item_code.innerHTML = `код: ${tmp}`;

    item.appendChild(item_name);
    item.appendChild(item_price);
    item.appendChild(item_code);

    document.querySelector(".cheque__list").appendChild(item);
}

function getMax(cheque) {
    return cheque.reduce((tmp, curr) => tmp.price * tmp.number > curr.price * curr.number ? tmp : curr);
}

function getSum(cheque) {
    return cheque.reduce((sum, curr) => sum + curr.price * curr.number, 0);
}

function getAverage(cheque) {
    return cheque.reduce((sum, curr) => sum + curr.price * curr.number, 0) / cheque.reduce((num, curr) => num + curr.number, 0);
}

function showCheque(ch) {
    clearResult();

    const list = document.querySelector(".cheque__list");
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }

    for (let elem of ch) {
        showItem(elem);
        if (elem.price * elem.number === getMax(ch).price * getMax(ch).number)
            document.querySelector(".cheque__list li:last-child").setAttribute("class", "red");
    }
    document.querySelector("#sum").innerHTML = `=${getSum(ch).toFixed(2)}`;
    document.querySelector("#aver").innerHTML = `=${getAverage(ch).toFixed(2)}`;
    document.querySelector('.result').style.display = 'block';
}