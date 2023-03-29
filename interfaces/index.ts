import React from 'react';
import { SliderImageT } from '@/types'

export interface PropChildI {
    children: React.ReactNode;
}

export interface TopHeroSectionI {
    title: string;
    body: string;
    image: SliderImageT;
}

export interface ImageCompareI {
    images: SliderImageT[]
}

export interface QuoteI {
    quote: string;
}

export interface HeroSectionI {
    title: string;
    body: string;
    image: SliderImageT
}

