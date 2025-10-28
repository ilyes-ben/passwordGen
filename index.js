window.addEventListener('DOMContentLoaded',()=>{

    const length = document.getElementById('length');
    const lengthLabel = document.getElementById('lengthLabel');
    const uppercase = document.getElementById('uppercase');
    const lowercase = document.getElementById('lowercase');
    const numbers = document.getElementById('numbers');
    const symbols = document.getElementById('symbols');
    const password = document.getElementById('password');
    const copy = document.getElementById('copy');
    const genButton = document.getElementById('genButton');

    length.addEventListener('change',()=>{

        if(length.value<10){
            lengthLabel.innerText = 'Length: 0' + length.value.toString();
        }
        else{
            lengthLabel.innerText = 'Length: ' + length.value.toString();
        }

    })

    genButton.addEventListener('click',()=>{

        if(!uppercase.checked&&!lowercase.checked&&!numbers.checked&&!symbols.checked){
            alert("at least select one option from the checkboxes");
        }

    })
    
})