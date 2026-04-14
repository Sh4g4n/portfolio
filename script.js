const data = {
  professional: {
    it: {
      brand: "Shagandeep Singh",
      labels: { mode: "Modalita", lang: "Lingua", close: "Chiudi" },
      nav: [
        { id: "profile", label: "Profilo" },
        { id: "education", label: "Formazione & Esperienze" },
        { id: "projects", label: "Progetti & Programmi" },
        { id: "skills", label: "Competenze" },
        { id: "interests", label: "Interessi" },
        { id: "contact", label: "Contatti" }
      ],
      hero: {
        kicker: "Portfolio",
        name: "Shagandeep Singh",
        role: "Studente",
        bio:
          "Profilo tecnico orientato all'ingegneria meccanica, alla meccatronica e alla progettazione CAD. Ho maturato esperienza con SolidWorks, stampa 3D, elettronica embedded e attivita pratiche tra scuola, workshop e stage.",
        cta1: "Vai al profilo",
        cta2: "Contatti",
        tag: "Professional Mode"
      },
      profile: {
        title: "Profilo",
        sub: "Una sintesi veloce del mio percorso e dei miei obiettivi.",
        summary:
          "Sono uno studente con un profilo tecnico focalizzato su ingegneria meccanica, meccatronica e progettazione CAD. Attraverso progetti scolastici, workshop tecnici, stampa 3D ed esperienze in azienda sto costruendo competenze pratiche in modellazione 3D, sistemi meccanici, elettronica embedded e problem solving applicato.",
        highlights: [
          "Studente presso IIS G. Antonietti, Iseo",
          "Interesse principale: ingegneria meccanica",
          "Focus tecnico: CAD 3D, robotica, Arduino, stampa 3D, ESP32 e Raspberry Pi",
          "Motivato a proseguire con studi universitari in ambito ingegneristico"
        ]
      },
      education: {
        title: "Formazione & Esperienze",
        sub: "Percorso scolastico, stage, corsi extracurriculari e programmi.",
        school: {
          title: "IIS G. Antonietti (Iseo)",
          meta: "Percorso tecnico con focus su progettazione, CAD, robotica e stampa 3D",
          skills: ["Robotics", "Arduino", "CAD", "3D Printing"]
        },
        priorEducation: {
          title: "Diploma di scuola secondaria di primo grado",
          meta: "Istituto Comprensivo Luigi Einaudi",
          period: "09/2018 - 06/2021 | Marone (BS)",
          body:
            "Completato il percorso di istruzione secondaria di primo grado con studio delle principali discipline di base."
        },
        stages: [
          {
            id: "stage-terza",
            title: "Stage presso O.M.F.B. S.p.A.",
            period: "29/04/2024 - 17/05/2024",
            place: "O.M.F.B., Provaglio d'Iseo",
            did:
              "Esperienza in un contesto produttivo con coinvolgimento nell'assemblaggio di componenti idraulici, come pompe, serbatoi e centraline di controllo. Supporto anche nelle attivita di imballaggio e preparazione dei prodotti finiti per la spedizione.",
            learned: [
              "Comprensione diretta di un ambiente produttivo industriale",
              "Pratica su assemblaggio e preparazione di componenti idraulici",
              "Maggiore attenzione a organizzazione, precisione e ritmo operativo"
            ]
          },
          {
            id: "stage-omfb",
            title: "Stage presso O.M.F.B. S.p.A. (Ufficio Tecnico)",
            period: "10/11/2025 - 28/11/2025",
            place: "OMFB Tank Division, Provaglio d'Iseo",
            did:
              "Esperienza svolta nel reparto di ingegneria e progettazione sotto la supervisione del Technical Team Manager e del team tecnico. Ho lavorato su progettazione meccanica tramite SolidWorks, con sviluppo e modifica di modelli 3D e disegni tecnici, approfondendo anche temi legati ai processi produttivi.",
            learned: [
              "Potenziamento delle competenze CAD con SolidWorks",
              "Migliore comprensione dei flussi di sviluppo prodotto",
              "Crescita in problem solving e progettazione meccanica"
            ]
          },
          {
            id: "work-camplani",
            title: "Cameriere (part-time)",
            period: "27/08/2024 - Presente",
            place: "Osteria Camplani, Zone (BS)",
            did:
              "Attivita di gestione ordini, servizio ai tavoli e interazione diretta con la clientela in un ambiente dinamico e ad alto ritmo.",
            learned: [
              "Competenze comunicative e relazionali piu forti",
              "Maggiore senso di responsabilita e gestione del tempo",
              "Capacita di lavorare in team sotto pressione"
            ]
          },
          {
            id: "stage-erasmus-vet",
            title: "Erasmus+ VET",
            period: "02/02/2025 - 23/02/2025",
            place: "Seville, Spain",
            did:
              "Durante il tirocinio Erasmus+ VET all'estero ho sviluppato una maggiore capacita di adattamento a nuovi contesti e situazioni, migliorando anche la comunicazione e la collaborazione con persone diverse.",
            learned: [
              "Maggiore autonomia e sicurezza in ambienti non familiari",
              "Competenze comunicative e relazionali rafforzate",
              "Piu responsabilita e adattabilita in contesti internazionali"
            ]
          }
        ],
        courses: [
          {
            title: "Corso Make & Display",
            place: "IIS G. Antonietti",
            body:
              "Corso incentrato sulla stampa 3D, con approfondimento sulla progettazione di base, preparazione di modelli digitali e utilizzo delle stampanti 3D."
          },
          {
            title: "Corso di Programmazione Python",
            place: "IIS G. Antonietti",
            body:
              "Introduzione alla programmazione con Python, con acquisizione dei concetti fondamentali di coding, logica e problem solving attraverso esercitazioni pratiche."
          },
          {
            title: "Corso di Progettazione Meccanica CAD e Modellazione 3D con SolidWorks",
            place: "IIS G. Antonietti",
            body:
              "Corso incentrato sulla progettazione meccanica e sulla modellazione CAD 3D tramite SolidWorks, con focus su disegni tecnici, modellazione di componenti 3D e concetti di assiemi per applicazioni meccaniche."
          }
        ],
        programs: [
          {
            id: "erasmus-vet",
            title: "Erasmus+ VET",
            period: "02/02/2025 - 23/02/2025",
            place: "Seville, Spain",
            did:
              "Durante il tirocinio Erasmus+ VET all'estero ho sviluppato una maggiore capacita di adattamento a nuovi contesti e situazioni, migliorando anche la comunicazione e la collaborazione con persone diverse.",
            learned: [
              "Maggiore autonomia e sicurezza in ambienti non familiari",
              "Competenze comunicative e relazionali rafforzate",
              "Piu responsabilita e adattabilita in contesti internazionali"
            ]
          },
          {
            id: "memo",
            title: "Progetto Me.Mo. (orientamento universitario)",
            period: "Esperienza di 3 giorni",
            place: "Scuola Superiore Sant'Anna e Scuola Normale Superiore di Pisa",
            did:
              "Selezionato per il programma Me.Mo., dedicato all'orientamento accademico, allo sviluppo del pensiero scientifico e al contatto con ambienti di studio di alto livello.",
            learned: [
              "Orientamento piu chiaro verso il percorso universitario",
              "Confronto diretto con realta accademiche di eccellenza",
              "Maggiore consapevolezza su studio, metodo e obiettivi futuri"
            ]
          }
        ],
        software: [
          "SolidWorks",
          "Autodesk Inventor",
          "Fusion 360",
          "AutoCAD",
          "Microsoft Office",
          "Arduino / ESP32 / Raspberry Pi"
        ],
        technical: [
          "Fondamenti di progettazione meccanica",
          "Disegni tecnici, modellazione 3D e assiemi",
          "Stampa 3D FDM e preparazione modelli digitali",
          "Elettronica embedded, sensori e robotica",
          "Conoscenza di base dei processi produttivi e di officina"
        ],
        languages: [
          "Italiano - C2 speaking, reading, writing",
          "English - C1 speaking, reading, writing",
          "Punjabi - C1 speaking, A1 reading, A1 writing",
          "Hindi - B1 speaking, A1 reading, A1 writing",
          "Urdu - B1 speaking, A1 reading, A1 writing"
        ],
        goals: [
          {
            title: "Crescita tecnica",
            body: "Continuare a migliorare in CAD, progettazione meccanica, modellazione 3D e problem solving tecnico."
          },
          {
            title: "Esperienza sul campo",
            body: "Consolidare competenze pratiche in ufficio tecnico, ambienti produttivi e contesti applicati reali."
          },
          {
            title: "Percorso universitario",
            body: "Prepararmi in modo solido a proseguire gli studi in ingegneria meccanica."
          }
        ]
      },
      projects: {
        title: "Progetti & Programmi",
        sub: "Workshop, summer school e percorsi formativi che hanno rafforzato il mio profilo tecnico.",
        items: [
          {
            title: "Summer School - Matematica & IoT",
            meta: "Universita degli Studi di Bergamo, San Pellegrino",
            body:
              "Partecipazione a una summer school di 3 giorni con focus su matematica, intelligenza artificiale, modelli e algoritmi per sistemi di machine learning, attraverso lezioni frontali e attivita di laboratorio."
          },
          {
            title: "UNIMI Winter School - Uni.On Program",
            meta: "Universita degli Studi di Milano",
            body:
              "Percorso di orientamento universitario con workshop interdisciplinari, attivita guidate e riflessione sui futuri percorsi di studio e professionali."
          },
          {
            title: "Engineering Workshop",
            meta: "Universita degli Studi di Brescia",
            body:
              "Workshop STEM di una settimana in laboratorio su ingegneria biomedica, misure meccaniche e principi di ingegneria applicata, con attivita pratiche su sensori, microcontrollori, stampa 3D e sistemi di rilevamento del movimento."
          },
          {
            title: "Erasmus+ VET",
            meta: "Seville, Spain | 02/02/2025 - 23/02/2025",
            body:
              "Esperienza internazionale che mi ha aiutato a sviluppare adattabilita, autonomia, responsabilita e capacita comunicative in un contesto nuovo e multiculturale."
          },
          {
            title: "Progetto Me.Mo.",
            meta: "Scuola Superiore Sant'Anna e Scuola Normale Superiore di Pisa",
            body:
              "Percorso di orientamento accademico centrato su pensiero scientifico, metodo di studio e contatto diretto con ambienti universitari di eccellenza."
          }
        ]
      },
      skills: {
        title: "Competenze",
        sub: "Strumenti, software e ambiti su cui sto lavorando.",
        cards: [
          {
            title: "CAD & Design",
            body: "SolidWorks, Autodesk Inventor, Fusion 360 e AutoCAD per modellazione CAD 3D, disegni tecnici, assiemi e basi di progettazione meccanica."
          },
          {
            title: "Fabbricazione Digitale",
            body: "Stampa 3D FDM, preparazione dei modelli digitali, slicing e utilizzo pratico delle stampanti 3D."
          },
          {
            title: "Robotica, Embedded & Automazione",
            body: "Interesse e pratica su Arduino, ESP32, Raspberry Pi, sensori, elettronica embedded e sistemi interattivi."
          },
          {
            title: "Competenze Digitali & Soft Skills",
            body: "Microsoft Office, programmazione di base, organizzazione dei flussi digitali, adattabilita, propensione all'apprendimento e problem solving."
          }
        ]
      },
      interests: {
        title: "Interessi",
        sub: "Ambiti che seguo con curiosita e su cui voglio continuare a crescere.",
        items: [
          "Progettazione 3D e modellazione CAD",
          "Tecnologie di stampa 3D",
          "Elettronica embedded: Arduino, ESP32 e Raspberry Pi",
          "Robotica, meccatronica e sistemi di automazione",
          "Pianoforte e musica"
        ]
      },
      contact: {
        title: "Contatti",
        sub: "Riferimenti principali e CV in entrambe le lingue.",
        emailLabel: "Email",
        email: "shagandeepsingh320@gmail.com",
        phoneLabel: "Telefono",
        phone: "+39 353 353 8908",
        locationLabel: "Indirizzo",
        location: "Via Navetta, 7",
        githubLabel: "GitHub",
        github: "https://github.com/Sh4g4n",
        cvLabel: "CV",
        cv: [
          { label: "CV Italiano", href: "assets/cv/Singh_Shagandeep_CV_ITA_v1.pdf" },
          { label: "CV English", href: "assets/cv/Singh_Shagandeep_CV_ENG_v1.pdf" }
        ]
      },
      footerTop: "Su"
    },
    en: {
      brand: "Shagandeep Singh",
      labels: { mode: "Mode", lang: "Lang", close: "Close" },
      nav: [
        { id: "profile", label: "Profile" },
        { id: "education", label: "Education & Experience" },
        { id: "projects", label: "Projects" },
        { id: "skills", label: "Skills" },
        { id: "interests", label: "Interests" },
        { id: "contact", label: "Contact" }
      ],
      hero: {
        kicker: "Portfolio",
        name: "Shagandeep Singh",
        role: "Student",
        bio:
          "Technical profile focused on mechanical engineering, mechatronics and CAD design. I have built experience through SolidWorks, 3D printing, embedded electronics and hands-on activities across school, workshops and internships.",
        cta1: "Go to Profile",
        cta2: "Contact",
        tag: "Professional Mode"
      },
      profile: {
        title: "Profile",
        sub: "A quick summary of my path and goals.",
        summary:
          "I am a student with a technical profile focused on mechanical engineering, mechatronics and CAD design. Through school projects, technical workshops, 3D printing and company experiences, I am building practical skills in 3D modeling, mechanical systems, embedded electronics and applied problem-solving.",
        highlights: [
          "Student at IIS G. Antonietti, Iseo",
          "Main academic interest: Mechanical Engineering",
          "Technical focus: 3D CAD, robotics, Arduino, 3D printing, ESP32 and Raspberry Pi",
          "Motivated to continue with university studies in engineering"
        ]
      },
      education: {
        title: "Education & Experience",
        sub: "School path, internships, extracurricular courses and programs.",
        school: {
          title: "IIS G. Antonietti (Iseo)",
          meta: "Technical path focused on design, CAD, robotics and 3D printing",
          skills: ["Robotics", "Arduino", "CAD", "3D Printing"]
        },
        priorEducation: {
          title: "Middle School Diploma",
          meta: "Luigi Einaudi Comprehensive Institute",
          period: "09/2018 - 06/2021 | Marone (BS)",
          body: "Completed lower secondary education with a focus on general subjects."
        },
        stages: [
          {
            id: "stage-terza",
            title: "Internship at O.M.F.B. S.p.A.",
            period: "29/04/2024 - 17/05/2024",
            place: "O.M.F.B., Provaglio d'Iseo",
            did:
              "Worked in a production environment, contributing to the assembly of hydraulic components such as pumps, tanks and control units. I also supported packaging activities and shipment preparation.",
            learned: [
              "Direct understanding of an industrial production environment",
              "Hands-on practice with assembly and product preparation",
              "Greater attention to organization, precision and workflow"
            ]
          },
          {
            id: "stage-omfb",
            title: "Internship at O.M.F.B. S.p.A. (Technical office)",
            period: "10/11/2025 - 28/11/2025",
            place: "OMFB Tank Division, Provaglio d'Iseo",
            did:
              "Advanced internship within the engineering and design department under the supervision of the Technical Team Manager and the engineering team. I focused on mechanical design with SolidWorks, developing and editing 3D models and technical drawings while gaining insight into production processes.",
            learned: [
              "Stronger CAD skills with SolidWorks",
              "Better understanding of product development workflows",
              "Growth in problem-solving and mechanical design thinking"
            ]
          },
          {
            id: "work-camplani",
            title: "Waiter (Part-time)",
            period: "27/08/2024 - Present",
            place: "Osteria Camplani, Zone (BS)",
            did:
              "Customer-facing role involving order handling, table service and direct interaction with guests in a fast-paced environment.",
            learned: [
              "Stronger communication and customer interaction skills",
              "Improved responsibility and time management",
              "Better teamwork under pressure"
            ]
          },
          {
            id: "stage-erasmus-vet",
            title: "Erasmus+ VET",
            period: "02/02/2025 - 23/02/2025",
            place: "Seville, Spain",
            did:
              "During this Erasmus+ VET internship abroad, I improved my ability to adapt to new environments and situations while also strengthening communication and collaboration skills.",
            learned: [
              "Greater independence and confidence in unfamiliar settings",
              "Stronger communication and interpersonal skills",
              "More adaptability and responsibility in an international context"
            ]
          }
        ],
        courses: [
          {
            title: "Make & Display Course",
            place: "IIS G. Antonietti",
            body:
              "Course focused on 3D printing, including basic design, preparation of digital models and use of 3D printers."
          },
          {
            title: "Python Programming Course",
            place: "IIS G. Antonietti",
            body:
              "Introduction to Python programming, covering coding fundamentals, logic and problem-solving through practical exercises."
          },
          {
            title: "CAD Mechanical Design and 3D Modeling with SolidWorks",
            place: "IIS G. Antonietti",
            body:
              "Course focused on mechanical design and 3D CAD modeling with SolidWorks, covering technical drawings, 3D part modeling and assembly concepts for mechanical applications."
          }
        ],
        programs: [
          {
            id: "erasmus-vet",
            title: "Erasmus+ VET (3 weeks)",
            period: "02/02/2025 - 23/02/2025",
            place: "Seville, Spain",
            did:
              "During this Erasmus+ VET internship abroad, I improved my ability to adapt to new environments and situations while also strengthening communication and collaboration skills.",
            learned: [
              "Greater independence and confidence in unfamiliar settings",
              "Stronger communication and interpersonal skills",
              "More adaptability and responsibility in an international context"
            ]
          },
          {
            id: "memo",
            title: "Me.Mo. project (university orientation)",
            period: "3-day experience",
            place: "Sant'Anna School of Advanced Studies and Scuola Normale Superiore, Pisa",
            did:
              "Selected for the Me.Mo. program focused on academic orientation, scientific thinking and exposure to high-level study environments.",
            learned: [
              "Clearer orientation toward university study",
              "Direct exposure to excellence in higher education",
              "Greater awareness of study methods and future goals"
            ]
          }
        ],
        software: [
          "SolidWorks",
          "Autodesk Inventor",
          "Fusion 360",
          "AutoCAD",
          "Microsoft Office",
          "Arduino / ESP32 / Raspberry Pi"
        ],
        technical: [
          "Mechanical design fundamentals",
          "Technical drawings, 3D modeling and assemblies",
          "FDM 3D printing and digital model preparation",
          "Embedded electronics, sensors and robotics",
          "Basic understanding of manufacturing and workshop processes"
        ],
        languages: [
          "Italian - C2 speaking, reading, writing",
          "English - C1 speaking, reading, writing",
          "Punjabi - C1 speaking, A1 reading, A1 writing",
          "Hindi - B1 speaking, A1 reading, A1 writing",
          "Urdu - B1 speaking, A1 reading, A1 writing"
        ],
        goals: [
          {
            title: "Technical growth",
            body: "Keep improving in CAD, mechanical design, 3D modeling and technical problem-solving."
          },
          {
            title: "Hands-on experience",
            body: "Strengthen practical skills through technical office work, production environments and real applied contexts."
          },
          {
            title: "University path",
            body: "Build a strong foundation to continue with university studies in Mechanical Engineering."
          }
        ]
      },
      projects: {
        title: "Projects",
        sub: "Workshops, summer schools and learning programs that strengthened my technical profile.",
        items: [
          {
            title: "Summer School - Mathematics & IoT",
            meta: "University of Bergamo, San Pellegrino",
            body:
              "Participated in a 3-day summer school focused on mathematics, artificial intelligence, models and algorithms for machine learning systems, through lectures and lab activities."
          },
          {
            title: "UNIMI Winter School - Uni.On Program",
            meta: "University of Milan",
            body:
              "Academic orientation experience including interdisciplinary workshops, guided activities and reflection on future study and career paths."
          },
          {
            title: "Engineering Workshop",
            meta: "University of Brescia",
            body:
              "One-week STEM workshop in engineering labs focused on biomechanical engineering, mechanical measurements and applied engineering, with practical work on sensors, microcontrollers, 3D printing and motion detection systems."
          },
          {
            title: "Erasmus+ VET",
            meta: "Seville, Spain | 02/02/2025 - 23/02/2025",
            body:
              "International experience that helped me strengthen adaptability, independence, responsibility and communication skills in a new multicultural environment."
          },
          {
            title: "Me.Mo. Project",
            meta: "Sant'Anna School of Advanced Studies and Scuola Normale Superiore, Pisa",
            body:
              "Academic orientation path focused on scientific thinking, study method and direct exposure to excellence in higher education."
          }
        ]
      },
      skills: {
        title: "Skills",
        sub: "Tools, software and areas I am working on.",
        cards: [
          {
            title: "CAD & Design",
            body: "SolidWorks, Autodesk Inventor, Fusion 360 and AutoCAD for 3D CAD modeling, technical drawings, assemblies and mechanical design fundamentals."
          },
          {
            title: "Digital Fabrication",
            body: "FDM 3D printing, digital model preparation, slicing and practical use of 3D printers."
          },
          {
            title: "Robotics, Embedded & Automation",
            body: "Interest and hands-on exposure to Arduino, ESP32, Raspberry Pi, sensors, embedded electronics and interactive systems."
          },
          {
            title: "Digital Skills & Soft Skills",
            body: "Microsoft Office, basic programming, digital workflow organization, adaptability, willingness to learn and problem-solving."
          }
        ]
      },
      interests: {
        title: "Interests",
        sub: "Areas I actively follow and want to keep developing.",
        items: [
          "3D design and CAD modeling",
          "3D printing technologies",
          "Embedded electronics: Arduino, ESP32 and Raspberry Pi",
          "Robotics, mechatronics and automation systems",
          "Piano and music"
        ]
      },
      contact: {
        title: "Contact",
        sub: "Main references and CV files in both languages.",
        emailLabel: "Email",
        email: "shagandeepsingh320@gmail.com",
        phoneLabel: "Phone",
        phone: "+39 353 353 8908",
        locationLabel: "Address",
        location: "Via Navetta, 7",
        githubLabel: "GitHub",
        github: "https://github.com/Sh4g4n",
        cvLabel: "CV",
        cv: [
          { label: "CV Italiano", href: "assets/cv/Singh_Shagandeep_CV_ITA_v1.pdf" },
          { label: "CV English", href: "assets/cv/Singh_Shagandeep_CV_ENG_v1.pdf" }
        ]
      },
      footerTop: "Top"
    }
  },
  friends: {
    it: {
      brand: "Shagan",
      labels: { mode: "Modalita", lang: "Lingua", close: "Chiudi" },
      nav: [
        { id: "bio", label: "Chi Sono" },
        { id: "vibe", label: "Vibe" },
        { id: "hobbies", label: "Hobby" },
        { id: "now", label: "Now" },
        { id: "quote", label: "Quote" },
        { id: "favorites", label: "Preferiti" },
        { id: "traits", label: "Traits" },
        { id: "social", label: "Social" }
      ],
      hero: {
        kicker: "Friends",
        name: "Shagan",
        role: "Alias: Shaggy, SCH, Stars",
        bio:
          "Gamer (Action RPG > FPS), anime/manga/manhwa/webnovel in rotazione, attivo su Discord e Instagram. Imparando pianoforte, chitarra, guardo serie e film, e torno sempre a Tolkien.",
        cta1: "Vai ai Preferiti",
        cta2: "Social",
        tag: "Friends Mode"
      },
      vibe: {
        title: "La Mia Vibe",
        sub: "Un mix tra chill, nerd e caos organizzato.",
        cards: [
          {
            title: "Offline",
            body: "Musica, film, serie, pianoforte, chitarra e quei momenti in cui stacco da tutto e mi perdo in una storia fatta bene."
          },
          {
            title: "Online",
            body: "Discord, gaming, meme, discussioni random e serate che iniziano con una partita e finiscono parlando di lore."
          },
          {
            title: "Headspace",
            body: "Mi piacciono le cose che hanno atmosfera: fantasy, spazio, mondi costruiti bene, colonne sonore forti e personaggi scritti come si deve."
          }
        ]
      },
      hobbies: {
        title: "Hobby & Tempo Libero",
        sub: "Cose che faccio quando non sono in modalita studio o lavoro.",
        items: [
          "Gaming soprattutto action RPG, story-driven e qualche FPS competitivo",
          "Anime, manga, manhwa e webnovel sempre in rotazione",
          "Pianoforte, chitarra e musica, quando voglio staccare e rilassarmi",
          "Serie TV e film, soprattutto se hanno worldbuilding forte o una bella storia",
          "Curiosita per tech, elettronica e robe da smanettare anche fuori dalla scuola"
        ]
      },
      now: {
        title: "Currently",
        sub: "Cose che in questo periodo fanno parte della mia routine.",
        items: [
          { title: "In loop", body: "Sto alternando gaming, anime e letture online a seconda della vibe del momento." },
          { title: "Sto imparando", body: "Pianoforte, un po' alla volta ma con costanza." },
          { title: "Sempre presente", body: "Discord, Instagram e quelle chat che partono da una battuta e diventano deep talk." },
          { title: "Mood fisso", body: "Fantasy, sci-fi, Tolkien, Star Wars e storie con lore pesante." }
        ]
      },
      heroQuote:
        "e in questa immensita s'annega il pensier mio:\ne il naufragar m'e dolce in questo mare.",
      quote:
        "Alla fine mi ritrovo sempre a seguire una buona storia, in qualunque forma: è il filo che tiene insieme cio che mi interessa.",
      traits: {
        title: "Come Sono",
        sub: "Piccole cose che dicono piu di una bio fatta bene.",
        items: [
          "Se una storia mi prende, ci entro completamente",
          "Passo da momenti super social a momenti full immersion nelle mie cose",
          "Mi piacciono le persone con cui si puo scherzare e poi parlare seriamente senza forzature",
          "Ho gusti abbastanza chiari, ma sono sempre disposto a scoprire roba nuova se ne vale la pena",
          "Quando qualcosa mi appassiona, ci torno sempre"
        ]
      },
      favorites: {
        gaming: [
          "Skyrim",
          "Minecraft",
          "Elden Ring",
          "Fortnite",
          "COD Warzone",
          "Star Wars Battlefront II",
          "Jedi Survivor",
          "Jedi Fallen Order",
          "Portal",
          "Portal 2",
          "Detroit: Become Human",
          "Halo",
          "Rainbow Six Siege X",
          "Dying Light",
          "For Honor",
          "The Witcher 3 (+ more)"
        ],
        film: ["Interstellar (preferito)"],
        serie: ["Game of Thrones", "Rings of Power", "The 100", "Supernatural"],
        anime: ["Code Geass", "Death Note", "Attack on Titan", "Fairy Tail", "One Piece", "Naruto", "Bleach", "Jujutsu Kaisen"],
        manga: ["Omniscient Reader's Viewpoint (preferito)", "Demon Slayer", "Nano Machine", "TBATE"],
        webnovel: ["Shadow Slave (preferito)"],
        auto: ["Skyline GT-R R34"]
      },
      social: [{ title: "Instagram", href: "https://www.instagram.com/_sch.priv/", note: "@_sch.priv" }],
      footerTop: "Su"
    },
    en: {
      brand: "Shagan",
      labels: { mode: "Mode", lang: "Lang", close: "Close" },
      nav: [
        { id: "bio", label: "Who I Am" },
        { id: "vibe", label: "Vibe" },
        { id: "hobbies", label: "Hobbies" },
        { id: "now", label: "Now" },
        { id: "quote", label: "Quote" },
        { id: "favorites", label: "Favorites" },
        { id: "traits", label: "Traits" },
        { id: "social", label: "Social" }
      ],
      hero: {
        kicker: "Friends",
        name: "Shagan",
        role: "Aliases: Shaggy, SCH, Stars",
        bio:
          "Gamer (Action RPG > FPS), always rotating between anime/manga/manhwa/webnovels, active on Discord and Instagram. Learning the piano and the guitar, watching series and movies, always back to Tolkien.",
        cta1: "Go to Favorites",
        cta2: "Social",
        tag: "Friends Mode"
      },
      vibe: {
        title: "My Vibe",
        sub: "Somewhere between chill, nerdy and organized chaos.",
        cards: [
          {
            title: "Offline",
            body: "Music, movies, series, piano, guitar and those moments where I disconnect and get lost in a really good story."
          },
          {
            title: "Online",
            body: "Discord, gaming, memes, random talks and nights that start with a match and end in full lore discussion."
          },
          {
            title: "Headspace",
            body: "I like things with atmosphere: fantasy, space, well-built worlds, strong soundtracks and characters that actually feel written with care."
          }
        ]
      },
      hobbies: {
        title: "Hobbies & Free Time",
        sub: "The things I get into when I am not in study or work mode.",
        items: [
          "Gaming, especially action RPGs, story-driven games and some competitive FPS",
          "Anime, manga, manhwa and webnovels always in rotation",
          "The piano and music when I want to slow down and reset",
          "TV series and movies, especially with strong worldbuilding or a great story",
          "A genuine interest in tech, electronics and things I can tinker with outside school too"
        ]
      },
      now: {
        title: "Currently",
        sub: "Things that are part of my routine right now.",
        items: [
          { title: "In rotation", body: "I switch between gaming, anime and online reading depending on the mood." },
          { title: "Learning", body: "The piano, slowly but consistently." },
          { title: "Always around", body: "Discord, Instagram and chats that start as jokes and turn into deep conversations." },
          { title: "Default mood", body: "Fantasy, sci-fi, Tolkien, Star Wars and stories with heavy lore." }
        ]
      },
      heroQuote:
        "In this boundless vastness, my thoughts gently fade—and there is a tender sweetness in simply drifting, lost within it.",
      quote:
        "In the end, I always end up following a good story, whatever the format. It's the thread that ties my interests together.",
      traits: {
        title: "What I Am Like",
        sub: "A few things that say more than a polished bio ever could.",
        items: [
          "If a story hooks me, I go all in",
          "I switch between being very social and fully disappearing into my own stuff",
          "I like people you can joke with and also have real conversations with",
          "My tastes are pretty clear, but I am always open to discovering something new if it is worth it",
          "When something really clicks with me, I always come back to it"
        ]
      },
      favorites: {
        gaming: [
          "Skyrim",
          "Minecraft",
          "Elden Ring",
          "Fortnite",
          "COD Warzone",
          "Star Wars Battlefront II",
          "Jedi Survivor",
          "Jedi Fallen Order",
          "Portal",
          "Portal 2",
          "Detroit: Become Human",
          "Halo",
          "Rainbow Six Siege X",
          "Dying Light",
          "For Honor",
          "The Witcher 3 (+ more)"
        ],
        film: ["Interstellar (favorite)"],
        serie: ["Game of Thrones", "Rings of Power", "The 100", "Supernatural"],
        anime: ["Code Geass", "Death Note", "Attack on Titan", "Fairy Tail", "One Piece", "Naruto", "Bleach", "Jujutsu Kaisen"],
        manga: ["Omniscient Reader's Viewpoint (favorite)", "Demon Slayer", "Nano Machine", "TBATE"],
        webnovel: ["Shadow Slave (favorite)"],
        auto: ["Skyline GT-R R34"]
      },
      social: [{ title: "Instagram", href: "https://www.instagram.com/_sch.priv/", note: "@_sch.priv" }],
      footerTop: "Top"
    }
  }
};

