(function() {
    let allDelete = document.querySelector(".btn-alldelte");
    let oneDelete = document.querySelector(".btn-onedelte");
    let equal = document.querySelector(".btn-equal");
    let buttons = document.querySelectorAll(".btn");
    let screen = document.querySelector(".display");

    buttons.forEach(function(button) {
        button.addEventListener("click", function(e) {
            let value = e.target.dataset.num;
            screen.value += value;
        });
    });

    allDelete.addEventListener("click",function (e){
        screen.value="";

    })

    oneDelete.addEventListener("click",function (){
        screen.value = screen.value.toString().slice(0, -1);
    })

    
    equal.addEventListener("click",function(){
        
            

                let finalanswer = eval(screen.value);

                   screen.value = finalanswer;
             
        
    })

   
})();
