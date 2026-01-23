import { rawProducts } from "./rawData.js";
import { cleanProducts } from "./scriptjs";


const rawProducts = [
    " apple ",
    "BANANA",
    "",
    " orAnge",
    "kiwi  ",
    "123fruit",
    " "
]
 
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
 
const isConvertibleToNumber = (str) => {
    if (typeof str !== 'string') return false; // Optional: ensure input is a string
    return !isNaN(Number(str)) && isFinite(Number(str));
};
 
const formattedProducts = []
 
rawProducts.forEach(product => {
    let formattedWord = ''
    const splitted = product.split("")
 
    if (splitted.length > 0) {
        if (product.startsWith(" ") || product.endsWith(" ")) {
            const trimmedString = product.trim()
            if (trimmedString) {
                formattedWord = trimmedString.toLowerCase()
            }
        }
 
        const withoutNumbers = splitted.filter(char => {
            return !isConvertibleToNumber(char)
        }).join("")
 
        formattedWord = withoutNumbers.toLowerCase()
    }
 
    if (formattedWord !== "") {
        formattedProducts.push(formattedWord[0].toUpperCase() + formattedWord.slice(1).toLowerCase())
    }
})
 
console.log(formattedProducts)