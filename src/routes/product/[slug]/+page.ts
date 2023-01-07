/** @type {import('./$types').PageLoad} */

import { products } from '$lib/data.js';

export function load({ params }) {
	const product = products.find((element) => element.id === `${params.slug}`);

	console.log(product);
	return {
		product
	};
}
