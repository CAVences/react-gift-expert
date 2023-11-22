import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock('../../hooks/useFetchGifs')

describe('Pruebas en <GifGrid />', () => {

    const category = 'popo';

    test('debe de mostrar el loading', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render(<GifGrid category={category} />);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    })


    test('debe de mostrar el loading', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'popo',
                url: 'https://www'
            },
            {
                id: 'ABg',
                title: 'mojojo',
                url: 'https://www'
            },
            {
                id: 'ABh',
                title: 'chupalo',
                url: 'https://www'
            },
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true
        })

        render(<GifGrid category={category} />);
        expect(screen.getAllByRole('img').length).toBe(3);
    })
})
