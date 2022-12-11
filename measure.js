
const selectDOM = (sel)=> document.querySelector(sel);
const variableToString = (obj)=>{
  return obj.className || obj.id || obj.localName
}

// distance along vertical direction
const distanceY = (One ,Two)=>{
    const eleOne = selectDOM(One);
    const eleTwo = selectDOM(Two);
    let dis=  eleTwo.getBoundingClientRect().top - eleOne.getBoundingClientRect().bottom
    if(dis >= 0){
        console.log(`distance along Y  | :  between %c${variableToString(eleOne)}  %cand %c${variableToString(eleTwo)}   %c${dis} px`,
        'color : red',
        'color : black',
        'color:blueviolet',
        'background-color : green ; color : white ; font-size : 1.2rem ; padding : 2px'        )
       return null;
    }else{

     let dis= eleOne.getBoundingClientRect().top - eleTwo.getBoundingClientRect().bottom
     console.log(`distance along Y  | :  between %c${variableToString(eleTwo)}  %cand %c${variableToString(eleOne)}   %c${dis} px`,
     'color : red',
     'color : black',
     'color:blueviolet',
     'background-color : green ; color : white ; font-size : 1.2rem ; padding : 2px'        )
     return null;
    }
}

// distance between horizontal direction
const distanceX = (One , Two)=>{
    const eleOne = selectDOM(One);
    const eleTwo = selectDOM(Two);
    let dis = eleTwo.getBoundingClientRect().left - eleOne.getBoundingClientRect().right;
    if(dis >= 0){
        console.log(`distance along X  ---- :  between %c${variableToString(eleOne)}  %cand %c${variableToString(eleTwo)}   %c${dis} px`,
        'color : red',
        'color : black',
        'color:blueviolet',
        'background-color : green ; color : white ; font-size : 1.2rem ; padding : 2px'        )
       return null;
    }else{

     let dis= eleOne.getBoundingClientRect().left - eleTwo.getBoundingClientRect().right;
    
     console.log(`distance along X  ---- :  between %c${variableToString(eleTwo)}  %cand %c${variableToString(eleOne)}   %c${dis} px`,
     'color : red',
     'color : black',
     'color:blueviolet',
     'background-color : green ; color : white ; font-size : 1.2rem ; padding : 2px' )
     return null;
    }
}
// padding of element
const getPadding = (ele)=>{
      const element = selectDOM(ele);
      const style = element.currentStyle || window.getComputedStyle(element);
      const {paddingTop , paddingBottom , paddingRight , paddingLeft} = style
      console.log( `padding of %c${variableToString(element)}` , 'background-color : green ; color : white ; font-size : 1rem ; padding : 2px', {
        paddingTop,
        paddingBottom,
        paddingLeft,
        paddingRight
          })
}

