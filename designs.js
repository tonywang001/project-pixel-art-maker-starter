
// Select color input
// Select size input
// document.querySelector('#inputHeight');

// When size is submitted by the user, call makeGrid()
document.querySelector('#sizePicker')
        .addEventListener('click', makeGrid);

document.querySelector('#pixelCanvas')
        .addEventListener('click', draw);

function makeGrid(e) {

    e.preventDefault();

    const table = document.querySelector('#pixelCanvas');

    console.log(e.target.getAttribute('type'));
    if (e.target.getAttribute('type') == 'submit') {
        // delete current table
        while (table.firstChild) {
            table.removeChild(table.firstChild);
        }
        const height = document.querySelector('#inputHeight').value;
        const width = document.querySelector('#inputWeight').value;
        console.log(height);
        console.log(width);
        for (let i=0; i<height; ++i) {
            let row = document.createElement('tr');
            for (let j=0; j<width; ++j) {
                let col = document.createElement('td');
                row.appendChild(col);
            }
            table.appendChild(row);
        }
    }

    console.log('make grid');

// Your code goes here!

}

function draw(e) {
    var color = document.querySelector('#colorPicker').value;
    e.target.style.backgroundColor = color;
    console.log(e.target);

}
