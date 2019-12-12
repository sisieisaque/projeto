var firebaseConfig = {
  apiKey: "AIzaSyAMUhidIteMs2MrDd-tsZMtE9G-IlX-SHU",
  authDomain: "carbide-eye-251017.firebaseapp.com",
  databaseURL: "https://carbide-eye-251017.firebaseio.com",
  projectId: "carbide-eye-251017",
  storageBucket: "carbide-eye-251017.appspot.com",
  messagingSenderId: "1043349094187",
};


firebase.initializeApp(firebaseConfig);

var database = firebase.database();
var humidity = 0;
var temperature = 0;


firebase.database().ref('ESP32_DeviceHumidity/Data').once('value').then(function(snapshot) {
  humidity = snapshot.val();
  $("#umidade").html(humidity + "%");
  $("#umidade2").html(humidity + "%");
});

firebase.database().ref('ESP32_DeviceTemperature/Data').once('value').then(function(snapshot) {
  temperature = snapshot.val();
  $("#temperatura").html(temperature + "ºC");
  $("#temperatura2").html(temperature + "ºC");
});



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
      catch {

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
    
}