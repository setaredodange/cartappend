export const calcFinalPrice = (price,discount,count) =>{
    let result = Math.floor(count*(price - (price * discount / 100)))
    return result
}

