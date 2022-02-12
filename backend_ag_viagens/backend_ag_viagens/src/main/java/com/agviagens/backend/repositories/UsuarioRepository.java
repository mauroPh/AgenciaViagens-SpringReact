package com.agviagens.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.agviagens.backend.entities.Usuario;



public interface UsuarioRepository extends JpaRepository<Usuario, Long>{

}
