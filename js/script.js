const instructions = document.querySelector(".instructions button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");

// if startQuiz button clicked
instructions.onclick = ()=>{
    info_box.classList.add("activeInfo"); //show info box
    
}

// if exitQuiz button clicked
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
}