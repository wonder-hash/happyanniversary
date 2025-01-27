const flashcard = document.getElementById('flashcard');
const flipButton = document.getElementById('flip-button');
const nextButton = document.getElementById('next-button');

const cards = [
  { front: 'Every moment with you feels like poetry in motion.', back: 'Because with you, my heart finds its rhythm.' },
  { front: 'If I could paint the stars, Id color them in your favorite shades.', back: 'But they could never outshine the light in your eyes' },
  { front: 'You are the melody I hum to when silence surrounds me.', back: 'And the harmony that makes my world complete.' },
  { front: 'They say love is like a rose, but you are a whole garden', back: 'Beautiful, vibrant, and endlessly enchanting.' },
  { front: 'The universe may be vast, but you are my everything in it.', back: 'My forever star in an infinite sky.' },
  { front: 'In your smile, I see a thousand sunsets.', back: 'And in your laughter, I find my home.' },
  { front: 'I never believed in fairy tales until I met you.', back: 'Now, every day with you feels like magic.' },
  { front: 'Your love is like the ocean—vast and endless.', back: 'And I am the lucky sailor who found you' },
  { front: 'When I hold your hand, the world disappears.', back: 'Because in that moment, only we exist.' },
  { front: 'Today we celebrate the chapters weve written together— a love story more beautiful than I ever dreamed. Happy Anniversary, my love.', back: "With every beat of my heart, I choose you again and again. Will you be my forever Valentine?"}
];

let currentCardIndex = 0;
let isFlipped = false;

function updateCard() {
    // Only handle flip here, not the slide/fade
    flashcard.style.transition = 'transform 0.6s ease-out';
    flashcard.style.transform = 'rotateY(90deg)';
    
    setTimeout(() => {
      flashcard.textContent = isFlipped
        ? cards[currentCardIndex].back
        : cards[currentCardIndex].front;
      flashcard.style.transition = 'transform 0.6s ease-out';
      flashcard.style.transform = 'rotateY(0deg)';
    }, 300); // Match the flip duration
  }
  
  flipButton.addEventListener('click', () => {
    isFlipped = !isFlipped;
    updateCard();
  });
  
  nextButton.addEventListener('click', () => {
    if (currentCardIndex < cards.length - 1) {
      currentCardIndex++;
      isFlipped = false;
      
      // Slide current card out
      flashcard.style.transition = 'transform 0.6s ease-out, opacity 0.6s ease-out';
      flashcard.style.transform = 'translateX(-100%)';
      flashcard.style.opacity = '0';
      
      setTimeout(() => {
        // Update card content for the next card
        flashcard.textContent = cards[currentCardIndex].front;
  
        // Reset position and prepare for fade-in
        flashcard.style.transition = 'none';
        flashcard.style.transform = 'translateX(100%)';
        flashcard.style.opacity = '0';
        
        setTimeout(() => {
          // Fade in the new card
          flashcard.style.transition = 'transform 0.6s ease-out, opacity 0.6s ease-out';
          flashcard.style.transform = 'translateX(0)';
          flashcard.style.opacity = '1';
        }, 50); // Slight delay for smoother transition
  
      }, 600); // Match the slide-out duration
  
      if (currentCardIndex === cards.length - 1) {
        nextButton.textContent = 'Yes';
      }
    } else {
      window.location.href = 'loversPage.html';
    }
  });
  
  // Initialize the first card
  updateCard();