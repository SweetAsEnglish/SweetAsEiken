

// Array of Objects
const quiz = [
	{
		q: 'My father is a (&emsp;&emsp;&emsp;&emsp;) of a sports club. He plays tennis there every 	Wednesday night.',
		options: ['festival', 'picnic', 'member', 'group'],
		answer: 2
	},
	{
		q: 'Mr. Clark told us many interesting (&emsp;&emsp;&emsp;&emsp;) about his trip to India.',
		options: ['pictures', 'books', 'stories', 'magazines'],
		answer: 2
	},
	{
		q: 'It\'s snowing a lot today, so please drive (&emsp;&emsp;&emsp;&emsp;).',
		options: ['slowly', 'freely', 'coldly', 'busily'],
		answer: 0
	},
	{
		q: 'In spring, Jane likes to walk in her grandmother\'s (&emsp;&emsp;&emsp;&emsp;). She enjoys looking at the beautiful flowers there.',
		options: ['stone', 'sky', 'garden', 'wall'],
		answer: 2
	},
	{
		q: 'Many girls in my class have (&emsp;&emsp;&emsp;&emsp;) hair.',
		options: ['late', 'slow', 'short', 'busy'],
		answer: 2
	},
	{
		q: 'A: Do you live in a city? <br> B: No. I live in a small (&emsp;&emsp;&emsp;&emsp;).',
		options: ['ticket', 'town', 'hobby', 'holiday'],
		answer: 1
	},
	{
		q: 'I (&emsp;&emsp;&emsp;&emsp;) Nancy\'s notebook. It was on Mary\'s desk',
		options: ['stayed', 'found', 'stopped', 'went'],
		answer: 1
	},
	{
		q: 'Dennis went to Japan for a year in August. He was sad when he (&emsp;&emsp;&emsp;&emsp;) goodbye to his family.',
		options: ['ended', 'hoped', 'told', 'said'],
		answer: 3
	},
	{
		q: 'The new Chinese restaurant has many kinds (&emsp;&emsp;&emsp;&emsp;) dishes on the menu. They are all great.',
		options: ['from', 'to', 'of', 'by'],
		answer: 2
	},
	{
		q: 'Ryusuke is a pilot. He goes all (&emsp;&emsp;&emsp;&emsp;) the world for his job.',
		options: ['away', 'over', 'into', 'after'],
		answer: 1
	},
	{
		q: 'A: What do you and your friends usually talk (&emsp;&emsp;&emsp;&emsp;), Linda? <br> B: Our favorite books and movies.',
		options: ['after', 'as', 'against', 'about'],
		answer: 3
	},
	{
		q: 'Last night my grandfather ate sushi (&emsp;&emsp;&emsp;&emsp;) the first time. He loved it.',
		options: ['from', 'before', 'for', 'after'],
		answer: 2
	},
	{
		q: 'I like this cap (&emsp;&emsp;&emsp;&emsp;) than that one.',
		options: ['good', 'well', 'better', 'best'],
		answer: 2
	},
	{
		q: 'A: It\'s Sunday today, Ben. (&emsp;&emsp;&emsp;&emsp;) are you going to school? <br> B: The soccer club has practice today.',
		options: ['When', 'Why', 'What', 'Where'],
		answer: 1
	},
	{
		q: 'Carol (&emsp;&emsp;&emsp;&emsp;) her uncle Jon at the station yesterday.',
		options: ['meeting', 'meet', 'met', 'meets'],
		answer: 2
	},
	{
		q: 'A: Where shall we eat lunch? <br> B: Let\'s eat at the (&emsp;&emsp;&emsp;&emsp;). The food is good there.',
		options: ['fire station', 'cafeteria', 'post office', 'bus stop'],
		answer: 1
	},
	{
		q: 'A: It\'s going to rain this afternoon. Take your (&emsp;&emsp;&emsp;&emsp;) with you. <br> B: All right, Mom.',
		options: ['mirror', 'umbrella', 'shower', 'cloud'],
		answer: 1
	},
	{
		q: 'Now everybody, look at the world (&emsp;&emsp;&emsp;&emsp;) on page 10. Where is China?',
		options: ['holiday', 'map', 'shower', 'movie'],
		answer: 1
	},
	{
		q: 'The train (&emsp;&emsp;&emsp;&emsp;) at the station very early in the morning.',
		options: ['made', 'worked', 'gave', 'arrived'],
		answer: 3
	},
	{
		q: 'A: Excuse me. You (&emsp;&emsp;&emsp;&emsp;) some money. <br> B: Oh, thank you!',
		options: ['learned', 'checked', 'dropped', 'brushed'],
		answer: 2
	},
	{
		q: 'A: Jack. Is this cap yours(&emsp;&emsp;&emsp;&emsp;) your brother\'s? <br> B: It\'s my brother\'s.',
		options: ['to', 'or', 'so', 'but'],
		answer: 1
	},
	{
		q: 'A: Oh, no! It\'s raining, Lisa. <br> B: It\'ll (&emsp;&emsp;&emsp;&emsp;) soon, Jim. Let\'s wait in that coffee shop.',
		options: ['stop', 'study', 'try', 'hear'],
		answer: 0
	},
	{
		q: 'My family likes sports. For (&emsp;&emsp;&emsp;&emsp;), Dad likes swimming, Mom plays tennis, and I play soccer.',
		options: ['reason', 'answer', 'question', 'example'],
		answer: 3
	},
	{
		q: 'Jeff left the party at 8:00. He wanted to (&emsp;&emsp;&emsp;&emsp;) home early and go to bed.',
		options: ['meet', 'put', 'send', 'get'],
		answer: 3
	},
	{
		q: 'Mom\'s lemon cake is not as good (&emsp;&emsp;&emsp;&emsp;) her chocolate cake.',
		options: ['to', 'of', 'as', 'by'],
		answer: 2
	},
	{
		q: 'Patrick is very (&emsp;&emsp;&emsp;&emsp;) in art. He draws or paints pictures every day.',
		options: ['fast', 'interested', 'clean', 'healthy'],
		answer: 1
	},
	{
		q: 'A: Did you enjoy the speech in English? <br> B: Yes, but I wasn\'t able (&emsp;&emsp;&emsp;&emsp;) understand all of it.',
		options: ['for', 'on', 'to', 'at'],
		answer: 2
	},
	{
		q: 'When Sachiko was visiting India, she (&emsp;&emsp;&emsp;&emsp;) her camera.',
		options: ['lost', 'lose', 'to lose', 'losing'],
		answer: 0
	},
	{
		q: 'There (&emsp;&emsp;&emsp;&emsp;) a new swimming pool near our house.',
		options: ['be', 'are', 'does', 'is'],
		answer: 3
	},
	{
		q: 'A: Enjoy your trip. <br> B: Thanks. I (&emsp;&emsp;&emsp;&emsp;) send you a postcard.',
		options: ['are', 'am', 'do', 'will'],
		answer: 3
	},
	{
		q: 'I don\'t know this word. I need a (&emsp;&emsp;&emsp;&emsp;).',
		options: ['dictionary', 'chair', 'desk', 'stamp'],
		answer: 0
	},
	{
		q: 'The movie (&emsp;&emsp;&emsp;&emsp;) at 8:00, but I did\'t get to the theater until 8:20.',
		options: ['met', 'began', 'invited', 'saw'],
		answer: 1
	},
	{
		q: 'A: Look at that man. He\'s a (&emsp;&emsp;&emsp;&emsp;) sumo wrestler. <br> B: Wow! He\'s big!',
		options: ['famous', 'dry', 'left', 'long'],
		answer: 0
	},
	{
		q: 'A: Mom, there\'s no (&emsp;&emsp;&emsp;&emsp;) in the bathroom. I need to take a shower. <br> B: OK. I\'ll get some for you.',
		options: ['store', 'stop', 'ship', 'soap'],
		answer: 3
	},
	{
		q: 'A: What do you do in your (&emsp;&emsp;&emsp;&emsp;) time, Ben? <br> B: I listen to music.',
		options: ['good', 'high', 'free', 'short'],
		answer: 2
	},
	{
		q: 'A: How was your fishing trip last weekend, John? Did you (&emsp;&emsp;&emsp;&emsp;) any fish? <br> B: Yes! Five big ones.',
		options: ['catch', 'arrive', 'close', 'think'],
		answer: 0
	},
	{
		q: 'The (&emsp;&emsp;&emsp;&emsp;) was nice yesterday, so we went to the zoo.',
		options: ['phone', 'hope', 'weather', 'plane'],
		answer: 2
	},
	{
		q: 'Judy calls her friend Emily every weekend. They talk (&emsp;&emsp;&emsp;&emsp;) a long time.',
		options: ['on', 'as', 'in', 'for'],
		answer: 3
	},
	{
		q: 'A: I practice tennis every day, but I\'m not good at it. <br> B: Don\'t give (&emsp;&emsp;&emsp;&emsp;). You\'ll get better.',
		options: ['up', 'of', 'over', 'under'],
		answer: 0
	},
	{
		q: 'Natsuyo stayed (&emsp;&emsp;&emsp;&emsp;) a host family in Spain last year.',
		options: ['with', 'into', 'from', 'through'],
		answer: 0
	},
	{
		q: 'Lisa must go (&emsp;&emsp;&emsp;&emsp;) to her hometown because her father is sick.',
		options: ['fine', 'back', 'little', 'long'],
		answer: 1
	},
	{
		q: 'A: Did you go shopping last Sunday, Judy? <br> B: No. I watched a soccer game on TV (&emsp;&emsp;&emsp;&emsp;) home.',
		options: ['up', 'down', 'on', 'at'],
		answer: 3
	},
	{
		q: 'Last month, Taro\'s grandmother (&emsp;&emsp;&emsp;&emsp;) him and his sister to Disneyland.',
		options: ['take', 'takes', 'took', 'taking'],
		answer: 2
	},
	{
		q: 'A: How did you get to the party? <br> B: My father brought (&emsp;&emsp;&emsp;&emsp;) by car.',
		options: ['I', 'me', 'my', 'mine'],
		answer: 1
	},
	{
		q: 'The students stopped (&emsp;&emsp;&emsp;&emsp;) when the teacher came into the classroom.',
		options: ['talking', 'talks', 'talk', 'talked'],
		answer: 0
	},
	{
		q: 'Girl 1: Whose car is that? <br> Girl 2: (&emsp;&emsp;&emsp;&emsp;) He\'s visiting from Miami.',
		options: ['I took the bus.', 'My brother can\'t drive.', 'It\'s my uncle\'s.', 'Say hello to your dad.'],
		answer: 2
	},
	{
		q: 'Boy 1: My dad will run a marathon this weekend. <br> Boy 2: Really? (&emsp;&emsp;&emsp;&emsp;) <br> Boy 1: Yes, every morning.',
		options: ['Are those his shoes?', 'Are you ready now?', 'Does he run often?', 'Do you have a hobby?'],
		answer: 2
	},
	{
		q: 'Daughter: Dad, is this your pen? <br> Father: Yes, it is. (&emsp;&emsp;&emsp;&emsp;) <br> Daughter: On the table.',
		options: ['What do you need?', 'How many do you have?', 'Who bought it?', 'Where was it?'],
		answer: 3
	},
	{
		q: 'Mother: Did you enjoy watching the tennis match, Scott? <br> Son: (&emsp;&emsp;&emsp;&emsp;) My favorite player won.',
		options: ['It was really exciting.', 'Thanks for the racket.', 'I\'m in the baseball club.', 'It starts tomorrow.'],
		answer: 0
	},
	{
		q: 'Father: Good morning, Paul. (&emsp;&emsp;&emsp;&emsp;) <br> Son:  I\'m not hungry. I just want a glass of juice.',
		options: ['What would you like for breakfast?', 'What did you buy at the store?', 'How much was that cup?', 'How will you go to school today?'],
		answer: 0
	},
	{
		q: 'Girl: Why did you go home early yesterday? <br> Boy: (&emsp;&emsp;&emsp;&emsp;) but I\'m better now.',
		options: ['I took the train,', 'I had a cold,', 'My bus was late,', 'That\'s too bad,'],
		answer: 1
	},
	{
		q: 'Wife: Do you want some coffee, Jim? <br> Husband: (&emsp;&emsp;&emsp;&emsp;) I just had a cup of coffee.',
		options: ['You\'re welcome.', 'No, thanks.', 'It\'s me.', 'No, I didn\'t.'],
		answer: 1
	},
	{
		q: 'Man: Excuse me. I want to go to the CBA Bank. Is it near here? <br> Woman: Yes, (&emsp;&emsp;&emsp;&emsp;) ',
		options: ['I\'m happy to meet you.', 'it\'s on the next corner.', 'I\'ll see you then.', 'it\'s a very nice day today.'],
		answer: 1
	},
	{
		q: 'Woman: How was your trip to France? <br> Man: (&emsp;&emsp;&emsp;&emsp;) and I met some nice people there.',
		options: ['She is my new friend,', 'It was too far,', 'I stayed home,', 'It was a lot of fun,'],
		answer: 3
	},
	{
		q: 'Woman: Are you a science teacher? <br> Man: (&emsp;&emsp;&emsp;&emsp;) I love teaching.',
		options: ['Yes, that\'s right.', 'Yes, every month.', 'I have no idea.', 'I\'m late for school.'],
		answer: 0
	},
	{
		q: 'Boy 1: Is that your new coat, Tom? (&emsp;&emsp;&emsp;&emsp;) <br> Boy 2:  Thanks. I like it, too.',
		options: ['It\'s really nice.', 'It\'s cloudy today.', 'I\'ll see you soon.', 'I have one, too.'],
		answer: 0
	},
	{
		q: 'Mother: You don\'t look well, Brad. Are you OK?  <br> Son:  (&emsp;&emsp;&emsp;&emsp;) I didn\'t sleep well last night.',
		options: ['I\'m tired.', 'It\'s on TV.', 'This is for you.', 'It\'s time for dinner.'],
		answer: 0
	},
	{
		q: 'Man: See you next week, Linda. Have a nice weekend.  <br> Woman: Thanks, John. (&emsp;&emsp;&emsp;&emsp;) ',
		options: ['Just a little.', 'That\'s all.', 'You, too.', 'You\'re right.'],
		answer: 2
	},
	{
		q: 'Brother: Are these your socks? <br> Sister: Yes. (&emsp;&emsp;&emsp;&emsp;) <br> Brother: Under the sofa.',
		options: ['Did you wear them?', 'Can you wash them?', 'Whose are they?', 'Where were they?'],
		answer: 3
	},
	{
		q: 'Son: When does this TV program finish?  <br> Mother:  (&emsp;&emsp;&emsp;&emsp;) Let\'s make dinner after that.',
		options: ['In about 10 minutes.', 'Two hours ago.', 'Every Monday night.', 'Before I went shopping.'],
		answer: 0
	},
	{
		q: 'A: How much time do we have before the (&emsp;&emsp;&emsp;&emsp;) train comes? <br> B: About five minutes.',
		options: ['lost', 'clear', 'next', 'heavy'],
		answer: 2
	},
	{
		q: 'A: How long did you play tennis today? <br> B: (&emsp;&emsp;&emsp;&emsp;) two hours.',
		options: ['For', 'Since', 'With', 'Through'],
		answer: 0
	},
	{
		q: 'A: Oh no! I wrote the wrong date. Can I use your (&emsp;&emsp;&emsp;&emsp;)? <br> B: Sure. Here you go.',
		options: ['belt', 'eraser', 'coat', 'map'],
		answer: 1
	},
	{
		q: 'In winter, the (&emsp;&emsp;&emsp;&emsp;) is very cold in some cities in Canada.',
		options: ['hometown', 'address', 'problem', 'temperature'],
		answer: 3
	},
	{
		q: 'Every year, I (&emsp;&emsp;&emsp;&emsp;) flowers to my grandmother. Her birthday is on Christmas Day.',
		options: ['send', 'keep', 'believe', 'forget'],
		answer: 0
	},
	{
		q: 'A: I\'m so (&emsp;&emsp;&emsp;&emsp;), but I need to finish my homework. <br> B: Go to bed and wake up early tomorrow.',
		options: ['sleepy', 'local', 'boring', 'rich'],
		answer: 0
	},
	{
		q: 'A: Can we go shopping this weekend, Mom? <br> B: Let\'s go on Sunday. I\'m (&emsp;&emsp;&emsp;&emsp;) on Saturday.',
		options: ['fast', 'weak', 'busy', 'careful'],
		answer: 2
	},
	{
		q: 'A: You\'re running too fast. Can you slow (&emsp;&emsp;&emsp;&emsp;), please? <br> B: Sure.',
		options: ['down', 'about', 'long', 'often'],
		answer: 0
	},
	{
		q: 'A: Turn off the TV. Come here (&emsp;&emsp;&emsp;&emsp;) once and help me. <br> B: OK, Mom.',
		options: ['as', 'at', 'in', 'of'],
		answer: 1
	},
	{
		q: 'Ms. Barton has a good (&emsp;&emsp;&emsp;&emsp;) for the school concert. She wants to speak to us after class.',
		options: ['way', 'side', 'idea', 'rice'],
		answer: 2
	},
	{
		q: 'A: Let\'s watch the news together, Grandpa. <br> B: Just a (&emsp;&emsp;&emsp;&emsp;). I\'ll get my glasses.',
		options: ['trouble', 'lesson', 'moment', 'pocket'],
		answer: 2
	},
	{
		q: 'A: Your brother looks (&emsp;&emsp;&emsp;&emsp;) a famous singer. <br> B: Really? I\'ll tell him.',
		options: ['on', 'about', 'like', 'to'],
		answer: 2
	},
	{
		q: 'A: Where are you going? <br> B: I\'m going (&emsp;&emsp;&emsp;&emsp;) video games at Joe\'s house. <br> A: Come home before dinner.',
		options: ['to play', 'played', 'playing', 'plays'],
		answer: 0
	},
	{
		q: 'My uncle likes (&emsp;&emsp;&emsp;&emsp;) people, so he became a police officer.',
		options: ['help', 'helps', 'helping', 'helped'],
		answer: 2
	},
	{
		q: 'A: (&emsp;&emsp;&emsp;&emsp;) I put this hat in a box for you, sir? <br> B: Yes, please. It\'s a present for my son.',
		options: ['Shall', 'Does', 'Have', 'Be'],
		answer: 0
	},
	{
		q: 'Daughter: I went swimming at the city pool today. <br> Father: That sounds fun. (&emsp;&emsp;&emsp;&emsp;) <br> Daughter: No, I walked.',
		options: ['Is it new?', 'Did you take the bus?', 'Can I come with you?', 'Was it sunny?'],
		answer: 1
	},
	{
		q: 'Son: Do you want to play this computer game with me, Mom? <br> Mother: (&emsp;&emsp;&emsp;&emsp;) <br> Son: Don\'t worry. It\'s easy.',
		options: ['I bought one, too.', 'I use one at work.', 'It looks really difficult.', 'It\'s my favorite game.'],
		answer: 2
	},
	{
		q: 'Wife: This curry is really delicious. (&emsp;&emsp;&emsp;&emsp;) <br> Husband: Of course. Here you are.',
		options: ['How did you make it?', 'Can I have some more?', 'How much was it?', 'Can you do it for me?'],
		answer: 1
	},
	{
		q: 'Boy 1: How many students are there in the English club? <br> Boy 2: (&emsp;&emsp;&emsp;&emsp;) <br> Boy 1: Wow! That\'s a lot.',
		options: ['Only five dollars.', 'Twice a week.', 'At 2:45.', 'About 30.'],
		answer: 3
	},
	{
		q: 'Mother: Do you want something to eat, Chris? <br> Son: Yes, please. (&emsp;&emsp;&emsp;&emsp;)',
		options: ['You can use mine.', 'I\'d like some potato chips.', 'It\'s by the supermarket.', 'I\'ll ask her a question.'],
		answer: 1
	},
	{
		q: 'Cindy\'s teacher was (&emsp;&emsp;&emsp;&emsp;) because Cindy forgot to do her homework again.',
		options: ['rich', 'easy', 'angry', 'happy'],
		answer: 2
	},
	{
		q: 'Paris has many famous art (&emsp;&emsp;&emsp;&emsp;), so I want to visit there someday.',
		options: ['museums', 'windows', 'pools', 'towels'],
		answer: 0
	}
]