window.onload = () => {
	const canvas = document.querySelector('canvas');
	if (!canvas) {
		return setTimeout(() => window.onload(), 100);
	}
	const box = canvas.getBoundingClientRect();
	const size = window.location.hash.substring(1).split('x').map(str => parseInt(str));
	if (!size) {
		return;
	}
	const scale = Math.min(
  	size[0] / box.width,
  	size[1] / box.height
	);
	if (scale < 1) {
		canvas.style.transform = `scale(${scale})`;
	}
}
