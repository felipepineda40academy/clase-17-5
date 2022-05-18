form_object = document.getElementById('myForm');

form_object.addEventListener('submit', function(event) {
    event.preventDefault();
    var auto=document.getElementById('dropdown_object').value;
    alert('El automovil es: '+auto);
})