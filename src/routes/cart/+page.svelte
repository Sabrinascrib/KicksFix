<script>
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import { products, cart } from '$lib/stores/dataes/data';

	const checkout = () => {
		alert('checked out');
	};

	$: totalCartItems = $cart.length && $cart.reduce((sum, item) => sum + item.quantity, 0);
	$: totalAmount =
		$cart.length && $cart.reduce((total, item) => total + item.price * item.quantity, 0);
</script>

<Navbar />

<div class="cart mb-80">
	<div class=" w-[90%] mx-auto mb-10">
		<h3 class="text-4xl mt-20 uppercase ">Your Shopping Cart</h3>
		<div class="w-6 mt-1"><hr class="border-2   border-[#fa0f0f]" /></div>
	</div>

	{#if $cart.length}
		{#each $cart as item}
			<div
				class="bg-[#f6f6f6] flex flex-row mb-8 w-[90%] mx-auto rounded-sm place-items-center justify-between"
			>
				<img class=" rounded-sm w-40" src={item.img} alt={item.title} />
				<p class="font-semibold">{item.title}</p>
				<input
					class="w-8 h-8 text-center bg-[#f6f6f6] "
					min="0"
					max="99"
					type="number"
					bind:value={item.quantity}
				/>
				<p class="mr-8">{item.price * item.quantity}€</p>
			</div>
		{/each}

		<div class="flex flex-col mt-20 w-[90%] mx-auto">
			<div class="flex flex-row place-items-center  ml-auto">
				<div class="flex flex-col">
					<p class="text-md font-bold">Sub-total</p>
					<p class="text-xs text-gray-700">{totalCartItems} Items</p>
				</div>

				<p class="text-4xl ml-4">{totalAmount}€</p>
			</div>
			<button
				on:click={checkout}
				class="ml-auto rounded-sm w-48  mt-4 text-2xl py-2 text-white bg-[#fa0f0f]">Checkout</button
			>
		</div>
	{:else}
		<p class="text-center my-80">Cart is empty. Add items to cart.</p>
	{/if}
</div>

<Footer />

<style>
	h3,
	button {
		font-family: 'Bebas Neue', sans-serif;
	}

	.cart {
		font-family: 'Poppins', sans-serif;
	}
</style>
