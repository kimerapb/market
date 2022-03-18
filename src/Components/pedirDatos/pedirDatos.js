import {base} from '../Db/base'

export const pedirDatos = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(base)
        }, 1000)
    })
}
