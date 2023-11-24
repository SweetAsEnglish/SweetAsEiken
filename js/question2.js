

// Array of Objects
const quiz = [
    {
        q: 'In science class, students learn the names of the (&emsp;&emsp;&emsp;&emsp;) that can be found in nature. They have to know that H<sub>2</sub>0 is made of hydrogen and oxygen.',
        options: ['narrations', 'duties', 'witnesses', 'elements'],
        answer: 3
    },
    {
        q: 'A: It looked like you were enjoying class today, Jason. I saw you laughing a lot.  <br> B:  Yeah. Our teacher was telling some really (&emsp;&emsp;&emsp;&emsp;) stories about his family.',
        options: ['marine', 'amusing', 'native', 'silent'],
        answer: 1
    },
    {
        q: 'A: How many people work at your company, Mr. Steward?   <br> B: We (&emsp;&emsp;&emsp;&emsp;) have 45 employees, but we plan to hire another 5 people at the end of the year.',
        options: ['seriously', 'instantly', 'currently', 'especially'],
        answer: 2
    },
    {
        q: 'Donna (&emsp;&emsp;&emsp;&emsp;) her time between working at a bank and taking care of her children. She would like to spend more time at home, but she also needs to make money.',
        options: ['attaches', 'divides', 'publishes', 'scratches'],
        answer: 1
    },
    {
        q: 'After Karen got married, she decided to continue working at the same company, but on a part-time (&emsp;&emsp;&emsp;&emsp;).',
        options: ['charge', 'sense', 'basis', 'rating'],
        answer: 2
    },
    {
        q: 'The computers in the library should be (&emsp;&emsp;&emsp;&emsp;) for homework or school projects. Students are not allowed to use them for playing games or watching YouTube.',
        options: ['utilized', 'satisfied', 'entertained', 'reflected'],
        answer: 0
    },
    {
        q: 'Simon wants his students to speak more (&emsp;&emsp;&emsp;&emsp;), so he often reminds them to say “please” and “thank you” to others.',
        options: ['luckily', 'commonly', 'silently', 'politely'],
        answer: 3
    },
    {
        q: 'A: Kate, did you call the hotel to (&emsp;&emsp;&emsp;&emsp;) my reservation for tomorrow?   <br> B: Yes, Ms. Brown. They said you can check in anytime after three o\'clock.',
        options: ['confirm', 'promote', 'distinguish', 'govern'],
        answer: 0
    },
    {
        q: 'A: Did the people at the art show like your artwork?  <br> B:  Yes. I got a lot of  (&emsp;&emsp;&emsp;&emsp;). One person said they were the most beautiful paintings he had ever seen.',
        options: ['mysteries', 'detectives', 'compliments', 'structures'],
        answer: 2
    },
    {
        q: 'The police had (&emsp;&emsp;&emsp;&emsp;) that showed the man had robbed the store. His face could be seen on a video taken by the store\'s security cameras.',
        options: ['evidence', 'praise', 'rhythm', 'harmony'],
        answer: 0
    },
    {
        q: 'A: I can\'t get the Internet to work.  <br> B:  You need to (&emsp;&emsp;&emsp;&emsp;) that blue cable to the computer. Then it should work.',
        options: ['reflect', 'investigate', 'define', 'connect'],
        answer: 3
    },
    {
        q: 'A: Janet is always complaining about her job.  <br> B:  Yeah, I\'m getting (&emsp;&emsp;&emsp;&emsp;) of it. I wish she\'d stop.',
        options: ['sick', 'low', 'lazy', 'hard'],
        answer: 0
    },
    {
        q: 'John made a web page to sell some of his old items. He put photos on the page and wrote a detailed (&emsp;&emsp;&emsp;&emsp;) of each item.',
        options: ['symphony', 'description', 'hammer', 'route'],
        answer: 1
    },
    {
        q: 'Many people in the United States choose (&emsp;&emsp;&emsp;&emsp;) products instead of foreign ones so as to support American industry.',
        options: ['manual', 'routine', 'domestic', 'formal'],
        answer: 2
    },
    {
        q: 'This morning, Mr. Suzuki was tired at work because he (&emsp;&emsp;&emsp;&emsp;) all night taking care of his baby girl.',
        options: ['spoke up', 'stayed up', 'left over', 'looked over'],
        answer: 1
    },
    {
        q: 'A: I\'m going away next week, so please (&emsp;&emsp;&emsp;&emsp;) your assignment to Mr. Edwards.   <br> B: OK, Professor White. I\'ll give it to him as soon as I\'m done.',
        options: ['beat', 'imply', 'submit', 'convert'],
        answer: 2
    },
    {
        q: 'A: Do you think $600 will be (&emsp;&emsp;&emsp;&emsp;) three days in New York city?   <br> B: No. I think you\'ll need at least $1000. Hotels are expensive there.',
        options: ['obliged to', 'capable of', 'particular about', 'sufficient for'],
        answer: 3
    },
    {
        q: 'Vernon cannot be captain of the basketball team anymore because he is too busy with his schoolwork. Mike is going to (&emsp;&emsp;&emsp;&emsp;) as captain.',
        options: ['drive off', 'make sure', 'pull down', 'take over'],
        answer: 3
    },
    {
        q: 'Victor likes his new job because he is always (&emsp;&emsp;&emsp;&emsp;). He uses taxis, trains and airplanes every day to visit clients all around the country.',
        options: ['above all else', 'out of place', 'at a distance', 'on the go'],
        answer: 3
    },
    {
        q: 'A: When is Uncle Steve going to arrive?   <br> B: He could be here (&emsp;&emsp;&emsp;&emsp;), so please go and change your clothes.',
        options: ['in a series', 'for a living', 'at any moment', 'to some extent'],
        answer: 2
    },
    {
        q: 'Bridget was (&emsp;&emsp;&emsp;&emsp;) her low test scores, so she did not want to speak to any of her friends at college on Friday.',
        options: ['ashamed of', 'rid of', 'accustomed to', 'familiar to'],
        answer: 0
    },
    {
        q: 'If Tom\'s grandparents (&emsp;&emsp;&emsp;&emsp;) a computer last year, they\'d still be using their old typewriter.',
        options: ['haven\'t bought', 'hadn\'t bought', 'wouldn\'t buy', 'don\'t buy'],
        answer: 1
    },
    {
        q: 'George is respected by all the other people in the marketing department. Everyone in his section (&emsp;&emsp;&emsp;&emsp;) him for his wonderful ideas and hard work.',
        options: ['looks up to', 'moves on with', 'does away with', 'takes away from'],
        answer: 0
    },
    {
        q: 'When Kanako was a young girl, she used to do ballet every day. These days, she only does it (&emsp;&emsp;&emsp;&emsp;) because she is very busy.',
        options: ['up and down', 'now and then', 'all the way', 'not at all'],
        answer: 1
    },
    {
        q: 'In Christchurch city, water (&emsp;&emsp;&emsp;&emsp;) has become a big concern. The city is asking residents to use as little water as possible.',
        options: ['conservation', 'publication', 'revolution', 'ambition'],
        answer: 0
    },
    {
        q: 'A: How much does it cost to travel to New Zealand?   <br> B: Well, the prices (&emsp;&emsp;&emsp;&emsp;). They are high over the Xmas holidays as it is summer, but much lower at other times of the year.',
        options: ['vary', 'navigate', 'pause', 'struggle'],
        answer: 0
    },
    {
        q: 'A: I\'m thinking of visiting Shizuoka in January.   <br> B: Really? I think you should wait until April. Shizuoka is (&emsp;&emsp;&emsp;&emsp;) then. The weather is warmer and the cherry blossoms are beautiful.',
        options: ['behind its back', 'against its will', 'at its best', 'in its opinion'],
        answer: 2
    },
    {
        q: 'Sarina spent the holidays traveling around Asia with her family. Everyone had a lot of fun, so they were really sad when it (&emsp;&emsp;&emsp;&emsp;) an end.',
        options: ['finished up', 'came to', 'took over', 'fell on'],
        answer: 1
    },
    {
        q: 'In Japan, it is difficult for students to decide (&emsp;&emsp;&emsp;&emsp;) a high school to enter after junior high school.',
        options: ['with', 'in', 'on', 'for'],
        answer: 2
    },
    {
        q: 'At least seven hours sleep a night (&emsp;&emsp;&emsp;&emsp;) to be very important. Many experts say it helps prevent diseases later in life.',
        options: ['has said', 'says', 'is saying', 'is said'],
        answer: 3
    },
    {
        q: 'It is because fast food is convenient and cheap (&emsp;&emsp;&emsp;&emsp;) it is so popular with teenagers.',
        options: ['that', 'if', 'why', 'which'],
        answer: 0
    },
    {
        q: 'A: This movie is going to be very expensive and take a long time to make, Mr. Cameron. (&emsp;&emsp;&emsp;&emsp;) cancel it?   <br> B: No, I\'m sure it will make a lot of money, eventually.',
        options: ['What about', 'What for', 'How come', 'Why not'],
        answer: 3
    },
    {
        q: 'Henry\'s hobby is (&emsp;&emsp;&emsp;&emsp;) music. He wrote a new song for his girlfriend and played it for her on Valentine\'s Day.',
        options: ['rescuing', 'flattering', 'composing', 'declaring'],
        answer: 2
    },
    {
        q: 'Charlie decided on (&emsp;&emsp;&emsp;&emsp;) for his project at university. The focus was on how humans orginally came from apes.',
        options: ['evolution', 'economics', 'humanity', 'psychology'],
        answer: 0
    },
    {
        q: 'Nick and his brother had an (&emsp;&emsp;&emsp;&emsp;) about whose turn it was to cook dinner. They each thought that they were the one who had prepared it last time.',
        options: ['appointment', 'argument', 'occaison', 'identity'],
        answer: 1
    },
    {
        q: 'Mike closed his window because the sound of traffic outside was (&emsp;&emsp;&emsp;&emsp;) him a lot.',
        options: ['irritating', 'exchanging', 'evolving', 'detecting'],
        answer: 0
    },
    {
        q: 'Jun taught his daughter an easy (&emsp;&emsp;&emsp;&emsp;) of making ice cream at home with milk, sugar, and maple syrup.',
        options: ['cure', 'register', 'method', 'slice'],
        answer: 2
    },
    {
        q: 'Companies these days are making cameras that are (&emsp;&emsp;&emsp;&emsp;) small. Some are even smaller than a shirt button.',
        options: ['incredibly', 'partially', 'eagerly', 'consequently'],
        answer: 0
    },
    {
        q: 'There are very few houses in the north part of Springfield City. It is an (&emsp;&emsp;&emsp;&emsp;) area filled with factories and warehouses.',
        options: ['emergency', 'instant', 'industrial', 'environmental'],
        answer: 2
    },
    {
        q: 'Amy\'s teacher asked her to (&emsp;&emsp;&emsp;&emsp;) the new textbooks to all of the students. She had to place one on each desk in the classroom.',
        options: ['respond', 'negotiate', 'depend', 'distribute'],
        answer: 3
    },
    {
        q: 'Many science-fiction authors have written about the (&emsp;&emsp;&emsp;&emsp;) of traveling at the speed of light. With future developments in technology, this idea could become a reality.',
        options: ['edition', 'notion', 'contact', 'instinct'],
        answer: 1
    },
    {
        q: 'When Halle did some research into her (&emsp;&emsp;&emsp;&emsp;), she discovered that one of her great-grandparents used to work in a famous theater in London.',
        options: ['angels', 'ancestors', 'employees', 'enemies'],
        answer: 1
    },
    {
        q: 'A: Do you think it\s going to rain tomorrow, Eito?  <br> B:  I (&emsp;&emsp;&emsp;&emsp;) it. The rainy season is over, and it\'s been sunny all week.',
        options: ['doubt', 'blame', 'pardon', 'affect'],
        answer: 0
    },
    {
        q: 'A: Why has the office been so quiet recently?  <br> B:  Since Emily and John had an argument, there has been a lot of (&emsp;&emsp;&emsp;&emsp;) between them.',
        options: ['tension', 'survival', 'sharing', 'justice'],
        answer: 0
    },
    {
        q: 'A: Did your teacher (&emsp;&emsp;&emsp;&emsp;) your idea for your science project?  <br> B: No. He says that I\'m not allowed to do anything that involves dangerous chemicals. I\'ll have to think of something else.',
        options: ['confine', 'compare', 'abandon', 'approve'],
        answer: 3
    },
    {
        q: 'A: Is that the document you were looking for earlier?  <br> B:  Yes, it is. It was (&emsp;&emsp;&emsp;&emsp;) under a pile of papers on my desk. I really need to be more organized.',
        options: ['dyed', 'peeled', 'buried', 'broken'],
        answer: 2
    },
    {
        q: 'The big storm caused a lot of damage to many of the homes in the city. The cost to repair all the damage (&emsp;&emsp;&emsp;&emsp;) over $70 million.',
        options: ['amounted to', 'aimed at', 'calmed down', 'checked with'],
        answer: 0
    },
    {
        q: 'The current president of Turner\'s Cars is Phillip Turner. His business was (&emsp;&emsp;&emsp;&emsp;) his father, Mike, who retired 17 years ago.',
        options: ['balanced on', 'opposed to', 'inherited from', 'prohibited by'],
        answer: 2
    },
    {
        q: 'Ned tries to keep his work (&emsp;&emsp;&emsp;&emsp;) his private life. He does not like to mix them, so he never takes work home or talks about his family with his colleagues.',
        options: ['separate from', 'familiar with', 'anxious for', 'equal to'],
        answer: 0
    },
    {
        q: 'In the heavy rain, the ship\'s crew members were (&emsp;&emsp;&emsp;&emsp;) of the weather. They had to wait for the storm to pass before they could start the engines safely.',
        options: ['at the mercy', 'at the point', 'in the hope of', 'off the record'],
        answer: 0
    },
    {
        q: 'A: Tracey, have you (&emsp;&emsp;&emsp;&emsp;) what you\'re going to wear for Kate\'s wedding?  <br> B: Yes. I\'ve got quite a few nice dresses, but I\'m going to wear the light blue one that I picked up at the Black Friday sale.',
        options: ['called up', 'picked out', 'occurred to', 'disposed of'],
        answer: 1
    },
    {
        q: 'A: Excuse me. I\'m looking for an electric heater for my living room.  <br> B: I recommend this one, sir. It\'s small, but it (&emsp;&emsp;&emsp;&emsp;) plenty of heat. It should warm up your living room in just a few minutes.',
        options: ['drops out', 'runs out', 'gives off', 'keeps off'],
        answer: 2
    },
    {
        q: 'A: I can\'t help (&emsp;&emsp;&emsp;&emsp;) these chocolates. They\'re so delicious!  <br> B: I know. Once you start, it\'s very, very difficult to stop.',
        options: ['eating', 'to eat', 'eat', 'eaten'],
        answer: 0
    },
    {
        q: 'A: What do you think of these big balloons in the shape of animals?  <br> B: They\'re so cute! I need to get some decorations for my daughter\'s birthday party, and one of those balloons would be the (&emsp;&emsp;&emsp;&emsp;) thing.',
        options: ['ever', 'much', 'very', 'so'],
        answer: 2
    },
    {
        q: 'The British TV drama <i>Coronation Street</i> first went (&emsp;&emsp;&emsp;&emsp;) in 1960. It has remained popular ever since, and in 2020, its 10,000th episode was broadcast.',
        options: ['in a bit', 'for a change', 'at the rate', 'on the air'],
        answer: 3
    },
    {
        q: 'The member of the band <i>Token</i> were looking forward to playing with their new drummer. However, he did not arrive (&emsp;&emsp;&emsp;&emsp;) the concert was over.',
        options: ['unless', 'whether', 'until', 'yet'],
        answer: 2
    },
    {
        q: 'Andrew focused on (&emsp;&emsp;&emsp;&emsp;) for his science report. It was about how certain birds lost the ability to fly over millions of years.',
        options: ['evolution', 'lansdcape', 'humanity', 'psychology'],
        answer: 0
    },
    {
        q: 'During his lifetime, the scientist made outstanding contributions to the study of the solar system, to say (&emsp;&emsp;&emsp;&emsp;) of his research in physics.',
        options: ['worse', 'further', 'better', 'nothing'],
        answer: 3
    },
    {
        q: 'A: This computer is great, but it costs too much money. <br> B: Don\'t worry, honey. Let me see if I can (&emsp;&emsp;&emsp;&emsp;) the salesperson into giving us a discount, so we can buy it at a cheaper price.',
        options: ['run', 'burst', 'talk', 'divide'],
        answer: 2
    },
    {
        q: 'Manny trained very hard for the state athletics championships. (&emsp;&emsp;&emsp;&emsp;) his efforts, he could not win.',
        options: ['Above', 'Despite', 'Outside', 'Within'],
        answer: 1
    },
    {
        q: 'Kentaro has always tried to help the other members of the chess club. He has been doing so (&emsp;&emsp;&emsp;&emsp;) since he became the club\'s president earlier this year.',
        options: ['all the more', 'all the best', 'all the better', 'all the most'],
        answer: 0
    },
    {
        q: 'A: Julian asked me to marry him. Do you think I should say yes?   <br> B: You have to use your own (&emsp;&emsp;&emsp;&emsp;) to decide. No one else can do it for you.',
        options: ['income', 'convention', 'judgement', 'geography'],
        answer: 2
    },
    {
        q: 'A: What did you think of my essay, Jordan?   <br> B: Well, some of the explanations you gave are a bit (&emsp;&emsp;&emsp;&emsp;). Maybe you should make those parts clearer.',
        options: ['harmful', 'previous', 'certain', 'vague'],
        answer: 3
    },
    {
        q: 'A: I\'m sorry that I came home late. Did you have dinner without me?   <br> B: Yes. We were very hungry, but I (&emsp;&emsp;&emsp;&emsp;) some food for you. I\'ll heat it up now.',
        options: ['cut down', 'hung up', 'took after', 'set aside'],
        answer: 3
    },
    {
        q: 'A: Mom, can I go to the park to play with John later?   <br> B: Yes, (&emsp;&emsp;&emsp;&emsp;) you finish your homework first.',
        options: ['provide', 'provided', 'to provide', 'struggle'],
        answer: 1
    },
    {
        q: 'Kobe had been getting bad grades in math for a long time, but he did not do anything about it. Finally, he decided to (&emsp;&emsp;&emsp;&emsp;) the problem and ask his teacher for help.',
        options: ['alter', 'impress', 'honor', 'confront'],
        answer: 3
    },
    {
        q: 'The St. Patrick\'s Day parade started on the 10th Avenue and (&emsp;&emsp;&emsp;&emsp;) slowly to the center of town.',
        options: ['illustrated', 'reminded', 'proceeded', 'defended'],
        answer: 2
    },
    {
        q: 'Before there were motor vehicles, people often used (&emsp;&emsp;&emsp;&emsp;) that were pulled by horses to make long journeys.',
        options: ['carriages', 'fantasies', 'puzzles', 'luxuries'],
        answer: 0
    },
    {
        q: 'Janine bought four silk hankerchiefs. Because she was going to give each one to a different co-worker, she asked the salesclerk to wrap them (&emsp;&emsp;&emsp;&emsp;).',
        options: ['legally', 'financially', 'accidentally', 'individually'],
        answer: 3
    },
    {
        q: 'In the first lecture, Professor Williams (&emsp;&emsp;&emsp;&emsp;) how important it was to take good notes. He mentioned it three or four times.',
        options: ['engaged', 'divided', 'buried', 'stressed'],
        answer: 3
    },
    {
        q: 'Yesterday, there was a small fire at a house on the street where Ben lives. Firefighters (&emsp;&emsp;&emsp;&emsp;) water onto the fire and soon put it out.',
        options: ['sprayed', 'demanded', 'awarded', 'punished'],
        answer: 0
    },
    {
        q: 'In the game <i>Invasion!</i>, each player tries to take over other countries and build an (&emsp;&emsp;&emsp;&emsp;).',
        options: ['urgency', 'offspring', 'empire', 'impulse'],
        answer: 2
    },
    {
        q: 'In the science class, Ms. Stanley lit a candle and asked her students to look at the (&emsp;&emsp;&emsp;&emsp;). She told them that the hottest part was where it was blue.',
        options: ['triumph', 'religion', 'flame', 'luggage'],
        answer: 2
    },
    {
        q: 'Mimi\'s parents finally bought her a guitar after she promised to practice every day, but she quit playing after just two months. They were very (&emsp;&emsp;&emsp;&emsp;) her.',
        options: ['capable of', 'inspired by', 'attracted to', 'disappointed in'],
        answer: 3
    },
    {
        q: 'Due to construction work on Regent Street, the electricity to the houses on the street had to be (&emsp;&emsp;&emsp;&emsp;) for several hours.',
        options: ['heard of', 'turned over', 'shut off', 'ruled out'],
        answer: 2
    },
    {
        q: 'Silk Electronics has confirmed that it will be (&emsp;&emsp;&emsp;&emsp;) its new smartphone next month. The release has been delayed for several months due to techincal issues.',
        options: ['bringing out', 'falling for', 'picking on', 'giving off'],
        answer: 0
    },
    {
        q: 'Water that falls as snow and rain in the Andes Mountains travels thousands of kilometers down the Amazon River and eventually (&emsp;&emsp;&emsp;&emsp;) the Atlantic Ocean.',
        options: ['flows into', 'runs across', 'hands over', 'digs up'],
        answer: 0
    },
    {
        q: 'Applicants for the jobs at Scorpion Foods must apply (&emsp;&emsp;&emsp;&emsp;). They are not allowed to mail their application forms. Instead, they must take them to the store manager or the front desk.',
        options: ['at ease', 'at length', 'in person', 'in detail'],
        answer: 2
    },
    {
        q: 'The students in Jay\'s class take turns to look after things in the classroom. This week, Jay is (&emsp;&emsp;&emsp;&emsp;) of checking that there is no trash on the floor at the end of the day.',
        options: ['for fear', 'in charge', 'on behalf', 'by way'],
        answer: 1
    },
    {
        q: 'Akiko is an excellent cook. Her soups and curries are as good as (&emsp;&emsp;&emsp;&emsp;) that are served in a restaurant.',
        options: ['none', 'any', 'other', 'few'],
        answer: 1
    },
    {
        q: 'Mr. Miyagi is very rich and lives in a huge house. His kitchen is five times (&emsp;&emsp;&emsp;&emsp;) other people\'s kitchens.',
        options: ['large from', 'size from', 'the large of', 'the size of'],
        answer: 3
    }
]