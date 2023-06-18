const container = document.querySelector('.container');
const div = document.createElement('div');
const clear = document.querySelector('.clear');
const divs = document.querySelectorAll('.grid');
const gridsize = document.querySelector('.gridsize')

let userNumber = 8;



function makeGrid (userNumber) {
    for (let i = 1; i <= userNumber*userNumber; i++) {

        const div = document.createElement('div');
        div.classList.add('grid',i);

        container.appendChild(div);

        div.style.width = `${100 / userNumber}%`;
        div.style.height = `${100 / userNumber}%`;
        div.style.backgroundColor = "rgb(68, 68, 121);"

        div.addEventListener('mouseover', ()=> {
            div.classList.add('gridColored')
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            div.style.backgroundColor = "#" + randomColor;
    });
    }
}

//add hover effect for each div in the container
divs.forEach(divItem => {
    divItem.addEventListener('hover', ()=> {
        div.classList.add('gridColored');
});
})

makeGrid(userNumber);


//add 'gridsize' button functionality
gridsize.addEventListener('click', ()  => {
    container.innerHTML = '';
    userNumber = prompt("How many rows/columns do you wish? (1-80)");
    if(userNumber<=80 && userNumber > 0) {
    makeGrid(userNumber);
    } else {
        alert("Make sure to type a number between 1 and 80.")
        userNumber = 8;
        makeGrid(userNumber);
    }
});



//add 'clear' button functionality
clear.addEventListener('click', () => {
    container.innerHTML = '';
    makeGrid(userNumber);
});



