import Preview from './components/home/Preview';
import Logo    from './components/home/Logo';
import Timing  from './components/home/Timing';
import ThemeSwitch from './components/header/themeSwitch';

console.log(new Timing('d', 7000))

React.render(
	<Logo />,
	document.getElementById('main-logo')
);

React.render(
	<ThemeSwitch />,
	document.getElementById('theme-switcher')
);

// React.render(
//  	<Preview/>,
//     document.getElementById('preview')
// );