
// Define words and save to localstorage
let words = JSON.parse(localStorage.getItem("words")) || [
    { id: 0, tr: "İnanılmaz", eng: "Incredible" },
    { id: 1, tr: "Abartmak", eng: "Exaggerate" },
    { id: 2, tr: "Akıllı", eng: "Intelligent" },
    { id: 3, tr: "Alelade", eng: "Ordinary" },
    { id: 4, tr: "Alışkanlık", eng: "Habit" },
    { id: 5, tr: "Alışveriş", eng: "Shopping" },
    { id: 6, tr: "Ani", eng: "Sudden" },
    { id: 7, tr: "Hediye", eng: "Gift" },
    { id: 8, tr: "Basit", eng: "Simple" },
    { id: 9, tr: "Becerikli", eng: "Skillful" },
    { id: 10, tr: "Bıçak", eng: "Knife" },
    { id: 11, tr: "Bilet", eng: "Ticket" },
    { id: 12, tr: "Birçok", eng: "Many" },
    { id: 13, tr: "Birdenbire", eng: "Suddenly" },
    { id: 14, tr: "Cennet", eng: "Heaven" },
    { id: 15, tr: "Cimri", eng: "Stingy" },
    { id: 16, tr: "Ciddi", eng: "Serious" },
    { id: 17, tr: "Çarşaf", eng: "Sheet" },
    { id: 18, tr: "Çatı", eng: "Roof" },
    { id: 19, tr: "Çatlak", eng: "Crack" },
    { id: 20, tr: "Çıkış", eng: "Exit" },
    { id: 21, tr: "Çene", eng: "Chin" },
    { id: 22, tr: "Çığlık", eng: "Scream" },
    { id: 23, tr: "Çerçeve", eng: "Frame" },
    { id: 24, tr: "Daima", eng: "Always" },
    { id: 25, tr: "Dakik", eng: "Punctual" },
    { id: 26, tr: "Davet", eng: "Invitation" },
    { id: 27, tr: "Deneyim", eng: "Experience" },
    { id: 28, tr: "Derece", eng: "Degree" },
    { id: 29, tr: "Destan", eng: "Epic" },
    { id: 30, tr: "Dikkat", eng: "Attention" },
    { id: 31, tr: "Ebeveyn", eng: "Parent" },
    { id: 32, tr: "Eğitim", eng: "Education" },
    { id: 33, tr: "Elverişli", eng: "Convenient" },
    { id: 34, tr: "Emin", eng: "Confident" },
    { id: 35, tr: "Empati", eng: "Empathy" },
    { id: 36, tr: "Endişe", eng: "Anxiety" },
    { id: 37, tr: "Eşdeğer", eng: "Equivalent" },
    { id: 38, tr: "Etek", eng: "Skirt" },
    { id: 39, tr: "Etraf", eng: "Around" },
    { id: 40, tr: "Evham", eng: "Anxiety" },
    { id: 41, tr: "Evrim", eng: "Evolution" },
    { id: 42, tr: "Etkinlik", eng: "Activity" },
    { id: 43, tr: "Eşsiz", eng: "Unique" },
    { id: 44, tr: "Fırsat", eng: "Opportunity" },
    { id: 45, tr: "Ferah", eng: "Fresh" },
    { id: 46, tr: "Gayret", eng: "Effort" },
    { id: 47, tr: "Gölge", eng: "Shadow" },
    { id: 48, tr: "Gömlek", eng: "Shirt" },
    { id: 49, tr: "Gözlük", eng: "Glasses" },
    { id: 50, tr: "Gözyaşı", eng: "Tear" },
    { id: 51, tr: "Gümüş", eng: "Silver" },
    { id: 52, tr: "Güncellemek", eng: "Update" },
    { id: 53, tr: "Gündüz", eng: "Daytime" },
    { id: 54, tr: "Haklı", eng: "Right" },
    { id: 55, tr: "Hayal", eng: "Dream" },
    { id: 56, tr: "Harika", eng: "Wonderful" },
    { id: 57, tr: "Hırsız", eng: "Thief" },
    { id: 58, tr: "Israr", eng: "Insistence" },
    { id: 59, tr: "İltifat", eng: "Compliment" },
    { id: 60, tr: "İhtiyaç", eng: "Need" },
    { id: 61, tr: "Kaba", eng: "Rough" },
    { id: 62, tr: "Kahraman", eng: "Hero" },
    { id: 63, tr: "Kalite", eng: "Quality" },
    { id: 64, tr: "Kanape", eng: "Sofa" },
    { id: 65, tr: "Kasaba", eng: "Town" },
    { id: 66, tr: "Kavanoz", eng: "Jar" },
    { id: 67, tr: "Kaybolmak", eng: "Lost" },
    { id: 68, tr: "Kemik", eng: "Bone" },
    { id: 69, tr: "Hafıza", eng: "Memory" },
    { id: 70, tr: "lokanta", eng: "Restaurant" },
    { id: 71, tr: "Nadiren", eng: "Rarely" },
    { id: 72, tr: "Neden", eng: "Why" },
    { id: 73, tr: "Oda", eng: "Room" },
    { id: 74, tr: "Sabırsız", eng: "Impatient" },
    { id: 75, tr: "Sakin", eng: "Calm" },
    { id: 76, tr: "Sarhoş", eng: "Drunk" },
    { id: 77, tr: "Sevinçli", eng: "Joyful" },
    { id: 78, tr: "Şaşkın", eng: "Amazed" },
    { id: 79, tr: "Şüpheci", eng: "Skeptical" }
  
  ];
  // Creating the main floor that we will add to the page
  const canvas = document.createElement("div");
  canvas.classList.add("canvas");
  canvas.id = "clouds";
  document.body.append(canvas);
  
  //Creating divs to add contents
  const mainContainer = document.createElement("div");
  mainContainer.classList.add("mainContainer");
  canvas.appendChild(mainContainer);
  
  // Creating divs to add contents
  const container = document.createElement("div");
  container.classList.add("container");
  mainContainer.appendChild(container);
  
  // Creating divs to add contents
  const contentArea = document.createElement("div");
  contentArea.classList.add("contentArea");
  mainContainer.appendChild(contentArea);
  
  // Creating the divi to add words to
  const getWordContainer = document.createElement("div");
  getWordContainer.classList.add("getWordContainer");
  contentArea.appendChild(getWordContainer);
  
  // Button to get words
  const getWordBtn = document.createElement("button");
  getWordBtn.classList.add("getWordBtn");
  getWordBtn.innerHTML = "Get Word";
  getWordContainer.appendChild(getWordBtn);
  
  // Adding style properties to the body by defining them
  const styles = document.createElement("style");
  styles.innerHTML = `
  
    body {
      font-family: 'Roboto', sans-serif;
      background: linear-gradient(to bottom, #9fdaf580, #5bbae4);
      background-position: bottom;
      background-repeat: repeat-x;
      height: 100vh;
      color: rgba(51,51,51,0.74);
      padding: 0;
      margin: 0;
    }
  
    .mainContainer {
      position: absolute;
      width: inherit;
      z-index: 1000;
      margin-bottom: 30px;
    }
  
    .getWordContainer {
      display: grid;
      justify-content: center;
      align-items: center;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      padding: 30px 70px;
      max-width: 28vw;
      margin: 0 auto;
      border-radius: 12px;
      font-size: 18px;
      line-height: 35px;
      background-color: #fbf6f6;
    }
  
    .infoContainer {
      justify-content: center;
      align-items: center;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      padding: 30px 70px;
      max-width: 28vw;
      margin: 0 auto;
      border-radius: 12px;
      font-size: 18px;
      line-height: 35px;
      background-color: #fbf6f6;
    }
  
    .infoContainer>ul {
      width: 100%;
      list-style-type: disc;
    }
  
    .inputBox {
      display: flex;
    }
  
    .menuBar {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px 80px;
      max-width: 27vw;
      margin: 0 auto 30px auto;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      margin-bottom: 30px;
      justify-content: space-between;
      background-color: #fbf6f6;
      margin: 50px auto;
      border-radius: 12px;
    }
  
    ul {
      list-style-type: none;
      padding-inline-start: 0;
      width: 350px;
      margin-top: 35px;
      border-top: 1.5px solid #bebbbb;
      padding-top: 20px;
    }
  
    .listItem, #answerResult {
      position: relative;
      font-size: 18px;
      line-height: 24px;
      display: block;
      margin-bottom: 15px;
      padding: 8px 12px;
    }
  
    .listItem:hover {
      background-color: #e5e5e5;
    }
  
    a {
      position: absolute;
      right: 10px;
    }
  
    span {
      cursor: pointer;
      font-size: 28px !important;
      color: #00b1eb;;
    }
  
    button {
      height: fit-content;
      width: fit-content;
      padding: 10px 24px;
      font-size: 20px;
      color: white;
      border: none;
      border-radius: 7px;
      cursor: pointer;
      background: linear-gradient(to bottom, #68cad7, #3789c9);
    }
  
    .checkAnswerBtn {
      padding: 5.6px 21px;
    }
  
    .menuItemBox {
      text-align: center;
      width: 95px;
      padding: 10px;
      cursor: pointer;
      margin: auto 20px;
    }
  
    .menuItemBox:hover {
      box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
      border-radius: 4px;
    }
  
    .menuItemBox>span {
      font-size: 33px;
    }
  
    .menuItemBox>p {
      font-size: 17px;
      margin-block-end: 0;
    }
  
    .challengeBtn {
      margin: 0 auto;
    }
  
    .wordAndSound {
      display: flex;
      justify-content: space-between;
    }
  
    .sound {
      font-size: 31px;
      padding-top: 17px;
    }
  
    #myInput {
      height: 31.5px;
      padding-left: 8px;
      font-size: 19px;
      border-radius: 7px 0 0 7px;
      border: 1px solid gray;
      width: auto;
    }
  
    input:focus {
      border: none !important;
    }
    
    .checkAnswerBtn {
      border-radius: 0 7px 7px 0;
      border: 1px solid gray;
    }
  
    .myWordsListItem {
      width: 50%;
      display: inline-block;
    }
  
    h1 {
      font-size: 24px;
      text-align: center;
      border-bottom: 1.5px solid #bebbbb;
      padding-bottom: 20px;
      color: #00b1eb;
    }
  
    .engMeaning {
      position: absolute;
      left: -107px;
      bottom: -5px;
      color: rgba(51,51,51,0.74);
    }
  
    .animationBox {
      position:absolute; 
      width:230px;
    }
  
    #clouds div img{ 
      display:block; 
      margin-left: auto;
      margin-right: auto;
    }
  
    .Blittle img{
       width:42px; 
       float:left;
    }
  
    .BlittleUP img{
       width:51px; 
       float:right
    }
  
    .Bmedium img{ 
      width:90px; 
      float:left
    }
  
    .BmediumUP img{ 
      width:120px; 
      float:right
    }
  
    .BmediumUPUP img{ 
      width:140px
    }
  
    .Bbig img{ 
      width:280px; 
      float:right
    }
  
    .Blittle { 
      animation: moveclouds 14s infinite linear forwards;
      -webkit-animation: moveclouds 14s infinite linear forwards;
      -moz-animation: moveclouds 14s infinite linear forwards;
      -o-animation: moveclouds 14s infinite linear forwards;
    }
    .BlittleUP  { 
      animation: moveclouds 16s infinite linear forwards; 
      -webkit-animation: moveclouds 16s infinite linear forwards;
      -moz-animation: moveclouds 16s infinite linear forwards;
      -o-animation: moveclouds 16s infinite linear forwards;
    }
    .Bmedium { 
      animation: moveclouds 17s infinite linear forwards;
      -webkit-animation: moveclouds 17s infinite linear forwards;
      -moz-animation: moveclouds 17s infinite linear forwards;
      -o-animation: moveclouds 17s infinite linear forwards;
    }
    .BmediumUP { 
      animation: moveclouds 18s infinite linear forwards;
      -webkit-animation: moveclouds 18s infinite linear forwards;
      -moz-animation: moveclouds 18s infinite linear forwards;
      -o-animation: moveclouds 18s infinite linear forwards;
    }
    .Bbig { animation: moveclouds 22s infinite linear forwards;
      -webkit-animation: moveclouds 22s infinite linear forwards;
      -moz-animation: moveclouds 22s infinite linear forwards;
      -o-animation: moveclouds 22s infinite linear forwards;
    }
  
    .BC-1 {left:5%; }
    .BC-2 {left:14.5%;}
    .BC-3 {left:21%;}
    .BC-6 {left:62.5%; }
    .BC-7 {left:75%;}
    .BC-8 {left:87.5%; }
  
    .BC-1 img{ margin-top:500px}
    .BC-2 img{margin-top:100px}
    .BC-3 img{ margin-top:300px}
    .BC-6 img{ margin-top:0px}
    .BC-7 img{ margin-top:700px}
    .BC-8 img{ margin-top:100px}
    .Blittle.BC-8 img{margin-top:350px}
  
    @keyframes moveclouds { 
      0% {  transform: translate(0px, 700px);}
      100% { transform: translate(0px, -1200px);}
    }
  
    @-webkit-keyframes moveclouds { 
      0% {  -webkit-transform: translate(0px, 700px);}
      100% { -webkit-transform: translate(0px, -1200px);}
    }
  
    @-moz-keyframes moveclouds { 
      0% {  -moz-transform: translate(0px, 700px);}
      100% { -moz-transform: translate(0px, -1200px);}
    }
    @-o-keyframes moveclouds { 
      0% {  -o-transform: translate(0px, 700px);}
      100% { -o-transform: translate(0px, -1200px);}
    }
  
    #clouds { 
      top:50%;  
      height: 100%;   
      -webkit-transform: translate(0%, -50%);   
      -moz-transform: translate(0%, -50%);   
      -ms-transform: translate(0%, -50%);   
      -o-transform: translate(0%, -50%);   
      transform: translate(0%, -50%);     
      width: 100%;
      overflow-x: scroll;
      position: relative;
      margin-top: 0px;
      overflow-x: hidden;
    }
    @media only screen and (max-width: 1080px) {
      
      .menuBar, .getWordContainer {
        max-width: 55vw;
      }
  
      .menuItemBox {
        width: 30%;
      }
    }
  
    @media only screen and (max-width: 630px) {
      
      .menuBar {
        max-width: 65vw;
      }
  
      .getWordContainer {
        max-width: 65vw;
      }
  
      .infoContainer {
        max-width: 77vw;
        padding: 10px 40px;
      }
    }
  
    @media only screen and (max-width: 520px) {
  
      .myWordsListItem {
        font-size: 16px;
      }
    }
  
    @media only screen and (max-width: 430px) {
      
      .menuBar {
        max-width: 80vw;
        padding: 20px 10px;
      }
  
      .getWordContainer {
        max-width: 80vw;
        padding: 20px 10px;
      }
  
      .menuBar{
       margin: 15px auto;
        padding: 10px;
      }
  
      .menuItemBox {
        padding: 6px;
      }
  
      .menuItemBox>p {
        font-size: 16px;
        margin-block-start: 6px;
      }
    
      ul {
        margin-top: 20px;
        width: 70vw;
      }
  
      button {
        font-size: 16px;
      }
  
      span {
        font-size: 26px !important;
      }
  
      .listItem {
        font-size: 16px;
        line-height: 18px;
      }
  
      #answerResult {
        font-size: 16px;
        line-height: 18px;
      }
  
      #myInput {
        font-size: 17px;
        height: 26px;
      }
  
      .checkAnswerBtn {
        padding: 5.6px 9px;
      }
  
      .myWordsListItem {
        width: 100%;
        padding-left: 20px;
      }
  
      .infoContainer {
        max-width: 70vw;
        padding: 12px 29px;
        font-size: 15px;
        line-height: 28px;
      }
  
      .infoContainer > ul {
        border-top: none;
        margin-top: 0px;
        padding-top: 5px;
      }
  
    }
  
    @media only screen and (max-width: 385px) {
      
      .menuItemBox {
        margin: auto 0px;
        padding: auto 5px;
      }
  
      .menuItemBox>p {
        font-size: 13px;
      }
    }
  `;
  document.head.appendChild(styles);
  
  // add event to button in get word
  getWordBtn.addEventListener("click", () => {
    if (words.length < 5) {
      alert("Congratulations! You have completed all the words in the library.");
    } else {
      getWordContainer.style.display = "none";
      displayWords();
    }
  });
  
  // If there are selected words saved in local storage, use them
  let selectedWords = JSON.parse(localStorage.getItem("selectedWords")) || [];
  
  function displayWords() {
  
    // create a div for the challenge section
    let challengeBox = document.createElement("div");
    contentArea.appendChild(challengeBox);
    challengeBox.classList.add("getWordContainer");
  
    // create a button for start to challenge
    const challengeBtn = document.createElement("button");
    challengeBtn.classList.add("challengeBtn");
    challengeBox.appendChild(challengeBtn);
    challengeBtn.innerHTML = "Start To Challenge!";
  
    // adding event to the button for start to challenge
    challengeBtn.addEventListener("click", () => {
      challengeBox.style.display = "none";
      startToChallenge();
    })
  
    // If the number of selected words is less than 5, choose new words
    if (selectedWords.length < 5) {
      selectedWords = getRandomWords();
      localStorage.setItem("selectedWords", JSON.stringify(selectedWords));
    }
  
    // Retrieve myWords set from localStorage
    let myWords = JSON.parse(localStorage.getItem("myWords")) || [];
  
    // Remove myWords from hiddenWords array
    let hiddenWords = [...selectedWords].filter((word) => !myWords.some((myWord) => myWord.id === word.id));
  
    // Print the selected words on the screen
    const ul = document.createElement("ul");
    ul.classList.add("wordList");
    selectedWords.forEach((word) => {
  
      const li = document.createElement("li");
      li.classList.add("listItem");
      li.innerText = word.tr.charAt(0).toUpperCase() + word.tr.slice(1);
      // creating a hint icon for the Turkish meaning of words
      const helpSpan = document.createElement("a");
      helpSpan.title = word.eng;
      helpSpan.classList.add("helpSpan");
      const helpIcon = document.createElement("span");
      helpIcon.classList.add("material-symbols-outlined");
      helpIcon.innerText = "help";
      helpSpan.appendChild(helpIcon);
      li.appendChild(helpSpan);
      ul.appendChild(li);
  
      // get hint by touch or click event
      helpSpan.addEventListener("click", function () {
        const p = document.createElement("p");
        p.classList.add("engMeaning");
        p.innerText = word.eng;
        this.insertBefore(p, this.firstChild);
      });
  
      helpSpan.addEventListener("touchstart", function () {
        const p = document.createElement("p");
        p.classList.add("engMeaning");
        p.innerText = word.eng;
        this.insertBefore(p, this.firstChild);
      });
    });
    let wordBox = document.createElement("div");
    challengeBox.appendChild(wordBox);
    wordBox.appendChild(ul);
  
  }
  
  function getRandomWords() {
  
    // Choose 5 random words from the words array
    const selectedWords = [];
    while (selectedWords.length < 5) {
      const randomIndex = Math.floor(Math.random() * words.length);
      const randomWord = words[randomIndex];
      if (!selectedWords.find((word) => word.id === randomWord.id)) {
        selectedWords.push(randomWord);
      }
    };
    return selectedWords;
  };
  
  getRandomWords();
  
  let hiddenWords = [...selectedWords]; // copy items
  
  // take if mywords exists, assign as blank if not
  let myWords = JSON.parse(localStorage.getItem("myWords")) || [];
  
  const randomIndex = Math.floor(Math.random() * hiddenWords.length);
  let selectedWord = hiddenWords[randomIndex];
  hiddenWords.splice(randomIndex, 1);
  
  function startToChallenge() {
  
    // print the content of randomly selected li element on the page
    const checkAnswerBox = document.createElement("div");
    checkAnswerBox.classList.add("getWordContainer");
    contentArea.appendChild(checkAnswerBox);
  
    const wordAndSound = document.createElement("div");
    wordAndSound.classList.add("wordAndSound");
    checkAnswerBox.appendChild(wordAndSound);
  
    const element = document.createElement("p");
    element.classList.add("listItem");
  
    // add icon to hear the pronunciation of the given word
    const soundIcon = document.createElement("span");
    soundIcon.className = "material-symbols-outlined sound";
    soundIcon.innerHTML = "volume_up";
    wordAndSound.appendChild(element);
    wordAndSound.appendChild(soundIcon);
  
    // add event to sound icon 
    soundIcon.addEventListener("click", speakText);
  
    function speakText() {
      var text = document.querySelector(".wordAndSound p").textContent;
      if ('speechSynthesis' in window) {
        var utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'tr-TR';
        utterance.rate = 0.8;
        speechSynthesis.speak(utterance);
      }
    }
  
    const inputBox = document.createElement("div");
    inputBox.classList.add("inputBox");
    checkAnswerBox.appendChild(inputBox);
  
    // create input
    let input = document.createElement("input");
    input.type = "text";
    input.id = "myInput";
    inputBox.appendChild(input);
  
    // create check button
    const checkAnswerBtn = document.createElement("button");
    checkAnswerBtn.classList.add("checkAnswerBtn");
    checkAnswerBtn.innerHTML = "Check!";
    inputBox.appendChild(checkAnswerBtn);
  
    // give an enter button click event
    document.addEventListener("keydown", function (event) {
      if (event.keyCode === 13) {
        checkAnswerBtn.click();
      }
    });
  
    // add function to check button
    checkAnswerBtn.addEventListener("click", () => {
  
      let result = document.createElement("p");
      result.id = "answerResult";
      checkAnswerBox.appendChild(result);
  
      let userInput = document.getElementById("myInput").value.trim().toLowerCase();
  
      // convert user entered answer to lowercase and remove spaces
      if (userInput === "") {
        result.remove();
        return;
      }
  
      // Compare user entered answer with actual value
      if (userInput === selectedWord.eng.trim().toLowerCase()) {
        if (result.textContent === "") {
          input.value = "";
          result.textContent = "Correct.";
        } else {
          input.value = "";
          result.textContent = "";
          result.textContent = "Correct";
        };
  
        myWords.push(selectedWord);
        hiddenWords = hiddenWords.filter((word) => word.id !== selectedWord.id);
  
        // Store myWords set in localStorage
        localStorage.setItem("myWords", JSON.stringify(myWords));
  
        setTimeout(() => {
          // If there are no hidden words left
          if (hiddenWords.length === 0) {
            alert("Congratulations, you have completed the challenge!");
            location.reload();
            return;
          }
  
          const randomIndex = Math.floor(Math.random() * hiddenWords.length);
          selectedWord = hiddenWords[randomIndex];
          document.querySelector(".getWordContainer p").textContent = selectedWord.tr;
          hiddenWords.splice(randomIndex, 1);
        }, 1000);
  
        // Comparing and deleting elements
        myWords.forEach(function (value) {
          words = words.filter(function (item) {
            return item.id !== value.id;
          });
  
        });
  
        // Saving updated data to localStorage
        localStorage.setItem("words", JSON.stringify(words));
  
        // List of deleted elements
        console.log(words);
  
      } else if (userInput === "") {
        return; // It is returned in such a way that when the user clicks the button or enter without typing anything, it does not produce anything.
      } else {
        // Other conditions will continue.
        if (result.textContent === "") {
          input.value = "";
          result.textContent = "Incorrect.";
        } else {
          input.value = "";
          result.textContent = "";
          result.textContent = "Incorrect";
        }
      }
  
      // Remove the word from other arrays if it is in them
      selectedWords = selectedWords.filter((word) => word.id !== selectedWord.id);
      localStorage.setItem("selectedWords", JSON.stringify(selectedWords));
      hiddenWords = hiddenWords.filter((word) => word.id !== selectedWord.id);
  
      setTimeout(() => {
        result.remove();
      }, 1000);
  
    });
  
    // Check if selectedWord exists
    if (selectedWord) {
      // Set the challenge text to the first letter of the word in uppercase, followed by the rest of the word
      element.innerHTML = selectedWord.tr.charAt(0).toUpperCase() + selectedWord.tr.slice(1);
    }
    
    if(element.innerHTML === ""){
      location.reload();
    }
  
  }
  
  // cretae the menu area
  const menuBar = document.createElement("div");
  menuBar.classList.add("menuBar");
  container.appendChild(menuBar);
  
  // home icon area
  const homeBtnBox = document.createElement("div");
  homeBtnBox.classList.add("menuItemBox");
  menuBar.appendChild(homeBtnBox);
  homeBtnBox.style.borderBottom = "2px solid #00b1eb";
  
  let homeIcon = document.createElement("span");
  homeIcon.textContent = "home";
  homeIcon.classList.add("material-symbols-outlined");
  homeBtnBox.appendChild(homeIcon);
  
  let homeBtnTitle = document.createElement("p");
  homeBtnTitle.innerHTML = "Home";
  homeBtnBox.appendChild(homeBtnTitle);
  
  homeBtnBox.addEventListener("click", () => {
    wordArea.style.display = "none";
    contentArea.style.display = "block";
  
    wordBtnBox.style.borderBottom = "none";
    myInfoContainer.style.display = "none";
    homeBtnBox.style.borderBottom = "2px solid #00b1eb";
    infoBtnBox.style.borderBottom = "none";
  });
  
  // word area
  const wordArea = document.createElement("div");
  wordArea.classList.add("wordArea");
  container.appendChild(wordArea);
  
  const myWordContainer = document.createElement("div");
  myWordContainer.classList.add("getWordContainer");
  wordArea.appendChild(myWordContainer);
  
  // Let's make myWordContainer visible instead of hiding it
  myWordContainer.style.display = "none";
  
  let wordHeader = document.createElement("h1");
  wordHeader.innerHTML = "Words I Learned";
  myWordContainer.appendChild(wordHeader);
  
  const myWordList = JSON.parse(localStorage.getItem("myWords")) || [];
  let wordList = "";
  myWordList.forEach((word) => {
    const item = document.createElement("li");
    item.classList.add("myWordsListItem");
    item.innerText = word.tr + " - " + word.eng;
    myWordContainer.appendChild(item);
    wordList += item.outerHTML;
  });
  
  // words icon area
  const wordBtnBox = document.createElement("div");
  wordBtnBox.classList.add("menuItemBox");
  menuBar.appendChild(wordBtnBox);
  
  let wordIcon = document.createElement("span");
  wordIcon.textContent = "fact_check";
  wordIcon.classList.add("material-symbols-outlined");
  wordBtnBox.appendChild(wordIcon);
  
  let wordBtnTitle = document.createElement("p");
  wordBtnTitle.innerHTML = "Words";
  wordBtnBox.appendChild(wordBtnTitle);
  
  // add event
  wordBtnBox.addEventListener("click", () => {
    myWordContainer.style.display = "block";
    contentArea.style.display = "none";
    myInfoContainer.style.display = "none";
    wordArea.style.display = "block";
  
    myWordContainer.appendChild = wordList;
  
    homeBtnBox.style.borderBottom = "none";
    wordBtnBox.style.borderBottom = "2px solid #00b1eb";
    infoBtnBox.style.borderBottom = "none";
  });
  
  // info area
  const infoBtnBox = document.createElement("div");
  infoBtnBox.classList.add("menuItemBox");
  menuBar.appendChild(infoBtnBox);
  
  let infoIcon = document.createElement("span");
  infoIcon.textContent = "info";
  infoIcon.classList.add("material-symbols-outlined");
  infoBtnBox.appendChild(infoIcon);
  
  let infoBtnTitle = document.createElement("p");
  infoBtnTitle.innerHTML = "Info";
  infoBtnBox.appendChild(infoBtnTitle);
  
  const myInfoContainer = document.createElement("div");
  myInfoContainer.classList.add("infoContainer");
  container.appendChild(myInfoContainer);
  myInfoContainer.style.display = "none";
  
  const infoTextArray = [
    "With the \"Get Words\" button on the home page, you can get 5 words selected from the most used words in Turkish.",
    "You can learn the Turkish equivalent of the word with the help icon on the right side of the given words.",
    "When you are sure that you have learned the words given to you and you can click the \"Start To Challenge\" button.",
    "You will be asked randomly for the words you are expected to learn in the Challenge section and you have to write the English meanings of these words.",
    "When you know 5 words in a row correctly, you will have completed the challenge.",
    "If you want to remember what words you have learned before, you should visit my words section.",
    "What are you waiting for, let's get started!"
  ];
  
  // create ul element
  const infoList = document.createElement("ul");
  
  // create a li for every single line
  infoTextArray.forEach((text) => {
    const infoListItem = document.createElement("li");
    infoListItem.textContent = text;
    infoList.appendChild(infoListItem);
  });
  
  // add the ul element to the container
  myInfoContainer.appendChild(infoList);
  
  infoBtnBox.addEventListener("click", () => {
    myInfoContainer.style.display = "block";
    contentArea.style.display = "none";
    wordArea.style.display = "none";
  
    homeBtnBox.style.borderBottom = "none";
    wordBtnBox.style.borderBottom = "none";
    infoBtnBox.style.borderBottom = "2px solid #00b1eb";
  })
  
  // Function to create Balloon divs
  function createBalloonDiv(className) {
    const div = document.createElement("div");
    // Remove spaces in class names
    div.classList.add(...className.split(" "));
    const img = document.createElement("img");
    img.src = "http://imageshack.com/a/img905/7595/OFA4W2.png";
    img.alt = "balloon";
    div.appendChild(img);
    return div;
  }
  
  // Create the Balloon divs and add them to the section
  canvas.appendChild(createBalloonDiv("Blittle BC-2 animationBox"));
  canvas.appendChild(createBalloonDiv("Blittle BC-8 animationBox"));
  canvas.appendChild(createBalloonDiv("BlittleUP BC-6 animationBox"));
  canvas.appendChild(createBalloonDiv("Bmedium BC-1 animationBox"));
  canvas.appendChild(createBalloonDiv("Bmedium BC-3 animationBox"));
  canvas.appendChild(createBalloonDiv("BmediumUP BC-8 animationBox"));
  canvas.appendChild(createBalloonDiv("Bbig BC-7 animationBox"));