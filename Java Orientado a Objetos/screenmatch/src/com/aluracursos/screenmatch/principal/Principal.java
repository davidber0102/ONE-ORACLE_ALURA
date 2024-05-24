package com.aluracursos.screenmatch.principal;

import com.aluracursos.screenmatch.calculos.CalculadoraDeTiempo;
import com.aluracursos.screenmatch.calculos.FiltroRecomendacion;
import com.aluracursos.screenmatch.modelos.Episodios;
import com.aluracursos.screenmatch.modelos.Pelicula;
import com.aluracursos.screenmatch.modelos.Serie;

import java.util.ArrayList;

public class Principal {
    public static void main(String[] args) {
        Pelicula miPelicula = new Pelicula("Encanto", 2021);
        miPelicula.setDuracionMinutos(125);
        miPelicula.setIncluidoEnElPlan(false);

        miPelicula.muestraFichaTecnica();
        miPelicula.evalua(7.8);
        miPelicula.evalua(  10);
        System.out.println(miPelicula.getTotalDeLasEvalaciones());
        System.out.println(miPelicula.calculoMedia());
        System.out.println("----------------------------");
        System.out.println("----------------------------");


        Serie miSerie = new Serie("Juego de Tronos", 2012);
        miSerie.setTemporadas(1);
        miSerie.setMinutosPorTemporada(50);
        miSerie.setEpisodiosPorTemporada(10);


        miSerie.muestraFichaTecnica();
        miSerie.evalua(8.8);
        miSerie.evalua(  10);
        System.out.println(miSerie.getTotalDeLasEvalaciones());
        System.out.println(miSerie.calculoMedia());
        System.out.println(miSerie.getDuracionMinutos());
        System.out.println("----------------------------");

        Pelicula otraPelicula = new Pelicula("Matrix", 1998);
        otraPelicula.setDuracionMinutos(180);
        otraPelicula.setIncluidoEnElPlan(false);


        CalculadoraDeTiempo calculadora = new CalculadoraDeTiempo();
        calculadora.incluye(miPelicula);
        System.out.println(calculadora.getTiempoTotal());
        calculadora.incluye(miSerie);
        calculadora.incluye(otraPelicula);
        System.out.println("Tiempo necesario para ver tus titulos favoritos: " + calculadora.getTiempoTotal() + " minutos");
        System.out.println("----------------------------");

        FiltroRecomendacion filtro1 = new FiltroRecomendacion();
        filtro1.filtra(miPelicula);

        Episodios episodio = new Episodios();
        episodio.setNumero(1);
        episodio.setNombre("la casa Stark");
        episodio.setSerie(miSerie);
        episodio.setTotalVisualizaciones(300);

        filtro1.filtra(episodio);


        var peliculaDeDavid = new Pelicula("El señor de los anisllos", 2001);
        peliculaDeDavid.setDuracionMinutos(185);

        ArrayList<Pelicula> listaDePeliculas = new ArrayList<>();
        listaDePeliculas.add(peliculaDeDavid);
        listaDePeliculas.add(miPelicula);
        listaDePeliculas.add(otraPelicula);

        System.out.println("Tamañao de la lista; " + listaDePeliculas.size());
        System.out.println("La primera pelicula es: " + listaDePeliculas.get(0).getNombreTitulo());

        System.out.println("ToString de la pelicula: " + listaDePeliculas);





    }
}
