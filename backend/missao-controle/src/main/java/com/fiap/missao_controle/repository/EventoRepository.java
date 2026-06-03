package com.fiap.missao_controle.repository;

import com.fiap.missao_controle.model.EventoOperacional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventoRepository extends JpaRepository<EventoOperacional, Long> {
}