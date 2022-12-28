<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from './../../../lib/components/Footer.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<Navbar />

<div class="flex flex-row max-w-[1500px] my-40 mx-auto">
	<div class="w-1/2 mr-16">
		<img class="w-[800px] " src={data.item.img} alt={data.item.title} />
	</div>

	<div class="w-1/2 flex flex-col justify-between">
		<div class="flex flex-col">
			<h2 class="font-bold text-3xl">{data.item.title}</h2>
			<p class="text-xl mt-5">{data.item.price}</p>
		</div>

		<button
			class=" py-2 mb-10 bg-[#fa0f0f] w-40 text-lg   rounded-sm duration-100 px-10 uppercase text-white hover:bg-[#d61212]"
			>Add To Cart</button
		>
		<div class="flex flex-row">
			<img class="w-80 mr-6" src={data.item.img1} alt={data.item.title} />
			<img class="w-80 " src={data.item.img2} alt={data.item.title} />
		</div>
	</div>
</div>

<Footer />

<style>
	button {
		font-family: 'Bebas Neue', cursive;
	}
</style>
