const URL='https://jsonplaceholder.typicode.com/users';

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  
fetch(URL)
    .then(res=> res.json())
    .then(data=>{
        const h3= document.querySelector('.nombre1')
        h3.innerHTML = data[getRandomInt(1,4)].name
})
fetch(URL)
    .then(res=> res.json())
    .then(data=>{
        const h3= document.querySelector('.nombre2')
        h3.innerHTML = data[getRandomInt(4,7)].name
    })

fetch(URL)
    .then(res=> res.json())
    .then(data=>{
        const h3= document.querySelector('.nombre3')
        h3.innerHTML = data[getRandomInt(7,10)].name
})