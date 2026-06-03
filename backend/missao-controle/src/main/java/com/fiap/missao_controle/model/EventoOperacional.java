package com.fiap.missao_controle.model;

import jakarta.persistence.*;

@Entity
public class EventoOperacional {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String sistema;
    private String descricao;
    private String nivel;
    private String status;
    private String dataHora;

    public EventoOperacional() {
    }

    public EventoOperacional(Long id, String sistema, String descricao, String nivel, String status, String dataHora) {
        this.id = id;
        this.sistema = sistema;
        this.descricao = descricao;
        this.nivel = nivel;
        this.status = status;
        this.dataHora = dataHora;
    }

    public Long getId() {
        return id;
    }

    public String getSistema() {
        return sistema;
    }

    public String getDescricao() {
        return descricao;
    }

    public String getNivel() {
        return nivel;
    }

    public String getStatus() {
        return status;
    }

    public String getDataHora() {
        return dataHora;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setSistema(String sistema) {
        this.sistema = sistema;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public void setNivel(String nivel) {
        this.nivel = nivel;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public void setDataHora(String dataHora) {
        this.dataHora = dataHora;
    }
}