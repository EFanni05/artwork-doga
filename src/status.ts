import { artwork } from "./Artwork";
export class Status implements artwork{
    title : string = ""
    year : number = 0
    price : number = 0
    date : number = new Date().getFullYear()
    regex:RegExp = new RegExp(/[a-zA-Z\s,]/)
    constructor(title : string, year : number, price : number, height : number){
        if(title.trim() == "" && this.regex.test(title)){
            throw new Error("Incorrect Title")
        }
        else if(year > this.date && year < 0 && isNaN(year)){
            throw new Error("Incorrect Year")
        }
        if(price < 1 && isNaN(price)){
            throw new Error("Incorrect Price")
        }
        if(height < 10){
            throw new Error("Incorrect Height")
        }
        this.title = title
        this.year = year
        this.price = price
    }
}