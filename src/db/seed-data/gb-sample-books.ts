import { Book } from '../../types/book';
import { sampleUsers } from './sample-users';

export const sampleBooks: Book[] = [
	{
		title: 'Eon',
		subtitle: '',
		authors: ['Greg Bear'],
		publisher: 'Macmillan',
		publishedDate: '1991-10-15',
		description: 'Science fiction-roman.',
		industryIdentifiers: [
			{
				type: 'ISBN_10',
				identifier: '0812520475',
			},
			{
				type: 'ISBN_13',
				identifier: '9780812520477',
			},
		],
		categories: ['Fiction'],
		imageLinks: {
			smallThumbnail:
				'http://books.google.com/books/content?id=7yHURwnbFvAC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
			thumbnail:
				'http://books.google.com/books/content?id=7yHURwnbFvAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
		},
		previewLink:
			'http://books.google.com/books?id=7yHURwnbFvAC&printsec=frontcover&dq=Eon&hl=&cd=1&source=gbs_api',
		addedBy: 'burgers1',
		dateAdded: new Date(),
		ownedBy: sampleUsers[0],
		genre: 'Sci-Fi',
		shelfLocation: 'Living room',
		condition: '',
		borrowed: false,
		borrowDate: '',
		borrower: '',
		embossed: false,
	},
	{
		title: 'Slewfoot',
		subtitle: 'A Tale of Bewitchery',
		authors: ['Brom'],
		publisher: 'Tor Nightfire',
		publishedDate: '2021-09-14',
		description:
			"Set in Colonial New England, Slewfoot is a tale of magic and mystery, of triumph and terror as only dark fantasist Brom can tell it. Connecticut, 1666: An ancient spirit awakens in a dark wood. The wildfolk call him Father, slayer, protector. The colonists call him Slewfoot, demon, devil. To Abitha, a recently widowed outcast, alone and vulnerable in her pious village, he is the only one she can turn to for help. Together, they ignite a battle between pagan and Puritan – one that threatens to destroy the entire village, leaving nothing but ashes and bloodshed in their wake. This terrifying tale of bewitchery features more than two dozen of Brom’s haunting full-color paintings and brilliant endpapers, fully immersing readers in this wild and unforgiving world. At the Publisher's request, this title is being sold without Digital Rights Management Software (DRM) applied.",
		industryIdentifiers: [
			{
				type: 'ISBN_13',
				identifier: '9781250621986',
			},
			{
				type: 'ISBN_10',
				identifier: '1250621984',
			},
		],
		categories: ['Fiction'],
		imageLinks: {
			smallThumbnail:
				'http://books.google.com/books/content?id=fCATEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
			thumbnail:
				'http://books.google.com/books/content?id=fCATEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
		},
		previewLink:
			'http://books.google.com/books?id=fCATEAAAQBAJ&pg=PP1&dq=slewfoot&hl=&cd=1&source=gbs_api',
		addedBy: 'burgers1',
		dateAdded: new Date(),
		ownedBy: sampleUsers[1],
		genre: 'Historical Fiction',
		shelfLocation: 'Bedroom',
		condition: '',
		borrowed: false,
		borrowDate: '',
		borrower: '',
		embossed: false,
	},
	{
		title: 'Skinny Legs and All',
		subtitle: 'A Novel',
		authors: ['Tom Robbins'],
		publisher: 'Bantam',
		publishedDate: '2003-06-17',
		description:
			"An Arab and a Jew open a restaurant together across the street from the United Nations.... It sounds like the beginning of an ethnic joke, but it's the axis around which spins this gutsy, fun-loving, and alarmingly provocative novel, in which a bean can philosophizes, a dessert spoon mystifies, a young waitress takes on the New York art world, and a rowdy redneck welder discovers the lost god of Palestine--while the illusions that obscure humanity's view of the true universe fall away, one by one, like Salome's veils. Skinny Legs and All deals with today's most sensitive issues: race, politics, marriage, art, religion, money, and lust. It weaves lyrically through what some call the \"end days\" of our planet. Refusing to avert its gaze from the horrors of the apocalypse, it also refuses to let the alleged end of the world spoil its mood. And its mood is defiantly upbeat. In the gloriously inventive Tom Robbins style, here are characters, phrases, stories, and ideas that dance together on the page, wild and sexy, like Salome herself. Or was it Jezebel?",
		industryIdentifiers: [
			{
				type: 'ISBN_13',
				identifier: '9780553897937',
			},
			{
				type: 'ISBN_10',
				identifier: '0553897934',
			},
		],
		categories: ['Fiction'],
		imageLinks: {
			smallThumbnail:
				'http://books.google.com/books/content?id=GKx_iZnXickC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
			thumbnail:
				'http://books.google.com/books/content?id=GKx_iZnXickC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
		},
		previewLink:
			'http://books.google.com/books?id=GKx_iZnXickC&printsec=frontcover&dq=skinny+legs+and+all&hl=&cd=1&source=gbs_api',
		addedBy: 'burgers1',
		dateAdded: new Date(),
		ownedBy: sampleUsers[2],
		genre: 'Fiction',
		shelfLocation: 'Living room',
		condition: '',
		borrowed: false,
		borrowDate: '',
		borrower: '',
		embossed: false,
	},
	{
		title: "'Salem's Lot",
		subtitle: '',
		authors: ['Stephen King'],
		publisher: 'Anchor',
		publishedDate: '2008-05-06',
		description:
			'SOON TO BE A NEW FILM, STREAMING ON MAX FALL OF 2024 • #1 BESTSELLER • Ben Mears has returned to Jerusalem’s Lot in hopes that exploring the history of the Marsten House, an old mansion long the subject of rumor and speculation, will help him cast out his personal devils and provide inspiration for his new book. "A master storyteller." —The Los Angeles Times When two young boys venture into the woods, and only one returns alive, Mears begins to realize that something sinister is at work. In fact, his hometown is under siege from forces of darkness far beyond his imagination. And only he, with a small group of allies, can hope to contain the evil that is growing within the borders of this small New England town. With this, his second novel, Stephen King established himself as an indisputable master of American horror, able to transform the old conceits of the genre into something fresh and all the more frightening for taking place in a familiar, idyllic locale.',
		industryIdentifiers: [
			{
				type: 'ISBN_13',
				identifier: '9780385528221',
			},
			{
				type: 'ISBN_10',
				identifier: '0385528221',
			},
		],
		categories: ['Fiction'],
		imageLinks: {
			smallThumbnail:
				'http://books.google.com/books/content?id=i-KRRR_5lbQC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
			thumbnail:
				'http://books.google.com/books/content?id=i-KRRR_5lbQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
		},
		previewLink:
			'http://books.google.com/books?id=i-KRRR_5lbQC&printsec=frontcover&dq=salem%27s+lot&hl=&cd=1&source=gbs_api',
		addedBy: 'burgers1',
		dateAdded: new Date(),
		ownedBy: sampleUsers[3],
		genre: 'Horror',
		shelfLocation: 'Living room',
		condition: '',
		borrowed: false,
		borrowDate: '',
		borrower: '',
		embossed: false,
	},
	{
		title: 'Bit Tyrants',
		subtitle: 'The Political Economy of Silicon Valley',
		authors: ['Rob Larson'],
		publisher: 'Haymarket Books',
		publishedDate: '2020-02-04',
		description:
			"If the stories they tell about themselves are to be believed, all of the tech giants—Apple, Google, Microsoft, Facebook, and Amazon—were built from the ground up through hard work, a few good ideas, and the entrepreneurial daring to seize an opportunity when it presented itself. With searing wit and blistering commentary Bit Tyrants provides an urgent corrective to this froth of board room marketing copy that is so often passed off as analysis. For fans of corporate fairy-tales there are no shortage of official histories that celebrate the innovative genius of Steve Jobs, liberal commentators who fall over themselves to laude Bill Gates's selfless philanthropy, or politicians who will tell us to listen to Mark Zuckerberg for advice on how to protect our democracy from foreign influence. In this highly unauthorized account of the Big Five's origins, Rob Larson sets the record straight, and in the process shreds every focus-grouped bromide about corporate benevolence he could get his hands on. Those readers unwilling to smile and nod as every day we become more dependent on our phones and apps to do our chores, our jobs, and our socializing can take heart as Larson provides us with maps to all the shallow graves, skeleton filled closets, and invective laced emails Big Tech left behind on its ascent to power. His withering analysis will help readers crack the code of the economic dynamics that allowed these companies to become near-monopolies very early on, and, with a little bit of luck, his calls for digital socialism might just inspire a viral movement for online revolution.",
		industryIdentifiers: [
			{
				type: 'ISBN_13',
				identifier: '9781642590876',
			},
			{
				type: 'ISBN_10',
				identifier: '1642590878',
			},
		],
		categories: ['Political Science'],
		imageLinks: {
			smallThumbnail:
				'http://books.google.com/books/content?id=NhWUDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
			thumbnail:
				'http://books.google.com/books/content?id=NhWUDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
		},
		previewLink:
			'http://books.google.com/books?id=NhWUDwAAQBAJ&printsec=frontcover&dq=bit+tyrants&hl=&cd=1&source=gbs_api',
		addedBy: 'burgers1',
		dateAdded: new Date(),
		ownedBy: sampleUsers[4],
		genre: 'Tech Activism',
		shelfLocation: 'Living room',
		condition: '',
		borrowed: false,
		borrowDate: '',
		borrower: '',
		embossed: false,
	},
];
