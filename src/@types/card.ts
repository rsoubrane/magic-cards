export type Cards = Card[];

export type CardState = {
	isLoading: boolean;
	error: Error | string | null;
	cards: Cards;
	card: Card | null;
	sortBy: string | null;
};

export type CardRes = {
	object: string;
	total_cards: number;
	has_more: boolean;
	next_page: string;
	data: Cards;
};

export type Card = {
	object: string;
	id: string;
	oracle_id: string;
	multiverse_ids: number[];
	name: string;
	printed_name: string;
	lang: string;
	released_at: string;
	uri: string;
	scryfall_uri: string;
	layout: string;
	highres_image: boolean;
	image_status: string;
	image_uris: ImageUris;
	mana_cost: string;
	cmc: number;
	type_line: string;
	printed_type_line: string;
	oracle_text: string;
	printed_text: string;
	power: string;
	toughness: string;
	colors: string[];
	color_identity: string[];
	keywords: any[];
	legalities: Legalities;
	games: string[];
	reserved: boolean;
	foil: boolean;
	nonfoil: boolean;
	finishes: string[];
	oversized: boolean;
	promo: boolean;
	reprint: boolean;
	variation: boolean;
	set_name: string;
	card_id: string;
	card: string;
	card_name: string;
	card_type: string;
	card_uri: string;
	card_search_uri: string;
	scryfall_card_uri: string;
	rulings_uri: string;
	prints_search_uri: string;
	collector_number: string;
	digital: boolean;
	rarity: string;
	flavor_text: string;
	card_back_id: string;
	artist: string;
	artist_ids: string[];
	illustration_id: string;
	border_color: string;
	frame: string;
	security_stamp: string;
	full_art: boolean;
	textless: boolean;
	booster: boolean;
	story_spotlight: boolean;
	edhrec_rank: number;
	prices: Prices;
	related_uris: RelatedUris;
	purchase_uris: PurchaseUris;
};

export interface ImageUris {
	small: string;
	normal: string;
	large: string;
	png: string;
	art_crop: string;
	border_crop: string;
}

export interface Legalities {
	standard: string;
	future: string;
	historic: string;
	gladiator: string;
	pioneer: string;
	modern: string;
	legacy: string;
	pauper: string;
	vintage: string;
	penny: string;
	commander: string;
	brawl: string;
	historicbrawl: string;
	alchemy: string;
	paupercommander: string;
	duel: string;
	oldschool: string;
	premodern: string;
}

export interface Prices {
	usd?: any;
	usd_foil?: any;
	usd_etched?: any;
	eur?: any;
	eur_foil?: any;
	tix?: any;
}

export interface RelatedUris {
	gatherer: string;
	tcgplayer_infinite_articles: string;
	tcgplayer_infinite_decks: string;
	edhrec: string;
	mtgtop8: string;
}

export interface PurchaseUris {
	tcgplayer: string;
	cardmarket: string;
	cardhoarder: string;
}
