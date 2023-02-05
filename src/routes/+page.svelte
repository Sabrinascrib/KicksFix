<script>
	import firered from '$lib/assets/fire-red.png';

	import Footer from '$lib/components/Footer.svelte';

	import Navbar from '$lib/components/Navbar.svelte';
</script>

<Navbar />

<section
	class="hero mb-[550px] mt-56 flex flex-col sm:flex-row place-items-center justify-center mx-10 max-w-[3000px]"
>
	<div class="hero-info sm:mr-[-100px] ">
		<h2
			class="text-4xl  sm:text-[5vw] font-bold text-black mb-8 sm:mb-4 max-w-[400px] uppercase lg:text-[50px]"
		>
			Get yourself a pair of jordan 4's now!
		</h2>
		<a
			class="text-lg bg-[#fa0f0f]  py-2 rounded-sm duration-100 px-10 uppercase text-white hover:bg-[#d61212] "
			href="/items">Shop</a
		>
	</div>
	<div class="">
		<img
			class=" w-[500px] sm:w-[700px] sm:mb-[-300px] sm:ml-[-20px]"
			src={firered}
			alt="Jordan 4 Fire Red"
		/>
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
