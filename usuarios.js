var usuarios = {
    "aliexpress": {
        "nome": "ali",
        "password": "9090123"
    },
    "sil12": {
        "nome": "silvia",
        "password": "9090polo"
    }
};

function verificarCampos(opcao = "register") {
    if (opcao == "login") {
        let username = document.getElementById("username").value;
        let pass = document.getElementById("password").value;
        if (username.trim() == "") {
            alert("O campo de username está vázio");
        } else if (pass.trim() == "") {
            alert("O campo de password está vázio");
        } else {
            login(username, pass);
        }
    } else {
        let usernameRegister = document.getElementById("username-register").value;
        let passwordRegister = document.getElementById("password-register").value;
        let firstName = document.getElementById("first-name").value;
        let lastName = document.getElementById("last-name").value;
        if (usernameRegister.trim() == "") {
            alert("O campo de username está vázio");
        } else if (passwordRegister.trim() == "") {
            alert("O campo de password está vázio");
        } else if (firstName.trim() == "") {
            alert("O campo first name está vázio");
        } else if (lastName.trim() == "") {
            alert("O campo last name está vázio");
        } else {
            register(usernameRegister, passwordRegister, firstName, lastName);
        }
    }
}

function login(username, pass) {
    if (usuarios[username] == undefined) {
        alert("O usuário informado não exite.");
    } else if (pass == usuarios[username]["password"]) {
        alert("bem-vindo!");
    } else {
        alert("senha incorreta");
    }
}

function register(usernameRegister, passwordRegister, firstName, lastName) {
    // console.log(usernameRegister)
    // console.log(usuarios[usernameRegister]);
    // console.log(usuarios);
    if (usuarios[usernameRegister] === undefined) {
        usuarios[usernameRegister] = {
            "password": passwordRegister,
            "fistName": firstName,
            "lastName": lastName
        };
        alert("usuário criado");
    } else {
        alert("O nome de usuário já está sendo utilizado.");
    }
}