package com.agviagens.backend.entities.enums;

public enum PedidoStatus {
	
	AGUARDANDO_PAGAMENTO(1),
	PAGO(2),
	CANCELADO(3);
	
	
	private int code;
	
	private PedidoStatus(int code) {
		this.code = code;
	}
	
	
	public int getCode() {
		return code;
	}

	public static PedidoStatus valueOf(int code) {
		
		for (PedidoStatus value : PedidoStatus.values()) {
			if(value.getCode() == code) {
				return value;
			}
		}
		throw new IllegalArgumentException(" Codigo inválido para o status do pedido");
	} 

}
