import Docs from './components/docs/Docs';
import Header from './components/header/header';


// Component Tree
// ===========================================

// -- Header
// -- Docs
//    |-- Sidebar
//        |-- SBLink
//    |
//    |-- List
//        |-- MixinGroup
//            |-- MixinItem
//    	      	  |-- MixinTabs

React.render(
 	<Header/>,
    document.getElementById('search-docs')
);

React.render(
 	<Docs/>,
    document.getElementById('documentation')
);
