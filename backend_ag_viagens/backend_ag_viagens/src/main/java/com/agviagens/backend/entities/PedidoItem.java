package com.agviagens.backend.entities;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;

import com.agviagens.backend.entities.pk.PedidoItemPK;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class PedidoItem implements Serializable {
	
	private static final long serialVersionUID = 1L;
		
		@EmbeddedId
		private PedidoItemPK id = new PedidoItemPK();
		
		
		private Integer quantidade;
		private Double preco;
		
		public PedidoItem() {
			
		}

		public PedidoItem(Pedido pedido,Pacote pacote, Integer quantidade, Double preco) {
			super();
			id.setPedido(pedido);
			id.setPacote(pacote);
			this.quantidade = quantidade;
			this.preco = preco;
		}
		@JsonIgnore
		public Pedido getPedido() {
			return id.getPedido();
		}
		
		public void setPedido(Pedido pedido) {
			id.setPedido(pedido);
		}

		public Pacote getPacote() {
			return id.getPacote();
		}
		
		public void setPacote(Pacote pacote) {
			id.setPacote(pacote);
		}
		
		public Integer getQuantidade() {
			return quantidade;
		}

		public void setQuantidade(Integer quantidade) {
			this.quantidade = quantidade;
		}

		public Double getPreco() {
			return preco;
		}

		public void setPreco(Double preco) {
			this.preco = preco;
		}

		
		public Double getSubTotal(){
			return preco * quantidade;
		}
		
		
		
		@Override
		public int hashCode() {
			return Objects.hash(id);
		}

		@Override
		public boolean equals(Object obj) {
			if (this == obj)
				return true;
			if (obj == null)
				return false;
			if (getClass() != obj.getClass())
				return false;
			PedidoItem other = (PedidoItem) obj;
			return Objects.equals(id, other.id);
		}
		
		
	
}
