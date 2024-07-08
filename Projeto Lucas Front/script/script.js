document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('.splide');
    splide.mount();
});

document.addEventListener('DOMContentLoaded', (event) => {
    // Seleciona todos os 'li' que contêm 'ul' dentro deles
    const mostrarsubmenu = document.querySelectorAll('li');

    mostrarsubmenu.forEach(item => {
        let submenu = item.querySelector('ul');
        if (submenu) {
            item.addEventListener('click', (event) => {
                // Impede a propagação do evento para elementos pai
                event.stopPropagation();
                // Alterna a exibição do submenu
                submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block'; // se block vira none e etc
            });
            // Adiciona evento de clique para cada item do submenu para impedir que o menu principal feche
            let submenuItems = submenu.querySelectorAll('li');
            submenuItems.forEach(subItem => {
                subItem.addEventListener('click', (e) => {
                    e.stopPropagation();
                });
            });
        }
    });
});

