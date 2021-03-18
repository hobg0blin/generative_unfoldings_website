(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"3XHS":function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return d}));var i=t("q1tI"),n=t.n(i),r=t("Bl7J"),o=t("W/9C"),s=t("g7pb"),l=t("AtCY"),h=s.works;function d(){return Object(i.useEffect)((function(){window.location.hash&&document.querySelector(window.location.hash).scrollIntoView({behavior:"smooth",block:"start"})})),n.a.createElement(r.a,{header:"About Generative Unfoldings",subPara:""},n.a.createElement("div",{className:"about"},n.a.createElement("div",{dangerouslySetInnerHTML:{__html:l.about}}),n.a.createElement("ul",null,h.map((function(e){return n.a.createElement("li",null,n.a.createElement("a",{href:"/works/"+e.url+"/view.html"}," ",e.name)," - ",n.a.createElement("a",{className:"artistBio",id:e.artist.replace(/[^a-zA-Z0-9]/g,"_"),href:"#"+e.artist.replace(/[^a-zA-Z0-9]/g,"_")},e.artist),n.a.createElement("br",null),n.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.bio}}))})))),n.a.createElement(o.a,null))}},AtCY:function(e){e.exports=JSON.parse("{\"about\":\"<h3>About the Exhibition</h3><p>Curated by <a target='_blank' href='https://unfoldingai.mit.edu/panelist/nick-montfort/'>Nick Montfort,</a> poet and MIT professor of digital media, the <i>Generative Unfoldings</i> exhibition consists of fourteen generative software artworks commissioned by the <a target='_blank' href='https://arts.mit.edu/cast/'>MIT Center for Art, Science & Technology (CAST)</a> and co-presented by the MIT <a target='_blank' href='https://tropetank.com/'>Trope Tank</a> in conjunction with the 2021 CAST Symposium, <a target='_blank' href='https://unfoldingai.mit.edu/'>“Unfolding Intelligence.”</a></p><p>An open call for sketches and prototypes asked artists to respond to the following question: How can artist-programmers working in the field of computer-generated art make unique contributions to the current discussion of artificial intelligence (AI)? A jury of practicing creative coders and critical technologists — Montfort, <a target='_blank' href='https://www.sarahrosalena.com/'>Sarah Rosalena Balbuena-Brady</a>, <a target='_blank' href='https://unfoldingai.mit.edu/panelist/d-fox-harrell/'>D. Fox Harrell</a>, <a target='_blank' href='https://lauren-mccarthy.com/'>Lauren Lee McCarthy</a>, and <a target='_blank' href='http://pkmital.com/home/'>Parag K. Mital</a> — reviewed the sketches and awarded the commissions. The project manifests itself both as this Generative Unfoldings (Screen) exhibition of in-browser artworks (indefinitely hosted on CAST’s servers and designed for access long into the future) and as <a target='_blank' href='https://brondle.github.io/generative_unfoldings/'>Generative Unfoldings (Code)</a> GitHub repository in which all of the artworks’ code is available to the public as free/libre/open-source software.</p><h3>About the MIT Center for Art, Science & Technology (CAST)</h3><p><a target='_blank' href='https://arts.mit.edu/cast/'>CAST</a> creates new opportunities for art, science, and technology to thrive as interrelated, mutually informing modes of exploration, knowledge, and discovery. CAST’s multidisciplinary platform presents performing and visual arts programs, supports research projects for artists working with science and engineering labs, and sponsors symposia, classes, workshops, design studios, lectures, and publications.</p><h3>About the Artists</h3>\"}")},Bl7J:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var i=t("q1tI"),n=t.n(i);function r(e){return n.a.createElement("div",{className:"header "+e.isOpen+" "+(e.workHeader?"work":"")},n.a.createElement("div",{className:"exhibit-info"},n.a.createElement("h1",{className:"accessibility-tag"},e.headerText),n.a.createElement("a",{href:"/"},n.a.createElement("img",{className:"exhibit-logo",src:"/img/generativeunfoldingslogo.png",alt:"the words 'generative' unfoldings in a stylized sans-serif font"})),e.subPara&&n.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.subPara}})),n.a.createElement("div",{className:"mit-info"},n.a.createElement("a",{href:"https://mit.edu"},n.a.createElement("img",{className:"mit-logo",src:"/img/mit-logo-with-spelling-design1-small-gray-lightgray.svg",alt:"The logo for the Massachusetts Institute of Technology: gray rectangular blocks making up the letters MIT.."}))))}function o(e){var a=e.headerState;return n.a.createElement("div",null,n.a.createElement(r,{workHeader:!0,isOpen:a?"open":"closed"}),n.a.createElement("div",{className:"header work work-header "+(a?"open":"closed")},n.a.createElement("a",{onClick:function(){e.onClick(!a)},className:"icon-show-hide "+(a?"hide-header":"show-header")}),n.a.createElement("div",null,e.previous&&n.a.createElement("a",{className:"previous",href:e.previous},"Previous")),n.a.createElement("div",{className:"info"},n.a.createElement("h1",null,e.headerText),e.subHead&&n.a.createElement("h2",null,n.a.createElement("a",{href:"/about#"+e.subHead.replace(/[^a-zA-Z0-9]/g,"_")}," ",e.subHead)," "),e.subPara&&n.a.createElement("p",null," ",e.subPara," ")),e.next&&n.a.createElement("div",null,n.a.createElement("a",{className:"next",href:e.next},"Next"))))}function s(e){var a=n.a.createElement(r,{headerText:e.header,subHead:e.subHead,subPara:e.subPara});return"work-header"==e.headerType&&(a=n.a.createElement(o,{previous:e.previous,next:e.next,headerText:e.header,subHead:e.subHead,subPara:e.subPara,headerState:e.headerState,onClick:e.onClick})),n.a.createElement("div",{className:"layout"},n.a.createElement("div",{className:"website-content"},a,e.children))}o.defaultProps={open:!0}},"W/9C":function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var i=t("q1tI"),n=t.n(i);function r(e){return n.a.createElement("div",{className:"footer "+e.isOpen},n.a.createElement("div",{className:"footer-content"},n.a.createElement("a",{href:"/about"},"about"),n.a.createElement("a",{href:"http://accessibility.mit.edu/"},"accessibility"),n.a.createElement("a",{href:"mailto:cast@mit.edu"},"contact")))}},g7pb:function(e){e.exports=JSON.parse('{"works":[{"url":"masks","name":"Can the Subaltern Speak?","altText":"An image with a black background and white three-dimensional words, that appear to form a hallway.","artist":"Behnaz Farahi","bio":"Trained as an architect, Behnaz Farahi is an award-winning designer, artist, and critical maker based in Los Angeles. She holds a PhD in interdisciplinary media arts and practice from USC School of Cinematic Arts and is currently assistant professor of design at California State University, Long Beach. She is a co-editor of an issue of AD, <i>3D Printed Body Architecture</i> (2017), and <i>Interactive Futures</i> (forthcoming). <a target=\'__blank\' href=\'http://www.behnazfarahi.com/\'>behnazfarahi.com</a> "},{"url":"concrete","name":"Concrete","alttext":"an image of a number of words, seemingly unrelated, going vertically down the screen. highlighted in yellow are the words \'slow steady rain the old tram creaks out of a window\'","artist":"Matt DesLauriers","bio":"Matt DesLauriers is a Toronto-born artist and creative coder now living in the United Kingdom, in London. His interactive installations have been displayed in special events at the Louvre Museum in Paris and the Art Gallery of Ontario in Toronto. His work was part of Reykjavik’s 2019 Winter Lights festival in Iceland and Ontario Place Park’s 2018 Winter Light exhibition in Toronto. Matt is active in the open source community and has given numerous talks, classes, and workshops on creative coding, for instance at the UCL Bartlett School of Architecture in London, FITC in Toronto andAamsterdam, Frontend Masters in Minneapolis, and Grow in Paris."},{"url":"curse-of-dimensionality","name":"Curse of Dimensionality","artist":"Philipp Schmitt","altText":"A nonsensical diagram with a number of circles with variable names and red, green and blue curving lines. A caption reads \'fig. 1 In high dimensions you can have donuts with many holes\'.","bio":"Philipp Schmitt (he/him; b. 1993, Germany) is an artist, a designer, and creative researcher based in the United States, in Brooklyn. His practice engages with the philosophical, poetic, and political dimensions of computation. Philipp’s works include installations, artist books, websites, photography, and sound. His current work addresses opacity and imagination in artificial intelligence research and its history.<br />Philipp’s work has been exhibited at The Photographers\' Gallery London, Philadelphia Museum of Art, MAK Vienna, Science Gallery Dublin, Link Art Center, and Triennale Milano. It is in the collections of the Philadelphia Museum of Art, Ars Electronica Center, and the MoMA Library. His artist book, <i>Computed Curation,</i> was published by Bromide Publishing House in 2018.<br />Currently, Philipp is a Berggruen Institute ToftH Researcher with Yann LeCun at the NYU Center for Data Science, and a metaLAB Affiliate at the Harvard Berkman Klein Center for Internet & Society."},{"url":"gender-generator","name":"Gender Generator","altText":"A red background with a number of pixelated black circles and amorphous blobs, with various icons of animals, objects, and vegetables inside them.","artist":"Encoder Rat Decoder Rat","bio":"Encoder Rat Decoder Rat (E🐀D🐀) consists of creative technologists Dylan Box (they/them) and M Kuznetsov (they/them), who first met through queer leftbook. Their vision is to explore the rat techno future (a lens for radical digital explorations). <i>Gender Generator</i> is their official debut project, preceded by hours of honing their craft of gender shitposting. Their work is influenced by Os Keyes, data feminism, and their personal experiences being perceived.<br />Individually, M’s previous work has focused on designing and questioning alternative futures, as in their newsletter, <i>The Finkedin Dispatch,</i> and a zine on exploring drag influences for adversarial attacks on facial recognition. <br />Dylan’s work has focused on building and supporting community-driven creative spaces in Detroit. They have worked developing branding and curriculum for the Mt. Elliott Makerspace and the Hype Teen Center, and the opening of two art galleries and studios, The Untitled Bottega and Riopelle Collective."},{"url":"greed","name":"Greed","artist":"Maja Kalogera","altText":"A picture of a three-dimensional hilly landscape with multiple images related to money drawn on it: wallets, dollar signs, gold bricks,and bar charts.","bio":"Maja Kalogera is an interdisciplinary artist. Her main practice includes net.art, media installations, public interventions, networking, experimental animation and creative coding. She has received grants from institutions including the Henry Moore Foundation, Turbulence, the Black Rock Arts Foundation, the Vocento ARCO Art Fair, and the Ministry of Culture of Republic of Croatia. Her residencies include HUMO at Ars Electronica Linz, the Atlantic Center for the Arts in New Smyrna Beach, Modelmania at Future Center in Venezia, and Buinho FabLab in Mesejana. In her works she explores how wide saturation and public usage of recent technological advances allow for changing notions of self. From her early net.art pieces to the recent ML explorations, she is interested in creating new experiences of visual content designed for screens. She is a member of mediaLab in Zagreb, where she lives."},{"url":"hexells","name":"Hexells","altText":"A grid made up entirely of hexagons, most of which are blue but with two flowing darker lines traveling through them.","artist":"Alexander Mordvintsev","bio":"Alexander Mordvintsev is an artist and a researcher working with AI and Artificial Life. In 2015 he invented the DeepDream algorithm, launching an entirely new subgenre of art using neural networks – and transforming the way we visualize them. He is currently working on self-organizing systems, exploring practical ways of designing artificial life through machine learning."},{"url":"letterfromc","name":"Letter from C","artist":"Hye Min Cho","altText":"The word \'hooray\' in different handwriting repeated over and over.","bio":"Hye Min Cho (b. Incheon, South Korea) is a media artist who uses custom graphic software to visualize the experiences at odds with the normal and the legitimate. Her works are renditions of reality transcoded through computation, and aim to visualize information that may not have practical significance to human eyes. Hye Min holds a MFA from UCLA’s Design Media Arts program and a BS in electrical engineering and computer science from UC Berkeley."},{"url":"psaa","name":"P.S.A.A.","altText":"An image of a rectangle with various letters spread haphazardly throughout, beneath which are a knob and lever. The bottom of the image reads \'OR A CONTRARY ART OF A SINGLE.\'","artist":"Juan Manuel Escalante","bio":"Juan Manuel Escalante is a designer and an artist working with computer code, modular synthesizers, and analog drawings. His work has been shown in the United States, France, the United Kingdom, Spain, Peru, South Korea, and Mexico, and featured in various festivals and exhibitions, such as OFFF, Mutek, Currents New Media, Binario, and Ceremonia. He is a member of the National System of Art Creators (National Endowment for the Arts, Mexico) and received the Corwin Award for Electronic-Acoustic Composition in 2016. He has taught creative programming at the University of California Santa Barbara, and at various higher education institutions in Mexico, including the Graduate Program in Architecture (UNAM), where he founded and directed its Media Lab for eight years. He holds a BArch (UAM-X), an MFA (UNAM), and a PhD in media arts & technology (UCSB). He is currently an assistant professor at California State University, Fullerton."},{"url":"pac-tracer","name":"Pac Tracer","altText":"A number of pink, yellow, red, green, blue, and orange paths traveling through a three-dimensional maze outlined in white, that replicate different paths the ghosts and the character of Pac-Man can take in the Pac-Man arcade game.","artist":"Andy Wallace","bio":"Andy Wallace is an independent game designer and creative coder who lives in New York City. He is also a founding member of the non-profit Death By Audio Arcade collective. His work exists on the screen and off, as he likes his digital projects to venture out into the physical world in the form of arcade machines and other magical objects. His work has been shown throughout the United States and abroad."},{"url":"seedlings_fromhumus","name":"Seedlings_: From Humus","altText":"Text, appearingly randomly spaced, containing the words \'How come we manage to grow\' - out of the word \'grow\' the words \'come, alone, manage, gives, line, another\'seem to emerge - \'in all directions, to be in bottomless vanishing points, to be alone in, to the combinations of sounds that encode common\'. Some words are cut off at the edge of the image.","artist":"Qianxun Chen & Mariana Roa Oliva","bio":"Qianxun Chen is a media artist, programmer, and researcher. She works at the intersection of language, art, and digital technology, with a focus on digital textuality, generative poetics, and the aesthetics of algorithms. Her work has been published in <i>Drunken Boat,</i> <i>Cura,</i> <i>ZeTMaG,</i> and <i>The Electronic Literature Collection.</i> She holds an MFA in digital language arts from Brown University.<br />Mariana Roa Oliva creates fiction, performance, and installation works. Originally from Mexico City, their short stories have been published in the anthologies <i>Lados B: Narrativa de Alto Riesgo</i> and <i>Under the Volcano: the Best Writing of our First 15 Years.</i> Mariana holds an MFA in literary arts from Brown University.<br />Qianxun and Mariana have co-organized “Demitasse with Plants-in-Residence,” a workshop designed to help artists and writers work in collaboration with plants. "},{"url":"self-doubting-system","name":"Self-Doubting System","altText":"A pixelated image with a brown background and two blueish pixelated outlines of faces, one near the center and one at the top right. The words \'what would you do\' in green text with a blackground are slightly below the center at the right.","artist":"Lee Tusman","bio":"Lee Tusman is a New York City-based new media artist and educator interested in the application of the radical ethos of collectives and DIY culture to the creation, aesthetics, and open-source distribution methods of digital culture. He works in code, collage, sound ,and text. His artistic output includes interactive media, video art, net art, experimental videogames, sound art, websites, Twitter bots and micro-power radio stations. His work has been shown in museums, galleries, artist-run spaces and virtual environments. He studied at Brandeis University and received his MFA from UCLA’s Design Media Arts program. He is assistant professor of new media and computer science at Purchase College."},{"url":"someonetellboys","name":"Someone Tell the Boyz","altText":"On a white background, the text \'but for a man -love . a lost image , the mothers himself to realize women as boys, but.\' repeat. In the foreground, black text with a yellow background reads \'i am not a friend of my sister, the only thing i could not bear to speak, i have to leave the root (urinating in a week), i would have to leave in the next night, i watched the night of the grass, i was so busy, i saw my sister, as a new word\'.","artist":"Arwa Mboya","bio":"Arwa Mboya is a designer and researcher with a passion for emerging technologies. She has an MS from the MIT Media Lab and is the founder of Allo-I Studios, an emerging studio with a focus on XR. Arwa is from Nairobi, Kenya."},{"url":"songlines","name":"Songlines","artist":"Ágoston Najy","altText":"A black screen is separated by gray lines, with gray dots on some lines forming three curvy lines, while there are other white dots randomly placed throughout the grid. At the edges of the screen are two orange triangular \'agents\' with gray lines emerging from them, which indicate when they have detected a \'dot\', which they will try to eat.","bio":"Ágoston Najy is a member of the Binaura artist collective that has made visual music instruments, responsive environments, using free and open source tools since the early 2000s. They have given international workshops across the European Union, Canada, and India in the fields of interaction modalities, data visualization and sonification, creative coding, and algorithmic art. Their works focus on visualizing natural phenomena, cognitive aspects of extended perception, prototyping, and the open source exchange of code & ideas. Their latest works feature forests made of hanging papers with generative plotter drawings, cellular shell pattern generators, and drawing robots that are generating nonconventional prophecies based on poetic artificial intelligence."},{"url":"thisindignantpage","name":"This Indignant Page: The Politics of the Paratextual","altText":"On a gray background a number of triangular line shapes are drawn in black, some of which are shaded dark. There are also thin red lines, one thick blue line, and a few shaded black shapes: a circle, and an incomplete curve.","artist":"Karen ann Donnachie & Andy Simionato","bio":"Donnachie and Simionato are an artist duo working in the expanded fields of computational art and design since the 1990s. Their artworks and designs have won international awards and critical recognition in their fields, and have been featured in a number of major publications and international press. They received the Tokyo Type Directors Club Award twice, once in 2019 for a robotic-scribe that writes every tweet by Donald Trump, then in 2020 for their <i>Library of Nonhuman Books.</i> One of these AI books, generated after a reading of M. D. Vernon’s <i>Psychology of Perception,</i> was awarded the Cornish Family Prize for Art and Design Book Publishing. In 2020, they were awarded the Robert Coover Award for Electronic Literature. <a target=\'__blank\' href=\'http://www.atomicactivity.com/books/\'>atomicactivity.com/books</a>"}]}')}}]);