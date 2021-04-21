
// const nation = document.querySelector("#nationality");
// function switcher(){
//     if (document.querySelector("#nationality").value == "NG")
//         {
//             document.querySelector("#ngstates").style.display = "inline";
//             document.querySelector("#typein").style.display = "hidden";
//         }


// }

// //document.querySelector("#nationality").onselect = switcher;

// nation.addEventListener("click",switcher);

document.querySelector(".bg-white").addEventListener('click',bgChanger);

document.querySelector(".bg-black").addEventListener('click',bgChanger2);

function bgChanger(){
    document.body.style.backgroundColor = 'rgb(226, 223, 223)';
    
        document.body.style.color = 'rgb(2,3,4)';
    
    

}

function bgChanger2(){
    document.body.style.backgroundColor = 'rgb(2,3,4)';
    
        document.body.style.color = 'white';
    
    
}
