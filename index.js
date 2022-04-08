var name = document.querySelector("#exampleInputName");
var gender = document.querySelector("#form-user-create [name=gender]:checked");
var birth = document.querySelector("#exampleInputBirth");
var country = document.querySelector("#exampleInputCountry");
var email = document.querySelector("#exampleInputEmail");
var password = document.querySelector("#exampleInputPassword");
var photo = document.querySelector("#exampleInputFile");
var admin = document.querySelector("#exampleInputAdmin");

//Quando usarmos [] em um querySelector quer dizer que estamos fazendo um filtro
//Quando usarmos : é quando estamos procurando uma condição

var fields = document.querySelectorAll("#form-user-create [name]");
var user = {};
document.getElementById("form-user-create").addEventListener("submit", function(event){

event.preventDefault();
fields.forEach(function(field, index){

     if(field.name == "gender" && field.checked){
         
          user[field.name]=field.value;
  
     }
     else{
    
          user[field.name]=field.value;
  
     }
  });

  console.log(user);

})

