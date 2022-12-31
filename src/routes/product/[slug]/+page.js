/** @type {import('./$types').PageLoad} */

export function load({ params }) {
	const product = products.find((element) => element.id == `${params.slug}`);

	console.log(product);
	return {
		product
	};
}

import { products } from '$lib/data.js';
