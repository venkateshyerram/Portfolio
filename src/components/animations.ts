export const scrambleText = (finalText: string, callback: (text: string) => void) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&*!0123456789';
  const finalLength = finalText.length;
  let iterations = 0;
  
  // Start with empty string
  callback('');
  
  const interval = setInterval(() => {
    let scrambledText = '';
    const currentLength = Math.floor(iterations / 3);
    
    // Build the text gradually
    for (let i = 0; i < finalLength; i++) {
      if (i < currentLength) {
        // Show final character for positions we've reached
        scrambledText += finalText[i];
      } else if (i === currentLength) {
        // Show random character for current position
        scrambledText += characters[Math.floor(Math.random() * characters.length)];
      } else {
        // Leave future positions empty
        scrambledText += ' ';
      }
    }
    
    callback(scrambledText);
    iterations++;
    
    if (iterations >= finalLength * 3) {
      clearInterval(interval);
      callback(finalText);
    }
  }, 50);
};

export const animateNumber = (
  start: number,
  end: number,
  duration: number,
  callback: (value: number) => void
) => {
  const startTime = performance.now();
  
  const animate = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Easing function for smooth animation
    const easeOutQuart = 1 - Math.pow(1 - progress, 4);
    const current = Math.floor(start + (end - start) * easeOutQuart);
    
    callback(current);
    
    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      callback(end);
    }
  };
  
  requestAnimationFrame(animate);
}; 