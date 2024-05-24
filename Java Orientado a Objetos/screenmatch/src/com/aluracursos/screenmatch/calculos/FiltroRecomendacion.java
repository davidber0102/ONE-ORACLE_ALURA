package com.aluracursos.screenmatch.calculos;

public class FiltroRecomendacion {
    public void filtra(Clasificacion clasfciacion){
        if (clasfciacion.getCasificacion()>= 4 ){
            System.out.println("Muy bien evaluado en el momento");
        }else if(clasfciacion.getCasificacion() >= 2){
            System.out.println("Populr en el momento");
        }else{
            System.out.println("Colocalo en tu lista para verki despues");
        }
    }
}
