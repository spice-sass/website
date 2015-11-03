import Preview from './components/home/Preview';
import Timing from './components/home/Timing';

console.log(new Timing('d', 7000))

React.render(
 	<Preview/>,
    document.getElementById('preview')
);