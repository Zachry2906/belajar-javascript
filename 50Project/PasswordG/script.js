const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEL = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numberEl = document.getElementById('numbers')
const symboslEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbols
}

clipboardEl.addEventListener('click', function(){
    const textArea = document.createElement('textarea')
    const password = resultEl.innerText

    if(!password){ return }

    textArea.value = password
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand('copy')
    textArea.remove()
    alert('Sudah tercopy')
})

generateEl.addEventListener('click', function(){
    const length = +lengthEl.value
    const hasLower = lowercaseEl.checked
    const hasUpper = uppercaseEL.checked
    const hasNumber = numberEl.checked
    const hasSymbols = symboslEl.checked

    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbols, length)
})

function  generatePassword(lower, upper, number, symbol, length){
    let generatedPassword = ''
    const typesCount = lower + upper + number + symbol
    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0])

    if(typesCount === 0){
        return ''
    }

    for(let i = 0; i < length; i+=typesCount){
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0]
            generatedPassword += randomFunc[funcName]()
        })
    }

    const finalPassword = generatedPassword.slice(0, length)
    return finalPassword
}

function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random() * 26 ) + 97);
}
function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 26 ) + 65);
}
function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random() * 10 ) + 48);
}
function getRandomSymbols(){
    return String.fromCharCode(Math.floor(Math.random() * 14 ) + 33);
}