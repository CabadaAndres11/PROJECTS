import java.util.Scanner;

public class CALCULADORA {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.println("Calculadora Funcional");
        System.out.print("Ingresa el primer número: ");
        double numero1 = scanner.nextDouble();
        
        System.out.print("Ingresa el operador (+, -, *, /, ^, %): ");
        char operador = scanner.next().charAt(0);
        
        System.out.print("Ingresa el segundo número: ");
        double numero2 = scanner.nextDouble();
        
        double resultado = 0.0;
        
        switch (operador) {
            case '+':
                resultado = numero1 + numero2;
                break;
            case '-':
                resultado = numero1 - numero2;
                break;
            case '*':
                resultado = numero1 * numero2;
                break;
            case '/':
                if (numero2 != 0) {
                    resultado = numero1 / numero2;
                } else {
                    System.out.println("No es posible dividir por cero.");
                    return;
                }
                break;
            case '^':
                resultado = Math.pow(numero1, numero2);
                break;
            case '%':
                resultado = numero1 % numero2;
                break;
            default:
                System.out.println("Operador inválido.");
                return;
        }
        
        System.out.println("El resultado es: " + resultado);
    }
}
