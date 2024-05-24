package com.davidbernal.audiolbre.principal;
import com.davidbernal.audiolbre.Modelo.Cancion;
import com.davidbernal.audiolbre.Modelo.MisFavoritos;
import com.davidbernal.audiolbre.Modelo.Podcast;


public class Principal {
    public static void main(String[] args) {

        Cancion miCancion = new Cancion();
        miCancion.setTitulo("Forever");
        miCancion.setCantante("Kiss");

        Podcast miPodcast = new Podcast();
        miPodcast.setPresentador("Eduardo Espinosa");
        miPodcast.setTitulo("Leyendas Legendarias");

//cacnciones
        for (int i = 0; i < 15000; i++) {
            miCancion.meGusta();
        }

        for (int i = 0; i < 500; i++) {
            miCancion.reproduce();
        }

//podcast
        for (int i = 0; i < 1000; i++) {
            miPodcast.meGusta();
        }

        for (int i = 0; i < 6000; i++) {
            miPodcast.reproduce();
        }


        System.out.println("Total reproducciones: " + miCancion.getTotalDeReproducciones());
        System.out.println("Total de Me Gusta: " + miCancion.getTotalMeGusta());


        MisFavoritos favoritos = new MisFavoritos();
        favoritos.adiccione(miCancion);
        favoritos.adiccione(miPodcast);


    }
}
