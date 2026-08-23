/* ============================================================
   AIO MangaVerse — catalog data
   Single source of truth for every title on the site.
   Add a new title by adding one object to ANIME_DATA below —
   every page (home, browse, detail, library) reads from here,
   so there's no more risk of a title/image/synopsis mismatch.
   ============================================================ */

const ANIME_DATA = [
  {
    slug: "one-piece",
    title: "One Piece",
    genres: ["Action", "Adventure", "Fantasy", "Shounen"],
    image: "Image/Img-op-1.jpeg",
    type: "Manga & Anime",
    status: "Ongoing",
    year: 1997,
    rating: 4.9,
    chapters: "1100+",
    synopsis:
      "Monkey D. Luffy sails the Grand Line with his ragtag crew, chasing the legendary treasure left behind by the Pirate King. Along the way he gathers allies, topples corrupt governments, and slowly uncovers the buried history of the world itself.",
    arcs: [
      {
        season: "One Piece",
        chapters: [
          { title: "Romance Dawn", blurb: "Luffy eats the Gum-Gum Fruit and sets out from his home village to find the One Piece." },
          { title: "Enter the Great Swordsman!", blurb: "Luffy recruits Roronoa Zoro, a bounty-hunting swordsman with his own lofty dream." },
          { title: "Don't Get Fooled Again", blurb: "The two take down a corrupt Marine captain terrorizing a nearby town." },
          { title: "The Black Cat Pirates", blurb: "Nami joins the crew after her true reasons for stealing from pirates come to light." },
          { title: "For Whom the Bell Tolls", blurb: "The crew helps the sharpshooter Usopp defend his village from a hidden threat." },
          { title: "The Oath", blurb: "Usopp officially signs on, and the crew's bond as a found family starts to solidify." },
          { title: "The Crap-Geezer", blurb: "A stop at the floating restaurant Baratie introduces the cook Sanji." },
          { title: "I Won't Die", blurb: "The crew confronts Arlong to free Nami's home village for good." },
          { title: "Tears", blurb: "Nami's painful history is finally revealed to the crew." },
          { title: "OK, Let's Stand Up", blurb: "With Nami officially aboard, the Straw Hats set sail with real momentum behind them." },
        ],
      },
    ],
  },
  {
    slug: "dragon-ball",
    title: "Dragon Ball",
    genres: ["Action", "Adventure", "Fantasy", "Shounen"],
    image: "Image/Img-db-1.jpeg",
    type: "Manga & Anime",
    status: "Completed",
    year: 1984,
    rating: 4.8,
    chapters: "519",
    synopsis:
      "Son Goku's journey from a wild, tailed boy hunting the seven wish-granting Dragon Balls to Earth's strongest defender against alien warlords, androids, and gods. The series that defined the modern shounen fighting formula.",
    arcs: [
      {
        season: "Dragon Ball",
        chapters: [
          { title: "The Monkey King", blurb: "A young Goku meets Bulma, and the search for the seven Dragon Balls begins." },
          { title: "Wish Upon a Dragon", blurb: "The pair set out across the world chasing the wish-granting treasures." },
          { title: "The Training of Kame-Sen'nin", blurb: "Goku begins formal martial-arts training under Master Roshi." },
          { title: "Strongest Under the Heavens", blurb: "Goku enters the World Martial Arts Tournament to test his growth." },
          { title: "The Red Ribbon Army", blurb: "Goku takes on an entire criminal army by himself in pursuit of a Dragon Ball." },
          { title: "Bulma Returns", blurb: "Bulma rejoins Goku for another leg of the adventure." },
          { title: "General Blue and the Pirate Treasure", blurb: "The Red Ribbon Army's General Blue proves a cunning, dangerous foe." },
          { title: "Taopaipai & Master Karin", blurb: "Goku survives an assassination attempt and trains with the cat sage Karin." },
          { title: "Test of the All-Seeing Crone", blurb: "Goku bargains with the fortune-teller Baba for a Dragon Ball." },
          { title: "The Fearful Ginyu Special Force", blurb: "An elite squad is introduced, foreshadowing bigger threats ahead." },
        ],
      },
      {
        season: "Dragon Ball Z",
        chapters: [
          { title: "The World's Greatest Team", blurb: "Earth's warriors band together to prepare for an incoming Saiyan attack." },
          { title: "The Lord of Worlds", blurb: "A powerful new alien threat is introduced beyond the Saiyans." },
          { title: "Earth vs. The Saiyans", blurb: "The Saiyan invasion of Earth finally begins in full force." },
          { title: "Gohan vs. Cell", blurb: "The Cell Saga kicks into gear as a bio-engineered menace awakens." },
          { title: "The Terror of Cell", blurb: "Cell grows stronger, forcing the Z Fighters to change their plans." },
          { title: "The Room of Spirit and Time", blurb: "Goku and Gohan train inside the Hyperbolic Time Chamber to prepare for Cell." },
          { title: "The Cell Game", blurb: "Cell hosts his own martial arts tournament to showcase his power." },
          { title: "Gohan vs. Cell (Part II)", blurb: "The Cell Saga reaches its climactic final confrontation." },
          { title: "The Ultimate Sacrifice", blurb: "A pivotal, costly decision changes the course of the fight." },
          { title: "Death of a Warrior", blurb: "One of the series' most emotional turning points unfolds." },
          { title: "The Super Saiyan", blurb: "The Super Saiyan transformation is introduced to the wider world." },
        ],
      },
      {
        season: "Dragon Ball Super",
        chapters: [
          { title: "Warriors from Universe 6", blurb: "Fighters from a parallel universe are introduced for the first time." },
          { title: "Zero Mortal Project", blurb: "A god-tier threat targets entire universes for erasure." },
          { title: "The Decisive Battle! Farewell, Trunks!", blurb: "Future Trunks returns to confront a threat from his own broken timeline." },
          { title: "Universe Survival", blurb: "The multiverse-spanning Tournament of Power begins." },
          { title: "Battle's End and Aftermath", blurb: "The fallout of the Tournament of Power reshapes the surviving universes." },
          { title: "Goku vs. Vegeta", blurb: "The series' defining rivalry gets yet another chapter." },
          { title: "Merus's True Identity", blurb: "A mysterious ally's real nature is finally revealed." },
        ],
      },
      {
        season: "Dragon Ball GT",
        chapters: [
          { title: "Goku's Side-Story! A Grand Problem", blurb: "A wish gone wrong sets an unexpected new adventure in motion." },
          { title: "Lost in Space", blurb: "Goku, Trunks, and Pan set off on a journey across the stars." },
          { title: "Baby", blurb: "A new parasitic antagonist begins quietly taking over Earth's strongest fighters." },
          { title: "Dragon Ball Baby", blurb: "Baby's threat escalates as the heroes struggle to keep up." },
          { title: "Goku vs. Vegeta", blurb: "Old rivals clash again under very different circumstances." },
          { title: "The Three-Star Dragon", blurb: "A new Dragon Ball-fueled saga begins to take shape." },
          { title: "Earth vs. The Dragon Balls", blurb: "The Dragon Balls themselves become an unlikely source of danger." },
          { title: "The Shadow Dragons", blurb: "The series builds toward its final, darkest antagonists." },
          { title: "Dragon Ball AF?", blurb: "The saga winds toward its conclusion." },
        ],
      },
    ],
  },
  {
    slug: "naruto",
    title: "Naruto",
    genres: ["Action", "Adventure", "Shounen", "Fantasy"],
    image: "Image/Img-n-1.jpg",
    type: "Manga & Anime",
    status: "Completed",
    year: 1999,
    rating: 4.7,
    chapters: "700",
    synopsis:
      "An outcast ninja carrying a sealed demon fox inside him claws his way from village punchline to the strongest shinobi alive, chasing the title of Hokage and, along the way, trying to save his best friend from himself.",
    arcs: [
      {
        season: "Naruto",
        chapters: [
          { title: "Uzumaki Naruto", blurb: "Naruto is introduced as the class outcast with an outsized dream of becoming Hokage." },
          { title: "The Worst Client", blurb: "A simple bridge-building mission turns out to be far more dangerous than it looked." },
          { title: "For the Sake of Dreams…!!", blurb: "Naruto pushes past his fear to protect his teammates for the first time." },
          { title: "Hero's Bridge!!", blurb: "The Land of Waves arc closes as a village names its bridge in Naruto's honor." },
          { title: "The Challengers!!", blurb: "The Chunin Exams open with a brutal, trap-filled written test." },
          { title: "Predator", blurb: "A dangerous presence lurks over the exam's deadly second stage." },
          { title: "The Path You Should Tread", blurb: "A quiet moment of mentorship helps shape Naruto's resolve." },
          { title: "Life-and-Death Battles", blurb: "The preliminary Chunin Exam matches turn out to be no-holds-barred." },
          { title: "Neji vs. Hinata", blurb: "Hinata stands up to her prodigious cousin Neji, whatever the cost." },
          { title: "A Splendid Ninja", blurb: "Naruto reflects on what it actually means to be a shinobi." },
        ],
      },
    ],
  },
  {
    slug: "one-punch-man",
    title: "One Punch Man",
    genres: ["Action", "Comedy", "Sci-Fi", "Seinen"],
    image: "Image/Img-opm-1.jpeg",
    type: "Manga & Anime",
    status: "Ongoing",
    year: 2012,
    rating: 4.8,
    chapters: "180+",
    synopsis:
      "Saitama trained so hard he became unbeatable — and now every fight ends in one punch, which is exactly the problem. A deadpan superhero comedy about the emptiness of winning too easily.",
    arcs: [
      {
        season: "One Punch Man",
        chapters: [
          { title: "The Hero's Journey", blurb: "Saitama's flatly ordinary daily life is introduced, hero career and all." },
          { title: "The Challenge of the Strongest", blurb: "Saitama makes short work of the meteor-riding villain Vaccine Man." },
          { title: "Observation Journal", blurb: "Saitama crosses paths with Genos, a cyborg looking for a mentor." },
          { title: "Ground-Breaking Punch", blurb: "Saitama's overwhelming power is put on full, casual display." },
          { title: "The Ultimate Master", blurb: "Saitama meets Silver Fang, one of the few heroes he genuinely respects." },
        ],
      },
    ],
  },
  {
    slug: "attack-on-titan",
    title: "Attack on Titan",
    genres: ["Action", "Horror", "Drama", "Mystery"],
    image: "Image/Img-aot-1.jpeg",
    type: "Manga & Anime",
    status: "Completed",
    year: 2009,
    rating: 4.9,
    chapters: "139",
    synopsis:
      "Humanity lives caged behind three walls to keep out flesh-eating Titans — until the wall breaks. What starts as a survival story spirals into a generational war about freedom, hatred, and who gets to write history.",
    arcs: [
      {
        season: "attack-on-titan",
        chapters: [
          { title: "Fall of Shiganshina", blurb: "The Colossal Titan breaches Wall Maria, and Eren watches his mother die." },
          { title: "The 104th Training Corps", blurb: "Eren, Mikasa, and Armin train to join the fight against the Titans." },
          { title: "Battle of Trost District", blurb: "A desperate stand to reclaim a Titan-overrun town reveals Eren's true nature." },
          { title: "The Female Titan", blurb: "A mysterious Titan infiltrates the Survey Corps' ranks." },
        ],
      },
    ],
  },
  {
    slug: "demon-slayer",
    title: "Demon Slayer: Kimetsu no Yaiba",
    genres: ["Action", "Supernatural", "Historical", "Shounen"],
    image: "Image/Img-ds-1.jpeg",
    type: "Manga & Anime",
    status: "Completed",
    year: 2016,
    rating: 4.8,
    chapters: "205",
    synopsis:
      "After demons slaughter his family and curse his sister, Tanjiro sets out on a sword-swinging journey through Taisho-era Japan to find a cure — and to understand what actually makes something a monster.",
    arcs: [
      {
        season: "demon-slayer",
        chapters: [
          { title: "Cruelty", blurb: "Tanjiro finds his family slaughtered and his sister Nezuko turned into a demon." },
          { title: "Sabito and Makomo", blurb: "Tanjiro trains under a demon slayer to become strong enough to protect Nezuko." },
          { title: "Final Selection", blurb: "Tanjiro survives a deadly demon-infested trial to become an official Demon Slayer." },
          { title: "Muzan Kibutsuji", blurb: "Tanjiro gets his first real encounter with the demon who started it all." },
        ],
      },
    ],
  },
  {
    slug: "my-hero-academia",
    title: "My Hero Academia",
    genres: ["Action", "Shounen", "Fantasy"],
    image: "Image/Img-mha-1.jpeg",
    type: "Manga & Anime",
    status: "Completed",
    year: 2014,
    rating: 4.6,
    chapters: "430",
    synopsis:
      "In a world where almost everyone is born with a superpower, Izuku Midoriya is one of the unlucky few who isn't — until the world's greatest hero decides that doesn't have to matter.",
    arcs: [
      {
        season: "my-hero-academia",
        chapters: [
          { title: "Izuku Midoriya: Origin", blurb: "Izuku is told his dream of being a hero is impossible, until one hero disagrees." },
          { title: "All Might", blurb: "Izuku inherits the power of One For All from his idol." },
          { title: "Roaring Muscles", blurb: "Izuku begins brutal training to control his dangerous new power." },
          { title: "Rage, You Damn Nerd", blurb: "Izuku's rivalry with Bakugo turns into their first real test at U.A." },
        ],
      },
    ],
  },
  {
    slug: "bleach",
    title: "Bleach",
    genres: ["Action", "Supernatural", "Shounen"],
    image: "Image/Img-b-1.png",
    type: "Manga & Anime",
    status: "Completed",
    year: 2001,
    rating: 4.6,
    chapters: "686",
    synopsis:
      "Ichigo Kurosaki has always been able to see ghosts. That gets a lot more complicated when a Soul Reaper hands him her powers, and he's suddenly on the front line of a war between the living, the dead, and things that eat both.",
    arcs: [
      {
        season: "bleach",
        chapters: [
          { title: "Death and Strawberry", blurb: "Ichigo accidentally inherits a Soul Reaper's powers to save his family." },
          { title: "Shattered Blade", blurb: "Ichigo trains to master his new abilities as Hollows start attacking his town." },
          { title: "Rescue Rukia", blurb: "Ichigo storms the Soul Society to save Rukia from execution." },
          { title: "The Blade and Me", blurb: "Ichigo confronts the truth about where his power really came from." },
        ],
      },
    ],
  },
  {
    slug: "tokyo-ghoul",
    title: "Tokyo Ghoul",
    genres: ["Horror", "Psychological", "Supernatural"],
    image: "Image/Img-tg-1.jpeg",
    type: "Manga & Anime",
    status: "Completed",
    year: 2011,
    rating: 4.4,
    chapters: "143",
    synopsis:
      "A quiet college student survives an attack that leaves him half-ghoul, forced to feed on human flesh to live. A slow, unsettling descent into what identity means once you no longer fit in either world.",
    arcs: [
      {
        season: "tokyo-ghoul",
        chapters: [
          { title: "Tragedy", blurb: "A date goes horribly wrong and changes Kaneki's life forever." },
          { title: "Incubation", blurb: "Kaneki wakes up half-ghoul and struggles to understand what he's become." },
          { title: "Coffee", blurb: "Kaneki finds an uneasy refuge among ghouls trying to live without killing." },
          { title: "Raid", blurb: "Investigators close in on Kaneki's fragile new world." },
        ],
      },
    ],
  },
  {
    slug: "detective-conan",
    title: "Detective Conan",
    genres: ["Mystery", "Thriller"],
    image: "Image/Img-dc-1.jpeg",
    type: "Manga & Anime",
    status: "Ongoing",
    year: 1994,
    rating: 4.7,
    chapters: "1100+",
    synopsis:
      "Ace teen detective Shinichi Kudo is poisoned by a criminal syndicate and wakes up shrunk into a child's body. Hiding his identity, he solves cases as 'Conan Edogawa' while hunting the organization that did this to him.",
    arcs: [
      {
        season: "detective-conan",
        chapters: [
          { title: "The Heisei Holmes", blurb: "Ace teen detective Shinichi Kudo solves his first cases with ease." },
          { title: "The Poison That Shrunk a Detective", blurb: "Shinichi is forced to swallow an experimental poison and wakes up as a child." },
          { title: "Case Closed, Sort Of", blurb: "Hiding his identity, he moves in with a childhood friend to stay close to the case." },
          { title: "The Men in Black", blurb: "He begins quietly investigating the organization that did this to him." },
        ],
      },
    ],
  },
  {
    slug: "death-note",
    title: "Death Note",
    genres: ["Mystery", "Psychological", "Thriller", "Supernatural"],
    image: "Image/Img-dn-1.jpeg",
    type: "Manga & Anime",
    status: "Completed",
    year: 2003,
    rating: 4.9,
    chapters: "108",
    synopsis:
      "A bored genius finds a notebook that kills anyone whose name is written in it — and decides to remake the world as judge, jury, and executioner. What follows is a cat-and-mouse duel against the one detective who can catch him.",
    arcs: [
      {
        season: "death-note",
        chapters: [
          { title: "Boredom", blurb: "Light Yagami finds a notebook that can kill anyone whose name is written in it." },
          { title: "Confrontation", blurb: "Light begins secretly executing criminals under the alias \"Kira.\"" },
          { title: "Deduction", blurb: "The detective known only as L takes the case and starts closing in on Kira." },
          { title: "Rules", blurb: "The full rules of the Death Note begin to reshape the game between them." },
        ],
      },
    ],
  },
  {
    slug: "hunter-x-hunter",
    title: "Hunter x Hunter",
    genres: ["Action", "Adventure", "Fantasy", "Shounen"],
    image: "Image/Img-hxh-1.jpeg",
    type: "Manga & Anime",
    status: "Ongoing",
    year: 1998,
    rating: 4.9,
    chapters: "400+",
    synopsis:
      "Gon Freecss sets out to become a licensed Hunter and track down the father who abandoned him — a simple premise that unfolds into one of shounen's most inventive power systems and morally tangled arcs.",
    arcs: [
      {
        season: "hunter-x-hunter",
        chapters: [
          { title: "Departure", blurb: "Gon leaves his island home to find the father who abandoned him." },
          { title: "Test of Tests", blurb: "Gon takes the brutal Hunter Exam alongside Kurapika, Leorio, and Killua." },
          { title: "Trick Tower", blurb: "The exam's remaining candidates face a series of deadly, twisted trials." },
          { title: "Kiriko's Test", blurb: "Gon and his new friends push toward the exam's final stage." },
        ],
      },
    ],
  },
  {
    slug: "gintama",
    title: "Gintama",
    genres: ["Comedy", "Action", "Sci-Fi"],
    image: "Image/covers/gintama.svg",
    type: "Manga & Anime",
    status: "Completed",
    year: 2003,
    rating: 4.7,
    chapters: "704",
    synopsis:
      "Aliens conquered Edo-era Japan and banned swords — so ex-samurai Gintoki takes odd jobs instead. A gag-a-minute comedy that can turn shockingly sincere the moment you let your guard down.",
    arcs: [
      {
        season: "gintama",
        chapters: [
          { title: "The Man Who Hates Vegetables", blurb: "Ex-samurai Gintoki takes on odd jobs in an alien-occupied Edo." },
          { title: "Attack of the Genderless Mayora", blurb: "The Yorozuya's day-to-day chaos gets weirder than usual." },
          { title: "Ketsuno Ana Loves the Rain", blurb: "Sincerity sneaks up in the middle of the show's usual absurdity." },
          { title: "The Shogun's Tea Ceremony", blurb: "Gintoki's past as a warrior starts to surface." },
        ],
      },
    ],
  },
  {
    slug: "fate-stay-night",
    title: "Fate/Stay Night",
    genres: ["Action", "Fantasy", "Supernatural"],
    image: "Image/covers/fate-stay-night.svg",
    type: "Anime & Visual Novel",
    status: "Completed",
    year: 2004,
    rating: 4.3,
    chapters: "24 eps",
    synopsis:
      "Seven mages summon legendary heroes as familiars to fight to the death for a wish-granting relic. Shirou Emiya gets pulled into the war on the side of Saber, a king with a secret identity and a stricter code of honor than he expects.",
    arcs: [
      {
        season: "fate-stay-night",
        chapters: [
          { title: "Contract", blurb: "Shirou Emiya accidentally summons Saber into the Holy Grail War." },
          { title: "Sword", blurb: "Shirou learns the brutal rules of a war between mages and their Servants." },
          { title: "Assassin", blurb: "The first real threat to Shirou and Saber's fragile alliance appears." },
          { title: "Unlimited Blade Works", blurb: "Shirou's own hidden power begins to surface." },
        ],
      },
    ],
  },
  {
    slug: "sword-art-online",
    title: "Sword Art Online",
    genres: ["Action", "Adventure", "Isekai", "Sci-Fi"],
    image: "Image/covers/sword-art-online.svg",
    type: "Manga & Anime",
    status: "Ongoing",
    year: 2009,
    rating: 4.0,
    chapters: "30+ vols",
    synopsis:
      "Ten thousand players log into a full-dive VR MMO on launch day and discover there's no logout button — die in the game, die for real. Kirito has to fight, and survive, all the way to the top floor.",
    arcs: [
      {
        season: "sword-art-online",
        chapters: [
          { title: "Swordsman in the Steel Dungeon", blurb: "Ten thousand players log into a VR MMO with no way to log out." },
          { title: "Beater", blurb: "Kirito is branded an outcast for trying to survive without relying on others." },
          { title: "The Black Swordsman", blurb: "Kirito builds an uneasy reputation as he climbs the game's floors." },
          { title: "Red-Nosed Reindeer", blurb: "A rare truce forms as players band together against a floor boss." },
        ],
      },
    ],
  },
  {
    slug: "fullmetal-alchemist-brotherhood",
    title: "Fullmetal Alchemist: Brotherhood",
    genres: ["Action", "Adventure", "Fantasy", "Drama"],
    image: "Image/covers/fullmetal-alchemist-brotherhood.svg",
    type: "Manga & Anime",
    status: "Completed",
    year: 2009,
    rating: 4.9,
    chapters: "108",
    synopsis:
      "Two brothers break alchemy's greatest taboo trying to bring their mother back and pay for it with their bodies. Their search for a cure uncovers a conspiracy that runs to the top of their country's military.",
    arcs: [
      {
        season: "fullmetal-alchemist-brotherhood",
        chapters: [
          { title: "Fullmetal Alchemist", blurb: "Two brothers pay a horrific price for breaking alchemy's greatest taboo." },
          { title: "The First Day", blurb: "Edward and Alphonse begin their search for a way to restore their bodies." },
          { title: "City of Heresy", blurb: "The brothers uncover a conspiracy in a town that shouldn't exist." },
          { title: "Mother", blurb: "The truth about what they lost starts to come into focus." },
        ],
      },
    ],
  },
  {
    slug: "black-clover",
    title: "Black Clover",
    genres: ["Action", "Fantasy", "Shounen"],
    image: "Image/covers/black-clover.svg",
    type: "Manga & Anime",
    status: "Ongoing",
    year: 2015,
    rating: 4.3,
    chapters: "370+",
    synopsis:
      "Asta is the only person in his generation born with zero magic power, in a kingdom where magic is everything. He grinds his way toward becoming Wizard King on sheer stubbornness and a demon-possessed sword.",
    arcs: [
      {
        season: "black-clover",
        chapters: [
          { title: "Asta and Yuno", blurb: "Two orphans dream of becoming the next Wizard King." },
          { title: "Team Grudge Match", blurb: "Asta and Yuno are placed into rival magic knight squads." },
          { title: "Beginning of a New Legend", blurb: "The Black Bulls' misfit squad gets its first real test." },
          { title: "Uncontrollable", blurb: "Asta's demon-possessed sword proves harder to master than expected." },
        ],
      },
    ],
  },
  {
    slug: "konosuba",
    title: "KonoSuba: God's Blessing on This Wonderful World!",
    genres: ["Comedy", "Fantasy", "Isekai"],
    image: "Image/covers/konosuba.svg",
    type: "Light Novel & Anime",
    status: "Completed",
    year: 2013,
    rating: 4.6,
    chapters: "17 vols",
    synopsis:
      "Kazuma dies embarrassingly and gets a second life in a fantasy world — alongside a goddess who's more of a liability than a blessing. A parody isekai that mocks every trope it uses.",
    arcs: [
      {
        season: "konosuba",
        chapters: [
          { title: "This Explosive World", blurb: "Kazuma dies embarrassingly and wakes up in a fantasy world." },
          { title: "This Beautiful Goddess", blurb: "Kazuma is stuck with a goddess who's more liability than blessing." },
          { title: "This Wonderful Party", blurb: "The party's dysfunction becomes the whole team's biggest obstacle." },
          { title: "This Crappy Demon King's Army", blurb: "Kazuma's first real quest goes exactly as chaotically as expected." },
        ],
      },
    ],
  },
  {
    slug: "log-horizon",
    title: "Log Horizon",
    genres: ["Adventure", "Fantasy", "Isekai"],
    image: "Image/covers/log-horizon.svg",
    type: "Light Novel & Anime",
    status: "Completed",
    year: 2010,
    rating: 4.2,
    chapters: "17 vols",
    synopsis:
      "Thirty thousand players get trapped inside their favorite MMO, and instead of fighting to escape, a guild-less strategist starts building the systems of a real, livable society from the ground up.",
    arcs: [
      {
        season: "log-horizon",
        chapters: [
          { title: "The Apocalypse", blurb: "Thirty thousand players are trapped inside their favorite MMO overnight." },
          { title: "Round Table Coalition", blurb: "Shiroe starts organizing the trapped players into a working society." },
          { title: "The Debut of the Class Reunion", blurb: "Old guildmates reunite to rebuild some sense of normal life." },
          { title: "People of the Land", blurb: "The line between NPCs and players starts to blur in unsettling ways." },
        ],
      },
    ],
  },
  {
    slug: "made-in-abyss",
    title: "Made in Abyss",
    genres: ["Adventure", "Fantasy", "Mystery", "Horror"],
    image: "Image/covers/made-in-abyss.svg",
    type: "Manga & Anime",
    status: "Ongoing",
    year: 2012,
    rating: 4.7,
    chapters: "13 vols",
    synopsis:
      "A bottomless pit swallows anything that tries to climb back out of it — the deeper you go, the worse the toll on your body and mind. A young orphan descends anyway, chasing the mother who vanished into it.",
    arcs: [
      {
        season: "made-in-abyss",
        chapters: [
          { title: "The Girl Who Would Not Give Up", blurb: "Riko explores the edge of a bottomless, treasure-filled pit." },
          { title: "Nanachi", blurb: "A stranger who has already made the deadly descent offers Riko dangerous help." },
          { title: "Value", blurb: "The Abyss demands you pay dearly the deeper you go." },
          { title: "Riko and Reg", blurb: "Riko sets off with a mysterious robot boy to find her missing mother." },
        ],
      },
    ],
  },
  {
    slug: "somali-and-the-forest-spirit",
    title: "Somali and the Forest Spirit",
    genres: ["Adventure", "Fantasy", "Drama"],
    image: "Image/covers/somali-and-the-forest-spirit.svg",
    type: "Manga & Anime",
    status: "Completed",
    year: 2015,
    rating: 4.4,
    chapters: "8 vols",
    synopsis:
      "In a world where humans have all but vanished, a golem forest guardian finds a lost human girl and sets out to reunite her with her own kind — becoming her father in every way that matters along the road.",
    arcs: [
      {
        season: "somali-and-the-forest-spirit",
        chapters: [
          { title: "The Golem and the Little Girl", blurb: "A golem forest guardian finds a lost human child." },
          { title: "A Village of Beast-Folk", blurb: "Somali and her guardian search for other humans, town by town." },
          { title: "Traveling Merchant", blurb: "The pair's journey brings them face-to-face with a hostile world." },
          { title: "Father and Daughter", blurb: "Their bond deepens into something neither of them expected." },
        ],
      },
    ],
  },
  {
    slug: "magi-labyrinth-of-magic",
    title: "Magi: The Labyrinth of Magic",
    genres: ["Adventure", "Fantasy", "Shounen"],
    image: "Image/covers/magi-labyrinth-of-magic.svg",
    type: "Manga & Anime",
    status: "Completed",
    year: 2009,
    rating: 4.4,
    chapters: "37 vols",
    synopsis:
      "A tiny, powerful magi named Aladdin teams up with a former slave, Alibaba, to conquer magical dungeons — an Arabian Nights-flavored adventure about empire, fate, and who gets to choose their own destiny.",
    arcs: [
      {
        season: "magi-labyrinth-of-magic",
        chapters: [
          { title: "The Boy Who Descended From the Sky", blurb: "The tiny, powerful magi Aladdin arrives to conquer magical dungeons." },
          { title: "The Old Man and the Merchant", blurb: "Aladdin meets Alibaba, a former slave with a plan of his own." },
          { title: "Amon's Dungeon", blurb: "The pair take on their first dungeon together." },
          { title: "The Merchant's Ambition", blurb: "Alibaba's motives turn out to be more complicated than they seem." },
        ],
      },
    ],
  },
  {
    slug: "the-promised-neverland",
    title: "The Promised Neverland",
    genres: ["Mystery", "Horror", "Thriller", "Psychological"],
    image: "Image/covers/the-promised-neverland.svg",
    type: "Manga & Anime",
    status: "Completed",
    year: 2016,
    rating: 4.6,
    chapters: "181",
    synopsis:
      "Life at Grace Field House orphanage looks idyllic until three of the smartest kids discover exactly what 'adoption' really means. A tense escape thriller where every move has to out-think the adults in charge.",
    arcs: [
      {
        season: "the-promised-neverland",
        chapters: [
          { title: "121045", blurb: "Life at an idyllic orphanage hides a horrifying truth." },
          { title: "Ejection", blurb: "Emma and Norman discover exactly what \"adoption\" really means." },
          { title: "Which One", blurb: "The children begin quietly plotting an escape from the adults' watchful eyes." },
          { title: "Escape", blurb: "The full weight of what they're up against becomes impossible to ignore." },
        ],
      },
    ],
  },
  {
    slug: "the-rising-of-the-shield-hero",
    title: "The Rising of the Shield Hero",
    genres: ["Action", "Adventure", "Fantasy", "Isekai"],
    image: "Image/covers/the-rising-of-the-shield-hero.svg",
    type: "Manga & Anime",
    status: "Ongoing",
    year: 2013,
    rating: 4.2,
    chapters: "22 vols",
    synopsis:
      "Summoned as one of four legendary heroes, Naofumi is framed for a crime he didn't commit and left with nothing but the weakest-looking weapon in the game — a shield — to survive and clear his name.",
    arcs: [
      {
        season: "the-rising-of-the-shield-hero",
        chapters: [
          { title: "The Cardinal Heroes", blurb: "Naofumi is one of four heroes summoned to save a kingdom." },
          { title: "The Shield Hero's Betrayal", blurb: "Naofumi is framed for a crime he didn't commit." },
          { title: "The Slave and the Shield", blurb: "Naofumi rebuilds his reputation with the help of an unlikely ally." },
          { title: "The Wave", blurb: "The kingdom's real threat finally makes itself known." },
        ],
      },
    ],
  },
  {
    slug: "the-seven-deadly-sins",
    title: "The Seven Deadly Sins",
    genres: ["Action", "Adventure", "Fantasy"],
    image: "Image/covers/the-seven-deadly-sins.svg",
    type: "Manga & Anime",
    status: "Completed",
    year: 2012,
    rating: 4.3,
    chapters: "346",
    synopsis:
      "A disbanded order of outlawed knights, each named after a deadly sin, is called back together to save a kingdom from the very Holy Knights meant to protect it.",
    arcs: [
      {
        season: "the-seven-deadly-sins",
        chapters: [
          { title: "The Sins' Reunion", blurb: "A disbanded order of outlawed knights is called back together." },
          { title: "The Great Fight Festival", blurb: "Old rivalries resurface the moment the Sins reunite." },
          { title: "The Sins Gather", blurb: "Meliodas begins tracking down his scattered former comrades." },
          { title: "Diane the Serpent's Sin", blurb: "Each Sin's own complicated past starts to surface." },
        ],
      },
    ],
  },
  {
    slug: "vinland-saga",
    title: "Vinland Saga",
    genres: ["Action", "Adventure", "Historical", "Drama"],
    image: "Image/covers/vinland-saga.svg",
    type: "Manga & Anime",
    status: "Ongoing",
    year: 2005,
    rating: 4.9,
    chapters: "200+",
    synopsis:
      "A young Viking raised for vengeance chases the man who killed his father across raids and wars — until he starts asking what a true warrior, and a true life, are actually supposed to look like.",
    arcs: [
      {
        season: "vinland-saga",
        chapters: [
          { title: "The Journey Begins", blurb: "A young Viking is raised for nothing but vengeance." },
          { title: "Vinland", blurb: "Thors dreams of a peaceful land far from war, one his son doesn't yet understand." },
          { title: "Ambush", blurb: "Thorfinn's world is shattered, setting him on his path of revenge." },
          { title: "The Troll of the Battlefield", blurb: "Thorfinn earns a name for himself the only way he knows how." },
        ],
      },
    ],
  },
  {
    slug: "fruits-basket",
    title: "Fruits Basket",
    genres: ["Romance", "Drama", "Slice of Life", "Shoujo"],
    image: "Image/covers/fruits-basket.svg",
    type: "Manga & Anime",
    status: "Completed",
    year: 1998,
    rating: 4.7,
    chapters: "136",
    synopsis:
      "An orphaned girl moves in with a family cursed to turn into zodiac animals whenever they're hugged by the opposite sex. A gentle, healing story about trauma, family, and letting people love you.",
    arcs: [
      {
        season: "fruits-basket",
        chapters: [
          { title: "The Prince's Butterflies", blurb: "An orphaned girl stumbles into the secret of the cursed Sohma family." },
          { title: "Somebody", blurb: "Tohru learns why hugging certain Sohmas turns them into zodiac animals." },
          { title: "Fruits Basket", blurb: "Living with the family means slowly untangling all their hidden pain." },
          { title: "Say Something", blurb: "Old wounds within the Sohma family start to surface." },
        ],
      },
    ],
  },
  {
    slug: "toradora",
    title: "Toradora!",
    genres: ["Romance", "Comedy", "Slice of Life", "Shoujo"],
    image: "Image/covers/toradora.svg",
    type: "Light Novel & Anime",
    status: "Completed",
    year: 2006,
    rating: 4.6,
    chapters: "10 vols",
    synopsis:
      "A gentle-looking delinquent and the tiny, terrifying 'Palmtop Tiger' of the class team up to help each other land their respective crushes — and slowly realize they make more sense together than either pairing did.",
    arcs: [
      {
        season: "toradora",
        chapters: [
          { title: "Tiger and Dragon", blurb: "A gentle-looking delinquent and the tiny, terrifying \"Palmtop Tiger\" cross paths." },
          { title: "Everybody's Justice", blurb: "The two agree to help each other land their respective crushes." },
          { title: "Cultural Festival de Gozaru", blurb: "Their fake-partnership plan gets complicated fast." },
          { title: "Christmas Eve", blurb: "Feelings neither of them expected start getting harder to ignore." },
        ],
      },
    ],
  },
  {
    slug: "haikyuu",
    title: "Haikyuu!!",
    genres: ["Sports", "Shounen", "Comedy", "Drama"],
    image: "Image/covers/haikyuu.svg",
    type: "Manga & Anime",
    status: "Completed",
    year: 2012,
    rating: 4.8,
    chapters: "402",
    synopsis:
      "Short, stubborn, and obsessed with volleyball, Hinata joins forces with his talented rival-turned-teammate Kageyama to drag a nothing high school team back onto the national stage.",
    arcs: [
      {
        season: "haikyuu",
        chapters: [
          { title: "The View From the Top", blurb: "Hinata falls in love with volleyball after one crushing defeat." },
          { title: "The Miracle Boy vs. the King of the Court", blurb: "Hinata and his rival Kageyama end up on the same team." },
          { title: "Battle", blurb: "The two learn to turn their rivalry into teamwork." },
          { title: "Karasuno, Landing", blurb: "A nothing high school team starts clawing its way back to relevance." },
        ],
      },
    ],
  },
  {
    slug: "neon-genesis-evangelion",
    title: "Neon Genesis Evangelion",
    genres: ["Mecha", "Sci-Fi", "Psychological", "Drama"],
    image: "Image/covers/neon-genesis-evangelion.svg",
    type: "Anime",
    status: "Completed",
    year: 1995,
    rating: 4.5,
    chapters: "26 eps",
    synopsis:
      "A withdrawn teenager is drafted to pilot a giant bio-mechanical mech against god-like invaders — and the show is far more interested in what that does to his mind than in the mechs themselves.",
    arcs: [
      {
        season: "neon-genesis-evangelion",
        chapters: [
          { title: "Angel Attack", blurb: "Shinji is drafted to pilot a giant bio-mechanical mech against an invading Angel." },
          { title: "The Beast", blurb: "Shinji struggles to understand why he was chosen for this at all." },
          { title: "A Transfer", blurb: "New pilots arrive, each carrying their own damage." },
          { title: "Hedgehog's Dilemma", blurb: "The show's real focus becomes what all of this is doing to them." },
        ],
      },
    ],
  },
  {
    slug: "spy-x-family",
    title: "Spy x Family",
    genres: ["Comedy", "Action", "Slice of Life", "Shounen"],
    image: "Image/covers/spy-x-family.svg",
    type: "Manga & Anime",
    status: "Ongoing",
    year: 2019,
    rating: 4.8,
    chapters: "100+",
    synopsis:
      "A spy, an assassin, and a telepath form a fake family for their own secret reasons — and none of them know the others' true identity. A warm, funny spy comedy about accidentally becoming a real family anyway.",
    arcs: [
      {
        season: "spy-x-family",
        chapters: [
          { title: "Operation Strix", blurb: "A spy needs a fake family, fast, for a top-secret mission." },
          { title: "The Spy's Turbulent New Life", blurb: "Loid adopts a daughter with a secret of her own." },
          { title: "The Wife Is Also Well-Informed", blurb: "Loid's new \"wife\" turns out to be hiding something too." },
          { title: "Prepare for the Interview", blurb: "Getting into the right school proves harder than any mission." },
        ],
      },
    ],
  },
  {
    slug: "violet-evergarden",
    title: "Violet Evergarden",
    genres: ["Drama", "Slice of Life", "Fantasy", "Josei"],
    image: "Image/covers/violet-evergarden.svg",
    type: "Light Novel & Anime",
    status: "Completed",
    year: 2015,
    rating: 4.7,
    chapters: "5 vols",
    synopsis:
      "A former child soldier who only knew how to fight becomes a letter-writer for hire, and through other people's words she slowly learns to understand — and grieve — her own feelings.",
    arcs: [
      {
        season: "violet-evergarden",
        chapters: [
          { title: "Violet Evergarden", blurb: "A former child soldier who only knew how to fight starts a new job." },
          { title: "Dear Sir", blurb: "Violet becomes a letter-writer for hire, translating other people's feelings." },
          { title: "Beloved Ashes and I", blurb: "Each letter written for someone else quietly teaches Violet about her own." },
          { title: "I Love You", blurb: "Words she was once told keep surfacing, and she starts to understand them." },
        ],
      },
    ],
  },
  {
    slug: "mushoku-tensei",
    title: "Mushoku Tensei",
    genres: ["Isekai", "Fantasy", "Drama"],
    image: "Image/covers/mushoku-tensei.svg",
    type: "Light Novel & Anime",
    status: "Ongoing",
    year: 2014,
    rating: 4.3,
    chapters: "26 vols",
    synopsis:
      "A directionless 34-year-old gets a second chance at life as a mage in a fantasy world — and this time, he's determined to actually try, one small act of self-improvement at a time.",
    arcs: [
      {
        season: "mushoku-tensei",
        chapters: [
          { title: "Jobless Reincarnation", blurb: "A directionless man gets an unexpected second chance at life." },
          { title: "Infancy", blurb: "Reborn as a baby, he starts over with everything he knows." },
          { title: "Boyhood", blurb: "He begins training in magic, determined not to waste this life too." },
          { title: "Trouble", blurb: "His new family's own complications start to catch up with him." },
        ],
      },
    ],
  },
  {
    slug: "chainsaw-man",
    title: "Chainsaw Man",
    genres: ["Action", "Horror", "Supernatural", "Seinen"],
    image: "Image/covers/chainsaw-man.svg",
    type: "Manga & Anime",
    status: "Ongoing",
    year: 2018,
    rating: 4.8,
    chapters: "170+",
    synopsis:
      "A debt-ridden devil hunter merges with his pet chainsaw devil and becomes a weapon of the state — trading one kind of poverty for a much stranger one, chasing the simplest dreams in the goriest possible world.",
    arcs: [
      {
        season: "chainsaw-man",
        chapters: [
          { title: "Dog & Chainsaw", blurb: "A debt-ridden devil hunter merges with his pet chainsaw devil." },
          { title: "The Place Where Pochita Is", blurb: "Denji becomes a weapon of the state in exchange for a simple life." },
          { title: "Arrival in Tokyo", blurb: "Denji's new life as a Public Safety devil hunter begins." },
          { title: "Rescue", blurb: "His first real mission tests exactly how far he's willing to go." },
        ],
      },
    ],
  },

  /* ---------------- added in this update: 18 new titles ---------------- */
  {
    slug: "berserk",
    title: "Berserk",
    genres: ["Action", "Fantasy", "Horror", "Seinen"],
    image: "Image/covers/berserk.svg",
    type: "Manga & Anime",
    status: "Ongoing",
    year: 1989,
    rating: 4.9,
    chapters: "380+",
    synopsis:
      "Guts, a lone mercenary branded by a demonic pact, cuts his way across a brutal medieval world hunting the man who betrayed him. Equal parts war epic and horror story, it's one of the most influential dark fantasy series ever drawn.",
  },
  {
    slug: "vagabond",
    title: "Vagabond",
    genres: ["Action", "Historical", "Drama", "Seinen"],
    image: "Image/covers/vagabond.svg",
    type: "Manga",
    status: "Ongoing",
    year: 1998,
    rating: 4.8,
    chapters: "327",
    synopsis:
      "A loose retelling of the life of real swordsman Musashi Miyamoto, following his transformation from a feral, violent youth into someone chasing what it actually means to be strong. Painted with some of the most striking brushwork in manga.",
  },
  {
    slug: "jujutsu-kaisen",
    title: "Jujutsu Kaisen",
    genres: ["Action", "Supernatural", "Horror", "Shounen"],
    image: "Image/covers/jujutsu-kaisen.svg",
    type: "Manga & Anime",
    status: "Completed",
    year: 2018,
    rating: 4.8,
    chapters: "271",
    synopsis:
      "Yuji Itadori swallows a cursed talisman to save his friends and ends up sharing his body with a powerful curse. He's recruited into a secret school that trains exorcists to fight the monsters born from human negativity.",
  },
  {
    slug: "frieren-beyond-journeys-end",
    title: "Frieren: Beyond Journey's End",
    genres: ["Adventure", "Fantasy", "Drama", "Shounen"],
    image: "Image/covers/frieren-beyond-journeys-end.svg",
    type: "Manga & Anime",
    status: "Ongoing",
    year: 2020,
    rating: 4.9,
    chapters: "150+",
    synopsis:
      "An elf mage who outlives her human companions by centuries sets out on a slower, quieter journey after the hero's party disbands, reckoning with all the moments she didn't stop to appreciate the first time around.",
  },
  {
    slug: "monster",
    title: "Monster",
    genres: ["Psychological", "Thriller", "Mystery", "Seinen"],
    image: "Image/covers/monster.svg",
    type: "Manga & Anime",
    status: "Completed",
    year: 1994,
    rating: 4.8,
    chapters: "162",
    synopsis:
      "A gifted surgeon in Germany saves a boy's life on the operating table, then spends the next decade hunting him down after realizing exactly what he saved. A slow-burn psychological thriller about the cost of doing the right thing.",
  },
  {
    slug: "steins-gate",
    title: "Steins;Gate",
    genres: ["Sci-Fi", "Thriller", "Drama"],
    image: "Image/covers/steins-gate.svg",
    type: "Anime",
    status: "Completed",
    year: 2011,
    rating: 4.9,
    chapters: "24 episodes",
    synopsis:
      "A self-styled mad scientist accidentally invents a way to send text messages into the past, and quickly learns that even small changes to history come with consequences no one asked for.",
  },
  {
    slug: "code-geass",
    title: "Code Geass",
    genres: ["Sci-Fi", "Action", "Mecha", "Drama"],
    image: "Image/covers/code-geass.svg",
    type: "Anime",
    status: "Completed",
    year: 2006,
    rating: 4.7,
    chapters: "25 episodes",
    synopsis:
      "An exiled prince gains the power to command absolute obedience with a single order and uses it to lead a rebellion against the empire that took everything from him — while piloting mechs on the side.",
  },
  {
    slug: "cowboy-bebop",
    title: "Cowboy Bebop",
    genres: ["Sci-Fi", "Action", "Adventure"],
    image: "Image/covers/cowboy-bebop.svg",
    type: "Anime",
    status: "Completed",
    year: 1998,
    rating: 4.7,
    chapters: "26 episodes",
    synopsis:
      "A crew of bounty hunters drifts through a jazz-scored solar system chasing paychecks and outrunning their own pasts. Widely considered one of the best-crafted anime ever made, genre mash-up and all.",
  },
  {
    slug: "your-lie-in-april",
    title: "Your Lie in April",
    genres: ["Drama", "Romance", "Slice of Life", "Shounen"],
    image: "Image/covers/your-lie-in-april.svg",
    type: "Manga & Anime",
    status: "Completed",
    year: 2011,
    rating: 4.6,
    chapters: "44",
    synopsis:
      "A piano prodigy who lost the ability to hear his own playing after his mother's death is pulled back toward music by a free-spirited violinist. Devastating in the best way.",
  },
  {
    slug: "mob-psycho-100",
    title: "Mob Psycho 100",
    genres: ["Action", "Comedy", "Supernatural", "Shounen"],
    image: "Image/covers/mob-psycho-100.svg",
    type: "Manga & Anime",
    status: "Completed",
    year: 2012,
    rating: 4.7,
    chapters: "101",
    synopsis:
      "A painfully ordinary middle schooler happens to have terrifying psychic powers he'd rather not use. From the creator of One Punch Man — funnier than it has any right to be, and unexpectedly tender.",
  },
  {
    slug: "blue-lock",
    title: "Blue Lock",
    genres: ["Sports", "Shounen", "Psychological"],
    image: "Image/covers/blue-lock.svg",
    type: "Manga & Anime",
    status: "Ongoing",
    year: 2018,
    rating: 4.5,
    chapters: "280+",
    synopsis:
      "After a disastrous World Cup, Japan's football federation locks 300 strikers in a training facility with one goal: forge the most selfish, most effective goal-scorer the sport has ever seen.",
  },
  {
    slug: "slam-dunk",
    title: "Slam Dunk",
    genres: ["Sports", "Shounen", "Comedy"],
    image: "Image/covers/slam-dunk.svg",
    type: "Manga & Anime",
    status: "Completed",
    year: 1990,
    rating: 4.7,
    chapters: "276",
    synopsis:
      "A delinquent with a massive chip on his shoulder joins his high school's basketball team to impress a girl and ends up falling for the sport itself. The blueprint for basically every sports manga that followed.",
  },
  {
    slug: "yu-yu-hakusho",
    title: "Yu Yu Hakusho",
    genres: ["Action", "Adventure", "Supernatural", "Shounen"],
    image: "Image/covers/yu-yu-hakusho.svg",
    type: "Manga & Anime",
    status: "Completed",
    year: 1990,
    rating: 4.6,
    chapters: "175",
    synopsis:
      "A teenage delinquent dies saving a kid from traffic and is given a second chance as a spirit detective, policing the border between the human world and the demon world.",
  },
  {
    slug: "assassination-classroom",
    title: "Assassination Classroom",
    genres: ["Comedy", "Action", "Shounen"],
    image: "Image/covers/assassination-classroom.svg",
    type: "Manga & Anime",
    status: "Completed",
    year: 2012,
    rating: 4.6,
    chapters: "180",
    synopsis:
      "A tentacled, super-powered creature that destroyed the moon agrees to teach a class of outcast students — on the condition that they try to assassinate him before graduation. Somehow it's also a genuinely warm story about being a good teacher.",
  },
  {
    slug: "the-apothecary-diaries",
    title: "The Apothecary Diaries",
    genres: ["Mystery", "Historical", "Drama", "Josei"],
    image: "Image/covers/the-apothecary-diaries.svg",
    type: "Manga & Anime",
    status: "Ongoing",
    year: 2017,
    rating: 4.6,
    chapters: "60+",
    synopsis:
      "A poison-obsessed apothecary sold into palace servitude uses her knowledge of herbs and toxins to solve mysteries the court physicians can't, one poisoning, curse, and cover-up at a time.",
  },
  {
    slug: "solo-leveling",
    title: "Solo Leveling",
    genres: ["Action", "Fantasy", "Adventure"],
    image: "Image/covers/solo-leveling.svg",
    type: "Manhwa & Anime",
    status: "Completed",
    year: 2018,
    rating: 4.8,
    chapters: "179",
    synopsis:
      "The weakest hunter alive gets a second chance when a mysterious system starts letting him level up like a game character — while everyone else around him is stuck at their max. A Korean manhwa turned global phenomenon.",
  },
  {
    slug: "kaguya-sama-love-is-war",
    title: "Kaguya-sama: Love is War",
    genres: ["Comedy", "Romance", "Psychological", "Seinen"],
    image: "Image/covers/kaguya-sama-love-is-war.svg",
    type: "Manga & Anime",
    status: "Completed",
    year: 2015,
    rating: 4.7,
    chapters: "281",
    synopsis:
      "Two student council elites are obviously in love with each other, and both are too proud to confess first — so they wage an elaborate, increasingly absurd psychological war to make the other one crack.",
  },
  {
    slug: "horimiya",
    title: "Horimiya",
    genres: ["Romance", "Comedy", "Slice of Life", "Shoujo"],
    image: "Image/covers/horimiya.svg",
    type: "Manga & Anime",
    status: "Completed",
    year: 2011,
    rating: 4.5,
    chapters: "134",
    synopsis:
      "A popular girl and a quiet boy discover they're both hiding a completely different side of themselves outside of school, and end up falling for the versions of each other nobody else gets to see.",
  },
];

// All genres shown in the nav + browse filters, derived once from the data
// plus a couple of extras the original nav promised but had no titles for yet.
const ALL_GENRES = Array.from(
  new Set([
    ...ANIME_DATA.flatMap((a) => a.genres),
    "Sci-Fi",
    "Slice of Life",
    "Supernatural",
    "Historical",
  ])
).sort();

if (typeof module !== "undefined") {
  module.exports = { ANIME_DATA, ALL_GENRES };
}
