import { render } from '@testing-library/react'
import { FirstApp } from '../src/FirstApp';



describe('<FirstApp> Test Cases Suit', () => {

    // test('should match with the snapshot', () => {
    //     const title = "My Test Title";
    //     const { container } = render(<FirstApp title={title}></FirstApp>);

    //     // Allows to create a snapshot to make sure the component does not change
    //     expect(container).toMatchSnapshot();

    // });

    test('should display the tittle in an H1 tag', () => {
        const title = "My Test Title";
        const { getByText, getByTestId } = render(<FirstApp title={title}></FirstApp>);

        const componentTitle = getByTestId("test-title").innerHTML;

        // Ensure the text is present in the Component
        expect(getByText(title)).toBeTruthy();
        expect(componentTitle).toContain(title);

    });


    test('should display the subtittle sent in the props', () => {
        const title = "My Test Title";
        const subTitle = 1234;
        
        const { getByText, getByTestId } = render(
            <FirstApp title={title} subTitle={subTitle} />
        );

        const componentSubTitle = getByTestId("test-subTitle").innerHTML;

        // Ensure the text is present in the Component
        expect(getByText(subTitle)).toBeTruthy();
        expect(componentSubTitle).toBe(subTitle.toString());

    });


});