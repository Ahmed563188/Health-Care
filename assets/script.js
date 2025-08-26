function fetchBurgerData() {
    fetch('https://my-burger-api.herokuapp.com/burgers/')
        .then(response => response.json())
        .then(data => console.log(data));
}

fetchBurgerData();
