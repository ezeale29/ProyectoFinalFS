document.getElementById("header").innerHTML=` <nav class="navbar NavContainer" id="nav">
<a href="index.html"> <img src="imagenes/iconos/logoml.jpg" class="navbar__logo"></a>
<ul class="navbar__links">
    <li class="navbar__item">
        <a href="index.html" class="navbar__link" id="actualPage">INICIO</a>  <!-- el id="actualPage" remarca la página actual de blanco.-->
    </li>
    <li id="crud" class="navbar__item">
        <a href="peliculas.html" class="navbar__link">Mi Coleccion</a>
    </li>
    <li class="navbar__item">
        <a href="login.html" class="navbar__link">Iniciar Sesion</a>
    </li>
</ul>
<a href="#nav" class="navbar__burger">
    <img src="imagenes/iconos/bx-menu.svg" class="navbar__icon">
</a>
<a href="#" class="navbar__close">
    <img src="imagenes/iconos/bxs-x-circle.svg" class="navbar__icon">
</a>
</nav>
`
document.getElementById("footer").innerHTML=` <footer class="footer">   
<div>
    <a class="socialmedia" href="https://www.instagram.com" target="blank"><img
            src="imagenes/iconos/instagram.png" alt="instagram_logo" width="30"></a>
    <a class="socialmedia" href="https://www.facebook.com/" target="blank"><img src="imagenes/iconos/facebook.png"
            alt="facebook_logo" width="30"></a>
    <a class="socialmedia"
        href="https://api.whatsapp.com/send?phone=549115558745;text=Hola%20me%20interesa%contactarme%20con%20DentiSalud"
        target="_blank"><img src="imagenes/iconos/whatsapp.png" alt="whatsapp_logo" width="30"></a>
</div>
</footer>
`
document.getElementById("section").innerHTML=`     <section class="contacto">

<div>
    <p><strong>CORREO ELECTRÓNICO</strong></p>
    <span>
        <p>info@mymovielist.com</p>
    </span>
</div>
</section>
`