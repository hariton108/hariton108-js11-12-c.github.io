$(function() {
	
	var data = {
		name: 'Харитошин Владислав',
		photo: 'img/photo.jpg',
		description: 'Частный предприниматель',
		reasons: ['Люблю его', 'Хочу им зарабатывать', 'Бизнес все равно еле дышит'],
		phone: '+38022222222222',
		vk: 'https://vk.com',
		feedback: 'Если нужно, могу построить вам забор'
	};

	var content = _.template($('#cv-template').html());

	var result = content(data);

	$('body').append(result);
});
