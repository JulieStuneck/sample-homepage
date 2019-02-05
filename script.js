const selectable = document.querySelectorAll('.good-box');
const selected = Array.from(selectable);
const description = document.getElementById('description');
const autoCompleteInput = document.getElementById('autoComplete');

selected.forEach(el => {
	el.addEventListener('click', event => {
		console.log('an item was clicked') //remove when done
		document.querySelector('.activeBox').classList.remove('activeBox');
		event.target.classList.add('activeBox');

		if (event.target.id === 'box-1') {
			document.getElementById('description').innerHTML = box1Text;
		} else if (event.target.id === 'box-2') {
			document.getElementById('description').innerHTML = box2Text;
		} else if (event.target.id === 'box-3') {
			document.getElementById('description').innerHTML = box3Text;
		}		
	})
});

autoCompleteInput.addEventListener('keypress', event => {
	let city = autoCompleteInput.value;

	if (event.keyCode == 13 ) {
		event.preventDefault();

		switch (city) {
			case 'Akron':
				window.location = 'https://goo.gl/maps/kmorKkw9QrP2';
				break;
			case 'Cleveland':
				window.location = 'https://goo.gl/maps/HZDK9yBxjJF2';
				break;
			case 'Detroit':
				window.location = 'https://goo.gl/maps/2PmyB6CDVZ42';
				break;
			default:

				window.location = 'https://www.google.com/maps/place/' + city;
		}
	}
}, false);


const box1Text  = `
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut varius sem, ut fringilla urna. In dignissim dictum commodo. Etiam cursus metus turpis, nec porta sapien vehicula nec. Ut leo est, porta vitae turpis non, maximus placerat mi. Aliquam sit amet sapien vitae metus luctus aliquam. Praesent eu ipsum nec justo malesuada fermentum eget ut urna.<br>
		<br>
		 Donec pulvinar enim id nisi pharetra pretium. Sed placerat lacus quis lacus sodales dictum. Sed scelerisque vel ex non maximus. Proin euismod dui facilisis risus euismod porttitor vel eu dui.<br>
		 <br> Vivamus leo nunc, lacinia sit amet mi sed, consequat convallis nisl. Sed ac placerat tortor, ut tempor ante. Sed finibus imperdiet nisi vel lobortis. Aenean mi dolor, ullamcorper ut ligula eget, fringilla vehicula dolor. Nulla nisi justo, facilisis sit amet tellus ut, dapibus varius felis. 
`;

const box2Text = `
	Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. <br>
	<br>
	Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. <br>
	<br>
	Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
`;

const box3Text = `
	At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. <br>
	<br>
	Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. 
`;
