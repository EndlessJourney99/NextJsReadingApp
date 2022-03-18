export const DateDiff = {
	inMinutes(d1: Date, d2: Date) {
		const t2 = d2.getTime();
		const t1 = d1.getTime();
		return Math.floor((t2 - t1) / 60000);
	},

	inHours(d1: Date, d2: Date) {
		const t2 = d2.getTime();
		const t1 = d1.getTime();
		return Math.floor((t2 - t1) / (3600 * 1000));
	},

	inDays(d1: Date, d2: Date) {
		const t2 = d2.getTime();
		const t1 = d1.getTime();
		return Math.floor((t2 - t1) / (24 * 3600 * 1000));
	},

	inWeeks(d1: Date, d2: Date) {
		const t2 = d2.getTime();
		const t1 = d1.getTime();

		return Math.floor((t2 - t1) / (24 * 3600 * 1000 * 7));
	},

	inMonths(d1: Date, d2: Date) {
		const d1Y = d1.getFullYear();
		const d2Y = d2.getFullYear();
		const d1M = d1.getMonth();
		const d2M = d2.getMonth();

		return d2M + 12 * d2Y - (d1M + 12 * d1Y);
	},

	inYears(d1: Date, d2: Date) {
		return d2.getFullYear() - d1.getFullYear();
	},
};

export const GetFullDateTime = {
	FullDate(d: number) {
		if (d < 10) return `0${d}`;
		return d;
	},
	FullMonth(m: number) {
		if (m < 10) return `0${m}`;
		return m;
	},
	StringMonth(m: number) {
		const monthNames = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		];
		return monthNames[m];
	},
	FullHours(h: number) {
		if (h < 10) return `0${h}`;
		return h;
	},
	FullMinutes(m: number) {
		if (m < 10) return `0${m}`;
		return m;
	},
};

export const ConvertDate = (UnixTime: number): string => {
	const date = new Date(UnixTime);
	return `${GetFullDateTime.FullDate(
		date.getDate(),
	)}/${GetFullDateTime.FullMonth(
		date.getMonth() + 1,
	)}/${date.getFullYear()} ${GetFullDateTime.FullHours(
		date.getHours(),
	)}:${GetFullDateTime.FullMinutes(date.getMinutes())}`;
};

export function CalculateTimeDiff(InputTime: string | Date) {
	const CurrentTime = new Date();
	const CommentDateTime = new Date(InputTime);
	let Unit = 'minutes ago';
	let TimeDiff = DateDiff.inMinutes(CommentDateTime, CurrentTime);
	if (TimeDiff > 60) {
		TimeDiff = DateDiff.inHours(CommentDateTime, CurrentTime);
		Unit = 'hours ago';
		if (TimeDiff > 24) {
			TimeDiff = DateDiff.inDays(CommentDateTime, CurrentTime);
			Unit = 'dates ago';
			if (TimeDiff > 365) {
				TimeDiff = DateDiff.inYears(CommentDateTime, CurrentTime);
				Unit = 'years ago';
			}
		}
	}
	if (TimeDiff === 0) return 'recently';
	return `${TimeDiff} ${Unit}`;
}
