<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from './../../../lib/components/Footer.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<Navbar />

<div
	class="flex mx-auto flex-col-reverse  px-10 my-40 max-w-[663px]   xl:flex-row xl:max-w-[1500px]"
>
	<div class=" max-w-[663px] mt-6 xl:mr-16 xl:w-1/2">
		<img class=" xl:w-[800px] " src={data.item.img} alt={data.item.title} />
	</div>

	<div class=" flex flex-col max-w-[663px] justify-between xl:w-1/2">
		<div class="flex max-w-[663px] flex-col">
			<h2 class="font-bold text-3xl">{data.item.title}</h2>
			<p class="text-xl mb-4 mt-5">{data.item.price}</p>
		</div>

		<button
			class=" py-2 mb-10 bg-[#fa0f0f] w-40 text-lg   rounded-sm duration-100 px-10 uppercase text-white hover:bg-[#d61212]"
			>Add To Cart</button
		>
		<div class="flex flex-row">
			<div class=" mr-6 xl:w-1/2">
				<img class="w-80 " src={data.item.img1} alt={data.item.title} />
			</div>
			<div class="xl:w-1/2"><img class="w-80 " src={data.item.img2} alt={data.item.title} /></div>
		</div>
	</div>
</div>

<Footer />

<style>
	button {
		font-family: 'Bebas Neue', sans-serif;
	}
</style>
