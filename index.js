// add solution here

function theBeatlesPlay(musicians, instruments){
  let output = [];
  let numMusicians = musicians.length;
  
  for(let i=0; i<numMusicians; i++){
    let musician = musicians[i];
    let instrument = instruments[i];
    output.push(`${musician} plays ${instrument}`);
  }
  
  return output;
}
