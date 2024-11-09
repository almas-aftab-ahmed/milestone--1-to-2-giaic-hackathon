const google = document.getElementById('toggle-skills') as HTMLButtonElement
const trick = document.getElementById('skills') as HTMLElement

google.addEventListener('click', ()=> {
    if(trick.style.display === 'none'){
        trick.style.display = 'block'
    } else{
        trick.style.display = 'none'
    }
});