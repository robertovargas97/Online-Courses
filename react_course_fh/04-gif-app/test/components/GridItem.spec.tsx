import { GridItem } from '../../src/components/GridItem';
import { render, screen } from '@testing-library/react';



describe('<GridItem> Component Test Suite', () => {
    const title: string = "Saitma";
    const url: string = "https://one-punch.com/";


    test('should match the snapshoop', () => {
        const { container } = render(<GridItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });

    test('should display the image with the given url and title', () => {
        render(<GridItem title={title} url={url} />);
        // See the component to test
        // screen.debug();
        const gifElement: HTMLImageElement = screen.getByTestId('gif');
        const { src: gifElementUrl, alt: gifElementAltText } = gifElement;

        expect(gifElementUrl).toBe(url);
        expect(gifElementAltText).toBe(title);

    });

    test('should display the image tittle as <p>', () => {
        render(<GridItem title={title} url={url} />);

        const imageTitle: string = screen.getByTestId("image-title").innerHTML;
        expect(imageTitle).toBe(title);

    });







});