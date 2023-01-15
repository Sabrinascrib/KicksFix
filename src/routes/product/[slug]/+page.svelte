<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from './../../../lib/components/Footer.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<Navbar />
<a
	class="flex flex-row place-items-center text-xl duration-75 md:text-xl ml-4 mt-4 hover:text-gray-700"
	href="/items"
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 0 24 24"
		class="mr-2 mt-[-2px]"
		><path fill="currentColor" d="M16 22L6 12L16 2l1.775 1.775L9.55 12l8.225 8.225Z" /></svg
	> Back</a
>
<div
	class="flex mx-auto flex-col-reverse  px-10 my-40 max-w-[663px]   xl:flex-row xl:max-w-[1500px]"
>
	<div class=" max-w-[663px] mt-6 xl:mr-16 xl:w-1/2">
		<img class=" xl:w-[800px] " src={data.product.img} alt={data.product.title} />
	</div>

	<div class=" flex flex-col max-w-[663px] justify-between xl:w-1/2">
		<div class="flex max-w-[663px] flex-col">
			<h2 class="font-bold text-3xl mt-4">{data.product.title}</h2>
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
	a {
		font-family: 'Bebas Neue', sans-serif;
	}
</style>
