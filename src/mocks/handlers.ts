import { rest } from 'msw';

export const handlers = [
	rest.get('/account', (req, res, ctx) => {
		const user = typeof window !== 'undefined' && sessionStorage.getItem('user');

		if (!user) {
			return res(
				ctx.status(403),
				ctx.json({
					errorMessage: 'Not authenticated'
				})
			);
		}
		return res(ctx.json(user));
	}),

	rest.post('/login', (req: { body: { username: string } }, res, ctx) => {
		const { username } = req.body;

		const user = {
			id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
			username,
			firstName: 'Romain',
			lastName: 'Soubrane',
			emailAddress: 'romain.soubrane@eemi.com'
		};

		typeof window !== 'undefined' && sessionStorage.setItem('user', JSON.stringify(user));

		return res(ctx.json(user));
	}),

	rest.post('/logout', (req, res, ctx) => {
		typeof window !== 'undefined' && sessionStorage.removeItem('user');

		return res(
			ctx.json({
				success: true,
				action: 'logout'
			})
		);
	}),

	rest.get('https://my.backend/cards/8d74a469-c71d-4773-99d3-5456b31df424', (req, res, ctx) => {
		return res(
			ctx.json({
				object: 'card',
				id: '8d74a469-c71d-4773-99d3-5456b31df424',
				oracle_id: '4e7a8817-1a66-45c3-ade9-eac79b40b89f',
				name: 'Emrakul, the Promised End',
				released_at: '2016-07-22',
				uri: 'https://api.scryfall.com/cards/8d74a469-c71d-4773-99d3-5456b31df424',
				image_uris: {
					normal: 'https://c1.scryfall.com/file/scryfall-cards/normal/front/8/d/8d74a469-c71d-4773-99d3-5456b31df424.jpg?1576383727',
					large: 'https://c1.scryfall.com/file/scryfall-cards/large/front/8/d/8d74a469-c71d-4773-99d3-5456b31df424.jpg?1576383727',
					png: 'https://c1.scryfall.com/file/scryfall-cards/png/front/8/d/8d74a469-c71d-4773-99d3-5456b31df424.png?1576383727',
					art_crop:
						'https://c1.scryfall.com/file/scryfall-cards/art_crop/front/8/d/8d74a469-c71d-4773-99d3-5456b31df424.jpg?1576383727',
					border_crop:
						'https://c1.scryfall.com/file/scryfall-cards/border_crop/front/8/d/8d74a469-c71d-4773-99d3-5456b31df424.jpg?1576383727'
				},
				mana_cost: '{13}',
				cmc: 13,
				type_line: 'Legendary Creature — Eldrazi',
				oracle_text:
					"This spell costs {1} less to cast for each card type among cards in your graveyard. When you cast this spell, you gain control of target opponent during that player's next turn. After that turn, that player takes an extra turn. Flying, trample, protection from instants",
				power: '13',
				toughness: '13',
				keywords: ['Flying', 'Trample', 'Protection'],
				set_name: 'Eldritch Moon',
				rarity: 'mythic',
				flavor_text: 'An enigma as vexing as life itself.',
				prices: {
					usd_foil: '101.18',
					eur_foil: '115.00'
				}
			})
		);
	})
];
