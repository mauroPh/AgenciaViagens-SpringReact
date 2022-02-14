package com.agviagens.backend.config;

import java.time.Instant;
import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import com.agviagens.backend.entities.Destino;
import com.agviagens.backend.entities.Pacote;
import com.agviagens.backend.entities.Pagamento;
import com.agviagens.backend.entities.Pedido;
import com.agviagens.backend.entities.PedidoItem;
import com.agviagens.backend.entities.Usuario;
import com.agviagens.backend.entities.enums.PedidoStatus;
import com.agviagens.backend.repositories.DestinoRepository;
import com.agviagens.backend.repositories.PacoteRepository;
import com.agviagens.backend.repositories.PedidoItemRepository;
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
	
	@Autowired
	private PacoteRepository pacoteRepository;
	
	@Autowired
	private PedidoItemRepository pedidoItemRepository;
	

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

		
		Pacote p1 = new Pacote(null,"Voo (ida + volta) + Hospedagem+  Café da Manhã","As pessoas ficarão em quartos duplos ou triplos, com no mínimo três pontuações .Pacote aéreo ida e volta. Café da manhã incluso",2190.0,"");		
		Pacote p2 = new Pacote(null,"Aéreo ","Pacote aéreo ida e volta",1190.0,"");
		Pacote p3 = new Pacote(null,"Hospedagem ","As acomodações são equipadas com ar-condicionado, TV LCD 32” a cabo, frigobar e cofre. Alguns quartos dispõem de varanda. O hotel oferece 2 águas, café, leite e chá solúvel de cortesia.",1190.0,"");
		
		
		
		destinoRepository.saveAll(Arrays.asList(dest1,dest2,dest3,dest4,dest5,dest6,dest7,dest8));
		pacoteRepository.saveAll(Arrays.asList(p1,p2,p3));
		
		p1.getDestinos().add(dest1);
		p2.getDestinos().add(dest3);
		p3.getDestinos().add(dest2);
		p1.getDestinos().add(dest4);	
		p2.getDestinos().add(dest5);
		p3.getDestinos().add(dest6);
		p1.getDestinos().add(dest7);	
		p2.getDestinos().add(dest8);
		
		pacoteRepository.saveAll(Arrays.asList(p1,p2,p3));
		
		
		Usuario u1 = new Usuario(null, "Maria Brown", "maria@gmail.com", "988888888", "123456");
		Usuario u2 = new Usuario(null, "Alex Green", "alex@gmail.com", "977777777", "123456");
		
		
		Pedido ped1 = new Pedido(null, Instant.parse("2022-02-10T19:53:07Z"), PedidoStatus.CANCELADO ,  u1);
		Pedido ped2 = new Pedido(null, Instant.parse("2022-02-11T03:42:10Z"), PedidoStatus.AGUARDANDO_PAGAMENTO ,u2);
		Pedido ped3 = new Pedido(null, Instant.parse("2022-02-12T15:21:22Z"), PedidoStatus.PAGO,u1);
		
				
		usuarioRepository.saveAll(Arrays.asList(u1,u2));
		pedidoRepository.saveAll(Arrays.asList(ped1,ped2,ped3));
	
		PedidoItem itemPed1 =  new PedidoItem(ped1,p1,2, p1.getPreco());
		PedidoItem itemPed2 =  new PedidoItem(ped1,p2,1, p2.getPreco());
		PedidoItem itemPed3 =  new PedidoItem(ped1,p3,2, p3.getPreco());
		PedidoItem itemPed4 =  new PedidoItem(ped1,p2,2, p2.getPreco());	
		
		pedidoItemRepository.saveAll(Arrays.asList(itemPed1,itemPed2,itemPed3,itemPed4));
		
		Pagamento pag1	= new Pagamento(null, Instant.parse("2022-02-12T17:21:22Z"),ped3);
		ped3.setPagamento(pag1);
		
		pedidoRepository.save(ped3);
		
		
	}

}
