import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../hooks/useFetchGifs"

describe ('Pruebas en el hook userFetchGifs', () => {
  
  test('Regresar el estado inicial', () => {
    const {result} = renderHook(() => useFetchGifs('bob toronja'));
    const {images, isLoading} = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy()
  })

  test('Regresar el estado inicial', async() => {
    const {result} = renderHook(() => useFetchGifs('bob toronja'));
    
    await waitFor(
      () => expect(result.current.images.length).toBeGreaterThan(0)
    )

    const {images, isLoading} = result.current

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy()
  })
})
