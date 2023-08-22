import java.util.Random;
import java.util.Scanner;

public class JUEGO {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Random random = new Random();
        
        String[] opciones = {"piedra", "papel", "tijeras"};
        
        int victoriasJugador = 0;
        int victoriasComputadora = 0;
        
        System.out.println("Juguemos a Piedra, Papel, Tijeras!");
        
        while (victoriasJugador < 3 && victoriasComputadora < 3) {
            System.out.print("Elige tu opción (piedra, papel o tijeras): ");
            String eleccionUsuario = scanner.nextLine().toLowerCase();
            
            int indiceEleccionUsuario = -1;
            for (int i = 0; i < opciones.length; i++) {
                if (eleccionUsuario.equals(opciones[i])) {
                    indiceEleccionUsuario = i;
                    break;
                }
            }
            
            if (indiceEleccionUsuario == -1) {
                System.out.println("Opción no válida. Debes elegir entre piedra, papel o tijeras.");
                continue;
            }
            
            int indiceEleccionComputadora = random.nextInt(3);
            String eleccionComputadora = opciones[indiceEleccionComputadora];
            
            System.out.println("La computadora eligió: " + eleccionComputadora);
            
            // Determinar el ganador de la ronda
            if (indiceEleccionUsuario == indiceEleccionComputadora) {
                System.out.println("Empate en esta ronda.");
            } else if ((indiceEleccionUsuario == 0 && indiceEleccionComputadora == 2) || 
                       (indiceEleccionUsuario == 1 && indiceEleccionComputadora == 0) || 
                       (indiceEleccionUsuario == 2 && indiceEleccionComputadora == 1)) {
                System.out.println("¡Ganaste esta ronda!");
                victoriasJugador++;
            } else {
                System.out.println("La computadora gana esta ronda.");
                victoriasComputadora++;
            }
            
            System.out.println("Puntaje actual - Jugador: " + victoriasJugador + ", Computadora: " + victoriasComputadora);
        }
        
        // Determinar el ganador del juego
        if (victoriasJugador == 3) {
            System.out.println("¡Ganaste el juego!");
        } else {
            System.out.println("La computadora ganó el juego.");
        }
    }
}
