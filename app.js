// Application data
const appData = {
  "sections": [
    {
      "id": "preface",
      "titleFarsi": "دیباچه عشق 🌿",
      "titleEnglish": "Preface of Love 🌿",
      "contentFarsi": "در جنگل‌های سبز گواتمالا، در تیکال، معبدی ایستاده.\n باشکوه‌ترین پادشاه خورشید، از باشکوه‌ترین دولت‌شهر مایاها، آن را بنا کرد.\n نامش جاسا چان کاویل بود—مردی بلند بالا و استوار.\n بیش از هشت دهه زیست، و در سال ۷۲۰ میلادی، در معبدی که برای خود ساخته بود، آرمید.\nکتیبه‌ها می‌گویند: او عمیقاً عاشق همسرش بود.\n و برای او بنای یادبودی ساخت، درست رو‌به‌روی معبدش.\n هر بهار و پاییز، در روز اعتدال،\n خورشید از پشت معبد او برمی‌آید و سایه‌اش بنای یادبود همسر را می‌پوشاند.\n و هنگام غروب، سایه بنای یادبود همسر، معبد او را در آغوش می‌گیرد.\nسیزده قرن گذشته، و آن دو عاشق هنوز، از دل خاک، یکدیگر را در آغوش دارند.",
      "contentEnglish": "In the deep green jungles of Guatemala, in Tikal, a temple stands.\n Built by the greatest Sun King of the Maya.\n His name was Jasaw Chan K'awiil—a tall and steadfast man.\n He lived over eight decades, and in 720 AD, he rested in the tomb he built for himself.\nThe glyphs tell us: he loved his wife deeply.\n He built her a monument facing his temple.\n Every spring and autumn equinox,\n the rising sun casts the temple's shadow over her monument,\n and at sunset, her monument's shadow embraces his temple.\nThirteen centuries have passed, yet from their tombs,\n the two lovers still hold and kiss each other."
    },
    {
      "id": "hymn",
      "titleFarsi": "سرود عشق 🌿",
      "titleEnglish": "Hymn of Love 🌿",
      "contentFarsi": "در سراسر جهان، انسان‌ها عاشق می‌شوند.\n برای عشق می‌خوانند، برای عشق می‌رقصند،\n شعر و افسانه می‌سازند، و برای عشق  جان می‌بازند.\n چنان‌که خواجه‌ی شیراز گفت:\n«از صدای سخن عشق ندیدم خوشتر\n یادگاری که در این گنبد دوار بماند»",
      "contentEnglish": "Across the world, people fall in love.\nThey sing for it, dance for it,\nwrite poems and legends, live for it, kill for it, and die for it.\nAs Hafez of Shiraz once said:\n\n           \"I have heard no sweeter sound than the words of love,\n            A legacy to remain in this revolving dome.\""
    },
    {
      "id": "dawn",
      "titleFarsi": "آغاز پیمان 🌿",
      "titleEnglish": "Dawn of the Vow 🌿",
      "contentFarsi": "به نام مهر، به نام روشنی، به نام عشق.\n به نام زندگی که در حضور دو دلِ عاشق، معنا می‌گیرد.\n امروز، زمین خاموش مانده تا صدای دل‌های شما را بشنود،\n و زمان ایستاده تا ابدیت را در نگاه‌تان ثبت کند.",
      "contentEnglish": "In the name of love, in the name of light, in the name of life—\nlife that finds meaning in the presence of two loving hearts.\nToday, the earth grows silent to hear your hearts,\nand time stands still to keep this moment forever."
    },
    {
      "id": "bride-vow",
      "titleFarsi": "پرسش مهر بانو 🌿",
      "titleEnglish": "The Bride's Vow Question 🌿",
      "contentFarsi": "مهر بانو! ای همسفر فردا،\n آیا با مهر و آگاهی، این مهربان مرد را،\n برای همسفری در مسیر زندگی می‌پذیری؟\n تا در غم و شادی، در سکوت و فریاد،\n در دشوارترین و آسان‌ترین فصل‌ها،\n کنارش بمانی، بی‌ادعا، بی‌تردید، با عشق؟\nاگر چنین است، بگو: می‌پذیرم، با دل و جان.",
      "contentEnglish": "Lady of grace, fellow traveler of tomorrow,\n do you, with love and awareness, take this kind man\n to walk beside you through life?\n Through sorrow and joy, through silence and song,\n through the hardest and the gentlest of seasons—\n to stand by him without doubt, with pride, with love?\n If so, say: I accept, with all my heart."
    },
    {
      "id": "companion-vow",
      "titleFarsi": "پرسش هم‌پیمان 🌿",
      "titleEnglish": "The Companion's Question of Love 🌿",
      "contentFarsi": "اکنون، ای مهربان! ای تکیه‌گاه راستین،\n آیا با اندیشه و مهر، این مهربانو را،\n برای همسفری در مسیر زندگی می‌پذیری؟\n تا پشت او باشی نه پیش، با او باشی نه بر او،\n و عشق را در عمل معنا کنی، نه فقط در واژه؟\nاگر چنین است، بگو: می‌پذیرم، با دل و جان.",
      "contentEnglish": "And now, kind sir, true shelter,\n do you, with thought and with love,\n take this lady to walk beside you in life?\n To stand behind her, not above her;\n with her, not over her;\n and to make love real in your deeds, not just in words?\n If so, say: I accept, with all my heart."
    },
    {
      "id": "sacred-vows",
      "titleFarsi": "پیمان‌های عشق 🌿",
      "titleEnglish": "Sacred Vows of Love 🌿",
      "contentFarsi": "اکنون، ای دو جانِ به یک مهر آمیخته،\nدر برابر چشم بیدار خورشید،\nدر حضور نیاکانِ دانا،\nو با یاد همهٔ عاشقانِ جاوید تاریخ،\nپیمان ببندید…\nپیمان ببندید که در خانه کوچک‌تان،\n نور باشد و نان، آغوش باشد و آواز.\n\nپیمان ببندید که نگذارید خستگی روزگار،\n دل‌های‌تان را خاکستری کند،\n و به یاد داشته باشید که عشق،\n همان مراقبت‌های کوچک است، در سکوت‌های بزرگ.\n\nپیمان ببندید که در تاریک‌ترین شب‌ها،\n چراغ یکدیگر باشید،\n و چون باران بر خاک خشک،\n امید را بر دل هم ببارید.",
      "contentEnglish": "Now, O two souls united in one love,\nbefore the watchful eyes of the sun,\nin the presence of wise ancestors,\nand in memory of all eternal lovers throughout history,\nmake your vow…\n Vow to keep light and bread in your home,\n and arms and songs to warm it.\n\n Vow never to let the weariness of time\n turn your hearts to ashes,\n and remember that love\n is built of the smallest acts of care\n in the vastest silences.\n\nVow that in the darkest nights\n you will be each other's light,\n and like rain on dry earth,\n pour hope into one another's heart."
    },
    {
      "id": "testimony",
      "titleFarsi": "گواهی عشق 🌿",
      "titleEnglish": "Testimony of Love 🌿",
      "contentFarsi": "و اینک، ما حاضران، با دل‌هایی آکنده از امید و شادمانی،\n گواهی می‌دهیم که این دو انسان،\n با انتخابی آگاهانه، نه از سر اجبار،\n بل از ژرفای مهر، به هم دل سپردند،\n و در برابر عشق، سر فرود آوردند.\nباشد که زندگی‌شان، همچو غزل‌های حافظ،\n سرشار از شوق و شکوه باشد.",
      "contentEnglish": "And now we, the witnesses, with hearts full of joy and hope,\n testify that these two,\n by conscious choice, not compulsion,\n have given their hearts to each other,\n and bowed before love.\nMay their life be like the poems of Hafez—\n full of wonder and delight."
    },
    {
      "id": "closing",
      "titleFarsi": "پایان آیین 🌿",
      "titleEnglish": "Closing of the Ritual 🌿",
      "contentFarsi": "و اینک، در برابر درخت زندگی،\n در کنار آتش جاودان مهر،\n آغاز این پیوند را گرامی می‌داریم.\n باشد که ریشه‌هایتان در زمین استوار،\n و شاخه‌هایتان در آسمان بلند باشد.",
      "contentEnglish": "And now, before the Tree of Life,\n beside the eternal fire of love,\n we honor the beginning of this union.\n May your roots be strong in the earth,\n and your branches reach high into the sky."
    }
  ],
  "mainTitle": {
    "farsi": "خطبه عقد آریایی 🌿",
    "english": "Aryan Wedding Vows 🌿"
  }
};

