class Food {

    constructor() {

        this.image = loadImage("images/Milk.png");

    }

    getFoodStock() {

        var foodStockref = database.ref('Food');
        foodStockref.on("value",(data) => {

            foodCount = data.val();
            console.log("Function get Food Stock is called")
        })

    }
    
    updateFoodStock(foodStockU) {

        database.ref('/').update({

            Food: foodStockU,
            lastFed: hour()

        })

    }

    getFedTime() {

        fedTime = database.ref('lastFed');
        fedTime.on("value",function(data) {

            lastFed = data.val();
           // console.log(lastFed)
        })

    }

   /* updateFedTime() {

        database.ref('/').update({

            lastFed: hour()

        })

    }*/


    /*async start() {

        var foodRef = await database.ref('food').once("value");
        if(foodRef.exists()) {

            foodCount = foodRef.val();

        }

        var lastFed = await database.ref('lastFed').once("value");
        if(lastFed.exists()) {

            fedTime = lastFed.val();

        }

    }*/

    display() {
        textSize(15);
        fill("white");
        stroke(5);
       food1.getFedTime();
        console.log(lastFed)
        if(lastFed >= 12) {

            text("Last Fed: " + lastFed % 12 + " PM", 150, 60);
            
        } 
        
        else if(lastFed === 0){

            text("Last Fed: 12 AM", 150, 60);

        } 
        
        else {

            text("Last Fed: " + lastFed + " AM", 150, 60);

        }

        var x = 80, y = 100;
        imageMode(CENTER);
        if(foodCount != 0) { 

            for(var i = 0; i < foodCount; i++) {

                if(i % 10 === 0) {

                    x = 80;
                    y = y + 50;

                }
                image(milkImage, x, y, 50, 50);
                x = x + 30;

            }
        }
    }

}