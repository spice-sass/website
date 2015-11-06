import Preview from './components/home/Preview';
import Logo    from './components/home/Logo';
import Timing  from './components/home/Timing'; 

console.log(new Timing('d', 7000))

React.render(
	<Logo />,
	document.getElementById('main-logo')
);

// React.render(
//  	<Preview/>,
//     document.getElementById('preview')
// );