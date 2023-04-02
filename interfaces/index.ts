import React from 'react';
import { SliderImageT, ServiceT, ServiceIconT } from '@/types'

export interface PropChildI {
    children: React.ReactNode;
}

export interface AddClassNameI {
    addClass?: string;
}

export interface PageMarginI extends PropChildI, AddClassNameI {}

export interface TopHeroSectionI {
    title: string;
    body: string;
    image: SliderImageT;
}

export interface QuoteI {
    quote: string;
}

export interface HeroSectionI {
    title: string;
    body: string;
    image: SliderImageT
}

export interface SectionTagI {
    text: string;
    color: string
}

export interface TeaserIconI {
    title: string;
    body: string;
    icon: React.ElementType;
    iconClass: string;
    teaserClass?: string;
}

export interface TeaserImgI {
    title: string;
    body: string;
    image: ServiceIconT;
    teaserClass?: string;
    color: string;
}

export interface IconI {
    addClass: string;
}

export interface CleaningServicesI {
    serviceCleanings: ServiceT[]
}

export interface DropdownOptionI {
    name: string;
    href: string;
    icon: React.ElementType;
    iconClass: string;
    description: string;
}