/*

todo: improve the quality of a paragraph 
todo: gather some information about that paragraph

% mini linter = word processor

*/

let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];
let unnecessaryWords = ['extremely', 'literally', 'actually'];

//split the string into individual words
let storyWords = story.split(' ');

//filter out unnecessary words
/* 
let betterWords = storyWords.filter(word => word !== unnecessaryWords[0] && word !== unnecessaryWords[1] && word !== unnecessaryWords[2]); 
*/

//better way less code
let betterWords = storyWords.filter(word => !unnecessaryWords.includes(word));

//how many times overused words used

//concise way
const overusedWordsCount = overusedWord => betterWords.reduce(((over, word) => word === overusedWord ? over + 1 : over), 0);

//another way
/*
let reallyCount = 0;
let veryCount = 0;
let basicallyCount = 0;

for (word of betterWords) {
  if (word === 'really') {
    reallyCount += 1;
  } else if (word === 'very') {
    veryCount += 1;
  } else if (word === 'basically') {
    basicallyCount += 1;
  }
}
*/

//how many sentences are in the paragraph

/*a simple way
let sentenceCounter = 0;
for (let i = 0; i < story.length; i++) {
  if (story[i] === '.' || story[i] === '!') {
    sentenceCounter += 1;
  }
}
*/

//better way
let sentenceCount = 0;
for (word of betterWords) {
  if (word[word.length - 1] === '.' || word[word.length - 1] === '!') {
    sentenceCount += 1;
  }
}

let overusedWordsCounter = overusedWordsCount('very') + overusedWordsCount('really') + overusedWordsCount('basically');

const counter = () => {
  console.log(`There are ${sentenceCount} sentences in the paragraph.`);
  console.log(`The word 'very' appears ${overusedWordsCount('very')}, the word 'really' appears ${overusedWordsCount('really')} and the word 'basically' appears ${overusedWordsCount('basically')}.`);
  console.log(`There are ${betterWords.length - overusedWordsCounter} words in the story.`);
}

counter();
console.log(betterWords.join(' '));

//last optional task
/*

TODO: For the overused words, remove it every other time it appears.

TODO: Write a function that finds the word that appears the greatest number of times.

TODO: Replaced overused words with something else.

*/