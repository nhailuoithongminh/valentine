const egg = document.getElementById("egg-overall")
const avocado = document.getElementById("avocado-overall")

const eggTl = new TimelineMax({repeat: -1})

//eggTl.fromTo(egg, 1, {transformOrigin: "50% 100%", rotation: 4}, {rotation: 0})
//TODO: rotation, shade animation, eyes blinking
/* Text animation */
const tl = new TimelineMax();
const splitText = new SplitText("#text", {type: "words, chars"});
const chars = splitText.chars;
tl.staggerFrom(chars, 0.08, {display: "none", ease: Power1.easeIn}, 0.08, "+=0.1")

/* Heart animation */
const heartTl = new TimelineMax({repeat: -1});
heartTl.to("#Heart", 1.5, {y: -50, x: 10, alpha: 0})