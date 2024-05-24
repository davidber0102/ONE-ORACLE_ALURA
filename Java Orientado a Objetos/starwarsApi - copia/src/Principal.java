import java.io.IOException;
import java.util.Scanner;

public class Principal {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        ConsultaConversor consulta = new ConsultaConversor();
        System.out.println("Escriba el numero de la pelicula de Star Wars que quiere consultar");

        try {
            var numeroDelPelicula = Integer.valueOf(scanner.nextLine());
            Pelicula pelicula = consulta.buscaPelicula(numeroDelPelicula);
            System.out.println(pelicula);
            GeneradorDeArchivo generador = new GeneradorDeArchivo();
            generador.guardarJson(pelicula);

        }catch (NumberFormatException e){
            System.out.println("Numero no encontrado, " + e.getMessage());
        }catch (RuntimeException | IOException e){
            System.out.println(e.getMessage());
            System.out.println("Finalinzado la aplicacion");
        }

    }
}
