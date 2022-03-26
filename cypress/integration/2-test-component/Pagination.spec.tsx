import { mount } from '@cypress/react'; // or @cypress/vue

import Pagination from '../../../components/Pagination';

describe('Pagination Component', () => {
	it('Correct pagination behavior', () => {
		const pageIndex = 3;
		const pageSize = 5;
		const totalPage = 10;

		const expectTotalItem =
			totalPage > pageSize ? pageSize + 4 : pageSize + 2;

		mount(
			<Pagination
				iPageIndex={pageIndex}
				iPaginatorRange={pageSize}
				iTotalPage={totalPage}
			/>,
		);

		const lstItems = cy.get('li');
		lstItems.should('have.length', expectTotalItem);
		lstItems
			.find('button[data-isactive="true"]')
			.should('have.data', 'index', pageIndex);
	});
	// it('Button', () => {
	// 	mount(<Button>Test button</Button>);
	// 	cy.get('button').contains('Test button').click();
	// });
});
