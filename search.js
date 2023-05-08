//ADD MATTER JS ENGINES
  const Engine = Matter.Engine,
  Render = Matter.Render,
  Runner = Matter.Runner,
  Bodies = Matter.Bodies,
  Composite = Matter.Composite,
  Composites = Matter.Composites,
  Constraint = Matter.Constraint,
  Mouse = Matter.Mouse,
  MouseConstraint = Matter.MouseConstraint,
  Events = Matter.Events,
  World = Matter.World;

  const iEngine = Engine.create();
  const iRunner = Runner.create();
  world = iEngine.world;
  iEngine.gravity.x = 0;
  iEngine.gravity.y = 1;
/////////////////////////////////////////////////////////////////////////////// END 
/////////////////////////////////////////////////////////////////////////////// OF 
/////////////////////////////////////////////////////////////////////////////// CODE
//NYC OPEN DATA API
  const APP_TOKEN = 'O4s5f14ljX1NkrufUac4DPIKX' // <- Replace this with your app token
  const DATASET_IDENTIFIER = '25th-nujf' // <- Replace this with the ID for the data resource that you want to look up
  const LIMIT = 49509 // <- Replace this with the number of records you want to pull
  let namedata = []
/////////////////////////////////////////////////////////////////////////////// END 
/////////////////////////////////////////////////////////////////////////////// OF 
/////////////////////////////////////////////////////////////////////////////// CODE
//Construct the URL that we need to make requests
  const url = `https://data.cityofnewyork.us/resource/${DATASET_IDENTIFIER}.json?$limit=${LIMIT}&$$app_token=${APP_TOKEN}`

  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      namedata = json
      console.log(namedata)
    });
/////////////////////////////////////////////////////////////////////////////// END 
/////////////////////////////////////////////////////////////////////////////// OF 
/////////////////////////////////////////////////////////////////////////////// CODE
//SEARCH BAR (BUTTON PRESS)
  const $searchinput = document.getElementById('searchinput')
  const $submitsearch = document.getElementById('submitsearch')
  $submitsearch.addEventListener('click', function(){
    //CODE HERE
    const foundname = namedata.find(function(name){
      return name.nm.toLowerCase() === $searchinput.value.toLowerCase()
    })
    if(foundname){
  //CODE HERE
  const found = namedata.find(function(name){
    return name.nm.toLowerCase() === $searchinput.value.toLowerCase()
  })
  if(found){
    const secondary = document.getElementById('secondary')
    const main = document.getElementById('main')
    main.style.display='block'
    secondary.style.display='none'
    let firstname = found.nm
    let babies = found.cnt
    let objectCount = babies;  
    //CHANGE NAME IN TEXT
    const names = document.getElementById('named');
    names.innerHTML = firstname+' in NYC';
    //CHANGE PAGE TITLE
  const titlesite = document.getElementById('titlepage')
  titlesite.innerHTML = firstname
//DELAY SPAWN RATE
    const delay = Math.round(900/objectCount);
//ADD BALLS BASED ON COUNT(CHATGPT GENERATED AND REDESIGNED BY ME)
  var count = 1;
    function updateCountDisplay() {
      amount.textContent = count;
    }
    // Define a function to increment the count and update the display after a delay
  function incrementCount() {
      const hue = Math.random()+count+120
      count++;
      if (count <= objectCount) {
        setTimeout(function() {
          updateCountDisplay();
          incrementCount();
//UPDATE ALL HTML ELEMENT COLOR
          amount.style.color = 'hsla('+hue+', 50%, 45%, 1';
          named.style.color = 'hsla('+Math.round(hue-50)+', 50%, 45%, 1)';
          percentage.style.color = 'hsla('+Math.round(hue-100)+', 50%, 45%, 1)';
        }, delay); // Change the delay time here (in milliseconds)
      }}
  // Start the count by calling the incrementCount function
    incrementCount();
  function createObject(index) {
    // randomize hue based on babies amount (green to red)
    const hue = Math.random()*90+objectCount*4+30
    // create a new object with random properties
    var object = Bodies.circle(
      Math.random()*w/2+w/4, // random x position
      Math.random()-250, // random y position
      Math.random()*10+35, // ball radius
      {
        restitution: 0.2,
        render:{
          fillStyle:'hsla('+hue+', 70%, 70%, 1)',
          id:count,
          mass:1,
        }});
//CALCULATE PERCENTAGE
  const totalbabies = 110443
  const percent = Math.max(count/totalbabies*10000)
  const percentRounded = Math.round(percent)/100+'% (of '+totalbabies+')'
  percentage.innerHTML = percentRounded
//REMOVE PREVIOUS OBJECTS
  button.addEventListener('click', function(){
    Matter.Composite.remove(iEngine.world, [object]);
  })
  $searchinput.addEventListener("keypress", function(remove) {
    if (remove.key === 'Enter') {
          Matter.Composite.remove(iEngine.world, [object]);
        }
    })
  $submitsearch.addEventListener('click', function(){
    Matter.Composite.remove(iEngine.world, [object]);
  })
//ADD OBJECTS TO WORLD
    World.add(iEngine.world, object);
    // call the function again after a delay, if there are more objects to create
    if (count <= objectCount) {
      setTimeout(function() {
        createObject(count);
      }, delay);
    }}
  // start the recursive function
  window.requestAnimationFrame(createObject);
}}
    else {
      // redirect to another page
      const secondary = document.getElementById('secondary')
      const main = document.getElementById('main')
      main.style.display='none'
      secondary.style.display='block'
    }})
