/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	5:06 PM -- July 22nd, 2019.
 *	Project: @jsdsl/array-list
 */

import { ArrayList } from "../array-list";
import { IIterator } from "iter-over";

/**
 * Various test cases for the JSDSL ArrayList.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */

let list: ArrayList<number>;

describe("Initialization tests.", () => {
	
	test("Simple empty initialization.", () => {
		
		expect(() => list = new ArrayList()).not.toThrow(Error);
		
	});
	
	describe("Initialization with elements.", () => {
		
		test("Doesn't throw error.", () => {
			
			expect(() => list = new ArrayList(1, 2, 3)).not.toThrow(Error);
			
		});
		
		test("Has correct content.", () => {
			
			list = new ArrayList(9, 8, 7);
			
			expect(list.toArray()).toStrictEqual([9, 8, 7]);
			
		});
		
	});
	
});


describe("Per method tests.", () => {

	beforeEach(() => {
	
		list = new ArrayList<number>();
	
		
	});
	
	describe("#add", () => {
	
		test("Add correctly modifies underlying array.", () => {
			
			list.add(5);
			
			expect(list.toArray()).toStrictEqual([5]);
			
		});
		
		test("Elements are added in the correct order.", () => {
			
			list.add(7);
			list.add(3);
			
			expect(list.toArray()).toStrictEqual([7, 3]);
			
		});
	
	});
	
	describe("#addAll", () => {
		
		test("Add all correctly modifies underlying array.", () => {
			
			list.addAll([10, 2, 9]);
			
			expect(list.toArray()).toStrictEqual([10, 2, 9]);
			
		});
		
		test("Elements are added in the correct order.", () => {
			
			list.addAll([1, 3, 5]);
			list.addAll([2, 4, 6]);
			
			expect(list.toArray()).toStrictEqual([1, 3, 5, 2, 4, 6]);
			
		});
	
	});
	
	describe("#get", () => {
		
		beforeEach(() => {
			
			list.addAll([3, 5, 7]);
			
		});
		
		test("Well-defined indices return proper content.", () => {
			
			expect(list.get(0)).toBe(3);
			expect(list.get(1)).toBe(5);
			expect(list.get(2)).toBe(7);
			
		});
		
		test("Out of bounds (under bounds) index throws error.", () => {
			
			expect(() => list.get(-1)).toThrow(RangeError);
			
		});
	
		test("Out of bounds (above bounds) index throws error.", () => {
			
			expect(() => list.get(3)).toThrow(RangeError);
			
		});
	
	});
	
	describe("#remove", () => {
	
	
	
	});
	
	describe("#removeIndex", () => {
	
	
	
	});
	
	describe("#shuffle", () => {
	
	
	
	});
	
	describe("#size", () => {
	
	
	
	});
	
	describe("#contains", () => {
	
	
	
	});
	
	describe("#isEmpty", () => {
	
	
	
	});
	
	describe("#clear", () => {
	
	
	
	});
	
	describe("#iterator", () => {
	
		test("With no content.", () => {
		
			list.iterator().forEachRemaining(() => {
				
				fail("Iterator has no content and as such should never execute this.");
				
			});
		
		});
		
		test("With normal content via manual iteration.", () => {
			
			list.addAll([8, 6, 7, 5, 3, 0, 9]);
			
			let iterator: IIterator<number> = list.iterator();
			
			expect(iterator.next()).toBe(8);
			expect(iterator.next()).toBe(6);
			expect(iterator.next()).toBe(7);
			expect(iterator.next()).toBe(5);
			expect(iterator.next()).toBe(3);
			expect(iterator.next()).toBe(0);
			expect(iterator.next()).toBe(9);
			expect(iterator.next()).toBeUndefined();
			expect(iterator.hasNext()).toBeFalsy();
			
		});
		
		test("With normal content via [Symbol.iterator].", () => {
			
			let content: number[] = [8, 6, 7, 5, 3, 0, 9];
			
			list.addAll(content);
			
			let index: number = 0;
			let iterator: IIterator<number> = list.iterator();
			
			for (let number of iterator) {
				
				expect(number).toBe(content[index++]);
				
			}
			
			expect(iterator.next()).toBeUndefined();
			expect(iterator.hasNext()).toBeFalsy();
			
		});
	
	});
	
	describe("#subList", () => {
	
	
	
	});
	
	describe("#toArray", () => {
	
	
	
	});

});