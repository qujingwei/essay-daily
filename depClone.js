depClone = (obj) => {
    if (!obj) return null
    if (typeof obj !== 'object') return obj
    if (obj.constructor === Date) return new Date(obj)
    if (obj.constructor === RegExp) return new RegExp(obj)
    let newObj = new obj.constructor()
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            let value = obj[key]
            newObj[key] = typeof value === 'object' ? depClone(value) : value
        }
    }
    return newObj
}


function clone (obj = {}){
    if(typeof obj !== 'object') return
    let newObj = new obj.constructor()
    for (const key in obj) {
        if(Object.prototype.hasOwnProperty.call(obj, key)){
            let val = obj[kay]
            newObj[key] =  typeof val === 'object' ? clone(val) : val
        }
    }

    return newObj
}
