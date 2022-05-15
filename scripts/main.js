const container = document.querySelector('.contenedor');
const inputQR = document.querySelector('input');
const label = document.querySelector('label');
const btnQR = document.getElementById('btn-qr');
const imgQR = document.getElementById('img-qr');
const download = document.getElementById('btn-download');

//PRELOADER
window.onload = () => {
    preload.style.display = 'none';
    preload.style.transition = '0.5s';
}


btnQR.addEventListener('click', () => {
    let qrvalue = inputQR.value;
    if (qrvalue) {
        btnQR.innerHTML = 'Generando codigo QR...!';
        imgQR.src = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrvalue}`;
        label.style.top = '65px';

        imgQR.addEventListener('load', () => {
            container.classList.add('active');
            btnQR.innerHTML = 'Generar QR';

        })
    } else if (qrvalue == '') {
        //SWEETALERT'
        imgQR.src = '';
        btnQR.innerHTML = 'Usted no ingreso ningun caracter'
        setTimeout(() => btnQR.innerHTML = 'Generar codigo QR', 2000);
        container.classList.remove('active');
        label.style.top = '6.70rem';
        inputQR.addEventListener('focus', () => {
            label.style.top = '65px';
        })
    }
})

download.addEventListener('click', () => {
    let imgPath = imgQR.getAttribute('src');
    let nombreArchivo = getFillName(imgPath);
    saveAs(imgPath, nombreArchivo);
})

function getFillName(str) {
    return str.substr(str.lastIndexOf('/') + 1)
}