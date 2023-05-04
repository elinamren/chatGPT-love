const colors = ["deeppink", "darkturquoise", "dodgerblue", "yellow", "darkorange", "darkorchid", "blueviolet", "lightcoral", "mediumaquamarine", "royalblue", "springgreen"];
const bgColors = ["pink", "honeydew", "azure", "lemonchiffon", "oldlace", "lavender"];
const skinColors = ["#FFEED4", "#D39273", "#815F4E"];

const motivationalPhrases = [
  "Du är fantastisk!",
  "Ingenting kan stoppa dig!",
  "Ge aldrig upp!",
  "Ditt arbete gör skillnad!",
  "Tro på dig själv!",
  "Du är kapabel till storhet!",
  "Varje dag är en ny möjlighet!",
  "Låt ingenting hindra dig från att nå dina mål!",
  "Din potential är oändlig!",
  "Du kan göra vad du sätter ditt sinne till!",
  "Du är starkare än du tror!",
  "Du är på rätt väg!",
  "Framgång är inom räckhåll!",
  "Allt du behöver finns redan inom dig!",
  "Det finns ingen gräns för vad du kan uppnå!",
  "Tänk positivt och positiva saker kommer hända!",
  "Du kan övervinna alla utmaningar!",
  "Du är en stjärna!",
  "Ingenting kan stoppa dig från att nå dina drömmar!",
  "Alla dagar är inte bra, men det finns något bra i varje dag.",
  "Ge aldrig upp på dina drömmar.",
  "Var tålmodig och håll fast vid dina mål.",
  "Du är kapabel till stordåd.",
  "Lär dig av dina misstag och fortsätt framåt.",
  "Var den förändring du vill se i världen.",
  "Framgång är en resa, inte en destination.",
  "Du kan övervinna alla hinder.",
  "Du har potential att göra stora saker.",
  "Gör det som gör dig lycklig.",
  "Din inställning kan förändra allt.",
  "Ge aldrig upp på dig själv.",
  "Ingenting är omöjligt om du tror på det.",
  "Det finns ingen begränsning på vad du kan åstadkomma.",
  "Våga drömma stort.",
  "Dina misstag definierar inte dig.",
  "Du är unik och speciell på ditt eget sätt.",
  "Lär dig av motgångar och väx från dem.",
  "Var envis och ge aldrig upp.",
  "Var dig själv och sluta aldrig att växa.",
  "Stå upp för det du tror på.",
  "Följ ditt hjärta och skapa din egen väg.",
  "Du har potentialen att göra skillnad i världen.",
  "Belöningen för ditt arbete är större än smärtan av dina ansträngningar.",
  "Varje dag är en ny chans att göra det bättre.",
  "Det finns inget sådant som misslyckande, bara feedback.",
  "Lär dig att omfamna förändring och anpassa dig.",
  "Fokusera på möjligheterna, inte begränsningarna.",
  "Dina handlingar idag formar din framtid.",
  "Framgång handlar om att ta ett steg i taget.",
  "Livet är en resa, inte en tävling.",
  "Du kan göra vad du sätter ditt sinne till.",
  "Sätt upp mål som är utmanande men realistiska.",
  "Tänk positivt och positiva saker kommer hända.",
  "Var tacksam för vad du har och fokusera på det positiva.",
  "Dina prestationer definierar inte din självbild.",
  "Våga tro på dig själv och dina förmågor.",
  "Håll dig fokuserad på dina mål och låt ingenting stoppa dig.",
  "Ingenting är omöjligt om du har modet att försöka.",
  "Lär dig att acceptera och växa från kritik.",
  "Var ödmjuk och erkänn dina svagheter.",
  "Stanna inte kvar i det förflutna, utan fokusera på nuet och framtiden.",
];

const title = document.getElementById('title');
const wrapper = document.getElementById('wrapper');
const heart = document.getElementById('heart');
const hands = document.querySelectorAll('.hand');

const getRandom = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function speak(text, voiceName) {
  const msg = new SpeechSynthesisUtterance();
  msg.text = text;
  
  const voices = window.speechSynthesis.getVoices();
  
  // Sök efter den röst med det angivna namnet
  const voice = voices.find(v => v.name === voiceName);

  // Om rösten hittades, använd den
  if (voice) {
    msg.voice = voice;
  }

  // Konfigurera inställningar för röstsyntes
  msg.volume = 1; // volymen (0-1)
  msg.rate = 1; // talarhastighet (0.1-10)
  msg.pitch = 1; // tonhöjd (0-2)
  
  window.speechSynthesis.speak(msg);
}

// Lägg till en händelselyssnare för klick på texten
heart.addEventListener('click', () => {
  heart.classList.toggle('pulse');
  const voices = ["Alva", "Nora", "Fred"]
  const voice = getRandom(voices);
  const textToSpeak = title.innerText;
  speak(textToSpeak, voice);
});

const titleColor = getRandom(colors);
const bgColor = getRandom(bgColors);
const phrase = getRandom(motivationalPhrases);
const skinColor = getRandom(skinColors);

title.style.color = titleColor;
title.innerText = phrase;
wrapper.style.background = bgColor;
hands.forEach((hand) =>{
  hand.style.fill = skinColor;
})