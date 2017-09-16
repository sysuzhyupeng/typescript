require('../resources/less/index.less')
var Tab = require('./tab.js');

//第一个tab
let tab1 = new Tab({
	'tabBtn':'#tabA .tab-i',
    'tabCon':'#tabA .tab-c',
    'selected':'tab-cur'
});

//第二个tab
let tab2 = new Tab({
	'tabBtn':'#tabB .tab-j',
    'tabCon':'#tabB .tab-k',
    'selected':'tab-cur02',
    'type':'mouseover'
});
