

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
        q: 'The police had (&emsp;&emsp;&emsp;&emsp;) that showed the man had robbed the store. His face could be seen on a video taken by the store’s security cameras.',
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
        q: 'A: How much does it cost to travel to New Zealand?   <br> B: Well, the prices (&emsp;&emsp;&emsp;&emsp;). They are high over the Xmas holidays as it is summer, but much lower at other times of the year',
        options: ['vary', 'navigate', 'pause', 'struggle'],
        answer: 0
    },
    {
        q: 'A: I\'m thinking of visiting Shizuoka in January.   <br> B: Really? I think you should wait until April. Shizuoka is (&emsp;&emsp;&emsp;&emsp;) then. The weather is warmer and the cherry blossoms are beautiful.',
        options: ['behind its back', 'against its will', 'at its best', 'in its opinion'],
        answer: 2
    }
]	
