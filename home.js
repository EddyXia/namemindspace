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
  iEngine.gravity.y = 0.05;

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
      background: `white`
    }
  });
/////////////////////////////////////////////////////////////////////////////// END 
/////////////////////////////////////////////////////////////////////////////// OF 
/////////////////////////////////////////////////////////////////////////////// CODE
//ADD SHAPES
    const scale=1
    const $restitution = 0.9
    const $friction = 1
    const $frictionAir = 0.002
    const $density = 0.25
    const $saturation =`${70}%`
    const $brightness =`${70}%`
    
    const square = Bodies.rectangle(w/2, h/2, 150/scale, 75/scale,{
      restitution: $restitution,
      friction: $friction,
      frictionAir: $frictionAir,
      density: $density,
      render: {
          fillStyle: `hsla(${Math.floor(Math.random()*360)}, ${$saturation}, ${$brightness}, 1)`,
        }
      });
    const squareTwo = Bodies.rectangle(w/2+1, h/2+1, 150/scale, 150/scale,{
      restitution: $restitution,
      friction: $friction,
      frictionAir: $frictionAir,
      density: $density,
      render: {
          fillStyle: `hsla(${Math.floor(Math.random()*360)}, ${$saturation}, ${$brightness}, 1)`,
        }
      });
    const squareThree = Bodies.rectangle(w/2-50, h/2, 150/scale, 150/scale,{
      restitution: $restitution,
      friction: $friction,
      frictionAir: $frictionAir,
      density: $density,
      render: {
          fillStyle: `hsla(${Math.floor(Math.random()*360)}, ${$saturation}, ${$brightness}, 1)`,
        }
    });const squareFour = Bodies.rectangle(w/2-10, h/2-10, 150/scale, 150/scale,{
      restitution: $restitution,
      friction: $friction,
      frictionAir: $frictionAir,
      density: $density,
      render: {
          fillStyle: `hsla(${Math.floor(Math.random()*360)}, ${$saturation}, ${$brightness}, 1)`,
        }
      });
    const squareFive = Bodies.rectangle(w/2+50, h/2, 150/scale, 75/scale,{
      restitution: $restitution,
      friction: $friction,
      frictionAir: $frictionAir,
      density: $density,
      render: {
          fillStyle: `hsla(${Math.floor(Math.random()*360)}, ${$saturation}, ${$brightness}, 1)`,
        }
      });
    const squareSix = Bodies.rectangle(w/2+50, h/2, 150/scale, 75/scale,{
      restitution: $restitution,
      friction: $friction,
      frictionAir: $frictionAir,
      density: $density,
      render: {
          fillStyle: `hsla(${Math.floor(Math.random()*360)}, ${$saturation}, ${$brightness}, 1)`,
        }
      });
    const squareSeven = Bodies.rectangle(w/2-50, h/2, 150/scale, 75/scale,{
      restitution:$restitution,
      friction: $friction,
      frictionAir: $frictionAir,
      density: $density,
      render: {
          fillStyle: `hsla(${Math.floor(Math.random()*360)}, ${$saturation}, ${$brightness}, 1)`,
        }
      });
    const squareEight = Bodies.rectangle(w/2-75, h/2-150, 300/scale, 75/scale,{
      restitution:$restitution,
      friction: $friction,
      frictionAir: $frictionAir,
      density: $density,
      render: {
          fillStyle: `hsla(${Math.floor(Math.random()*360)}, ${$saturation}, ${$brightness}, 1)`,
        }
      });
      const squareNine = Bodies.rectangle(w/2-75, h/2-50, 75/scale, 300/scale,{
        restitution:$restitution,
        friction: $friction,
        frictionAir: $frictionAir,
        density: $density,
        render: {
            fillStyle: `hsla(${Math.floor(Math.random()*360)}, ${$saturation}, ${$brightness}, 1)`,
          }
        });
    Matter.World.add(iEngine.world, [square,squareTwo,squareThree,squareFour,squareFive,squareSix,squareSeven,squareEight,squareNine]);
const square2 = Bodies.rectangle(w/2, h/2, 200, 100,{
  isStatic:false,
  render:{
    fillStyle:'gray',
  }
});
Matter.Events.on(iEngine, 'beforeUpdate', function(event) {
  Matter.Body.rotate(square, 0.0001);
  Matter.Body.rotate(squareTwo, -0.0001);
});
//ADD WORLD BORDER
  //GROUND
  const ground = Bodies.rectangle(w/2, h, w, 82,{
    isStatic: true,
    render: {
        fillStyle: 'white',
    }
  });
//WALL LEFT
  const wallL = Bodies.rectangle(0-20, h/2, 52, h*4,{
    isStatic: true,
    render: {
        fillStyle: 'white',
    }
  });
//WALL RIGHT
  const wallR = Bodies.rectangle(20+w, h/2, 52, h*4,{
    isStatic: true,
    render: {
        fillStyle: 'white',
    }
  });
//ROOF
  const roof = Bodies.rectangle(w/2, -h/4, w, 12,{
    isStatic: true,
    render: {
        fillStyle: 'white',
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
    constraint:{
      
      render:{
      visible:false,
      }
    }
  });
  Composite.add(world,mouseControl);

  Render.run(iRender);
  Runner.run(iRunner, iEngine);
/////////////////////////////////////////////////////////////////////////////// END 
/////////////////////////////////////////////////////////////////////////////// OF 
/////////////////////////////////////////////////////////////////////////////// CODE
