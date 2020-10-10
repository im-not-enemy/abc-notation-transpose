import Song from './Application/Song'

export function abcNotationTranspose(abc:string,key:string):string {
    return new Song(abc).transpose(key).toString()
}