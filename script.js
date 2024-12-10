// Botón Buscar y funcionalidad del escaneo
const searchButton = document.getElementById('searchButton');
const searchContainer = document.getElementById('searchContainer');
const searchInput = document.getElementById('searchInput');
const submitSearch = document.getElementById('submitSearch');

searchButton.addEventListener('click', () => {
    searchContainer.classList.remove('hidden');
    searchButton.classList.add('hidden');
    // Simular el escaneo del QR colocando automáticamente la referencia en el input
    const simulatedQRData = "337963"; // Aquí simulas el número escaneado
    searchInput.value = simulatedQRData;
});

// Función de búsqueda
submitSearch.addEventListener('click', () => {
    const reference = searchInput.value.trim();
    if (reference === "337963") {
        alert("Referencia encontrada: Gafa Modelo X\nMaterial: Metal\nPrecio: 99.99€");
        // Aquí puedes redirigir a una página específica o mostrar la información
    } else {
        alert("Referencia no encontrada");
    }
});
