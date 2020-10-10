import Song from './Application/Song'

export function abcTranspose(abc:string,key:string):string {
    return new Song(abc).transpose(key).toString()
}