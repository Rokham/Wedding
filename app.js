// Wedding Ceremony Application
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, initializing app');
  
  const app = {
    currentLanguage: 'english',
    currentSectionIndex: 0,
    
    // Ceremony data with updated content structure
    ceremonyData: {
      couple: {
        names: "Nazanin & Rokham",
        wedding_ceremony: "Wedding Ceremony",
        date: "Oct 5, 2025"
      },
      main_header: {
        farsi: "🌿 خطبه عقد آریایی 🌿",
        english: "🌿Aryan Wedding Vows 🌿"
      },
      sections: [
        {
          id: "preface",
          farsi: {
            title: "🌿 دیباچه عشق",
            content: "در جنگل‌های سبز گواتمالا، در تیکال، معبدی ایستاده، از سنگ. باشکوه‌ترین پادشاه خورشید، از باشکوه‌ترین دولت‌شهر مایاها، آن را بنا کرد.\n\nنامش جاسا چان کاوی‌یِل بود — مردی بلند بالا و استوار. بیش از هشت دهه زیست، و در سال ۷۲۰ میلادی، در معبدی که برای خود ساخته بود، برای همیشه آرمید.\n\nکتیبه‌ها می‌گویند: او عمیقاً عاشق همسرش بود. و برای او بنای یادبودی ساخت، درست رو‌ به‌ روی معبدش.\n\nهر بهار و پاییز، در روز اعتدال، خورشید از پشت معبد او برمی‌آید و سایه‌اش بنای یادبود همسر را می‌پوشاند. و هنگام غروب، سایه‌ی بنای یادبود همسر، معبد او را در آغوش می‌گیرد.\n\nسیزده قرن گذشته، و آن دو عاشق هنوز، از دل خاک و زمان، یکدیگر را در آغوش دارند."
          },
          english: {
            title: "🌿Preface of Love",
            content: "In the deep green jungles of Guatemala, in Tikal, a temple stands. Built by the greatest Sun King of the Maya.\n\nHis name was Jasaw Chan K'awiil — a strong and steadfast man. He lived for over eight decades, and in 720 AD, he was buried beneath in the tomb he had built for himself.\n\nAnd Mayan inscriptions proclaim that he was deeply in love with his wife. He built a monument in her honor, facing his temple.\n\nEvery spring and autumn, exactly at the equinox, The sun rises behind his temple and perfectly bathes her temple with its shadow. And at sunset, her monument's shadow embraces his temple.\n\nThirteen centuries have passed, yet from their tombs, the two lovers still hold and kiss each other."
          }
        },
        {
          id: "hymn",
          farsi: {
            title: "🌿 سرود عشق",
            content: "در سراسر جهان، انسان‌ها عاشق می‌شوند. برای عشق می‌خوانند، برای عشق می‌رقصند، برای عشق شعر و افسانه می‌سازند، و برای عشق جان می‌بازند.\n\nهمانطور که والت ویت‌من زمانی گفت:\n«آه، من همه چیز را برای تو به خطر می‌اندازم!»\n\nعشق، فرزند آسمان و زمین است. از نگاه می‌زاید، با لبخند بال می‌گیرد، و با وفا جاودانه می‌شود. نه زمان می‌شناسد، نه مرز، نه مرگ.\n\nعشق، آتشی‌ست که نه خاکستر دارد و نه خاموشی.\n\nخواجه شیراز می‌فرماید:\n«از صدای سخن عشق ندیدم خوشتر\n  یادگاری که در این گنبد دوار بماند»"
          },
          english: {
            title: "🌿Hymn of Love",
            content: "Across the world, people fall in love. They sing for love, they dance for love, write poems and legends about love, live for love, kill for love, and die for love.\n\nAs Walt Whitman once said:\n\"O I willingly stake all for you!\"\n\nLove is the child of heaven and earth. It is born from a glance, takes wing with a smile, and is made eternal by loyalty. It knows no time, no borders, no death.\n\nLove is a fire without ashes, a flame that can never be extinguished.\n\nHafez of Shiraz says:\n           \"I have heard no sweeter sound than the words of love,\n            A legacy to remain in this revolving dome.\""
          }
        },
        {
          id: "dawn_vow",
          farsi: {
            title: "🌿 آغاز پیمان",
            content: "به نام مهر، به نام روشنی، به نام عشق. به نام زندگی که در حضور دو دلِ عاشق، معنا می‌گیرد.\n\nامروز، زمین خاموش مانده تا صدای دل‌های شما را بشنود، و زمان ایستاده تا ابدیت را در نگاه‌تان ثبت کند.\n\nامروز این پیمان به نام مهربان رخام و مهربانو نازنین آغاز می‌شود. دو دلی که هفت سال پیش، در میان روزمرگی‌های زندگی، یکدیگر را یافتند. آشنایی‌شان از دوستی آغاز شد، با مهر و صبوری ریشه دواند، بالید و سرانجام درختی شد که امروز با این پیمان، با حضور شما شکوفه‌هایش را جشن می‌گیرد."
          },
          english: {
            title: "🌿Dawn of the Vow",
            content: "In the name of love, in the name of light, in the name of life. Life that finds meaning in the presence of two loving hearts.\n\nToday, the earth grows silent to hear your hearts, and time stands still to keep this moment forever.\n\nThis ceremony begins with the names of Nazanin and Rokham. Two hearts that met seven years ago on life's path. A meeting that took root, grew, and blossomed, and today, with this vow, they celebrate the flowering of that journey."
          }
        },
        {
          id: "bride_question",
          farsi: {
            title: "🌿 پرسش مهر بانو",
            content: "مهر بانو! ای همسفر فردا، آیا با مهر و آگاهی، این مهربان مرد را، برای همسفری در مسیر زندگی می‌پذیری؟\n\nتا در غم و شادی، در سکوت و فریاد، در دشوارترین و آسان‌ترین فصل‌ها، کنارش بمانی، بی‌ادعا، بی‌تردید، با عشق؟\n\nاگر چنین است، بگو: <strong>می‌پذیرم، با دل و جان</strong>."
          },
          english: {
            title: "🌿The Bride's Vow Question",
            content: "Lady of grace, fellow traveler of tomorrow, do you, with love and awareness, take this kind man to walk beside you through life?\n\nThrough sorrow and joy, through silence and song, through the hardest and the gentlest of seasons — stand by him without doubt, with pride, with love?\n\nIf so, say: <strong>I accept, with all my heart</strong>."
          }
        },
        {
          id: "companion_question",
          farsi: {
            title: "پرسش هم‌پیمان 🌿",
            content: "اکنون، ای مهربان! ای تکیه‌گاه راستین، آیا با اندیشه و مهر، این مهربانو را، برای همسفری در مسیر زندگی می‌پذیری؟\n\nتا پشت او باشی نه پیش، با او باشی نه بر او،و عشق را در عمل معنا کنی، نه فقط در واژه؟\n\nاگر چنین است، بگو: <strong>می‌پذیرم، با دل و جان</strong>."
          },
          english: {
            title: "🌿The Companion's Question of Love",
            content: "And now, kind sir, true shelter, do you, with thought and with love, take this lady to walk beside you in life?\n\nTo stand behind her, not above her; with her, not over her; and to make love real in your deeds, not just in words?\n\nIf so, say: <strong>I accept, with all my heart</strong>."
          }
        },
        {
          id: "sacred_vows",
          farsi: {
            title: "پیمان‌های عشق 🌿",
            content: "اکنون، ای دو جانِ به یک مهر آمیخته، در برابر چشم بیدار خورشید، در حضور نیاکانِ دانا، و با یاد همهٔ عاشقانِ جاوید تاریخ، پیمان ببندید…\n\nپیمان ببندید که در خانه کوچک‌تان، نور باشد و نان، آغوش باشد و آواز.\n\nپیمان ببندید که نگذارید خستگی روزگار، دل‌های‌تان را خاکستری کند، و به یاد داشته باشید که عشق، همان مراقبت‌های کوچک است، در سکوت‌های بزرگ.\n\nپیمان ببندید که در تاریک‌ترین شب‌ها، چراغ یکدیگر باشید، و چون باران بر خاک خشک، امید را بر دل هم ببارید."
          },
          english: {
            title: "🌿Sacred Vows of Love",
            content: "Now, two souls united in one love, before the watchful eyes of the sun, in the presence of wise ancestors, and in memory of all eternal lovers throughout history,\nmake your vow…\n\nVow to keep light and bread in your home, and arms and songs to warm it.\n\nVow to never let the weariness of time turn your hearts to ashes, And remember that love is built out on the smallest acts of care in the vastest silences.\n\nVow that in the darkest nights you will be each other's light, and like rain on dry earth, pour hope into one another's heart."
          }
        },
        {
          id: "testimony",
          farsi: {
            title: "گواهی عشق 🌿",
            content: "و اینک، ما حاضران، با دل‌هایی آکنده از امید و شادمانی، گواهی می‌دهیم که این دو انسان، با انتخابی آگاهانه، نه از سر اجبار، بل از ژرفای مهر، به هم دل سپردند، و در برابر عشق، سر فرود آوردند.\n\nباشد که زندگی‌شان، همچو غزل‌های حافظ، سرشار از شوق و شکوه باشد."
          },
          english: {
            title: "🌿Testimony of Love",
            content: "And now we, the witnesses, with hearts full of joy and hope, testify that these two, by conscious choice, not compulsion, have given their hearts to each other, and bowed before love.\n\nMay their life be like the poems of Hafez — full of wonder and delight."
          }
        },
        {
          id: "closing",
          farsi: {
            title: "پایان آیین 🌿",
            content: "و اینک، در برابر درخت زندگی، در کنار آتش جاودان مهر، آغاز این پیوند را گرامی می‌داریم.\n\nباشد که ریشه‌هایتان در زمین استوار، و شاخه‌هایتان در آسمان بلند باشد."
          },
          english: {
            title: "🌿Closing of the Ritual",
            content: "And now, before the Tree of Life, beside the eternal flame of love, we honor the beginning of this union.\n\nMay your roots be strong in the earth, and your branches reach high into the sky."
          }
        },
        {
          id: "sofreh_aghd",
          farsi: {
            title: "🕊️ شرح سفره عقد",
            content: "در سنت کهن ایرانی، سفره عقد جایگاهی مقدس و نمادین دارد. عروس و داماد در پشت سفره‌ای سپید می‌نشینند که بر آن اشیای نمادین قرار داده می‌شود:\n\n- آینه و شمعدان: آینه نماد روشنایی و شفافیت زندگی مشترک است و شمعدان‌ها نماد گرما و روشنایی آینده.\n- نان و پنیر و سبزی: نشانه‌ی برکت و روزی پاک و سرسبزی زندگی.\n- شیرینی و عسل: نماد شیرینی کامی و محبت در زندگی.\n- تخم‌مرغ: نماد باروری، زایش و پایداری نسل.\n- گردو، بادام و فندق: نماد برکت، فراوانی.\n- گل: نماد زیبایی، عشق و طراوت زندگی.\n\nدر حالی‌که عروس و داماد پشت سفره نشسته‌اند، دو نفر از نزدیکان پارچه‌ای سفید بالای سر آنان می‌گیرند و دیگری قند می‌ساید؛ این عمل نماد بارش شیرینی بر زندگی آن‌هاست."
          },
          english: {
            title: "🕊️ The Sofreh Aghd",
            content: "In ancient Iranian tradition, the Sofreh Aghd (wedding spread) holds a sacred and symbolic meaning. The bride and groom sit together behind a white cloth spread, upon which symbolic items are placed:\n\n- Mirror and candelabra: The mirror symbolizes clarity and truth in married life, while the candles represent warmth and light for the future.\n- Bread, cheese, and herbs: A sign of blessing, sustenance, and freshness in life.\n- Sweets and honey: Representing sweetness and joy in life together.\n- Eggs: Symbols of fertility, birth, and the continuation of generations.\n- Nuts: represent blessing and abundance.\n- Flowers: Symbols of beauty, love, and renewed vitality.\n\nWhile the couple sits before the spread, two relatives hold a white cloth over their heads, and another person grinds sugar cones above them—symbolizing the shower of sweetness upon their new life."
          }
        },
        {
          id: "groom_ceremony",
          farsi: {
            title: "✨(رو به داماد)",
            content: "ای داماد گرامی، امروز در برابر نیاکان، در برابر آیینه‌ی روشنایی و آتش جاودانه، می‌خواهی پیوند دل و جانت را با عروس بر این سفره‌ی سپند ببندی.\n\nمن، به وکالت از تو، می‌پرسم:\nآیا وکیلم که مهربانو نازنین را به همسری تو درآوردم؟\n\n(داماد پاسخ می‌دهد: بله / آری)"
          },
          english: {
            title: "✨ (Turning to the groom)",
            content: "Beloved groom, today, before the presence of our ancestors, before the mirror of light and the eternal flame, you wish to bind your heart and soul with the bride at this sacred table.\n\nOn your behalf, I ask you:\nDo I have your permission to wed this noble bride to you?\n\n(Groom answers: Yes / I do)"
          }
        },
        {
          id: "bride_ceremony",
          farsi: {
            title: "✨(رو به عروس)",
            content: "ای عروس نیک‌فال، تو چون گل بهاری در باغ زندگی قدم نهاده‌ای و امروز دل در دل این پیوند می‌نهی. داماد، با مهر و وفا، خواهان دست توست.\n\nمن از تو می‌پرسم:\nمهربانو نازنین آیا وکیلم که تو را به پیمان همسری با مهربان رخام در آورم؟\n\n(عروس در نخستین بار، سکوت می‌کند. دوباره پرسیده می‌شود، باز سکوت می‌کند و سرانجام در نوبت سوم با لبخند و وقار پاسخ می‌دهد: بله / آری)\n\nاکنون که شما با دل و جان، در پرتوِ آتش جاویدان، و در حضور این جمع گرامی، پیمان خویش را استوار ساختید، شما را در این لحظه، زن و شوهر می‌خوانم. اکنون، با بوسه‌ای مهرآمیز، این پیمان مقدس را مهر کنید."
          },
          english: {
            title: "✨(Turning to the bride)",
            content: "Beloved bride, like a spring blossom, you have entered the garden of life, and today you open your heart to this union. The groom, with love and devotion, is seeking your hand.\n\nSo I ask you:\nDo I have your permission to wed you in marriage to this honorable groom?\n(The bride remains silent the first time. The question is asked again, the bride remains silent again, and finally, at the third time, she answers with a smile and grace: Yes / I do)\n\nNow, as you have, with heart and soul, in the light of the Eternal Flame, and before this honored gathering, sealed your vow, I now pronounce you husband and wife. And now, with a kiss of affection, seal this sacred bond."
          }
        }
      ]
    },

    // Initialize the app
    init: function() {
      console.log('App initializing...');
      this.setupEventListeners();
      this.setupScrollListener();
      console.log('App initialization complete');
    },

    // Set up event listeners with a more reliable approach
    setupEventListeners: function() {
      const self = this;
      
      // Use event delegation on document for all clicks
      document.addEventListener('click', function(e) {
        console.log('Click detected on:', e.target.className, e.target.tagName);
        
        // Language selection buttons on landing page
        if (e.target && e.target.classList.contains('language-btn')) {
          e.preventDefault();
          e.stopPropagation();
          const language = e.target.getAttribute('data-lang');
          console.log('Language selection button clicked:', language);
          self.selectLanguage(language);
          return false;
        }
        
        // Language toggle in header
        if (e.target && e.target.classList.contains('language-toggle')) {
          e.preventDefault();
          e.stopPropagation();
          const language = e.target.getAttribute('data-lang');
          console.log('Language toggle clicked:', language);
          self.switchLanguage(language);
          return false;
        }
        
        // Navigation items
        if (e.target && e.target.classList.contains('nav-item')) {
          e.preventDefault();
          e.stopPropagation();
          const sectionIndex = parseInt(e.target.getAttribute('data-section-index'));
          console.log('Navigation item clicked:', sectionIndex);
          self.scrollToSection(sectionIndex);
          return false;
        }
      });

      // Add additional direct event listeners as backup
      const setupDirectListeners = function() {
        const languageButtons = document.querySelectorAll('.language-btn');
        console.log('Setting up direct listeners for', languageButtons.length, 'language buttons');
        
        languageButtons.forEach(function(btn, index) {
          console.log('Setting up listener for button', index, 'with lang:', btn.getAttribute('data-lang'));
          btn.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            const language = this.getAttribute('data-lang');
            console.log('Direct click handler - Language button clicked:', language);
            self.selectLanguage(language);
            return false;
          };
        });

        const languageToggles = document.querySelectorAll('.language-toggle');
        languageToggles.forEach(function(btn) {
          btn.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            const language = this.getAttribute('data-lang');
            console.log('Direct click handler - Language toggle clicked:', language);
            self.switchLanguage(language);
            return false;
          };
        });
      };

      // Set up direct listeners immediately and also after a delay
      setupDirectListeners();
      setTimeout(setupDirectListeners, 100);
      setTimeout(setupDirectListeners, 500);
    },

    // Select language from landing page
    selectLanguage: function(language) {
      console.log('selectLanguage called with:', language);
      try {
        this.currentLanguage = language;
        console.log('Language set to:', this.currentLanguage);
        
        this.showMainApp();
        this.updateLanguageClass();
        this.renderMainHeader();
        this.renderContent();
        this.renderNavigation();
        this.updateLanguageToggle();
        
        console.log('Language selection complete, content loaded for:', language);
      } catch (error) {
        console.error('Error in selectLanguage:', error);
        this.showError('Failed to load ceremony content: ' + error.message);
      }
    },

    // Switch language in main app
    switchLanguage: function(language) {
      if (language === this.currentLanguage) {
        console.log('Same language selected, no change needed');
        return;
      }
      
      console.log('switchLanguage called - switching from', this.currentLanguage, 'to', language);
      
      try {
        // Save current scroll position
        const scrollPosition = this.getCurrentScrollPosition();
        
        this.currentLanguage = language;
        this.updateLanguageClass();
        this.renderMainHeader();
        this.renderContent();
        this.renderNavigation();
        this.updateLanguageToggle();
        
        // Restore scroll position after content loads
        setTimeout(function() {
          scrollPosition.restore();
        }, 100);
        
        console.log('Language switch complete to:', language);
      } catch (error) {
        console.error('Error in switchLanguage:', error);
        this.showError('Failed to switch language: ' + error.message);
      }
    },

    // Show main app and hide landing page
    showMainApp: function() {
      console.log('showMainApp called');
      const landingPage = document.getElementById('landing-page');
      const mainApp = document.getElementById('main-app');
      
      console.log('Landing page element:', landingPage ? 'found' : 'not found');
      console.log('Main app element:', mainApp ? 'found' : 'not found');
      
      if (landingPage && mainApp) {
        landingPage.classList.add('hidden');
        mainApp.classList.remove('hidden');
        console.log('Successfully switched to main app');
      } else {
        console.error('Landing page or main app elements not found');
        this.showError('App interface elements not available');
      }
    },

    // Update language class on body
    updateLanguageClass: function() {
      const body = document.body;
      body.classList.remove('app-english', 'app-farsi');
      body.classList.add('app-' + this.currentLanguage);
      console.log('Language class updated to:', 'app-' + this.currentLanguage);
    },

    // Render main header separately
    renderMainHeader: function() {
      const mainHeaderElement = document.getElementById('main-ceremony-title');
      if (!mainHeaderElement) {
        console.error('Main header element not found');
        return;
      }

      const headerText = this.ceremonyData.main_header[this.currentLanguage];
      if (headerText) {
        mainHeaderElement.textContent = headerText;
        console.log('Main header rendered:', headerText);
      } else {
        console.error('Main header text not found for language:', this.currentLanguage);
      }
    },

    // Render content sections
    renderContent: function() {
      const container = document.getElementById('content-container');
      const sections = this.ceremonyData.sections;
      
      if (!container) {
        console.error('Content container not found');
        this.showError('Content container not available');
        return;
      }
      
      if (!sections || sections.length === 0) {
        console.error('No sections found');
        this.showError('No ceremony sections available');
        return;
      }
      
      // Clear container
      container.innerHTML = '';
      
      // Create sections
      const self = this;
      sections.forEach(function(section, index) {
        const sectionData = section[self.currentLanguage];
        if (!sectionData || !sectionData.title || !sectionData.content) {
          console.warn('Section missing data:', section.id, sectionData);
          return;
        }
        
        const sectionEl = document.createElement('div');
        sectionEl.className = 'content-section';
        sectionEl.setAttribute('data-section-index', index);
        
        let html = '<h2 class="section-title">' + self.escapeHtml(sectionData.title) + '</h2>';
        html += '<div class="section-content">' + self.processContent(sectionData.content) + '</div>';
        
        sectionEl.innerHTML = html;
        container.appendChild(sectionEl);
      });
      
      console.log('Content rendered for language:', this.currentLanguage, 'with', sections.length, 'sections');
    },

    // Process content to handle HTML tags like <strong>
    processContent: function(content) {
      // Allow <strong> tags but escape everything else
      return content
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/&lt;strong&gt;/g, '<strong>')
        .replace(/&lt;\/strong&gt;/g, '</strong>');
    },

    // Render navigation
    renderNavigation: function() {
      const navContainer = document.getElementById('section-nav-items');
      const sections = this.ceremonyData.sections;
      
      if (!navContainer) {
        console.error('Navigation container not found');
        return;
      }
      
      if (!sections || sections.length === 0) {
        console.error('No sections for navigation');
        return;
      }
      
      // Clear navigation
      navContainer.innerHTML = '';
      
      const self = this;
      sections.forEach(function(section, index) {
        const sectionData = section[self.currentLanguage];
        if (!sectionData || !sectionData.title) return;
        
        const navItem = document.createElement('button');
        navItem.className = 'nav-item';
        navItem.textContent = sectionData.title.replace(/🌿|🕊️|✨/g, '').trim();
        navItem.setAttribute('data-section-index', index);
        
        navContainer.appendChild(navItem);
      });
      
      console.log('Navigation rendered for language:', this.currentLanguage);
    },

    // Update language toggle buttons
    updateLanguageToggle: function() {
      const toggles = document.querySelectorAll('.language-toggle');
      const self = this;
      
      toggles.forEach(function(btn) {
        const lang = btn.getAttribute('data-lang');
        btn.classList.toggle('active', lang === self.currentLanguage);
      });
    },

    // Get current scroll position
    getCurrentScrollPosition: function() {
      const scrollTop = window.pageYOffset;
      
      return {
        restore: function() {
          window.scrollTo(0, scrollTop);
        }
      };
    },

    // Scroll to specific section
    scrollToSection: function(sectionIndex) {
      const sections = document.querySelectorAll('.content-section');
      if (sections[sectionIndex]) {
        sections[sectionIndex].scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    },

    // Setup scroll listener
    setupScrollListener: function() {
      let ticking = false;
      const self = this;
      
      function updateProgress() {
        const scrolled = window.pageYOffset;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const progress = maxScroll > 0 ? (scrolled / maxScroll) * 100 : 0;
        
        const progressBar = document.getElementById('progress-bar');
        if (progressBar) {
          progressBar.style.width = Math.min(Math.max(progress, 0), 100) + '%';
        }
        
        self.updateActiveNavItem();
        ticking = false;
      }

      window.addEventListener('scroll', function() {
        if (!ticking) {
          requestAnimationFrame(updateProgress);
          ticking = true;
        }
      });
    },

    // Update active navigation item
    updateActiveNavItem: function() {
      const sections = document.querySelectorAll('.content-section');
      const navItems = document.querySelectorAll('.nav-item');
      
      if (sections.length === 0 || navItems.length === 0) return;
      
      const scrollTop = window.pageYOffset;
      const viewportHeight = window.innerHeight;
      
      let activeIndex = 0;
      let minDistance = Infinity;

      sections.forEach(function(section, index) {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + scrollTop;
        const distance = Math.abs(scrollTop + viewportHeight / 3 - sectionTop);
        
        if (distance < minDistance) {
          minDistance = distance;
          activeIndex = index;
        }
      });

      navItems.forEach(function(item, index) {
        item.classList.toggle('active', index === activeIndex);
      });

      this.currentSectionIndex = activeIndex;
    },

    // Show error message
    showError: function(message) {
      const container = document.getElementById('content-container') || document.body;
      const errorDiv = document.createElement('div');
      errorDiv.className = 'error-message';
      errorDiv.textContent = 'Error: ' + message;
      container.appendChild(errorDiv);
      console.error('Error shown to user:', message);
    },

    // Escape HTML to prevent XSS
    escapeHtml: function(text) {
      const div = document.createElement('div');
      div.textContent = text;
      return div.innerHTML;
    }
  };

  // Initialize the app
  try {
    app.init();
    console.log('App successfully initialized');
  } catch (error) {
    console.error('Failed to initialize app:', error);
  }
});