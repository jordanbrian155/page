document.getElementById("signout").onclick = function(){
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        window.location.href= "index.html"
      }).catch((error) => {
        // An error happened.
      });
}
    