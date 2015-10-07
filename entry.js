switch(location.pathname) {
	case '/checkout.html':
		require('./admin');
		break;
	case '/browse.html':
		require('./browse');
		break;
	case '/checkout.html':
		require('./checkout');
		break;
}
