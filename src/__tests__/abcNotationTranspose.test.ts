import {abcNotationTranspose} from '../index'

test('C to G',()=>{
    const before = 'T:Test\nM:4/4\nL:1/4\nK:C\nC/D/E/F/ G/F/E/D/ | C/B,/A,/G,/ A,/B,/C ||'
    const after = 'T:Test\nM:4/4\nL:1/4\nK:G\nG/A/B/c/ d/c/B/A/ | G/F/E/D/ E/F/G ||'
    expect(abcNotationTranspose(before,'G')).toBe(after)
})