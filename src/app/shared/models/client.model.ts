import { ServiceModel } from './service.model';

export interface ClientModel {
    id: number;
    name: string;
    date: Date;
    services: ServiceModel[];
}