console.log('You are at ' + window.location);

let answer = prompt('name');
answer = answer.toLowerCase();

switch(answer) {
	case 'dr. dre':
		console.log('rap');
		break;
	case 'hendrix':
		console.log('rock');
		break;
	case 'spears':
		console.log('pop');
		break;
	default:
		console.log('no such singer in database');
		break;
}