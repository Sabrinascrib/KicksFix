<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from './../../../lib/components/Footer.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<Navbar />

<div class="">
	<img src={data.item.img} alt={data.item.title} />
	<div class="">
		<h2>{data.item.title}</h2>
		<p>{data.item.price}</p>
	</div>
</div>

<Footer />
