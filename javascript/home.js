document.getElementById("home").onclick=function(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    firebase.auth().signInWithEmailAndPassword(email, password).then((userCredential) =>{
        let uid= userCredential.user.uid;
        // Log in successfully
        window.location.href="signout.html"
    }).catch((error) => {
        var errorCode = error.code;
    var errorMessage = error.message;
      });
}