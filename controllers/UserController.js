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
            else if(field.name=="admin") {

                user[field.name]=field.checked;

            }
            else
            {
           
                user[field.name]=field.value;
         
            }
         });
       
         //Um objeto é uma variável que instancia/representa uma classe
         return new User(user.name,user.gender,user.birth,user.country,user.email,user.password,user.photo,user.admin);

    }
    //Pegando a foto anexada pelo usuário
    getPhoto(){

        return new Promise((resolve, reject) => {

            let fileReader = new FileReader();

            let elements = [...this.formEl.elements].filter(item=>{

              if(item.name==="photo") return item;

            })

            let file = elements[0].files[0];
            fileReader.onload = ()=>{

                resolve(fileReader.result);

            };
            fileReader.onerror=(e)=>{

                reject(e);

            }
            
            if(file){

                file.readAsDataURL(file);

            }
            else{

                resolve('dist/img/boxed-bg.jpg');

            }

        });
    }

    //Enviando valores do formulário
    onSubmit(){

        //Exportando os valores do formulário para o JSON
        this.formEl.addEventListener("submit", event => {

            event.preventDefault();
            let submitBtn = this.formEl.querySelector("[type=submit]")

            submitBtn.disabled=true

            let values=this.getValuesFromForm();
            
            this.getPhoto().then(
                (content)=>{

                    values.photo=content;
                    this.addLine(values);

                    this.formEl.reset();
                    submitBtn.disabled=false;

                },
                (e)=>{

                    console.error(e)

                });
          
          });
          
    }

    addLine(dataUser){

        let tr = document.createElement('tr');

        tr.innerHTML = ` 
            <td><img src="${dataUser.photo}" alt="User Image" class="img-circle img-sm"></td>
            <td>${dataUser.name}</td>
            <td>${dataUser.email}</td>
            <td>${(dataUser.admin) ? "Sim" : "Não"}</td>
            <td>${Utils.dateFormat(dataUser.register)}</td>
            <td>
                <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
                <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
            </td>
        `;

       this.tableEl.appendChild(tr);

   }

}