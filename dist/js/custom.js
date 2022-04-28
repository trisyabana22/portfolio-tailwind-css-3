// menu active
const link = document.querySelectorAll('.link');

Array.from(link).forEach((item)=> {
    item.addEventListener('click', ()=> {
        let selected = document.getElementsByClassName('active');
        selected[0].className = selected[0].className.replace("active", '')
        // if(selected[0].classList.contains('active')){
        //     selected[0].classList.remove('active')
        // }
        // item.className += " active";
        item.classList.add('active')
    })
})


// Window active on scrolling
const sections = document.querySelectorAll('section');

const header = document.querySelector('header')
window.onscroll = function(){
    let current = '';
    
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;

        if(scrollY >= sectionTop - 60){
            current = section.getAttribute('id');

        };
    })
    link.forEach((li)=>{
        li.classList.remove('active');
        if(li.classList.contains(current)){
            li.classList.add('active');
        }
    })
}