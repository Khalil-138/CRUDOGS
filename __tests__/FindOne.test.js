import { describe, it, expect } from '@jest/globals'
import ServiceCalculadora from '../src/services/calculadora'

describe('Testando função dividir',  () => {

    it('Dividindo dois número positivos', () => {
        const resultado = dividir (4, 2)

        expect (resultado).toBe(2)
    })

     it('Dividindor dois número negativos', () => {
        const resultado = dividir (-4, -4)

        expect (resultado).toBe(-1)
    })
     it('Dividindo dois número com casa decimal', () => {
        const resultado = dividir (3.2, 3.2)

        expect (resultado).toBe(1)
    })

     it('Dividindo zero com outro número', () => {
        const resultado = dividir (0, 2)

        expect (resultado).toBe(0)
    })
    
     it('Divindo um número com zero', () => {
        const resultado = dividir (4, 0)

        expect (resultado).toBe(0)
    })
} )