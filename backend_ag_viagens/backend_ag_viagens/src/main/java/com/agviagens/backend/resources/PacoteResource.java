package com.agviagens.backend.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.agviagens.backend.entities.Pacote;
import com.agviagens.backend.services.PacoteService;

@RestController
@RequestMapping(value="/pacotes")
public class PacoteResource {
	
			@Autowired
			private PacoteService service;
	
			@GetMapping
			public ResponseEntity<List<Pacote>> findAll(){
				List<Pacote> list = service.findAll();
						
						
				return ResponseEntity.ok().body(list);	
			}
			
			@GetMapping(value = "/{id}")
			public ResponseEntity<Pacote> findById(@PathVariable Long id){
			Pacote obj = service.findById(id);
			return ResponseEntity.ok().body(obj);
	}
}
