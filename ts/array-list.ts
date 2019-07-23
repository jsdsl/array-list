/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	4:45 PM -- July 22nd, 2019.
 *	Project: @jsdsl/array-list
 */

import { AbstractList } from "@jsdsl/abstract-list";
import { IIterator, AbstractIterator } from "iter-over";

/**
 * An arraylist implementation in JavaScript/TypeScript.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export class ArrayList<E = any> extends AbstractList<E> {
	
	/**
	 * The internal array that is used to maintain this ArrayList's data.
	 */
	private internalArray: E[];
	
	/**
	 * Initializes a new ArrayList with the provided elements.
	 *
	 * @param elements The elements to add to the newly initialized ArrayList.
	 */
	public constructor(...elements: E[]) {
		
		super();
		
		this.internalArray = elements;
		
	}
	
	/**
	 * Adds an element to this ArrayList.
	 *
	 * @param element The element to add to this ArrayList.
	 */
	public add(element: E): void {
		
		this.internalArray.push(element);
		
	}
	
	/**
	 * Gets the element at the specified index and returns it.
	 *
	 * @param index The index from which to retrieve an element.
	 * @throws If an out-of-bounds index is passed.
	 */
	public get(index: number): E {
		
		if ((index >= this.size()) || (index < 0)) throw new RangeError("ERR | Attempted to retrieve an out-of-bounds index.");
		else return this.internalArray[index];
		
	}
	
	// DOC-ME [7/22/19 @ 5:51 PM] - Documentation required!
	public remove(element: E): void {
		
		while (this.contains(element)) this.removeIndex(this.internalArray.indexOf(element));
		
	}
	
	// DOC-ME [7/22/19 @ 5:51 PM] - Documentation required!
	public removeIndex(index: number): E {
		
		return this.internalArray.splice(index, 1)[0];
		
	}
	
	// DOC-ME [7/22/19 @ 5:51 PM] - Documentation required!
	public shuffle(iterations: number = 1): void {
		
		for (let count: number = 0; count < iterations; count++) {
			
			let elements: E[] = this.toArray();
			this.clear();
			
			while (elements.length !== 0) {
				
				let random: number = Math.floor(Math.random() * elements.length);
				let element: E = elements.splice(random, 1)[0];
				this.add(element);
				
			}
			
		}
		
	}
	
	// DOC-ME [7/22/19 @ 5:51 PM] - Documentation required!
	public size(): number {
		
		return this.internalArray.length;
		
	}
	
	// DOC-ME [7/22/19 @ 5:51 PM] - Documentation required!
	public contains(element: E): boolean {
		
		return this.internalArray.includes(element);
		
	}
	
	// DOC-ME [7/22/19 @ 5:51 PM] - Documentation required!
	public clear(): void {
	
		this.internalArray = [];
	
	}
	
	// DOC-ME [7/22/19 @ 5:52 PM] - Documentation required!
	public iterator(): IIterator<E> {
		
		return new class extends AbstractIterator<E> {
			
			private arrayList: ArrayList<E>;
			
			private cursor: number;
			
			public constructor(arrayList: ArrayList<E>) {
				
				super();
				
				this.arrayList = arrayList;
				this.cursor = 0;
				
			}
			
			public hasNext(): boolean {
				
				return (this.cursor < this.arrayList.size());
				
			}
			
			public next(): any {
				
				if (this.hasNext()) return this.arrayList.get(this.cursor++);
				else return undefined;
			
			}
			
		}(this);
		
	}
	
	// DOC-ME [7/22/19 @ 5:52 PM] - Documentation required!
	public subList(start: number, end: number = this.size()): ArrayList<E> {
	
		return new ArrayList<E>(...this.toArray().splice(start, (end - start)));
	
	}
	
	// DOC-ME [7/22/19 @ 5:52 PM] - Documentation required!
	public toArray(): E[] {
		
		return this.internalArray;
		
	}
	
}