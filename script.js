        const gallery = document.getElementById('gallery');
        const totalPaginas = 20;

        for (let i = 1; i <= totalPaginas; i++) {
            const img = document.createElement('img');
            
            img.src = "DOSSIER/PAG" + i + ".jpg"; 
            
            img.className = 'dossier-page';
            img.alt = "Página " + i;
            img.loading = "lazy";

            img.onerror = function() {
                console.error("No se encontró: " + this.src);
            };

            gallery.appendChild(img);
        }

