//aqui llamo a unas etiquetas html para darle algunos eventos

//EVENTOS

var titulo = document.getElementById('titulo');
titulo.addEventListener('mouseover',function(){
    titulo.style.backgroundColor="#ecf0f1";
});
titulo.addEventListener('mouseout',function(){
    titulo.style.backgroundColor="white";
});


var formu = document.getElementById('formu');
formu.addEventListener('mouseover',function(){
    formu.style.backgroundColor="#f7f1e3";
});
formu.addEventListener('mouseout',function(){
    formu.style.backgroundColor="white";
});

var rights = document.getElementById('rights');
rights.addEventListener('mouseover',function(){
    rights.style.backgroundColor="#ecf0f1";
});
rights.addEventListener('mouseout',function(){
    rights.style.backgroundColor="white";
});

var contenedor = document.querySelector('#contenedor');
contenedor.addEventListener('mouseover',function(){
    contenedor.style.backgroundColor="#bdc3c7";
});
contenedor.addEventListener('mouseout',function(){
    contenedor.style.backgroundColor="white";
});

var derechos = document.querySelector('#rights');
derechos.addEventListener('mouseover',function(){
    derechos.style.backgroundColor="#dfe4ea";
});
derechos.addEventListener('mouseout',function(){
    derechos.style.backgroundColor="white";
});

class Password{
    constructor(password,dblcheck,name){
        this.password = password;
        this.dblcheck = dblcheck;
        this.name = name;
    }
    
}


class UI{
    showMessage(message,cssClass){
        const h2 = document.createElement('h2');
        h2.className = 'alarma alert-'+ cssClass;
        h2.appendChild(document.createTextNode(message));
        const alarma = document.querySelector('#alarma');
        alarma.appendChild(h2);
        

        setTimeout(function() {
            document.querySelector('h2').remove();
        }, 5000);

      
        
    }
    resetMessage(){


    }

    resetFormulario(){
        document.getElementById('formulario').reset();
    }

   

    
}

 const formulario = document.getElementById('formulario')
.addEventListener('submit',function(e){
        const password = document.getElementById('password').value;
        const dblcheck = document.getElementById('dblcheck').value;
        const name = document.getElementById('name').value;
        const newPassword = new Password(password,dblcheck,name);

        var userinter = new UI
        var compare = [1,2,3,4,5,6,7,8];
        if(password<compare.length){
            alert('Password ha de tener minimo 8 carateres');
        }

        if(password === '' || dblcheck === '' || name === ''){
               return userinter.showMessage('introduzca todos los campos','info');
        }
        
        
        if(password === dblcheck){
             userinter.showMessage('Contraseña Correcta','success');
        }else{
             userinter.showMessage('Contraseña Incorrecta','danger');
        }
        userinter.resetFormulario();
        e.preventDefault();
});


    
