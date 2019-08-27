<form id="form" method="post" action="/router/testPost">
    <input type="text" name="data1" value="________">
    <input type="text" name="data2" value="________">
    <input id="btnSubmit" type="submit" value="submit">
</form>




function submitAndRedirect() {
    let formSubmit = document.getElementById('form');
    formSubmit.submit();
    setTimeout(() => {
        window.location.replace("router/welcome2");
        return false;
    }, 10);
}