var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["af55c0cd-7781-47df-b00d-0fa9cd2e908c","a10827ae-bf7e-459b-be24-2063517ad9d5","89076ad2-17ed-4cc2-a6b0-a2f2c7647f8b","948032ca-676c-4ae7-b0c8-fb7ac37bec7c","d44d015c-0f5a-42d6-a705-13c534991470","62b639e0-262b-4def-aeae-9b21305fdd2e","27a6a3ea-51bb-455d-9790-dd4500e68cef","53186617-b397-4792-b0ee-a61374274332","82cd349d-0a71-49f3-9b66-f2ee881ae8d3","3c99ad97-d7bb-4f1e-b8a0-7c6154dd7bb7","a9fbe12f-d104-4696-86e6-48f6cc4a55dd","dc7efe7d-89e9-4c27-aa1e-07265e0d4b29","a7dac581-97e5-4de9-b678-6e530e67abba","6ffdc35f-3dcf-4021-b291-6697d52971e8","b5310308-4040-467f-8595-5734e47412bb","dde53604-0383-4ed5-a9a6-3de849e94f6c","e106cff3-d7be-45c9-b67b-96a91cd67bae","599fb1a7-48b2-4602-aa02-cc28e610b94d","51bdd6c1-29e9-42b8-987f-18a8604d9caa"],"propsByKey":{"af55c0cd-7781-47df-b00d-0fa9cd2e908c":{"name":"trex","sourceUrl":null,"frameSize":{"x":524,"y":94},"frameCount":3,"looping":true,"frameDelay":4,"version":"7cPN.FqwGwk8e45zqMGJLfeRzEMrHCGS","loadedFromSource":true,"saved":true,"sourceSize":{"x":524,"y":282},"rootRelativePath":"assets/af55c0cd-7781-47df-b00d-0fa9cd2e908c.png"},"a10827ae-bf7e-459b-be24-2063517ad9d5":{"name":"ground1","sourceUrl":"assets/v3/animations/_zVr-Ht4cJETV573GIhR_widaY8yD24II_c3xbDv5s4/a10827ae-bf7e-459b-be24-2063517ad9d5.png","frameSize":{"x":1596,"y":26},"frameCount":1,"looping":true,"frameDelay":4,"version":"HQFCmwW.TiejSP68sgpBgB2A7X1KL0t4","loadedFromSource":true,"saved":true,"sourceSize":{"x":1596,"y":26},"rootRelativePath":"assets/v3/animations/_zVr-Ht4cJETV573GIhR_widaY8yD24II_c3xbDv5s4/a10827ae-bf7e-459b-be24-2063517ad9d5.png"},"89076ad2-17ed-4cc2-a6b0-a2f2c7647f8b":{"name":"ground2","sourceUrl":"assets/v3/animations/_zVr-Ht4cJETV573GIhR_widaY8yD24II_c3xbDv5s4/89076ad2-17ed-4cc2-a6b0-a2f2c7647f8b.png","frameSize":{"x":2377,"y":12},"frameCount":1,"looping":true,"frameDelay":4,"version":"tfO9K3jXmqYMQ6LbqHF9wsjv9X5iYlJ4","loadedFromSource":true,"saved":true,"sourceSize":{"x":2377,"y":12},"rootRelativePath":"assets/v3/animations/_zVr-Ht4cJETV573GIhR_widaY8yD24II_c3xbDv5s4/89076ad2-17ed-4cc2-a6b0-a2f2c7647f8b.png"},"948032ca-676c-4ae7-b0c8-fb7ac37bec7c":{"name":"cloud","sourceUrl":"assets/v3/animations/RMvIP5z9gbC5QVTMhtnVaJrbAK7UBB5ceCkXG470Jjc/948032ca-676c-4ae7-b0c8-fb7ac37bec7c.png","frameSize":{"x":92,"y":27},"frameCount":1,"looping":true,"frameDelay":4,"version":"dlp2h5fOiwiIPZgXI.TZnknU791De4Rk","loadedFromSource":true,"saved":true,"sourceSize":{"x":92,"y":27},"rootRelativePath":"assets/v3/animations/RMvIP5z9gbC5QVTMhtnVaJrbAK7UBB5ceCkXG470Jjc/948032ca-676c-4ae7-b0c8-fb7ac37bec7c.png"},"d44d015c-0f5a-42d6-a705-13c534991470":{"name":"obstacle1","sourceUrl":"assets/v3/animations/ooO3PxLhwDwe0OJ01lb5hBseMZl0poJl8G-9Bf_FKUU/d44d015c-0f5a-42d6-a705-13c534991470.png","frameSize":{"x":34,"y":70},"frameCount":1,"looping":true,"frameDelay":4,"version":"rwy9w7N2QJ0WfuTV2mGYpDsjMT_upx.3","loadedFromSource":true,"saved":true,"sourceSize":{"x":34,"y":70},"rootRelativePath":"assets/v3/animations/ooO3PxLhwDwe0OJ01lb5hBseMZl0poJl8G-9Bf_FKUU/d44d015c-0f5a-42d6-a705-13c534991470.png"},"62b639e0-262b-4def-aeae-9b21305fdd2e":{"name":"obstacle2","sourceUrl":"assets/v3/animations/ooO3PxLhwDwe0OJ01lb5hBseMZl0poJl8G-9Bf_FKUU/62b639e0-262b-4def-aeae-9b21305fdd2e.png","frameSize":{"x":69,"y":70},"frameCount":1,"looping":true,"frameDelay":4,"version":"xNSJzETLDln6rggF86fuE8zNrBMdFyfD","loadedFromSource":true,"saved":true,"sourceSize":{"x":69,"y":70},"rootRelativePath":"assets/v3/animations/ooO3PxLhwDwe0OJ01lb5hBseMZl0poJl8G-9Bf_FKUU/62b639e0-262b-4def-aeae-9b21305fdd2e.png"},"27a6a3ea-51bb-455d-9790-dd4500e68cef":{"name":"obstacle3","sourceUrl":"assets/v3/animations/ooO3PxLhwDwe0OJ01lb5hBseMZl0poJl8G-9Bf_FKUU/27a6a3ea-51bb-455d-9790-dd4500e68cef.png","frameSize":{"x":102,"y":70},"frameCount":1,"looping":true,"frameDelay":4,"version":"eyZXOA6Vkm4yIaMkxkV45AorkA7xhmoO","loadedFromSource":true,"saved":true,"sourceSize":{"x":102,"y":70},"rootRelativePath":"assets/v3/animations/ooO3PxLhwDwe0OJ01lb5hBseMZl0poJl8G-9Bf_FKUU/27a6a3ea-51bb-455d-9790-dd4500e68cef.png"},"53186617-b397-4792-b0ee-a61374274332":{"name":"obstacle4","sourceUrl":"assets/v3/animations/ooO3PxLhwDwe0OJ01lb5hBseMZl0poJl8G-9Bf_FKUU/53186617-b397-4792-b0ee-a61374274332.png","frameSize":{"x":50,"y":100},"frameCount":1,"looping":true,"frameDelay":4,"version":"T1_1rK.bEoJA5_GjLZu5xXpph_kRDqp1","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":100},"rootRelativePath":"assets/v3/animations/ooO3PxLhwDwe0OJ01lb5hBseMZl0poJl8G-9Bf_FKUU/53186617-b397-4792-b0ee-a61374274332.png"},"82cd349d-0a71-49f3-9b66-f2ee881ae8d3":{"name":"obstacle5","sourceUrl":"assets/v3/animations/ooO3PxLhwDwe0OJ01lb5hBseMZl0poJl8G-9Bf_FKUU/82cd349d-0a71-49f3-9b66-f2ee881ae8d3.png","frameSize":{"x":103,"y":100},"frameCount":1,"looping":true,"frameDelay":4,"version":"xbM_fCsEznIAntPG9w2J4Y7iVl1mOsUC","loadedFromSource":true,"saved":true,"sourceSize":{"x":103,"y":100},"rootRelativePath":"assets/v3/animations/ooO3PxLhwDwe0OJ01lb5hBseMZl0poJl8G-9Bf_FKUU/82cd349d-0a71-49f3-9b66-f2ee881ae8d3.png"},"3c99ad97-d7bb-4f1e-b8a0-7c6154dd7bb7":{"name":"obstacle6","sourceUrl":"assets/v3/animations/ooO3PxLhwDwe0OJ01lb5hBseMZl0poJl8G-9Bf_FKUU/3c99ad97-d7bb-4f1e-b8a0-7c6154dd7bb7.png","frameSize":{"x":150,"y":100},"frameCount":1,"looping":true,"frameDelay":4,"version":"43Fy797npLtAftgpczLKAK9uTHobtnTY","loadedFromSource":true,"saved":true,"sourceSize":{"x":150,"y":100},"rootRelativePath":"assets/v3/animations/ooO3PxLhwDwe0OJ01lb5hBseMZl0poJl8G-9Bf_FKUU/3c99ad97-d7bb-4f1e-b8a0-7c6154dd7bb7.png"},"a9fbe12f-d104-4696-86e6-48f6cc4a55dd":{"name":"trex_collided","sourceUrl":"assets/v3/animations/JI0MyHYDGYHup_lac_GM8hY6BwPSKo7AE9BueVVsV48/a9fbe12f-d104-4696-86e6-48f6cc4a55dd.png","frameSize":{"x":88,"y":94},"frameCount":1,"looping":true,"frameDelay":4,"version":"KTatGIubxde_2a36pnf9dqwHZS8OIXDX","loadedFromSource":true,"saved":true,"sourceSize":{"x":88,"y":94},"rootRelativePath":"assets/v3/animations/JI0MyHYDGYHup_lac_GM8hY6BwPSKo7AE9BueVVsV48/a9fbe12f-d104-4696-86e6-48f6cc4a55dd.png"},"dc7efe7d-89e9-4c27-aa1e-07265e0d4b29":{"name":"gameOver","sourceUrl":"assets/v3/animations/JI0MyHYDGYHup_lac_GM8hY6BwPSKo7AE9BueVVsV48/dc7efe7d-89e9-4c27-aa1e-07265e0d4b29.png","frameSize":{"x":381,"y":21},"frameCount":1,"looping":true,"frameDelay":4,"version":"Hppsv.O.O2gcxRq9u6CjYpvDq_c_0DBa","loadedFromSource":true,"saved":true,"sourceSize":{"x":381,"y":21},"rootRelativePath":"assets/v3/animations/JI0MyHYDGYHup_lac_GM8hY6BwPSKo7AE9BueVVsV48/dc7efe7d-89e9-4c27-aa1e-07265e0d4b29.png"},"a7dac581-97e5-4de9-b678-6e530e67abba":{"name":"restart","sourceUrl":"assets/v3/animations/JI0MyHYDGYHup_lac_GM8hY6BwPSKo7AE9BueVVsV48/a7dac581-97e5-4de9-b678-6e530e67abba.png","frameSize":{"x":75,"y":64},"frameCount":1,"looping":true,"frameDelay":4,"version":"jjt2NUvBDuduvuBMlkuBOG9GE4QJ1E0F","loadedFromSource":true,"saved":true,"sourceSize":{"x":75,"y":64},"rootRelativePath":"assets/v3/animations/JI0MyHYDGYHup_lac_GM8hY6BwPSKo7AE9BueVVsV48/a7dac581-97e5-4de9-b678-6e530e67abba.png"},"6ffdc35f-3dcf-4021-b291-6697d52971e8":{"name":"bunny1_1","frameCount":2,"frameSize":{"x":122,"y":209},"looping":true,"frameDelay":2,"categories":["animals"],"jsonLastModified":"2020-07-16 22:27:20 UTC","pngLastModified":"2020-01-29 19:47:52 UTC","version":".uEpXdMH.MquXH85XVmBVf67c1wSQXUg","sourceUrl":"assets/api/v1/animation-library/gamelab/.uEpXdMH.MquXH85XVmBVf67c1wSQXUg/category_animals/bunny1.png","sourceSize":{"x":244,"y":209},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/.uEpXdMH.MquXH85XVmBVf67c1wSQXUg/category_animals/bunny1.png"},"b5310308-4040-467f-8595-5734e47412bb":{"name":"bunny1_hurt_1","frameCount":1,"frameSize":{"x":150,"y":174},"looping":true,"frameDelay":2,"categories":["animals"],"jsonLastModified":"2020-07-16 22:27:16 UTC","pngLastModified":"2020-01-29 19:47:52 UTC","version":"zY6wdkRSq43R4KIJPNpUo3wXM3r4Qqhy","sourceUrl":"assets/api/v1/animation-library/gamelab/zY6wdkRSq43R4KIJPNpUo3wXM3r4Qqhy/category_animals/bunny1_hurt.png","sourceSize":{"x":150,"y":174},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/zY6wdkRSq43R4KIJPNpUo3wXM3r4Qqhy/category_animals/bunny1_hurt.png"},"dde53604-0383-4ed5-a9a6-3de849e94f6c":{"name":"ob1","frameCount":1,"frameSize":{"x":108,"y":239},"looping":true,"frameDelay":2,"categories":["obstacles"],"jsonLastModified":"2020-07-16 22:29:52 UTC","pngLastModified":"2020-01-29 19:49:19 UTC","version":"c7njzBqNr5dJqCb8jXbsXQfJEdmMskSf","sourceUrl":"assets/api/v1/animation-library/gamelab/c7njzBqNr5dJqCb8jXbsXQfJEdmMskSf/category_obstacles/rockGrass.png","sourceSize":{"x":108,"y":239},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/c7njzBqNr5dJqCb8jXbsXQfJEdmMskSf/category_obstacles/rockGrass.png"},"e106cff3-d7be-45c9-b67b-96a91cd67bae":{"name":"ob2","frameCount":1,"frameSize":{"x":128,"y":128},"looping":true,"frameDelay":2,"categories":["obstacles"],"jsonLastModified":"2020-07-16 22:29:50 UTC","pngLastModified":"2020-01-29 19:49:17 UTC","version":"jAoAQOLwJ3wYD1gl2D6Xgg5AUHkHfPWK","sourceUrl":"assets/api/v1/animation-library/gamelab/jAoAQOLwJ3wYD1gl2D6Xgg5AUHkHfPWK/category_obstacles/ore_coal.png","sourceSize":{"x":128,"y":128},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/jAoAQOLwJ3wYD1gl2D6Xgg5AUHkHfPWK/category_obstacles/ore_coal.png"},"599fb1a7-48b2-4602-aa02-cc28e610b94d":{"name":"apple_1","frameCount":1,"frameSize":{"x":128,"y":128},"looping":true,"frameDelay":2,"categories":["food"],"jsonLastModified":"2020-07-16 22:28:24 UTC","pngLastModified":"2020-01-29 19:48:28 UTC","version":"F_v91y9vHdaIMRGQ9Wqps2SnsgXW55cC","sourceUrl":"assets/api/v1/animation-library/gamelab/F_v91y9vHdaIMRGQ9Wqps2SnsgXW55cC/category_food/apple.png","sourceSize":{"x":128,"y":128},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/F_v91y9vHdaIMRGQ9Wqps2SnsgXW55cC/category_food/apple.png"},"51bdd6c1-29e9-42b8-987f-18a8604d9caa":{"name":"pine_trees_1","frameCount":1,"frameSize":{"x":400,"y":400},"looping":true,"frameDelay":2,"categories":["backgrounds"],"jsonLastModified":"2020-07-16 22:27:36 UTC","pngLastModified":"2020-01-29 19:48:02 UTC","version":"z8Dgk.em0WaIbb.0CaPSgLIoJa8HoEZe","sourceUrl":"assets/api/v1/animation-library/gamelab/z8Dgk.em0WaIbb.0CaPSgLIoJa8HoEZe/category_backgrounds/pine_trees.png","sourceSize":{"x":400,"y":400},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/z8Dgk.em0WaIbb.0CaPSgLIoJa8HoEZe/category_backgrounds/pine_trees.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//initiate Game STATEs
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var back=createSprite(200,200,20,20);
back.scale=5;
//create a trex sprite
var trex = createSprite(200,320,20,50);
trex.setAnimation("bunny1_1");

//set collision radius for the trex
trex.setCollider("circle",0,0,30);

//scale and position the trex
trex.scale = 0.3;
trex.x = 50;
//trex.collide(ground);


//create a ground sprite
var ground = createSprite(200,400,400,20);
ground.setAnimation("ground2");
ground.x = ground.width /2;

//invisible Ground to support Trex
var invisibleGround = createSprite(200,385,400,5);
invisibleGround.visible = false;

//create Obstacle and Cloud Groups
var ObstaclesGroup = createGroup();
var CloudsGroup = createGroup();
var BananaGroup= createGroup();

//place gameOver and restart icon on the screen
var gameOver = createSprite(200,300);
var restart = createSprite(200,340);
gameOver.setAnimation("gameOver");
gameOver.scale = 0.5;
restart.setAnimation("restart");
restart.scale = 0.5;

gameOver.visible = false;
restart.visible = false;

//set text
textSize(18);
textFont("Georgia");
textStyle(BOLD);

//score
var count = 0;

function draw() {
  
  back.setAnimation("pine_trees_1");
 


 
 // //console.log(World.frameRate);
  back.velocityX=-6;
  if (back.x < 0){
      back.x = back.width/2;
      
    }
  
  if(gameState === PLAY){
    //move the ground
    ground.velocityX = -(6 + 3*count/100);
    //scoring
  //  count = count+Math.round(World.frameRate/60);
    
    if (count>0 && count%100 === 0){
      playSound("assets/checkPoint.mp3");
    }
    
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
     
    
     //jump when the space key is pressed
    if(keyDown("space") && trex.y >= 359){
      trex.velocityY = -12 ;
      playSound("assets/jump.mp3");
    }
  
    //add gravity
    trex.velocityY = trex.velocityY + 0.8;
    
    //spawn the clouds
    //spawnClouds();
    spawnFood();
  
    //spawn obstacles
    spawnObstacles();
   if (BananaGroup.isTouching(trex)) {
      BananaGroup.destroyEach();
    playSound("assets/category_achievements/bubbly_game_achievement_sound.mp3");
     count = count+1;
     
    switch(count){
      case 10: trex.scale=1;
      break;
      case 20: trex.scale=1.2;
      break;
      case 30: trex.scale=1.3;
      break;
      case 40: trex.scale=1.4;
      break;
      default: break;
      
      
      
    }
   }
    
    
    
    //End the game when trex is touching the obstacle
    if(ObstaclesGroup.isTouching(trex)){
      playSound("assets/jump.mp3");
      gameState = END;
      playSound("assets/die.mp3");
    }
  }
  
  else if(gameState === END) {
    gameOver.visible = true;
    restart.visible = true;
    back.velocityX=0;
    //set velcity of each game object to 0
    ground.velocityX = 0;
    trex.velocityY = 0;
    
    ObstaclesGroup.setVelocityXEach(0);
    CloudsGroup.setVelocityXEach(0);
    BananaGroup.setVelocityXEach(0);
    
    //change the trex animation
    trex.setAnimation("bunny1_hurt_1");
    
    //set lifetime of the game objects so that they are never destroyed
    ObstaclesGroup.setLifetimeEach(-1);
    CloudsGroup.setLifetimeEach(-1);
    
    
  }
  
  if(mousePressedOver(restart)) {
    reset();
  }
  
  //console.log(trex.y);
  
  //stop trex from falling down
  trex.collide(invisibleGround);
  
  drawSprites();
      textSize(25);
   stroke("white");
  fill("white");

  text("Survival time:"+ count,180, 20);
}

function reset(){
  gameState=PLAY;
  gameOver.visible=false;
  restart.visible=false;
ObstaclesGroup.destroyEach();
CloudsGroup.destroyEach();
BananaGroup.destroyEach();
trex.setAnimation("bunny1_1");  
count=0;
playSound("assets/category_alerts/cartoon_negative_bling.mp3");
back.velocityX=-6;

  
  
}
function spawnFood() {
  if(World.frameCount % 60 === 0) {
    var banana = createSprite(400,120,40,40);
    banana.velocityX = -5;
    banana.y=randomNumber(250,340);
    //generate random obstacles
   // var rand = randomNumber(1,2);
    banana.setAnimation("apple_1");
    
    //assign scale and lifetime to the obstacle           
    banana.scale = 0.5;
    banana.lifetime = 100;
    //add each obstacle to the group
    BananaGroup.add(banana);
  }
}


function spawnObstacles() {
  if(World.frameCount % 60 === 0) {
    var obstacle = createSprite(400,380,10,40);
    obstacle.velocityX = - (6 + 3*count/100);
    
    //generate random obstacles
    var rand = randomNumber(1,2);
    obstacle.setAnimation("ob" + rand);
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 70;
    //add each obstacle to the group
    ObstaclesGroup.add(obstacle);
  }
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (World.frameCount % 60 === 0) {
    var cloud = createSprite(400,320,40,10);
    cloud.y = randomNumber(280,320);
    cloud.setAnimation("cloud");
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    
     //assign lifetime to the variable
    cloud.lifetime = 134;
    
    //adjust the depth
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
    
    //add each cloud to the group
    CloudsGroup.add(cloud);
  }
  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
