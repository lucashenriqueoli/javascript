var now = new Date()
var hour = now.getHours()
console.log(`Agora são exatamente ${hour} horas.`)
if (hour <= 5) {
    console.log('Boa madrugada!')
} else if (hour < 12) {
    console.log('Bom dia!')
} else if (hour < 19) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}