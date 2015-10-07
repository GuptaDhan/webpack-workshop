require('./vendor-1');
require('./vendor-2');


if (location.pathname === '/checkout.html') {
	require.ensure([], function (require) {
		require('./checkout');
	});
}
else {
	console.log('browse');
}
