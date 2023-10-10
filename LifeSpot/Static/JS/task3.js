let inputElements = document.getElementsByTagName('input');
let inputElement = inputElements[0].value;
console.log(inputElement);
let elements = document.getElementsByClassName('video-container');
for (i = 0; i < elements.length; i++) {
    let element = elements[i];
    let des = element.getElementsByClassName('video-title')[0].textContent.toLowerCase();
    if (des.includes(inputElement.toLowerCase())) {
        element.style.display = 'inline-block';
    }
    else {
        element.style.display = 'none';
    }
}
