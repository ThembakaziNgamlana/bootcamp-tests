function isWeekday(day){
if(day.startsWith("Mon") || day.startsWith("Tue") || day.startsWith("Wed") ||
day.startsWith("Thu") || day.startsWith("Fri")){
    return true
}
else if(day.startsWith("Sat") || day.startsWith("Sun")){
    return false
}
else("when enterted a day that is not a weekday")
  return "not a day"
}