/////////////////////////////////////////////////////////////////////////////// END 
/////////////////////////////////////////////////////////////////////////////// OF 
/////////////////////////////////////////////////////////////////////////////// CODE
//SEARCH BAR (REPEATED) (ENTER KEY)
  $searchinput.addEventListener("keypress", function(event) {
    if (event.key === 'Enter') {
        //CODE HERE
        const found = namedata.find(function(name){
          return name.nm.toLowerCase() === $searchinput.value.toLowerCase()
        })
        if(found){
          const secondary = document.getElementById('secondary')
          const main = document.getElementById('main')
          main.style.display='block'
          secondary.style.display='none'
          let firstname = found.nm
          let babies = found.cnt
          let objectCount = babies;  
          //CHANGE NAME IN TEXT
          const names = document.getElementById('named');
          names.innerHTML = firstname+' in NYC';
          //CHANGE PAGE TITLE
    const titlesite = document.getElementById('titlepage')
    titlesite.innerHTML = firstname
//DELAY SPAWN RATE
  const delay = Math.round(900/objectCount);
//ADD BALLS BASED ON COUNT(CHATGPT GENERATED AND REDESIGNED BY ME)
  var count = 1;
  function updateCountDisplay() {
      amount.textContent = count;
    }
    // Define a function to increment the count and update the display after a delay
  function incrementCount() {
      const hue = Math.random()+count+120
      count++;
      if (count <= objectCount) {
        setTimeout(function() {
          updateCountDisplay();
          incrementCount();
//UPDATE ALL HTML ELEMENT COLOR
          amount.style.color = 'hsla('+hue+', 50%, 45%, 0.8)';
          named.style.color = 'hsla('+Math.round(hue-50)+', 50%, 45%, 0.8)';
          percentage.style.color = 'hsla('+Math.round(hue-100)+', 50%, 45%, 0.8)';
        }, delay); // Change the delay time here (in milliseconds)
      }}
  // Start the count by calling the incrementCount function
    incrementCount();
  function createObject(index) {
    // randomize hue based on babies amount (green to red)
    const hue = Math.random()*90+objectCount*4+30

    // create a new object with random properties
    var object = Bodies.circle(
      Math.random()*w/2+w/4, // random x position
      Math.random()-250, // random y position
      Math.random()*10+35, // ball radius
      {
        restitution: 0.2,
        render:{
          fillStyle:'hsla('+hue+', 70%, 70%, 1)',
          id:count,
        }});
//CALCULATE PERCENTAGE
  const totalbabies = 110443
  const percent = Math.max(count/totalbabies*10000)
  const percentRounded = Math.round(percent)/100+'% (of '+totalbabies+')'
  percentage.innerHTML = percentRounded
//REMOVE PREVIOUS OBJECTS
  button.addEventListener('click', function(){
    Matter.Composite.remove(iEngine.world, [object]);
  })
  $searchinput.addEventListener("keypress", function(remove) {
    if (remove.key === 'Enter') {       
    Matter.Composite.remove(iEngine.world, [object]);
        }
    })
  $submitsearch.addEventListener('click', function(){
    Matter.Composite.remove(iEngine.world, [object]);
  })
//ADD OBJECTS TO WORLD
  World.add(iEngine.world, object);
  // call the function again after a delay, if there are more objects to create
  if (count <= objectCount) {
    setTimeout(function() {
      createObject(count);
    }, delay);
  }}
  // start the recursive function
  window.requestAnimationFrame(createObject);
}
//REDIRECT TO OTHER PAGE
  else {
    const secondary = document.getElementById('secondary')
    const main = document.getElementById('main')
    main.style.display='none'
    secondary.style.display='block'
  }
  }
});
/////////////////////////////////////////////////////////////////////////////// END 
/////////////////////////////////////////////////////////////////////////////// OF 
/////////////////////////////////////////////////////////////////////////////// CODE
//GENERATE NAMES
    //CREATE BUTTON
    const button = document.getElementById('generate')
    button.addEventListener('click', function(){

      //PULL RANDOM ITEM
      const randomize = Math.floor(Math.random()*namedata.length)
      const input = document.createElement("div");
      const text = namedata[randomize].nm
      input.textContent = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
      document.body.appendChild(input);
      
      document.getElementById('searchinput').value = input.textContent
      const foundname = namedata.find(function(name){
        return name.nm.toLowerCase() === $searchinput.value.toLowerCase()
      })
      if(foundname){
    //CODE HERE
    const found = namedata.find(function(name){
      return name.nm.toLowerCase() === $searchinput.value.toLowerCase()
    })
    if(found){
      const secondary = document.getElementById('secondary')
      const main = document.getElementById('main')
      main.style.display='block'
      secondary.style.display='none'
      let firstname = input.textContent
      let babies = found.cnt
      let objectCount = babies;  
      //CHANGE NAME IN TEXT
      const names = document.getElementById('named');
      names.innerHTML = firstname+' in NYC';
      //CHANGE PAGE TITLE
    const titlesite = document.getElementById('titlepage')
    titlesite.innerHTML = firstname
  //DELAY SPAWN RATE
      const delay = Math.round(900/objectCount);
  //ADD BALLS BASED ON COUNT(CHATGPT GENERATED AND REDESIGNED BY ME)
    var count = 1;
      function updateCountDisplay() {
        amount.textContent = count;
      }
      // Define a function to increment the count and update the display after a delay
    function incrementCount() {
        const hue = Math.random()+count*2+140
        count++;
        if (count <= objectCount) {
          setTimeout(function() {
            updateCountDisplay();
            incrementCount();
  //UPDATE ALL HTML ELEMENT COLOR
            amount.style.color = 'hsla('+hue+', 50%, 45%, 1';
            named.style.color = 'hsla('+Math.round(hue-50)+', 50%, 45%, 1)';
            percentage.style.color = 'hsla('+Math.round(hue-100)+', 50%, 45%, 1)';
          }, delay); // Change the delay time here (in milliseconds)
        }}
    // Start the count by calling the incrementCount function
      incrementCount();
    function createObject(index) {
      // randomize hue based on babies amount (green to red)
      const hue=Math.random()*90+objectCount*2+30
      // create a new object with random properties
      var object = Bodies.circle(
        Math.random()*w/2+w/4, // random x position
        Math.random()-250, // random y position
        Math.random()*10+35, // ball radius
        {
          restitution: 0.2,
          render:{
            fillStyle:'hsla('+hue+', 70%, 70%, 1)',
            id:count,
            mass:1,
          }});
          console.log(hue)
  //CALCULATE PERCENTAGE
    const totalbabies = 110443
    const percent = Math.max(count/totalbabies*10000)
    const percentRounded = Math.round(percent)/100+'% (of '+totalbabies+')'
    percentage.innerHTML = percentRounded
  //REMOVE PREVIOUS OBJECTS
  button.addEventListener('click', function(){
    Matter.Composite.remove(iEngine.world, [object]);
  })
  $searchinput.addEventListener("keypress", function(remove) {
    if (remove.key === 'Enter') {       
    Matter.Composite.remove(iEngine.world, [object]);
        }
    })
  $submitsearch.addEventListener('click', function(){
    Matter.Composite.remove(iEngine.world, [object]);
  })
  //ADD OBJECTS TO WORLD
      World.add(iEngine.world, object);
      // call the function again after a delay, if there are more objects to create
      if (count <= objectCount) {
        setTimeout(function() {
          createObject(count);
        }, delay);
      }}
    // start the recursive function
    window.requestAnimationFrame(createObject);
  }}
      else {
        // redirect to another page
        const secondary = document.getElementById('secondary')
        const main = document.getElementById('main')
        main.style.display='none'
        secondary.style.display='block'
      }})
