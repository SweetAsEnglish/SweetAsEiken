

// Array of Objects
const quiz = [
	{
		q: 'Sabrina\'s father asked her to buy some things at the supermarket, and he gave her $20. The food cost (&emsp;&emsp;&emsp;&emsp;) $15, so Sabrina gave her father a $5 bill as change.',
		options: ['lively', 'exactly', 'politely', 'anxiously'],
		answer: 1
	},
	{
		q: 'A: Honey, are you (&emsp;&emsp;&emsp;&emsp;) that there is no food left in the house? <br> B:  Yes, I know, I\'m going to the supermarket before lunch.',
		options: ['rapid', 'aware', 'proud', 'random'],
		answer: 1
	},
	{
		q: 'A: Welcome to the Museum of Science. How can I help you? <br> B: Do you have any one-year passes for families?  <br> A: Yes. We have a basic pass for three people and a premium pass for five. <br> B: (&emsp;&emsp;&emsp;&emsp;), so I think we\'ll need the premium pass.',
		options: ['We\'ll visit the museum on Mondays, Tuesdays, and Saturdays', 'We have never been to the museum before', 'My wife, our three boys, and I love the museum', 'My daughter is very interested in science'],
		answer: 2
	},
	{
		q: 'Justin lost his bicycle key at school, so he could not (&emsp;&emsp;&emsp;&emsp;) his bicycle. He had to take the bus home.',
		options: ['decorate', 'unlock', 'reserve', 'feature'],
		answer: 1
	},
	{
		q: 'Rachel\'s ice cream(&emsp;&emsp;&emsp;&emsp;) has been doing well lately. She has found a lot of new customers who want to buy her company\'s products.',
		options: ['journey', 'notice', 'item', 'business'],
		answer: 3
	},
	{
		q: 'Mr. Kimura told his staff members to put more information into their sales reports. He said they should (&emsp;&emsp;&emsp;&emsp;) graphs and charts in each report.',
		options: ['expect', 'claim', 'complete', 'include'],
		answer: 3
	},
	{
		q: 'Many students thought Julia should become class president because she showed great (&emsp;&emsp;&emsp;&emsp;) skills.',
		options: ['pattern', 'freedom', 'leadership', 'jealousy'],
		answer: 2
	},
	{
		q: 'A: Mr. Dubois, French is really hard. I don\'t seem to be getting better. <br> B:  Learning a foreign language is a slow (&emsp;&emsp;&emsp;&emsp;). Sometimes, it can feel like you\'re not improving, but don\'t give up!',
		options: ['process', 'gesture', 'mirror', 'temperature'],
		answer: 0
	},
	{
		q: 'A: How long did it take for these flowers to grow? <br> B:  After planting the (&emsp;&emsp;&emsp;&emsp;), it took about a month.',
		options: ['seeds', 'bowls', 'laws', 'walls'],
		answer: 0
	},
	{
		q: 'Some universities (&emsp;&emsp;&emsp;&emsp;) all of their students with laptop computers so that students can use the Internet in class.',
		options: ['solve', 'elect', 'raise', 'provide'],
		answer: 3
	},
	{
		q: 'A: I\'m tired, Kevin. Let\'s do the rest of our math homework tomorrow.  <br> B:  No. We can\'t (&emsp;&emsp;&emsp;&emsp;) now! We\'re almost done.',
		options: ['quit', 'vote', 'shake', 'hide'],
		answer: 0
	},
	{
		q: 'A: George is so different from me. I don\'t think we can ever become friends. <br> B:  You should try talking to him more. I\'m sure you\'ll find something you both have (&emsp;&emsp;&emsp;&emsp;).',
		options: ['by hand', 'for rent', 'on time', 'in common'],
		answer: 3
	},
	{
		q: 'There is a big rock festival in Allenville this summer. The main event will (&emsp;&emsp;&emsp;&emsp;) in the city stadium.',
		options: ['look up', 'take part', 'look after', 'take place'],
		answer: 3
	},
	{
		q: 'Daisy ate a lot of fried food during her vacation, so she (&emsp;&emsp;&emsp;&emsp;) some weight. She stopped eating fried food for about a month to lose it.',
		options: ['put on', 'made up', 'cleared out', 'showed off'],
		answer: 0
	},
	{
		q: 'Oliver\'s mother asked him to go to the store because she had (&emsp;&emsp;&emsp;&emsp;) milk for the dessert she was making.',
		options: ['stood up for', 'come up with', 'run out of', 'broken out in'],
		answer: 2
	},
	{
		q: 'A: It\'s too hot to sit (&emsp;&emsp;&emsp;&emsp;) the sun, isn\'t it? <br> B:  Yeah. Let\'s go sit under that tree where it\'s cooler.',
		options: ['of', 'at', 'in', 'by'],
		answer: 2
	},
	{
		q: 'A: When do we have to finish our science projects, Mr. Dixon? <br> B: Be sure to (&emsp;&emsp;&emsp;&emsp;) your final report to me by March 10th.',
		options: ['turn off', 'dress up', 'burst into', 'hand in'],
		answer: 3
	},
	{
		q: 'Jim wanted to travel around Asia for a year before he started college, but his parents were (&emsp;&emsp;&emsp;&emsp;) the idea. They said the trip would be too expensive.',
		options: ['above', 'against', 'about', 'along'],
		answer: 1
	},
	{
		q: 'The reason (&emsp;&emsp;&emsp;&emsp;) Paul wants to study biology is because he likes animals. He hopes to open up an animal hospital someday.',
		options: ['where', 'what', 'when', 'why'],
		answer: 3
	},
	{
		q: 'A: Sally, would you mind (&emsp;&emsp;&emsp;&emsp;) the window? It\'s getting cold in here. <br> B: Sure, Mr. Smith.',
		options: ['to close', 'close', 'closing', 'closed'],
		answer: 2
	},
	{
		q: 'A: Wow! You have some amazing photographs in your room, Tim. <br> B: Thanks. Most of them (&emsp;&emsp;&emsp;&emsp;) by my grandfather.',
		options: ['are taking', 'were taken', 'had taken', 'is taking'],
		answer: 1
	},
	{
		q: 'A: Honey, have you seen my glasses anywhere? <br> B: No, I haven\'t. When did you wear them last?  <br> A: I wore them when (&emsp;&emsp;&emsp;&emsp;) last night. <br> B: Maybe you left them in the car, then.',
		options: ['I drove back from the office', 'I was reading in bed', 'we watched that DVD', 'we were making dinner'],
		answer: 0
	},
	{
		q: 'A: Thank you for shopping at Top Sports. That will be $40. <br> B: Can I pay by credit card?  <br> A: Of course sir. By the way, if you spend another $10 or more, you can get a free gift. <br> B: Really? In that case, I\'ll take this (&emsp;&emsp;&emsp;&emsp;).',
		options: ['$8 baseball cap', '$15 bag of coffee beans', 'free exercise guide', '$12 pack of tennis balls'],
		answer: 3
	},
	{
		q: 'A: Dad, I have to write a report for class, but I don\'t know where to start. <br> B: What do you have to write about?  <br> A: I have to write about a famous person from history. <br> B: Well, you love trains. Why don\'t you write about (&emsp;&emsp;&emsp;&emsp;)? <br> A: That\'s a great idea!',
		options: ['the history of transport', 'the man who invented them', 'the fastest train in the world', 'the first time you rode one'],
		answer: 1
	},
	{
		q: 'A: I have to write about a famous person from history. <br> B: Well, you love trains. Why don\'t you write about their inventor? <br> A: That\'s a great idea! Maybe I can find the information I need in one of my books. <br> B: Yes. You could also (&emsp;&emsp;&emsp;&emsp;). <br> A: Could you take me there this weekend? <br> B: Sure. I need to return some books anyway.',
		options: ['talk to the staff at the station', 'do some research at the library', 'have a look on the Internet', 'ask your teacher for some ideas'],
		answer: 1
	},
	{
		q: 'James visited several (&emsp;&emsp;&emsp;&emsp;) buildings when he went to Rome. Some of them were more than 2,000 years old.',
		options: ['ancient', 'exact', 'responsible', 'unable'],
		answer: 0
	},
	{
		q: 'Sally\'s French teacher told her to read an article in a French newspaper and (&emsp;&emsp;&emsp;&emsp;) it into English.',
		options: ['guide', 'throw', 'control', 'translate'],
		answer: 3
	},
	{
		q: 'Harry likes living in the city because there are so many things to do there. But he also loves nature, so sometimes he goes for a drive in the (&emsp;&emsp;&emsp;&emsp;).',
		options: ['decision', 'experiment', 'countryside', 'image'],
		answer: 2
	},
	{
		q: 'A: Is it true that the things in this store only cost 100 yen? <br> B:  Yes, but you will also need to pay (&emsp;&emsp;&emsp;&emsp;), so they actually cost a little more.',
		options: ['tax', 'data', 'total', 'waste'],
		answer: 0
	},
	{
		q: 'A: I\'m really nervous about acting in the play next week. <br> B:  I know you\'re worried now, but you\'ll feel fine as soon as you get on the (&emsp;&emsp;&emsp;&emsp;).',
		options: ['stage', 'field', 'court', 'screen'],
		answer: 0
	},
	{
		q: 'When the bus was an hour late, one man shouted (&emsp;&emsp;&emsp;&emsp;) at the driver. He said that he had missed an important meeting.',
		options: ['partly', 'angrily', 'secretly', 'tightly'],
		answer: 1
	},
	{
		q: 'Firefighters have to (&emsp;&emsp;&emsp;&emsp;) people from buildings that are on fire. To do this, they must be strong and healthy.',
		options: ['weigh', 'produce', 'stamp', 'rescue'],
		answer: 3
	},
	{
		q: 'John loves the singer Ann May, and he cannot wait until her new CD is (&emsp;&emsp;&emsp;&emsp;) next week. He has been waiting for it since her last CD came out two years ago.',
		options: ['released', 'trapped', 'divided', 'invented'],
		answer: 0
	},
	{
		q: 'The news that Ms. Kelly, the art teacher, was going to get married (&emsp;&emsp;&emsp;&emsp;) through the school very quickly. By lunchtime, almost all the students knew about it.',
		options: ['spread', 'served', 'stretched', 'stood'],
		answer: 0
	},
	{
		q: 'Before Diane attended Professor Miller\'s  (&emsp;&emsp;&emsp;&emsp;) at the university, she was not interested in Chinese art. However, now, she wants to learn more about it.',
		options: ['comment', 'shipment', 'lecture', 'furniture'],
		answer: 2
	},
	{
		q: 'A: Have you heard that Andrew Robinson is going to be the new sales manager? <br> B: Yes. Frankly (&emsp;&emsp;&emsp;&emsp;), I don\'t think he\'s the best person for the job. He knows very little about sales.',
		options: ['crying', 'chatting', 'screaming', 'speaking'],
		answer: 3
	},
	{
		q: 'A: Michelle, could you take (&emsp;&emsp;&emsp;&emsp;) the garbage? There are three bags by the front door. <br> B: OK, Mom. I\'ll do that now.',
		options: ['by', 'out', 'off', 'for'],
		answer: 1
	},
	{
		q: 'A: I still can\'t decide. What should I get, pizza or the spaghetti? <br> B: Please (&emsp;&emsp;&emsp;&emsp;) quickly! We have to finish eating and go in 30 minutes.',
		options: ['mind your own business', 'make up your mind', 'keep a promise', 'keep the change'],
		answer: 1
	},
	{
		q: 'While Paul was walking downstairs, he came  (&emsp;&emsp;&emsp;&emsp;) an old friend from high school. They went to lunch together.',
		options: ['at', 'across', 'aside', 'along'],
		answer: 1
	},
	{
		q: 'After easily beating the strongest team in the league, the coach of the baseball team was (&emsp;&emsp;&emsp;&emsp;) winning next weekend\'s game.',
		options: ['used up', 'derived from', 'similar to', 'confident of'],
		answer: 3
	},
	{
		q: 'Wakako is the best English speaker in her company\'s Tokyo office. She has a British accent because she was (&emsp;&emsp;&emsp;&emsp;) in the United Kingdom.',
		options: ['shown off', 'put down', 'gotten into', 'brought up'],
		answer: 3
	},
	{
		q: 'A: Dad, could you please (&emsp;&emsp;&emsp;&emsp;) the volume of the TV? I\'m trying to study for a test. <br> B: Oh, I\'m sorry.',
		options: ['look up', 'turn down', 'fill out', 'drop by'],
		answer: 1
	},
	{
		q: 'Stephanie thought she would not enjoy the movie <i>Train Chaos</i>, but it was (&emsp;&emsp;&emsp;&emsp;) more exciting than she expected.',
		options: ['too', 'so', 'very', 'much'],
		answer: 3
	},
	{
		q: 'A: How are the piano lessons going, Harry? <br> B: I gave up (&emsp;&emsp;&emsp;&emsp;) the piano last year. Now, I\'m taking guitar lessons instead.',
		options: ['learn', 'learned', 'learning', 'to learn'],
		answer: 2
	},
	{
		q: 'According to a survey (&emsp;&emsp;&emsp;&emsp;) by a major bank, an increasing number of people are worried about not having enough money in the future.',
		options: ['taking', 'to be taken', 'taken', 'to have taken'],
		answer: 2
	},
	{
		q: 'A: I want to borrow these books, but I can\'t find my library card. I think I lost it. <br> B: Please tell me your name. (&emsp;&emsp;&emsp;&emsp;). <br> A: Keith Nixon. <br> B: It\'s your lucky day. Someone found it and handed it in last week.',
		options: ['You can use another ID card', 'You might have left it here', 'I need to check your schedule', 'I can make a new one for you'],
		answer: 1
	},
	{
		q: 'A: What are you doing over the holidays, Haruka? <br> B: My family and I are going to visit my uncle in Hokkaido. <br> A: Are you going to (&emsp;&emsp;&emsp;&emsp;)? <br> B: No. My dad is going to drive. He says it will take two or three days.',
		options: ['take a plane to get there', 'go skiing while you\'re there', 'stay at your uncle\'s house', 'send your bags by post'],
		answer: 0
	},
	{
		q: 'A: Good afternoon. What can I do for you today? <br> B: I haven\'t been feeling well since I got up. (&emsp;&emsp;&emsp;&emsp;). <br> A: I see. Do you have pain anywhere else? <br> B: No. Maybe I ate something bad last night.',
		options: ['I have a terrible stomachache', 'I think I have a sore throat', 'My back is very painful', 'My shoulder really hurts'],
		answer: 0
	},
	{
		q: 'A: You don\'t look happy, Hannah. What\'s the matter? <br> B: It\'s about work. I think I (&emsp;&emsp;&emsp;&emsp;). <br> A: Really? I thought you enjoyed working at Carson Printing. <br> B: I did at first, but recently, I\'ve been so busy all the time.',
		options: ['might lose my job sometime soon', 'might start looking for another job', 'made a big mistake with an order', 'made one of my co-workers upset'],
		answer: 1
	},
	{
		q: 'A: I\'m so busy all the time. <br> B: I guess your company really needs you. <br> A: Hmm...I never thought about that, actually. <br> B: You should try (&emsp;&emsp;&emsp;&emsp;). <br> A: You\'re right. Maybe he can give some of my work to someone else.',
		options: ['talking to your boss tomorrow', 'doing something fun to relax', 'to look at things differently', 'to get some extra training'],
		answer: 0
	},
	{
		q: 'Dana was having (&emsp;&emsp;&emsp;&emsp;) with her science homework last night, so she asked her father for help.',
		options: ['interest', 'trouble', 'silence', 'memory'],
		answer: 1
	},
	{
		q: 'Jason is a member of the drama club and he will (&emsp;&emsp;&emsp;&emsp;) in his school play next week. He is practicing hard for it every day.',
		options: ['sail', 'stamp', 'produce', 'perform'],
		answer: 3
	},
	{
		q: 'Mr. Clark is a very popular teacher. He (&emsp;&emsp;&emsp;&emsp;) his students kindly, so they all like him a lot.',
		options: ['ignores', 'treats', 'melts', 'delivers'],
		answer: 1
	},
	{
		q: 'Last winter, the (&emsp;&emsp;&emsp;&emsp;) of Bear Lake froze, and people were able to skate on it.',
		options: ['object', 'position', 'surface', 'height'],
		answer: 2
	},
	{
		q: 'Angela broke her leg while she was playing basketball. It took her more than three months to (&emsp;&emsp;&emsp;&emsp;) from her injury and be able to play again',
		options: ['shut', 'recover', 'protest', 'march'],
		answer: 1
	},
	{
		q: 'Mark loves his two dogs very much, and he spends hours (&emsp;&emsp;&emsp;&emsp;) playing with them every day.',
		options: ['suddenly', 'hardly', 'happily', 'immediately'],
		answer: 2
	},
	{
		q: 'Denise saw one of her old classmates at a party yesterday. She did not (&emsp;&emsp;&emsp;&emsp;) him at first because he had changed so much.',
		options: ['recognize', 'mention', 'establish', 'combine'],
		answer: 0
	},
	{
		q: 'A: Frank, what are you going to wear to the dinner party next Saturday? <br> B: Well, it\'s a (&emsp;&emsp;&emsp;&emsp;) dinner, so I\'ll have to wear a suit and tie.',
		options: ['tough', 'negative', 'sharp', 'formal'],
		answer: 3
	},
	{
		q: 'A: What did you do in science class today, Rebecca? <br> B: We did an (&emsp;&emsp;&emsp;&emsp;) to find out how light travels through water.',
		options: ['orchestra', 'attitude', 'experiment', 'image'],
		answer: 2
	},
	{
		q: 'A: What do you think of this music? <br> B: It\'s too slow for me. I like music with a faster (&emsp;&emsp;&emsp;&emsp;).',
		options: ['distance', 'channel', 'belief', 'rhythm'],
		answer: 3
	},
	{
		q: 'Ronald was sick last week, so he could not go to school. This week, he is studying hard to (&emsp;&emsp;&emsp;&emsp;) his classmates.',
		options: ['catch up with', 'come up with', 'think better of', 'take notice of'],
		answer: 0
	},
	{
		q: 'Adam used to (&emsp;&emsp;&emsp;&emsp;) people who could not swim in the ocean. However, he realized that it was a very difficult to swim against waves after he tried it himself.',
		options: ['look back upon', 'look down on', 'see through', 'see about'],
		answer: 1
	},
	{
		q: 'Joseph did not get very good grades for his first year of college. He was ashamed (&emsp;&emsp;&emsp;&emsp;) himself and decided to study harder during his second year.',
		options: ['of', 'in', 'for', 'from'],
		answer: 0
	},
	{
		q: 'To save money, Gary started bringing lunch from home (&emsp;&emsp;&emsp;&emsp;) eating at restaurants.',
		options: ['instead of', 'ready for', 'according to', 'same as'],
		answer: 0
	},
	{
		q: 'Rachel often suffered (&emsp;&emsp;&emsp;&emsp;) headaches. Her doctor told her that drinking more water and relaxing more often might help.',
		options: ['into', 'above', 'from', 'of'],
		answer: 2
	},
	{
		q: 'Maria (&emsp;&emsp;&emsp;&emsp;) a number of coats, but she did not like any of them. She decided to go and look at the coats in another store.',
		options: ['tried on', 'showed up', 'took on', 'gave up'],
		answer: 0
	},
	{
		q: 'Maple High School has a speech competition every year. The school gives a prize to (&emsp;&emsp;&emsp;&emsp;) makes the best speech.',
		options: ['whatever', 'whoever', 'whenever', 'wherever'],
		answer: 1
	},
	{
		q: 'A: We have a new sofa now. What shall we do with the old one? <br> B: Let\'s (&emsp;&emsp;&emsp;&emsp;) rid of it. We don\'t need it anymore.',
		options: ['hit', 'make', 'send', 'get'],
		answer: 3
	},
	{
		q: 'A: Are Paris and Berlin in the same country? <br> B: No. One is in France and the (&emsp;&emsp;&emsp;&emsp;) is in Germany.',
		options: ['both', 'else', 'any', 'other'],
		answer: 3
	},
	{
		q: 'A: Look at this kitchen floor! It needs to (&emsp;&emsp;&emsp;&emsp;). <br> B: Yes, it\'s very dirty.',
		options: ['be cleaned', 'clean', 'be cleaning', 'have cleaned'],
		answer: 0
	},
	{
		q: 'A: Did you do anything exciting on the weekend, Liz? <br> B: Yes, I did. I went (&emsp;&emsp;&emsp;&emsp;). <br> A: Really? How was it? <br> B: It was great. The action scenes and the music were amazing!',
		options: ['to watch monkeys at the zoo', 'to see the new superhero movie', 'walking in the mountains', 'fishing at the lake with my brother'],
		answer: 1
	},
	{
		q: 'A: Excuse me, Officer. I can\'t find my son. He\'s only four years old. <br> B: OK, ma\'am. Please don\'t worry. Where did you (&emsp;&emsp;&emsp;&emsp;)? <br> A: He was with me in the bookstore on the first floor of the mall. <br> B: He probably went to the toy store. All the little boys love it.',
		options: ['go to school', 'see him last', 'drop it', 'buy that book'],
		answer: 1
	},
	{
		q: 'A: Welcome home, Jamie. How was your soccer match? <br> B: (&emsp;&emsp;&emsp;&emsp;), Dad. <br> A: Why? Was it because of the rain last night? <br> B: No. The other team\'s bus broke down, so the players couldn\'t come to the soccer field in time.',
		options: ['The field was very wet', 'My team lost six to one', 'It was canceled', 'I scored two goals'],
		answer: 2
	},
	{
		q: 'A: Good morning. Welcome to Book Forest. How can I help you? <br> B: Hi. I\'m looking for a book called <i>Under the Ground</i>. <br> A: Do you know (&emsp;&emsp;&emsp;&emsp;)? <br> B: I think it was written by someone called Mark Stanley.',
		options: ['what the story\'s about', 'how much it costs', 'who the author is', 'when it was written'],
		answer: 2
	},
	{
		q: 'A: Hi. I\'m looking for a book called <i>Under the Ground</i>. <br> B: Let me check...I\'m sorry. (&emsp;&emsp;&emsp;&emsp;). <br> A: Can I order it here? <br> B: Of course. It might take a week or two to arrive, though. <br> A: That\'s OK. I don\'t mind waiting.',
		options: ['Our store will close soon', 'We don\'t have it right now', 'I\'ve never read that book', 'He isn\'t here today'],
		answer: 1
	},
	{
		q: 'A: Is Leo going to help you with your history report?  <br> B:  No. He doesn\'t have time. But it doesn\'t (&emsp;&emsp;&emsp;&emsp;). Mary said she would help me.',
		options: ['reflect', 'matter', 'occur', 'differ'],
		answer: 1
	},
	{
		q: 'A: Are you going to Jim\'s birthday party on Saturday?  <br> B: No. I didn\'t get an (&emsp;&emsp;&emsp;&emsp;).',
		options: ['aquarium', 'activity', 'invitation', 'injury'],
		answer: 2
	},
	{
		q: 'A: Hi, Naomi. How was your camping trip?  <br> B: It was a real (&emsp;&emsp;&emsp;&emsp;)! I did exciting things like hiking in the rain, camping on the side of a mountain, and catching fish in a river.',
		options: ['adventure', 'opinion', 'entrance', 'interview'],
		answer: 0
	},
	{
		q: 'A: Is it quicker to wait for a bus to the station or to walk there? <br> B: It\'s not far, so I guess either would take (&emsp;&emsp;&emsp;&emsp;) the same amount of time.',
		options: ['day by day', 'more or less', 'on or off', 'piece by piece'],
		answer: 1
	},
	{
		q: 'A: Doctor, I hurt my foot while playing soccer yesterday. <br> B:  Well, sit down and let me (&emsp;&emsp;&emsp;&emsp;) a look.',
		options: ['take', 'help', 'stop', 'make'],
		answer: 0
	},
	{
		q: 'A: Making a cake was fun, but look at the kitchen. It\'s a mess! <br> B: OK. You wash the dishes, and I\'ll clean (&emsp;&emsp;&emsp;&emsp;) the table and the floor.',
		options: ['on', 'in', 'up', 'over'],
		answer: 2
	},
	{
		q: 'A: Mom, playing the piano is so difficult. <br> B: It\'s hard at first. But the more you practice, (&emsp;&emsp;&emsp;&emsp;) it becomes.',
		options: ['the easiest', 'the easier', 'as easy as', 'easier than'],
		answer: 1
	},
	{
		q: 'A: I (&emsp;&emsp;&emsp;&emsp;) the family photo album, but I couldn\'t find the picture of Grandma and me in Kyoto. <br> B: Oh, I gave that one to Grandma. She wants to put it on the wall in her living room.',
		options: ['went through', 'went around', 'got with', 'got over'],
		answer: 0
	},
	{
		q: 'When Steve reads Shakespeare\'s plays, he likes to read them (&emsp;&emsp;&emsp;&emsp;) so he can enjoy the beautiful sounds of the words.',
		options: ['forever', 'aloud', 'angrily', 'late'],
		answer: 1
	},
	{
		q: 'Some of the books in the school library are very old, so Mr. Smith always tells his students to be careful not to (&emsp;&emsp;&emsp;&emsp;) them when they read them.',
		options: ['prepare', 'damage', 'include', 'forgive'],
		answer: 1
	},
	{
		q: 'The cyclists were able to ride their bikes very fast because they were being (&emsp;&emsp;&emsp;&emsp;) by the wind. It was blowing strongly from behind them.',
		options: ['recalled', 'destroyed', 'aided', 'shaped'],
		answer: 2
	},
	{
		q: 'After hiking for two hours, John became (&emsp;&emsp;&emsp;&emsp;), so he stopped to drink some water.',
		options: ['unknown', 'ordinary', 'thirsty', 'correct'],
		answer: 2
	},
	{
		q: 'Heather wanted to make a necklace for her mother, but she did not have the (&emsp;&emsp;&emsp;&emsp;). She had to go out and buy some colorful stones and a string.',
		options: ['productions', 'operations', 'voyages', 'materials'],
		answer: 3
	},
	{
		q: 'Gary is (&emsp;&emsp;&emsp;&emsp;) to buy a new computer, so he tries to avoid spending too much on other things.',
		options: ['matching', 'typing', 'publishing', 'saving'],
		answer: 3
	},
	{
		q: 'Tina stepped on her little brother\'s toy airplane and broke one of its (&emsp;&emsp;&emsp;&emsp;). She was very sorry about it, so she bought him a new one.',
		options: ['caves', 'wings', 'branches', 'voices'],
		answer: 1
	},
	{
		q: 'After Sarah failed her science test, she stayed in her room all evening. She did not (&emsp;&emsp;&emsp;&emsp;) until the next morning when her mom called her for breakfast.',
		options: ['come out', 'bring in', 'carry out', 'take in'],
		answer: 0
	},
	{
		q: 'When Rachel smiled (&emsp;&emsp;&emsp;&emsp;) Tony, he felt so happy that he started smiling, too.',
		options: ['across', 'off', 'into', 'at'],
		answer: 3
	},
	{
		q: 'The captain of the softball team told the other players that it is important for each of them to (&emsp;&emsp;&emsp;&emsp;) in the game. They all have to do their jobs in order to win.',
		options: ['keep left', 'lose sight', 'play a role', 'have a break'],
		answer: 2
	},
	{
		q: 'Matt lives very close to the building (&emsp;&emsp;&emsp;&emsp;) he works. It only takes him 10 minutes to get there in the morning.',
		options: ['how', 'why', 'what', 'where'],
		answer: 3
	},
	{
		q: 'Wendy wanted to go to Hawaii for spring vacation, but her father was (&emsp;&emsp;&emsp;&emsp;) the idea. He said the trip would cost too much money.',
		options: ['before', 'beyond', 'within', 'against'],
		answer: 3
	},
	{
		q: 'A: What are your plans for next year, Stacy? <br> B: I\'m going to take part in a marathon race every month. <br> A: Wow! I guess you\'ll have to (&emsp;&emsp;&emsp;&emsp;) to do that. <br> B: Yes. The first one is in Hokkaido, and the next one is in Okinawa.',
		options: ['lose a lot of weight', 'train for many years', 'buy some new running shoes', 'travel around the country'],
		answer: 3
	},
	{
		q: 'A: We need to stop and get some gas soon. My car\'s gas tank is nearly empty. <br> B: We passed a gas station two minutes ago. <br> A: Do you think we should (&emsp;&emsp;&emsp;&emsp;)? <br> B: No. It\'s OK. I can see another one ahead.',
		options: ['ask someone', 'walk the rest of the way', 'get a bigger car', 'turn around and go back'],
		answer: 3
	},
	{
		q: 'A: Good morning, sir. How can I help you? <br> B: I\'m looking for (&emsp;&emsp;&emsp;&emsp;) for work. <br> A: How about this one? It\'s light and easy to carry. <br> B: It looks wonderful, and it has many pockets.',
		options: ['some black shoes', 'a nice necktie', 'a new bag', 'a small umbrella'],
		answer: 2
	},
	{
		q: 'A: Thank you for calling the Bay View Hotel. How can I help you? <br> B: I\'d like to reserve a room for Saturday night, please. <br> A: I\'m sorry, sir, but (&emsp;&emsp;&emsp;&emsp;) at the moment. We can\'t take any reservations right now. <br> B: When will it be fixed? <br> A: In about 30 minutes.',
		options: ['all the rooms in the hotel are full', 'the shuttle bus is not running', 'the elevator is going up', 'our computer system is not working'],
		answer: 3
	},
	{
		q: 'A: I\'d like to reserve a room for Saturday night, please. <br> B: I\'m sorry, sir, but our computer is broken at the moment. We can\'t take any reservations right now. <br> A: When will it be fixed? <br> B: In about 30 minutes. <br> A: OK. Can you (&emsp;&emsp;&emsp;&emsp;)? My name\'s Daniel Carter, and my number is 025-3345-56789. <br> B: Of course, sir.',
		options: ['call me back when it\'s ready', 'recommend another hotel', 'give a message to the manager', 'mail me one of your travel guides'],
		answer: 0
	},
	{
		q: 'A: I finished cleaning my room, Mom. Take a look. <br> B: It\'s not good (&emsp;&emsp;&emsp;&emsp;), Kevin. You must clean your desk and put your books away too.',
		options: ['enough', 'almost', 'ahead', 'even'],
		answer: 0
	},
	{
		q: 'A: How can I find more (&emsp;&emsp;&emsp;&emsp;) about the cleaning service on your website? <br> B: Just click on the information button at the top of our home page and you can see everything.',
		options: ['rounds', 'seasons', 'wheels', 'details'],
		answer: 3
	},
	{
		q: 'The United States of America (&emsp;&emsp;&emsp;&emsp;) of 50 states. The smallest state in the country is Rhode Island, and the largest is Alaska.',
		options: ['warns', 'dreams', 'prays', 'consists'],
		answer: 3
	},
	{
		q: 'Recently the economy has been very good in the western part of the country, so a lot of people have gone there to (&emsp;&emsp;&emsp;&emsp;) jobs.',
		options: ['send', 'explain', 'seek', 'mention'],
		answer: 2
	},
	{
		q: 'Michelle, Sarah, and Roger love to play music, so they have decided to (&emsp;&emsp;&emsp;&emsp;) a band. They will call their new band The Celery Sticks.',
		options: ['form', 'lift', 'sew', 'major'],
		answer: 0
	},
	{
		q: 'Linda keeps (&emsp;&emsp;&emsp;&emsp;) information such as her e-mail and bank passwords in a small notebook. She is careful not to let anyone else see the notebook.',
		options: ['impossible', 'liquid', 'tiring', 'secret'],
		answer: 3
	},
	{
		q: 'Richard broke his leg when he went snowboarding last month. He was absent from school for several days because of his (&emsp;&emsp;&emsp;&emsp;).',
		options: ['climate', 'injury', 'option', 'praise'],
		answer: 1
	},
	{
		q: 'Bart has been looking forward to his grandmother\'s visit for months. She will come tomorrow, and he is excited about her (&emsp;&emsp;&emsp;&emsp;).',
		options: ['arrival', 'direction', 'material', 'connection'],
		answer: 0
	},
	{
		q: 'A: Why were you late for work today, Bob? <br> B: The (&emsp;&emsp;&emsp;&emsp;) was terrible. It took me an hour to drive 4 kilometers.',
		options: ['entrance', 'image', 'traffic', 'fossil'],
		answer: 2
	},
	{
		q: 'Scott (&emsp;&emsp;&emsp;&emsp;) through his homework so that he could watch his favorite TV show. Because of this, he made many mistakes and did not get many answers right.',
		options: ['repeated', 'tapped', 'printed', 'hurried'],
		answer: 3
	},
	{
		q: 'Mrs. Green decided to give a role to each student in the musical at the school festival. This way, every student could (&emsp;&emsp;&emsp;&emsp;) the performance.',
		options: ['play a joke on', 'play a part in', 'keep track of', 'keep pace with'],
		answer: 1
	},
	{
		q: 'A: (&emsp;&emsp;&emsp;&emsp;) this website, Leonardo da Vinci was born in 1451. <br> B: That\'s not what my textbook says. It says he was born in 1452.',
		options: ['Hoping for', 'Adding up', 'According to', 'Hiding from'],
		answer: 2
	},
	{
		q: 'A: Have you (&emsp;&emsp;&emsp;&emsp;) Fred recently? <br> B: Yes. I got a message from him the other day. He said that he\'s enjoying college.',
		options: ['paid for', 'passed by', 'heard from', 'talked over'],
		answer: 2
	},
	{
		q: 'A: What does this word mean, Dad? <br> B: I\'m not sure. You\'ll have to (&emsp;&emsp;&emsp;&emsp;) in the dictionary.',
		options: ['throw it away', 'take it away', 'save it up', 'look it up'],
		answer: 3
	},
	{
		q: 'A: Do you know any good sightseeing place in London? <br> B: Of course! I go there (&emsp;&emsp;&emsp;&emsp;) on business, so I know the city really well.',
		options: ['at last', 'in the end', 'all the time', 'for once'],
		answer: 2
	},
	{
		q: 'Nick is nearly three years old. He always wants to touch the new things he finds every day. He is very curious (&emsp;&emsp;&emsp;&emsp;) anything he hasn\'t seen before.',
		options: ['at', 'over', 'about', 'from'],
		answer: 2
	},
	{
		q: 'A: I made these cookies for everyone this morning. Please (&emsp;&emsp;&emsp;&emsp;) yourself. <br> B: Thanks. They look delicious.',
		options: ['set', 'take', 'dress', 'help'],
		answer: 3
	},
	{
		q: 'A: Dad, this box is too heavy for me (&emsp;&emsp;&emsp;&emsp;) upstairs. <br> B: OK. I\'ll take it upstairs for you.',
		options: ['to carry', 'carrying', 'not carry', 'be carried'],
		answer: 0
	},
	{
		q: 'A: I have so much homework to do this weekend. <br> B: So (&emsp;&emsp;&emsp;&emsp;). I have a science report, a history assignment, and an English paper to write for Monday.',
		options: ['am I', 'I am', 'do I', 'I do'],
		answer: 2
	},
	{
		q: 'Hector wants a dog, but his family lives in a small apartment, and there is no space to keep a pet. He wishes he (&emsp;&emsp;&emsp;&emsp;) in a bigger place.',
		options: ['lives', 'to live', 'is living', 'lived'],
		answer: 3
	},
	{
		q: 'Lisa read a (&emsp;&emsp;&emsp;&emsp;) on the side of the road. It said to watch out for falling rocks.',
		options: ['warning', 'channel', 'shade', 'variety'],
		answer: 0
	},
	{
		q: 'Tomoko wants her (&emsp;&emsp;&emsp;&emsp;) with Yuji to continue even after they go to different junior high schools next year.',
		options: ['knowledge', 'supply', 'friendship', 'license'],
		answer: 2
	},
	{
		q: 'Andrew was having trouble in Spanish class, so his teacher gave him some (&emsp;&emsp;&emsp;&emsp;) homework. He learned a lot by spending more time making sentences in Spanish.',
		options: ['peaceful', 'talented', 'additional', 'negative'],
		answer: 2
	},
	{
		q: 'Michael\'s parents (&emsp;&emsp;&emsp;&emsp;) him to become a teacher, but Michael wanted to be an artist. In the end, he became an art teacher.',
		options: ['celebrated', 'filled', 'pushed', 'escaped'],
		answer: 2
	},
	{
		q: 'A: We\'ve been driving for a long time, Dad. When will we get to Grandma\'s house? <br> B: It\'s not far now, Beth. We\'ll (&emsp;&emsp;&emsp;&emsp;) her house in about 10 minutes.',
		options: ['measure', 'count', 'reach', 'promise'],
		answer: 2
	},
	{
		q: 'A: I can\'t believe Naomi Jones won the tennis championship this year! <br> B: Yes, it\'s a great (&emsp;&emsp;&emsp;&emsp;), especially since she lost her first two matches of the season.',
		options: ['achievement', 'retirement', 'treatment', 'equipment'],
		answer: 0
	},
	{
		q: 'When Victoria started typing on the computer for the first time, she was very slow. However, she practiced every day and (&emsp;&emsp;&emsp;&emsp;) became able to type very fast.',
		options: ['rarely', 'heavily', 'brightly', 'eventually'],
		answer: 3
	},
	{
		q: 'At first, Bob felt nervous about performing a guitar solo in the school concert. But he found the (&emsp;&emsp;&emsp;&emsp;) to do it after talking to his guitar teacher.',
		options: ['courage', 'fashion', 'education', 'average'],
		answer: 0
	},
	{
		q: 'Melissa (&emsp;&emsp;&emsp;&emsp;) when she saw a mouse on the kitchen floor. Her husband ran to the kitchen to find out why she had made so much noise.',
		options: ['decorated', 'harvested', 'graduated', 'screamed'],
		answer: 3
	},
	{
		q: 'Clark\'s little brother likes to dress up in black clothes and (&emsp;&emsp;&emsp;&emsp;) to be a ninja.',
		options: ['expect', 'explode', 'pretend', 'protest'],
		answer: 2
	},
	{
		q: 'Jane trained every day for a marathon in summer. In the end, she (&emsp;&emsp;&emsp;&emsp;) finishing the race in fewer than four hours.',
		options: ['complained of', 'came into', 'stood by', 'succeeded in'],
		answer: 3
	},
	{
		q: 'Mike looked when the tour guide pointed and said that there were elephants (&emsp;&emsp;&emsp;&emsp;). However, he could not see them because they were too far away.',
		options: ['on air', 'as a rule', 'in the distance', 'at most'],
		answer: 2
	},
	{
		q: 'A: Why do you want to go on a date to the mall, Jenny? (&emsp;&emsp;&emsp;&emsp;) shopping, what else can we do there? <br> B: Well, there are some great places to eat in the mall. There\'s a movie theater, too.',
		options: ['Aside from', 'Compared with', 'Based on', 'Close to'],
		answer: 0
	},
	{
		q: 'Emma enjoyed sitting on the beach and watching the sun go down and the stars come out. (&emsp;&emsp;&emsp;&emsp;), it began to get cold, so she decided to go back to her hotel.',
		options: ['After a while', 'In a word', 'For the best', 'By the way'],
		answer: 0
	},
	{
		q: 'Spencer does not like to (&emsp;&emsp;&emsp;&emsp;) when he uses his bicycle. He always wears his helmet and rides carefully.',
		options: ['make efforts', 'make progress', 'take place', 'take risks'],
		answer: 3
	},
	{
		q: 'Bobby saw smoke coming out of his neighbor\'s kitchen window. He realized that his neighbor\'s house was (&emsp;&emsp;&emsp;&emsp;), so he went and told his mother right away.',
		options: ['with luck', 'on fire', 'at sea', 'for sale'],
		answer: 1
	},
	{
		q: 'A: I heard Randy dropped his cell phone in the river. <br> B: Yeah. He said it was an accident, but I think he did it (&emsp;&emsp;&emsp;&emsp;) because he wanted his parents to buy him a new one.',
		options: ['with help', 'for free', 'in place', 'on purpose'],
		answer: 3
	},
	{
		q: 'Jason\'s parents were in the drama club together during high school. That is (&emsp;&emsp;&emsp;&emsp;) they first got to know each other.',
		options: ['how', 'what', 'whose', 'who'],
		answer: 0
	},
	{
		q: 'Last night, Rick\'s mom would not let him (&emsp;&emsp;&emsp;&emsp;) TV until he had finished cleaning his room.',
		options: ['to watch', 'watch', 'watching', 'watched'],
		answer: 1
	},
	{
		q: 'A: Did you enjoy your trip to Bali? <br> B: Yes, very much. It\'s such a beautiful place, and the people there are very kind. It was worth (&emsp;&emsp;&emsp;&emsp;).',
		options: ['visit', 'visiting', 'to visit', 'visited'],
		answer: 1
	}
]	