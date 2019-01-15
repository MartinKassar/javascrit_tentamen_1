// JavaScript eller jQuery

// Första log-in knappen
$('body').html('<button id="loginbutton">Log in</button>')

// Funktion som lyssnar efter click på knappen för att byta till log-in-screen
$('#loginbutton').bind('click', function () {
    $('body').html('<div id="logscreen"><h2 id="login">Login</h2>Username <input id="user"><br><br>Password <input id="password" type="password"><br><br><button id="submit">Submit</button><br><br></div>');
    $('#logscreen').css({
        'background-color': 'teal',
        'width': '400px',
        'height': '200px',
        'text-align': 'center',

    });
    $('#submit').bind('click', function () {
        let enteredUser = $('#user').val()
        let enteredPassword = $('#password').val()
        if (enteredUser == "Steve" && enteredPassword == "123") {
            alert("You have logged in")
        } else {
            alert("Oops, try again!")
        }
        $.get("https://jsonplaceholder.typicode.com/users/1", function (data) {
            $('#logscreen').append(data.email);
            
        });
    });
    // Gömmer knappen
    $('#loginbutton').hide()

});







