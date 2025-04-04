function cambiarImagen(imagenMiniatura) {
    const imagenPrincipal = document.getElementById("imagenPrincipal");
    if (imagenPrincipal && imagenMiniatura) {
        imagenPrincipal.src = imagenMiniatura.src;
    }
}
