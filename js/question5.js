

// Array of Objects
const quiz = [
{
	q:'A: When do you usually have (&emsp;&emsp;&emsp;&emsp;)? <br> B: At 12:30. I eat it in my classroom.',
	options:['lunch','hour','study','morning'],
	answer: 0
},
{
	q:'A: What color do you like? <br> B: I like (&emsp;&emsp;&emsp;&emsp;).',
	options:['trees','music','black','birds'],
	answer: 2
},
{
	q:'A: I want a glass of (&emsp;&emsp;&emsp;&emsp;), Mom. <br> B: Here you are, Tom.',
	options:['milk','meat','bread','fish'],
	answer: 0
},
{
	q:'A: Where is your dog? <br> B: He\'s (&emsp;&emsp;&emsp;&emsp;) the chair.',
	options:['about','to','for','under'],
	answer: 3
},
{
	q:'A: Bye, Peter. <br> B: Bye, Sam. (&emsp;&emsp;&emsp;&emsp;) you tomorrow.',
	options:['Read','Use','See','Open'],
	answer: 2
},
{
	q:'A: How (&emsp;&emsp;&emsp;&emsp;) is this swimming pool? <br> B: It\'s 50 meters.',
	options:['old','cold','long','young'],
	answer: 2
},
{
	q:'A: Look (&emsp;&emsp;&emsp;&emsp;) that bird, Mom. <br> B: It\'s very pretty.',
	options:['at','of','with','in'],
	answer: 0
},
{
	q:'A: (&emsp;&emsp;&emsp;&emsp;) phone is this? <br> B: It\'s Bill\'s.',
	options:['When','Where','Whose','How'],
	answer: 2
},
{
	q:'Sam likes sports and can (&emsp;&emsp;&emsp;&emsp;) very fast.',
	options:['run','sleep','see','rain'],
	answer: 0
},
{
	q:'Jack is on the school tennis (&emsp;&emsp;&emsp;&emsp;).',
	options:['team','pool','box','home'],
	answer: 0
},
{
	q:'Lucy plays tennis (&emsp;&emsp;&emsp;&emsp;) school every day.',
	options:['with','after','on','about'],
	answer: 1
},
{
	q:'My name is Linda Ford. I\'m (&emsp;&emsp;&emsp;&emsp;) Australia.',
	options:['from','to','out','down'],
	answer: 0
},
{
	q:'I have two brothers. (&emsp;&emsp;&emsp;&emsp;) names are Ben and Steve.',
	options:['My','Your','Our','Their'],
	answer: 3
},
{
	q:'Please (&emsp;&emsp;&emsp;&emsp;) quiet in the library.',
	options:['be','is','am','are'],
	answer: 0
},
{
	q:'The eighth month of the year is (&emsp;&emsp;&emsp;&emsp;).',
	options:['May','June','July','August'],
	answer: 3
},
{
	q:'Girl: Hi, my name is Sally. (&emsp;&emsp;&emsp;&emsp;) <br> Boy: My name is Bill.',
	options:['What\'s your name?','How old are you?','Where\'s your house?','When\'s your birthday?'],
	answer: 0
},
{
	q:'Girl: Do you like my new skirt, Dad? <br> Father: (&emsp;&emsp;&emsp;&emsp;)',
	options:['I\'m fine.','You\'re welcome.','Yes, it\'s nice.','No, it\'s not.'],
	answer: 2
},
{
	q:'Father: Who is the letter from, Judy? <br> Girl: (&emsp;&emsp;&emsp;&emsp;)',
	options:['It\'s from Grandma.','I like her.','To the station.','In Tokyo.'],
	answer: 0
},
{
	q:'Girl 1: What does your sister do on Saturdays? <br> Girl 2: (&emsp;&emsp;&emsp;&emsp;)',
	options:['Thank you very much.','She plays with her dog.','It\'s January 11.','It\'s in the afternoon.'],
	answer: 3
},
{
	q:'Woman: Are you a cook? <br> Man: (&emsp;&emsp;&emsp;&emsp;) I work at a Chinese restaurant',
	options:['I\'m hungry.','I don\'t know.','Yes, please.','That\'s right.'],
	answer: 3
},
{
	q:'A: What is your (&emsp;&emsp;&emsp;&emsp;)? <br> B: Kazumi Suzuki.',
	options:['hour','club','date','name'],
	answer: 3
},
{
	q:'A: Are your baseball shoes in your room, Mike?  <br> B: No, Mom. They\'re in my (&emsp;&emsp;&emsp;&emsp;) at school.',
	options:['window','shop','locker','door'],
	answer: 2
},
{
	q:'A: It\'s ten o\'clock, Jimmy. (&emsp;&emsp;&emsp;&emsp;) to bed.  <br> B: All right, Mom.',
	options:['Go','Sleep','Do','Sit'],
	answer: 0
},
{
	q:'A: Do you live (&emsp;&emsp;&emsp;&emsp;) Tokyo?  <br> B: Yes. It\'s a big city.',
	options:['after','with','on','in'],
	answer: 3
},
{
	q:'A: Where are your shoes, Ben?  <br> B: They\'re over (&emsp;&emsp;&emsp;&emsp;) by the door, Mom.',
	options:['then','that','this','there'],
	answer: 3
},
{
	q:'A: Ted! (&emsp;&emsp;&emsp;&emsp;) read comic books in the classroom.  <br> B: Sorry, Mr. Brown.',
	options:['Don\'t','Aren\'t','Isn\'t','Doesn\'t'],
	answer: 0
},
{
	q:'A: (&emsp;&emsp;&emsp;&emsp;) your father a teacher, Karen?  <br> B: Yes, he is.',
	options:['Are','Is','Do','Can'],
	answer: 1
},
{
	q:'I know Judy. She can (&emsp;&emsp;&emsp;&emsp;) French very well.',
	options:['see','drink','speak','open'],
	answer: 2
},
{
	q:'My sister usually plays tennis (&emsp;&emsp;&emsp;&emsp;) Saturdays.',
	options:['by','on','with','at'],
	answer: 1
},
{
	q:'My mother likes (&emsp;&emsp;&emsp;&emsp;). She has many pretty ones in the garden',
	options:['sports','movies','schools','flowers'],
	answer: 3
},
{
	q:'Let\'s begin today\'s class. Open your textbooks to  (&emsp;&emsp;&emsp;&emsp;) 22.',
	options:['chalk','ground','page','minute'],
	answer: 2
},
{
	q:'Today is Wednesday. Tomorrow is (&emsp;&emsp;&emsp;&emsp;).',
	options:['Monday','Tuesday','Thursday','Friday'],
	answer: 2
},
{
	q:'I usually read magazines (&emsp;&emsp;&emsp;&emsp;) home.',
	options:['of','on','with','at'],
	answer: 3
},
{
	q:'My brother usually (&emsp;&emsp;&emsp;&emsp;) to his favorite songs after dinner.',
	options:['helps','starts','teaches','listens'],
	answer: 3
},
{
	q:'Ellen can (&emsp;&emsp;&emsp;&emsp;) very well.',
	options:['sing','sings','sang','singing'],
	answer: 0
},
{
	q:'Mother: (&emsp;&emsp;&emsp;&emsp;) Sally? <br> Girl: Yes, let\'s eat.',
	options:['Do you know her,','Are you ready for dinner,','Is it cold today,','When does it start,'],
	answer: 1
},
{
	q:'Student: How long is this bridge, Mr. Watson? <br> Teacher: (&emsp;&emsp;&emsp;&emsp;)',
	options:['400 meters.','It\'s a bridge.','It\'s Saturday.','In the morning.'],
	answer: 0
},
{
	q:'Boy: Let\'s go hiking today. <br> Mother: (&emsp;&emsp;&emsp;&emsp;) We can make some sandwiches.',
	options:['You\'re tall.','Good idea.','You\'re welcome.','Yes, it is.'],
	answer: 1
},
{
	q:'Girl: Dad, where\'s my tennis racket? <br> Father: (&emsp;&emsp;&emsp;&emsp;)',
	options:['Every weekend.','No, I\'m not.','Under your bed.','I like sports.'],
	answer: 2
},
{
	q:'Man: Are you from Australia? <br> Woman: (&emsp;&emsp;&emsp;&emsp;)',
	options:['Yes, I am.','Yes, I can.','Yes, it is.','Yes, it does.'],
	answer: 0
},
{
	q:'A: Do you like (&emsp;&emsp;&emsp;&emsp;), Peter?  <br> B: Yes, I do. I like soccer.',
	options:['music','fruit','sports','fish'],
	answer: 2
},
{
	q:'A: Bob is a good swimmer. <br> B: Yes. He is very (&emsp;&emsp;&emsp;&emsp;).',
	options:['fast','slow','long','blue'],
	answer: 0
},
{
	q:'A: Dad, please (&emsp;&emsp;&emsp;&emsp;) me with this math homework.  <br> B: All right, Judy.',
	options:['write','help','work','know'],
	answer: 1
},
{
	q:'A: Happy birthday, Anna. This is your (&emsp;&emsp;&emsp;&emsp;).  <br> B: Thank you, Grandpa!',
	options:['page','pocket','present','park'],
	answer: 2
},
{
	q:'A: Does this train go from Tokyo (&emsp;&emsp;&emsp;&emsp;) Kanazawa?  <br> B: Yes, it does.',
	options:['at','off','to','down'],
	answer: 2
},
{
	q:'A: Can I have some chocolate? <br> B: Yes, (&emsp;&emsp;&emsp;&emsp;) course.',
	options:['with','of','after','by'],
	answer: 1
},
{
	q:'A: (&emsp;&emsp;&emsp;&emsp;) pencil case is this? It\'s very pretty.  <br> B: It\'s Cindy\'s.',
	options:['Who','Where','When','Whose'],
	answer: 3
},
{
	q:'I have piano (&emsp;&emsp;&emsp;&emsp;) on Tuesdays.',
	options:['doors','books','chairs','lessons'],
	answer: 3
},
{
	q:'October is the (&emsp;&emsp;&emsp;&emsp;) month of the year.',
	options:['day','week','month','hour'],
	answer: 2
},
{
	q:'My mother plays the piano very (&emsp;&emsp;&emsp;&emsp;).',
	options:['all','well','next','right'],
	answer: 1
},
{
	q:'Akiko drinks a (&emsp;&emsp;&emsp;&emsp;) of tea after dinner every day.',
	options:['chair','cup','bread','lunch'],
	answer: 1
},
{
	q:'The man in this picture is my grandfather. He\'s 65 years (&emsp;&emsp;&emsp;&emsp;).',
	options:['many','old','tall','big'],
	answer: 1
},
{
	q:'I have a camera. Let\'s (&emsp;&emsp;&emsp;&emsp;) a picture together.',
	options:['sing','know','speak','take'],
	answer: 3
},
{
	q:'Kate has a computer. She uses (&emsp;&emsp;&emsp;&emsp;) in her room.',
	options:['it','us','they','them'],
	answer: 0
},
{
	q:'Michelle is (&emsp;&emsp;&emsp;&emsp;) TV in the living room now.',
	options:['watching','watch','watched','watches'],
	answer: 0
},
{
	q:'Father: What do you have in your bag? <br> Boy: (&emsp;&emsp;&emsp;&emsp;)',
	options:['In the morning.','I play basketball.','My new shoes.','This is a new shop.'],
	answer: 2
},
{
	q:'Mother: Bye, Ellen. Have a nice day. <br> Girl: Thanks, Mom. (&emsp;&emsp;&emsp;&emsp;)',
	options:['See you this afternoon.','It\'s in my room.','Here you are.','It\'s my homework.'],
	answer: 0
},
{
	q:'Boy 1: What do you do on Sundays? <br> Boy 2: (&emsp;&emsp;&emsp;&emsp;)',
	options:['That\'s nice.','I\'m fine.','It\'s me.','I go to the park.'],
	answer: 3
},
{
	q:'Man: Do you often come to the pool? <br> Woman: Yes, (&emsp;&emsp;&emsp;&emsp;)',
	options:['I skate every weekend.','I swim every day.','I walk in the park.','I like tennis.'],
	answer: 1
},
{
	q:'Girl: That\'s a big dog. What\'s his name? <br> Boy: (&emsp;&emsp;&emsp;&emsp;)',
	options:['This is Jack.','He\'s mine.','I\'m Fred.','He\'s very nice.'],
	answer: 0
}
]