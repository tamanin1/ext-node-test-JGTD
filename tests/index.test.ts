import { ext } from '../src/index';

describe('numeroPorExtenso', () => {
    test('deve retornar o número por extenso corretamente', () => {
        expect(ext(0)).toBe('zero');
    });
});