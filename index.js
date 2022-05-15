const { Telegraf } = require('telegraf')
const bot = new Telegraf("5309264459:AAHjlxUoYz-mcQB2U4S6dKsYwMOJlNsErOc");
require('dotenv').config()


bot.start((ctx) => ctx.reply('yes?'))
bot.hears('rate my wife', (ctx) => ctx.reply('10/10'))
bot.hears('i want to die', (ctx) => ctx.reply("don't die youre sexy aha"))
bot.hears('i love you', (ctx) => ctx.reply('i love you both'))
bot.hears('ams', (ctx) => ctx.reply('ams'))
bot.hears('akechi', (ctx) => ctx.reply('yes?'))
bot.hears('good night', (ctx) => ctx.reply('sleepy'))
bot.hears('uy', (ctx) => ctx.reply('uy'))
bot.hears('my girlfriend is so pretty', (ctx) => ctx.reply('she is.'))
bot.hears('my boyfriend is so pretty', (ctx) => ctx.reply('he is.'))
bot.hears('cries', (ctx) => ctx.reply('oh no! hugs you'))

const facts = [

"1.God never ends anything on a negative; God always ends on a positive."
,

"2.God doesn’t give you what you want...He creates the opportunity for us to do so."
,

"3.God is our refuge and strength.A very present help in trouble, therefore we will not fear."
,
 
"4.He who says I'm alone...had never listened to God who is always with him."
,
 
"5.Don’t forget to pray today, because God didn’t forget to wake you up this morning."
,
 
"6.God can turn water into wine, but he can’t turn your whining into anything."



,
 
"7.God, as Truth, has been for me a treasure beyond price.May He be so to every one of us."
,

 
"8.God is always with you… You just need to pay attention."



,
 
"9.Don’t tell your God how big your storm is, tell your storm how big your God is."



,
 
"10.You may feel lost and alone, but God knows exactly where you are, and He has a good plan for your life."



,
 
"11.When you get down to nothing, God is always up to something."



,
 
"12.God makes everything happen for a reason."



,
 
"13.When we pray, God hears more than we say, answers more than we ask, gives more than we imagine, in his own time and in his own way."



,
 
"14.Live your life for God and he will lead your life to a world full of love and true happiness."



,
 
"15.Dear God, if one day I lose my hope and purpose, give me confidence that your destiny is better than anything I ever dreamed."



,
 
"16.Life without God is like an unsharpened pencil – it has no point."



,
 
"17.You may feel lost and alone, but God knows exactly where you are, and He has a good plan for your life."



,
 
"18.If you walk with God, you will always reach your destination."



,
 
"19.You can hate me, or you can love me, but in the end, only God can judge me."



,
 
"20.God represents himself through people who have lived according to the way he intended."



,
 
"21.God, sometimes takes us into troubled waters, not to drown us but to cleanse us."



,
 
"22.God is like the wind.We can’t see him, but we know He’s there."



,
 
"23.Commit your work to the Lord and he will crown your efforts with success."



,
 
"24.God answers all prayers; It’s just that sometimes his answers aren’t what you want."



,
 
"25.God always listen to your prayer...Only we have to be patient for the answer."



,
 
"26.God is always with us like when you get scared God is right there to hold your hand."



,
 
"27.God give me nothing I wanted.He gave me everything I needed."



,
 
"28.We should not bend God’s word to fit our lives – we must bend our lives to fit God’s word."



,
 
"29.God is like the parent, and you are his child learning how to walk.He’s far away watching you, so when the day you fall or stumble.He’s there to catch you."



,
 
"30.God will appear in a face you will imagine him to be, So don’t be scared if you imagine him as your friend."



,
 
"31.If you know the reality about God and human beings you will never prefer to live a temporary life in comforts comparing to eternal life after death."



,
 
"32.Pray as if everything depend on God...But act as if everything depend on you."



,
 
"33.God understands our prayers even when we can’t find the words to speak them."



,
 
"34.When a man takes one step toward God, he takes more steps toward that man than there are sands in the worlds of time."



,
 
"35.What God intended for you goes far beyond anything you can imagine."



,
 
"36.Happiness, joy, and love, is a great sign of God’s presence."



,
 
"37.God has given us two hands, one to receive with and the other to give with."



,
 
"38.When you mess up on something and have to do it over.Don’t get discouraged.Be glad that God has blessed you with the strength to be able to."



,
 
"39.God will not give you a burden that you can’t handle.So if you are in mess which is impossible to resolve, think it as compliment.God thinks You can do it.Believe in God."



,
 
"40.Trusting God is wisdom, knowing God is peace, loving God is strength, faith in God is courage."



,
 
"41.God is really the wisest of all since He judges beings not by words, thoughts or actions but under what motives are you doing, thinking or doing what you have in either your mind or heart.Men judge externally but God judges internally."



,
 
"42.A man can ran around dozens of fields; hike hundreds of mountains and even walk thousands of miles.But a man cannot take a single step away from God."



,
 
"43.What God says about me is more important than what people say."



,
 
"44.If you ask God for help it means you trust His ability, if He doesn’t help you it means He trust yours."



,
 
"45.Remember that time spent with God is never wasted.Always find time to talk to God wherever you go."



,
 
"46.God lends a helping hand to the man who tries hard."



,
 
"47.God will never give us burden that we can’t bear, so if we have a problem, take it as a compliment, because God think we can."



,
 
"48.Anxiety happens when we think we have to figure everything out.Turn to God, He has a plan."



,
 
"49.If you do everything God’s way, your life will be so easy."



,
 
"50.God always gives his best to those who leave the choice with him."



,
 
"51.God hangs the greatest weights upon the smallest wires."



,
 
"52.God moves in a mysterious way, His wonders to perform.He plants his footsteps in the sea, and rides upon the storm."



,
 
"53.God is good.God is real.He is the only light in this world and God has no fear."



,
 
"54.Since God knows our future, our personalities, and our capacity to listen, He isn't ever going to say more to us than we can deal with at the moment."



,
 
"55.God wouldn’t put you in difficult situations if he didn’t believe you couldn’t get through them."



,
 
"56.God meets daily needs daily.Not weekly or annually.He will give you what you need when it is needed."



,
 
"57.God will never reject you.Whether you accept Him is your decision."



,
 
"58.God made the world round so we would never be able to see too far down the road."



,
 
"59.Do your part, and God will do the rest."



,
 
"60.God doesn’t throw worries and challenges that we cannot catch."



,
 
"61.When God is going to do something wonderful, He or She always starts with a hardship; when God is going to do something amazing, He or She starts with an impossibility."



,
 
"62.As children of God, we need genuine compassion for others, even those with whom we may not necessarily be able to relate or with whom we don't have shared experience."



,
 
"63.God is able to take the mess of our past and turn it into a message.He takes the trials and tests and turns them into a testimony."



,
 
"64.Listen to God with a broken heart.He is not only the doctor who mends it but also the father who wipes away the tears."



,
 
"65.God's word is not just to be heard and repeated; it is to be breathed, lived, and emulated with each action."



,
 
"66.Never trust anyone completely but God.Love people, but put your full trust only in God."



,
 
"67.Before we can know God and understand his great plan it is first necessary for us to believe that he exists and that he rewards all who diligently seek him."



,
 
"68.God said that when we have His joy that our joy would be full or leveled up, in other words that His joy will satisfy us."



,
 
"69.The cross shows us the seriousness of our sin-but it also shows us the immeasurable love of God."



,
 
"70.When faith replaces doubt, when selfless service eliminates selfish striving, the power of God brings to pass His purposes."



,
 
"71.Even when I cannot see him, I can hear the beautiful gallop of God’s heartbeat for humanity."



,
 
"72.God is whispering in your heart, in the whole existence, just tune your ears."



,
 
"73.There is no place in my soul, no corner of my character, where God is not."



,
 
"74.I don't have the strength or wisdom to get through a single day without guidance and grace from God."



,
 
"75.God’s promises are like the stars; the darker the night the brighter they shine."



,
 
"76.In order to become all God wants us to be, we have to free ourselves from any unrealistic expectations we have placed on ourselves."



,
 
"77.Every morning I spend fifteen minutes filling my mind full of God; and so there’s no room left for worry thoughts."



,
 
"78.In all ranks of life the human heart yearns for the beautiful; and the beautiful things that God makes are his gift to all alike."



,
 
"79.Living for God requires that we yield our thoughts to Him.Meaning every thought should be filtered through the Father."



,
 

"80.You should be courageous, not because of who you are and what you've done, but because of who God is and what He has done."
]


