<script>
	let items = [
		{
			img: 'https://sneakernews.com/wp-content/uploads/2022/01/Air-Jordan-4-Infrared-DH6927-061-5.jpg',
			title: 'Air Jordan 4 Infrared',

			price: '380€'
		},
		{
			img: 'https://sneakernews.com/wp-content/uploads/2022/07/jordan-4-canvas-DH7138-006-6.jpg',
			title: 'Air Jordan 4 Black Canvas',
			price: '380€'
		},
		{
			img: 'https://sneakernews.com/wp-content/uploads/2022/08/air-jordan-4-white-navy-dh6927-140-official-images-5.jpg',
			title: 'Air Jordan 4 Midnight Navy',
			price: '380€'
		},
		{
			img: 'https://sneakernews.com/wp-content/uploads/2022/08/air-jordan-4-thunder-2023-release-info-2.jpg',
			title: 'Air Jordan 4 Thunder',
			price: '380€'
		},

		{
			img: 'https://sneakernews.com/wp-content/uploads/2022/08/air-jordan-4-gs-messy-room-dr6952-400-5.jpg',
			title: 'Air Jordan 4 GS Messy Room',
			price: '380€'
		},
		{
			img: 'https://sneakernews.com/wp-content/uploads/2022/07/jordan-4-canyon-purple-AQ9129-500-1.jpg',
			title: 'Air Jordan 4 Canyon Purple',
			price: '380€'
		},
		{
			img: 'https://sneakernews.com/wp-content/uploads/2020/09/jordan-4-fire-red-official-images-DC7770-160-7.jpg',
			title: 'Air Jordan 4 Fire Red',
			price: '380€'
		},
		{
			img: 'https://sneakernews.com/wp-content/uploads/2022/02/air-jordan-4-blank-canvas-dq4909-100-release-date-7.jpg',
			title: 'Air Jordan 4 Blank Canvas',
			price: '380€'
		},
		{
			img: 'https://sneakernews.com/wp-content/uploads/2020/05/Air-Jordan-4-Metallic-Purple-Kids-408452_115-4.jpg',
			title: 'Air Jordan 4 Metallic Purple',
			price: '380€'
		},
		{
			img: 'https://sneakernews.com/wp-content/uploads/2021/04/air-jordan-4-lightning-CT8527-700-release-date-8.jpg',
			title: 'Air Jordan 4 Lightning',
			price: '380€'
		}
	];
</script>

<main>
	{#each items as item}
		<img src={item.img} alt={item.title} />
		<h4>{item.title}</h4>
		<p>{item.price}</p>
	{/each}
</main>
