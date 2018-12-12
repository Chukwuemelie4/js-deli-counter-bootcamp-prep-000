function takeANumber(array,customer){
array.push(customer)
var nos=array.length
//var nos= ++nos
return `Welcome, ${customer}. You are number ${nos} in line.`
}

function nowServing(customer){
  if (customer.length=0) {
    return "The line is currently empty."
  } else {
    return `Currently serving ${customer}.`
  }
}
