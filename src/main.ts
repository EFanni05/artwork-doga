import './style.css'
import {Status} from './status'
let szobrok:Status[] = []

function Add(){
  let name : string = (document.getElementById('title') as HTMLInputElement).value 
  let year : number = parseInt((document.getElementById('year') as HTMLInputElement).value)
  let price : number = parseInt((document.getElementById('price') as HTMLInputElement).value)
  let height : number = parseInt((document.getElementById('height')as HTMLInputElement).value)
  try{
    let a : Status = new Status(name, year, price, height)
    szobrok.push(a)
  }catch(e){
    if(e instanceof Error){
      alert(e.message)
    }
  }
}

function init(){
  document.getElementById('button')!.addEventListener('submit', Add)
}

document.addEventListener('DOMContentLoaded', init)