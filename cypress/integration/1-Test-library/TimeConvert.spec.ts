import {
	CalculateTimeDiff,
	ConvertDate,
} from '../../../helpers/TimeConvertHelper';

describe('Time convert helper testing', () => {
	before(() => {
		// check if the import worked correctly
		expect(ConvertDate, 'ConvertDate').to.be.a('function');
		expect(CalculateTimeDiff, 'CalculateTimeDiff').to.be.a('function');
	});

	context('TimeConvertHelper.ts', () => {
		it('Calculate time diff', () => {
			const now = new Date();
			const thirstyMinutes = new Date();
			thirstyMinutes.setMinutes(now.getMinutes() - 30);

			const twelveHours = new Date();
			twelveHours.setHours(now.getHours() - 12);

			const oneDay = new Date();
			oneDay.setDate(now.getDate() - 1);

			const oneYear = new Date();
			oneYear.setFullYear(now.getFullYear() - 1);

			expect(CalculateTimeDiff(now)).to.equal('recently');
			expect(CalculateTimeDiff(thirstyMinutes)).to.equal(
				'30 minutes ago',
			);
			expect(CalculateTimeDiff(twelveHours)).to.equal('12 hours ago');
			expect(CalculateTimeDiff(oneDay)).to.equal('1 dates ago');
			expect(CalculateTimeDiff(oneYear)).to.equal('1 years ago');
		});

		it('Convert Date', () => {
			expect(ConvertDate(1621815298)).to.equal('24/05/2021 07:14');
			expect(ConvertDate(0)).to.equal('01/01/1970 07:00');
		});
	});
});
