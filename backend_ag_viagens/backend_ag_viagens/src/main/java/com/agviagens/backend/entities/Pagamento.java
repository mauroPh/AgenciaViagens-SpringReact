package com.agviagens.backend.entities;

import java.io.Serializable;
import java.time.Instant;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;

@Entity
public class Pagamento implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
		private Long id;
		private Instant moment;
	
		@OneToOne
		@MapsId
		private Pedido pedido;
		
		public Pagamento() {
			
		}


		public Pagamento(Long id, Instant moment, Pedido pedido) {
			super();
			this.id = id;
			this.moment = moment;
			this.pedido = pedido;
		}


		public Long getId() {
			return id;
		}


		public void setId(Long id) {
			this.id = id;
		}


		public Instant getMoment() {
			return moment;
		}


		public void setMoment(Instant moment) {
			this.moment = moment;
		}


		public Pedido getPedido() {
			return pedido;
		}


		public void setPedido(Pedido pedido) {
			this.pedido = pedido;
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
			Pagamento other = (Pagamento) obj;
			return Objects.equals(id, other.id);
		}
		
		
}
