type ContentProps = {
	id: string;
	title: string;
	description: string;
	image: string;
	content: string;
	category: string;
	type: string;
	date: string;
};

export const content: ContentProps[] = [
	{
		id: '1',
		title: 'Bad Omens',
		description:
			' Bad Omens is an American metal band that was formed in 2015. The band consists of members Noah Sebastian (vocals), Joakim Karlsson (guitar), Nicholas Ruffilo (guitar), and Vincent Riquier (drums).',
		image: 'https://static.spin.com/files/2020/11/Badomens7-1605122447.jpg',
		content: `
    Bad Omens is an American metal band that was formed in 2015. The band consists of members Noah Sebastian (vocals), Joakim Karlsson (guitar), Nicholas Ruffilo (guitar), and Vincent Riquier (drums). The band's music is characterized by heavy guitar riffs, melodic vocals, and introspective lyrics.
    Since their formation, Bad Omens has released two studio albums: their self-titled debut in 2016 and "Finding God Before God Finds Me" in 2019. Both albums have been well received by fans and critics alike, with praise for the band's musicianship and songwriting ability.   
    Despite their success, Bad Omens has faced some controversy in the past. In 2019, the band was dropped from their record label after a dispute with their former manager. The band responded by releasing their album independently, which proved to be a success. 
    Overall, Bad Omens is a band that is known for their intense live performances and thought-provoking lyrics. While the band's name may suggest a focus on bad omens and negative events, their music is more about self-reflection and personal growth. Fans of heavy metal and hard rock should definitely check out this talented group of musicians.
    `,
		category: 'Metal',
		type: 'Blog',
		date: '2023-03-02',
	},
	{
		id: '2',
		title: 'Architects',
		description:
			' Architects are an English metalcore band that was formed in 2004. The band consists of members Sam Carter (vocals), Tom Searle (guitar), Dan Searle (guitar), Alex Dean (bass), and Jamie Graham (drums).',
		image: 'https://www.nme.com/wp-content/uploads/2020/10/architects.jpg',
		content: `
		Architects are an English metalcore band that was formed in 2004. The band consists of members Sam Carter (vocals), Tom Searle (guitar), Dan Searle (guitar), Alex Dean (bass), and Jamie Graham (drums). The band's music is characterized by heavy guitar riffs, melodic vocals, and introspective lyrics.
		Since their formation, Architects has released six studio albums: "Hollow Crown" in 2006, "Ruin" in 2007, "Daybreaker" in 2009, "The Here and Now" in 2011, "Lost Forever // Lost Together" in 2016, and "For Those That Wish to Exist" in 2020. All of the band's albums have been well received by fans and critics alike, with praise for the band's musicianship and songwriting ability.
		Despite their success, Architects has faced some controversy in the past. In 2016, the band was dropped from their record label after a dispute with their former manager. The band responded by releasing their album independently, which proved to be a success.
		Overall, Architects is a band that is known for their intense live performances and thought-provoking lyrics. While the band's name may suggest a focus on architecture and building, their music is more about self-reflection and personal growth. Fans of heavy metal and hard rock should definitely check out this talented group of musicians.
		`,
		category: 'Metalcore',
		type: 'Blog',
		date: '2023-03-02',
	},
	{
		id: '3',
		title: `Metallica unveil new single, If Darkness Had A Son`,
		description: `Metallica have unveiled a new single, If Darkness Had A Son, from their upcoming album, S&M2.`,
		image:
			'https://images.kerrangcdn.com/images/Metallica-March-2023-promo-credit-Tim-Saccenti.png?auto=compress&fit=max&w=1920',
		content: `Following some TikTok teasing and duets, Metallica have just shared their next single from upcoming album 72 Seasons.

		Entitled If Darkness Had A Son, the song is also accompanied by a video directed by Tim Saccenti – who also worked with the band on previous videos Lux Æterna and Screaming Suicide.
		
		Announcing the single on their website, Metallica tease: “We’re getting closer every day now to the release of 72 Seasons on April 14 and the M72 tour kick-off on April 27 in Amsterdam. We have a few more surprises in store for you, so stick with us here, on socials, and e-mail. Lots more to come!”`,
		category: 'Recording',
		type: 'News',
		date: '2023-03-02',
	},
	{
		id: '4',
		title: `Oceans Ate Alaska Release Instrumental Version Of “Disparity”`,
		description: `British metalcore group Oceans Ate Alaska have newly released an instrumental edition of their latest album “Disparity“.`,
		image: 'https://www.theprp.com/wp-content/uploads/2022/06/oceansatealaska2022-830x350-1.jpg',
		content: `“For Oceans, the instrumental release was always done out of pure demand. We put a tremendous effort into making the composition as dynamically rich as possible, no aspect of the instrumentation goes without a lot of time, care, and patience put in. When you apply this work ethic, it kinda makes sense that listeners want to hear a version without vocals; that’s not to say they don’t belong to the music, but the human voice tends to capture our ears before everything else so it’s a cool experience to be able to listen to everything that surrounds it.
			With Disparity, our youthful sporadic compositional tendencies have been tempered, but only to give space to our lo-fi progressions, big room energy and fundamental song structure. We are very excited about this instrumental release as it will be a new experience for everyone!”`,
		category: 'Djent',
		type: 'News',
		date: '2023-03-02',
	},
	{
		id: '5',
		title: `Falling In Reverse, Ice Nine Kills, Underoath, Etc. Summer Tour Rumored`,
		description: `Dates have begun to surface online for an as-yet unannounced summer headlining tour from Falling In Reverse. By the looks of it Ice Nine Kills and Catch Your Breath will be appearing throughout the run. `,
		image: 'https://www.theprp.com/wp-content/uploads/2023/03/fallinginreverseradke.jpg',
		content: `
				Dates have begun to surface online for an as-yet unannounced summer headlining tour from Falling In Reverse. By the looks of it Ice Nine Kills and Catch Your Breath will be appearing throughout the run. Underoath & Spiritbox will seemingly be joining Ronnie Radke and co. on the trek on select dates.
				Thus far, the below shows have leaked out for the run, which has been dubbed ‘The Popular Monstour‘:
				07/08 Cedar Rapids, IA – Alliant Energy PowerHouse (feat. Underoath)
				07/22 Las Vegas, NV – The Theater at Virgin Hotels (feat. Spiritbox)
				An official announcement of the tour is expected to emerge next week
		`,
		category: 'Concerts',
		type: 'News',
		date: '2023-03-02',
	},
	{
		id: '6',
		title: `Veil Of Maya Announce New Album ‘[M]other’ + Drop Single “Red Fur”`,
		description: `Today, Veil Of Maya have announced the details of their long-awaited seventh album alongside the surprise drop of a third single, “Red Fur“. The new record, entitled [M]other, is set to release May 12th.`,
		image: 'https://i0.wp.com/boolintunes.com/wp-content/uploads/2023/03/Veil-banner.png?w=1170&ssl=1',
		content: `
		Today, Veil Of Maya have announced the details of their long-awaited seventh album alongside the surprise drop of a third single, “Red Fur“. The new record, entitled [M]other, is set to release May 12th. The album is produced by Zach Jones, who has worked recently with the likes of Chelsea Grin, Fit For a King, and Silent Planet, making this the fifth consecutive Veil Of Maya album with a different producer. The four now-standalone singles released between 2017’s False Idol and this newest album cycle also boast a different producer (“Members Only” – Taylor Larsen; “Outsider” – Michael Taylor; “Viscera” – Mark Okubo; “Outrun” – Josh Strock). Certainly, the band appear keen to continually evolve, and their latest offering prior to the announcement, “Godhead”, saw them experimenting firmly within the realms of tech-death. 
		`,
		category: 'Djent',
		type: 'News',
		date: '2023-03-19',
	},
];
