"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const array_list_1=require("../array-list");let list;describe("Initialization tests.",()=>{test("Simple empty initialization.",()=>{expect(()=>list=new array_list_1.ArrayList).not.toThrow(Error)}),describe("Initialization with elements.",()=>{test("Doesn't throw error.",()=>{expect(()=>list=new array_list_1.ArrayList(1,2,3)).not.toThrow(Error)}),test("Has correct content.",()=>{list=new array_list_1.ArrayList(9,8,7),expect(list.toArray()).toStrictEqual([9,8,7])})})}),describe("Per method tests.",()=>{beforeEach(()=>{list=new array_list_1.ArrayList}),describe("#add",()=>{test("Add correctly modifies underlying array.",()=>{list.add(5),expect(list.toArray()).toStrictEqual([5])}),test("Elements are added in the correct order.",()=>{list.add(7),list.add(3),expect(list.toArray()).toStrictEqual([7,3])})}),describe("#addAll",()=>{test("Add all correctly modifies underlying array.",()=>{list.addAll([10,2,9]),expect(list.toArray()).toStrictEqual([10,2,9])}),test("Elements are added in the correct order.",()=>{list.addAll([1,3,5]),list.addAll([2,4,6]),expect(list.toArray()).toStrictEqual([1,3,5,2,4,6])})}),describe("#get",()=>{beforeEach(()=>{list.addAll([3,5,7])}),test("Well-defined indices return proper content.",()=>{expect(list.get(0)).toBe(3),expect(list.get(1)).toBe(5),expect(list.get(2)).toBe(7)}),test("Out of bounds (under bounds) index throws error.",()=>{expect(()=>list.get(-1)).toThrow(RangeError)}),test("Out of bounds (above bounds) index throws error.",()=>{expect(()=>list.get(3)).toThrow(RangeError)})}),describe("#remove",()=>{}),describe("#removeIndex",()=>{}),describe("#shuffle",()=>{}),describe("#size",()=>{}),describe("#contains",()=>{}),describe("#isEmpty",()=>{}),describe("#clear",()=>{}),describe("#iterator",()=>{test("With no content.",()=>{list.iterator().forEachRemaining(()=>{fail("Iterator has no content and as such should never execute this.")})}),test("With normal content via manual iteration.",()=>{list.addAll([8,6,7,5,3,0,9]);let e=list.iterator();expect(e.next()).toBe(8),expect(e.next()).toBe(6),expect(e.next()).toBe(7),expect(e.next()).toBe(5),expect(e.next()).toBe(3),expect(e.next()).toBe(0),expect(e.next()).toBe(9),expect(e.next()).toBeUndefined(),expect(e.hasNext()).toBeFalsy()}),test("With normal content via [Symbol.iterator].",()=>{let e=[8,6,7,5,3,0,9];list.addAll(e);let t=0,r=list.iterator();for(let i of r)expect(i).toBe(e[t++]);expect(r.next()).toBeUndefined(),expect(r.hasNext()).toBeFalsy()})}),describe("#subList",()=>{}),describe("#toArray",()=>{})});
//# sourceMappingURL=array-list.test.js.map