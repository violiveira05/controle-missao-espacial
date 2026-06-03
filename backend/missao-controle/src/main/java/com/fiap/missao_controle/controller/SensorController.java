package com.fiap.missao_controle.controller;

import com.fiap.missao_controle.model.Sensor;
import com.fiap.missao_controle.repository.SensorRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/sensores")
@CrossOrigin(origins = "*")
public class SensorController {

    private final SensorRepository sensorRepository;

    public SensorController(SensorRepository sensorRepository) {
        this.sensorRepository = sensorRepository;
    }

    @GetMapping
    public List<Sensor> listar() {
        return sensorRepository.findAll();
    }

    @PostMapping
    public Sensor cadastrar(@RequestBody Sensor sensor) {
        return sensorRepository.save(sensor);
    }
}