let input = document.getElementById('input');
let buttons = document.querySelectorAll('buttons');

let string="";
let arr = Array.from(buttons);
arr.forEach(buttons => {
    buttons.addEventListener('click',(e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value= string;

        }

        string += e.target.innerHTML;
        input.value = string;
    })
})