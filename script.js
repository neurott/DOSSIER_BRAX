const gallery = document.getElementById('gallery');

async function cargarGaleria() {
    let i = 1;
    let seguirCargando = true;

    while (seguirCargando) {
        // Creamos una promesa para saber si la imagen existe o no
        const existe = await new Promise((resolve) => {
            const img = new Image();
            // USAMOS RUTA RELATIVA SIN SLASH AL PRINCIPIO
            img.src = `DOSSIER/PAG${i}.jpg`; 
            
            img.onload = () => resolve(true);
            img.onerror = () => resolve(false);
        });

        if (existe) {
            const nuevaImg = document.createElement('img');
            nuevaImg.src = `DOSSIER/PAG${i}.jpg`;
            nuevaImg.className = 'dossier-page';
            nuevaImg.alt = `Página ${i}`;
            nuevaImg.loading = "lazy";
            gallery.appendChild(nuevaImg);
            i++;
        } else {
            seguirCargando = false;
            console.log(`Se detuvo en la página ${i}. Si no cargó nada, revisa el nombre de la carpeta.`);
        }
        
        // Freno de seguridad por si acaso
        if (i > 100) break;
    }
}

cargarGaleria();
