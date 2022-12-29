<script>
	import firered from '$lib/assets/fire-red.png';

	import Footer from '$lib/components/Footer.svelte';

	import Navbar from '$lib/components/Navbar.svelte';
</script>

<Navbar />

<section
	class="hero mb-[550px] mt-56 flex flex-row place-items-center justify-center mx-10 max-w-[3000px]"
>
	<div class="hero-info mr-[-100px] ">
		<h2 class="text-[50px] font-bold text-black mb-4 max-w-[400px] uppercase">
			Get yourself a pair of jordan 4's now!
		</h2>
		<a
			class="text-lg bg-[#fa0f0f]  py-2 rounded-sm duration-100 px-10 uppercase text-white hover:bg-[#d61212] "
			href="/items">Shop</a
		>
	</div>
	<div class="">
		<img class="w-[700px] mb-[-300px] ml-[-20px]" src={firered} alt="blue plushie" />
	</div>
</section>

<Footer />

<style>
	@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
	.hero {
		font-family: 'Bebas Neue', sans-serif;
	}

	a {
		font-family: 'Bebas Neue', sans-serif;
	}
</style>
