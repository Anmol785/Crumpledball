class Paper{
constructor(x,y,width,height){

var options = {
    isStatic : false,
    resitution : 0.3,
    friction : 0.5,
    density : 1.2
}
this.body=Bodies.circle(x,y,width,height);
World.add(world,this.body);
}
}