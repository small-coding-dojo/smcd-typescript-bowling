import { answer, GameEngine } from './hiker';



describe('answer', () => {
  it('Greet the world...', () => {
    expect(answer()).toEqual("Hello World");
  });
});

describe('count a game', () => {
  it('all misses', () => {
    expect(GameEngine("--|--|--|--|--|--|--|--|--|--||")).toEqual(0);
  });
  
  it('rejects empty input', () => {
    expect(() => GameEngine("")).toThrow();
  });

  it('first throw is one', () => {
    expect(GameEngine("1-|--|--|--|--|--|--|--|--|--||")).toEqual(1);
  });
  
  it('first throw is two', () => {
    expect(GameEngine("2-|--|--|--|--|--|--|--|--|--||")).toEqual(2);
  });
  
});
