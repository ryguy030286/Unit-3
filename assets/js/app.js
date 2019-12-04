// we accept a param e (for event) even though we're not using it. The event handler will automatically pass the event to the function. We could leave it out entirely since we're not using it, but I think it's helpful to see it.
function myAppOnload(e) {
    $('.alert').alert();

    let form = document.getElementById("contact")
    try {
        form.addEventListener('submit', e => {
            e.preventDefault();

            //Form Validation
            let firstName = document.getElementById("first");
            let lastName = document.getElementById("last");
            let email = document.getElementById("email");
            let calendar = document.getElementById("calendar");
            let dropDown = document.getElementById("drop-down-feedback");


            if (firstName.value == "" || lastName.value == "" || email.value == "" || calendar.value == "" || dropDown.value == "") {
                console.log("One of the fields are not filled out.");

            } else {
                console.log("All the fields are filled out.");

                const form = document.getElementById("contact");

                const method = form.getAttribute("method");
                const action = form.getAttribute("action");


                //let data = $(form).serialize();
                let options = {
                    method, // shorthand for method: method
                    mode: 'cors', // make sure you are running through HTTP:// and not file://
                    body: new FormData(form)// see <https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData>
                };

                /*
                const submitForm = async (evt) => {
                    return await fetch(action, options)

                       .then(function(response){
                        if (response.ok) {
                            console.log("Form submission was successful, 200 code received.");
                            document.getElementById("form-success").classList.remove("d-none");
                            document.getElementById("form-failed").classList.add("d-none");
                        }
                    })
                        .catch(function(err){
                        document.getElementById("form-failed").classList.remove("d-none");
                        document.getElementById("form-success").classList.add("d-none");
                        console.log("Received error message from form website after submitting.");
                        console.log(response.status);
                        console.error(err);

                    });


                 */

                //Ryan's new test, original code block is commented out above.
                const submitForm = async (evt) => {
                    return await fetch(action, options)

                        .then(function (response) {
                            if (response.status == 200) {
                                console.log("Form submission was successful, 200 code received.");
                                document.getElementById("form-success").classList.remove("d-none");
                                document.getElementById("form-failed").classList.add("d-none");
                            }
                        })
                        .catch(function (err) {
                            document.getElementById("form-failed").classList.remove("d-none");
                            document.getElementById("form-success").classList.add("d-none");
                            console.log("Received error message from form website after submitting.");
                            console.error(err);

                        });
                };

                // @todo handle submitForm Promise
                // @see <https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#Response_objects>
                // @see <https://javascript.info/async>
                // on a successful promise/submission, display a success alert
                // on a failure promise/submission, display a failure (danger) alert

            }

        });  //End of method
    } catch (e) {
        console.log("There was an error on line 9.");
    }
}

//Recording and viewing page views

/**
 * Need to do:
 * - Add a new page view & timestamp
 * - list the page views & timestamps
 */

const pageViewsKeyName = "pageViews";

/**
 * Add the current page path + timestamp to the pageviews entry in local storage
 */
function addPageView() {
    /**
     * In order to add a page view,
     * we have to first check if there are any page views set
     * and if not, then we need to create the array first
     * afterward, or if the array already existed, we want to append to the array
     */
    let pageViews = localStorage.getItem(pageViewsKeyName);
    console.log("Local Storage Count: " + localStorage.length);
    let arr = [];
    if (pageViews && pageViews.length > 0) {
        // get the array stored in local storage at pageViewsKeyName

        arr = JSON.parse(pageViews);


        console.log("However, if this text shows that means the issues were caught and the script is " +
            "continuing to execute.");


        // now we're able to insert an item in the page view data
        let newPageData = {
            "path": window.location.pathname,
            "timestamp": moment()
        };

        // now add new page data to the array
        arr.push(newPageData);
        console.log("Array Length: " + arr.length);

        // arr.push(newPageData.path, newPageData.timestamp);


        // finally, we want to update our storage with the most up to date array
        localStorage.setItem(pageViewsKeyName, arr);
    }

    function listPageViews() {
    }
}

    document.addEventListener('DOMContentLoaded', myAppOnload); // notice we do NOT call myAppOnload, we only pass the name of it. The event listener will call it (by using () after the name) when the event is triggered

//Loads method to record page urls and time stamp to local stoarge.
    document.addEventListener('DOMContentLoaded', addPageView);


//Bootstrap js

//Toast Message
//Launches advertisement 5 seconds after page loads....
    $(document).ready(function () {
        setTimeout(function () {
            $('.toast').toast('show');
        }, 5000);
    });

//Closes advertisement 30 seconds after page loads.
    $(document).ready(function () {
        setTimeout(function () {
            $('.toast').toast('hide');
        }, 30000);
    });


//Drop Down on Form

//Code was modified from https://stackoverflow.com/questions/24620741/get-selected-item-value-from-bootstrap-dropdown-with-specific-id
    $('#form-dropdown-test a').on('click', function () {
        $('#drop-down-feedback').val($(this).html());
    });


