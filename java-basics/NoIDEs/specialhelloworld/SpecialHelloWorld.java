import org.apache.commons.lang3.RandomUtils;

public class SpecialHelloWorld {

  public static void main(String[] args) {
    SpecialMessage message = new SpecialMessage();
    String cointoss = "Lets toss a coin, its " + (RandomUtils.nextBoolean() ? "heads" : "tails");
    System.out.println("Hello world." + message.getMessage() + cointoss) ;
  }
}
