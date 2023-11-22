import { render, screen, fireEvent } from "@testing-library/react"
import { AddCategory } from "../../components/AddCategory"

describe('Pruebas en <AddCategory/>', () => {

    test('debe de cambiar el input', () => {

        render(<AddCategory onNewCategory={() => {}}/>)
        const input = screen.getByRole('textbox');

        fireEvent.input(input, {target: {value: 'mojojo'}});

        expect(input.value).toBe('mojojo')
    });


    test('debe de llamar onNewCategory si el input tiene un valor', () => {
        const inputValue = 'mojojo';
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory}/>)

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: inputValue}})
        fireEvent.submit(form);

        expect(input.value).toBe('')
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenLastCalledWith(inputValue)
    })

    test('no debe de llamar el onNewCategory si el input esta vacio', () => {
        const inputValue = '';
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory}/>)

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: inputValue}})
        fireEvent.submit(form);

        expect(input.value).toBe('')
        expect(onNewCategory).not.toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenLastCalledWith(inputValue)
    })


})
