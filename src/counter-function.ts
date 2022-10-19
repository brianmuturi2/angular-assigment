export type returnNumber = (() => number);
export type returnVoid = (() => void);

export function counter (initial: number = 0): [returnNumber, returnVoid] {
    const functionOne = (): number => {
        return initial;
    };

    const functionTwo = (): void => {
        initial++;
    };

    return [functionOne, functionTwo];
}
