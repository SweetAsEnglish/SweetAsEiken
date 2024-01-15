

// Array of Objects
const quiz = [
	{
		q: 'I (&emsp;&emsp;&emsp;&emsp;) the music club at school, so I\'m going to buy a guitar this week.',
		options: ['learned', 'put', 'joined', 'kept'],
		answer: 2
	},
	{
		q: 'A: That\'s a (&emsp;&emsp;&emsp;&emsp;) T-shirt, Keisuke. <br> B: Thanks, Fred. I bought it at a concert last night.',
		options: ['cool', 'fast', 'silent', 'rich'],
		answer: 0
	},
	{
		q: 'A: Tommy, turn off the TV and do your homework. <br> B: I\'ve (&emsp;&emsp;&emsp;&emsp;) finished it, Mom.',
		options: ['always', 'anytime', 'already', 'along'],
		answer: 2
	},
	{
		q: 'A: How was your holiday, Steve? <br> B: Not so good. I wanted to go hiking, but it rained (&emsp;&emsp;&emsp;&emsp;) day.',
		options: ['any', 'some', 'all', 'long'],
		answer: 2
	},
	{
		q: 'A: Do you like (&emsp;&emsp;&emsp;&emsp;) pictures, Mr. Fox? <br> B: Yes, I do.',
		options: ['take', 'took', 'takes', 'taking'],
		answer: 3
	},
	{
		q: 'A: Do you have my book, Steve? <br> B: Sorry, I couldn\'t (&emsp;&emsp;&emsp;&emsp;) it all. I\'ll bring it on Monday.',
		options: ['read', 'reads', 'to read', 'reading'],
		answer: 0
	},
	{
		q: 'Kento is very good at sports. He hopes to be a (&emsp;&emsp;&emsp;&emsp;) baseball player someday.',
		options: ['professional', 'first', 'delicious', 'traditional'],
		answer: 0
	},
	{
		q: 'It will (&emsp;&emsp;&emsp;&emsp;) you 10 minutes to get to the station by taxi.',
		options: ['make', 'fall', 'take', 'forget'],
		answer: 2
	},
	{
		q: 'Ken enjoys reading about different (&emsp;&emsp;&emsp;&emsp;). He hopes to travel to many countries in the future.',
		options: ['cultures', 'platforms', 'kitchens', 'purposes'],
		answer: 0
	},
	{
		q: 'You may not use your phone (&emsp;&emsp;&emsp;&emsp;) class. Please turn it off.',
		options: ['during', 'through', 'since', 'along'],
		answer: 0
	},
	{
		q: 'The station was full (&emsp;&emsp;&emsp;&emsp;) people because the trains were late.',
		options: ['by', 'for', 'of', 'on'],
		answer: 2
	},
	{
		q: 'Patricia is excited because she\'ll take part (&emsp;&emsp;&emsp;&emsp;) the school play this year.',
		options: ['on', 'to', 'at', 'in'],
		answer: 3
	},
	{
		q: 'Harry and Paul couldn\'t come (&emsp;&emsp;&emsp;&emsp;) with any good ideas for the science contest.',
		options: ['on', 'in', 'into', 'up'],
		answer: 3
	},
	{
		q: 'Our English teacher told us not to worry about making (&emsp;&emsp;&emsp;&emsp;) when we speak.',
		options: ['museums', 'mistakes', 'models', 'meetings'],
		answer: 1
	},
	{
		q: 'Katie\'s neighbor has a noisy dog, so it is difficult for her (&emsp;&emsp;&emsp;&emsp;) at night.',
		options: ['sleeps', 'to sleep', 'slept', 'sleep'],
		answer: 1
	},
	{
		q: 'Brother: Look! I made this cake for Mom\'s birthday. What do you think? <br> Sister: (&emsp;&emsp;&emsp;&emsp;) It looks delicous.',
		options: ['I\'m sure she\'ll love it.', 'I don\'t know where it is.', 'I\'m afraid I can\'t.', 'I\'ll tell her to call you.'],
		answer: 0
	},
	{
		q: 'Husband: The kitchen is really dirty. <br> Wife: (&emsp;&emsp;&emsp;&emsp;) We need to clean it.',
		options: ['I haven\'t either.', 'There aren\'t any more.', 'I think so, too.', 'That\'s a long time.'],
		answer: 2
	},
	{
		q: 'Girl 1: My aunt is taking me to a musical tomorrow. Would you like to come? <br> Girl 2: Sorry, I can\'t, but (&emsp;&emsp;&emsp;&emsp;)',
		options: ['thanks for asking.', 'I wrote that song.', 'she saw you there.', 'I don\'t know yet.'],
		answer: 0
	},
	{
		q: 'Boy: You\'re an amazing swimmer, Jane. <br> Girl: Thanks. (&emsp;&emsp;&emsp;&emsp;) but I practiced a lot.',
		options: ['I wasn\'t good at first,', 'I was next to the pool,', 'You did it,', 'You should come with me,'],
		answer: 0
	},
	{
		q: 'Husband: Let\'s walk to the shopping mall this afternoon. <br> Wife: OK. What do you need to buy? <br> Husband: (&emsp;&emsp;&emsp;&emsp;)',
		options: ['There\'s a bag on my desk.', 'I usually go by bus.', 'Let\'s leave at three o\'clock.', 'I want to look for a coat.'],
		answer: 3
	},
	{
		q: 'A: How did you make that potato dish? <br> B: First, you (&emsp;&emsp;&emsp;&emsp;) the potatoes, and then cut them in half and put butter on them.',
		options: ['boil', 'care', 'hurt', 'eat'],
		answer: 0
	},
	{
		q: 'A: John, you should go to bed soon. If you stay up too late, you\'ll (&emsp;&emsp;&emsp;&emsp;) and be late for school. <br> B: OK, Mom.',
		options: ['graduate', 'promise', 'return', 'oversleep'],
		answer: 3
	},
	{
		q: 'A: Did you buy your father something special for his birthday? <br> B: Yes. He loves to cook, so I got him a new (&emsp;&emsp;&emsp;&emsp;).',
		options: ['apron', 'ring', 'contact', 'field'],
		answer: 0
	},
	{
		q: 'A: I told my mother that I would be home by 7:00. I don\'t want to (&emsp;&emsp;&emsp;&emsp;) my promise, so I have to go now. <br> B: OK.',
		options: ['pass', 'sell', 'break', 'lend'],
		answer: 2
	},
	{
		q: 'A: Don\'t say anything to Dad about the surprise party! <br> B: Don\'t worry. He won\'t find (&emsp;&emsp;&emsp;&emsp;) about it from me.',
		options: ['within', 'through', 'out', 'near'],
		answer: 2
	},
	{
		q: 'A: Do you like (&emsp;&emsp;&emsp;&emsp;) in Japan, Kent? <br> B: Yes, I do.',
		options: ['live', 'lived', 'lives', 'living'],
		answer: 3
	},
	{
		q: 'A: Which shirt do you like? <br> B: I think the red one is  (&emsp;&emsp;&emsp;&emsp;) than the blue one.',
		options: ['nice', 'nicer', 'nicest', 'nicely'],
		answer: 1
	},
	{
		q: 'Last summer, Hiroshi\'s family traveled around Japan. This year they want to go (&emsp;&emsp;&emsp;&emsp;).',
		options: ['abroad', 'inside', 'other', 'similar'],
		answer: 0
	},
	{
		q: 'Bob (&emsp;&emsp;&emsp;&emsp;) five friends to his party.',
		options: ['made', 'visited', 'invited', 'spoke'],
		answer: 2
	},
	{
		q: 'I bought a T-shirt for my brother, but I bought the wrong size. It was too (&emsp;&emsp;&emsp;&emsp;) for him.',
		options: ['heavy', 'clear', 'tight', 'bright'],
		answer: 2
	},
	{
		q: 'Sarah saw some flowers by the road while she was taking a walk. She (&emsp;&emsp;&emsp;&emsp;) a few and took them home.',
		options: ['spent', 'wished', 'picked', 'guessed'],
		answer: 2
	},
	{
		q: 'Jenny saw her grandparents (&emsp;&emsp;&emsp;&emsp;) the first time in years. She missed them very much.',
		options: ['for', 'from', 'out', 'over'],
		answer: 0
	},
	{
		q: 'My little sister is (&emsp;&emsp;&emsp;&emsp;) of the dark, so she always sleeps with my parents.',
		options: ['brave', 'true', 'glad', 'afraid'],
		answer: 3
	},
	{
		q: 'Joseph lost his glasses again. He searched all (&emsp;&emsp;&emsp;&emsp;) the place, but he couldn\'t find them.',
		options: ['over', 'under', 'up', 'down'],
		answer: 0
	},
	{
		q: 'Last Saturday, my bicycle was (&emsp;&emsp;&emsp;&emsp;). I have to buy a new one.',
		options: ['steal', 'stole', 'stolen', 'stealing'],
		answer: 2
	},
	{
		q: 'Girl 1: I\'m having a party from one on Saturday. (&emsp;&emsp;&emsp;&emsp;) <br> Girl 2: I\'d love to. I\'ll bring a pie.',
		options: ['I hope you can come.', 'I\'d like that please.', 'You missed it.', 'Your bus comes soon.'],
		answer: 0
	},
	{
		q: 'Son: (&emsp;&emsp;&emsp;&emsp;) Mom? <br> Mother: First, wash these potatoes. Then, cut them into small pieces.',
		options: ['What did you cook for dinner,', 'What did you buy at the store,', 'What time will we have lunch,', 'What do you want me to do,'],
		answer: 3
	},
	{
		q: 'Son: Mom, will the zoo be open on New Year\'s Day? <br> Mother: (&emsp;&emsp;&emsp;&emsp;) Let\'s check on the Internet.',
		options: ['Have a great year.', 'I\'m not sure.', 'It happened yesterday.', 'I did my best.'],
		answer: 1
	},
	{
		q: 'Man: I\'m going skiing this Sunday. (&emsp;&emsp;&emsp;&emsp;) you should come with me. <br> Woman: That sounds fun. I\'d love to.',
		options: ['While you\'re at work,', 'Because your back hurts,', 'When you don\'t have time,', 'If you have no plans,'],
		answer: 3
	},
	{
		q: 'Man: I went hiking in Nagano last Saturday. <br> Woman: That\'s pretty far from here. (&emsp;&emsp;&emsp;&emsp;) <br> Man: No, I came back to Tokyo that evening.',
		options: ['Do you know the way?', 'Did you take a map?', 'Do you want to go together?', 'Did you stay there?'],
		answer: 3
	},
	{
		q: 'A: Oh no! My pen has no more ink! Do you have one that I can (&emsp;&emsp;&emsp;&emsp;)? <br> B: Yes, here you are.',
		options: ['tell', 'think', 'borrow', 'put'],
		answer: 2
	},
	{
		q: 'A: What happened, Sharon? Why is your dress so (&emsp;&emsp;&emsp;&emsp;)? <br> B: It was raining hard, and I fell off my bike.',
		options: ['tall', 'short', 'dirty', 'useful'],
		answer: 2
	},
	{
		q: 'A: Jane, how does this dress look on me?  <br> B: Really nice. Look in the (&emsp;&emsp;&emsp;&emsp;) over there.',
		options: ['center', 'counter', 'cloud', 'mirror'],
		answer: 3
	},
	{
		q: 'A: Do you know the new (&emsp;&emsp;&emsp;&emsp;) student from Japan? <br> B: Yes. His name is Kentaro. He\'s in my class.',
		options: ['cover', 'exchange', 'plan', 'surpise'],
		answer: 1
	},
	{
		q: 'A: Here\'s the salad dressing, Tony. (&emsp;&emsp;&emsp;&emsp;) it well before you use it. <br> B: All right, Mom.',
		options: ['Call', 'Build', 'Invite', 'Shake'],
		answer: 3
	},
	{
		q: 'A: Can I help with dinner, Mom?  <br> B: Sure. (&emsp;&emsp;&emsp;&emsp;) of all, cut these potatoes and onions.',
		options: ['First', 'More', 'Quick', 'Small'],
		answer: 0
	},
	{
		q: 'A: Mom, can we make an apple pie together?  <br> B: Sure. It\'s a  (&emsp;&emsp;&emsp;&emsp;) difficult, but I think we can do it.',
		options: ['high', 'few', 'much', 'little'],
		answer: 3
	},
	{
		q: 'A: I\'m going to study now, so please (&emsp;&emsp;&emsp;&emsp;) on my door if you need to talk to me. <br> B: OK, Mike.',
		options: ['knock', 'decide', 'agree', 'smell'],
		answer: 0
	},
	{
		q: 'A: Do you have time now, Doug?  <br> B: No, I\'m sorry.   (&emsp;&emsp;&emsp;&emsp;) fact, I have to leave for a meeting now. I\'ll call you later.',
		options: ['In', 'At', 'By', 'On'],
		answer: 0
	},
	{
		q: 'A: I don\'t know (&emsp;&emsp;&emsp;&emsp;) Central Park is. <br> B: It\'s near here. I\'ll show you.',
		options: ['who', 'where', 'when', 'why'],
		answer: 1
	},
	{
		q: 'A: How was the basketball tournament?  <br> B: Not good. We were the (&emsp;&emsp;&emsp;&emsp;) team there. We didn\'t win any games.',
		options: ['poor', 'worst', 'worse', 'bad'],
		answer: 1
	},
	{
		q: 'Janet is a (&emsp;&emsp;&emsp;&emsp;). She works for a newspaper. She often visits other countries and writes stories about them.',
		options: ['designer', 'guard', 'coach', 'journalist'],
		answer: 3
	},
	{
		q: 'Some people think we should try to (&emsp;&emsp;&emsp;&emsp;) old things. Others think people buy too many new things.',
		options: ['raise', 'rise', 'repeat', 'recycle'],
		answer: 3
	},
	{
		q: 'Emma went shopping at the new department store yesterday. She bought a jacket and a new (&emsp;&emsp;&emsp;&emsp;) of jeans.',
		options: ['piece', 'pair', 'slice', 'sheet'],
		answer: 1
	},
	{
		q: 'The town is famous for its beautiful old buildings. It has many houses (&emsp;&emsp;&emsp;&emsp;) in the last century.',
		options: ['build', 'builds', 'built', 'building'],
		answer: 2
	},
	{
		q: 'Woman: I want to go and see the dolphin show at the aquarium. Are you free this weekend? <br> Man: I\'m not sure. I\'ll check my schedule, and (&emsp;&emsp;&emsp;&emsp;)',
		options: ['I\'ll call you tonight.', 'you\'ll like the show.', 'I\'ll take it.', 'you can swim fast.'],
		answer: 0
	},
	{
		q: 'Woman: Thank you very much for giving me advice. <br> Man: (&emsp;&emsp;&emsp;&emsp;) Good luck with your interview tomorrow. <br> Woman: Thank you.',
		options: ['Not at all.', 'Let me see.', 'No, thanks.', 'You gave me one.'],
		answer: 0
	},
	{
		q: 'Man: I\'m going on vacation next month. <br> Woman: Great! (&emsp;&emsp;&emsp;&emsp;) <br> Man: I\'ll take a tour of South America.',
		options: ['Where\'s your passport?', 'When do you leave?', 'What are your plans?', 'How long is it?'],
		answer: 2
	},
	{
		q: 'Man: Are you ready to go to dinner? <br> Woman: Yes. (&emsp;&emsp;&emsp;&emsp;) <br> Man: Great idea! I don\'t want to walk in the rain, either.',
		options: ['Let\'s walk there.', 'Let\'s take a taxi.', 'Let\'s cook now.', 'Let\'s stay home.'],
		answer: 1
	},
	{
		q: 'Woman: Hi, John. What time is it? I forgot my watch. <br> Man: Sorry, Janet. I don\'t know. (&emsp;&emsp;&emsp;&emsp;) <br> Woman: No problem. I\'ll ask Peter.',
		options: ['That\'s interesting.', 'I can\'t call you.', 'It\'s too late.', 'I left mine at home.'],
		answer: 3
	},
	{
		q: 'A: Where are you going, Mom? <br> B: To the market to get some fresh vegetables. They were all grown by local (&emsp;&emsp;&emsp;&emsp;).',
		options: ['doctors', 'pilots', 'farmers', 'musicians'],
		answer: 2
	},
	{
		q: 'In summer, I often go running just before it gets (&emsp;&emsp;&emsp;&emsp;). It\'s too hot to run during the day.',
		options: ['young', 'quiet', 'dark', 'real'],
		answer: 2
	},
	{
		q: 'In Japan, (&emsp;&emsp;&emsp;&emsp;) are useful because they sell medicine, food, and drinks.',
		options: ['churches', 'drugstores', 'libraries', 'post offices'],
		answer: 1
	},
	{
		q: 'A: I love the beach. I want to stay here (&emsp;&emsp;&emsp;&emsp;). <br> B: Me, too. But we have to leave tomorrow.',
		options: ['forever', 'nearly', 'straight', 'exactly'],
		answer: 0
	},
	{
		q: 'Ryuji\'s dream is to become a famous sushi (&emsp;&emsp;&emsp;&emsp;).',
		options: ['carpenter', 'dentist', 'chef', 'singer'],
		answer: 2
	},
	{
		q: 'For English class, Kenji has to write five (&emsp;&emsp;&emsp;&emsp;) about himself. Tomorrow, he will read them in front of the class.',
		options: ['storms', 'calendars', 'sentences', 'centuries'],
		answer: 2
	},
	{
		q: 'A: Mr. Smith. Could you tell me the (&emsp;&emsp;&emsp;&emsp;) answer to this question? <br> B: Sure, David. Let me see it.',
		options: ['narrow', 'correct', 'weak', 'quiet'],
		answer: 1
	},
	{
		q: 'A: I can\'t wait for spring. <br> B: Me, neither. I\'m (&emsp;&emsp;&emsp;&emsp;) of this snow and cold weather.',
		options: ['upset', 'tired', 'silent', 'wrong'],
		answer: 1
	},
	{
		q: 'I couldn\'t sleep on the flight from New York, but I (&emsp;&emsp;&emsp;&emsp;) much better this morning. I slept really well last night.',
		options: ['cover', 'brush', 'feel', 'share'],
		answer: 2
	},
	{
		q: 'A: It\'s going to snow (&emsp;&emsp;&emsp;&emsp;) day on Saturday. <br> B: That\'s great. I\'m going skiing this weekend.',
		options: ['any', 'more', 'much', 'all'],
		answer: 3
	},
	{
		q: 'Next week, Dave\'s brother is getting (&emsp;&emsp;&emsp;&emsp;). Dave will give a speech at the wedding.',
		options: ['collected', 'raised', 'married', 'crowded'],
		answer: 2
	},
	{
		q: 'A: Peter, where were you? I was (&emsp;&emsp;&emsp;&emsp;) about you! <br> B: Sorry, Mom. I went to the library after school.',
		options: ['worried', 'excited', 'surprised', 'interested'],
		answer: 0
	},
	{
		q: 'A: Has Mom already (&emsp;&emsp;&emsp;&emsp;) to work? <br> B: Yes, she left early today. She has an important meeting.',
		options: ['go', 'going', 'went', 'gone'],
		answer: 3
	},
	{
		q: 'A: Guess what! I (&emsp;&emsp;&emsp;&emsp;) second prize in the speech contest. <br> B: That\'s great. I\'m so proud of you.',
		options: ['win', 'won', 'winning', 'to win'],
		answer: 1
	},
	{
		q: 'A: Do you think that dogs are (&emsp;&emsp;&emsp;&emsp;) than cats? <br> B: I\'m not sure.',
		options: ['smart', 'smarter', 'smartest', 'most'],
		answer: 1
	},
	{
		q: 'Woman 1: I often have lunch at the Treetop Café. <br> Woman 2: I do, too. (&emsp;&emsp;&emsp;&emsp;) <br> Woman 1: OK.',
		options: ['Have you tried the spaghetti there?', 'May I take your order?', 'Shall we go there together sometime?', 'Can you make some for me?'],
		answer: 2
	},
	{
		q: 'Mother: I\'m going to order the chicken curry. What about you, Fred? <br> Son: (&emsp;&emsp;&emsp;&emsp;) It looks delicious.',
		options: ['I\'ll have the same.', 'I went to a restaurant.', 'Not at the moment.', 'I hope you\'re right.'],
		answer: 0
	},
	{
		q: 'Boy: I called you last night, but you didn\'t answer the phone. <br> Girl: Sorry, (&emsp;&emsp;&emsp;&emsp;) I have to give it to my English teacher today.',
		options: ['I forgot about your question.', 'I was writing a report.', 'I don\'t have a phone.', 'I don\'t know the answer.'],
		answer: 1
	},
	{
		q: 'Grandmother: I can\'t hear the TV, Tony. It\'s very quiet. (&emsp;&emsp;&emsp;&emsp;) <br> Grandson: Sure, Grandma. I\'ll do it right now.',
		options: ['May I borrow your radio?', 'Is it too loud for you?', 'Do you like this program?', 'Can you turn it up for me?'],
		answer: 3
	},
	{
		q: 'Daughter: Can we go shopping for clothes tomorrow? <br> Father: (&emsp;&emsp;&emsp;&emsp;) I\'m really busy this week.',
		options: ['You\'re probably right.', 'Maybe some other time.', 'They\'re in my bedroom.', 'Thanks for this present.'],
		answer: 1
	},
	{
		q: 'Last Friday, we had a (&emsp;&emsp;&emsp;&emsp;) lunch to welcome the new member of our team. He just started working at the company.',
		options: ['special', 'deep', 'strong', 'weak'],
		answer: 0
	},
	{
		q: 'Tomorrow, we\'ll go to a zoo for children. They can (&emsp;&emsp;&emsp;&emsp;) some of the animals there.',
		options: ['build', 'close', 'touch', 'shout'],
		answer: 2
	},
	{
		q: 'Some people like to run for about 30 minutes every day because they think it is (&emsp;&emsp;&emsp;&emsp;).',
		options: ['expensive', 'afraid', 'crowded', 'healthy'],
		answer: 3
	},
	{
		q: 'My friend David is (&emsp;&emsp;&emsp;&emsp;). He always gets a good score on his math tests.',
		options: ['clever', 'sunny', 'fast', 'clear'],
		answer: 0
	},
	{
		q: 'This comic book is funny. I (&emsp;&emsp;&emsp;&emsp;) a lot when I was reading it.',
		options: ['drove', 'heard', 'played', 'laughed'],
		answer: 3
	},
	{
		q: 'When Taichi moved to Canada, he wasn\'t (&emsp;&emsp;&emsp;&emsp;) to speak much English. But now, he speaks it very well.',
		options: ['absent', 'angry', 'able', 'agree'],
		answer: 2
	},
	{
		q: 'Harry\'s mother (&emsp;&emsp;&emsp;&emsp;) a message for him. She told him to walk to dog before dinner.',
		options: ['met', 'closed', 'left', 'held'],
		answer: 2
	},
	{
		q: 'Mariko doesn\'t (&emsp;&emsp;&emsp;&emsp;) much money on lunch because she always brings her lunch from home.',
		options: ['have', 'catch', 'know', 'spend'],
		answer: 3
	},
	{
		q: 'Yesterday, Brian was sick (&emsp;&emsp;&emsp;&emsp;) bed, so he didn\'t go to school today.',
		options: ['above', 'in', 'on', 'by'],
		answer: 1
	},
	{
		q: 'Our school is planning an event to collect plastic bottles. A local artist will (&emsp;&emsp;&emsp;&emsp;) them into art.',
		options: ['recycles', 'recycled', 'recycle', 'recycling'],
		answer: 2
	},
	{
		q: 'A: Have you (&emsp;&emsp;&emsp;&emsp;) Dad\'s present yet? <br> B: No, I\'ll do that tonight.',
		options: ['contacted', 'invited', 'wrapped', 'climbed'],
		answer: 2
	},
	{
		q: 'A: Have you washed the dishes yet? <br> B: Yes, I\'ve (&emsp;&emsp;&emsp;&emsp;) done that, and I\'ve cleaned the living room floor, too.',
		options: ['already', 'soon', 'can\'t', 'ago'],
		answer: 0
	},
	{
		q: 'A: Did you make this yogurt, Grandma? <br> B: Yes, it\'s easy. It\'s made (&emsp;&emsp;&emsp;&emsp;) milk.',
		options: ['under', 'from', 'before', 'over'],
		answer: 1
	},
	{
		q: 'A: You have a really nice house, Akiko. <br> B: Thank you. It was (&emsp;&emsp;&emsp;&emsp;) by my grandfather.',
		options: ['build', 'built', 'to build', 'building'],
		answer: 1
	},
	{
		q: 'A: Do you know (&emsp;&emsp;&emsp;&emsp;) the next bus to the airport leaves? <br> B: Yes. In 15 minutes.',
		options: ['which', 'where', 'when', 'who'],
		answer: 2
	},
	{
		q: 'Father: Have you finished your homework? <br> Daughter: No, (&emsp;&emsp;&emsp;&emsp;) I\'ll finish it after dinner.',
		options: ['not so bad.', 'not yet.', 'I\'m very full.', 'I\'m from here.'],
		answer: 1
	},
	{
		q: 'Woman: Excuse me. I like this hat. May I try it on, please? <br> Salesclerk: Certainly. (&emsp;&emsp;&emsp;&emsp;)',
		options: ['That\'s kind of you.', 'Have a good day.', 'The mirror is over there.', 'It\'s always open.'],
		answer: 2
	},
	{
		q: 'Girl 1: I didn\'t know you had a violin. (&emsp;&emsp;&emsp;&emsp;) <br> Girl 2: Only once or twice a month.',
		options: ['When did you get it?', 'How often do you play it?', 'Was it a present?', 'Is it an expensive one?'],
		answer: 1
	},
	{
		q: 'Clerk: Welcome to the Whitesnake Jazz Festival. Do you have a ticket ma\'am? <br> Woman: No. (&emsp;&emsp;&emsp;&emsp;) <br> Clerk: At the blue tent over there.',
		options: ['What color are they?', 'Where can I buy one?', 'Where\'s my seat?', 'How much are they?'],
		answer: 1
	},
	{
		q: 'Mother: Why is you baseball cap on the sofa? Take it to your room. <br> Son: (&emsp;&emsp;&emsp;&emsp;) I have practice at three.',
		options: ['We won again.', 'Did you look for it over there?', 'I\'m going to wear it today.', 'Will you come and watch?'],
		answer: 2
	},
	{
		q: 'A: It\'s too cold to go swimming. <br> B: I know. Let\'s stay home and watch TV (&emsp;&emsp;&emsp;&emsp;).',
		options: ['either', 'almost', 'instead', 'before'],
		answer: 2
	},
	{
		q: 'A: Excuse me. I want to try on this coat. Where\'s the (&emsp;&emsp;&emsp;&emsp;) room? <br> B: It\'s over there sir.',
		options: ['putting', 'picking', 'hitting', 'fitting'],
		answer: 3
	},
	{
		q: 'A: Mom, I want to take a shower. Are there any clean (&emsp;&emsp;&emsp;&emsp;)? <br> B: Yes, Chris. There are some in the drawer.',
		options: ['shampoo', 'floors', 'handles', 'towels'],
		answer: 3
	},
	{
		q: 'A: Are you looking for something, Paul? <br> B: Yes, my bicycle (&emsp;&emsp;&emsp;&emsp;). I\'ve looked in all my pockets and my bag.',
		options: ['type', 'line', 'job', 'key'],
		answer: 3
	},
	{
		q: 'A: Ken. Clean your shoes before you go to school. They\'re (&emsp;&emsp;&emsp;&emsp;). <br> B: All right, Dad. I\'ll do it.',
		options: ['dirty', 'sick', 'round', 'hard'],
		answer: 0
	},
	{
		q: 'A: Where did your parents first meet (&emsp;&emsp;&emsp;&emsp;) other? <br> B: They met in high school.',
		options: ['each', 'so', 'every', 'many'],
		answer: 0
	},
	{
		q: 'A: Do you know (&emsp;&emsp;&emsp;&emsp;) made this dessert? It\'s amazing! <br> B: Susan did. She\'s a great cook.',
		options: ['when', 'who', 'whose', 'how'],
		answer: 1
	},
	{
		q: 'A: Futa, your brother goes to university, (&emsp;&emsp;&emsp;&emsp;) he? <br> B: Yes, he\'s graduating this year.',
		options: ['wasn\'t', 'doesn\'t', 'won\'t', 'can\'t'],
		answer: 1
	},
	{
		q: 'Can you tell me the (&emsp;&emsp;&emsp;&emsp;) of this French word? I don\'t understand it.',
		options: ['dictionary', 'size', 'meaning', 'reason'],
		answer: 2
	},
	{
		q: 'It was a quiet and (&emsp;&emsp;&emsp;&emsp;) night, so I slept very well.',
		options: ['close', 'angry', 'peaceful', 'difficult'],
		answer: 2
	},
	{
		q: 'Tom\'s parents were very proud (&emsp;&emsp;&emsp;&emsp;) him when he passed his exam.',
		options: ['by', 'of', 'on', 'with'],
		answer: 1
	},
	{
		q: 'My new telephone is just the (&emsp;&emsp;&emsp;&emsp;) as my father\'s.',
		options: ['size', 'same', 'more', 'big'],
		answer: 1
	},
	{
		q: 'Mike is (&emsp;&emsp;&emsp;&emsp;) in computers, but he doesn\'t have one.',
		options: ['excited', 'interested', 'good', 'difficult'],
		answer: 1
	},
	{
		q: 'My mom broke her (&emsp;&emsp;&emsp;&emsp;). She couldn\'t take us to the shopping mall on Sunday because she had to work.',
		options: ['pollution', 'promise', 'problem', 'purpose'],
		answer: 1
	},
	{
		q: 'Kenta  went to school early today (&emsp;&emsp;&emsp;&emsp;) basketball.',
		options: ['to practice', 'practiced', 'practice', 'practicing'],
		answer: 0
	},
	{
		q: 'Salesclerk: Good morning, sir. Can I help you? <br> Customer: No, thanks. I\'m just looking. <br> Salesclerk: All right. Please tell me (&emsp;&emsp;&emsp;&emsp;)',
		options: ['if I have one.', 'when it will arrive.', 'if you need me.', 'when you can come.'],
		answer: 2
	},
	{
		q: 'Man: Why don\'t we go out to dinner tonight? <br> Woman: OK. (&emsp;&emsp;&emsp;&emsp;) <br> Man: Sounds good.',
		options: ['What about Italian food?', 'Let\'s eat at home.', 'Can you pass the salt?', 'I\'ll clean the table.'],
		answer: 0
	},
	{
		q: 'Husband: Do you like any of the raincoats in this shop? <br> Wife: (&emsp;&emsp;&emsp;&emsp;) I think I\'ll buy it.',
		options: ['It rains a lot during winter.', 'It was a gift from my sister.', 'The red one over there is nice.', 'The sale finished last weekend.'],
		answer: 2
	},
	{
		q: 'Boy: Hurry up, Patty. We need to go to math class. <br> Girl: (&emsp;&emsp;&emsp;&emsp;) I have to get my calculator from my locker.',
		options: ['Nine o\'clock.', 'Just a little.', 'I know the answer.', 'Wait a minute.'],
		answer: 3
	}
]
