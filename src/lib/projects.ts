export interface Project {
  title: string
  description: string
  image: string
  tech: string[]
  liveUrl?: string
  githubUrl?: string
}

export interface MobileProject extends Project {
  iosUrl?: string
  androidUrl?: string
  demoUrl?: string
}

export const webProjects: Project[] = [
  {
    title: "BeYou Dashboard",
    description: "A responsive dashboard for managing metrics and analytics with real-time API data.",
    image: "/projects/BeYou.png",
    tech: ["Vite", "TypeScript", "Tailwind"],
    // liveUrl: "https://www.libremax.com/",
  },
  {
    title: "VideoChat",
    description:
      "Add live video chat to your website in seconds. Increase sales by 40% with face-to-face customer interactions. No downloads required - works in any browser.",
    image: "/projects/videochat.png",
    tech: ["Vite", "TypeScript", "Tailwind"],
    liveUrl: "https://videochat.live/",
  },
  {
    title: "Libremax",
    description: "Creative structuring. Swift capital.",
    image: "/projects/libremax.png",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    liveUrl: "https://www.libremax.com/",
  },
  {
    title: "Eisler Capital",
    description:
      "Eisler Capital’s multi-strategy capabilities are built on the core principles of deep collaboration and continuous development.",
    image: "/projects/eisler.png",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    liveUrl: "https://eislercapital.com/",
  },
  {
    title: "Catchment Capital",
    description:
      "Catchment Capital specializes in industrial and middle-market private equity investments, driving strategic growth and operational excellence.",
    image: "/projects/catchment-capital.png",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    liveUrl: "https://www.catchmentcapital.com/",
  },
  {
    title: "Mesarete Capital",
    description: "A responsive dashboard for managing content and analytics with real-time API data.",
    image: "/projects/mesarete.png",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    liveUrl: "https://www.mesaretecapital.com/",
  },
]

export const mobileProjects: MobileProject[] = [
  {
    title: "Lifestyle Rewards",
    description:
      "Earn real Cash-Back, enjoy exclusive deals, and make every purchase rewarding with Lifestyle Rewards. It’s that simple.",
    image: "/projects/Lifestyle_Rewards.png",
    tech: ["React Native", "Firebase"],
    iosUrl: "https://apps.apple.com/za/app/lifestyle-rewards/id1581131905",
    androidUrl: "https://play.google.com/store/apps/details?id=com.llmobile&hl=en_ZA",
  },
  {
    title: "tAIsty",
    description: "AI recipe generating app",
    image: "/projects/taisty.webp",
    tech: ["React Native", "AI"],
    iosUrl: "https://apps.apple.com/za/app/taisty/id6448109710",
    androidUrl: "https://play.google.com/store/apps/details?id=com.fuseboxdeveloper.tAIsty",
  },
]

