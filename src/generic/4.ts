/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
class Key {
  private signature: string;

  setSignature(signature: string) {
    this.signature = signature;
  }
}

class Person {
  private key: Key = new Key();

  setKeySignature(signature: string) {
    this.key.setSignature(signature);
  }
}
