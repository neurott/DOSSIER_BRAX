const gallery = document.getElementById('gallery');
const paginas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

paginas.forEach(num => {
    const img = document.createElement('img');

    img.src = "./DOSSIER/PAG" + i + ".jpg"; 
    img.className = 'dossier-page';
    img.alt = `Página ${num}`;
    img.loading = "lazy";
    
    gallery.appendChild(img);
});

