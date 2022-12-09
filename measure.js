
const selectDOM = (sel)=> document.querySelector(sel);
const variableToString = (obj)=>{
  return obj.className || obj.id || obj.localName
}
const distanceY = (One ,Two)=>{
    const eleOne = selectDOM(One);
    const eleTwo = selectDOM(Two);
    let dis=  eleTwo.getBoundingClientRect().top - eleOne.getBoundingClientRect().bottom
    if(dis >= 0){
        console.log(`distance along Y  :  between %c${variableToString(eleOne)}  %cand %c${variableToString(eleTwo)}   %c${dis} px`,
        'color : red',
        'color : black',
        'color:blueviolet',
        'background-color : green ; color : white ; font-size : 1.2rem ; padding : 2px'        )
       return null;
    }else{

     let dis= eleOne.getBoundingClientRect().top - eleTwo.getBoundingClientRect().bottom
     console.log(`distance along Y  :  between %c${variableToString(eleTwo)}  %cand %c${variableToString(eleOne)}   %c${dis} px`,
     'color : red',
     'color : black',
     'color:blueviolet',
     'background-color : green ; color : white ; font-size : 1.2rem ; padding : 2px'        )
     return null;
    }
}
const distanceX = (One , Two)=>{
    const eleOne = selectDOM(One);
    const eleTwo = selectDOM(Two);
    let dis = eleTwo.getBoundingClientRect().left - eleOne.getBoundingClientRect().right;
    if(dis >= 0){
        console.log(`distance along X  :  between %c${variableToString(eleOne)}  %cand %c${variableToString(eleTwo)}   %c${dis} px`,
        'color : red',
        'color : black',
        'color:blueviolet',
        'background-color : green ; color : white ; font-size : 1.2rem ; padding : 2px'        )
       return null;
    }else{

     let dis= eleOne.getBoundingClientRect().left - eleTwo.getBoundingClientRect().right;
    
     console.log(`distance along X  :  between %c${variableToString(eleTwo)}  %cand %c${variableToString(eleOne)}   %c${dis} px`,
     'color : red',
     'color : black',
     'color:blueviolet',
     'background-color : green ; color : white ; font-size : 1.2rem ; padding : 2px'        )
     return null;
    }
}
