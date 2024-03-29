function loader(){
    var time=gsap.timeline();
    time.to("#loader #box",{
        top:"50%",
        duration:0,
    })
    time.from("#loader .circle",{
        y:-500,
        duration:2,
        ease: "bounce.out",
        stagger:.07,
        opacity:0
    })
    time.to("#loader",{
        height:0,
        duration:1,
        ease:Expo.easeInOut,
        delay:1,
        opacity:0
    })
}
loader();


function locomotive(){
    gsap.registerPlugin(ScrollTrigger);
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
    
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    ScrollTrigger.refresh();
}
locomotive();





function menu(){
    var flag=0;
    document.querySelector("#main #navbar #menutext button").addEventListener("click", function(){
        if(flag===0){
            var time=gsap.timeline();

            time.to("#menu #one",{
                height:"100%",
                duration:2,
                ease:"Expo.easeInOut"
            })
            time.to("#menu #two",{
                height:"110%",
                duration:2,
                delay:-1.6,
                ease:"Expo.easeInOut"
            })
            document.querySelector("#main #navbar #menutext button").innerHTML="Close";
            flag=1
        }
        else{
            var time=gsap.timeline();
            
            time.to("#menu #two",{
                height:"-1%",
                duration:2,
                ease:"Expo.easeInOut"
            })
            time.to("#menu #one",{
                height:0,
                duration:2,
                delay:-1.6,
                ease:"Expo.easeInOut"
            })
            document.querySelector("#main #navbar #menutext button").innerHTML="Menu";
            flag=0
        }
    })
}
menu();
function split(){
    function h1split1() {
        var clutter;
        document.querySelectorAll(".split1").forEach(function(splittext){
            clutter = "";
            splittext.textContent.split("").forEach(function(char){
                clutter += `<span>${char}</span>`;
            })
            splittext.innerHTML = clutter;
    })
    }
    h1split1();
    function h1split2(){
        var clutter;
        document.querySelectorAll(".split2").forEach(function(splittext){
            clutter = "";
            splittext.textContent.split(" ").forEach(function(char){
                clutter += `<span> ${char} </span>`;
            })
            splittext.innerHTML = clutter;
    })
    }
    h1split2();
}
split();

function page1(){    
    function p1Heading(){
        gsap.to("#page1 h1:nth-child(1) span", {
            scrollTrigger:{
                trigger:"#page1",
                start:"bottom bottom",
                scroller : "#main",
                scrub:0.5,
                // markers:true
            },
            y:-650,
            duration:3,
            stagger:-0.2
        })
        gsap.to("#page1 h1:nth-child(2) span", {
            scrollTrigger:{
                trigger:"#page1",
                start:"bottom 93%",
                scroller : "#main",
                scrub:0.5,
                // markers:true
            },
            y:-650,
            duration:3,
            stagger:-0.2
        })
        ScrollTrigger.create({
            trigger: "#page1",
            start: "bottom 100%",
            scroller : "#main",
            pin: true,
            // markers:true
        })
    }
    p1Heading();
    
    
    
    function p1Photo(){
        gsap.to("#page1 #photo",{
            scrollTrigger:{
                trigger:"#page1 #photo",
                scroller : "#main",
                scrub:0.5,
                start:"bottom 50%",
                // markers:true,
            },
            width:"93%",
            height:"99%",
            scale:1.2,
            delay:5,
            duration:5,
        })
        
    }
    p1Photo();
}
page1();

function page2(){
    gsap.to("#page2 #textbox h1",{
        scrollTrigger:{
            trigger:"#page2 #textbox",
            scroller : "#main",
            start:"top top",
            scrub:true,
            pin:true,
            // markers:true
        },
        opacity:0,
        duration:5
    })
}
page2();

function page3(){
    function p3animation(){
        var t1=gsap.timeline();
    t1.to("#page3 span:nth-child(odd)",{
        scrollTrigger:{
            trigger:"#page3 #p3box",
            scroller : "#main",
            start:"bottom 90%",
            end:"bottom 20%",
            scrub:true,
            pin:true,
            // markers:true
        },
        opacity:0,
        duration:2
    })
    t1.to("#page3 span:nth-child(even),#page3 #line",{
        scrollTrigger:{
            trigger:"#page3 #p3box",
            scroller : "#main",
            start:"top 19%",
            scrub:true,
            pin:true,
            // markers:true
        },
        delay:3,
        opacity:0,
        duration:2
    })
    }
    p3animation();
}
page3();


function page4(){
    function p4animation(){
        var t1=gsap.timeline();
        t1.to("#page4 span:nth-child(even)",{
            scrollTrigger:{
                trigger:"#page4 #p4box",
                scroller : "#main",
                start:"bottom 90%",
                end:"bottom 20%",
                scrub:true,
                pin:true,
                // markers:true
            },
            opacity:0,
            duration:2
        })
        t1.to("#page4 span:nth-child(odd),#page4 #line",{
            scrollTrigger:{
                trigger:"#page4 #p4box",
                scroller : "#main",
                start:"top 19%",
                scrub:true,
                pin:true,
                // markers:true
            },
            delay:3,
            opacity:0,
            duration:2
        })
    }
    p4animation();
}
page4();


