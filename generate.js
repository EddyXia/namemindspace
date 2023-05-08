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

  var iEngine = Engine.create();
  var iRunner = Runner.create();
  world = iEngine.world;
                                                                             //END
                                                                             //OF
                                                                             //CODE
//NYC OPEN DATA API
  const APP_TOKEN = 'O4s5f14ljX1NkrufUac4DPIKX' // <- Replace this with your app token
  const DATASET_IDENTIFIER = '25th-nujf' // <- Replace this with the ID for the data resource that you want to look up
  const LIMIT = 49509 // <- Replace this with the number of records you want to pull

//FETCH INFORMATION
let namedata = []

//Construct the URL that we need to make requests
  const url = `https://data.cityofnewyork.us/resource/${DATASET_IDENTIFIER}.json?$limit=${LIMIT}&$$app_token=${APP_TOKEN}`

  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      namedata = json
    });
                                                                             //END
                                                                             //OF
                                                                             //CODE
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
                                                                           //END
                                                                           //OF
                                                                           //CODE
//ADD WORLD BORDER
//GROUND
const ground = Bodies.rectangle(w/2, h, w*2, 255,{
  isStatic: true,
  render: {
      fillStyle: 'gray',
  }
});
//WALL LEFT
const wallL = Bodies.rectangle(0-20, h/2, 25, h*4,{
  isStatic: true,
  render: {
      fillStyle: 'gray',
  }
});
//WALL RIGHT
const wallR = Bodies.rectangle(20+w, h/2, 25, h*4,{
  isStatic: true,
  render: {
      fillStyle: 'gray',
  }
});
//ROOF
const roof = Bodies.rectangle(w/2, -h*2, w*2, 255,{
  isStatic: true,
  render: {
      fillStyle: 'gray',
  }
});
//ADD WALL
Composite.add(iEngine.world, [ground, wallL, wallR, roof]);

                                                                           //END
                                                                           //OF
                                                                           //CODE
//CREATING WORLD VALUE
var VIEW = {};
VIEW.SAFE_WIDTH = 100;
VIEW.SAFE_HEIGHT = 100;
VIEW.scale = Math.min(window.innerWidth / VIEW.SAFE_WIDTH, window.innerHeight / VIEW.SAFE_HEIGHT);  
VIEW.width = window.innerWidth / VIEW.scale;
VIEW.height = window.innerHeight / VIEW.scale;
VIEW.centerX = VIEW.width / 2;
VIEW.centerY = VIEW.height / 2;
VIEW.offsetX = (VIEW.width - VIEW.SAFE_WIDTH) / 2 / VIEW.scale;
VIEW.offsetY = (VIEW.height - VIEW.SAFE_HEIGHT) / 2 / VIEW.scale;
                                                                             //END
                                                                             //OF
                                                                             //CODE
//LINK HTML TO MATTER.JS PHYSIC (CODE FROM WEB)
/** Set up relative positions and scales **/
var VIEW = {};
VIEW.SAFE_WIDTH = 100;
VIEW.SAFE_HEIGHT = 100;
VIEW.scale = Math.min(window.innerWidth / VIEW.SAFE_WIDTH, window.innerHeight / VIEW.SAFE_HEIGHT);
VIEW.width = window.innerWidth / VIEW.scale;
VIEW.height = window.innerHeight / VIEW.scale;
VIEW.centerX = VIEW.width / 2;
VIEW.centerY = VIEW.height / 2;
VIEW.offsetX = (VIEW.width - VIEW.SAFE_WIDTH) / 2 / VIEW.scale;
VIEW.offsetY = (VIEW.height - VIEW.SAFE_HEIGHT) / 2 / VIEW.scale;

// create a Matter.js engine
var engine = Engine.create({
    render: {
        options: {
            width: 100,
            height: 100,
        }
    }
});
// run the engine
Engine.run(engine);
engine.gravity.y = 0.2
var bodiesDom = document.querySelectorAll('.block');
var bodies = [];
for (var i = 0, l = bodiesDom.length; i < l; i++) {
    var body = Bodies.rectangle(
        VIEW.centerX,
        20, 
        VIEW.width*bodiesDom[i].offsetWidth/window.innerWidth, 
        VIEW.height*bodiesDom[i].offsetHeight/window.innerHeight
    );
	bodiesDom[i].id = body.id;
    bodies.push(body);
}
World.add(engine.world, bodies);

window.requestAnimationFrame(update);
function update() {
    for (var i = 0, l = bodiesDom.length; i < l; i++) {
        var bodyDom = bodiesDom[i];
        var body = null;
    	for (var j = 0, k = bodies.length; j < k; j++) {
        	if ( bodies[j].id == bodyDom.id ) {
                body = bodies[j];
                break;
            }
        }
        
        if ( body === null ) continue;
        
        bodyDom.style.transform = "translate( " 
            + ((VIEW.offsetX + body.position.x) * VIEW.scale - bodyDom.offsetWidth/2 ) 
            + "px, "
            + (VIEW.offsetY *2 + ( body.position.y) * VIEW.scale - bodyDom.offsetHeight/2)
            + "px )";
        bodyDom.style.transform += "rotate( " + body.angle + "rad )";
    }
    window.requestAnimationFrame(update);
}
                                                                             //END
                                                                             //OF
                                                                             //CODE
//GENERATE NAMES
    //CREATE BUTTON
    const button = document.getElementById('generate')
    button.addEventListener('click', function(){
        //PULL RANDOM ITEM
      const randomize = Math.floor(Math.random()*namedata.length)
      text = namedata[randomize]
      var divElement = document.createElement("div");
      divElement.classList.add("block");
      divElement.textContent = text.nm;
      divElement.textContent = divElement.textContent.charAt(0).toUpperCase() + divElement.textContent.slice(1).toLowerCase();
      document.body.appendChild(divElement);

      var newBody = Bodies.rectangle(
        VIEW.centerX,
        20, 
        VIEW.width*divElement.offsetWidth/window.innerWidth, 
        VIEW.height*divElement.offsetHeight/window.innerHeight
    );
    divElement.id = newBody.id;
    bodies.push(newBody);
    World.add(iEngine.world, newBody);
    })
    
                                                                                 //END
                                                                                 //OF
                                                                                 //CODE
//ADD MOUSE INTERACTIONS (CODE FROM WEB)
  var canvasmouse=Mouse.create(document.getElementById('frame'));
  var mConstraint = MouseConstraint;
  Mouse.setScale(canvasmouse,{x:1,y:1,pixelRation:2});
  mouseControl = mConstraint.create(iEngine,{
    mouse:canvasmouse,
    constraint:{
      render:{
      visible:false,
      }
    }
  });
  Composite.add(world,mouseControl);

  Render.run(iRender);
  Runner.run(iRunner, iEngine);
                                                                             //END
                                                                             //OF
                                                                             //CODE
