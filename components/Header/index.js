// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

const data = [
    {
        date: 'MARCH 28, 2019',
        title: 'Lambda Times',
        temp: '98°'
    }
]

function Header(attr) {
    const head = document.createElement('div');
    head.classList.add('header')

    const date = document.createElement('span');
    date.classList.add('date');
    date.textContent = attr.date;
    head.appendChild(date);

    const title = document.createElement('h1');
    head.textContent = attr.title;
    head.appendChild(title);

    const temp = document.createElement('span');
    temp.classList.add('temp')
    temp.textContent = attr.temp;
    head.appendChild(temp);
    
    return head
}

const container = document.querySelector('.header-container');
data.forEach(attr => {
    let newHeader = Header(attr)
    container.appendChild(newHeader)
})

