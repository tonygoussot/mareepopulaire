export function calcRes (screenWidth, resRatio, limit) {
	const outputRes = {w: 0, h: 0};
	if (limit && screenWidth > limit) {
		outputRes.w = limit;
		outputRes.h = outputRes.w / resRatio;
	} else {
		outputRes.w = screenWidth;
		outputRes.h = screenWidth / resRatio;
	}
	return outputRes;
}