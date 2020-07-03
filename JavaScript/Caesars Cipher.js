function rot13(str) {
  let data = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let result = "";
  for(let i of str)
  {
    if(i.charCodeAt()>=65 && i.charCodeAt()<=91)
    {
      result+=data[((data.indexOf(i)+13)%26)]
    }
    else{
      result+=i
    }
  }
  return result
}

rot13("SERR PBQR PNZC");
