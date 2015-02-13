window.addEventListener('click', e => {
	if (e.target.target === 'next' || e.target.target === 'previous') {
		window.open(e.target.href, 'nextpage' + Date.now(), 'mozhaidasheet');
		e.preventDefault();
	}

	if (e.target.dataset && e.target.dataset.click === 'suicide') {
		setTimeout(() => {
			window.close();
		}, 500);
	}
});
