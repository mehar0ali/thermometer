const tempo = () => {
    let temp = document.getElementById('temp')

    setTimeout(() => {
        temp.innerHTML = '&#xf2cb;'
        temp.style.color = '#DC3535'
    }, 1000)

    setTimeout(() => {
        temp.innerHTML = '&#xf2ca;'
        temp.style.color = '#FFBF00'
    }, 2000)

    setTimeout(() => {
        temp.innerHTML = '&#xf2c9;'
        temp.style.color = '#FFBF00'
    }, 3000)

    setTimeout(() => {
        temp.innerHTML = '&#xf2c8;'
        temp.style.color = '#FFBF00'
    }, 4000)

    setTimeout(() => {
        temp.innerHTML = '&#xf2c7;'
        temp.style.color = '#DC3535'
    }, 5000)
    
}


tempo();

setInterval((tempo), 5000);