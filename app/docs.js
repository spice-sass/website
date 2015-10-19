import React from "../node_modules/react/react";
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
//    	      |-- MixinTab 



React.render(
 	<Header/>,
    document.getElementById('search-docs')
);

React.render(
 	<Docs/>,
    document.getElementById('documentation')
);
