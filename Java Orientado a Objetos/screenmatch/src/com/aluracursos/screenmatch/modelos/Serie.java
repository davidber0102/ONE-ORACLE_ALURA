package com.aluracursos.screenmatch.modelos;

public class Serie extends Titulo{
    int temporadas;
    int episodiosPorTemporada;
    int minutosPorTemporada;

    public Serie(String nombrePelicula, int fechaLanzamiento) {
        super(nombrePelicula, fechaLanzamiento);
    }

    @Override
    public int getDuracionMinutos() {
        return temporadas * episodiosPorTemporada * minutosPorTemporada;
    }

    public int getTemporadas() {
        return temporadas;
    }

    public void setTemporadas(int temporadas) {
        this.temporadas = temporadas;
    }

    public int getEpisodiosPorTemporada() {
        return episodiosPorTemporada;
    }

    public void setEpisodiosPorTemporada(int episodiosPorTemporada) {
        this.episodiosPorTemporada = episodiosPorTemporada;
    }

    public int getMinutosPorTemporada() {
        return minutosPorTemporada;
    }

    public void setMinutosPorTemporada(int minutosPorTemporada) {
        this.minutosPorTemporada = minutosPorTemporada;
    }

    @Override
    public String toString() {
        return "Serie: " + this.getNombreTitulo() + "(" + this.getFechaLanzamiento() + ")";
    }
}
