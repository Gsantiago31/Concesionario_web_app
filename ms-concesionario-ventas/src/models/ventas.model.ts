import {Entity, model, property} from '@loopback/repository';

@model()
export class Ventas extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  placa: string;

  @property({
    type: 'number',
    required: true,
  })
  id_vehiculo: number;

  @property({
    type: 'number',
    required: true,
  })
  id_vendedor: number;

  @property({
    type: 'number',
    required: true,
  })
  id_cliente: number;

  @property({
    type: 'number',
    required: true,
  })
  id_factura: number;


  constructor(data?: Partial<Ventas>) {
    super(data);
  }
}

export interface VentasRelations {
  // describe navigational properties here
}

export type VentasWithRelations = Ventas & VentasRelations;