function page5(){
    function p5animation(){
        var t1=gsap.timeline();
    t1.to("#page5 span:nth-child(odd)",{
        scrollTrigger:{
            trigger:"#page5 #p5box",
            scroller : "#main",
            start:"bottom 90%",
            end:"bottom 20%",
            scrub:true,
            pin:true,
            // markers:true
        },
        opacity:0,
        duration:2
    })
    t1.to("#page5 span:nth-child(even),#page5 #line",{
        scrollTrigger:{
            trigger:"#page5 #p5box",
            scroller : "#main",
            start:"top 19%",
            scrub:true,
            pin:true,
            // markers:true
        },
        delay:3,
        opacity:0,
        duration:2
    })
    }
    p5animation();
    
}
page5();


function page6(){
    gsap.to("#page6 #box",{
        scrollTrigger:{
            trigger:"#page6 .photo",
            scroller : "#main",
            start:"top top",
            // end:"bottom bo",
            scrub:10,
            // pin:true,
            // markers:true
        },
        left:"-200%",
        duration:6,
        // opacity:0,
        // stagger:10
    
    })
    ScrollTrigger.create({
        trigger: "#page6",
        scroller : "#main",
        start: "top top",
        end:"bottom top",
        pin: true,
        // markers:true
    })
}
page6();


function page7(){
    gsap.from("#page7 span:nth-child(odd)",{
        scrollTrigger:{
            trigger:"#page7 span:nth-child(odd)",
            scroller : "#main",
            start:"bottom 100%",
            scrub:true,
            // markers:true
        },
        y:500,
        // x:100,
        duration:5,
        // ease: "elastic.out(1, 0.3)",
        stagger:1,
        opacity:0
    })
    gsap.from("#page7 span:nth-child(even)",{
        scrollTrigger:{
            trigger:"#page7 span:nth-child(even)",
            scroller : "#main",
            start:"bottom 100%",
            scrub:true,
            // markers:true
        },
        y:500,
        // x:100,
        delay:5,
        duration:5,
        stagger:1,
        // ease: "elastic.out(1, 0.3)",
        opacity:0
    })
    gsap.to("#page7 #overlay",{
        scrollTrigger:{
            trigger:"#page7",
            scroller : "#main",
            // scroller:"#page7",
            start:"bottom top",
            end:"+=3000px",
            scrub:true,
            // markers:true,
        },
        right: 0,
        duration:5
    })
    ScrollTrigger.create({
        trigger: "#page7",
        scroller : "#main",
        start: "top top",
        end:"bottom -390%",
        pin: true,
        // markers:true
    })
}
page7();

function page8(){
    var time=gsap.timeline();
    time.to("#main #page8 #box",{
        scrollTrigger:{
            trigger:"#main #page8 #box",
            scroller : "#main",
            start:"bottom bottom",
            scrub:1,
            // markers:true
        },
        x: "-100%",
        duration:2,
        ease: "none"
    })
    time.from("#page8 h1 span:nth-child(odd)",{
        scrollTrigger:{
            trigger:"#page8 h1 span:nth-child(odd)",
            scroller : "#main",
            start:"15% 50%",
            // end:"bottom top",
            scrub:true,
            // markers:true,
        },
        // x:-300,
        y:200,
        duration:2,
        stagger:0.5,
        opacity:0,
        ease:"none"
        
    })
    time.from("#page8 h1 span:nth-child(even)",{
        scrollTrigger:{
            trigger:"#page8 h1 span",
            scroller : "#main",
            start:"50% 80%",
            // end:"bottom -20%",
            scrub:true,
            // markers:true,
        },
        // x:200,
        y:-300,
        duration:2,
        stagger:0.5,
        opacity:0,
        ease:"none"
    })



    ScrollTrigger.create({
        trigger: "#page8",
        scroller : "#main",
        start: "top top",
        end:"bottom -30%",
        pin: true,
        // markers:true
    })
}
page8();


function page9(){
    gsap.to("#page9 .big",{
        scrollTrigger:{
            trigger:"#page9 .big",
            scroller : "#main",
            scrub:0.5,
            start:"bottom 70%",
            end:"bottom 30%",
            // markers:true,
        },
        y:150,
        scale:4,
        duration:3
    })    
}
page9();


function page11(){
    gsap.to("#page11 h1",{
        scrollTrigger:{
            trigger:"#page11 h1",
            scroller : "#main",
            scrub:0.5,
            start:"bottom 70%",
            end:"bottom 30%",
            // markers:true,
        },
        scale:10,
        duration:3
    })    
}
page11();