// Application state
let currentLanguage = 'english';
let currentScrollPosition = 0;
let isLanguageToggleInitialized = false;

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    console.log('Initializing app...');
    setupLanguageSelection();
    setupInitialTOCToggle();
}

function setupLanguageSelection() {
    console.log('Setting up language selection...');
    
    // Use event delegation to handle language button clicks
    document.addEventListener('click', function(event) {
        if (event.target.closest('.language-btn')) {
            event.preventDefault();
            const button = event.target.closest('.language-btn');
            const selectedLanguage = button.getAttribute('data-lang');
            console.log('Language selected:', selectedLanguage);
            selectLanguage(selectedLanguage);
        }
    });
    
    // Handle keyboard navigation for language selection
    document.addEventListener('keydown', function(event) {
        if (event.target.matches('.language-btn') && (event.key === 'Enter' || event.key === ' ')) {
            event.preventDefault();
            const selectedLanguage = event.target.getAttribute('data-lang');
            selectLanguage(selectedLanguage);
        }
    });
}

function selectLanguage(language) {
    console.log('Selecting language:', language);
    currentLanguage = language;
    
    const languageSelection = document.getElementById('language-selection');
    const mainContent = document.getElementById('main-content');
    
    if (languageSelection && mainContent) {
        // Hide language selection and show main content
        languageSelection.classList.add('hidden');
        mainContent.classList.remove('hidden');
        
        // Update layout and content
        updateLanguageLayout();
        updateContent();
        generateTOC();
        
        // Initialize interactive elements
        setupLanguageToggle();
        setupTOCToggle();
    }
}

