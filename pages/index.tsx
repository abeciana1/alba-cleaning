import { useEffect, useState } from 'react';
import { NextSeo } from 'next-seo';
import Tips from '../lib/tips.json'
import { HeroSection } from '@/components/sections'
import { TipQuote } from '@/components/Quote'
import { PageMargin } from '@/components/layouts'

const heroImages = [
  {
    image: "https://media.graphassets.com/output=format:webp/ukpMvg7RqSBYLuEX3GSV",
    alt: "Dirty living room graphic",
    height: 3000,
    width: 5000
  },
  {
    image: "https://media.graphassets.com/output=format:webp/bnA5RAplSyiXH9DLvEEf",
    alt: "Clean living room graphic",
    height: 3000,
    width: 5000
  }
]

export default function Home() {

  const randomIndexNum = (): number => {
    return Math.floor(Math.random() * (Tips.length - 1))
  }

  const [ currentQuote, setQuote ] = useState<string>("")

  useEffect(() => {
    setQuote(Tips[randomIndexNum()])
  }, [])

  return (
    <>
      <NextSeo
        title="Alba Cleaning Service"
        description="Sample text"
        canonical=""
      />
      <HeroSection
        title="Let's get cleaning!"
        body="We're a dedicated and professional team of cleaners in the Killeen, TX, area; your mess is our mess."
        images={heroImages}
      />
      <PageMargin>
        <section className="mx-auto text-center mt-20">
          <h2>A cleaning tip for you</h2>
          <TipQuote
            quote={currentQuote}
          />
        </section>
        <section className="mt-20">
          <h2 className="text-center">Services we offer</h2>
        </section>
      </PageMargin>
    </>
  )
}