const state = {
  mode: loadPref("portfolio_mode", "professional"),
  lang: loadPref("portfolio_lang", "it"),
  observer: null,
  modalCleanup: null,
  lastFocus: null,
  fxRAF: 0,
  fxTarget: { x: 52, y: 38 },
  fxCurrent: { x: 52, y: 38 }
};

const els = {
  body: document.body,
  navLinks: document.getElementById("navLinks"),
  brandText: document.getElementById("brandText"),
  hero: document.getElementById("hero"),
  content: document.getElementById("content"),
  footer: document.getElementById("footer"),
  burger: document.getElementById("burger"),
  navPanel: document.getElementById("navPanel"),
  modeProfessional: document.getElementById("modeProfessional"),
  modeFriends: document.getElementById("modeFriends"),
  langIt: document.getElementById("langIt"),
  langEn: document.getElementById("langEn"),
  modeLabel: document.getElementById("modeLabel"),
  langLabel: document.getElementById("langLabel"),
  modalRoot: document.getElementById("modalRoot")
};

const favTitleMap = {
  it: {
    gaming: "Gaming",
    film: "Film",
    serie: "Serie TV",
    anime: "Anime",
    manga: "Manga/Manhwa",
    webnovel: "Webnovel",
    auto: "Auto preferita"
  },
  en: {
    gaming: "Gaming",
    film: "Movies",
    serie: "TV Series",
    anime: "Anime",
    manga: "Manga/Manhwa",
    webnovel: "Webnovel",
    auto: "Favorite Car"
  }
};

