function formatTime(time,arg={}){
  const {to12} = arg;
  const match = time.match(/\b(?<hour>0?[0-9]|1[0-9]|2[0-4])\b(?<seperator1>[^A-Za-z0-9]{1,})?(?<minute>[0-5]?[0-9])?(?<seperator2>[^A-Za-z0-9]{1,})?(?<second>[0-5][0-9])?(?<seperator3>[^A-Za-z0-9]{1,})?(?<meridiem>[AM|PM|am|pm]{2})?/);
  let groups=(match||{}).groups;
  if(!groups)return;
  groups.minute=groups.minute?groups.minute:'00';
  let {minute,hour} = groups;
  hour = (hour.length===1?0+hour:hour);
  minute = minute.length===1?0+minute:minute;

  let timeString = hour+':'+minute;
  if(groups.meridiem) {
    const res = convertTo24({...groups,minute,hour});
    hour = res.hour;
    minute = res.minute;
    timeString = hour+':'+minute;
  }
  if(to12) timeString = convetTo12({...groups,minute,hour});
  return timeString;
}

function convertTo24({hour,minute,meridiem}){
  if(['AM','am'].includes(meridiem)){
    if(hour==12)hour='00';
  }
  else if(hour<12)
    hour=12+parseInt(hour);
  return {hour,minute};
}

function convetTo12({hour,minute,meridiem}){
  if(!meridiem) meridiem = 'AM';
  if(['00','0'].includes(hour))hour='12';
  else if(hour>12){
    hour=(parseInt(hour)-12).toString();
    if(hour.length===1)hour='0'+hour;
    meridiem = 'PM';
  }

  return hour+':'+minute+' '+meridiem;
}

module.exports={
  formatTime
}