function setupLanguageToggle() {
    console.log('Setting up language toggle...');
    
    if (isLanguageToggleInitialized) {
        return; // Prevent multiple initializations
    }
    
    // Use event delegation for language toggle
    document.addEventListener('click', function(event) {
        if (event.target.closest('#language-toggle')) {
            event.preventDefault();
            console.log('Language toggle clicked, current:', currentLanguage);
            
            // Store scroll position
            currentScrollPosition = window.pageYOffset;
            
            // Toggle language
            currentLanguage = currentLanguage === 'english' ? 'farsi' : 'english';
            console.log('Switching to:', currentLanguage);
            
            // Update everything
            updateLanguageLayout();
            updateContent();
            generateTOC();
            
            // Restore scroll position
            setTimeout(() => {
                window.scrollTo(0, currentScrollPosition);
            }, 100);
        }
    });
    
    isLanguageToggleInitialized = true;
}

function setupInitialTOCToggle() {
    console.log('Setting up initial TOC toggle...');
    setupTOCToggleHandler();
}

function setupTOCToggle() {
    console.log('Setting up TOC toggle...');
    setupTOCToggleHandler();
}

function setupTOCToggleHandler() {
    // Use event delegation for TOC toggle
    document.addEventListener('click', function(event) {
        if (event.target.closest('#toc-toggle')) {
            event.preventDefault();
            console.log('TOC toggle clicked');
            
            const toc = document.getElementById('toc');
            const tocToggle = document.getElementById('toc-toggle');
            
            if (toc && tocToggle) {
                toc.classList.toggle('expanded');
                tocToggle.classList.toggle('expanded');
                updateTOCAriaAttributes();
            }
        }
    });
}

function updateLanguageLayout() {
    console.log('Updating layout for:', currentLanguage);
    const body = document.body;
    const html = document.documentElement;
    
    const toggleText = document.getElementById('toggle-text');
    const tocTitle = document.getElementById('toc-title');
    const mainTitle = document.getElementById('main-title');
    
    if (currentLanguage === 'farsi') {
        body.classList.add('rtl');
        html.setAttribute('lang', 'fa');
        html.setAttribute('dir', 'rtl');
        if (toggleText) toggleText.textContent = 'English';
        if (tocTitle) tocTitle.textContent = 'فهرست مطالب';
        if (mainTitle) mainTitle.textContent = appData.mainTitle.farsi;
    } else {
        body.classList.remove('rtl');
        html.setAttribute('lang', 'en');
        html.setAttribute('dir', 'ltr');
        if (toggleText) toggleText.textContent = 'فارسی';
        if (tocTitle) tocTitle.textContent = 'Table of Contents';
        if (mainTitle) mainTitle.textContent = appData.mainTitle.english;
    }
}

