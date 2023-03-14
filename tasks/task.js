const arr = [1, 2, 3, [1, 23, 4], [1, [2, 3, 4]]]

function flat(n) {
    let res = []
    n.forEach(item => {
        if (Array.isArray(item)) {
            res = res.concat(
                flat(item)
            )
        } else {
            res.push(item)
        }
    })
    return res
}
console.log(flat(arr).reduce((a, c) => a + c))