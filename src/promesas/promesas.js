const producto = (id, nombre, desc, stock) => ({
    id: id,
    nombre: nombre,
    desc: desc,
    stock: stock
})

const promesa = new Promise((res, rej) => {

    setTimeout(() => {
        res(producto(1, 'libro', 'libro de ciencias', 3))
    }, 3000);

})

promesa.then((result) => {
    console.log(result)
})