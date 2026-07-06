const button = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme");

if(savedTheme === "light"){

    document.body.classList.add("light-mode");

    button.textContent = "☀️";

}

button.addEventListener("click", ()=>{

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){

        button.textContent="☀️";

        localStorage.setItem("theme","light");

    }else{

        button.textContent="🌙";

        localStorage.setItem("theme","dark");

    }

});