function addpop(){
    document.getElementById("popup").style.display="block"
    document.getElementById("trip").style.display="none"
}

const tasklist=[]

const addtask=()=>{
    const name=document.getElementById("card").ariaValueMax;
    console.log(name);
    const tempObj={
        id:Date.now(),
        taskName:name
    }
    tasklist.push(tempObj)
    console.log(tasklist)

    addtaskonscreen()
}
function addtaskonscreen(){
    const element=document.createElement("div")
    element.setAttribute("class","child");
    element.innerText=<i class="fas fa-plus-circle"></i>

    element.innerText=tasklist[tasklist.length-1].task;
    const Newelement=document.getElementById("parent")
    Newelement.appendChild(element)
}
