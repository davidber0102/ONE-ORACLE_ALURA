import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import com.google.gson.Gson;

public class ConsultaConversor {
    public Pelicula buscaPelicula(int numeroDePelicula){
        URI direccion = URI.create("https://swapi.dev/api/films/" + numeroDePelicula);


        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
                .uri(direccion)
                .build();


        try {
            HttpResponse<String> response = client
                    .send(request, HttpResponse.BodyHandlers.ofString());
            return new Gson().fromJson(response.body(), Pelicula.class);
        } catch (Exception e ) {
            throw new RuntimeException("NO se encontro esa pelicula, cheque por favor");
        }



    }
}
