document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'Abel' && password === 'nomebañosoycochina') {
        message.textContent = 'Te quiero mucho<3';

        setTimeout(function() {
            window.location.href = 'I.e_!n1C@Ose2knm!{sx.html';
        }, 1500);
    } else {
        showMessage('"Usuario Incorrecto, como no vas a saber amor >:c"');
    }
});

function showMessage(message) {
    var messageElement = document.getElementById('message');
    messageElement.textContent = message;
}
