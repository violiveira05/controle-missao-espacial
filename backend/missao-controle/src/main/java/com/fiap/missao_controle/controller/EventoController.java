package com.fiap.missao_controle.controller;

import com.fiap.missao_controle.model.EventoOperacional;
import com.fiap.missao_controle.repository.EventoRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/eventos")
@CrossOrigin(origins = "*")
public class EventoController {

    private final EventoRepository eventoRepository;

    public EventoController(EventoRepository eventoRepository) {
        this.eventoRepository = eventoRepository;
    }

    @GetMapping
    public List<EventoOperacional> listar() {
        return eventoRepository.findAll();
    }

    @PostMapping
    public EventoOperacional cadastrar(@RequestBody EventoOperacional evento) {
        return eventoRepository.save(evento);
    }
}