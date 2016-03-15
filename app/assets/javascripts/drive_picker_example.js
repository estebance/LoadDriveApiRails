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
    var scope = ['https://www.googleapis.com/auth/photos'];

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
            var picker = new google.picker.PickerBuilder().addView(google.picker.ViewId.PHOTOS).setOAuthToken(oauthToken).setDeveloperKey(developerKey).setCallback(pickerCallback).build();
            picker.setVisible(true);
        }
    }

// A simple callback implementation.
    function pickerCallback(data) {
        var url = 'nothing';
        if (data[google.picker.Response.ACTION] == google.picker.Action.PICKED) {
            var doc = data[google.picker.Response.DOCUMENTS][0];
            url = doc[google.picker.Document.URL];
        }
        var message = 'You picked: ' + url;
        document.getElementById('result').innerHTML = message;
    }

    // when document is ready do that
    $('#picker-button').click(function(){
        onApiLoad();
        console.log(pickerApiLoaded);
    });


});*/
