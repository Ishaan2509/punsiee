// ============================================================
// EDIT ME: add, remove, or rewrite letters here.
// Each letter needs a "name" (who it's from) and a "letter" (the text).
// Use backticks (`) so you can write multiple lines easily.
//
// OPTIONAL: give a letter its own song. Set "spotifyId" to the ID
// from that song's Spotify share link:
//   https://open.spotify.com/track/3n3Ppam7vgaVa1iaRUc9Lp
//                                    ^^^^^^^^^^^^^^^^^^^^^^ this part
// A small embedded Spotify player will appear at the top of the
// letter when it's opened, and disappears (stopping the song) when
// the letter is closed. Leave "spotifyId" out entirely for letters
// that shouldn't have a song.
//
// A few spotifyId fields below are left blank with a comment noting
// the intended song — some titles are ambiguous across artists, so
// grab the exact link yourself (Share -> Copy Song Link on the song)
// and paste in just the ID.
// ============================================================

import PasswordPrompt from "../components/PasswordPrompt";

const letters = [
  {
    name: "Gia",
    spotifyId: "3cKM7UXBZmgjEgEBTkaIlU", // song: "Strong"
    letter: `HAPPY BIRTHDAY BABYYYY omg I cant believe you're actually a fully grown ass adult now like you're still a tiny ass baby to me. I'm so so sorry I couldn't be there but just know I love u sm and I miss u sm all the time like no joke. You're always my first call if something crazy happens or if I'm missing home or even if I just need to talk about some stupid shit that I've talked to you about a million times before. Thank you for being my support system and my hype woman and my favourite person to rant and rage with. I dont think I could ever find a person who gets me the way you do, like how many people can I say I share a whole secret language with? ZERO. I really wish I could be there with you and celebrate with you it's just bad timing 😭 BUT we're gonna have so much fun at the party and it'll be just like old times and I'm looking forward to it so so much you have no idea. I hope you know that I'm always gonna be here for you the way you always have been for me, whether we're 5 minutes apart, 1.5 hours apart, or even halfway across the world, you'll always be one of my favourite people ever. I am so glad to have met you cuz we chipote and potate fr 😋. I LOVE YOU SO MUCH BBY I CANT WAIT TO MEET YOU MWAH BYEBYE HAVE THE BEST BIRTHDAY EVERRRRRRR.`,
  },
  {
    name: "Shannon",
    spotifyId: "5O2P9iiztwhomNh8xkR9lJ", // song: "Night Changes" - One Direction
    letter: `Hey Punnn

HAPPIEST 18TH BIRTHDAY BABY omggggg finallyyyy how u feeling ab toh legall ayeee ik it's not the same being there celebrating ur 18th birthday without ur family and everything it must be so different but just look at the bright side u have ur bf and ur bestest friends there with you they will be there for u and u will have a great birthday even tho if me sara and oil up is not there don't be sad okay bro i miss u so fucking much it's feels so weird and sad like not being there with u on ur 18th birthday like we fucking celebrated it together every year

But i really don't want you to feel sad or anything I want u to have as much fun as u can have go clubbing wagera jao maze karo video call me I'm so so so grateful to have u in my life thank u for being there always and listening to me rant abt anything I wish we were together rn i wish i could hug u and wish you but it's alr we'll meet diwali par and we'll have pura december together moj kardenge come jaldi baby it's really not the same without u guys don't take itna load abt college and all Sher puttar hai tu and I love u so so so much and i miss you so fucking much have an amazing birthday`,
  },
  {
    name: "Sara",
    spotifyId: "5MxiAxvsFQIr8JZi8XRntN", // song: "Tum Hi Ho Bandhu"
    letter: `Happiest birthday, Punya. Like, happy 18th. I can't believe you're an adult now. You don't seem like an adult. But yeah, you know, for the first time in my life, I don't know what to write because over the years, I've written you so many letters, and I've told you how much I love you in every single one of them. And I don't want to keep repeating our ups and downs because, well, we've lived through that already. So this time is the first time that I'm blank, and all the feelings I have for you is just that I miss you and I love you. Like so, so much. I talk about you every day. All of my friends know who Punya is, who Punya Bansal is. She's studying in Manipal. She's studying psychology. Everybody knows that because I don't shut up. But, and you know, I look for you in different people, and I still haven't found the one because, bro, I can never replace you. I never was planning to, don't get that wrong. But yeah, you know, I look for things that remind me of you. But it's, bro, you're so special that nobody matches you. And just, yeah, just know I love you so much, I miss you so much. It's so tough not seeing you every day. I know ऐसा लगता है कि मुझे फर्क नहीं पड़ता, but it hurts me a lot that you're not here, and it's just not the same. But I know that someday we had to go separate. Bus, just come back home quickly for Diwali, so that, yeah, we can have fun. We can go clubbing, pubbing, short, what, sab kuch bro. I miss you so much. I miss my punya hugs so much. So, so much. And this is, I know this letter will seem so, like bleh to you. But, like, yeah, it's just that I've been at your birthdays since third grade, and not being there for this one, this such a big one, does not sit right with me. Like just talking about it gives me goosebumps. And I know this letter might not be up to the mark, but I don't have anything else to say other than I love you and I miss you and the happiest 18th birthday. It's, it, like, when you tell me about your day and all, it, like, hurts me so much that I'm not there to experience all this with you. Because, bro, I want to experience every single thing together. Even when I'm in Shimla, any time I'm happy, any time I'm enjoying, I'm like, bro, I wish these guys were here. I'm not even kidding. That's why, like, when I was at freshers, when I was dancing, when I called you guys, when Tum Tak played, I was like, where are they? I miss them so much. Every time I have fun, I'm like, just, like, get me there. Just bring them here. And, like, any time I see you guys having fun, like, I love that you're finally settling in in Bangalore, but I just wish I was there. I wish me and Shandan were there. I think that's it. Just know I love you and I miss you, and I'll see you soon. Love you.`,
  },
  {
    name: "Sam",
    spotifyId: "5KNWHDmlDTYAtqjt8TMaTd", // song: "4 Men Down"
    letter: `happy birthday punya 💗
i love you so so much, thank you for always being there, i genuinely miss you so so much, it sucks not having you around to yap all day or going for theka runs or sneaking into bathroom stalls. i miss our bus ke subah raat ke gossip sessions the most, and specifically giving you signals through our way when we're around more people. you're always the go to friend for literally anything, the ray of sunshine that makes everyone's day complete. you are genuinely one of the people i want to keep for the rest of my life & gossip day night about everyone's problematic behaviour 😭😭

i hate that we can't spend YOUR 18TH TOGETHER I GENUINELY MISS YOU SO MUCH
but omg????? you're finally an adult????? now you can do everything you were already doing legally 💀💀
but have the best best birthday & enjoy so so much
im waiting for all of you to come baxk taaki iss baar toh genuine aag hi laga dengeeee
happy birthday doll 💗
- sam`,
  },
  {
    name: "Shanvi",
    spotifyId: "4JebLCO8mRNgLCb9iNQwNW", // song: "Manali Trance"
    letter: `Happiest birthday to my Punyaaa!! ❤️ I genuinely hope this year brings you all the happiness, love, success and everything else your heart desires because you deserve nothing but the absolute best. I'm so grateful to have you in my life and I hope you know how special you are to me. You're such a beautiful person inside and out, and I hope you never lose the warm magic that you have that makes anyone and everyone feel welcome. I hope this new chapter of your life is filled with the prettiest memories, endless laughter, new experiences and people who love you as much as you deserve to be loved. No matter what life brings your way, I hope you always have reasons to smile and people to lean on. Thank you for being you and for making life a little more special just by being a part of it. I love you so so much Punya, and I hope you have the most amazing birthday ever, birthday baby❤️`,
  },
  {
    name: "Vaanya",
    spotifyId: "4jl4vAgtZv7UNBn5y3HbqI", // song: "The Minx" - The Cyrkle
    letter: `HAPPIEST BIRTHDAY PUNYAAAAA 😭❤️

We went from spending almost every day together in school to suddenly being in completely different cities, and I genuinely miss you SOOOOO much. I miss having you around for all the random conversations, the endless gossip, the stupid jokes and obviously our ghar ke trauma sessions during socio 😭. And uk socio was one of my favourite classes cause uk that was like humara time like that was when it was just punya and vanya bonding time and i miss that SOOOO much. Now we have to rely on our calls to keep each other updated on everything, but somehow you still feel just as close.

I'm also SO proud of you for holding it down in Bangalore. I know some days can be really hard and harsh, and even when things feel overwhelming, you're still out there figuring everything out and making it work. I hope you know how proud I am of you for that, even from all the way here.

I really hope we never let the distance or how much our lives change get in the way of us. I want so many more years of stupid conversations, random calls, reunions and memories with you. I miss you more than I can put into words and I genuinely cannot wait till we're in the same city again 😭❤️

LOVE YOU SOOOOO MUCH PUNYA. HAPPY BIRTHDAYYYYYY 🫶🏻`,
  },
  {
    name: "Daddy Mummy",
    letter: `My dear swta
18 years ago you came into our life and made us a parent. You are still our little girl, who is growing into a kind, strong, beautiful young girl. You are the greatest joy of our life.
As you step into adulthood, remember - be kind, be brave, be you.
You have filled our heart with so much pride and love. Never forget how loved and how capable you are. The best is yet to come!
The world is yours now. Go and shine, our love. May you get all the success you deserve.
Happy 18th Birthday, my princess.
May you always have the courage to speak your truth and the wisdom to know how precious you are.
I love you more than words can say. Bhagwan tumhare saare sapne poore kare.
Love you my princess!

Love you forever,
Mumma & Papa`,
  },
  {
    name: "Ramona Aunty",
    letter: `Darling pun pun... Wish you all the happiness and love in the world, more than you can imagine. Be good be gentle be kind ..be a good person and live your life to the fullest. Be crazy. Dream big. Be daring. Just be .. lots and lots of love`,
  },
  {
    name: "Yana's Mom",
    letter: `Happy 18th Birthday, my dearest Punya! ❤️🎂✨

Where do I even begin with you, my sweetheart? You are one of those rare people who are just pure at heart. The way you care, the way you think about Yana, the way you value relationships and always make people around you feel loved .... it is honestly beautiful to watch. ❤️

I think my love for you went to another level when Yana was hospitalised. Seeing how you stood by her, cared for her and were there for her through everything made me realise what a blessing you are in her life. Your new journey when you all moved to Manipal. I absolutely love the bond you all share. It is something really special. Not just Yana, even I feel blessed to have a girl like you in her life. 🥰

As you step into this beautiful new phase of life, Aunty has just one little wish for you — always remain Punya. ❤️ Build beautiful relationships, love deeply, care endlessly, but never lose your own identity, your individuality, your dreams or the person you are.

May the beautiful bond you have with the person who means so much to you continue to grow stronger, happier and more beautiful with time. ❤️ But remember, sweetheart — adjust where life asks you to, but never compromise on the things that make you YOU. Your career, your dreams, your happiness and your identity are yours to build and protect.

And yes, I know you are terribly homesick sometimes. Missing your parents, your home and your family is a whole new feeling when you start living away from them. But trust me, this independence comes with its own little sacrifices — and somewhere along the way, it also makes us realise just how precious our families are. I am happy that you are beginning to understand and value that bond even more. ❤️

You are such a sweetheart, Punya. Your values, your warmth, the way you handle relationships, your energy, your vibe and that beautiful aura of yours — please never lose any of it. You are, and will always be, Aunty's favourite! 😘❤️

You are only 18, so please remember one more thing from Aunty — do everything in moderation! 😂 Enjoy life, make mistakes, fall in love with life, make memories, laugh a lot, travel, study hard, build your career and most importantly, stay happy and stay true to yourself. ❤️

I am so looking forward to having you back in Delhi and spending some lovely time.
Happy 18th, my darling Punya!
May this new chapter bring you happiness, love, confidence, success and everything your beautiful heart deserves.

Lots and lots of love, always. ❤️
Aunty`,
  },
  {
    name: "Poorvaja",
    spotifyId:"3B4cjvGlPvyBLNG3AzEgkZ",
    letter: `Punya, my baby, happy birthday. I'm so sorry I wasn't there for your birthday, but you were always there in my heart. Thank you so much for being in my life, because you're genuinely one of those people who just instantly feel like home. You're one of those people I never feel like I have to perform around. And I love you so much. And I love everything we do together, even the most random things. Some of my favourite memories with you are literally the stupidest, most uneventful moments. And I also love every version of you, the happy Punya, the homesick Punya, the drunk Punya. And yes, I will continue loving and enabling every single one of them. I hope we get to collect so many more ridiculous memories together. I'm so grateful that college gave me you, because I genuinely don't know what these past few months would've looked like without you. I hope this year gives you everything you deserve and then some. Happy birthday my love may God bless you with happiness and health.`,
  },
  {
    name: "Avika",
    spotifyId: "3QbcJKs3uIkd1mR7t9aZrV", // song: "She's My Cherry Pie" - Warrant
    letter: `Punyaaa i love you so so so much, you're the most caring person I've met! Your energy is too infectious and ur so fucking cute. How you literally make everything better! You've genuinely become so close to me in such a short time and i feel like i can literally talk about anything with you. You make me feel cared for and appreciated and seeing you everyday makes me so so happy! I didn't think I'd find my person in college so so soon but i was wrong! You are my person the most precious girl in the world, I can't imagine college without you and youre genuinely not allowed to leave now cause weirdly we've become way too locked in for u to leave.

If it wasn't for you i would be sitting alone in my room not wanting to socialise in my own little shell, i remember day 1 of college when u felt so down and you were having crash outs so often, and look at you now you don't even go to ur room till full exhaustion, checking in on everyone till ur satisfied everyone is happy. The college you found overwhelming on day 1 you've made it bearable for sooo many since, i know you've made it a happy place for me :)

The fact that I've literally become you when it comes to the weird faces, random actions and stupid words should say enough about how much you've influenced my brain 😭😆 I genuinely wish I could be even half as selfless and kind as you are.

I wish you never ever ever change, your immense wisdom (even tho ur so tiny) your sunshine like personality and your beautiful face, and the most important the way you treat people you care about! You make them feel at home and I'm forever grateful for that❤️

Happy birthday cutu i love you so so much`,
  },
  {
    name: "Hafsa",
    spotifyId: "6qCNaRRr5xJALfNJvh0NAw", // song: "Bom Diggy Diggy"
    letter: `Happy Birthdayyyy PUNYAAAAA to the most amazing friend I could ever askk for! Your the best thing about the whole journey so far in Manipal and I'm blessed to have you in my life, finding you in the hostel was prolly the best thing that has hapnd here after coming to Manipal and honestly I don't know how I would have survived without you. I enjoy spending time with you, going to Siri.. gossiping and doing everything with my bevdiii 😛😛.

I will never forget how we went to saarchi by walking in rain best adventure ever !!!! You're my constant source of laughter and I love you so much Grrrrrr love you loadsss and plz shift back to CT I will miss u this month 😋🩷🩷🩷`,
  },
  {
    name: "Svana",
    spotifyId: "5uNazTJV7Rpd8zAtWDiSiG", // song: "Silver Tongue"
    letter: `HAPPYYYY BIRTHDAY PUNYAAA OMFG, YOU'RE FINALLY 18 OMG YOU MADE IT SO FAR, IM SO PROUD OF YOUUU

let's just start with, I'm so glad I get to call you my friend, i couldn't have asked for a better friend in uni, from sitting in classes together to going to smoke every single day with you, time just flew. I love your presence and how fun every little moment becomes merely by it, you're just such a patoot and i wanna experience sooooo many more things with you cus the amount of time I've known you does not correlate with how much I love you, i really hope you have the best day everrrr MWAHHHH`,
  },
  {
    name: "Swara",
    spotifyId: "1qtl3vB0uqciZ94g3S6TO7", // song: "Besharmi Ki Height"
    letter: `Happy birthday my pretty baby💕

Though I've only known you a month or two i genuinely feel like I've known you for years which is super cliche to say but I mean it. I've felt the realest with you and I'm SO glad i met and it genuinely feels it was destined. I CANNOT imagine college without you for shit.

I know i have said it before but I'll say it again YOU are the glue to our group. You are an absolute ray of sunshine and all you emit is positive energy around you. Being around you makes me feel so happy and excited. There is a reason EVERYONE in the group is close to you. I love you so so so very much and I absolutely love being drunk without alcohol with you. Thank you for always waking up everyone, thank you for always planning every hangout, thank you for always getting everyone together, thank you for always caring about us, thank you for being an amazing friend.

I hope you have an amazing day and hope you feel as loved as you are 💌`,
  },
  {
    name: "Yana",
    spotifyId: "6nRGPf5tpeJtKpXZO5cgIT", // song: "Paaro"
    letter: `dear punya
happiest birthday ever
I cant believe ur 18 now like how tf u look like a child anyways it so crazy how we have seen eathother throught alot of phases of our life and now we are in college togather I never thought yeh hoga but i am so glad and thankful that I have u here with me and we can go through this stage of our life together also thank you so much for being there for me always and knowing that u can trust me and rely on me anytime like u dont need to think twice and jitna bhi mean I am it all comes from the heart ahhahahhahahahahha I mean I feel safe with u and I know u wont judge me no matter what and I hope u know that I wont too I love you so much always be the annoying kind and supportive friend u are I couldn't have asked for a better person to be my best friend

happy birthday potty
love you
-Your yanu 💖`,
  },
  {
    name: "Daksh",
    spotifyId: "5Rn1DPzSzUktbhuNDDJocS", // song: "Party On My Mind"
    letter: `happy 18th punya!!

I can't believe how long it has been already since the day we became friends like 7 years ago. We have truly come a long long way and have seen each other grow up, seen all of each others phases, from your bob cut to my skinny jeans.

I really hope that you have the best birthday this year and for you achieve all ur goals.

I remember I said this last year as well but punya, pls never change. You are the most caring person i've ever met, one who feel so deeply and love even deeper. I think it is such an understatement to say that I love you because this, us, is so much more. I hope you have the happiest life ever and thank you for always having my back and even keeping up with my mood swings! This is a friendship that I make sure to never take for granted and so every time I pray, I sneak in a thank you for letting me have friends like you, YOU in my life.

Love you so much potty ❤️`,
  },
  {
    name: "Ishaan",
    locked: true,
    password: "ISHAANI LOVES PUNYANI",
    spotifyId: "2psRActEWsTlYYd7EDoyVR", // 
    letter: `PUNSIEEE HAPPY BIRTHDAYYY!!! I am so grateful to have you in my life and i love u soo much my newly legal baby, finally its legal for us to be dating whoop whoop. I love that ur here with me in the same campus because i cannot live without u at all, and i know that this past month we been fighting so much and u dont like it but trust me baby we will be okay and we just gonna be stronger than ever cuz we the bestest frfr and no matter what happens we will love each other the most, the time i spend with u is the only time when i feel like its worth being alive cuz without u my life would just be boring, u literally bring all the excitement into my boring life, my little cutie patootie i hope u have the bestest year ever and ill try my best to make it that way mwah mwah mwah 
    -ur ishaaniii`,
  },
  {
    name: "Udi",
    spotifyId: "2262bWmqomIaJXwCRHr13j", // 
    letter: `happy happy birthday my baby. I can’t believe u r 18. I see you as my half daughter half mother half therapist but full ass best friend. From ur weird anda obsession to ur phatti hui socks u made us all fall in love with you. You are the one person I can proudly say that I can give my life for. No matter how many oceans miles and countries come in between us I know that if I’ve ever mad at something I can always call u to vent and listen to ur hoooooooooooo. You are the most positive person I could’ve ever met because u never gave up on me. Sitting without u in class in college feels so lonely because who else will burp into my ear or blow the kash smoke into my nose cause I was never able to learn. We have been through so many moments parties and drinks that now every joy feels incomplete cause there is no one by my side puking into the toilet. (Pls apni capacity barda le). You deserve the fucking best in life and I’m gonna make sure I’m gonna kill anyone who gets in the way of that cause you are my jaan. I never knew a fortis internship in 2024 could get me the loml. You have picked me up when I was afraid you always gave me a shoulder to cry on and I’ll always have a lap for you to black out on. I’m so proud of the person you have become and I can’t wait to see what else is in store for us. I’m gonna come see you so so so soon. I love you so much meri jaan and please stop thinking people at mad at you cause log chutiya hai and siraf hum mast hai. Happy 18th my baby! Congratulations on finally being able to do everything you already do but now legally. Mwaaaaaaah 💗`,
  },
];

export default letters;