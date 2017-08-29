export default function sortTabs(a, b) {
	if (a.order > b.order) {
		return 1;
	}

	if (a.order < b.order) {
		return -1;
	}

	return 0;
}
