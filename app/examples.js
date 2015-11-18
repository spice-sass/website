import ThemeSwitch from './components/header/themeSwitch';
import Icons from './components/examples/Icons';

React.render(
	<ThemeSwitch />,
	document.getElementById('theme-switcher')
);

React.render(
	<Icons />,
	document.getElementById('icons')
);