/////////////////////////////////////////////////////////////////////////////// END 
/////////////////////////////////////////////////////////////////////////////// OF 
/////////////////////////////////////////////////////////////////////////////// CODE
//CREATE MATTER JS CANVAS
  const w = window.innerWidth;
  const h = window.innerHeight;
  const iRender = Render.create({
    element: document.getElementById('frame'),
    engine: iEngine,
    options: {
      width: w,
      height: h,
      wireframes: false,
      background: "white"
    }
  });
/////////////////////////////////////////////////////////////////////////////// END 
/////////////////////////////////////////////////////////////////////////////// OF 
/////////////////////////////////////////////////////////////////////////////// CODE
//REMOVE LARGE BALL
//REMOVE PREVIOUS OBJECTS
  button.addEventListener('click', function(){
    Matter.Composite.remove(iEngine.world, [object]);
    Matter.World.remove(iEngine.world, [square,squareTwo,squareThree,squareFour,squareFive,squareSix,squareSeven,squareEight,squareNine]);
  })
 $searchinput.addEventListener("keypress", function(remove) {
    if (remove.key === 'Enter') {       
    Matter.Composite.remove(iEngine.world, [object]);
    Matter.World.remove(iEngine.world, [square,squareTwo,squareThree,squareFour,squareFive,squareSix,squareSeven,squareEight,squareNine]);
        }
    })
  $submitsearch.addEventListener('click', function(){
    Matter.Composite.remove(iEngine.world, [object]);
    Matter.World.remove(iEngine.world, [square,squareTwo,squareThree,squareFour,squareFive,squareSix,squareSeven,squareEight,squareNine]);
  })
