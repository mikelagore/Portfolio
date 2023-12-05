let greetings = "Hello, it's me Mike"
  console.log(greetings);

// Year
const year = new Date().getFullYear();
  document.getElementById('year').outerHTML = year;

  // Button Alert
const alrt = document.getElementById('alert');
let Mike = ('Hello World');
  alrt.addEventListener('click', () =>{
    alert(Mike)
  });

// Change Text When Hover
const hover = document.getElementById('alert');
  hover.onmouseover = () =>{
    hover.innerText = "Pressed"
    hover.style.backgroundColor = 'orange'

  hover.onmouseout = () =>{
    hover.innerText = "Press Me"
    hover.style.backgroundColor = ''
  }}
  
// Button Increment
let number = 0
let counter = document.getElementById('counter')
let Incrementer = document.getElementById('Incrementer')
  Incrementer.addEventListener('click', () =>{
    number++;
    counter.textContent = number.toString()
    if(number %2 == 0){
      counter.classList.add('even')
      counter.classList.remove('odd')
    }else{
      counter.classList.add('odd')
      counter.classList.remove('even')
    }
  })

  // Loops
  const numberlist = document.getElementById('loops')
    for(let i = 1; i <= 100; i++){
      const listitems = document.createElement('li')
      const even = i % 2 == 0
      listitems.innerHTML = even ? "Even" : "Odd"
      numberlist.appendChild(listitems)

      if(even) listitems.classList.add("Even")
        else listitems.classList.add("Odd")
    }
