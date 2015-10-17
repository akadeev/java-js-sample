package classes.util;
class Test {
  static native int addTwo(int x);
  public static void main(String[] args) {
    System.out.println(addTwo(5));
  }
}