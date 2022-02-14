package com.agviagens.backend.entities.pk;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.Embeddable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.agviagens.backend.entities.Pacote;
import com.agviagens.backend.entities.Pedido;


@Embeddable
public class PedidoItemPK implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@ManyToOne
	@JoinColumn(name="pedido_id")
	private Pedido pedido;
	@ManyToOne
	@JoinColumn(name="pacote_id")
	private Pacote pacote;
	
	
	public Pedido getPedido() {
		return pedido;
	}
	public void setPedido(Pedido pedido) {
		this.pedido = pedido;
	}
	public Pacote getPacote() {
		return pacote;
	}
	public void setPacote(Pacote pacote) {
		this.pacote = pacote;
	}
	
	
	
	
	@Override
	public int hashCode() {
		return Objects.hash(pacote, pedido);
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		PedidoItemPK other = (PedidoItemPK) obj;
		return Objects.equals(pacote, other.pacote) && Objects.equals(pedido, other.pedido);
	}

	
	
}
