import type { Article, Category, Author, Citation } from "./types"

// Sample authors
const authors: Author[] = [
  {
    name: "Sarah Johnson",
    title: "Legal Correspondent",
    bio: "Sarah is a legal expert specializing in property law and homeowners rights with over 15 years of experience.",
    avatar: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Michael Chen",
    title: "Housing Policy Analyst",
    bio: "Michael covers housing policy and its impact on homeowners across the country.",
    avatar: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Robert Garcia",
    title: "HOA Specialist",
    bio: "Robert has been covering HOA issues and community governance for over a decade.",
    avatar: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Jennifer Williams",
    title: "Real Estate Editor",
    bio: "Jennifer is an award-winning journalist covering real estate trends and property rights.",
    avatar: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "David Thompson",
    title: "Opinion Columnist",
    bio: "David is a homeowner advocate and regular contributor on property rights issues.",
    avatar: "/placeholder.svg?height=200&width=200",
  },
]

// Sample citations
const citations: Citation[] = [
  {
    source: "The Property Rights Journal",
    date: "2023-06-15",
    url: "https://example.com/property-rights-journal",
  },
  {
    source: "Homeowners Association Weekly",
    date: "2023-06-10",
    url: "https://example.com/hoa-weekly",
  },
  {
    source: "National Housing Policy Review",
    date: "2023-06-05",
    url: "https://example.com/housing-policy-review",
  },
  {
    source: "Legal Developments Quarterly",
    date: "2023-06-01",
    url: "https://example.com/legal-quarterly",
  },
  {
    source: "Urban Housing Institute",
    date: "2023-05-28",
    url: "https://example.com/urban-housing-institute",
  },
]

// Categories
const categories: Category[] = [
  {
    name: "HOA Issues",
    slug: "hoa-issues",
    description: "News and information about homeowners associations, rules, and disputes.",
  },
  {
    name: "Property Rights",
    slug: "property-rights",
    description: "Coverage of legal issues affecting property ownership and rights.",
  },
  {
    name: "Housing Policy",
    slug: "housing-policy",
    description: "Updates on local, state, and federal policies affecting homeowners.",
  },
  {
    name: "Legal Developments",
    slug: "legal-developments",
    description: "Court cases and legal changes impacting homeowners.",
  },
  {
    name: "Home Ownership",
    slug: "home-ownership",
    description: "Practical information for current and prospective homeowners.",
  },
]

