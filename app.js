let operationStr = "";
let string="";
const calcInput = document.querySelector('input')
const myBtns = document.querySelectorAll('button')
myBtns.forEach((btn)=>{
    btn.addEventListener("click",function(e){
    console.log(e.target)
    if(e.target.innerText == '=')
        {
            operationStr = eval(operationStr+string)
            calcInput.value = operationStr
        }
        else if(e.target.innerText == 'AC')
        {
            operationStr = ""
            calcInput.value = "" 
            string = ""  
        }

        else if(e.target.innerText == 'DEL')
        {
            string = string.substring(0,string.length-1)
            calcInput.value = string
        }
        else
        {
            let btnClick = e.target.innerText;
            //console.log(btnClick);
            if(btnClick == '+' || btnClick == '-' || btnClick == '*' || btnClick == '/' || btnClick == '%')
            {
                operationStr += (string+btnClick);
                string = "";
                calcInput.value = string
            }
            else
            {
                string += btnClick;
                calcInput.value = string;
            }
        }
    })
})