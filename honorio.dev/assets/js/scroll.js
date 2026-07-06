const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

const hiddenElements=document.querySelectorAll(

"section,.project-card,.service-card,.skill-card,.testimonial-card"

);

hiddenElements.forEach((el)=>observer.observe(el));