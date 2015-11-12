import Preview from './components/home/Preview';
import Logo    from './components/home/Logo';
import ThemeSwitch from './components/header/themeSwitch';


document.body.className = 'animations';

React.render(
	<Logo />,
	document.getElementById('intro-pane')
);

React.render(
	<ThemeSwitch />,
	document.getElementById('theme-switcher')
);

// React.render(
//  	<Preview/>,
//     document.getElementById('preview')
// );