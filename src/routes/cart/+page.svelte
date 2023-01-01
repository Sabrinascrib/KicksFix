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

Cart({totalCartItems})

<div class="cart">
	{#if $cart.length}
		{#each $cart as item}
			<div class="flexible-grid">
				<p>{item.title}</p>
				<div>{item.img}</div>
				<input min="0" max="99" class="w-60" type="number" bind:value={item.quantity} />
				<p>€{item.price * item.quantity}</p>
			</div>
		{/each}
		<div class="total-amount">
			<p>Total</p>
			<p />
			<p>{totalCartItems}</p>
			<p>{totalAmount}E</p>
		</div>
		<div class="flex">
			<button on:click={checkout} class="ml-auto">Checkout</button>
		</div>
	{:else}
		<p>Cart is empty. Add items to cart.</p>
	{/if}
</div>

<style>
	.flexible-grid {
		display: grid;
		place-items: center;
		max-width: 300px;
		grid-template-columns: 1fr 1fr 1fr 1fr;
	}
	.total-amount {
		display: grid;
		place-items: center;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		border-top: 2px dashed #eee;
	}
	details {
		display: inline;
		border: 2px solid #eee;
		margin-bottom: 20px;
		cursor: pointer;
	}
	summary {
		padding: 0 10px;
	}
	.cart {
		padding: 10px;
	}
	.flex {
		display: flex;
	}
	.ml-auto {
		margin-left: auto;
	}
	.w-60 {
		width: 60px;
	}
</style>
