
import { render } from "@testing-library/react";
import { GifItem } from "../../components/GifItem";

describe('Pruebas en <GifItem></GifItem>', () => {
    const title = 'pitochu';
    const url = 'https://pikachu.com/pitochu.jpg';

    test('match con snpapshot', () => {
        const {container} = render(<GifItem title={title} url={url}/>);
        expect(container).toMatchSnapshot();
    })
})
