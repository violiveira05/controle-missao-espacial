package com.fiap.missao_controle.repository;

import com.fiap.missao_controle.model.Sensor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SensorRepository extends JpaRepository<Sensor, Long> {
}