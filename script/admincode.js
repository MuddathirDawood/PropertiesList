let lands = JSON.parse(localStorage.getItem('land'));

document.querySelector('#total').innerHTML = lands.length;

console.table(lands);