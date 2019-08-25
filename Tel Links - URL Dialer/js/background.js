//WHEN THE PAGE LOADS ADD CALLS TO MAKE PLUGIN WORK
$(document).ready(function ()
{
    //ADD A CLICK CALL FOR ALL TELEPHONE LINKS
    $('a[href^="tel:"]').click(function (e) {

        var PhoneNumber = $(this).attr("href").replace("tel:","").replace('-','').replace('(','').replace(')','');

        PlaceCall(PhoneNumber);
    });

    //GET THE DEFINED URL
    chrome.storage.sync.get(function (result) {
        //ADD URL TO DOCUMENT TO BE REFRENCED LATER
        $(document.body).append('<p id="call_to_url_chrome_plugin_value_id_hidden" hidden="true">'+result.url+'</p>');               
        return true;
    });

});

//PLACES A CALL VIA THE URL
function PlaceCall(tophone) {

    //CONFIRM THE USER WISHES TO PLACE THE CALL
    if (!confirm("Are you sure you wish to call " + tophone)) {
        return;
    }

    //GET THE URL TO PLACE THE CALL TO
    var CallTo = $('#call_to_url_chrome_plugin_value_id_hidden').text();

    //WITH THE URL FILL IN THE PHONE NUMBER WHERE THE TO PHONE NUMBER WAS
    var CallURL = CallTo.replace("{phone}", tophone);

    //PERFORM AJAX CALL TO PLACE THE PHONE CALL
    $.ajax({
        url: CallURL,        
        complete: function () {
            alert("Calling");
        }
    });

}
