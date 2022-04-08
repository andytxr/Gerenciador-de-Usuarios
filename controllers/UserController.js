class UserController{

    constructor(formId, tableId){

        this.formEl = document.getElementById(formId);
        this.tableEl = document.getElementById(tableId);

        this.onSubmit();

    }

    //Pegando valores do formulário
    getValuesFromForm(){

        let user = {};
        //let é uma variável que só existe dentro de um bloco de código
        //Spread (...) é um operador que possibilita que você não precise mostrar quantos índices o Array vai ter
        [...this.formEl.elements].forEach(function(field, index){

            if(field.name == "gender" && field.checked){
                
                 user[field.name]=field.value;
         
            }
            else{
           
                 user[field.name]=field.value;
         
            }
         });
       
         //Um objeto é uma variável que instancia/representa uma classe
         return new User(user.name,user.gender,user.birth,user.country,user.email,user.password,user.photo,user.admin);

    }
    //Pegando a foto anexada pelo usuário
    getPhoto(){

        let fileReader = new FileReader();
        [...this.formEl.elements].filter(item=>{
            if(item.name==="photo"){
                return item;
            }
        })

        fileReader.onload = ()=>{

        };

        fileReader.readAsDataURL();

    }

    //Enviando valores do formulário
    onSubmit(){

        //Exportando os valores do formulário para o JSON
        this.formEl.addEventListener("submit", event => {

            event.preventDefault();

            let values=this.getValuesFromForm()
            values.photo="";

            this.addLine(values);
          
          })
          
    }

    addLine(dataUser){

       this.tableEl.innerHTML=`
        <tr>
             <td><img src="${dataUser.photo}" alt="User Image" class="img-circle img-sm"></td>
             <td>${dataUser.name}</td>
             <td>${dataUser.email}</td>
             <td>${dataUser.admin}</td>
             <td>${dataUser.birth}</td>
             <td>
                  <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
                  <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
             </td>
      </tr>`

   
   }

}