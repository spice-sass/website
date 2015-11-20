import ThemeSwitch from './components/header/themeSwitch';
import Icons from './components/examples/Icons';
import Animations from './components/examples/Animations';

React.render(
	<ThemeSwitch />,
	document.getElementById('theme-switcher')
);

React.render(
	<Animations />,
	document.getElementById('animations')
);

React.render(
	<Icons />,
	document.getElementById('icons')
);