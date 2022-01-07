describe('test with custom matcher', () =>{

    it('should work', () =>{
        expect(true).toBeTruthy()
    })

    it('should find awesome text', ()=>{
        expect('awesome').toBeAwesome()
    })

    it('should find lame text', () =>{
        expect('lame').not.toBeAwesome()
    })

})