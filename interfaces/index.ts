import React from 'react';
import { SliderImageT } from '@/types'

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

export interface TeaserI {
    title: string;
    body: string;
    icon: React.ElementType;
    iconClass: string;
    teaserClass?: string;
}

export interface IconI {
    addClass: string;
    fill: string;
}