const modalMap = new Map();

function init() {
  wireBase();
  renderAll(true);
  setupFx();
}

function wireBase() {
  els.modeProfessional.addEventListener("click", () => setMode("professional"));
  els.modeFriends.addEventListener("click", () => setMode("friends"));
  els.langIt.addEventListener("click", () => setLang("it"));
  els.langEn.addEventListener("click", () => setLang("en"));

  els.burger.addEventListener("click", () => {
    els.navPanel.classList.toggle("open");
    els.burger.classList.toggle("is-open");
    els.burger.setAttribute("aria-expanded", String(els.navPanel.classList.contains("open")));
  });

  document.addEventListener("click", (e) => {
    const mobile = window.matchMedia("(max-width: 860px)").matches;
    if (!mobile || !els.navPanel.classList.contains("open")) return;
    if (els.navPanel.contains(e.target) || els.burger.contains(e.target)) return;
    closeNav();
  });

  window.addEventListener("resize", () => {
    if (!window.matchMedia("(max-width: 860px)").matches) closeNav();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeNav();
      closeModal();
    }
  });

  document.addEventListener("click", (e) => {
    const trigger = e.target.closest("[data-open-modal]");
    if (trigger) {
      openModal(trigger.getAttribute("data-open-modal"));
      return;
    }

    const acc = e.target.closest("[data-acc-btn]");
    if (acc) toggleAccordion(acc);
  });

  document.addEventListener("click", (e) => {
    const closeBtn = e.target.closest("[data-close-modal]");
    if (closeBtn) closeModal();
  });
}