/////////////////////////////////////////////////////////////////////////////// END 
/////////////////////////////////////////////////////////////////////////////// OF 
/////////////////////////////////////////////////////////////////////////////// CODE
//ADD LARGE BALL
// randomize hue based on babies amount (green to red)
 const hue = Math.random()*360

 // create a new object with random properties
 var object = Bodies.circle(
   Math.random()*w/2+w/4, // random x position
   Math.random()-250, // random y position
   Math.random()*25+100, // ball radius
   {
    restitution: 0.8,
    density:0.01,
    frictionAir:0.01,
     render:{
       fillStyle:'hsla('+hue+', 70%, 70%, 1)',
       mass:1,
     }
   }
 );
 Matter.Composite.add(iEngine.world, [object])
/////////////////////////////////////////////////////////////////////////////// END 
/////////////////////////////////////////////////////////////////////////////// OF 
/////////////////////////////////////////////////////////////////////////////// CODE
//ADD SHAPES
const scale=1.5
const $restitution = 0.5
const $friction = 1
const $frictionAir = 0.01
const $density = 0.009

const square = Bodies.rectangle(w/2, h/2, 150/scale, 75/scale,{
  restitution: $restitution,
  friction: $friction,
  frictionAir: $frictionAir,
  density: $density,
  render: {
      fillStyle: `hsla(${Math.floor(Math.random()*360)}, 70%, 70%, 1)`,
    }
  });
const squareTwo = Bodies.rectangle(w/2+1, h/2+1, 150/scale, 150/scale,{
  restitution: $restitution,
  friction: $friction,
  frictionAir: $frictionAir,
  density: $density,
  render: {
      fillStyle: `hsla(${Math.floor(Math.random()*360)}, 70%, 70%, 1)`,
    }
  });
const squareThree = Bodies.rectangle(w/2-50, h/2, 150/scale, 150/scale,{
  restitution: $restitution,
  friction: $friction,
  frictionAir: $frictionAir,
  density: $density,
  render: {
      fillStyle: `hsla(${Math.floor(Math.random()*360)}, 70%, 70%, 1)`,
    }
});const squareFour = Bodies.rectangle(w/2-10, h/2-10, 150/scale, 150/scale,{
  restitution: $restitution,
  friction: $friction,
  frictionAir: $frictionAir,
  density: $density,
  render: {
      fillStyle: `hsla(${Math.floor(Math.random()*360)}, 70%, 70%, 1)`,
    }
  });
const squareFive = Bodies.rectangle(w/2+50, h/2, 150/scale, 75/scale,{
  restitution: $restitution,
  friction: $friction,
  frictionAir: $frictionAir,
  density: $density,
  render: {
      fillStyle: `hsla(${Math.floor(Math.random()*360)}, 70%, 70%, 1)`,
    }
  });
const squareSix = Bodies.rectangle(w/2+50, h/2, 150/scale, 75/scale,{
  restitution: $restitution,
  friction: $friction,
  frictionAir: $frictionAir,
  density: $density,
  render: {
      fillStyle: `hsla(${Math.floor(Math.random()*360)}, 70%, 70%, 1)`,
    }
  });
