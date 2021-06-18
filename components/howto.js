import React from 'react'
import Container from './container'

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'

const classes = {
  section: 'bg-center bg-cover px-4 sm:py-32 h-70r',
  sectioninner: 'max-w-2xl m-auto my-20 py-10 sm:px-10',
  accord: 'max-w-xl m-auto mx-6',
  itemh: 'p-4 m-1 rounded-sm text-md font-mono uppercase',
  itemb: 'p-4',
  header: 'text-h-1 font-mono text-2xl font-bold lowercase mb-4 font-mono',
  list: 'list-disc list-inside',
  listitem: '',
  link: 'text-h-1 opacity-60',
  discord: 'text-lg text-black bg-brightyellow p-2 rounded',
  code: 'bg-darkbrown p-2 my-2 overflow-x-auto text-h-1 opacity-60 scrollbar scrollbar-thumb-reel-500 scrollbar-track-darkbrown pb-6',
  img: 'opacity-30',
}

export default function HowTo() {
  return (
    <section className={classes.section}>
      <div className={classes.sectioninner}>
        {' '}
        <h2
          className={classes.header}
          style={{ textShadow: ' 4px 2px 4px #000000, 4px 2px 4px #000000' }}>
          ::how-to
        </h2>
        <Accordion preExpanded={['start']} className={classes.accord}>
          <AccordionItem uuid='start'>
            <AccordionItemHeading className={classes.itemh}>
              <AccordionItemButton>Get Started</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className={classes.itemb}>
              <p>
                In order to get started developing for the Pirate Box, you'll
                need the following:
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
                <div className={classes.code}>
                  https://gateway.ipfs.io/ipfs/QmUMYgPeVyALDSrephhRQykj7sV9JixDUBeJZBB6FWrUgN
                </div>{' '}
                <br />
                from a logged in IPFS account. The <b>sha256sum</b> verification
                hash is:
                <div className={classes.code}>
                  2a91800da22cdeafe01fa88535192006b4f87808408902c61b7f1f2c65cd84e1
                </div>
                <br />
                If you need more information on installing custom images on the
                Raspberry Pi, see the documentation here: <br />
                <a
                  className={classes.link}
                  href='https://www.raspberrypi.org/documentation/installation/installing-images/'>
                  Installing operating system images - Raspberry Pi
                  Documentation
                </a>
              </p>
              <br />
              <a href='https://discord.gg/rMvnyD9aDb'>
                <button className={classes.discord}>
                  Join our Discord community for support!
                </button>
              </a>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading className={classes.itemh}>
              <AccordionItemButton>Submit an Entry</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className={classes.itemb}>
              <p>Here's what you'll need to submit an entry:</p>
              <br />
              <ul className={classes.list}>
                <li>Link to a video demonstrating your contribution</li>
                <li>
                  Link to a code repository, all software must be open source
                </li>
                <li>
                  (optional) CID of custom Pirate Box image with your software
                  included
                </li>
              </ul>
              <br />
              <p>
                We recommend using the bip-cot license for your open source
                project. Check it out >{' '}
                <a href='https://bipcot.org/'>bipcot.org/</a>.
              </p>
              <img
                className={classes.img}
                src={require('../images/pirateFlag.png')}
                alt='pirate skull'
              />
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
