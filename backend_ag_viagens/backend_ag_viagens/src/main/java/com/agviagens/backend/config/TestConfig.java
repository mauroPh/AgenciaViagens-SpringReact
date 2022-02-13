package com.agviagens.backend.config;

import java.time.Instant;
import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import com.agviagens.backend.entities.Destino;
import com.agviagens.backend.entities.Pedido;
import com.agviagens.backend.entities.Usuario;
import com.agviagens.backend.entities.enums.PedidoStatus;
import com.agviagens.backend.repositories.DestinoRepository;
import com.agviagens.backend.repositories.PedidoRepository;
import com.agviagens.backend.repositories.UsuarioRepository;

@Configuration
@Profile("test")
public class TestConfig implements CommandLineRunner{
	@Autowired
	private UsuarioRepository usuarioRepository;
	
	@Autowired
	private PedidoRepository pedidoRepository;
	
	@Autowired
	private DestinoRepository destinoRepository;
	

	@Override
	public void run(String... args) throws Exception {
	
		Destino dest1 = new Destino(null, "Jericoacoara - CE");
		Destino dest2 = new Destino(null, "Búzios-RJ");
		Destino dest3 = new Destino(null, "Natal-RN");
		Destino dest4 = new Destino(null, "Rio de Janeiro");
		Destino dest5 = new Destino(null, "Bonito - MS");
		Destino dest6 = new Destino(null, "Foz do Iguaçu - PR");
		Destino dest7 = new Destino(null, "Fernando de Noronha - PE");
		Destino dest8 = new Destino(null, "Ilhéus - BA");

		destinoRepository.saveAll(Arrays.asList(dest1,dest2,dest3,dest4,dest5,dest6,dest7,dest8));
		
		Usuario u1 = new Usuario(null, "Maria Brown", "maria@gmail.com", "988888888", "123456");
		Usuario u2 = new Usuario(null, "Alex Green", "alex@gmail.com", "977777777", "123456");
		
		
		Pedido o1 = new Pedido(null, Instant.parse("2022-02-10T19:53:07Z"), PedidoStatus.CANCELADO ,  u1);
		Pedido o2 = new Pedido(null, Instant.parse("2022-02-11T03:42:10Z"), PedidoStatus.AGUARDANDO_PAGAMENTO ,u2);
		Pedido o3 = new Pedido(null, Instant.parse("2019-02-12T15:21:22Z"), PedidoStatus.PAGO,u1);
		
		
		
		
		
		
		usuarioRepository.saveAll(Arrays.asList(u1,u2));
		pedidoRepository.saveAll(Arrays.asList(o1,o2,o3));
	}

}
