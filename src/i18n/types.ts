export type { Locale } from './config'

export type Dictionary = {
  switcher: {
    label: string
    th: string
    en: string
    ariaSwitchTo: string
  }
  hero: {
    subtitle: string
    ctaPrimary: string
    ctaSecondary: string
    stats: {
      companies: { number: string; label: string }
      uptime: { number: string; label: string }
      support: { number: string; label: string }
      security: { number: string; label: string }
    }
  }
  about: {
    sectionTitle: string
    intro1Prefix: string
    intro1Brand: string
    intro1Suffix: string
    intro2: string
    intro3Highlight: string
    intro3Rest: string
    valuesTitle: string
    values: {
      transparency: { title: string; desc: string }
      autonomy: { title: string; desc: string }
      quality: { title: string; desc: string }
      speed: { title: string; desc: string }
    }
    features: {
      collaboration: { title: string; description: string }
      team: { title: string; description: string }
      workflows: { title: string; description: string }
      collective: { title: string; description: string }
    }
    missionTitle: string
    missionBody1: string
    missionHighlight: string
    missionBody2: string
    statsRow: {
      agents: { number: string; label: string }
      transparent: { number: string; label: string }
      collaborative: { number: string; label: string }
      possibilities: { number: string; label: string }
    }
  }
  services: {
    sectionTitle: string
    sectionSubtitle: string
    items: {
      development: ServiceItem
      data: ServiceItem
      cloud: ServiceItem
      chatbots: ServiceItem
      analytics: ServiceItem
      automation: ServiceItem
    }
    cardCta: string
    customTitle: string
    customBody: string
    customCta: string
  }
  team: {
    sectionTitle: string
    sectionSubtitle: string
    specializationLabel: string
    statsProjects: string
    statsSuccess: string
    idLabel: string
    members: {
      maya: TeamMemberCopy
      alex: TeamMemberCopy
      sarah: TeamMemberCopy
      priya: TeamMemberCopy
      kai: TeamMemberCopy
      riku: TeamMemberCopy
      jamie: TeamMemberCopy
    }
    joinTitle: string
    joinBody: string
    joinCtaPositions: string
    joinCtaContact: string
  }
  contact: {
    sectionTitle: string
    sectionSubtitle: string
    methods: {
      email: { title: string; description: string }
      phone: { title: string; description: string }
      visit: { title: string; description: string }
    }
    visitValue: string
    formTitle: string
    fields: {
      nameLabel: string
      namePlaceholder: string
      emailLabel: string
      emailPlaceholder: string
      companyLabel: string
      companyPlaceholder: string
      messageLabel: string
      messagePlaceholder: string
    }
    submit: string
    submitting: string
    successAlert: string
    quickActionsTitle: string
    quickActions: {
      chat: { title: string; description: string }
      demo: { title: string; description: string }
    }
    responseTitle: string
    response: {
      emailLabel: string
      emailValue: string
      phoneLabel: string
      phoneValue: string
      demoLabel: string
      demoValue: string
    }
    hoursTitle: string
    hours: {
      weekdaysLabel: string
      weekdaysValue: string
      emergencyLabel: string
      emergencyValue: string
    }
  }
}

type ServiceItem = {
  title: string
  description: string
  features: [string, string, string, string]
  price: string
}

type TeamMemberCopy = {
  role: string
  expertise: string
  description: string
}
