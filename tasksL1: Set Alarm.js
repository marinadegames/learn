function setAlarm(employed, vacation){
if (employed && vacation) return false
  if (!employed && vacation) return false
  if (employed && !vacation) return true
  else return false
}
