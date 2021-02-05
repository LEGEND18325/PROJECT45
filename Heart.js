class Heart{

    constructor(){
        this.heartstock=3;
        
        this.image=loadImage("heart.png");
    
    }
    updateheartStock(heartstock){
        this.heartstock= heartstock;
        return this.heartstock;
    }
    
    
    deductHeart(heartStock){
        if(heartStock >0){
            this.heartstock=heartStock-1
        }
        
    }
    
    getHeartStock(){
        //this.foodstock= foodstock+1;
        return this.heartstock;
    }
    
    display(){
        var x=80,y=100;
    
        imageMode(CENTER);
        image(this.image,720,220,70,70);
    
        if(this.heartstock!=0){
            for(var i=0;i<this.heartstock;i++){
                if(i%10==0){
                    x=80;
                    y=y+50;
                }
    
                 image(this.image,x,y,50,50);
                 x=x+30;
    
            }
        }
    
    
    
    
    
    
    
    
    
    
    
    }
    }