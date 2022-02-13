package com.agviagens.backend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.agviagens.backend.entities.Pedido;
import com.agviagens.backend.repositories.PedidoRepository;


@Service
public class PedidoService {
	@Autowired
	private PedidoRepository repository;
	
	public List<Pedido> findAll(){
			return repository.findAll();
	}
	
	
	public Pedido findById(Long id) {
		Optional<Pedido> obj = repository.findById(id);
		return obj.get();
	}
}
