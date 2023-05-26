

const planet = document.querySelectorAll('.planet');
const planetBlock = document.querySelectorAll('.planet__block');


for (let i = 0; i < planet.length; i++) {
    planet[i].addEventListener('mouseenter', () => {
        planetBlock[i].classList.add('open__info');
    })

    planet[i].addEventListener('mouseleave', () => {
        planetBlock[i].classList.remove('open__info');
    })

}


// function User(name) {
//     this.name = name;
//     this.age = true;
// }

// let userObj = new User("Rob");

// console.log(userObj);