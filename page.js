function scrollToSection(){
  document.getElementById('i4').scrollIntoView({behavior:'smooth'});
}

// Scroll Reveal
const cards=document.querySelectorAll('.card');
window.addEventListener('scroll',()=>{
  cards.forEach(card=>{
    const top=card.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      card.classList.add('show');
    }
  });
});