function renderAll(initial = false) {
  const copy = getCopy();
  els.body.dataset.mode = state.mode;
  els.body.dataset.lang = state.lang;
  els.brandText.textContent = copy.brand;
  els.modeLabel.textContent = copy.labels.mode;
  els.langLabel.textContent = copy.labels.lang;

  setSeg(els.modeProfessional, state.mode === "professional");
  setSeg(els.modeFriends, state.mode === "friends");
  setSeg(els.langIt, state.lang === "it");
  setSeg(els.langEn, state.lang === "en");

  renderNav(copy.nav);
  renderHero(copy.hero);
  renderContent(copy);
  renderFooter(copy);
  closeNav();

  wireAnchors();
  observeReveals(initial);
  hydrateFavImages();
  document.dispatchEvent(
    new CustomEvent("portfolio:rendered", {
      detail: { mode: state.mode, lang: state.lang, initial }
    })
  );
}

function renderNav(navItems) {
  els.navLinks.innerHTML = navItems
    .map((n) => `<li><a href="#${esc(n.id)}">${esc(n.label)}</a></li>`)
    .join("");
}

function renderHero(hero) {
  const portrait = state.mode === "friends" ? "assets/profile-friends.jpg" : "assets/profile-pro.jpg";
  const heroQuote =
    state.mode === "friends"
      ? `<blockquote class="hero-quote poetic-quote">${esc(getCopy().heroQuote).replace(/\n/g, "<br />")}</blockquote>`
      : "";
  els.hero.innerHTML = `
    <div class="hero-grid">
      <article class="panel hero-copy reveal">
        <p class="kicker">${esc(hero.kicker)}</p>
        <h1>${esc(hero.name)}</h1>
        <p class="hero-title">${esc(hero.role)}</p>
        <p class="hero-bio">${esc(hero.bio)}</p>
        <div class="hero-actions">
          <a class="btn primary" href="#${state.mode === "professional" ? "profile" : "favorites"}">${esc(hero.cta1)}</a>
          <a class="btn" href="#${state.mode === "professional" ? "contact" : "social"}">${esc(hero.cta2)}</a>
        </div>
        ${heroQuote}
      </article>

      <aside class="panel portrait reveal">
        <div class="portrait-card">
          <img src="${esc(portrait)}" alt="${esc(hero.name)}" />
          <span class="portrait-tag">${esc(hero.tag)}</span>
        </div>
      </aside>
    </div>
  `;
}