function updateContent() {
    console.log('Updating content for:', currentLanguage);
    const contentSections = document.getElementById('content-sections');
    
    if (contentSections) {
        // Clear existing content
        contentSections.innerHTML = '';
        
        // Generate sections
        appData.sections.forEach(section => {
            const sectionElement = createSectionElement(section);
            contentSections.appendChild(sectionElement);
        });
    }
}

function createSectionElement(section) {
    const sectionDiv = document.createElement('div');
    sectionDiv.className = 'section';
    sectionDiv.id = section.id;
    
    const title = document.createElement('h2');
    title.className = 'section-title';
    title.textContent = currentLanguage === 'farsi' ? 
        section.titleFarsi : section.titleEnglish;
    
    const content = document.createElement('div');
    content.className = 'section-content';
    content.textContent = currentLanguage === 'farsi' ? 
        section.contentFarsi : section.contentEnglish;
    
    sectionDiv.appendChild(title);
    sectionDiv.appendChild(content);
    
    return sectionDiv;
}

function generateTOC() {
    console.log('Generating TOC for:', currentLanguage);
    const tocList = document.getElementById('toc-list');
    
    if (tocList) {
        // Clear existing TOC
        tocList.innerHTML = '';
        
        // Generate TOC items
        appData.sections.forEach(section => {
            const li = document.createElement('li');
            li.className = 'toc-item';
            
            const link = document.createElement('a');
            link.className = 'toc-link';
            link.href = `#${section.id}`;
            link.textContent = currentLanguage === 'farsi' ? 
                section.titleFarsi : section.titleEnglish;
            
            // Add click handler for smooth scrolling
            link.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('TOC link clicked:', section.id);
                scrollToSection(section.id);
                closeTOC();
            });
            
            li.appendChild(link);
            tocList.appendChild(li);
        });
    }
}

function scrollToSection(sectionId) {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        const header = document.querySelector('.header');
        const headerHeight = header ? header.offsetHeight : 0;
        const targetPosition = targetSection.offsetTop - headerHeight - 20;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

function closeTOC() {
    const toc = document.getElementById('toc');
    const tocToggle = document.getElementById('toc-toggle');
    
    if (toc && tocToggle) {
        toc.classList.remove('expanded');
        tocToggle.classList.remove('expanded');
        updateTOCAriaAttributes();
    }
}

function updateTOCAriaAttributes() {
    const toc = document.getElementById('toc');
    const tocToggle = document.getElementById('toc-toggle');
    
    if (toc && tocToggle) {
        const isExpanded = toc.classList.contains('expanded');
        tocToggle.setAttribute('aria-expanded', isExpanded.toString());
        toc.setAttribute('aria-hidden', (!isExpanded).toString());
    }
}

// Handle keyboard navigation
document.addEventListener('keydown', function(e) {
    // ESC key to close TOC
    if (e.key === 'Escape') {
        closeTOC();
    }
    
    // Enter or Space for interactive elements
    if ((e.key === 'Enter' || e.key === ' ')) {
        if (e.target.matches('#language-toggle')) {
            e.preventDefault();
            e.target.click();
        } else if (e.target.matches('#toc-toggle')) {
            e.preventDefault();
            e.target.click();
        }
    }
});

// Initialize accessibility attributes
function initializeAccessibility() {
    const tocToggle = document.getElementById('toc-toggle');
    const toc = document.getElementById('toc');
    
    if (tocToggle && toc) {
        tocToggle.setAttribute('aria-expanded', 'false');
        tocToggle.setAttribute('aria-controls', 'toc');
        toc.setAttribute('aria-hidden', 'true');
    }
}

// Set up accessibility when DOM is ready
document.addEventListener('DOMContentLoaded', initializeAccessibility);