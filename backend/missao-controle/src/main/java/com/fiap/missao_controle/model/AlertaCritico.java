package com.fiap.missao_controle.model;

import jakarta.persistence.*;

@Entity
public class AlertaCritico {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String titulo;
    private String descricao;
    private String severidade;
    private String origem;
    private String status;
    private String dataHora;

    public AlertaCritico() {
    }

    public AlertaCritico(Long id, String titulo, String descricao, String severidade, String origem, String status, String dataHora) {
        this.id = id;
        this.titulo = titulo;
        this.descricao = descricao;
        this.severidade = severidade;
        this.origem = origem;
        this.status = status;
        this.dataHora = dataHora;
    }

    public Long getId() {
        return id;
    }

    public String getTitulo() {
        return titulo;
    }

    public String getDescricao() {
        return descricao;
    }

    public String getSeveridade() {
        return severidade;
    }

    public String getOrigem() {
        return origem;
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

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public void setSeveridade(String severidade) {
        this.severidade = severidade;
    }

    public void setOrigem(String origem) {
        this.origem = origem;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public void setDataHora(String dataHora) {
        this.dataHora = dataHora;
    }
}