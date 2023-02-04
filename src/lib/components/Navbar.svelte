<script>
	import { products, cart } from '$lib/stores/dataes/data';

	$: totalCartItems = $cart.length && $cart.reduce((sum, item) => sum + item.quantity, 0);

	let showMenu = false;

	function toggleNavbar() {
		showMenu = !showMenu;
	}
</script>

<div class="bg-[#f6f6f6] w-full">
	<nav
		class="container justify-between  place-items-center mx-auto py-8 md:flex-row-reverse md:flex  md:items-center"
	>
		<div class="">
			<a class="text-4xl absolute" href="/cart"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="1em"
					height="1em"
					preserveAspectRatio="xMidYMid meet"
					viewBox="0 0 256 256"
					><path
						fill="currentColor"
						d="m209.7 131.9l12.2-66.8a6.1 6.1 0 0 0-1.3-4.9A5.8 5.8 0 0 0 216 58H53l-5.2-28.5A13.9 13.9 0 0 0 34.1 18H16a6 6 0 0 0 0 12h18.1a2 2 0 0 1 1.9 1.6l27.7 152.2A26 26 0 1 0 106 204a25.6 25.6 0 0 0-4.1-14h60.2a25.6 25.6 0 0 0-4.1 14a26 26 0 1 0 26-26H74.8l-5.1-28h118.4a22 22 0 0 0 21.6-18.1ZM94 204a14 14 0 1 1-14-14a14 14 0 0 1 14 14Zm104 0a14 14 0 1 1-14-14a14 14 0 0 1 14 14ZM55.2 70h153.6l-10.9 59.8a10 10 0 0 1-9.8 8.2H67.6Z"
					/></svg
				></a
			>
			<div
				class="bg-[#fa0f0f] rounded-sm h-4 w-4 text-xs text-white place-items-center relative top-5 right-1 text-center"
			>
				<p>{totalCartItems}</p>
			</div>
		</div>

		<div class="flex items-center justify-between">
			<a class=" font-normal uppercase text-lg hidden md:block" href="/">
				<h3 class="text-4xl text-center uppercase font-bold ">
					Kicks<span class="text-[#fa0f0f]">Fix</span>
				</h3></a
			>
			<!-- Mobile menu button -->
			<div on:click={toggleNavbar} class="flex md:hidden">
				<button
					type="button"
					class="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
				</button>
			</div>
		</div>

		<!-- Mobile Menu open: "block", Menu closed: "hidden" -->
		<div
			class=" links flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 {showMenu
				? 'flex'
				: 'hidden'}"
		>
			<a class=" font-normal uppercase text-lg" href="/">Home</a>
			<a class=" font-normal uppercase md:ml-8 text-lg" href="/items">Shop</a>
		</div>
	</nav>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

	h3 {
		font-family: 'Bebas Neue', sans-serif;
	}

	.links {
		font-family: 'Poppins', sans-serif;
	}
</style>
