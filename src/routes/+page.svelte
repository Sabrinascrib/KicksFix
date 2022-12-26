<script>
	import balckcanvas from '$lib/assets/black-canvas.jpg';

	import Navbar from '$lib/components/Navbar.svelte';
</script>

<Navbar />

<section class="hero mt-40 flex flex-row place-items-center justify-center mx-10 max-w-[3000px]">
	<div class="hero-info  ">
		<h2 class="text-[50px] font-bold text-black mb-4 max-w-[600px] uppercase">
			Get yourself a pair of jordan 4's now!
		</h2>
		<a class="text-lg bg-[#fa0f0f] py-2 px-10 uppercase text-white" href="/items">Shop</a>
	</div>
	<div class="">
		<img class="w-[500px]" src={balckcanvas} alt="blue plushie" />
	</div>
</section>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
	.hero {
		font-family: 'Poppins', sans-serif;
	}

	a {
		font-family: 'Bebas Neue', cursive;
	}
</style>
