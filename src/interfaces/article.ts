export default interface Article {
	id: number;
	title: string;
	url: string;
	image_url: string;
	newsSite: string;
	summary: string;
	published_at: string;
	updatedAt: string;
	featured: boolean;
	launches: [any?];
	events: [any?];
}
