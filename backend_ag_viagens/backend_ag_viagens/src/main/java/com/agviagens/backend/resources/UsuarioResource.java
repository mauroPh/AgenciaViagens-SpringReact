package com.agviagens.backend.resources;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.agviagens.backend.entities.Usuario;

@RestController
@RequestMapping(value="/usuarios")
public class UsuarioResource {
	
			@GetMapping
			public ResponseEntity<Usuario> findAll(){
				Usuario u = new Usuario(1L,"Maria","maria@gmail.com","9999-9999","1234");
				return ResponseEntity.ok().body(u);	
			}
			
	
}
