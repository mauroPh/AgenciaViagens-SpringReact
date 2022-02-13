package com.agviagens.backend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.agviagens.backend.entities.Pacote;
import com.agviagens.backend.repositories.PacoteRepository;


@Service
public class PacoteService {
	@Autowired
	private PacoteRepository repository;
	
	public List<Pacote> findAll(){
			return repository.findAll();
	}
	
	
	public Pacote findById(Long id) {
		Optional<Pacote> obj = repository.findById(id);
		return obj.get();
	}
}
