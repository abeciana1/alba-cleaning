import { useEffect, useState } from 'react';
import { NextSeo } from 'next-seo';
import Tips from '../lib/tips.json'
import {
  TopHeroSection,
  TwoColGrid,
  FourColGrid,
  ThreeColGrid
} from '@/components/sections'
import { TipQuote } from '@/components/Quote'
import { PageMargin } from '@/components/layouts'
import { SectionTag } from '@/components/utils/SectionTag'
import { TeaserWithIcon, TeaserWithImg } from '@/components/utils/Teaser'
import callIcon from '@/public/call'
import relaxIcon from '@/public/relax'
import { GetStaticProps } from 'next'
import { gql, GraphQLClient } from 'graphql-request'
import { CleaningServices } from '@/interfaces'
import { ServiceT } from '@/types'

export default function Home({ serviceCleanings }: CleaningServices) {

  const [currentQuote, setQuote] = useState<string>("")

  const randomIndexNum = (): number => {
    return Math.floor(Math.random() * (Tips.length - 1))
  }

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
      <PageMargin addClass="pt-10 md:pt-20 bg-gradient-to-r from-skyblue-100 bg-gradient-to-t to-chineseviolet-100">
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
        <FourColGrid>
          <TeaserWithIcon
            title="Contact us"
            body="Send us an email or give us a call. We'll assess your needs and set up an appointment."
            icon={callIcon}
            iconClass="w-14 h-14 bg-dishycoral from-dishycoral p-3"
            teaserClass="lg:col-start-2"
          />
          <TeaserWithIcon
            title="Sit back and relax"
            body="We clean and you relax. We'll take over the chores, allowing you to relax and be worry-free."
            icon={relaxIcon}
            iconClass="w-14 h-14 p-3 from-shadowblue bg-shadowblue"
            teaserClass="lg:col-start-3"
          />
        </FourColGrid>
      </PageMargin>
      <PageMargin addClass="pt-10 md:pt-20 bg-gradient-to-l from-altYellow bg-gradient-to-t to-skyblue-100">
        <SectionTag
          text="Services"
          color="dishycoral"
        />
        <TwoColGrid>
          <section>
            <h1 className="text-charcoal text-4xl lg:text-5xl">
              Our services for you
            </h1>
          </section>
          <section>
            <div className="lg:w-3/4 text-2xl lg:text-3xl text-charcoal">
              Our comprehensive cleaning package includes, but no limited to:
            </div>
          </section>
        </TwoColGrid>
        <ThreeColGrid>
          {serviceCleanings.map(({
            id,
            titleService,
            serviceBody,
            icon,
            color
          }: ServiceT) => {
            return (
              <TeaserWithImg
                key={id}
                title={titleService}
                body={serviceBody}
                image={icon}
                color={color}
              />
            )
          })}
        </ThreeColGrid>
      </PageMargin>
      <PageMargin addClass="pt-10 md:pt-20 bg-gradient-to-l from-dishycoral-100 bg-gradient-to-t to-altYellow">
        {/* <SectionTag
          text="Cleaning tips"
          color="dishycoral"
        />
        <section className="mx-auto text-center mt-20">
          <h2>A cleaning tip for you</h2>
          <TipQuote
            quote={currentQuote}
          />
        </section> */}
      </PageMargin>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const serviceClient = new GraphQLClient(process.env.GRAPH_CMS_API_ENDPOINT || "")

  const servicesQuery = gql`
    query{
      serviceCleanings {
        id
        titleService
        serviceBody
        icon {
          id
          height
          width
          url(transformation: {document: {output: {format: webp}}})
        }
        color
      }
    }
  `
  const { serviceCleanings } = await serviceClient.request(servicesQuery)

  return {
    props: {
      serviceCleanings
    }
  }
}