package com.fiap.missao_controle.model;

import jakarta.persistence.*;

@Entity
public class Sensor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;
    private String tipo;
    private String modulo;
    private Double leitura;
    private String unidade;
    private String status;

    public Sensor() {
    }

    public Sensor(Long id, String nome, String tipo, String modulo, Double leitura, String unidade, String status) {
        this.id = id;
        this.nome = nome;
        this.tipo = tipo;
        this.modulo = modulo;
        this.leitura = leitura;
        this.unidade = unidade;
        this.status = status;
    }

    public Long getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public String getTipo() {
        return tipo;
    }

    public String getModulo() {
        return modulo;
    }

    public Double getLeitura() {
        return leitura;
    }

    public String getUnidade() {
        return unidade;
    }

    public String getStatus() {
        return status;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public void setModulo(String modulo) {
        this.modulo = modulo;
    }

    public void setLeitura(Double leitura) {
        this.leitura = leitura;
    }

    public void setUnidade(String unidade) {
        this.unidade = unidade;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}