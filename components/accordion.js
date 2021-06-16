import React from 'react'

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css'

const classes = {
  section: 'bg-center bg-cover px-4 sm:py-32',
  accord: 'max-w-xl m-auto',
}

export default function AccordionComp() {
  return (
    <section className={classes.section}>
      <Accordion allowZeroExpanded='true' className={classes.accord}>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>Contest Dates & Events</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
              occaecat ut occaecat consequat est minim minim esse tempor laborum
              consequat esse adipisicing eu reprehenderit enim.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>Prizes</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              In ad velit in ex nostrud dolore cupidatat consectetur ea in ut
              nostrud velit in irure cillum tempor laboris sed adipisicing eu
              esse duis nulla non.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>How-to Make a Submission</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              In ad velit in ex nostrud dolore cupidatat consectetur ea in ut
              nostrud velit in irure cillum tempor laboris sed adipisicing eu
              esse duis nulla non.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </section>
  )
}
