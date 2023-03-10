/** @type {import('./$types').PageLoad} */

import { products } from '$lib/stores/data.js';

export function load({ params }) {
	const product = products.find((element) => element.id === `${params.slug}`);

	return {
		product
	};
}