function renderContent(copy) {
  modalMap.clear();
  if (state.mode === "professional") {
    const pf = copy.profile;
    const ed = copy.education;
    const pr = copy.projects;
    const sk = copy.skills;
    const ints = copy.interests;
    const co = copy.contact;

    ed.stages.forEach((x) => modalMap.set(x.id, x));
    ed.programs.forEach((x) => modalMap.set(x.id, x));

    els.content.innerHTML = `
      ${sectionHead("profile", pf.title, pf.sub)}
      <section class="section reveal">
        <div class="grid cols-2">
          <article class="card">
            <h3>${state.lang === "it" ? "Profilo personale" : "Personal profile"}</h3>
            <p>${esc(pf.summary)}</p>
          </article>
          <article class="card">
            <h3>${state.lang === "it" ? "In breve" : "At a glance"}</h3>
            <ul class="list-clean">
              ${pf.highlights.map((item) => `<li>${esc(item)}</li>`).join("")}
            </ul>
          </article>
        </div>
      </section>

      ${sectionHead("education", ed.title, ed.sub)}
      <div class="grid cols-2 section reveal">
        <article class="card">
          <h3>${esc(ed.school.title)}</h3>
          <p>${esc(ed.school.meta)}</p>
          <div class="badges">${ed.school.skills.map((s) => `<span class="badge">${esc(s)}</span>`).join("")}</div>
        </article>
        <article class="card">
          <h3>${esc(ed.priorEducation.title)}</h3>
          <p><strong>${esc(ed.priorEducation.meta)}</strong></p>
          <p>${esc(ed.priorEducation.period)}</p>
          <p>${esc(ed.priorEducation.body)}</p>
        </article>
      </div>

      <section class="section reveal">
        <article class="card">
          <h3>${state.lang === "it" ? "Base tecnica" : "Technical foundation"}</h3>
          <p><strong>Software:</strong> ${esc(ed.software.join(", "))}</p>
          <p><strong>Technical:</strong> ${esc(ed.technical.join(", "))}</p>
        </article>
      </section>

      <section class="section reveal">
        <div class="grid">
          <article class="card experience-card">
            <div class="section-inline-head">
              <div>
                <h3>${state.lang === "it" ? "Esperienze lavorative" : "Work Experience"}</h3>
                <p class="section-subtle">
                  ${state.lang === "it"
                    ? "Clicca sui blocchi per aprire i dettagli di ogni esperienza."
                    : "Click the blocks to open the details for each experience."}
                </p>
              </div>
            </div>
            <div class="grid">
              ${ed.stages
                .map(
                  (s) => `
                <button class="exp-trigger" data-open-modal="${esc(s.id)}" aria-label="${esc(
                  state.lang === "it" ? `Apri dettagli ${s.title}` : `Open details ${s.title}`
                )}">
                  <span class="exp-trigger-title">${esc(s.title)}</span>
                  <span class="exp-trigger-meta">${esc(s.period)} - ${esc(s.place)}</span>
                  <span class="exp-trigger-hint">${state.lang === "it" ? "Apri dettagli" : "Open details"}</span>
                </button>
              `
                )
                .join("")}
            </div>
          </article>
        </div>
      </section>

      <section class="section reveal">
        <div class="grid cols-2">
          <article class="card course-card">
            <h3>${state.lang === "it" ? "Corsi" : "Courses"}</h3>
            <div class="grid">
              ${ed.courses
                .map(
                  (course) => `
                <article class="mini-card">
                  <h4>${esc(course.title)}</h4>
                  <p class="mini-card-meta">${esc(course.place)}</p>
                  <p>${esc(course.body)}</p>
                </article>
              `
                )
                .join("")}
            </div>
          </article>
          <article class="card">
            <h3>${state.lang === "it" ? "Obiettivi" : "Goals"}</h3>
            <div class="grid">
              ${ed.goals
                .map(
                  (goal) => `
                <article class="mini-card goal-card">
                  <h4>${esc(goal.title)}</h4>
                  <p>${esc(goal.body)}</p>
                </article>
              `
                )
                .join("")}
            </div>
          </article>
        </div>
      </section>

      <section class="section reveal">
        <article class="card">
          <h3>${state.lang === "it" ? "Lingue" : "Languages"}</h3>
          <div class="badges">${ed.languages.map((lang) => `<span class="badge">${esc(lang)}</span>`).join("")}</div>
        </article>
      </section>

      ${sectionHead("projects", pr.title, pr.sub)}
      <section class="section reveal">
        <div class="hub">
          ${pr.items
            .map(
              (item) => `
            <article class="tile">
              <h3>${esc(item.title)}</h3>
              <p><strong>${esc(item.meta)}</strong></p>
              <p>${esc(item.body)}</p>
            </article>
          `
            )
            .join("")}
        </div>
      </section>

      ${sectionHead("skills", sk.title, sk.sub)}
      <section class="section reveal">
        <div class="hub">
          ${sk.cards
            .map(
              (card) => `
            <article class="tile">
              <h3>${esc(card.title)}</h3>
              <p>${esc(card.body)}</p>
            </article>
          `
            )
            .join("")}
        </div>
      </section>

      ${sectionHead("interests", ints.title, ints.sub)}
      <section class="section reveal">
        <div class="grid cols-2">
          ${ints.items
            .map(
              (item) => `
            <article class="card interest-card">
              <p>${esc(item)}</p>
            </article>
          `
            )
            .join("")}
        </div>
      </section>

      ${sectionHead("contact", co.title, co.sub)}
      <section class="section reveal">
        <div class="grid cols-2">
          <article class="card">
            <h3>${esc(co.emailLabel)}</h3>
            <p><a href="mailto:${esc(co.email)}">${esc(co.email)}</a></p>
          </article>
          <article class="card">
            <h3>${esc(co.phoneLabel)}</h3>
            <p><a href="tel:${esc(co.phone)}">${esc(co.phone)}</a></p>
          </article>
          <article class="card">
            <h3>${esc(co.locationLabel)}</h3>
            <p>${esc(co.location)}</p>
          </article>
          <article class="card">
            <h3>${esc(co.githubLabel)}</h3>
            <p><a href="${esc(co.github)}" target="_blank" rel="noopener noreferrer">${esc(co.github)}</a></p>
          </article>
          <article class="card contact-card-wide">
            <h3>${esc(co.cvLabel)}</h3>
            <div class="contact-links">
              ${co.cv
                .map(
                  (doc) => `
                <a class="btn" href="${esc(doc.href)}" target="_blank" rel="noopener noreferrer">${esc(doc.label)}</a>
              `
                )
                .join("")}
            </div>
          </article>
        </div>
      </section>
    `;
    return;
  }

  const f = copy.favorites;
  const vibe = copy.vibe;
  const hobbies = copy.hobbies;
  const now = copy.now;
  const traits = copy.traits;
  const favSections = Object.keys(f);

  els.content.innerHTML = `
    ${sectionHead("bio", state.lang === "it" ? "Chi Sono" : "Who I Am", copy.hero.role)}
    <section class="section reveal">
      <div class="grid cols-2">
        <article class="card">
          <p>${esc(copy.hero.bio)}</p>
        </article>
        <article class="card">
          <h3>${state.lang === "it" ? "Alias & energia" : "Aliases & energy"}</h3>
          <p>${esc(copy.hero.role)}</p>
          <p>${state.lang === "it"
            ? "Se la versione professional racconta il percorso, questa racconta l'atmosfera: cosa mi piace, come passo il tempo e che tipo di persona sono fuori dal contesto scolastico."
            : "If the professional side tells the path, this one tells the atmosphere: what I like, how I spend my time and the kind of person I am outside school."}</p>
        </article>
      </div>
    </section>

    ${sectionHead("vibe", vibe.title, vibe.sub)}
    <section class="section reveal">
      <div class="hub">
        ${vibe.cards
          .map(
            (card) => `
          <article class="tile">
            <h3>${esc(card.title)}</h3>
            <p>${esc(card.body)}</p>
          </article>
        `
          )
          .join("")}
      </div>
    </section>

    ${sectionHead("hobbies", hobbies.title, hobbies.sub)}
    <section class="section reveal">
      <div class="grid cols-2">
        ${hobbies.items
          .map(
            (item) => `
          <article class="card interest-card">
            <p>${esc(item)}</p>
          </article>
        `
          )
          .join("")}
      </div>
    </section>

    ${sectionHead("now", now.title, now.sub)}
    <section class="section reveal">
      <div class="hub">
        ${now.items
          .map(
            (item) => `
          <article class="tile">
            <h3>${esc(item.title)}</h3>
            <p>${esc(item.body)}</p>
          </article>
        `
          )
          .join("")}
      </div>
    </section>

    ${sectionHead("quote", "Quote", "")}
    <section class="section reveal">
      <div class="grid">
        <article class="card quote-card">
          <blockquote class="poetic-quote">${esc(copy.heroQuote).replace(/\n/g, "<br />")}</blockquote>
        </article>
        <article class="card quote-secondary-card">
          <p class="quote-secondary">${esc(copy.quote)}</p>
        </article>
      </div>
    </section>

    ${sectionHead("favorites", state.lang === "it" ? "Preferiti" : "Favorites", "")}
    <section class="section reveal">
      <div class="grid">
        ${favSections
          .map(
            (cat, i) => `
          <article class="acc-item" aria-expanded="false">
            <button class="acc-btn" data-acc-btn aria-controls="fav-${cat}-${i}" aria-expanded="false">
              <span>${esc(favTitleMap[state.lang]?.[cat] || cat)}</span>
              <span class="caret">></span>
            </button>
            <div id="fav-${cat}-${i}" class="acc-panel">
              <div class="acc-inner">${renderFavoritesGrid(cat, f[cat])}</div>
            </div>
          </article>
        `
          )
          .join("")}
      </div>
    </section>

    ${sectionHead("traits", traits.title, traits.sub)}
    <section class="section reveal">
      <div class="grid cols-2">
        ${traits.items
          .map(
            (item) => `
          <article class="card interest-card">
            <p>${esc(item)}</p>
          </article>
        `
          )
          .join("")}
      </div>
    </section>

    ${sectionHead("social", "Social", "")}
    <section class="section reveal">
      <div class="hub">
        ${copy.social
          .map(
            (s) => `
          <a class="tile" href="${esc(s.href)}" target="_blank" rel="noopener noreferrer">
            <h3>${esc(s.title)}</h3>
            <p>${esc(s.note)}</p>
            <span class="chip">Link</span>
          </a>
        `
          )
          .join("")}
      </div>
    </section>
  `;
}

