var ab=gsap.timeline();

ab.from("#image1",{
    y:200,
    duration: .8,
    delay:.5,
    opacity:0
})
.from("#image2",{
    x: 200,
    duration: .8,
    opacity:0
},`-=.8`)
.from("#image3",{
    y: -200,
    duration: .8,
    opacity:0
},`-=.8`)
.from("#pg1text",{
    opacity:0,
    duration: .8
},`-=1`)

var flag=0;
var menubar=document.querySelector("#menubar"),
mla=document.querySelector("#mla"),
mlb=document.querySelector("#mlb"),
mlc=document.querySelector("#mlc"),
menubaropen=document.querySelector("#menubaropen"),
sopen=document.querySelector("#sopen"),
sropen=document.querySelector("#servicesopen");

if(flag===0){
sopen.addEventListener("mouseover",function(){
    sropen.style.display="flex"
    sropen.style.opacity="1"
})
sropen.addEventListener("mouseover",function(){
    sropen.style.display="flex"
    sropen.style.opacity="1"
})
sropen.addEventListener("mouseout",function(){
    sropen.style.display="none"
    flag=1;
})
}


menubar.addEventListener("click",function(){
    if(flag===0){
    mla.style.transform= "rotate(-45deg)";
    mla.style.transformOrigin= "80% 30%";
    mlb.style.opacity="0";
    mlc.style.transform= "rotate(45deg)";
    mlc.style.transformOrigin= "80% 30%";
    mlc.style.width="100%";
    menubaropen.style.top="0%"

    flag=1;
    }else{
        mlb.style.opacity="1";
        mla.style.transform= "rotate(0deg)";
        mla.style.transformOrigin= "80% 30%";
        mlc.style.transform= "rotate(0deg)";
        mlc.style.transformOrigin= "80% 30%";
        mlc.style.width="50%";
        menubaropen.style.top="100%";
        flag=0;
    }
})