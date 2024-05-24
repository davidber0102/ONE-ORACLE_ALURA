package com.aluracursos.screenmatch.modelos;

import com.aluracursos.screenmatch.excepcion.ErrorEnConversionDeDuracionException;
import com.google.gson.annotations.SerializedName;

public class Titulo implements Comparable<Titulo> {
    private String nombreTitulo;
    private int fechaLanzamiento;
    private int duracionMinutos;
    private boolean incluidoEnElPlan;
    private double sumaDeLasEvaluaciones;
    private int totalDeLasEvalaciones;

    public Titulo(String nombreTitulo, int fechaLanzamiento) {
        this.nombreTitulo = nombreTitulo;
        this.fechaLanzamiento = fechaLanzamiento;
    }

    public Titulo(TituloOmdb miTituloOmdb) {
        this.nombreTitulo = miTituloOmdb.title();
        this.fechaLanzamiento = Integer.valueOf(miTituloOmdb.year());

        if (miTituloOmdb.runtime().contains("N/A")){
                throw new ErrorEnConversionDeDuracionException("No pude convertir la duracion, " +
                        "Porque contiene un N/A y es invalido");
        }

        this.duracionMinutos = Integer.valueOf(miTituloOmdb.runtime().substring(0, 3).replace(" ", ""));
    }

    public String getNombreTitulo() {
        return nombreTitulo;
    }

    public int getFechaLanzamiento() {
        return fechaLanzamiento;
    }

    public int getDuracionMinutos() {
        return duracionMinutos;
    }

    public boolean isIncluidoEnElPlan() {
        return incluidoEnElPlan;
    }

    public void setNombreTitulo(String nombreTitulo) {
        this.nombreTitulo = nombreTitulo;    }

    public void setFechaLanzamiento(int fechaLanzamiento) {
        this.fechaLanzamiento = fechaLanzamiento;    }

    public void setDuracionMinutos(int duracionMinutos) {
        this.duracionMinutos = duracionMinutos;
    }

    public void setIncluidoEnElPlan(boolean incluidoEnElPlan) {
        this.incluidoEnElPlan = incluidoEnElPlan;
    }

    public int getTotalDeLasEvalaciones(){
        return totalDeLasEvalaciones;
    }



    public void muestraFichaTecnica(){
        System.out.println("---------------------------------------");
        System.out.println("El nombre de la pelicula es: " + nombreTitulo);
        System.out.println("Su Fecha de lanzamiento es: " + fechaLanzamiento);
        System.out.println("Duracion en minutos es: " + getDuracionMinutos());
        System.out.println("-------------------------------------");
    }

    public void evalua(double nota){
        sumaDeLasEvaluaciones += nota;
        totalDeLasEvalaciones ++;
    }

    public double calculoMedia(){
        return sumaDeLasEvaluaciones / totalDeLasEvalaciones;
    }

    @Override
    public int compareTo(Titulo otroTitulo){
        return this.getNombreTitulo().compareTo(otroTitulo.getNombreTitulo());
    }

    @Override
    public String toString() {
        return "( Titulo: " + nombreTitulo +
                ", fechaLanzamiento= " + fechaLanzamiento + ", Duracion:  " + duracionMinutos + "), \n";
    }
}

