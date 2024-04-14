let bar = document.getElementById('bar');
let nav = document.getElementById('navbar');
const close = document.getElementById('close');
const hero = document.getElementById('hero');
const remove = document.querySelectorAll('.remove');
const rowData = document.querySelectorAll('#row-data');
    if(bar){
        bar.addEventListener('click', () => {
            nav.setAttribute('class' , 'active')
        })
    }
    if(close){
        close.addEventListener('click', () => {
            nav.classList.remove('class' , 'active')
        })
    }
    if(hero){
        hero.addEventListener('click', () => {
            nav.setAttribute('class' , 'dea')
        })
    }
    remove[0].addEventListener('click', (e) => {
        rowData[0].setAttribute('class' , 'row-data');
        
    }) 
    
    remove[1].addEventListener('click', (e) => {
            rowData[1].setAttribute('class' , 'row-data');
            
        }) 
        remove[2].addEventListener('click', (e) => {
            rowData[2].setAttribute('class' , 'row-data');
        })