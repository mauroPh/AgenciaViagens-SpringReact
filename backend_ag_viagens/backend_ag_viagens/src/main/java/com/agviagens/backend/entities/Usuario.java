package com.agviagens.backend.entities;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Usuario implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
		@Id
		@GeneratedValue(strategy =GenerationType.IDENTITY)
		private Long id;
		private String nome;
		private String email;
		private String telefone;
		private String senha;
		
		@JsonIgnore
		@OneToMany(mappedBy = "cliente")
		private List<Pedido> pedidos = new ArrayList<>();
		
		
		
		public Usuario() {
		}


		public Usuario(Long id, String nome, String email, String telefone, String senha) {
			super();
			this.id = id;
			this.nome = nome;
			this.email = email;
			this.telefone = telefone;
			this.senha = senha;
		}


		public Long getId() {
			return id;
		}


		public void setId(Long id) {
			this.id = id;
		}


		public String getNome() {
			return nome;
		}


		public void setNome(String nome) {
			this.nome = nome;
		}


		public String getEmail() {
			return email;
		}


		public void setEmail(String email) {
			this.email = email;
		}


		public String getTelefone() {
			return telefone;
		}


		public void setTelefone(String telefone) {
			this.telefone = telefone;
		}


		public String getSenha() {
			return senha;
		}


		public void setSenha(String senha) {
			this.senha = senha;
		}


		public List<Pedido> getPedidos() {
			return pedidos;
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
			Usuario other = (Usuario) obj;
			return Objects.equals(id, other.id);
		}
		
		
}
