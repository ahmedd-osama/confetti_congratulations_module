
// setting the confettiful element

const Confettiful = function(el, duration) {
  this.el = el;
  this.containerEl = null;
  this.duration = duration
  this.confettiFrequency = 3;
  this.confettiColors = ['#EF2964', '#00C09D', '#2D87B0', '#48485E','#EFFF1D']; // color variations amoung individual confettis
  this.confettiAnimations = ['slow', 'medium', 'fast']; // animation variations (take a lokk at the CSS file)
  
  this._setupElements(); // calling the elements creatioin function
  this._renderConfetti(this.duration); // calling the elements rendering function function
};

// Elemens' setup function

Confettiful.prototype._setupElements = function() {
  const containerEl = document.createElement('div');
  const elPosition = this.el.style.position;
  
  // to insure the position is either absolute or relative in order for the final effect to work properly
  if (elPosition !== 'relative' || elPosition !== 'absolute') {
    this.el.style.position = 'relative';
  }
  
  containerEl.classList.add('confetti-container'); // adding the class of the confetti container ( take a lokk at the CSS file)
  
  this.el.appendChild(containerEl);
  
  this.containerEl = containerEl;
};

// Elements' rendering function
Confettiful.prototype._renderConfetti = function(duration = 3000) {
  let timeStart = Date.now() // calculation of the time of starting the effect
  this.confettiInterval = setInterval(() => {
    const confettiEl = document.createElement('div');
    const confettiSize = (Math.floor(Math.random() * 3) + 10) + 'px'; //random selection of size
    const confettiBackground = this.confettiColors[Math.floor(Math.random() * this.confettiColors.length)];//random selection of background color
    const confettiLeft = (Math.floor(Math.random() * this.el.offsetWidth)) + 'px'; //random selection of location (offset)
    const confettiAnimation = this.confettiAnimations[Math.floor(Math.random() * this.confettiAnimations.length)]; //random selection of animation (slow, medium, fast)
    
    confettiEl.classList.add('confetti', 'confetti--animation-' + confettiAnimation);
    confettiEl.style.left = confettiLeft;
    confettiEl.style.width = confettiSize;
    confettiEl.style.height = confettiSize;
    confettiEl.style.backgroundColor = confettiBackground;

    this.containerEl.appendChild(confettiEl);
    // termination of the effect after 3000 ms (Optional) 
    if(Date.now() - timeStart > duration){
      clearInterval(this.confettiInterval) // clearing the interval
      let confettiContainer = document.querySelectorAll(".confetti-container")
      confettiContainer.forEach((container)=> container.remove())
    }
    
  }, 20); 
  // The interval repeatition time is 20ms (optional).
  // Every time it runs it generates a new individual confetti with random color, size and animation
};

// you can add a condition or a function to start new confettiful effect at the spacified Container 
// you can call the new effect just by using the startConfetti(selector, duration) funcion with the selector of the contianer and the desired duration of the effect inside it as showen below
function startConfetti(Selector = document.body, duration){
  window.confettiful = new Confettiful(Selector, duration);

}

// the button created on the HTML page is assigned to excute startConfetti() on click
// Go try it and have fun


//-----------------------------------------------------------------
// Made by Ahmed Osama
// Github: @ahmedd-osama
// for business inquires only, please send an email at ahmed.osaama10@gmail.com