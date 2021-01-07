const search = document.querySelector('.search');
const searchBtn = document.querySelector('.searchBtn')

searchBtn.addEventListener('click', () =>{
    search.classList.toggle('active');
    search.focus()
})