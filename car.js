AFRAME.registerComponent("car",{
    schema:{
        x:{type:"number", default:-10},
        y:{type:"number", default:50},
        z:{type:"number", default:50}    
    }, 
    tick:function(){
        var pos = this.data
        this.el.setAttribute("position",{x:pos.x, y:pos.y, z:pos.z})
    }
})