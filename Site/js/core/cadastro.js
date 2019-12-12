var firebaseConfig = {
  apiKey: "AIzaSyAMUhidIteMs2MrDd-tsZMtE9G-IlX-SHU",
  authDomain: "carbide-eye-251017.firebaseapp.com",
  databaseURL: "https://carbide-eye-251017.firebaseio.com",
  projectId: "carbide-eye-251017",
  storageBucket: "carbide-eye-251017.appspot.com",
  messagingSenderId: "1043349094187",
};


firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

async function handleSignUp(e) {
	  e.preventDefault();

      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;
      if (email.length < 4) {
        alert('Please enter an email address.');
        return;
      }
      if (password.length < 4) {
        alert('Please enter a password.');
        return;
      }

      try{
      		await firebase.auth().createUserWithEmailAndPassword(email, password);
  		}
      catch (error){

        var errorCode = error.code;
        var errorMessage = error.message;

        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
        return 0;
      }

      try{
      		await firebase.auth().signInWithEmailAndPassword(email, password)
  		}
  	  catch{
			var errorCode = error.code;
			var errorMessage = error.message;

			if (errorCode === 'auth/wrong-password') {
			alert('Wrong password.');
			} else {
			alert(errorMessage);
			}
			console.log(error);

  	  }

  	  var user = firebase.auth().currentUser;

		if (user) {
			var usuario = document.getElementById('usuario').value;
	      	var nome = document.getElementById('nome').value;
	      	var sobrenome = document.getElementById('sobrenome').value;
	      	var endereço = document.getElementById('endereço').value;
	      	var cidade = document.getElementById('cidade').value;
	      	var pais = document.getElementById('pais').value;
	      	var cep = document.getElementById('cep').value;

			db.collection('usuarios').doc(user.uid).set({
				Usuario: usuario,
				Nome: nome,
				Sobrenome: sobrenome,
				Endereço: endereço,
				Cidade: cidade,
				Pais: pais,
				CEP: cep
			})
			.then(function(docRef) {
				console.log("Document written with ID: ", user.uid);
			})
			.catch(function(error) {
				console.error("Error adding document: ", error);
			});

		} else {

		}
    window.location.href = "https://pi-tech-garden.firebaseapp.com/material-dashboard-master22222/login.html";
    }


function logOut(){
  var user = firebase.auth().currentUser;
  if (user){
    signOut();
  }
}

function sendEmailVerification() {
  firebase.auth().currentUser.sendEmailVerification().then(function() {
    alert('Email Verification Sent!');
  });
}

window.onload = function() {
  		initApp();
	};

function initApp(){
  	document.getElementById('formulario').addEventListener('submit', handleSignUp);
}