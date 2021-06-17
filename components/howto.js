import React from 'react'
import Container from './container'

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'

// Demo styles, see 'Styles' section below for some notes on use.

const classes = {
  section: 'bg-center bg-cover px-4 sm:py-32',
  accord: 'max-w-xl m-auto mx-6',
  itemh: 'p-4 m-1 bg-darkbrown rounded-sm text-md font-mono uppercase',
  itemb: 'p-4',
  header: 'text-h-1 font-mono text-2xl font-bold lowercase mb-4',
  list: 'list-disc list-inside',
  listitem: '',
  link: 'text-reel-500',
  discord: 'text-lg text-h-1',
}

export default function HowTo() {
  return (
    <Container>
      <h2
        className={classes.header}
        style={{ textShadow: ' 4px 2px 4px #000000, 4px 2px 4px #000000' }}>
        ::how-to
      </h2>
      <Accordion allowZeroExpanded='true' className={classes.accord}>
        <AccordionItem>
          <AccordionItemHeading className={classes.itemh}>
            <AccordionItemButton>> Get Started</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className={classes.itemb}>
            <p>
              In order to get started developing for the Pirate Box, you'll need
              the following:
            </p>
            <br />
            <ul className={classes.list}>
              <li className={classes.listitem}>A Raspberry Pi 4 computer</li>
              <li className={classes.listitem}>
                A copy of the Pirate Box image
              </li>
            </ul>
            <br></br>
            <p>
              The Pirate Box image can be downloaded from:
              <br />
              <a className={classes.link}>
                https://gateway.ipfs.io/ipfs/TBD
              </a>{' '}
              <br />
              from a logged in IPFS account. <br /> <br />
              If you need more information on installing custom images on the
              Raspberry Pi, see the documentation here: <br />
              <a
                className={classes.link}
                href='https://www.raspberrypi.org/documentation/installation/installing-images/'>
                Installing operating system images - Raspberry Pi Documentation
              </a>
            </p>
            <br />
            <a className={classes.discord}>
              Join our Discord community for support!
            </a>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading className={classes.itemh}>
            <AccordionItemButton>> Submit an Entry</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className={classes.itemb}>
            <p>
              In ad velit in ex nostrud dolore cupidatat consectetur ea in ut
              nostrud velit in irure cillum tempor laboris sed adipisicing eu
              esse duis nulla non.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </Container>
  )
}
