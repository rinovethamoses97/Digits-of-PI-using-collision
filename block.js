class Block{
    constructor(x_,m_,v_,s_){
        this.x=x_;
        this.m=m_;
        this.v=v_;
        this.width=s_;
        this.height=s_;
        this.y=height-this.height;
    }
    show(){
        stroke(255);
        noFill();
        rect(this.x,this.y,this.width,this.height);
    }
    update(){
        this.x+=this.v;
    }
    reverseVelocity(){
        this.v=-this.v;
    }
    hitWall(){
        if(this.x<0){
            return true;
        }
        else{
            return false;
        }
    }
    collide(other){
        if(this.x+this.width<other.x || other.x+other.width<this.x){
            return false;
        }
        else{
            return true;
        }
    }
    computeVelocity(other){
        var temp=(this.m-other.m)/(this.m+other.m);
        temp*=this.v;
        var temp1=(2*other.m);
        temp1/=(this.m+other.m);
        temp1*=other.v;
        return(temp+temp1);
    }
}