function sectionHead(id, title, sub) {
  return `
    <section class="section" id="${esc(id)}">
      <div class="section-head reveal">
        <h2 class="section-title">${esc(title)}</h2>
        ${sub ? `<p class="section-sub">${esc(sub)}</p>` : ""}
      </div>
    </section>
  `;
}

function renderFavoritesGrid(cat, items) {
  return `<div class="fav-grid">${items
    .map((item) => {
      const slug = resolveFavSlug(cat, item);
      const src = `assets/favorites/${cat}/${slug}.jpg`;
      return `
        <article class="fav-tile">
          <img data-fav-img src="${esc(src)}" alt="${esc(item)}" />
          <div class="fav-label">${esc(item)}</div>
        </article>
      `;
    })
    .join("")}</div>`;
}

function renderFooter(copy) {
  els.footer.innerHTML = `
    <p>${esc(copy.brand)} - ${new Date().getFullYear()}</p>
    <div class="footer-links">
      <a href="#top">${esc(copy.footerTop)}</a>
      ${copy.nav.map((n) => `<a href="#${esc(n.id)}">${esc(n.label)}</a>`).join("")}
    </div>
  `;
}

function setMode(mode) {
  if (mode === state.mode) return;
  state.mode = mode;
  savePref("portfolio_mode", mode);
  renderAll();
}

