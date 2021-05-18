//Selectoren

let enter = document.querySelector('#todo-button');
let input = document.querySelector('.todo-input');
let list = document.querySelector('.todo-list');

//functies
//invoerfuncitie
enter.onclick = function buttonclick(){
    let text = document.createTextNode(input);
    let li = document.createElement('li');
    li.appendChild(text);
    if (input.value != ""){
        list.appendChild(li);
        li.innerText = input.value;
        input.value = "";
    }else {
        alert("Vul aub iets in");
    }
//verwijderen
    let delbtn = document.createElement('button');
    delbtn.innerText = "X";
    li.appendChild(delbtn);
    delbtn.addEventListener('click', ()=>{
        
        list.removeChild(li);
    })

//verwijderalles
    let delall = document.querySelector('.button-bottom');
    delall.addEventListener('click', ()=> {
        while(list.hasChildNodes())
        {
            list.removeChild(list.firstChild);
        }
    })
    
//enterknop
    //input.addEventListener('keyup', function(event) {
        //if(event.keyCode === 13)
            //{
                //alert("hesdrf")

            //}
    //});
}