package com.agviagens.backend.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.agviagens.backend.entities.Destino;
import com.agviagens.backend.services.DestinoService;

@RestController
@RequestMapping(value="/destinos")
public class DestinoResource {
	
			@Autowired
			private DestinoService service;
	
			@GetMapping
			public ResponseEntity<List<Destino>> findAll(){
				List<Destino> list = service.findAll();
						
						
				return ResponseEntity.ok().body(list);	
			}
			
			@GetMapping(value = "/{id}")
			public ResponseEntity<Destino> findById(@PathVariable Long id){
			Destino obj = service.findById(id);
			return ResponseEntity.ok().body(obj);
	}
}
