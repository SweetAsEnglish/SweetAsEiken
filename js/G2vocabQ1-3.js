

// Array of Objects
const quiz = [
    {
        q: 'Many tourists were (&emsp;&emsp;&emsp;&emsp;) to see Kinkakuji temple in Kyoto. They were all surprised at its beauty.',
        options: ['amazed', 'dull', 'reformed', 'bored'],
        answer: 0
    },
    {
        q: 'He is (&emsp;&emsp;&emsp;&emsp;) from a serious illness. His medicine is working well.',
        options: ['reforming', 'lying', 'attending', 'recovering'],
        answer: 3
    },
    {
        q: 'The criminals wife said she did everything she could to (&emsp;&emsp;&emsp;&emsp;) her husband, but he did not change.',
        options: ['reform', 'attend', 'keep', 'blame'],
        answer: 0
    },
    {
        q: 'The salesperson finally (&emsp;&emsp;&emsp;&emsp;) the couple to buy the more expensive vehicle.',
        options: ['attended', 'persuaded', 'reformed', 'blamed'],
        answer: 1
    },
    {
        q: 'The driver (&emsp;&emsp;&emsp;&emsp;) the wet road for the accident.',
        options: ['attends', 'reforms', 'persuades', 'blames'],
        answer: 3
    },
    {
        q: 'Our boss (&emsp;&emsp;&emsp;&emsp;) all our hard work; that\'s why many employees like her.',
        options: ['appreciates', 'bored', 'annoyed', 'complicates'],
        answer: 0
    },
    {
        q: 'She (&emsp;&emsp;&emsp;&emsp;) meals with her friends, and always makes time to enjoy lunch with them.',
        options: ['values', 'transplants', 'share', 'appreciated'],
        answer: 0
    },
    {
        q: 'The doctor told her the illness is terminal, as the virus has already (&emsp;&emsp;&emsp;&emsp;) all over her body.',
        options: ['spread', 'share', 'transplant', 'eaten'],
        answer: 0
    },
    {
        q: 'The young girl needs a heart (&emsp;&emsp;&emsp;&emsp;) as soon as possible, as her own heart is too weak to pump blood around her body.',
        options: ['value', 'change', 'transplant', 'share'],
        answer: 2
    },
    {
        q: 'Please (&emsp;&emsp;&emsp;&emsp;) the task among your team members. There are three employees that can share the task.',
        options: ['keep', 'spread', 'hide', 'divide'],
        answer: 3
    },
    {
        q: 'Cash payments for purchased products will be (&emsp;&emsp;&emsp;&emsp;) at a higher rate.',
        options: ['discounted', 'appreciated', 'delayed', 'overcharged'],
        answer: 0
    },
    {
        q: 'His rivals are (&emsp;&emsp;&emsp;&emsp;) to destroy his presentation. They attempted to put a virus on his computer.',
        options: ['determined', 'delayed', 'generated', 'decreased'],
        answer: 0
    },
    {
        q: 'The clothing provided by the officials of the Olympic Games were (&emsp;&emsp;&emsp;&emsp;). Everyone was disappointed with the unauthentic items.',
        options: ['discount', 'fake', 'delayed', 'unfair'],
        answer: 1
    },
    {
        q: 'To celebrate his 60th birthday, he asked his friends to contribute some money to (&emsp;&emsp;&emsp;&emsp;) homeless children in the neighborhood.',
        options: ['feed', 'give', 'see', 'hide'],
        answer: 0
    },
    {
        q: 'She can\'t find the words to (&emsp;&emsp;&emsp;&emsp;) how she feels at the moment since she\'s so overwhelmed.',
        options: ['determine', 'compare', 'describe', 'delay'],
        answer: 2
    },
    {
        q: 'The chef decided to (&emsp;&emsp;&emsp;&emsp;) the price of the special menu items to attract more customers during the slow business month.',
        options: ['decrease', 'generate', 'hide', 'determine'],
        answer: 0
    },
    {
        q: 'The detective carefully studied the surveillance footage to (&emsp;&emsp;&emsp;&emsp;) the two suspects.',
        options: ['delay', 'compare', 'fake', 'fee'],
        answer: 1
    },
    {
        q: 'The artist was skilled at creating incredibly realistic (&emsp;&emsp;&emsp;&emsp;) paintings that often fooled art collectors.',
        options: ['determined', 'discount', 'fake', 'describe'],
        answer: 2
    },
    {
        q: 'Due to unexpected circumstances, there will be a brief (&emsp;&emsp;&emsp;&emsp;) in the delivery of online orders. We apologize for any inconvenience.',
        options: ['hide', 'delay', 'generate', 'fee'],
        answer: 1
    },
    {
        q: 'John was (&emsp;&emsp;&emsp;&emsp;) to get a better salary by working hard and impressing his boss.',
        options: ['determined', 'discounted', 'fed', 'described'],
        answer: 0
    },
    {
        q: 'The magician\'s performance never fails to (&emsp;&emsp;&emsp;&emsp;) the audience that magic is real.',
        options: ['lie', 'manage', 'persuade', 'reform'],
        answer: 2
    },
    {
        q: 'After the earthquake, the community came together to (&emsp;&emsp;&emsp;&emsp;) from the damages and rebuild what was lost.',
        options: ['recover', 'attend', 'amaze', 'bury'],
        answer: 0
    },
    {
        q: 'Simon had to (&emsp;&emsp;&emsp;&emsp;) the team\'s ideas and help them with the challenging project.',
        options: ['blame', 'persuade', 'manage', 'reform'],
        answer: 2
    },
    {
        q: 'It\'s important to take responsibility for mistakes and not (&emsp;&emsp;&emsp;&emsp;) other people when something goes wrong.',
        options: ['reform', 'blame', 'persuade', 'manage'],
        answer: 1
    },
    {
        q: 'The politician tried to (&emsp;&emsp;&emsp;&emsp;) the evidence of his lies and corruption but it was too late.',
        options: ['lie', 'recover', 'attend', 'bury'],
        answer: 3
    },
    {
        q: 'The company\'s decision to (&emsp;&emsp;&emsp;&emsp;) its profits with the employees made everyone happy.',
        options: ['estimate', 'share', 'generate', 'connect'],
        answer: 1
    },
    {
        q: 'Learning to effectively (&emsp;&emsp;&emsp;&emsp;) tasks between a team is important to being successful.',
        options: ['appreciate', 'complicate', 'value', 'divide'],
        answer: 3
    },
    {
        q: 'The new technology was designed to easily (&emsp;&emsp;&emsp;&emsp;) two devices together.',
        options: ['transplant', 'connect', 'share', 'estimate'],
        answer: 1
    },
    {
        q: 'The real estate agent tried to estimate the (&emsp;&emsp;&emsp;&emsp;) of the property, by looking at its size and location.',
        options: ['spread', 'generated', 'value', 'connection'],
        answer: 2
    },
    {
        q: 'If I try to add more information it will only (&emsp;&emsp;&emsp;&emsp;) the project. Let\'s not change anything.',
        options: ['divide', 'complicate', 'share', 'transplant'],
        answer: 1
    }
]
