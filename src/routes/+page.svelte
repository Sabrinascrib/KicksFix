<script>
	import homeplush from '$lib/assets/home-plush.jpg';

	import Navbar from '$lib/components/Navbar.svelte';
</script>

<Navbar />

<section class="hero flex flex-row place-items-center justify-center mx-10 max-w-[3000px]">
	<div class="hero-info w-1/2 ">
		<h2 class="text-[3vw] font-extrabold text-sky-200 mb-4">Fluffy, Cute, Sanrio.</h2>

		<p class="text-[1.5vw] text-rose-200 font-semibold mb-6">Get your sanrio plushie now!</p>
		<a class="text-[1vw] bg-sky-200 py-2 px-10 rounded-full text-white" href="/items">Buy Now</a>
	</div>
	<div class="w-1/2">
		<img class="" src={homeplush} alt="blue plushie" />
	</div>
</section>