function setLang(lang) {
  if (lang === state.lang) return;
  state.lang = lang;
  savePref("portfolio_lang", lang);
  renderAll();
}

function wireAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      closeNav();
    });
  });
}

function toggleAccordion(btn) {
  const item = btn.closest(".acc-item");
  const panel = item.querySelector(".acc-panel");
  const isOpen = item.getAttribute("aria-expanded") === "true";
  item.setAttribute("aria-expanded", String(!isOpen));
  btn.setAttribute("aria-expanded", String(!isOpen));
  panel.style.maxHeight = isOpen ? "0px" : `${panel.scrollHeight}px`;
}

function openModal(id) {
  const info = modalMap.get(id);
  if (!info) return;

  closeModal(true);

  const copy = getCopy();
  state.lastFocus = document.activeElement;

  els.modalRoot.innerHTML = `
    <div class="modal-backdrop" data-close-modal></div>
    <article class="modal" role="dialog" aria-modal="true" aria-labelledby="modalTitle" aria-describedby="modalBody" tabindex="-1">
      <header class="modal-head">
        <div>
          <h3 id="modalTitle">${esc(info.title)}</h3>
          <p>${esc(info.period)} - ${esc(info.place)}</p>
        </div>
        <button type="button" class="close" data-close-modal aria-label="${esc(copy.labels.close)}">${esc(copy.labels.close)}</button>
      </header>
      <div class="modal-body" id="modalBody">
        <p><strong>${state.lang === "it" ? "Cosa ho fatto" : "What I did"}:</strong> ${esc(info.did)}</p>
        <p><strong>${state.lang === "it" ? "Cosa ho imparato" : "What I learned"}:</strong></p>
        <ul>${(info.learned || []).map((l) => `<li>${esc(l)}</li>`).join("")}</ul>
      </div>
    </article>
  `;

  els.modalRoot.classList.add("open");
  els.modalRoot.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  const modal = els.modalRoot.querySelector(".modal");
  modal.focus();
  state.modalCleanup = trapFocus(els.modalRoot);
}