// Articles
const articles: Article[] = [
  {
    title: "Supreme Court Rules in Favor of Homeowners in Landmark Eminent Domain Case",
    slug: "supreme-court-rules-homeowners-eminent-domain",
    excerpt:
      "In a 6-3 decision, the Supreme Court has strengthened property rights protections against government seizures.",
    content: `
      <p>WASHINGTON — In a landmark decision that will have far-reaching implications for property owners nationwide, the Supreme Court ruled 6-3 today that local governments must provide "just compensation" at full market value when exercising eminent domain powers.</p>
      
      <p>The case, <em>Richardson v. City of Lakeside</em>, centered around James Richardson, whose waterfront home was seized by the city to make way for a commercial development project. The city had offered Richardson compensation based on the property's assessed tax value, which was significantly lower than its market value.</p>
      
      <h2>A Victory for Property Rights</h2>
      
      <p>Writing for the majority, Justice Elena Kagan stated that "the fundamental right to property is enshrined in our Constitution, and when the government exercises its eminent domain power, it must truly provide just compensation that reflects the actual market value of the property being taken."</p>
      
      <p>The ruling establishes that governments must use independent appraisals based on current market conditions when determining compensation, rather than tax assessments or other potentially lower valuations.</p>
      
      <p>"This decision reaffirms that the government cannot shortchange property owners when taking their land," said Patricia Hernandez, an attorney with the Property Rights Alliance who filed an amicus brief in the case. "It's a significant victory for homeowners across the country."</p>
      
      <h2>Dissenting Opinion</h2>
      
      <p>In a dissenting opinion, Justice Samuel Alito, joined by Justices Clarence Thomas and Neil Gorsuch, argued that the ruling places an undue financial burden on local governments and could hamper important public projects.</p>
      
      <p>"While fair compensation is certainly required by the Constitution, today's decision may make necessary infrastructure improvements prohibitively expensive for many municipalities," Alito wrote.</p>
      
      <h2>Implications for Homeowners</h2>
      
      <p>Legal experts suggest the ruling will have immediate implications for hundreds of pending eminent domain cases nationwide. Homeowners who have received compensation offers based on tax assessments may now have grounds to demand higher payments.</p>
      
      <p>"This is a game-changer," said Robert Jenkins, president of the National Homeowners Association. "For too long, governments have been able to take property while paying pennies on the dollar of what it's actually worth."</p>
      
      <p>The ruling does not limit the government's ability to exercise eminent domain for public use, which was upheld in the controversial 2005 <em>Kelo v. City of New London</em> decision. However, it does ensure that when property is taken, owners will receive compensation that more accurately reflects their loss.</p>
      
      <p>Richardson, who had been fighting his case for over five years, expressed relief at the outcome. "This was never about stopping progress," he said. "It was about being treated fairly when the government takes something that's been in my family for generations."</p>
      
      <p>The case now returns to the lower court, which will determine the appropriate market-based compensation for Richardson's property.</p>
    `,
    date: "2023-06-15",
    coverImage: "https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d?q=80&w=2070&auto=format&fit=crop",
    citation: citations[0],
    category: categories[1],
    readingTime: 6,
    isBreaking: true,
    isFeatured: true,
  },
  {
    title: "New Bill Would Limit HOA Powers Over Home Modifications",
    slug: "bill-limit-hoa-powers-home-modifications",
    excerpt:
      "Federal legislation aims to prevent HOAs from blocking energy-efficient upgrades and accessibility modifications.",
    content: `
      <p>WASHINGTON — A bipartisan bill introduced in Congress this week would significantly limit the ability of homeowners associations to prevent property owners from making energy-efficient and accessibility modifications to their homes.</p>
      
      <p>The Homeowner Freedom to Modify Act, introduced by Representatives Maria Sanchez (D-CA) and James Wilson (R-FL), would prohibit HOAs from blocking installations of solar panels, energy-efficient windows, wheelchair ramps, and other modifications deemed "reasonable" under the bill's provisions.</p>
      
      <h2>Balancing Property Rights and Community Standards</h2>
      
      <p>"For too long, homeowners have been prevented from making sensible improvements to their own property," said Rep. Sanchez at a press conference announcing the legislation. "This bill strikes a balance between maintaining community standards and respecting the rights of individual homeowners to make necessary modifications."</p>
      
      <p>The bill would still allow HOAs to establish reasonable aesthetic guidelines, such as requiring solar panels to be installed in less visible locations when possible, but they could not outright prohibit such installations.</p>
      
      <p>For accessibility modifications, the legislation would align HOA requirements with the Americans with Disabilities Act, ensuring that homeowners with disabilities can make necessary changes to their properties.</p>
      
      <h2>Industry Response</h2>
      
      <p>The Community Associations Institute (CAI), which represents homeowners associations nationwide, expressed concerns about the federal government overriding HOA covenants.</p>
      
      <p>"While we support sustainable energy and accessibility, we believe these decisions are best made at the community level," said Thomas Reynolds, CAI's executive director. "This bill represents federal overreach into private contracts and community governance."</p>
      
      <p>However, environmental groups and disability rights advocates have praised the legislation. "This bill removes unnecessary barriers to clean energy adoption," said Susan Chen of the Climate Action Coalition. "Homeowners shouldn't have to choose between their community rules and doing what's right for the environment."</p>
      
      <h2>Growing Problem</h2>
      
      <p>The bill addresses what sponsors describe as a growing problem, with over 40,000 HOA disputes annually involving denied modification requests. In some cases, homeowners have faced fines or legal action for installing solar panels or making accessibility modifications despite HOA objections.</p>
      
      <p>James Thornton, a homeowner in Florida who was sued by his HOA after installing solar panels, welcomed the legislation. "I spent over $20,000 in legal fees defending my right to have solar power," Thornton said. "No homeowner should have to go through that."</p>
      
      <p>The bill includes provisions for resolving disputes through mediation before litigation and would establish a federal office within the Department of Housing and Urban Development to provide guidance and resources to homeowners and HOAs.</p>
      
      <p>With 74 million Americans living in HOA-governed communities, supporters believe the legislation could have far-reaching impacts if passed. The bill is scheduled for committee hearings next month.</p>
    `,
    date: "2023-06-10",
    coverImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop",
    citation: citations[1],
    category: categories[0],
    readingTime: 5,
    isBreaking: false,
  },
  {
    title: "Property Tax Relief Programs Expanded in 12 States",
    slug: "property-tax-relief-programs-expanded",
    excerpt: "New legislation provides additional tax breaks for seniors, veterans, and low-income homeowners.",
    content: `
      <p>Homeowners in a dozen states will see expanded property tax relief programs this year, as legislatures respond to the growing burden of rising property taxes amid increasing home values.</p>
      
      <p>The new measures, passed in recent legislative sessions, primarily target seniors, veterans, and low-income homeowners, though some states have implemented broader relief programs.</p>
      
      <h2>Senior Homeowners See Biggest Benefits</h2>
      
      <p>In Michigan, the Homestead Property Tax Credit for seniors has been expanded to include households with incomes up to $60,000, an increase from the previous $50,000 threshold. The maximum credit has also been increased from $1,500 to $1,800.</p>
      
      <p>"Many seniors are on fixed incomes and simply cannot afford the property tax increases we've seen in recent years," said Michigan State Senator Lisa Rodriguez, who sponsored the legislation. "This expansion will help thousands of additional seniors stay in their homes."</p>
      
      <p>Similarly, Georgia has frozen property tax assessments for homeowners aged 65 and older with incomes below $58,000, regardless of property value increases.</p>
      
      <h2>Veterans Receive Additional Support</h2>
      
      <p>Texas, which already offered property tax exemptions for disabled veterans, has increased the exemption amounts based on disability ratings. Veterans with a 100% disability rating will now receive a complete exemption from property taxes on their primary residence.</p>
      
      <p>"Our veterans have sacrificed so much for our country," said Texas Governor Mark Williams. "This is one small way we can show our appreciation and support."</p>
      
      <p>Pennsylvania, Ohio, and North Carolina have implemented similar expansions to their veterans' property tax relief programs.</p>
      
      <h2>Circuit Breaker Programs</h2>
      
      <p>Several states have implemented or expanded "circuit breaker" programs, which provide tax relief when property taxes exceed a certain percentage of a homeowner's income.</p>
      
      <p>Maine's program now kicks in when property taxes exceed 4% of household income, down from 5% previously. The maximum benefit has been increased to $2,000.</p>
      
      <p>"Property taxes should be proportional to what a family can actually afford to pay," said Maine Representative John Anderson. "This program ensures that no family is taxed out of their home."</p>
      
      <h2>Funding Concerns</h2>
      
      <p>While homeowners have welcomed these relief measures, some local governments have expressed concerns about the impact on municipal budgets.</p>
      
      <p>"We understand the need for relief, but these programs shift the tax burden rather than reducing it," said Susan Miller, executive director of the National Association of Counties. "When one group pays less, either services get cut or other taxpayers pay more."</p>
      
      <p>To address these concerns, some states have included provisions to reimburse local governments for lost revenue. Illinois, for example, has allocated $150 million to offset the impact of its expanded senior exemption program.</p>
      
      <p>Homeowners interested in these relief programs should contact their local tax assessor's office, as application procedures and deadlines vary by state and locality.</p>
    `,
    date: "2023-06-05",
    coverImage: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2011&auto=format&fit=crop",
    citation: citations[2],
    category: categories[2],
    readingTime: 5,
    isBreaking: false,
  },
  {
    title: "Court Rules HOA Cannot Ban Political Signs on Private Property",
    slug: "court-rules-hoa-cannot-ban-political-signs",
    excerpt: "Appeals court decision strengthens homeowners' First Amendment rights within HOA communities.",
    content: `
      <p>ATLANTA — In a decision that could have nationwide implications, the 11th Circuit Court of Appeals ruled Tuesday that homeowners associations cannot completely ban residents from displaying political signs on their own property.</p>
      
      <p>The case, <em>Martinez v. Oakwood Estates HOA</em>, centered around Florida homeowner Carlos Martinez, who was fined $50 per day by his HOA for placing a political campaign sign in his front yard during the 2020 election season.</p>
      
      <h2>First Amendment Considerations</h2>
      
      <p>In a 2-1 decision, the court found that while HOAs can impose reasonable restrictions on the size, number, and duration of political signs, a complete ban violates homeowners' First Amendment rights to political expression.</p>
      
      <p>"Although HOAs are private entities, they function as quasi-governmental bodies when they regulate speech within their communities," wrote Judge Rebecca Thompson in the majority opinion. "The right to political expression, particularly on one's own property, is a fundamental freedom that cannot be completely abridged by HOA covenants."</p>
      
      <p>The ruling establishes that HOAs in Florida, Georgia, and Alabama (the states covered by the 11th Circuit) must allow some form of political signage, though they may still impose "content-neutral, reasonable restrictions" on such displays.</p>
      
      <h2>Dissenting Opinion</h2>
      
      <p>In his dissent, Judge William Pryor argued that HOA covenants are private contracts that homeowners voluntarily agree to when purchasing property, and courts should not interfere with these agreements.</p>
      
      <p>"Homeowners make a choice when they buy into an HOA community," Pryor wrote. "If political expression through yard signs is important to them, they can choose to live in a community without such restrictions."</p>
      
      <h2>Implications for Homeowners</h2>
      
      <p>Legal experts suggest the ruling could prompt challenges to similar HOA restrictions across the country, though its direct legal authority is limited to the 11th Circuit.</p>
      
      <p>"This decision recognizes that even in private communities, certain fundamental rights cannot be completely restricted," said Constitutional law professor Elena Kagan (no relation to the Supreme Court Justice) of Emory University. "It strikes a balance between community aesthetics and individual expression."</p>
      
      <p>The Community Associations Institute, which filed an amicus brief supporting the HOA, expressed disappointment with the ruling. "This decision undermines the ability of community associations to maintain the aesthetic standards that many residents specifically seek out when choosing where to live," the organization said in a statement.</p>
      
      <p>Martinez, who had accumulated over $2,000 in fines before removing his sign, expressed satisfaction with the outcome. "This was never about one political candidate or party," he said. "It was about my right to express my views on my own property."</p>
      
      <p>The court remanded the case to the district court to determine reasonable time, place, and manner restrictions that the HOA may impose on political signs.</p>
    `,
    date: "2023-06-01",
    coverImage: "https://images.unsplash.com/photo-1540224871915-bc8ffb782bdf?q=80&w=2095&auto=format&fit=crop",
    citation: citations[3],
    category: categories[0],
    readingTime: 5,
    isBreaking: true,
  },
  {
    title: "New Study Reveals Impact of Short-Term Rentals on Housing Markets",
    slug: "study-impact-short-term-rentals-housing-markets",
    excerpt: "Research shows significant effects on home prices and availability in tourist-heavy regions.",
    content: `
      <p>A comprehensive new study from the Urban Housing Institute has found that the proliferation of short-term rentals has significantly impacted home prices and housing availability in tourist-heavy regions across the country.</p>
      
      <p>The research, which analyzed data from over 100 cities over a five-year period, found that areas with high concentrations of short-term rentals experienced home price increases 13% higher than comparable markets with fewer vacation rentals.</p>
      
      <h2>Housing Availability Concerns</h2>
      
      <p>According to the study, for every 1% increase in short-term rental density, long-term rental availability decreased by approximately 0.4%. In the most extreme cases, such as popular vacation destinations, the conversion of long-term housing to short-term rentals reduced available housing stock by up to 15%.</p>
      
      <p>"What we're seeing is essentially the conversion of residential housing into commercial lodging," said Dr. Jennifer Martinez, the study's lead author. "This removes homes from the market that would otherwise be available for residents, particularly affecting affordable housing options."</p>
      
      <p>The study found that the impact was most pronounced in coastal communities, mountain resort towns, and urban tourist destinations.</p>
      
      <h2>Economic Benefits and Tradeoffs</h2>
      
      <p>Despite the housing challenges, the research also documented significant economic benefits from short-term rentals. Communities with high concentrations of vacation rentals saw increased tourism spending, job creation in service industries, and higher property tax revenues.</p>
      
      <p>"There's a clear economic tradeoff," said Martinez. "Short-term rentals bring in tourist dollars and create jobs, but they also make housing less affordable and available for local residents, particularly those in service industries who support tourism."</p>
      
      <p>In Sedona, Arizona, one of the cities studied, the average home price increased by 37% over the study period, while long-term rental availability decreased by 21%. Meanwhile, tourism revenue increased by 28%.</p>
      
      <h2>Regulatory Responses</h2>
      
      <p>The study also evaluated the effectiveness of various regulatory approaches to managing short-term rentals. Cities that implemented complete bans saw the most significant preservation of housing stock but also experienced economic losses.</p>
      
      <p>More moderate approaches, such as limiting the number of days a property can be rented short-term or restricting rentals to owner-occupied properties, showed promise in balancing housing needs with economic benefits.</p>
      
      <p>"The most successful policies we observed were those that allowed short-term rentals but with meaningful restrictions," said Martinez. "For example, requiring that short-term rentals be in the owner's primary residence effectively prevented commercial operators from removing multiple properties from the long-term housing market."</p>
      
      <h2>Homeowner Perspectives</h2>
      
      <p>For individual homeowners, short-term rentals often represent a significant income opportunity. The study found that the average short-term rental property generated 2.5 times more revenue than it would as a long-term rental.</p>
      
      <p>"This income can be crucial for homeowners in expensive markets," said Martinez. "Many reported that without short-term rental income, they couldn't afford their mortgages."</p>
      
      <p>The Urban Housing Institute plans to release city-specific data in the coming months to help local governments develop targeted policies based on their particular housing and tourism dynamics.</p>
    `,
    date: "2023-05-28",
    coverImage: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop",
    citation: citations[4],
    category: categories[2],
    readingTime: 6,
    isBreaking: false,
  },
  {
    title: "Homeowners Face Rising Insurance Rates Amid Climate Concerns",
    slug: "homeowners-rising-insurance-rates-climate",
    excerpt:
      "Insurance companies are increasing premiums and reducing coverage in areas vulnerable to extreme weather events.",
    content: `
      <p>Homeowners across the country are facing steep increases in insurance premiums as carriers respond to growing climate-related risks and a series of costly natural disasters in recent years.</p>
      
      <p>In some high-risk areas, particularly coastal regions and fire-prone communities, many homeowners report premium increases of 20% to 40% in a single year, while others are losing coverage entirely as insurance companies pull back from vulnerable markets.</p>
      
      <h2>Regional Disparities</h2>
      
      <p>Florida homeowners have been hit particularly hard, with average premiums now exceeding $4,200 annually, nearly three times the national average. The state has seen seven insurance carriers declare insolvency in the past two years, further reducing competition and driving up prices.</p>
      
      <p>"I've lived in this house for 30 years, and my insurance premium just jumped from $3,800 to $5,600," said Tampa resident Margaret Wilson. "I'm retired and on a fixed income. I don't know how long I can afford to stay in my own home."</p>
      
      <p>California homeowners in wildfire-prone areas are facing similar challenges. After devastating fire seasons in recent years, many insurance companies have declined to renew policies in high-risk zones, forcing homeowners into the state's FAIR Plan, a last-resort insurance option that typically offers less coverage at higher rates.</p>
      
      <h2>Industry Perspective</h2>
      
      <p>Insurance industry representatives say the rate increases reflect the growing risk and actual losses experienced in recent years.</p>
      
      <p>"The frequency and severity of weather-related catastrophes have increased dramatically," said Robert Hartwig, director of the Center for Risk and Uncertainty Management at the University of South Carolina. "In 2022 alone, insured losses from natural disasters exceeded $120 billion in the U.S., the fourth highest on record."</p>
      
      <p>Insurance companies are increasingly using sophisticated climate models to assess risk at the property level, leading to more targeted—and sometimes dramatic—premium adjustments based on specific location factors.</p>
      
      <h2>Policy Solutions</h2>
      
      <p>Several states are exploring policy solutions to address the growing insurance crisis. California has implemented a one-year moratorium on insurance non-renewals in wildfire-affected areas, while Florida recently passed legislation aimed at reducing litigation costs that insurers blame for driving up premiums.</p>
      
      <p>At the federal level, there are renewed calls to reform the National Flood Insurance Program and create a national catastrophe insurance backstop that could help stabilize markets in high-risk areas.</p>
      
      <p>"We need a comprehensive approach that includes improved building codes, investment in resilience, and insurance market reforms," said Representative Anna Diaz, who chairs the House Subcommittee on Housing and Insurance. "Climate change is making extreme weather more common, and our insurance markets aren't currently structured to handle this new reality."</p>
      
      <h2>Homeowner Adaptations</h2>
      
      <p>In response to rising costs, many homeowners are taking steps to make their properties more resilient. Insurance companies increasingly offer discounts for hurricane shutters, reinforced roofs, and cleared vegetation around homes in fire-prone areas.</p>
      
      <p>"I invested $8,000 in a new impact-resistant roof," said Miami homeowner Carlos Mendez. "It's a lot of money upfront, but it reduced my annual premium by $1,200, so it will pay for itself over time."</p>
      
      <p>Other homeowners are accepting higher deductibles to keep premiums manageable, with some opting for deductibles as high as 5% of their home's value for hurricane or earthquake coverage.</p>
      
      <p>Experts advise homeowners to shop around for coverage, consider bundling policies, and invest in home hardening measures that can qualify for insurance discounts while also providing better protection against disasters.</p>
    `,
    date: "2023-05-22",
    coverImage: "https://images.unsplash.com/photo-1543465077-db45d34b88a5?q=80&w=2065&auto=format&fit=crop",
    citation: citations[0],
    category: categories[4],
    readingTime: 6,
    isBreaking: false,
  },
  {
    title: "Zoning Reform Movement Gains Momentum Across U.S. Cities",
    slug: "zoning-reform-movement-gains-momentum",
    excerpt: "Cities are revising single-family zoning laws to address housing shortages and affordability concerns.",
    content: `
      <p>A growing number of cities across the United States are reforming long-standing single-family zoning laws, allowing for greater housing density in previously restricted neighborhoods as part of efforts to address housing shortages and affordability concerns.</p>
      
      <p>In the past year alone, over 20 cities have passed ordinances that either eliminate single-family-only zoning or significantly modify it to allow duplexes, triplexes, and accessory dwelling units (ADUs) in residential neighborhoods.</p>
      
      <h2>From Coast to Coast</h2>
      
      <p>Minneapolis made headlines in 2019 as the first major city to eliminate single-family zoning citywide, and the movement has since spread across the country. Portland, Oregon followed with reforms allowing up to four units on most residential lots, while California passed statewide legislation effectively ending single-family-only zoning.</p>
      
      <p>More recently, cities like Charlotte, North Carolina; Raleigh, North Carolina; and Austin, Texas have passed similar reforms, often after contentious public debates.</p>
      
      <p>"We're seeing a fundamental shift in how cities think about residential land use," said urban planning professor Elizabeth Chen of the University of Washington. "After decades of prioritizing single-family homes on large lots, there's growing recognition that this approach has contributed to housing shortages, unaffordability, and segregation."</p>
      
      <h2>Mixed Reactions from Homeowners</h2>
      
      <p>The zoning reforms have generated strong reactions from existing homeowners, with some embracing the changes and others expressing concerns.</p>
      
      <p>"I bought my home with the understanding that I would live in a neighborhood of single-family houses," said Richard Thompson, a homeowner in Charlotte who opposed that city's recent reforms. "Now the character of our neighborhood could change dramatically, and we had little say in the matter."</p>
      
      <p>Proponents argue that allowing more housing types creates opportunities for more people to live in desirable neighborhoods with good schools and amenities, while also potentially increasing property values for existing homeowners who gain more development rights.</p>
      
      <p>"I'm planning to build an ADU for my mother-in-law," said Seattle homeowner Jennifer Park. "The zoning changes make that possible, and it solves a family need while also adding a housing unit to a city that desperately needs more homes."</p>
      
      <h2>Early Results</h2>
      
      <p>In cities that implemented reforms several years ago, researchers are beginning to assess the impact. In Minneapolis, approximately 400 duplex and triplex permits have been issued since the zoning change took effect, representing a modest but meaningful addition to the housing stock.</p>
      
      <p>Portland has seen stronger results, with over 1,200 new units attributed to its "Residential Infill Project" reforms in the first 18 months. The city reports that most new development has occurred in higher-income neighborhoods that previously saw little housing growth.</p>
      
      <p>"The changes haven't led to the dramatic transformation that either supporters hoped for or opponents feared," said Chen. "We're seeing incremental change that adds housing options without fundamentally altering neighborhood character overnight."</p>
      
      <h2>Looking Ahead</h2>
      
      <p>As more cities consider similar reforms, advocates are focusing on complementary policies to maximize impact. These include reducing minimum lot sizes, streamlining permitting processes, and creating financing programs to help small-scale developers and homeowners take advantage of new development opportunities.</p>
      
      <p>"Zoning reform is necessary but not sufficient," said housing advocate Marcus Johnson. "We also need to address financing barriers, construction costs, and other obstacles to actually building the housing that zoning now allows."</p>
      
      <p>For homeowners in cities considering such changes, experts recommend engaging in the public process and learning about the specific proposals, which vary significantly in their details and potential impacts.</p>
      
      <p>"These reforms don't mean skyscrapers will suddenly appear next door," said Chen. "They typically allow modest density increases that are compatible with existing neighborhoods while creating more housing choices for more people."</p>
    `,
    date: "2023-05-18",
    coverImage: "https://images.unsplash.com/photo-1513880989635-6eb491ce7f5b?q=80&w=2074&auto=format&fit=crop",
    citation: citations[1],
    category: categories[2],
    readingTime: 7,
    isBreaking: false,
  },
  {
    title: "Homeowners Win Class Action Lawsuit Against Defective Building Materials Manufacturer",
    slug: "homeowners-win-lawsuit-defective-building-materials",
    excerpt: "Court awards $125 million to homeowners affected by deteriorating siding that caused widespread damage.",
    content: `
      <p>CHICAGO — A federal judge has approved a $125 million settlement in a class action lawsuit against National Building Products, Inc., resolving claims that the company's fiber cement siding prematurely deteriorated and damaged thousands of homes across the Midwest.</p>
      
      <p>The settlement, approved Monday by U.S. District Judge Maria Rodriguez, will provide compensation to an estimated 30,000 homeowners who installed the company's "DuraBoard" siding between 2009 and 2014.</p>
      
      <h2>Years of Damage</h2>
      
      <p>Homeowners reported that the siding began to crack, warp, and disintegrate within 2-3 years of installation, despite the company's 30-year warranty. The deterioration allegedly allowed water to penetrate exterior walls, causing structural damage, mold growth, and reduced property values.</p>
      
      <p>"We started noticing problems in 2012, just three years after our home was built," said Michael Lawson, one of the lead plaintiffs in the case. "The siding was literally crumbling off our house, and water damage had already reached the insulation and framing."</p>
      
      <p>According to court documents, internal company emails revealed that executives were aware of potential problems with the product's formulation but continued to market it as durable and long-lasting.</p>
      
      <h2>Settlement Details</h2>
      
      <p>Under the terms of the settlement, affected homeowners will receive compensation based on the extent of damage to their homes and the cost of repairs or replacement. The average payout is expected to be approximately $4,000, though homeowners with extensive damage may receive up to $25,000.</p>
      
      <p>The settlement also requires National Building Products to establish a simplified warranty claims process for any future issues with its current products.</p>
      
      <p>"This settlement provides meaningful compensation to homeowners who experienced significant property damage and the stress of watching their homes deteriorate," said Jennifer Parker, lead attorney for the plaintiffs. "It also sends a message to manufacturers about the consequences of putting profits ahead of product quality."</p>
      
      <h2>Industry Implications</h2>
      
      <p>The case highlights the challenges homeowners face when building products fail prematurely. Unlike automobile defects, which typically trigger immediate recalls, building material failures often take years to become apparent and can affect homes across wide geographic areas.</p>
      
      <p>"The building products industry needs more accountability," said consumer advocate Robert Thompson. "Homeowners shouldn't have to resort to class action lawsuits to get manufacturers to stand behind their products."</p>
      
      <p>Industry analysts note that the settlement could prompt other manufacturers to review their quality control processes and warranty terms. It may also lead to increased scrutiny from regulators regarding performance claims for building materials.</p>
      
      <h2>Next Steps for Homeowners</h2>
      
      <p>Homeowners who believe they may be eligible for compensation under the settlement should receive notification by mail within 30 days. A settlement website will be established where homeowners can submit claims and documentation of damage.</p>
      
      <p>The claims period will remain open for one year, and payments are expected to begin in early 2024 after all claims have been processed and verified.</p>
      
      <p>National Building Products has discontinued the DuraBoard product line but continues to manufacture other building materials. In a statement, the company said it agreed to the settlement "to avoid the cost and uncertainty of continued litigation" but did not admit any wrongdoing.</p>
    `,
    date: "2023-05-15",
    coverImage: "https://images.unsplash.com/photo-1621347311229-fd6a758a1ec1?q=80&w=2070&auto=format&fit=crop",
    citation: citations[2],
    category: categories[3],
    readingTime: 5,
    isBreaking: false,
  },
  {
    title: "We Must Strengthen Protections Against Eminent Domain Abuse",
    slug: "strengthen-protections-eminent-domain-abuse",
    excerpt: "Opinion: Despite recent court victories, property owners remain vulnerable to government overreach.",
    content: `
      <p>The recent Supreme Court ruling in <em>Richardson v. City of Lakeside</em> represents an important victory for property rights, ensuring that homeowners receive fair market value when the government takes their property through eminent domain. But while this decision addresses compensation, it does nothing to solve the more fundamental problem: governments continue to have too much power to take private property for questionable "public" purposes.</p>
      
      <p>Since the infamous 2005 <em>Kelo v. City of New London</em> decision, which allowed governments to seize private property for economic development, Americans have been fighting an uphill battle to protect their homes and businesses from government takings that benefit private interests under the guise of public use.</p>
      
      <h2>The Problem Persists</h2>
      
      <p>Despite reform efforts in many states following <em>Kelo</em>, eminent domain abuse continues across the country. Just last year, the city of Greenfield, Missouri condemned a thriving family farm to make way for a manufacturing facility owned by a major corporation. In Phoenix, Arizona, the city is attempting to seize a family-owned business property to build a parking garage for a privately owned sports arena.</p>
      
      <p>These are not isolated incidents. They represent a troubling pattern where government power is used to benefit politically connected private interests at the expense of ordinary property owners.</p>
      
      <p>The fundamental problem with the current interpretation of the "public use" requirement is that it has been expanded to include virtually any project that might indirectly benefit the public through economic growth or tax revenue. This interpretation effectively renders the constitutional limitation meaningless.</p>
      
      <h2>The Path Forward</h2>
      
      <p>To truly protect property rights, we need a multi-pronged approach:</p>
      
      <p>First, the Supreme Court should revisit and overturn <em>Kelo</em>. The Fifth Amendment's "public use" requirement should be interpreted to mean actual use by the public or by regulated common carriers and utilities that serve the public directly. Economic development for its own sake should not qualify as public use.</p>
      
      <p>Second, Congress should pass legislation limiting the use of federal funds for projects that involve eminent domain for economic development. This would create a powerful financial disincentive for local governments considering such takings.</p>
      
      <p>Third, states should strengthen their post-<em>Kelo</em> reforms, many of which contain significant loopholes. For example, many states still allow condemnation of properties deemed "blighted," but with definitions of blight so broad that virtually any property could qualify.</p>
      
      <p>Finally, we need stronger procedural protections for property owners. The burden of proof should be on the government to demonstrate a genuine public use, not on property owners to prove that the taking is unjustified. And property owners should have meaningful opportunities to challenge takings before they occur, not just the compensation amount afterward.</p>
      
      <h2>A Fundamental Right</h2>
      
      <p>Property rights are fundamental to liberty and prosperity. When governments can take private property for virtually any reason, no one's home or business is truly secure. This insecurity undermines investment, community stability, and the American Dream itself.</p>
      
      <p>The recent Supreme Court decision on just compensation is a step in the right direction, but it addresses only half the problem. Until we restore meaningful limits on what constitutes "public use," property owners will remain vulnerable to government overreach and abuse.</p>
      
      <p>As Justice Sandra Day O'Connor warned in her powerful <em>Kelo</em> dissent: "The specter of condemnation hangs over all property. Nothing is to prevent the State from replacing any Motel 6 with a Ritz-Carlton, any home with a shopping mall, or any farm with a factory."</p>
      
      <p>It's time to exorcise that specter and restore the property rights protections that our Constitution was intended to provide.</p>
    `,
    date: "2023-05-10",
    coverImage: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=2088&auto=format&fit=crop",
    citation: citations[3],
    category: categories[1],
    readingTime: 5,
    isOpinion: true,
  },
  {
    title: "New Federal Guidelines Address Housing Discrimination in Appraisals",
    slug: "federal-guidelines-housing-discrimination-appraisals",
    excerpt:
      "Task force releases recommendations to combat racial bias in home valuations after finding widespread disparities.",
    content: `
      <p>WASHINGTON — The Federal Housing Finance Agency (FHFA) has released new guidelines aimed at addressing racial bias in home appraisals, following a year-long investigation that found significant disparities in valuations between minority and white neighborhoods.</p>
      
      <p>The guidelines, developed by an interagency task force, include new standards for appraiser training, enhanced oversight of the appraisal process, and expanded options for homeowners to appeal questionable valuations.</p>
      
      <h2>Documented Disparities</h2>
      
      <p>The task force's report documented that homes in predominantly Black neighborhoods are valued on average 23% lower than comparable properties in majority-white areas, even when controlling for factors such as home size, age, and condition.</p>
      
      <p>"These disparities aren't just numbers on a page—they represent real financial harm to families of color who have been systematically denied the full value of their most significant asset," said FHFA Director Marcus Johnson at a press conference announcing the guidelines.</p>
      
      <p>The investigation included analysis of more than 200,000 appraisals conducted between 2018 and 2022, as well as interviews with homeowners who experienced significant valuation increases after concealing their race or having white friends stand in during appraisals.</p>
      
      <h2>New Requirements</h2>
      
      <p>Under the new guidelines, which will be phased in over the next 18 months, appraisers will be required to:</p>
      
      <ul>
        <li>Complete additional training on bias recognition and prevention</li>
        <li>Use a standardized set of comparable properties that includes homes from diverse neighborhoods</li>
        <li>Document their selection criteria for comparable properties</li>
        <li>Submit to random reviews of their appraisals to identify potential patterns of bias</li>
      </ul>
      
      <p>The guidelines also establish a new appeals process that allows homeowners to request a second appraisal at no additional cost if they believe the initial valuation was influenced by bias.</p>
      
      <h2>Industry Response</h2>
      
      <p>The Appraisal Institute, the nation's largest professional association of real estate appraisers, expressed support for the goals of the guidelines while raising concerns about implementation.</p>
      
      <p>"We are committed to fair and unbiased valuations and welcome efforts to address documented disparities," said Appraisal Institute President Sarah Chen. "However, we want to ensure that new requirements don't create unintended consequences or place unreasonable burdens on appraisers."</p>
      
      <p>Consumer advocates generally praised the guidelines but questioned whether they go far enough. "These are important steps, but they don't address the fundamental issue of underrepresentation of people of color in the appraisal industry," said housing advocate James Williams. "Less than 2% of appraisers nationwide are Black. We need to diversify the profession itself."</p>
      
      <h2>Impact on Homeowners</h2>
      
      <p>For homeowners who have experienced appraisal bias, the new guidelines offer some hope for change.</p>
      
      <p>"We had our home appraised twice within three months," said Detroit homeowner Tanya Jackson. "The first time, when we were present, it was valued at $225,000. The second time, when we had our white neighbor stand in, it came in at $278,000. That $53,000 difference would have prevented us from refinancing if we hadn't done the second appraisal."</p>
      
      <p>Under the new guidelines, homeowners like Jackson would have a clearer path to challenge such disparities and receive a fair valuation.</p>
      
      <p>The FHFA will monitor implementation of the guidelines and collect data on their effectiveness, with a comprehensive review planned after two years.</p>
    `,
    date: "2023-05-05",
    coverImage: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2096&auto=format&fit=crop",
    citation: citations[3],
    category: categories[3],
    readingTime: 5,
    isBreaking: false,
  },
  {
    title: "HOAs Gone Wild: It's Time to Rein in Overreaching Community Associations",
    slug: "hoas-gone-wild-rein-in-overreaching-associations",
    excerpt:
      "Opinion: When homeowners associations micromanage everything from flower colors to basketball hoops, reform is needed.",
    content: `
      <p>Last month, a 70-year-old veteran in Florida was threatened with daily fines for displaying an American flag on a small pole in his flower bed. In California, a family faced eviction for allowing their children to play outside during designated "quiet hours." And in Texas, a homeowner received a violation notice because their grass was one inch taller than regulations allowed—while they were away attending a parent's funeral.</p>
      
      <p>These aren't isolated incidents. They represent a growing pattern of homeowners association (HOA) overreach that has transformed these organizations from reasonable neighborhood governance into micromanaging enforcers that diminish property rights and quality of life.</p>
      
      <h2>Power Without Adequate Checks</h2>
      
      <p>Today, over 74 million Americans live in communities governed by HOAs. While these associations were originally created to maintain common areas and protect property values, many have expanded their reach to regulate virtually every aspect of homeowners' lives—from the color of your front door to whether you can dry laundry in your backyard.</p>
      
      <p>The problem isn't that HOAs exist; it's that they operate with inadequate oversight and few meaningful checks on their power. Board members are often volunteers with little training in governance or property law. Yet they wield significant authority, including the ability to impose fines, place liens on homes, and even initiate foreclosure proceedings over relatively minor violations.</p>
      
      <p>This imbalance of power creates situations where common sense takes a backseat to rigid enforcement of often arbitrary rules. When an HOA can threaten to take someone's home because their holiday decorations stayed up a few days too long, something has gone seriously wrong with the system.</p>
      
      <h2>The Path to Reform</h2>
      
      <p>It's time for state legislatures to enact meaningful HOA reform that rebalances power between these organizations and the homeowners they supposedly serve. Here's what that reform should include:</p>
      
      <p>First, states should establish a "Homeowner Bill of Rights" that clearly defines the limits of HOA authority and establishes basic protections for property owners. This should include prohibitions on regulating activities that occur entirely within a home, reasonable accommodations for disabilities and religious practices, and protection for essential expression like political signs and flags.</p>
      
      <p>Second, we need procedural reforms that ensure due process. HOAs should be required to provide clear notice of alleged violations, reasonable time to address them, and a fair hearing process before imposing penalties. The burden of proof should be on the HOA, not the homeowner.</p>
      
      <p>Third, states should establish reasonable caps on fines and penalties, and strictly limit an HOA's ability to foreclose on homes for minor violations. No one should lose their home because they painted their mailbox the wrong shade of beige.</p>
      
      <p>Finally, we need transparency requirements that force HOAs to operate in the open. Board meetings should be public, financial records should be accessible to all members, and enforcement actions should be reported regularly with demographic data to identify potential discrimination.</p>
      
      <h2>Balancing Interests</h2>
      
      <p>None of these reforms would prevent HOAs from fulfilling their legitimate function of maintaining community standards and protecting property values. They would simply ensure that these organizations operate with reasonable restraint and respect for homeowners' fundamental rights.</p>
      
      <p>The 11th Circuit Court's recent ruling that HOAs cannot completely ban political signs is a step in the right direction, but judicial remedies are slow and piecemeal. We need comprehensive legislative reform to address the full scope of the problem.</p>
      
      <p>For the millions of Americans who have invested their life savings in homes governed by HOAs, the status quo is increasingly untenable. It's time to restore balance to these communities and ensure that the American dream of homeownership doesn't come with the nightmare of petty tyranny.</p>
    `,
    date: "2023-05-01",
    coverImage: "https://images.unsplash.com/photo-1592595896616-c37162298647?q=80&w=2070&auto=format&fit=crop",
    citation: citations[4],
    category: categories[0],
    readingTime: 5,
    isOpinion: true,
  },
]

// Helper functions
export function getAllArticles(): Article[] {
  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug)
}

export function getRelatedArticles(article: Article, count: number): Article[] {
  // Only use category as the criteria for related articles
  return articles
    .filter((a) => a.slug !== article.slug && a.category.slug === article.category.slug)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count)
}

export function getAllCategories(): Category[] {
  return categories
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug)
}

export function getArticlesByCategory(categorySlug: string): Article[] {
  return articles
    .filter((article) => article.category.slug === categorySlug)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getOpinionArticles(): Article[] {
  return articles
    .filter((article) => article.isOpinion)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

