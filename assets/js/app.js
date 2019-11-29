// we accept a param e (for event) even though we're not using it. The event handler will automatically pass the event to the function. We could leave it out entirely since we're not using it, but I think it's helpful to see it.
function myAppOnload(e) {
    $('.alert').alert();
}

document.addEventListener('onload', myAppOnload); // notice we do NOT call myAppOnload, we only pass the name of it. The event listener will call it (by using () after the name) when the event is triggered


document.getElementById("contact").addEventListener("submit", (e) => {
    e.preventDefault(); // prevents the event from taking the default action of sending the form as a postback event using GET
});



//Form Validation
var firstName = document.getElementById("first");
var lastName = document.getElementById("last");
var email = document.getElementById("email");
var calendar = document.getElementById("calendar");

function validate() {
    if (firstName.value == "" || lastName.value == "" || email.value == "" || calendar.value == "") {
        console.log("The input is empty.");
    } else {
        console.log("The input is a value.");
    }
}

var dropDown = document.getElementById("form-dropdown-test");

/*
var lastName = document.getElementById("last");
var email = document.getElementById("email");
//let reason = document.getElementById("form-dropdown-test");
var date = document.getElementById("date").value;


function validate(){
if (date == null){
    console.log("it's empty, and The data in the input reads as " + date);
}else{console.log("it has content and the data reads as " + date)}
};

 */