
class Stand{
    constructor(x, y, widht, height) {
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = this.width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        strokeWeight(2);
        fill("white")
        push();
        translate(this.body.positoin.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
    }
}