const questions=document.querySelectorAll(".faq-question");

questions.forEach(question=>{

    question.addEventListener("click",()=>{

        const answer=question.nextElementSibling;

        const open=answer.style.maxHeight;

        document.querySelectorAll(".faq-answer").forEach(item=>{

            item.style.maxHeight=null;

        });

        if(!open){

            answer.style.maxHeight=answer.scrollHeight+"px";

        }

    });

});