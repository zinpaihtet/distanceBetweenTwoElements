

const selectDOM=e=>document.querySelector(e),variableToString=e=>e.className||e.id||e.localName,distanceY=(e,o)=>{let l=selectDOM(e),t=selectDOM(o),n=t.getBoundingClientRect().top-l.getBoundingClientRect().bottom;if(n>=0)return console.log(`distance along Y  :  between %c${variableToString(l)}  %cand %c${variableToString(t)}   %c${n} px`,"color : red","color : black","color:blueviolet","background-color : green ; color : white ; font-size : 1.2rem ; padding : 2px"),null;{let c=l.getBoundingClientRect().top-t.getBoundingClientRect().bottom;return console.log(`distance along Y  :  between %c${variableToString(t)}  %cand %c${variableToString(l)}   %c${c} px`,"color : red","color : black","color:blueviolet","background-color : green ; color : white ; font-size : 1.2rem ; padding : 2px"),null}},distanceX=(e,o)=>{let l=selectDOM(e),t=selectDOM(o),n=t.getBoundingClientRect().left-l.getBoundingClientRect().right;if(n>=0)return console.log(`distance along X  :  between %c${variableToString(l)}  %cand %c${variableToString(t)}   %c${n} px`,"color : red","color : black","color:blueviolet","background-color : green ; color : white ; font-size : 1.2rem ; padding : 2px"),null;{let c=l.getBoundingClientRect().left-t.getBoundingClientRect().right;return console.log(`distance along X  :  between %c${variableToString(t)}  %cand %c${variableToString(l)}   %c${c} px`,"color : red","color : black","color:blueviolet","background-color : green ; color : white ; font-size : 1.2rem ; padding : 2px"),null}};