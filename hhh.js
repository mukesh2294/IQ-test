const voice = document.querySelector(".voice");
const voice2text = document.querySelector(".voice2text");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recorder = new SpeechRecognition();

function addHumanText(text) {
  const chatContainer = document.createElement("div");
  chatContainer.classList.add("chat-container");
  const chatBox = document.createElement("p");
  chatBox.classList.add("voice2text");
  const chatText = document.createTextNode(text);
  chatBox.appendChild(chatText);
  chatContainer.appendChild(chatBox);
  return chatContainer;
}

function addBotText(text) {
  const chatContainer1 = document.createElement("div");
  chatContainer1.classList.add("chat-container");
  chatContainer1.classList.add("darker");
  const chatBox1 = document.createElement("p");
  chatBox1.classList.add("voice2text");
  const chatText1 = document.createTextNode(text);
  chatBox1.appendChild(chatText1);
  chatContainer1.appendChild(chatBox1);
  return chatContainer1;
}

function botVoice(message) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = "i dont understand it";
    if (message.includes('Hi')) {
      speech.text = "hello";
    }
    if (message.includes('How are you')) {
      speech.text = "I am fine how are you";
    }

    if (message.includes('fine')) {
      speech.text = "good to hear that. How can I assist you today?";
    }

    if (message.includes( "exams")) {
      speech.text = "you can attempt them in Tests";
    }
    if (message.includes('learn')) {
      speech.text = "you can prepare them in learn everyday section";
    }
    if (message.includes('practice')) {
      speech.text = "you can practice them in  practice section,all the best";
    }
    if (message.includes('thankyou')) {
      speech.text = "dont say that i am here to help you";
    }
     if (message.includes('Thankyou')) {
      speech.text = "dont say that i am here to help you";
    }
    if (message.includes('iq')) {
      speech.text = "you can attempt them in Tests";
    }
    if (message.includes('tests')) {
      speech.text = "you can attempt them in Tests ! all the best";
    }
    speech.volume = 10;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
    var element = document.getElementById("container");
    element.appendChild(addBotText(speech.text));
}

recorder.onstart = () => {
  console.log('Voice activated');
};

recorder.onresult = (event) => {
  const resultIndex = event.resultIndex;
  const transcript = event.results[resultIndex][0].transcript;
  var element = document.getElementById("container");
  element.appendChild(addHumanText(transcript));
  botVoice(transcript);
};

voice.addEventListener('click', () =>{
  recorder.start();
});