
export type SliderImageT = {
    image: string;
    alt: string;
    height: number;
    width: number;
}

export type ServiceT = {
    id: string;
    titleService: string;
    serviceBody: string;
    icon: ServiceIconT;
    color: string;
}

export type ServiceIconT = {
    id: string;
    alt: string;
    height: number;
    width: number;
    url: string;
}