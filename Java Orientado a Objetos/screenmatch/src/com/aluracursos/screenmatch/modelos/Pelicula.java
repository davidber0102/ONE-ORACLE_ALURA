package com.aluracursos.screenmatch.modelos;

import com.aluracursos.screenmatch.calculos.Clasificacion;

public class Pelicula extends Titulo implements Clasificacion {

    private String director;

   public Pelicula(String nombreTitulo, int fechaLanzamiento) {
        super(nombreTitulo, fechaLanzamiento);
    }

    public String getDirector() {
        return director;
    }

    public void setDirector(String director) {
        this.director = director;
    }

    @Override
    public int getCasificacion() {
        return (int) (calculoMedia() / 2);
    }

    @Override
    public String toString() {
        return "Pelicula: " + this.getNombreTitulo() + "(" + this.getFechaLanzamiento() + ")";
    }
}
