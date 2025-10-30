window.addEventListener('DOMContentLoaded',()=>{

    const length = document.getElementById('length');
    const uppercase = document.getElementById('uppercase');
    const lowercase = document.getElementById('lowercase');
    const numbers = document.getElementById('numbers');
    const symbols = document.getElementById('symbols');
    const password = document.getElementById('password');
    const copy = document.getElementById('copy');
    const genButton = document.getElementById('genButton');

    length.addEventListener('change',()=>{

        if(length.value>32){
            length.value = 32;
        }
        if(length.value<4){
            length.value = 4;
        }

    })

    genButton.addEventListener('click',()=>{

        let passwordString = "";
        let pool = "";

        if(!uppercase.checked&&!lowercase.checked&&!numbers.checked&&!symbols.checked){
            alert("at least select one option from the checkboxes");
        }

        else{

        const uppercaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowercaseString = "abcdefghijklmnopqrstuvwxyz";
        const numbersString = "0123456789";
        const symbolsString = "!#*/%&/()=?[]{}-_<>|,;.:";

        if(uppercase.checked){pool+=uppercaseString;}
        if(lowercase.checked){pool+=lowercaseString;}
        if(numbers.checked){pool+=numbersString;}
        if(symbols.checked){pool+=symbolsString;}

        for(let i=0;i<length.value;i++){
            let index = Math.floor(Math.random() * pool.length);
            passwordString += pool[index];
        }

        password.value = passwordString;

}})

    copy.addEventListener('click',()=>{

        const copied = password.value;

        if(!copied){alert("sorry, nothing to be copied yet.");}
        else{

            navigator.clipboard.writeText(copied)
                .then(()=>{
                    alert("password copied!");
                })
                .catch(err => {
                    console.error("failed to copy",err);
                });

        }

    })
    
})