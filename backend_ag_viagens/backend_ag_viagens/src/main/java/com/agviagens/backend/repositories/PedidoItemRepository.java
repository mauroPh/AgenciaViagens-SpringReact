package com.agviagens.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.agviagens.backend.entities.PedidoItem;



public interface PedidoItemRepository extends JpaRepository<PedidoItem, Long>{

}
