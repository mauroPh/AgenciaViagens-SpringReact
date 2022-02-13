package com.agviagens.backend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.agviagens.backend.entities.Destino;
import com.agviagens.backend.repositories.DestinoRepository;


@Service
public class DestinoService {
	@Autowired
	private DestinoRepository repository;
	
	public List<Destino> findAll(){
			return repository.findAll();
	}
	
	
	public Destino findById(Long id) {
		Optional<Destino> obj = repository.findById(id);
		return obj.get();
	}
}
