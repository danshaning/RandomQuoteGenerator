// Tableau de citations
let citations = [
   ["The greatest glory in living lies not in never falling, but in rising every time we fall.", "Nelson Mandela"],
   ["If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.", "James Cameron"],
   ["Life is what happens when you're busy making other plans. ", "John Lennon"],
   ["Spread love everywhere you go. Let no one ever come to you without leaving happier.", "Mother Teresa"],
   ["If life were predictable it would cease to be life, and be without flavor.", "Eleanor Roosevelt"],
   ["When you reach the end of your rope, tie a knot in it and hang on.", "Franklin D. Roosevelt"],
   ["The future belongs to those who believe in the beauty of their dreams.", "Eleanor Roosevelt"],
   ["The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.", "Helen Keller"],
   ["Do not go where the path may lead, go instead where there is no path and leave a trail.", "Ralph Waldo Emerson"],
   ["Life is either a daring adventure or nothing at all.", "Helen Keller"],
   ["You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.", "Dr. Seuss"],
   ["Life is never fair, and perhaps it is a good thing for most of us that it is not.", "Oscar Wilde"],
   ["The only impossible journey is the one you never begin.", "Tony Robbins"],
   ["Only a life lived for others is a life worthwhile.", "Albert Einstein"],
   ["The purpose of our lives is to be happy.", "Dalai Lama"],
   ["Live in the sunshine, swim the sea, drink the wild air.", "Ralph Waldo Emerson"],
   ["In three words I can sum up everything I've learned about life: it goes on. ", "Robert Frost"],
   ["If you really look closely, most overnight successes took a long time. ", "Steve Jobs"],
   ["I find that the harder I work, the more luck I seem to have.", "Thomas Jefferson"],
   ["The real test is not whether you avoid this failure, because you won't. It's whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere. ", "Barack Obama"],
   ["Don't be distracted by criticism. Remember — the only taste of success some people get is to take a bite out of you.", "Zig Ziglar"]
 ];


 let cit = document.getElementById('citation');

 let auteur = document.getElementById('auteur');

 let newCit = document.getElementById('nouveau');

 let dernier = 0;

 

 function genererNombreEntier(max) {
   return Math.floor(Math.random() * Math.floor(max));
 }

 let nbreAleatoire =0;









function miseAjour(){
   do{ nbreAleatoire = genererNombreEntier(citations.length);}
   while(nbreAleatoire == dernier)

   cit.textContent = citations[nbreAleatoire][0];
   auteur.textContent = citations[nbreAleatoire][1];

   dernier = nbreAleatoire;
}

newCit.addEventListener('click', miseAjour );

