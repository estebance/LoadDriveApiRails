/**
 * Created by estebance on 3/15/16.
 */
// copy from https://developers.google.com/picker/docs/
// The Browser API key obtained from the Google Developers Console.

/*
$(".static_pages.picker").ready(function() {

    // project this is a browser key
    var developerKey = 'your developer key';

    // The Client ID obtained from the Google Developers Console. Replace with your own Client ID.
    var clientId = "your client id";

    // Replace with your own App ID. (Its the first number in your Client ID)
    var appId = "your app id";

    // Scope to use to access user's photos.
    var scope = ['https://www.googleapis.com/auth/drive'];

    var pickerApiLoaded = false;
    var oauthToken;

    // Use the API Loader script to load google.picker and gapi.auth.
    function onApiLoad() {
        gapi.load('auth', {'callback': onAuthApiLoad});
        gapi.load('picker', {'callback': onPickerApiLoad});
    }

    function onAuthApiLoad() {
        window.gapi.auth.authorize(
            {
                'client_id': clientId,
                'scope': scope,
                'immediate': false
            },
            handleAuthResult);
    }

    function onPickerApiLoad() {
        pickerApiLoaded = true;
        createPicker();
    }

    function handleAuthResult(authResult) {
        if (authResult && !authResult.error) {
            oauthToken = authResult.access_token;
            createPicker();
        }
    }

// Create and render a Picker object for picking user Photos.
    function createPicker() {
        if (pickerApiLoaded && oauthToken) {
            var picker = new google.picker.PickerBuilder().
            addView(google.picker.ViewId.DOCS).
            addView(google.picker.ViewId.FOLDERS).
            addView(google.picker.ViewId.DOCUMENTS).
            addView(google.picker.ViewId.PRESENTATIONS).
            addView(google.picker.ViewId.SPREADSHEETS).
            addView(new google.picker.DocsUploadView()).
            setOAuthToken(oauthToken).setDeveloperKey(developerKey).
            setCallback(pickerCallback).
            build();
            picker.setVisible(true);
        }
    }

// A simple callback implementation.
    function pickerCallback(data) {
        var url = 'nothing';
        if (data[google.picker.Response.ACTION] == google.picker.Action.PICKED) {
            console.log(data);
            // var fileId = data.docs[0].id;
            var url= data.docs[0].url;
            // alert('The user selected: ' + fileId + url );
        }
        var message = 'You picked: ' + url;
        document.getElementById('result').innerHTML = message;
    }

    // when document is ready do that
    $('#picker-button').click(function(){
        onApiLoad();
        console.log(pickerApiLoaded);
    });


});
*/
