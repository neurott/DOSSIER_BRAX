const gallery = document.getElementById('gallery');
const totalPaginas = 5; // Prueba con pocas primero

for (let i = 1; i <= totalPaginas; i++) {
    const img = document.createElement('img');
    const ruta = `./DOSSIER/PAG${i}.jpg`; // Usando la ruta relativa estándar
    
    console.log("Intentando cargar:", ruta);
    
    img.src = ruta;
    img.className = 'dossier-page';
    img.style.border = "2px solid red"; // Para ver si el cuadro aparece aunque no haya imagen
    img.style.width = "100px";
    img.style.height = "100px";

    img.onerror = function() {
        console.error("ERROR: No se encontró la imagen en: " + this.src);
    };

    img.onload = function() {
        console.log("ÉXITO: Cargada " + ruta);
    };

    gallery.appendChild(img);
}
