import { useEffect, useState } from 'react';
import { NextSeo } from 'next-seo';
import Tips from '../lib/tips.json'
import { TopHeroSection, HeroSection, HeroSectionReverse } from '@/components/sections'
import { TipQuote } from '@/components/Quote'
import { PageMargin } from '@/components/layouts'

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
      <TopHeroSection
        title="Professional cleaning service for your home and office"
        body="We're a dedicated, friendly, and reliable team of cleaners in the Killeen, TX, area. Making your mess, our mess."
        image={{
          image: "/cleaning-person-with-violet-background.webp",
          alt: "Cleaning person",
          width: 1146,
          height: 1333
        }}
      />
      <PageMargin>
        <section className="mt-20">
          <h2 className="text-center">Services we offer</h2>
          <div className="text-xl text-center"> Our comprehensive cleaning package includes, but no limited to:</div>
           {/* dusting furniture, appliances, and fixtures; vacuuming and mopping floors; thorough cleaning of each room in your house or office; sanitizing bathrooms and kitchen surfaces; as well as de-cluttering and organizing any living spaces. */}
          <section className="mb-20">
            <HeroSection
              title="Your home is our home!"
              body="Hate coming home to a cluttered mess? Tired of your weekends just to clean and organize? Let us make your mess, our mess!"
              image={{
                image: "https://media.graphassets.com/output=format:webp/ZpxBpBzZQxyIJ7x8zc0w",
                alt: "Home cleaning illustration",
                height: 1426,
                width: 1719
              }}
            />
          </section>
          <section>
            <HeroSectionReverse
              title="Let us clear up the clutter!"
              body="Impress your clients and create a healthy work environment for your team. Leave the cleaning to us and have more time to focus on your business!"
              image={{
                image: "https://media.graphassets.com/output=format:webp/Ms12DwtSLqIt0J8WpJOB",
                alt: "Office cleaning illustration",
                height: 1221,
                width: 1688
              }}
            />
          </section>
        </section>
        <section className="mx-auto text-center mt-20">
          <h2>A cleaning tip for you</h2>
          <TipQuote
            quote={currentQuote}
          />
        </section>
      </PageMargin>
    </>
  )
}
