// we accept a param e (for event) even though we're not using it. The event handler will automatically pass the event to the function. We could leave it out entirely since we're not using it, but I think it's helpful to see it.
function myAppOnload(e) {
    $('.alert').alert();

    console.log("Start of myAppOnLoad function.");

    let form = document.getElementById("#contact")

    form.addEventListener('submit', e => {
        e.preventDefault();

        //Form Validation
        let firstName = document.getElementById("first");
        let lastName = document.getElementById("last");
        let email = document.getElementById("email");
        let calendar = document.getElementById("calendar");
        let dropDown = document.getElementById("drop-down-feedback");


        if (firstName.value == "" || lastName.value == "" || email.value == "" || calendar.value == "" || dropDown.value == "") {
            console.log("Launch error message.");
            document.getElementById("form-failed").classList.remove("d-none");
            document.getElementById("form-success").classList.add("d-none");
        } else {
            console.log("Confirm validation is ok.");
            document.getElementById("form-success").classList.remove("d-none");
            document.getElementById("form-failed").classList.add("d-none");
            const form = document.getElementById("#contact");

            const method = form.getAttribute("method");
            const action = form.getAttribute("action");
            const submitForm = async (evt) => {
                return await fetch(action, {
                    method, // shorthand for method: method
                    mode: 'cors', // make sure you are running through HTTP:// and not file://
                    data: new FormData(form) // see <https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData>
                });
            };

            console.log(submitForm());

        // @todo handle submitForm Promise
        // @see <https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#Response_objects>
        // @see <https://javascript.info/async>
        // on a successful promise/submission, display a success alert
        // on a failure promise/submission, display a failure (danger) alert

    }

    });

    console.log("myApponLoad Loaded");

}

document.addEventListener('onload', myAppOnload); // notice we do NOT call myAppOnload, we only pass the name of it. The event listener will call it (by using () after the name) when the event is triggered
console.log("After the document event listener");

//Bootstrap Toast Message

//Launches advertisement 5 seconds after page loads....
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

//Code was modified from https://stackoverflow.com/questions/24620741/get-selected-item-value-from-bootstrap-dropdown-with-specific-id
$('#form-dropdown-test a').on('click', function(){
    $('#drop-down-feedback').val($(this).html());
});