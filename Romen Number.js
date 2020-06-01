let numbers ={
  1 : {
    1 : "I",
    2 : "II",
    3 : "III",
    4 : "IV",
    5 : "V",
    6 : "VI",
    7 : "VII",
    8 : "VIII",
    9 : "IX",
  },
  2 : {
    1 : "X",
    2 : "XX",
    3 : "XXX",
    4 : "XL",
    5 : "L",
    6 : "LX",
    7 : "LXX",
    8 : "LXXX",
    9 : "XC",
  },
  3:{
    1 : "C",
    2 : "CC",
    3 : "CCC",
    4 : "CD",
    5 : "D",
    6 : "DC",
    7 : "DCC",
    8 : "DCCC",
    9 : "CM",
  },
  4 : {
    1 : "M",
    2 : "MM",
    3 : "MMM"
    },

}

function convertToRoman(num) {
  let result = []

  num = num.toString();
  for(let i = num.length-1; i>=0;i--)
  {
    if(num[i]!=0)
    {
      result.unshift(numbers[num.length - i][num[i]])
    }
  }
  // return result.split("").reverse().join('')

  console.log(result.join(''))
  return result.join('')
}

convertToRoman(649);
