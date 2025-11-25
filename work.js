let n = 5
let base = 1000
let size = 4

function Address(base, size, n) {
    let i = 0
    let address = 0
    
    while(i < n) {
        address = base + (i * size)
        console.log(address)
        i++
    }
}
Address(base, size, n)
