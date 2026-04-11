export const COPY = {

    nav: {
        home:     'Home',
        services: 'Services',
        work:     'Work',
        faq:      'FAQ',
        contact:  'Contact',
        bookBtn:  'Book a call',
        bookUrl:  'https://calendar.app.google/TUFKBhReUSzM78yx5',
    },

    home: {
        headline: 'Your vision. Built to spec.',
        subline:  'Delivered on demand.',
        cta:      'Explore My Services',
    },

    services: {
        title: 'What I Do',
        intro: 'Software tailored to the exact need — from a single focused tool to a full-scale system. No off-the-shelf compromises, no unnecessary overhead.',
        hookText: 'Want to see these in practice?',
        hookBtn:  'View my work',
        items: [
            {
                title: 'Web Design',
                body:  'Websites and web apps that load fast, work on any device, and reflect how your business actually wants to present itself — designed and built to a high standard.',
            },
            {
                title: 'Distributed Software',
                body:  'Systems architected to run across multiple servers or locations at once — reliable and responsive under real-world load, not just in testing.',
            },
            {
                title: 'Embedded Systems',
                body:  'Software that runs directly on hardware — industrial controllers, smart devices, or custom electronics — with the constraints of the target platform taken seriously from day one.',
            },
            {
                title: 'APIs',
                body:  'Clean, well-structured APIs that let services, applications, and third-party tools communicate without friction — designed for longevity, not just the immediate requirement.',
            },
            {
                title: 'IT Security',
                body:  'Vulnerability identification before it becomes an incident — audits, hardening, access control design, and ongoing protection tailored to the actual setup.',
            },
            {
                title: 'Enterprise Tools',
                body:  'Internal platforms, dashboards, and workflow tools built around how a team actually operates — not constrained by what an off-the-shelf product happens to support.',
            },
            {
                title: 'Compliance Software',
                body:  'Software that keeps a business aligned with the regulations that apply to it — turning what is typically a manual, error-prone process into something automated and auditable.',
            },
            {
                title: 'Mobile Applications',
                body:  'Native and cross-platform apps for iOS and Android, designed for real users and held to the same engineering standards as any other part of the system.',
            },
            {
                title: 'Consulting',
                body:  'Direct, experience-based advice on technology decisions, system architecture, and how to approach a problem — without the jargon or the agenda.',
            },
        ],
    },

    work: {
        title: 'My Work',
        intro: 'A selection of past engagements. Details are kept general to respect confidentiality agreements.',
        cases: [
            {
                index:    '01',
                client:   "One of the EU's largest operators in critical transport infrastructure",
                title:    'On-Premise Enterprise Platform for a Regulated Industry',
                challenge: 'The client operated under strict EU regulatory requirements and an internal policy of complete data sovereignty — no data could leave their own servers, ever. Existing tooling was fragmented, largely manual, and offered no audit trail. They needed a comprehensive software platform built entirely within their own infrastructure.',
                solution:  'I designed and delivered a suite of interconnected tools deployed fully on-premise behind their firewall: a central console UI serving as the operational hub, process automation systems replacing manual workflows across departments, and project and work-tracking tools used daily by teams across the organisation. Every component was built with strict access control, audit logging, and zero external dependencies. No third-party cloud. No data egress.',
                outcome:   'Thousands of employees across the organisation now run daily operations through the platform. The client passed subsequent compliance audits with no findings related to data handling. Internal process bottlenecks that previously required manual coordination were eliminated entirely.',
                tags: ['Enterprise Tools', 'Compliance Software', 'IT Security', 'Distributed Software'],
            },
            {
                index:    '02',
                client:   'A UK market leader in developer intelligence and analytics',
                title:    'Complete Cloud-Native System Built from Scratch on AWS',
                challenge: 'The client had a clear product vision — analysing developer data to help organisations understand and make the most of their engineering talent — but no infrastructure to build on. Everything needed to be created from the ground up: data pipelines, APIs, customer-facing websites, and internal tooling, all working as a single coherent system. The scale demanded an architecture that could serve a small internal team and tens of thousands of external users simultaneously without compromise.',
                solution:  'I architected and built a complete distributed system on AWS consisting of around 30 interconnected services — spanning data ingestion and processing pipelines, a suite of APIs serving both internal and external consumers, multiple customer-facing websites designed to convert and retain, and a centralised web application giving the internal team full visibility into business operations. Every service was built with clear boundaries, independent deployability, and shared infrastructure for auth, logging, and monitoring. The entire system was delivered from scratch as a unified product rather than a collection of isolated parts.',
                outcome:   'The platform launched as a fully operational business with no legacy constraints. It now serves tens of thousands of external users and potential customers while supporting around 100 people internally. The microservice architecture has absorbed significant growth in traffic and data volume without structural changes to the core system.',
                tags: ['Distributed Software', 'APIs', 'Web Design', 'AWS Infrastructure'],
            },
            {
                index:    '03',
                client:   'A Swiss online retailer selling consumer electronics, solar panels, and specialist components',
                title:    'Full Modernisation of a Legacy E-Commerce Platform on a Constrained Budget',
                challenge: 'The client was running a monolithic e-commerce platform that had grown too large and fragile to maintain safely. With a catalogue of thousands of products, hundreds of thousands of monthly visitors, and thousands of transacting customers each month, reliability and security were non-negotiable — yet the legacy system offered neither. As a smaller business, budget was a real constraint, and they needed the same quality of outcome delivered with a sharper eye on scope and cost.',
                solution:  'I deconstructed the monolith into independent microservice modules — catalogue, checkout, inventory, user accounts, and search each running and deployable in isolation — so that a failure or update in one area could not affect the rest. The frontend was rebuilt from scratch with a modern, conversion-focused design built around how their customers actually browse and buy. Security was hardened end-to-end across authentication, input handling, and dependency management. Throughout, I worked closely with the client to prioritise scope without cutting quality on anything that actually mattered.',
                outcome:   'The relaunched platform handles the full traffic and transaction load without the instability of the previous system. The modular architecture means features and fixes can be shipped independently, reducing ongoing maintenance effort significantly. The client got a genuinely modern, secure platform — on a small-company budget.',
                tags: ['Web Design', 'Distributed Software', 'IT Security', 'Consulting'],
            },
        ],
    },

    faq: {
        title: 'Frequently Asked Questions',
        intro: 'Anything not covered here can be raised during the free initial consultation.',
        items: [
            {
                q: 'How do you price your work?',
                a: 'It depends on the nature of the engagement. Short projects with a well-defined scope are typically priced at a fixed rate agreed upfront. Longer projects or ongoing services are billed hourly. For clients who anticipate future work but have nothing active yet, a retainer arrangement is also available — securing availability without committing to a specific project.',
            },
            {
                q: 'How does a typical engagement start?',
                a: 'With a free consultation. The goal is to get a clear picture of your problem, needs, budget, constraints, and any deadlines before anything else. There is no obligation — it is simply the most effective way to figure out whether and how we can work together, and to agree on realistic next steps.',
            },
            {
                q: 'Do you work remotely or on-site?',
                a: "Primarily remote, which works well for the majority of engagements. That said, I am happy to travel on-site for business visits when it makes sense — up to twice a month depending on the client's location and needs.",
            },
            {
                q: 'How long does a project take?',
                a: 'It depends entirely on the complexity and scope. A focused tool or integration might take a few weeks; a full platform built from scratch can take considerably longer. The initial consultation is specifically designed to map out a realistic timeline that takes your deadlines and constraints into account before any commitment is made.',
            },
            {
                q: 'Do you sign NDAs and handle client data confidentially?',
                a: 'Yes, without exception. Client data is treated with the utmost seriousness — from how it is handled technically to what is disclosed externally. NDAs are standard practice and can be signed before any sensitive information is shared.',
            },
            {
                q: 'Can you work on an existing codebase, or only new projects?',
                a: 'Both. Taking over a legacy system and transforming it into something modern and maintainable is actually one of the areas I stand out in — it requires a different set of skills than greenfield work and is something many developers avoid. Whether the project is a brand new system, an extension of existing software, or a full legacy modernisation, the approach is adapted accordingly.',
            },
            {
                q: 'Do you offer support and maintenance after delivery?',
                a: 'Yes. Ongoing support and maintenance is available as a monthly service, covering everything from bug fixes and dependency updates to monitoring and incremental improvements. This can be agreed as part of the initial engagement or added later.',
            },
            {
                q: 'What size of client do you work with?',
                a: "Startups, SMEs, and large enterprises — all three, and each has been handled effectively. The approach and communication style adapt to the client's size and internal structure. Smaller clients get the same quality of work and attention as larger ones.",
            },
            {
                q: 'Is Angel Solutions a team or a solo operation?',
                a: 'Currently a solo operation. Every line of code, every architectural decision, and every client communication goes through one person — which means full accountability, no hand-off overhead, and no ambiguity about who is responsible for the outcome.',
            },
            {
                q: 'What technologies and platforms do you work with?',
                a: "The philosophy here is that strong engineering fundamentals travel across stacks. Rather than being tied to a specific set of tools, the focus is on applying core principles — clean architecture, security, scalability, maintainability — using whatever modern technology best fits the problem. If your stack is already defined, it can be worked with. If it is not, the right choice will be recommended based on your actual needs.",
            },
        ],
    },

    misc: {
        fontComparison: 'Font Comparison',
        letterLogo:     'Letter Logo',
        usefulLinks:    'Useful Links',
        calendar:       'Calendar',
        downloadBtn:    'Download PNG',
    },

    calendar: {
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        days:   ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        addActivity: 'Add an activity for',
        save: 'Save',
    },

    footer: {
        copyrightPrefix: '©',
    },

} as const;
