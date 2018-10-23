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

function johnLennonFacts(facts){
  let i = 0;
  let numFacts = facts.length;
  let output = [];
  
  while(i++ < numFacts - 1){
    let fact = facts[i];
    output.push(fact + "!!!");
  }
  
  return output;
}
