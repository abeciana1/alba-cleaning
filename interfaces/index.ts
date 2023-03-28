import React from 'react';
import { SliderImageT } from '@/types'

export interface PropChildI {
    children: React.ReactNode;
}

export interface HeroSectionI {
    title: string;
    body: string;
    images: SliderImageT[]
}

export interface ImageCompareI {
    images: SliderImageT[]
}

export interface QuoteI {
    quote: string;
}