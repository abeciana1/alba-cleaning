import { useEffect, useState } from 'react';
import { NextSeo } from 'next-seo';
import Tips from '../lib/tips.json'
import {
  TopHeroSection,
  HeroSection,
  HeroSectionReverse,
  TwoColGrid,
  ThreeColGrid
} from '@/components/sections'
import { TipQuote } from '@/components/Quote'
import { PageMargin } from '@/components/layouts'
import { SectionTag } from '@/components/utils/SectionTag'
import Image from 'next/image'
import { Teaser } from '@/components/utils/Teaser'
import callIcon from '@/public/call'
import relaxIcon from '@/public/relax'

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
      <PageMargin addClass="pt-10 md:pt-20 bg-gradient-to-r from-skyblue-100">
        <SectionTag
          text="About us"
          color="dishycoral"
        />
        <TwoColGrid>
          <section>
            <h1 className="text-charcoal text-4xl lg:text-5xl">
              Local, family owned and operated
            </h1>
          </section>
          <section>
            <div className="lg:w-3/4 text-2xl lg:text-3xl text-charcoal">
              Trust your home or office with a family business that cares about you!
            </div>
          </section>
        </TwoColGrid>
        <section className="text-center pt-10 md:pt-20">
          <h2 className="text-charcoal">Our two-step process</h2>
        </section>
        <ThreeColGrid>
          <Teaser
            title="Book your appointment"
            body=""
            icon={callIcon}
            iconClass="w-12 h-12 "
          />
          <section>
            <Image
              src="/gloves-heart.webp"
              alt="gloves creating heart"
              width={2000}
              height={1333}
            />
          </section>
          <Teaser
            title="Sit back and relax"
            body=""
            icon={relaxIcon}
            iconClass="w-12 h-12"
          />
        </ThreeColGrid>
      </PageMargin>
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
