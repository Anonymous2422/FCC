var cash_data = {
    "PENNY" : 0.01,
    "NICKEL" : 0.05,
    "DIME" : 0.1,
    "QUARTER" : 0.25,
    "ONE" : 1,
    "FIVE" : 5,
    "TEN" : 10,
    "TWENTY" : 20,
    "ONE HUNDRED" : 100,
  }
function checkCashRegister(price,cash,cid)
{
  let output = {status:"INSUFFICIENT_FUNDS",change:[]}

  let amount = cash - price;

  let register = cid.reduce((acc,item)=>{
    acc.total += item[1]
    acc[item[0]] = item[1]
    return acc
  },{total:0})

  if(register.total < amount )
  {
    console.log(output)
    return output
  }

  cid.reverse();

  for(let item of cid)
  {
    if(price == cash)
    {
      break;
    }
    else {
      if((price+cash_data[item[0]])<cash)
      {
        let required_amount = Math.floor((cash-price) / item[1])

        // If required amount which we want to add is greater
        // than amount with that item
        // eg. [80] > [60]
        let res = (required_amount * cash_data[item[0]])
        if(res => item[1])
        {
          register.total -= item[1]
          price += item[1]
          output.change.push(item)
        }
        // Else we need to find out required amount which is
        // required

        else {
            register.total -= res
            price -= res
            output.change.push([item[0],res])
        }
      }
    }

  }
  console.log(register)
  console.log(output)
}

checkCashRegister(3.19,100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

// checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])

// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
