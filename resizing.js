window.onload = () => {
	const canvas = document.querySelector('canvas');
	const box = canvas.getBoundingClientRect();
	const scale = Math.min(
  	window.innerWidth / box.width,
  	window.innerHeight / box.height
	);
	if (scale < 1) {
		canvas.style.transform = `scale(${scale})`;
	}
}
