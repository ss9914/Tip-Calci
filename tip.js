
const billInput=document.getElementById('billTotalInput')
const tipInput=document.getElementById('tipInput')
const people=document.getElementById('numberOfPeople')
const perPersonTotaldiv=document.getElementById('perPersonTotal')
let numberOfPeople=Number(people.innerText)
 
const calculateBill = () => {
      const bill = Number(billInput.value) 
      const tipPercentage = Number(tipInput.value)/100
      const tipAmount =bill*tipPercentage
      const total=tipAmount+bill
      let perPersonTotal= total/numberOfPeople
  perPersonTotaldiv.innerText=`$${perPersonTotal.toFixed(2)}`
  }
  const increasePeople = () => {
    numberOfPeople+=1
    people.innerText=numberOfPeople
    calculateBill()
  } 
  const decreasePeople = () => {
    
        if (numberOfPeople<=1){
         alert('HEY!YOU CANNOT HAVE LESS THAN ONE PERSON')   
        return
    }
    numberOfPeople -=1
    people.innerText=numberOfPeople
    calculateBill()
  }