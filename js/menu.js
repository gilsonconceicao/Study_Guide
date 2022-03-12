// menu JS

const btnOpenMenu = document.getElementById('btnOpenMenu'); 

btnOpenMenu.addEventListener('click', function() {
    let menu = document.getElementById('menu'); 

    /*function imagens */
    function diminuirImgJs (img) {
    let imgHeaderJS = document.getElementById('imgHeader').style.width = img
}

    if (menu.style.display === 'block') {
        menu.style.display = 'none'; 
        btnOpenMenu.innerHTML = '&#9776;'
        diminuirImgJs('30px')
    } else {
        menu.style.display = 'block'; 
        btnOpenMenu.innerHTML = '&#10008;'
        diminuirImgJs('36px')
    }
}); 
