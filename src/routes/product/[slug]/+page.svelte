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
		<img class=" xl:w-[800px] " src={data.product.img} alt={data.product.title} />
	</div>

	<div class=" flex flex-col max-w-[663px] justify-between xl:w-1/2">
		<div class="flex max-w-[663px] flex-col">
			<h2 class="font-bold text-3xl">{data.product.title}</h2>
			<p class="text-xl mb-4 mt-5">{data.product.price}€</p>
		</div>

		<div class="flex flex-row">
			<div class=" mr-6 xl:w-1/2">
				<img class="w-80" src={data.product.img1} alt={data.product.title} />
			</div>
			<div class="xl:w-1/2">
				<img class="w-80" src={data.product.img2} alt={data.product.title} />
			</div>
		</div>
	</div>
</div>

<Footer />

<style>
</style>
