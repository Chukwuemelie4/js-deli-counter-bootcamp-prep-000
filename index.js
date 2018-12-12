function takeANumber(array,customer){
array.push(customer)
var nos=array.length
//var nos= ++nos
return `Welcome, ${customer}. You are number ${nos} in line.`
}

function nowServing(customer){
  if (customer.length==0) {
    return "There is nobody waiting to be served!"
  } else {
    for (var i = 0; i < customer.length; i++) {
      return `Currently serving ${customer.shift()}.`
    }
  }
}

function currentLine(line) {
  if (line.length==0) {
    return "The line is currently empty."
  } else {
for (var i = 0; i < line.length; i++) {
  box = i + 1
  var inline = []
  inline.push(box. line[i],)
}
return "The line is currently: inline "
  }
}
