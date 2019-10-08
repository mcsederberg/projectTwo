document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault();
    var value = document.getElementById("input").value;
    if (value === ""){
        value = "random";
    }
    var type = $("input:radio[name ='type']:checked").val();
    const url = "http://numbersapi.com/" + value + "/" + type;
    $.get(url, function(data) {
        $('#result').text(data);
    });
});