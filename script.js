const qs = (selector) => document.querySelector(selector);
const question = qs(".question");
const gif = qs(".gif");
const [yesBtn, noBtn] = [".yes-btn", ".no-btn"].map(qs);
const csText = qs('.csText');



const csTextOptions = [
  'You are my favorite function in the program of life 🥰',
  'My heart overflows with love for you, no stack error 🐣 ',
  'You decrypt my heart every time you smile 🌝',
  'In my world, you are the constant, not a variable ❤️‍🔥',
];

const gifOptions = [
  'https://media.giphy.com/media/FTGah7Mx3ss04PcasF/giphy.gif',
  'https://media1.giphy.com/media/xWTNfEu9uAXBnFQIa5/giphy.gif',
  'https://media4.giphy.com/media/8mkrPlsvEUx6nBzCfA/giphy.gif',
  'https://media3.giphy.com/media/qlAPmI5m92Lo1cial8/giphy.gif',
  'https://media0.giphy.com/media/In5Ij0yP0uBEfwU3qF/giphy.gif',
  'https://media1.giphy.com/media/cB7j5PLO5ZTRCp1HHA/giphy.gif',
  'https://media2.giphy.com/media/VKUSdDIW7vXWwTFCtf/giphy.gif',
  'https://media2.giphy.com/media/nnUWekggiAlEtxxAze/giphy.gif',
  'https://media2.giphy.com/media/nnUWekggiAlEtxxAze/giphy.gif',
  'https://media2.giphy.com/media/nnUWekggiAlEtxxAze/giphy.gif',
  'https://media0.giphy.com/media/9pDxWePiOBexqOs72z/giphy.gif',
  'https://media0.giphy.com/media/0kDdAFAELmvvFNUKim/giphy.gif',
  'https://media2.giphy.com/media/8MzUOyu70W38yvFbLQ/giphy.gif',
  'https://media4.giphy.com/media/Z9qYgEF78Z64qBoMQp/giphy.gif',
  'https://media4.giphy.com/media/yNvmkSbnamOXEfnYxY/giphy.gif',
  'https://media4.giphy.com/media/bxFtVkOWFzSD7RKon5/giphy.gif',
  'https://media0.giphy.com/media/vQ8ubcro4CJV6nhIwl/giphy.gif',
  'https://media0.giphy.com/media/0kDdAFAELmvvFNUKim/giphy.gif',
  'https://media4.giphy.com/media/lNLndq2s1Tx4W66fiR/giphy.gif',
  'https://media1.giphy.com/media/ouPBYxIbnLkc5yigZg/giphy.gif',
  'https://media0.giphy.com/media/cbOun7SXza6TpmyUTZ/giphy.gif',
  'https://media2.giphy.com/media/fHGl1MDMNkO6fOaFDF/giphy.gif'
];


function playAudio() {
  var audio = document.getElementById('myAudio');
  audio.play();
}

const setRandomCsText = () => {
  const randomIndex = Math.floor(Math.random() * csTextOptions.length);
  csText.textContent = csTextOptions[randomIndex];
};

const setRandomGif = () => {
  const randomIndex = Math.floor(Math.random() * gifOptions.length);
  gif.src = gifOptions[randomIndex];
};

setRandomCsText();
setRandomGif();






const handleYesClick = () => {
  question.innerHTML = "Yeahhhhhhhhhhh! See you tomorrow!!";
  gif.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";

  // Remove the 'mouseover' event listener from noBtn
  noBtn.removeEventListener("mouseover", handleNoMouseOver);

  // Remove the noBtn from the DOM
  noBtn.remove();




  // Function to set a random GIF to the gif element
 

//   // Define predefined romantic date ideas
  const dateIdeas = [
    "Cook a romantic dinner together",
    "let's just take a walk",
    "Plan a movie night with your favorite films",
    "Visit a local art gallery",
    "Visit a local museum",
    "Have a DIY spa day at ащага",
    "Have a themed dinner night at ащага",
    "Visit a local chocolate or dessert shop",
    "Plan a game night with board games or card games",
    "Visit a local bar",
    // Add more date ideas as needed
  ];

  // Create and style a new button for Let's Go!
  const letsGoBtn = document.createElement("button");
  letsGoBtn.textContent = "Let's Go!";
  letsGoBtn.classList.add("letsgo-btn"); // You can add a class for styling if needed
  letsGoBtn.style.position = "absolute";

  // Adjust the left position based on screen width
  if (window.innerWidth <= 800) {
    letsGoBtn.style.left = "95%";
  } else {
    letsGoBtn.style.left = "63%";
  }

  letsGoBtn.style.transform = "translate(-50%, -50%)";
  letsGoBtn.style.width = "200px"; // Adjust the width as needed

  // Add a click event listener to prompt the user with random romantic date ideas
  letsGoBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * dateIdeas.length);
    const selectedDateIdea = dateIdeas[randomIndex];

    alert(`How about this romantic date idea: ${selectedDateIdea}`);
  });

  // Replace yesBtn with the new letsGoBtn
  yesBtn.replaceWith(letsGoBtn);
};

const handleNoMouseOver = () => {
  const { width, height } = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - width;
  const maxY = window.innerHeight - height;

  noBtn.style.left = `${Math.floor(Math.random() * maxX)}px`;
  noBtn.style.top = `${Math.floor(Math.random() * maxY)}px`;
};

yesBtn.addEventListener("click", handleYesClick);
noBtn.addEventListener("mouseover", handleNoMouseOver);


