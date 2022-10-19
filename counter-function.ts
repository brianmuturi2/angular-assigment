type returnNumber = (() => number);
type returnVoid = (() => void);

export function counter (initial: number = 0): Array<returnNumber|returnVoid> {
    const functionOne = (): number => {
        return initial;
    };

    const functionTwo = (): void => {
        initial++;
    };

    return [functionOne, functionTwo];
}