export const moreProjects = [
  { title: "22NW", url: "https://22nw.com/" },
  { title: "36 South", url: "https://www.36south.com/" },
  { title: "37 Spruce", url: "https://www.37spruce.com/" },
  { title: "Advaya", url: "#" },
  { title: "Alamut Investment Management", url: "https://alamut-im.com/" },
  { title: "Almasar Minerals", url: "https://almasarminerals.com/" },
  { title: "Altus Investment Management", url: "https://altusinvestment.com/" },
  { title: "Aptior Capital", url: "https://www.aptiorcapital.com/" },
  { title: "Aquidneck Advisors", url: "http://aquidneckadvisors.com/" },
  { title: "Arini", url: "https://arini.com/" },
  { title: "Arxnova Asset Management", url: "#" },
  { title: "Avantyr", url: "https://www.avantyrcapital.com/" },
  { title: "Basis Point Group", url: "https://basispoint.group/" },
  { title: "Bayforest Technologies", url: "https://bayforest.ai/" },
  { title: "Boldhaven", url: "https://boldhaven.com/" },
  { title: "Borealis", url: "https://www.borealisstratcap.com/" },
  { title: "Bright Meadow Capital", url: "https://www.brightmeadowcapital.com/" },
  { title: "Carrahae Capital", url: "https://www.carrhaecap.com/" },
  { title: "Chepstow Capital Management", url: "https://www.chepstowcap.com/" },
  { title: "Cisu Capital", url: "https://cisucapital.com/" },
  { title: "Cleardusk Management", url: "https://www.cleardusk.com/" },
  { title: "Coventry Structured Investments", url: "https://www.coventrysi.com/" },
  { title: "Cross Creek", url: "https://www.crosscreek.vc/" },
  { title: "Develop Capital", url: "#" },
  { title: "Decagon Asset Management", url: "https://decagonam.com/" },
  { title: "Diameter Capital Partners", url: "https://www.diametercap.com/" },
  { title: "DLD Asset Management", url: "https://dldam.com/" },
  { title: "Drakewood Capital", url: "https://drakewood.co.uk/" },
  { title: "Edge Focus Partners", url: "https://www.edgefocuspartners.com/" },
  { title: "Elypath", url: "https://elypath.com/" },
  { title: "Estrela Capital Management", url: "https://estrelacapital.com/" },
  { title: "Evonite", url: "https://evonite.eu/" },
  { title: "Fitz Walter", url: "http://www.fwcap-announcements.com" },
  { title: "Goji Investments", url: "https://goji.investments/" },
  { title: "Indago Capital", url: "https://www.indagocap.com/" },
  { title: "InRider Partners", url: "https://inriderpartners.com/" },
  { title: "JJJ Capital Management", url: "https://jjjcapital.com/" },
  { title: "Kintbury Capital", url: "https://kintburycapital.com/" },
  { title: "Kryger Capital", url: "https://krygercapital.com/" },
  { title: "LAB Quantitative Strategies", url: "https://www.lab-qs.com/" },
  { title: "Landfund Partners", url: "https://landfundpartners.com/" },
  { title: "Lodge Quai", url: "https://www.lodgequai.com/" },
  { title: "Lumenai Investments", url: "https://lumenai.net/" },
  { title: "Maple Cap", url: "https://www.maplecap.com/" },
  { title: "Mara River Capital", url: "https://mararivercapital.com/" },
  { title: "Mariner", url: "https://www.marinerinvestment.com/" },
  { title: "Market Securites", url: "https://market-securities.com/" },
  { title: "MIK Fund Solutions", url: "https://www.mikfs.com/" },
  { title: "Milkwood Capital", url: "https://www.milkwoodcap.com/" },
  { title: "Milkwood Research", url: "https://www.milkwoodresearch.com/" },
  { title: "MKP Capital", url: "https://mkpcap.com/" },
  { title: "Naya Capital Management", url: "https://www.nayacapital.com/" },
  { title: "Night Squard", url: "https://nightsquared.com/" },
  { title: "One River Asset Management", url: "https://www.oneriveram.com/" },
  { title: "Origin", url: "http://originfp.com/" },
  { title: "Orion Resource Partners LP", url: "https://www.orionrp.com/" },
  { title: "Orion OIV", url: "https://oiv.orionrp.com/" },
  { title: "Orion UCITS", url: "https://ucits.orionrp.com/" },
  { title: "Outyear Capital Partners", url: "https://outyear.io/" },
  { title: "Presidio Investors", url: "https://www.presidioinvestors.com/" },
  { title: "QSquared Technology", url: "https://www.qsquaredtech.com/" },
  { title: "Regents Gate", url: "https://regentsgatecapital.com/" },
  { title: "Rokos Capital Management", url: "https://www.rokoscapital.com/home" },
  { title: "Saluda Grade", url: "https://www.saludagrade.com/" },
  { title: "Sandbar", url: "https://sandbaram.com/" },
  { title: "Sand Grove", url: "https://sandgrovecapital.com/" },
  { title: "Scalar Gauge", url: "https://www.scalargauge.com/" },
  { title: "SCP Resource Finance", url: "https://www.scp-rf.com/" },
  { title: "Selwood Asset Management", url: "https://www.selwoodam.com/" },
  { title: "Shiprock Capital", url: "https://shiprock.co.uk/" },
  { title: "Skyway Pacific", url: "https://skywaypacific.com/" },
  { title: "Sona Asset Management", url: "https://sona-am.com/" },
  { title: "Sparta Capital Management", url: "https://spartacapital.co.uk/" },
  { title: "Stouff Capital", url: "https://www.stouffcapital.com/" },
  { title: "Surgo Capital", url: "https://www.surgocap.com/" },
  { title: "Surgo Health", url: "https://www.surgohealth.com/" },
  { title: "Symmetry Global Services Limited", url: "https://symmetryinvestments.com/" },
  { title: "System 2 Capital", url: "https://system2capital.com/" },
  { title: "Taula Capital", url: "https://www.taulacapital.com/" },
  { title: "Teleios Capital", url: "https://www.teleioscapital.com/" },
  { title: "Trimaran", url: "https://trimaranadvisors.com/" },
  { title: "Turnspire", url: "https://www.turnspirecap.com/" },
  { title: "Tycho Capital", url: "https://tychocap.com/" },
  { title: "Varadero", url: "https://www.varaderocapital.com/" },
]
