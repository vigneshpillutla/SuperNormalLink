const noBtn = document.querySelector('.no-btn');
const yesBtn = document.querySelector('.yes-btn');
const message = document.querySelector('.message');
const heading = document.querySelector('.card h1');
const img = document.querySelector('.card img');
const buttons = document.querySelector('.buttons');
let yesBtnScale = 1;

const messages = [
    "Are you sure babess?",
    "I'm a great guy pakkaaaa!",
    "Think again bubuuu! 💕",
    "Really? 🥺",
    "But why not?",
    "Give me a chance!",
    "You'll regret this...",
    "Reconsider? 💝",
    "Don't be shy!",
    "I'll treat you right!",
    "Pretty please? 🌹",
    "You know you want to...pretty pwease bubuuuuu! 🙏",
    "Haa bolde bubsss! 😘",
    "Come on! 😊",
    "What if I said please?",
    "I'll take you somewhere nice!",
    "We'd be perfect together!",
    "Don't break my heart 💔",
    "Last chance bubudiiii 🌚",
    "The Yes button is looking pretty good!"
];
let messageIndex = 0;

function moveNoButton() {
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
    
    // Increase yes button size
    yesBtnScale += 0.1;
    yesBtn.style.transform = `scale(${yesBtnScale})`;
    
    // Update message
    message.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
}

// Desktop hover
noBtn.addEventListener('mouseover', moveNoButton);

// Mobile touch
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    moveNoButton();
});

// Yes button clicked
yesBtn.addEventListener('click', () => {
    // Open WhatsApp with pre-filled message
    const whatsappNumber = '+918828459033'; // Replace with your number (country code + number)
    const whatsappMessage = encodeURIComponent("Yes yesssssssss! A hundred times yesss I'll be your valentine bubuuuuu! 💕");
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
    
    // Update the card
    heading.textContent = 'You wont regret this! 💖 I lovee youu sushaaa!!';
    img.src = 'https://media.tenor.com/v1y8i3QG4foAAAAi/white-heart.gif';
    buttons.style.display = 'none';
    message.textContent = '';
});