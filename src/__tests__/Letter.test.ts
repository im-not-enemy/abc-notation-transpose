import Letter from '../Application/Letter'

test('typeチェック',()=>{
    expect(new Letter('^').type).toBe('Accidental')
    expect(new Letter('_').type).toBe('Accidental')
    expect(new Letter('C').type).toBe('Pitch')
    expect(new Letter(',').type).toBe('Octave')
    expect(new Letter('\'').type).toBe('Octave')
    expect(new Letter('2').type).toBe('NoteLength')
    expect(new Letter('(').type).toBe('Bracket')
    expect(new Letter('>').type).toBe('BrokenRhythm')
    expect(new Letter('-').type).toBe('Tie')
})
test('toString()チェック',()=>{
    expect(new Letter('^').toString()).toBe('^')
    expect(new Letter('_').toString()).toBe('_')
    expect(new Letter('C').toString()).toBe('C')
    expect(new Letter(',').toString()).toBe(',')
    expect(new Letter('\'').toString()).toBe('\'')
    expect(new Letter('2').toString()).toBe('2')
    expect(new Letter('(').toString()).toBe('(')
    expect(new Letter('>').toString()).toBe('>')
    expect(new Letter('-').toString()).toBe('-')
})
test('isRelatedToチェック',()=>{
    expect(new Letter('^').isRelatedToPitch).toBe(true)
    expect(new Letter('_').isRelatedToPitch).toBe(true)
    expect(new Letter('C').isRelatedToPitch).toBe(true)
    expect(new Letter(',').isRelatedToPitch).toBe(true)
    expect(new Letter('\'').isRelatedToPitch).toBe(true)
    expect(new Letter('2').isRelatedToLength).toBe(true)
    expect(new Letter('(').isRelatedToLength).toBe(true)
    expect(new Letter('>').isRelatedToLength).toBe(true)
    expect(new Letter('-').isRelatedToLength).toBe(true)
})