let fact = randomFact()
function randomFact() {
  let fact = facts[randomInteger(0, (facts.length - 1))]
  return fact
}
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
bot.hears('sad', (ctx) => ctx.reply(fact))

//
let yn = yesorno()
function yesorno() {
    let yes_or_no = Math.floor(Math.random()*10) //1-10
    if (yes_or_no <=5) {
               return 'yes';
    } else {
               return 'no';
    }
}

bot.hears('akechi yes or no', (ctx) => ctx.reply(yn))


const chatId = '-1001604420696';

function meow() { bot.telegram.sendMessage(chatId, 'meow');}

let meowstartstop;

bot.hears('akechi meow', (ctx) => {
   meowstartstop = setInterval(meow, 10000);
})

bot.hears('akechi stop meowing', (ctx) => {
  clearTimeout(meowstartstop);
  meowstartstop = null;
})

const commandDoc = [
  {command: "akechi meow - i meow." },
  {command:"akechi stop meowing." },
  {command: "akechi yes or no - i gamble your life."},
  {command: "sad - i motivate you." }]

  const helpText = commandDoc
  .map(c => `${c.command}`)
  .join('\n');

bot.command('help', (ctx) => ctx.reply(helpText))


let whatdate = new Date()
let hour = whatdate.getHours();

