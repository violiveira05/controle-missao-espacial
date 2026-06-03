package com.fiap.missao_controle.repository;

import com.fiap.missao_controle.model.AlertaCritico;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AlertaRepository extends JpaRepository<AlertaCritico, Long> {
}