package com.aluracursos.screenmatch.principal;

import com.aluracursos.screenmatch.modelos.Pelicula;
import com.aluracursos.screenmatch.modelos.Serie;
import com.aluracursos.screenmatch.modelos.Titulo;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;

public class PrincipalConListas {
    public static void main(String[] args) {
        Pelicula miPelicula = new Pelicula("Encanto", 2021);
        miPelicula.evalua(9);
        Pelicula otraPelicula = new Pelicula("Matrix", 1998);
        otraPelicula.evalua(7);
        var peliculaDeDavid = new Pelicula("El señor de los anisllos", 2001);
        peliculaDeDavid.evalua(10);
        Serie miSerie = new Serie("Juego de Tronos", 2012);
        miSerie.evalua(9);

        ArrayList<Titulo> lista = new ArrayList<>();
        lista.add(peliculaDeDavid);
        lista.add(miPelicula);
        lista.add(otraPelicula);
        lista.add(miSerie);

        for (Titulo item : lista) {
            System.out.println(item.getNombreTitulo());

            if (item instanceof Pelicula pelicula2 && pelicula2.getCasificacion()> 2){
                System.out.println(pelicula2.getCasificacion());
            }
        }

        ArrayList<String> listaDEArtistas = new ArrayList<>();
        listaDEArtistas.add("Penelope Cruz");
        listaDEArtistas.add("Antonio Banderas");
        listaDEArtistas.add("Ricardo Darin");
        System.out.println("Lista de artistas NO Ordenada:" +listaDEArtistas);

        Collections.sort(listaDEArtistas);
        System.out.println("Lista de artistas Ordenada:" + listaDEArtistas);

        Collections.sort(lista);
        System.out.println("Lista de Titulos Ordenada" + lista);

        lista.sort(Comparator.comparing(Titulo::getFechaLanzamiento));
        System.out.println("Lista Ordenadas por Fecha: " + lista);




    }
}
