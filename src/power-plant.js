const storeState = () => {
  let currentState = {};
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

const stateChanger = storeState();
const stateChanger2 = storeState();

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

  $('#feed2').click(function() {
    const newState = stateChanger2(blueFood);
    $('#soil-value2').text(newState.soil);
  });
  $('#hydrate2').click(function() {
    const newState = stateChanger2(hydrate);
    $('#water-value2').text(newState.water);
  });
  $('#sun-exposure2').click(function(){
    const newState = stateChanger2(giveLight)
    const newerState = stateChanger2(dryOut)
    $('#light-value2').text(newState.light)
    $('#water-value2').text(newState.water)
  });
  
});