<script>
	import Navbar from '$lib/components/Navbar.svelte';

	let items = [
		{
			img: 'https://sneakernews.com/wp-content/uploads/2022/01/Air-Jordan-4-Infrared-DH6927-061-5.jpg',
			img1: 'https://sneakernews.com/wp-content/uploads/2022/01/Air-Jordan-4-Infrared-DH6927-061-10.jpg?w=1140',
			img2: 'https://sneakernews.com/wp-content/uploads/2022/01/Air-Jordan-4-Infrared-DH6927-061-1.jpg?w=1140',
			title: 'Air Jordan 4 Infrared',
			price: '380€'
		},
		{
			img: 'https://sneakernews.com/wp-content/uploads/2022/07/jordan-4-canvas-DH7138-006-6.jpg',
			img1: 'https://sneakernews.com/wp-content/uploads/2022/07/jordan-4-canvas-DH7138-006-2.jpg',
			img2: 'https://sneakernews.com/wp-content/uploads/2022/07/jordan-4-canvas-DH7138-006-1.jpg',
			title: 'Air Jordan 4 Black Canvas',
			price: '380€'
		},
		{
			img: 'https://sneakernews.com/wp-content/uploads/2022/08/air-jordan-4-white-navy-dh6927-140-official-images-5.jpg',
			img1: 'https://sneakernews.com/wp-content/uploads/2022/08/air-jordan-4-white-navy-dh6927-140-official-images-1.jpg',
			img2: 'https://sneakernews.com/wp-content/uploads/2022/08/air-jordan-4-white-navy-dh6927-140-official-images-2.jpg',
			title: 'Air Jordan 4 Midnight Navy',
			price: '380€'
		},
		{
			img: 'https://sneakernews.com/wp-content/uploads/2022/08/air-jordan-4-thunder-2023-release-info-2.jpg',
			img1: 'https://sneakernews.com/wp-content/uploads/2022/08/air-jordan-4-thunder-2023-release-info-1.jpg',
			img2: 'https://sneakernews.com/wp-content/uploads/2022/08/air-jordan-4-thunder-2023-release-info-5.jpg',
			title: 'Air Jordan 4 Thunder',
			price: '380€'
		},
		{
			img: 'https://sneakernews.com/wp-content/uploads/2022/07/jordan-4-canyon-purple-AQ9129-500-1.jpg',
			img1: 'https://sneakernews.com/wp-content/uploads/2022/07/jordan-4-canyon-purple-AQ9129-500-5.jpg',
			img2: 'https://sneakernews.com/wp-content/uploads/2022/07/jordan-4-canyon-purple-AQ9129-500-4.jpg',
			title: 'Air Jordan 4 Canyon Purple',
			price: '380€'
		},
		{
			img: 'https://sneakernews.com/wp-content/uploads/2020/09/jordan-4-fire-red-official-images-DC7770-160-7.jpg',
			img1: 'https://sneakernews.com/wp-content/uploads/2020/09/jordan-4-fire-red-official-images-DC7770-160-1.jpg?w=1140',
			img2: 'https://sneakernews.com/wp-content/uploads/2020/09/jordan-4-fire-red-official-images-DC7770-160-2.jpg?w=1140',
			title: 'Air Jordan 4 Fire Red',
			price: '380€'
		},

		{
			img: 'https://sneakernews.com/wp-content/uploads/2022/02/air-jordan-4-blank-canvas-dq4909-100-release-date-7.jpg',
			img1: 'https://sneakernews.com/wp-content/uploads/2022/02/air-jordan-4-blank-canvas-dq4909-100-release-date-5.jpg',
			img2: 'https://sneakernews.com/wp-content/uploads/2022/02/air-jordan-4-blank-canvas-dq4909-100-release-date-1.jpg',
			title: 'Air Jordan 4 Blank Canvas',
			price: '380€'
		},
		{
			img: 'https://sneakernews.com/wp-content/uploads/2020/05/Air-Jordan-4-Metallic-Purple-Kids-408452_115-4.jpg',
			img1: 'https://sneakernews.com/wp-content/uploads/2020/05/Air-Jordan-4-Metallic-Purple-Kids-408452_115-6.jpg',
			img2: 'https://sneakernews.com/wp-content/uploads/2020/05/Air-Jordan-4-Metallic-Purple-Kids-408452_115-1.jpg',
			title: 'Air Jordan 4 Metallic Purple',
			price: '380€'
		},
		{
			img: 'https://sneakernews.com/wp-content/uploads/2021/04/air-jordan-4-lightning-CT8527-700-release-date-8.jpg',
			img1: 'https://sneakernews.com/wp-content/uploads/2021/04/air-jordan-4-lightning-CT8527-700-release-date-1.jpg?w=1140',
			img2: 'https://sneakernews.com/wp-content/uploads/2021/04/air-jordan-4-lightning-CT8527-700-release-date-2.jpg?w=1140',
			title: 'Air Jordan 4 Lightning',
			price: '380€'
		}
	];
</script>

<Navbar />

<main class=" max-w-[1500px] mx-auto mt-40">
	<h3 class="text-center text-xl">All Sneakers</h3>
	<div class="w-6 mx-auto">
		<hr class="border-2   border-red-500 text-center" />
	</div>

	<div class="max-w-[1500px] flex flex-row flex-wrap place-items-center  justify-evenly">
		{#each items as item}
			<div class="flex flex-col  m-10">
				<img class="w-96" src={item.img} alt={item.title} />

				<h4>{item.title}</h4>
				<p>{item.price}</p>
			</div>
		{/each}
	</div>
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
	main {
		font-family: 'Poppins', sans-serif;
	}
</style>
