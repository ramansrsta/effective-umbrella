export const rates = {
    'NPL' : "118.81"
}

export function datechangeHandler(value) {
    let changedDate =  value.split("/").reverse().join("/"); 
    let changedDateInFormat = changedDate.replaceAll("/", "-");
    return changedDateInFormat 
}

export function currencyChangeHandler(value) {
    return Math.ceil(parseFloat(value.slice(1)) * parseFloat(rates.NPL))
}