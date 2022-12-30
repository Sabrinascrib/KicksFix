<script>
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import { items } from '$lib/data.js';
</script>

<Navbar />

<main class=" max-w-[1500px] mx-auto my-40 ">
	<div class="w-6 mx-auto">
		<hr class="border-2   border-[#fa0f0f] text-center" />
	</div>

	<div class="max-w-[1500px] flex flex-row flex-wrap place-items-center  justify-evenly">
		{#each $items as item}
			<div class="flex flex-col  m-10">
				<a href={`/product/${item.id}`}>
					<img class="w-96 rounded-sm absolute" src={item.img} alt={item.title} />
					<img
						class="w-96 rounded-sm relative duration-100 opacity-0 hover:opacity-100"
						src={item.img1}
						alt={item.title}
					/>
					<h4 class="font-semibold text-lg mt-4">{item.title}</h4>
				</a>
				<div class="flex flex-row place-items-center">
					<p class="font-normal text-base">{item.price}</p>
					<span class="text-[#fa0f0f] italic text-xs ml-2"> (resell price) </span>
				</div>
			</div>
		{/each}
	</div>
	<div class="w-6 mx-auto">
		<hr class="border-2   border-[#fa0f0f] text-center" />
	</div>
</main>

<Footer />

<style>
	@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
	main {
		font-family: 'Poppins', sans-serif;
	}
</style>
