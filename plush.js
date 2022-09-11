console.log("page is loaded ... ")

function pop(){
    alert("Contact us at 555-5555");
}


var cart= parseInt(document.getElementById('cartnum').innerText);
console.log(cart);

function buy(){

    cart=cart+1;
    console.log(cart);
    document.getElementById('cartnum').innerText=cart;

}



var x=document.getElementById("switch").innerText;

function sort(elem){

    if(elem.value=="Price"){

        document.getElementById("switch").innerText ="Price";
        
        
    }
    else if(elem.value=="Best-Selling"){

        document.getElementById("switch").innerText ="Best selling"; 

    }
}