package com.fiap.missao_controle.controller;

import com.fiap.missao_controle.model.AlertaCritico;
import com.fiap.missao_controle.repository.AlertaRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/alertas")
@CrossOrigin(origins = "*")
public class AlertaController {

    private final AlertaRepository alertaRepository;

    public AlertaController(AlertaRepository alertaRepository) {
        this.alertaRepository = alertaRepository;
    }

    @GetMapping
    public List<AlertaCritico> listar() {
        return alertaRepository.findAll();
    }

    @PostMapping
    public AlertaCritico cadastrar(@RequestBody AlertaCritico alerta) {
        return alertaRepository.save(alerta);
    }
}
