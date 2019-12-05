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
                document.getElementById("form-failed").classList.remove("d-none");

            } else {
                console.log("All the fields are filled out.");

                const form = document.getElementById("contact");

                const method = form.getAttribute("method");
                const action = form.getAttribute("action");

                //Start for JS code from https://jsfiddle.net/seamusleahy/rxeuaatw/
                var formEl = document.getElementById('contact');

                    // 1. Setup the request
                    // ================================
                    // 1.1 Headers
                    var headers = new Headers();
                    // Tell the server we want JSON back
                    headers.set('Accept', 'application/json');

                    // 1.2 Form Data
                    // We need to properly format the submitted fields.
                    // Here we will use the same format the browser submits POST forms.
                    // You could use a different format, depending on your server, such
                    // as JSON or XML.
                    var formData = new FormData();
                    for (var i = 0; i < formEl.length; ++i) {
                        formData.append(formEl[i].name, formEl[i].value);
                    }

                    // This is for the purpose of this demo using jsFiddle AJAX Request endpoint
                    formData.append('json', JSON.stringify({example: 'return value'}));

                    // 2. Make the request
                    // ================================
                    //var url = 'https://formspree.io/mpzwlbpr';  //Alex's form.
                      var url = 'https://formspree.io/xrgbpkyw';  //Ryan's form.
                    var fetchOptions = {
                        method: 'POST',
                        headers,
                        body: formData
                    };

                    var responsePromise = fetch(url, fetchOptions);

                    // 3. Use the response
                    // ================================
                    responsePromise
                        .then(function (response) {
                            if (response.status >= 200 && response.status < 300) {
                                console.log("Form submission was successful, 200 code received.");
                                document.getElementById("form-success").classList.remove("d-none");
                                document.getElementById("form-failed").classList.add("d-none");
                            }else {
                                document.getElementById("form-server-error").classList.remove("d-none");
                                document.getElementById("form-success").classList.add("d-none");
                                console.log("Received error message from form website after submitting.");
                                console.error(err);
                            }});

                //End to JS code from https://jsfiddle.net/seamusleahy/rxeuaatw/

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





}


//=================================Recording and viewing page views=================================//
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

    let arr = [];
    if (pageViews && pageViews.length > 0) {
        // get the array stored in local storage at pageViewsKeyName
        arr = JSON.parse(pageViews);

    }
    // now we're able to insert an item in the page view data
    let newPageData = {
        "path": window.location.pathname,
        "timestamp": moment()
    };

    // now add new page data to the array
    arr.push(newPageData);

    // finally, we want to update our storage with the most up to date array
    //Ryan edit.  The array needs to be converted back to a string for storage.
    localStorage.setItem(pageViewsKeyName, JSON.stringify(arr));
}
//=================================Recording and viewing page views=================================//



// //===============  Load the internal storage =========================

//Attempt 1
function listPageViews(array) {
    let table = document.getElementById("websiteLogsTable");
    let tableBody = document.getElementById("logTableBody");
    array.map(item => {
        //creates the elements
        let tr = document.createElement("tr");
        let pageURL = document.createElement("td");
        let timeStamp = document.createElement("td");

        //adds values to the tags
        pageURL.innerText = item.path;
        timeStamp.innerText = item.timestamp;

        //add the td tags to the TR
        tr.appendChild(pageURL);
        tr.appendChild(timeStamp);

        //add the TR to the table
        tableBody.appendChild(tr);
    });
}

//Attempt 2
// function listPageViews(array) {
//     let table = document.getElementById("websiteLogsTable");
//     let tableBody = document.getElementById("logTableBody");
//
//     let tr = document.createElement("tr");
//     let pageURL = document.createElement("td");
//     let timeStamp = document.createElement("td");
//
//     let i;
//     for (i=0; i<array.length; i++){
//         pageURL.innerText = array[i].path;
//         timeStamp.innerText = array[i].timestamp;
//
//         //add the td tags to the TR
//         tr.appendChild(pageURL);
//         tr.appendChild(timeStamp);
//
//         //add the TR to the table
//         tableBody.appendChild(tr);
//     };
// }
// //============== End of load internal storage =======================




document.addEventListener('DOMContentLoaded', myAppOnload); // notice we do NOT call myAppOnload, we only pass the name of it. The event listener will call it (by using () after the name) when the event is triggered


//Records the page name and time accessed
window.onload = addPageView;


//Access local storage and populate table on table page.
listPageViews(JSON.parse(localStorage.getItem(pageViewsKeyName)));







