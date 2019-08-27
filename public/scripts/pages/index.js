console.log("index.js running");



addEventListener('keypress', function (pressed) {
    if (pressed.key === 'Enter') {
        submitAndRedirect();
    }
});

function submitAndRedirect() {
    let formSubmit = document.getElementById('form');
    formSubmit.submit();
    setTimeout(() => {
        window.location.replace("router/welcome2");
        return false;
    }, 10);
}



