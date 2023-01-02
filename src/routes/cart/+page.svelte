<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import { products, cart } from '$lib/data';

	const checkout = () => {
		alert(JSON.stringify($cart));
	};

	$: totalCartItems = $cart.length && $cart.reduce((sum, item) => sum + item.quantity, 0);
	$: totalAmount =
		$cart.length && $cart.reduce((total, item) => total + item.price * item.quantity, 0);
</script>

<Navbar />

<div class="cart">
	<h3 class="text-4xl uppercase ">Your Shopping Cart</h3>
	{#if $cart.length}
		{#each $cart as item}
			<div class="flexible-grid">
				<div>{item.img}</div>
				<p>{item.title}</p>

				<input min="0" max="99" class="w-60" type="number" bind:value={item.quantity} />
				<p>{item.price * item.quantity}€</p>
			</div>
		{/each}
		<div class="total-amount">
			<p>Total</p>
			<p />
			<p>{totalCartItems}</p>
			<p>{totalAmount}€</p>
		</div>
		<div class="flex">
			<button on:click={checkout} class="ml-auto">Checkout</button>
		</div>
	{:else}
		<p>Cart is empty. Add items to cart.</p>
	{/if}
</div>

<style>
	h3 {
		font-family: 'Bebas Neue', sans-serif;
	}
</style>
