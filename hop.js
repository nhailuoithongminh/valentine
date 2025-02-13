var xmlns = "http://www.w3.org/2000/svg",
  xlinkns = "http://www.w3.org/1999/xlink",
  select = function(s) {
    return document.querySelector(s);
  },
  selectAll = function(s) {
    return document.querySelectorAll(s);
  },
    star = select('#star'),
    starContainer = select('.starContainer'),
    starColours = ['#FFA5AB', '#FFF', '#F9DBBD', '#FFF'],
    starArr = []

TweenMax.set('svg', {
  visibility: 'visible'
})

TweenMax.set('.pointerHit', {
  skewY: -20,
  svgOrigin:'471 436'
})

TweenMax.set('#speedLines line', {
  drawSVG:'100% 100%'
})

function makeQMarks(){
 var s;
 for(var i = 0; i < 10; i++){
  s = star.cloneNode(true);
  starContainer.appendChild(s);
  
  TweenMax.set(s, {
   fill:starColours[i % starColours.length],
   x:randomBetween(-30, 30),
   y:randomBetween(-40, 35),
   transformOrigin:'50% 50%'
  })
  
  starArr.push(s);
 }
}

makeQMarks();
var mainTl = new TimelineMax({
  repeat: -1
});
var allBoxesTl = new TimelineMax();
allBoxesTl.fromTo('.allBoxes', 1, {
    x: -55,
    y: -110
  }, {
    x: '-=100',
    y: '+=70',
    ease: Power2.easeInOut
  })
  .to(['.pointer', '.dragIcon'], 0.9, {
    x: 408,
    y: 320,
    ease: Power2.easeInOut
  }, '-=1')

var boxTl = new TimelineMax();
boxTl.set(['.pointer', '.dragIcon'], {
    x: 408,
    y: 320
  })
  .set('.dragIcon', {
    autoAlpha: 0
  })
  .to('.pointerHit', 1, {
    attr: {
      r: 40
    },
    strokeWidth: 0,
    alpha: 0
  })
  .from('.mainHeart', 1.2, {
    y: 200,
    scaleY:-1, 
    transformOrigin: '50% 50%',
    ease: Elastic.easeOut.config(0.7, 0.45)
  }, '-=0.2')
  .from('.mainHeart',0.1, {
 fill:'#450920',
   ease:Expo.easeIn
  }, '-=1.2')
.from('.qMark', 1.2, {
 fill:'#450920',
 transformOrigin:'50% 50%',
 ease:Elastic.easeOut.config(0.7,0.35)
},'-=1.2')

.to('#speedLines line', 0.1, {
  drawSVG:'40% 100%',
  ease:Linear.easeNone
},'-=1')
.to('#speedLines line', 0.23, {
  drawSVG:'0% 0%'
},'-=0.9')


  .to('.wholeBox1 .lidR', 1, {
    morphSVG: '.wholeBox1 .lidREnd',
    ease: Elastic.easeOut.config(0.8, 0.75)
  }, '-=1.8')

.to('.wholeBox1 .lidL', 1, {
  morphSVG: {
    shape: '.wholeBox1 .lidLEnd',
    shapeIndex: 5
  },
  ease: Elastic.easeOut.config(0.8, 0.75)
}, '-=1.78')

.to(['.pointer', '.dragIcon'], 0.5, {
    x: '+=100',
    y: '-=70',
    ease: Power1.easeInOut
  })
  .staggerTo(['.pointer', '.dragIcon'], 0, {
    cycle: {
      autoAlpha: [0, 1]
    }
  }, 0, '-=0.2')

  .staggerFromTo(starArr, 0.2, {
    alpha:0,
 scale:0
},{
 
 cycle:{
  scale:function(){
   return Math.random()
  }
 },
 alpha:1,
    ease:Sine.easeOut,
    repeat: 5,
    yoyo: true
  },0.1, '-=1.4')

//ScrubGSAPTimeline(mainTl)
mainTl.add(boxTl, 0);
mainTl.add(allBoxesTl);

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
} 