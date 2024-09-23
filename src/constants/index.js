import { useState } from "react"

export const navLinks = [
  {
    id: 1,
    linkTitle: 'Home',
    linkPath: '/'
  },
  {
    id: 2,
    linkTitle: 'About',
    linkPath: '/about'
  },
  {
    id: 3,
    linkTitle: 'Careers',
    linkPath: '/careers'
  },
]

export const tabItems = [
  {
    id: 1,
    tabTitle: 'All openings'
  },
  {
    id: 2,
    tabTitle: 'Software Engineers'
  },
  {
    id: 3,
    tabTitle: 'Quality Assurance'
  },
  {
    id: 4,
    tabTitle: 'Designers'
  },
]

export const accItems = [
  {
    id: 1,
    accTitle: 'When can you start working for me?',
    accContent: 'Please contact us, but most likely, immediately! We always try to keep some reserve capacity to serve new customers with minimal delay.',
    isOpen: true
  },
  {
    id: 2,
    accTitle: 'What are the logistics of working together?',
    accContent: 'We are flexible! Typically we first engage in a two-week paid trial so our clients can validate the value we can provide. Projects can be fixed term (typically 3+ months), or indefinite (we become an integrated part of the team)..',
    isOpen: false
  },
  {
    id: 3,
    accTitle: 'How do you manage timezone differences?',
    accContent: 'At First Mate Technologies, we recognize the critical role of synchronization in our project workflow. Once a project begins, we actively work to identify and set overlapping working hours that accommodate both our clients and our team.',
    isOpen: false
  },
]