function closeModal(skip = false) {
  if (!els.modalRoot.classList.contains("open")) return;
  els.modalRoot.classList.remove("open");
  els.modalRoot.setAttribute("aria-hidden", "true");

  const finish = () => {
    els.modalRoot.innerHTML = "";
    document.body.style.overflow = "";
    if (state.modalCleanup) {
      state.modalCleanup();
      state.modalCleanup = null;
    }
    if (state.lastFocus && state.lastFocus.focus) state.lastFocus.focus();
    state.lastFocus = null;
  };

  if (skip) {
    finish();
    return;
  }

  window.setTimeout(finish, 260);
}

function trapFocus(root) {
  const items = Array.from(
    root.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')
  ).filter((x) => !x.hasAttribute("disabled"));

  const first = items[0];
  const last = items[items.length - 1];

  function onKey(e) {
    if (e.key !== "Tab" || !items.length) return;
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
      return;
    }
    if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  root.addEventListener("keydown", onKey);
  return () => root.removeEventListener("keydown", onKey);
}

function observeReveals(initial = false) {
  if (!state.observer) {
    state.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            state.observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
  }

  const items = Array.from(document.querySelectorAll(".reveal"));
  items.forEach((el, i) => {
    el.classList.remove("in");
    el.style.setProperty("--d", `${Math.min(i * 35, 260)}ms`);
    state.observer.observe(el);
    if (initial && i < 2) el.classList.add("in");
  });
}

function setupFx() {
  window.addEventListener("mousemove", (e) => {
    const x = clamp((e.clientX / window.innerWidth) * 100, 0, 100);
    const y = clamp((e.clientY / window.innerHeight) * 100, 0, 100);
    state.fxTarget.x = x;
    state.fxTarget.y = y;
    if (!state.fxRAF) state.fxRAF = requestAnimationFrame(stepFx);
  });
}

function stepFx() {
  state.fxRAF = 0;
  const damp = 0.09;
  state.fxCurrent.x += (state.fxTarget.x - state.fxCurrent.x) * damp;
  state.fxCurrent.y += (state.fxTarget.y - state.fxCurrent.y) * damp;
  document.body.style.setProperty("--mx", String(state.fxCurrent.x));
  document.body.style.setProperty("--my", String(state.fxCurrent.y));

  if (
    Math.abs(state.fxCurrent.x - state.fxTarget.x) > 0.05 ||
    Math.abs(state.fxCurrent.y - state.fxTarget.y) > 0.05
  ) {
    state.fxRAF = requestAnimationFrame(stepFx);
  }
}

function hydrateFavImages() {
  document.querySelectorAll("img[data-fav-img]").forEach((img) => {
    img.addEventListener(
      "error",
      () => {
        img.src = placeholder();
      },
      { once: true }
    );
  });
}

function resolveFavSlug(cat, text) {
  const raw = String(text).toLowerCase();
  if (raw.includes("interstellar")) return state.lang === "it" ? "interstellar-preferito" : "interstellar-favorite";
  if (raw.includes("omniscient")) {
    return state.lang === "it"
      ? "omniscient-readers-viewpoint-preferito"
      : "omniscient-readers-viewpoint-favorite";
  }
  if (raw.includes("shadow slave")) return state.lang === "it" ? "shadow-slave-preferito" : "shadow-slave-favorite";
  return slugify(text);
}

function placeholder() {
  const dark = state.mode === "friends";
  const bg = dark ? "#1b1135" : "#d9e2ef";
  const fg = dark ? "#f5e9ff" : "#263143";
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='480' height='280'><rect width='100%' height='100%' fill='${bg}'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='${fg}' font-size='22' font-family='Trebuchet MS'>Image</text></svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function closeNav() {
  els.navPanel.classList.remove("open");
  els.burger.classList.remove("is-open");
  els.burger.setAttribute("aria-expanded", "false");
}

function setSeg(el, active) {
  el.setAttribute("aria-selected", String(active));
}

function getCopy() {
  return data[state.mode][state.lang];
}

function loadPref(key, fallback) {
  try {
    return localStorage.getItem(key) || fallback;
  } catch {
    return fallback;
  }
}

function savePref(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // ignore
  }
}

function clamp(v, a, b) {
  return Math.max(a, Math.min(b, v));
}

function slugify(value) {
  return String(value)
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/\(.*?\)/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function esc(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

init();
