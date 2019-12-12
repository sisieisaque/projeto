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

async function handleSignIn(e){
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
            await firebase.auth().signInWithEmailAndPassword(email, password);
            user = firebase.auth().currentUser;
            if(user){
                window.location.href = "https://pi-tech-garden.firebaseapp.com/material-dashboard-master22222/home.html"
            }
        }
        catch(error){
  	      var errorCode = error.code;
  	      var errorMessage = error.message;

  	      if (errorCode === 'auth/wrong-password') {
  	      alert('Wrong password.');
  	      } else {
  	      alert(errorMessage);
  	      }
  	      console.log(error);

  	      if (errorCode === 'auth/invalid-email') {
  	      alert('Invalid Email');
  	      } else{
  	      alert(errorMessage);
  	      }
  	      console.log(error);
  	      }
        
}

window.onload = function() {
  		initApp();
	};

function initApp(){
    document.getElementById('login').addEventListener('submit', handleSignIn);
}