const squareSeven = Bodies.rectangle(w/2-50, h/2, 150/scale, 75/scale,{
  restitution:$restitution,
  friction: $friction,
  frictionAir: $frictionAir,
  density: $density,
  render: {
      fillStyle: `hsla(${Math.floor(Math.random()*360)}, 70%, 70%, 1)`,
    }
  });
const squareEight = Bodies.rectangle(w/2-75, h/2-150, 300/scale, 75/scale,{
  restitution:$restitution,
  friction: $friction,
  frictionAir: $frictionAir,
  density: $density,
  render: {
      fillStyle: `hsla(${Math.floor(Math.random()*360)}, 70%, 70%, 1)`,
    }
  });
  const squareNine = Bodies.rectangle(w/2-75, h/2-50, 75/scale, 300/scale,{
    restitution:$restitution,
    friction: $friction,
    frictionAir: $frictionAir,
    density: $density,
    render: {
        fillStyle: `hsla(${Math.floor(Math.random()*360)}, 70%, 70%, 1)`,
      }
    });
Matter.World.add(iEngine.world, [square,squareTwo,squareThree,squareFour,squareFive,squareSix,squareSeven,squareEight,squareNine]);
/////////////////////////////////////////////////////////////////////////////// END 
/////////////////////////////////////////////////////////////////////////////// OF 
/////////////////////////////////////////////////////////////////////////////// CODE
//ADD WORLD BORDER
  //GROUND
    const ground = Bodies.rectangle(w/2, h, w, 100,{
      isStatic: true,
      render: {
          fillStyle: 'white',
      }
    });
  //WALL LEFT
    const wallL = Bodies.rectangle(0-20, h/2, 25, h*4,{
      isStatic: true,
      render: {
          fillStyle: 'white',
      }
    });
  //WALL RIGHT
    const wallR = Bodies.rectangle(20+w, h/2, 25, h*4,{
      isStatic: true,
      render: {
          fillStyle: 'white',
      }
    });
  //ROOF
    const roof = Bodies.rectangle(w/2, -h*2, w*4, 235,{
      isStatic: true,
      render: {
          fillStyle: 'gray',
      }
    });
  //ADD WALL
    Composite.add(iEngine.world, [ground, wallL, wallR, roof]);
/////////////////////////////////////////////////////////////////////////////// END 
/////////////////////////////////////////////////////////////////////////////// OF 
/////////////////////////////////////////////////////////////////////////////// CODE
//ADD CANVAS TO WORLD (FROM WEB)
  var canvasmouse=Mouse.create(document.getElementById('frame'));
/////////////////////////////////////////////////////////////////////////////// END 
/////////////////////////////////////////////////////////////////////////////// OF 
/////////////////////////////////////////////////////////////////////////////// CODE
//ADD MOUSE INTERACTIONS (FROM WEB)
  var mConstraint = MouseConstraint;
  Mouse.setScale(canvasmouse,{x:1,y:1,pixelRation:2});
  mouseControl = mConstraint.create(iEngine,{
    mouse:canvasmouse,
    constraint: {
      render: {
        visible: false
      }
  }});
  Composite.add(world,mouseControl);
  Render.run(iRender);
  Runner.run(iRunner, iEngine);
/////////////////////////////////////////////////////////////////////////////// END 
/////////////////////////////////////////////////////////////////////////////// OF 
/////////////////////////////////////////////////////////////////////////////// CODE
//SECONDARY PAGE CODES
let hueValue = 0
const INTERVAL_SEC = 16.667
const HUE_ROTATION_AMOUNT = 0.5
setInterval(updateBackground, INTERVAL_SEC)
function updateBackground() {
  hueValue = hueValue + HUE_ROTATION_AMOUNT
  const gradient = `radial-gradient(circle,hsla(${hueValue},70%, 70%,1)0%,hsla(${hueValue},70%, 80%,1)25%,hsla(255,0%,100%,1)70%)`
  const color = `hsla(${hueValue+180},40%, 60%,1)`
  //update background
  document.getElementById('secondary').style.background = gradient
  document.getElementById('big0').style.color = color
  document.getElementById('zero').style.color = color
}
/////////////////////////////////////////////////////////////////////////////// END 
/////////////////////////////////////////////////////////////////////////////// OF 
/////////////////////////////////////////////////////////////////////////////// CODE
