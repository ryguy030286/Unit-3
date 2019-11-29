// we accept a param e (for event) even though we're not using it. The event handler will automatically pass the event to the function. We could leave it out entirely since we're not using it, but I think it's helpful to see it.
function myAppOnload(e) {
    $('.alert').alert();

    //Bootstrap JS Tool Tip
    $('[data-toggle="tooltip"]').tooltip()

}

document.addEventListener('onload', myAppOnload); // notice we do NOT call myAppOnload, we only pass the name of it. The event listener will call it (by using () after the name) when the event is triggered


document.getElementById("contact").addEventListener("submit", validate);



//Form Validation
var firstName = document.getElementById("first");
var lastName = document.getElementById("last");
var email = document.getElementById("email");
var calendar = document.getElementById("calendar");
var dropDown = document.getElementById("drop-down-feedback");


function validate(e) {
if (firstName.value == "" || lastName.value == "" || email.value == "" || calendar.value == "" || dropDown.value == "") {
        console.log("Launch error message.");
        document.getElementById("form-failed").classList.remove("d-none");
        document.getElementById("form-success").classList.add("d-none");
        e.preventDefault();
    } else {
        console.log("Confirm validation is ok.");
        document.getElementById("form-success").classList.remove("d-none");
        document.getElementById("form-failed").classList.add("d-none");
        e.preventDefault();
    }
}

//Bootstrap Toast Message

//Launches advertisement 5 seconds after page loads.
$(document).ready(function() {
    setTimeout(function() {
        $('.toast').toast('show');
    }, 5000);
});

//Closes advertisement 30 seconds after page loads.
$(document).ready(function() {
    setTimeout(function() {
        $('.toast').toast('hide');
    }, 30000);
});


//Boostrap Drop Down on Form

$('#form-dropdown-test a').on('click', function(){
    $('#drop-down-feedback').val($(this).html());
});