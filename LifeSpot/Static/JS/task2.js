let age = prompt("Введите Ваш возраст");

if (age >= 18) {
    alert("Приветствуем на LifeSpot " + new Date().toLocaleString());
}
else {
    alert("Посещение сайта лицам моложе 18ти лет невозможно. Вы будете перенаправлены.");
    window.location.href = "http://www.google.com";
}
