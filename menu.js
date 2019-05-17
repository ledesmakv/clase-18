// defino la función toggleMenu (a - onclick)
function toggleMenu () {
    // hacemos referencia a nuestro ul class 'menu' (guardamos el ID en una variable)
    var item = document.getElementById('menu');
    // con esta linea cambiamos a la clase .open que tenemos en el CSS para aplicar transforma: translate a nuestro menú
    item.classList.toggle('open');
}