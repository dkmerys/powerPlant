const storeState = () => {
  let currentState = {};
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

const stateChanger = storeState();

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    })
  }
}

const feed = changeState("soil");
const blueFood = changeState("soil")(5);
const hydrate = changeState('water')(2);
const dryOut = changeState('water')(-1)
const giveLight = changeState('light')(3);
const greenFood = changeState('soil')(10);
const yuckyFood = changeState('soil')(-5);
const plantCare = changeState('water')(10);

$(document).ready(function() {
  $('#feed').click(function() {
    const newState = stateChanger(blueFood);
    $('#soil-value').text(newState.soil);
  });
  $('#hydrate').click(function() {
    const newState = stateChanger(hydrate);
    $('#water-value').text(newState.water);
  });
  $('#sun-exposure').click(function(){
    const newState = stateChanger(giveLight)
    const newerState = stateChanger(dryOut)
    $('#light-value').text(newState.light)
    $('#water-value').text(newState.water)
  });
  
});