import { AbstractList } from "@jsdsl/abstract-list";
import { IIterator } from "iter-over";
export declare class ArrayList<E = any> extends AbstractList<E> {
    private internalArray;
    constructor(...elements: E[]);
    add(element: E): void;
    get(index: number): E;
    remove(element: E): void;
    removeIndex(index: number): E;
    shuffle(iterations?: number): void;
    size(): number;
    contains(element: E): boolean;
    clear(): void;
    iterator(): IIterator<E>;
    subList(start: number, end?: number): ArrayList<E>;
    toArray(): E[];
}
