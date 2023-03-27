import { NextSeo } from 'next-seo';
import Tips from '../lib/tips.json'
import { HeroSection } from '@/components/sections'

const heroImages = [
  {
    image: "https://media.graphassets.com/output=format:webp/ukpMvg7RqSBYLuEX3GSV",
    alt: "Dirty living room graphic"
  },
  {
    image: "https://media.graphassets.com/output=format:webp/bnA5RAplSyiXH9DLvEEf",
    alt: "Clean living room graphic"
  }
]

export default function Home() {

  return (
    <>
      <NextSeo
        title="Alba Cleaning Service"
        description="Sample text"
        canonical=""
      />
      <HeroSection
        title="Let's work together"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."
        images={heroImages}
      />
    </>
  )
}
