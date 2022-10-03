type PromoData = {
	imageSrc: {
		src: string;
		alt: string;
	};
	title: string;
	iconSrc?: string;
	description: string;
};

export const data: PromoData[] = [
	{
		title: 'Are you tired of wrong answers?',
		iconSrc:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Red_x.svg/480px-Red_x.svg.png',
		imageSrc: {
			alt: 'jquery code example',
			src: 'https://www.devopsschool.com/blog/wp-content/uploads/2022/03/jquery.png',
		},
		description:
			'When starting out with web development, it can be difficult to know where to start. When searching JavaScript problem solutions online, you often are faced with a sea of jQuery code, which is a library that is no longer used in modern web development.',
	},
	{
		title: 'Learn only what you need to',
		iconSrc: 'https://images.emojiterra.com/google/android-11/512px/1f9e0.png',
		imageSrc: {
			alt: 'jquery code example',
			src: 'https://images.emojiterra.com/google/noto-emoji/v2.034/512px/1f4da.png',
		},
		description:
			'The knowledge you need to build a website is out there, but it’s scattered across the internet. You have to know where to look, and how to find the information you need. We’ve done the work for you. We’ve collected the best resources and put them in one place.',
	},
	{
		title: 'Together we can build a better web',
		iconSrc:
			'https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/star_2b50.png',
		imageSrc: {
			alt: 'jquery code example',
			src: 'https://www.mrwebsmith.com/wp-content/uploads/2021/02/OSM-dev-top-updated-img.png',
		},
		description:
			'Use materials from this site to learn how to build a website. You can contribute to our project by adding new resources, or by helping us improve the site. Go to our GitHub page to learn more.',
	},
];
