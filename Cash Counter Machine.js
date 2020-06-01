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
  let change_amount = (cash*100 - price*100);

  let output = {status : "INSUFFICIENT_FUND", change : []}

  let total_amount = cid.reduce((acc,item)=>{
    return acc+item[1]
  },0).toFixed(2)*100;

  cid = cid.reverse()


  if(total_amount*100 < change_amount)
  {
    console.log(output)
    return output;
  }
  else {
    for(let item of cid)
    {

      if(change_amount == 0)
      {
        break;
      }
      else {
        let amt = Math.floor(change_amount/(cash_data[item[0]]*100))
        if(true)
        {
          if((amt*cash_data[item[0]])<=item[1])
          {
            change_amount -= (amt*cash_data[item[0]])*100
            total_amount -= (amt*cash_data[item[0]])*100
            output.change.push([item[0],(amt*cash_data[item[0]])])
          }
          else {
            change_amount -= item[1]*100
            total_amount -= item[1]*100
            output.change.push(item)
          }
        }
      }
    }

    if(change_amount==0 && total_amount!=0)
    {
      output.status = "OPEN"
    }
    else if (total_amount==0 && change_amount == 0) {
      output.status = "CLOSED"
    }
    else if(change_amount!=0)
    {
      console.log({status : "INSUFFICIENT_FUND", change : []})
      return {status : "INSUFFICIENT_FUNDS", change : []}
    }

    let data = output.change

    if(output.status == "CLOSED")
    {
      data = data.reverse()
      output.change = data
    }
    else {
      output.change = data.filter((item)=>{
        if(item[1]!=0)
        {
          return item
        }
      })
    }
    console.log(output)
  }
}
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
