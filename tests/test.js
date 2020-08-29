
range=require('./functions');

test("check values:  ",()=>{
    expect(
        range.checkRange()
    ).toBe(31)   
})


test("check values range 1:  ",()=>{
    expect(
        range.checkRange()
    ).toBeGreaterThanOrEqual(30);
    expect(
        range.checkRange()
    ).toBeLessThan(34)
})

test("check values range 2:  ",()=>{
    expect(
        range.checkRange()
    ).toBeGreaterThanOrEqual(20)
    expect(
        range.checkRange()
    ).toBeLessThan(30)
})
