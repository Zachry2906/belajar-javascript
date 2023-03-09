const form = document.getElementById('generate-form')
const qr = document.getElementById('qrcode')

form.addEventListener('submit', function(e){
    e.preventDefault()
    clearUI()

    const url = document.getElementById('url').value
    const size = document.getElementById('size').value
    if (url === ''){
        alert("Please enter an URL link")
    } else {
        showSpiner()

        setTimeout(() => {
            hideSpinner()

            generateQR(url, size)

            setTimeout(() => {
                const save = qr.querySelector('img').src
                createSvBtn(save)
            }, 1000);
        }, 1000);
    }
});

const showSpiner = function() {
    document.getElementById('spinner').style.display = 'block'
}
const hideSpinner = function() {
    document.getElementById('spinner').style.display = 'none'
}

const clearUI = function(){
    qr.innerHTML =''
    const SvLink = document.getElementById('save-link')
    if(SvLink){
        SvLink.remove()
    }
}

const generateQR = function(url, size){
    const qr = new QRCode('qrcode', {
        text:url,
        width:size,
        height:size,
    })
}

const createSvBtn = function(save){
    const link = document.createElement('a')
    link.id = 'save-link'
    link.classList = 'bg-red-500 hover:bg-red-700 text-white font-bold my-2 rounded w-1/3 m-auto my-5'
    link.href = save
    link.download = 'qrcode'
    link.innerHTML = 'Save Image'
    document.getElementById('generate').appendChild(link)
}