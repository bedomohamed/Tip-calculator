function tipCalculator(arr){
  let tipsFinal = [];
  let finalTotal= [];
  let tips;
  let final;
  for (let i = 0; i < arr.length; i++){
    if (arr[i] <= 50){
    tips = arr[i] * 0.2;
    final = arr[i] + tips;
    tipsFinal.push(tips);
    finalTotal.push(final);
  }
  else if (arr[i] <= 200){
     tips = arr[i] * 0.15;
    final = arr[i] +tips;
    tipsFinal.push(tips);
    finalTotal.push(final);
  }
    else{
       tips = arr[i] * 0.1;
    final = arr[i] +tips;
    tipsFinal.push(tips);
    finalTotal.push(final);
    }
  
}
  console.log("Tips: " + tipsFinal);
  console.log("Total bill: " +finalTotal);
}
tipCalculator([124,48,268]);  //test the code
