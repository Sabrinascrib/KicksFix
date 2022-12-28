/** @type {import('./$types').PageLoad} */

export function load({ params }) {
	const item = items.find((element) => element.id == `${params.slug}`);

	console.log(item);
	return {
		item
	};
}

import { items } from '$lib/data.js';
