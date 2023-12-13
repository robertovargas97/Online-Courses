import { render, screen } from '@testing-library/react'
import { FirstApp } from '../src/FirstApp';


describe('<FirstApp> Test Cases Suit', () => {

    const title = "My Test Title";
    const subTitle = 1234;


    test('should match with the snapshot', () => {
        const { container } = render(<FirstApp title={title}></FirstApp>);
        // Allows to create a snapshot to make sure the component does not change
        expect(container).toMatchSnapshot();

    });

    test('should display the tittle "My Test Title"', () => {
        render(<FirstApp title={title}></FirstApp>);
        expect(screen.getByText(title)).toBeTruthy();
        // screen.debug();
    });

    test('should display the tittle "My Test Title" in an H1 tag', () => {
        render(<FirstApp title={title}></FirstApp>);
        const componentTitle = screen.getByRole('heading', { level: 1 }).innerHTML;
        expect(componentTitle).toContain(title);

    })

    test('should display the subTittle sent in the props', () => {
        render(
            <FirstApp title={title} subTitle={subTitle} />
        );

        const componentSubTitle = screen.getByRole('heading', { level: 2 }).innerHTML;

        // Ensure the text is present in the Component
        expect(componentSubTitle).toBe(subTitle.toString());

    });


});