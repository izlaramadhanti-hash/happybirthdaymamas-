
// ===== MAMAS BIRTHDAY INTERACTION =====


// Open Letter

function openLetter(){

    const letter = document.querySelector(".letter");

    if(letter){
        letter.classList.add("show");
    }

}


// Candle Blow

function blowCandle(){

    const flame = document.querySelector(".flame");

    if(flame){

        flame.innerHTML = "💨";

        setTimeout(()=>{
            flame.innerHTML="✨";
        },1500);

    }

    createConfetti();

}



// Floating hearts

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML=["💗","💕","💖","🌸"][Math.floor(Math.random()*4)];

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(15+Math.random()*20)+"px";

    heart.style.animationDuration=(4+Math.random()*4)+"s";


    document.body.appendChild(heart);


    setTimeout(()=>{
        heart.remove();
    },7000);

}


setInterval(createHeart,800);




// Confetti

function createConfetti(){

    for(let i=0;i<40;i++){

        const confetti=document.createElement("div");

        confetti.innerHTML="✨";

        confetti.style.position="fixed";
        confetti.style.left="50%";
        confetti.style.top="50%";
        confetti.style.fontSize="20px";

        confetti.style.transform=
        `translate(${Math.random()*400-200}px,
        ${Math.random()*400-200}px)`;

        confetti.style.transition="1s";

        document.body.appendChild(confetti);


        setTimeout(()=>{
            confetti.remove();
        },1000);

    }

}



// Scroll animation

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity=1;
entry.target.style.transform="translateY(0)";

}

})

});


document.querySelectorAll(".card,.item")
.forEach(el=>{

el.style.opacity=0;
el.style.transform="translateY(30px)";
el.style.transition="1s";

observer.observe(el);

});
