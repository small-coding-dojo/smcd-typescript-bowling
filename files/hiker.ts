export function answer(): String {
  return "Hello World";
}

export function GameEngine(s: string): number {
  if(s.length === 0){
    throw "Argument is empty";
  }
  if( s[0] != '-' )
    return Number(s[0])
  return 0;
}