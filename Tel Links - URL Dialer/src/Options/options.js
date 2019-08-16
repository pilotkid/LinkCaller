//WHEN OPTIONS TAB IS OPEN LOAD IN SETTINGS
$(document).ready(load);

function load() {
    //LOAD THE URL FROM SETTINGS
    chrome.storage.sync.get(function (result) {
        $("#url").val(result.url);
    });
} 

//-------------------------------------------------------------

function save_options() {    
    //GET THE URL FROM THE SETTINGS PAGE
    var specurl = $('#url').val();

    //UPDATE THE SETTINGS
    chrome.storage.sync.set(
    {
        url: specurl,
    },
        UpdateStatus("Options Saved")
    );
}

//WHEN THE SAVE BUTTON IS CLICKED SAVE THE OPTIONS
$('#save').click(save_options);

//-------------------------------------------------------------

function UpdateStatus(statusmsg) {
    // Update status to let user know options were saved.    
    $('#status').text(statusmsg);

    //Show the message for 3/4 of a second
    setTimeout( function () { $('#status').text(''); } , 750);
}