const messagesToSleep = [
    "sweet dreams to my girlfriend and my boyfriend ♡♡♡",
    "nighty nighty",
    "I can't wait to wake up next to you!",
    "I'll dream of you tonight and see you tomorrow, my soulmates.",
    "good night, love you both to the moon ♡",
    "always kiss you both goodnight ♡",
    "Good night; I'll sleep with you in my heart",
    "Good night; I'll meet my gf and my bf in my dreams ♡",
    "I can’t wait to see you again. sleep well you both ♡",
    "goodnight, beautiful and handsome!",
    "sweet dreams for my sweet partners",
    "im sooo sleepy! stop talking and let's go to bed ♡",
    "ams, you're tired. go to bed with us ♡"
]

const messagesToWakeUp = [
    "good morning honey!",
    "to my girlfriend and my boyfriend ♡♡♡",
    "good morning! I hope you slept well last night ♡",
    "good morning, my sweet girl and handsome boy. I literally just woke up and my gf and my bf are the first people on my mind. I love you both so much.",
    "good morning ♡ do stretching and have a cup of coffee< i love you both!",
    "I wish we could be lazy with you in bed together all day.",
    "great morning! let me know if you need some help getting into trouble later.",
    "good morning ♡ how did you spend your day, yesterday?",
    "*yawn* good morning my girl and my boy ♡",
    "good morning ♡ I was dreaming of you all night long.",
    "good morning, love.",
    "good morning kitten and crow ♡♡♡",
    "good morning my love, i hope you slept well!",
    "good morning, kitten and crow ♡ tell me about your dreams",
    "good morning my lovely partners! did you sleep well?",
    "good morning ♡ *yawn* i dreamed about us i can't stop thiking about this. makes me so happy to be with you both",
    "morninggg girl and boy ♡ what did you dream about? me?",
    "*yawn* morning! time for a breakfast and few minutes of stretching ♡"
]


let messageToSleep = mes1()
function mes1() {
  let message = messagesToSleep[randomInteger(0, (messagesToSleep.length - 1))]
  return message
}
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let messageToWakeUp = mes1()
function mes1() {
  let message1 = messagesToWakeUp[randomInteger(0, (messagesToWakeUp.length - 1))]
  return message1
}
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

if (hour===23) { bot.telegram.sendMessage(chatId, messageToSleep);}
if (hour===9) { bot.telegram.sendMessage(chatId, messageToWakeUp);}


bot.launch()