import './style.css'
import {Status} from './status'
let szobrok:Status[] = []

function Add(){
  let name : string = (document.getElementById('title') as HTMLInputElement).value 
  let year : number = parseInt((document.getElementById('year') as HTMLInputElement).value)
  let price : number = parseInt((document.getElementById('price') as HTMLInputElement).value)
  let height : number = parseInt((document.getElementById('height')as HTMLInputElement).value)
  let count = document.getElementById('count')
  let sum : number = 0
  try{
    let a : Status = new Status(name, year, price, height)
    szobrok.push(a)
    counter++
    sum += a.price
    count!.innerText = `${counter} szobor van\n${sum} az eddigi érték`
  }catch(e){
    if(e instanceof Error){
      alert(e.message)
    }
  }
}

let counter: number = 0

function init(){
  document.getElementById('submit')!.addEventListener('submit', Add)
}

document.addEventListener('DOMContentLoaded', init)