export interface ClientTableModel {
    id: number;
    name: string;
    member: boolean;
    visits: number;
    points: number;
    spent: number;
}

export interface BarberTableModel {
    id: number;
    name: string;
    works: WorkModel[];
    totalContributions: number;
    profits: number;
}

export interface ServiceTableModel {
    id: number;
    name: string;
    type: string;
    description: string;
    price: number;
}

export interface ProductTableModel {
    id: number;
    name: string;
    type: string;
    stock: number;
    price: number;
}

export interface WorkModel {
    client: string;
    barber: number;
    products: ProductTableModel[];
    services: ServiceTableModel[];
    date: Date;
    priceTotal: number;
}

export interface userModule {
    email: string;
    password: string;
    username: string
}