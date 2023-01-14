function login(){
    var user, password

    user = document.getElementById("usuario").value;
    password = document.getElementById("contraseña").value;

    
        if( user == "Juan" && password =="123") 
        {
            window.location = "index2.html";
        }
        else if( user == "David" && password =="456"){
            window.location = "index2.html";
        }

        else if( user == "Jhonatan" && password =="789"){
            window.location = "index2.html";
        }
    
        else{
            alert("Por favor ingrese de nuevo sus datos");
        }
    }

