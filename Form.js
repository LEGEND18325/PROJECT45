class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.reset = createButton('Reset');
    }
    hide(){
      //console.log("hello");
      this.button.hide();
      this.input.hide();
    
    }
  
    display(){
      
  
      this.input.position(200 , 100);
      this.button.position(400, 100);
      this.reset.position(displayWidth-100,20);
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        p1.name = this.input.value();
        playerCount+=1;
        p1.index = playerCount;
       p1.update();
        p1.updateCount(playerCount);
        
      });
  
      this.reset.mousePressed(()=>{
        p1.updateCount(0);
        gameState.update(0);
      });
  
    }
  }
  




