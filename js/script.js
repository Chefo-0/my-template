/* ============================================================
   01 — SELECTING ELEMENTS
   ============================================================ */

/*
  نحدد هنا العناصر الأساسية التي سنتعامل معها
  في أكثر من جزء داخل الموقع.
*/


const menuToggle =
  document.querySelector(".menu-toggle");

const mainNav =
  document.querySelector(".main-nav");

const siteHeader =
  document.querySelector(".site-header");

const navLinks =
  document.querySelectorAll(".nav-list a");


/* ============================================================
   02 — MOBILE MENU
   ============================================================ */


/*
  فتح وإغلاق قائمة الـNavigation على الشاشات الصغيرة.
*/

if (menuToggle && mainNav) {

  menuToggle.addEventListener("click", () => {

    mainNav.classList.toggle("menu-open");

    menuToggle.classList.toggle("active");

    const isOpen =
      mainNav.classList.contains("menu-open");


    /*
      تحديث حالة القائمة بالنسبة
      لأدوات Accessibility.
    */

    menuToggle.setAttribute(
      "aria-expanded",
      String(isOpen)
    );


    /*
      تحديث النص الذي يظهر لقارئات الشاشة.
    */

    menuToggle.setAttribute(
      "aria-label",
      isOpen
        ? "Close navigation menu"
        : "Open navigation menu"
    );

  });

}


/* ============================================================
   03 — CLOSE MOBILE MENU AFTER CLICKING A LINK
   ============================================================ */


/*
  عند الضغط على أي رابط داخل الـNavigation
  نقوم بإغلاق القائمة على الهاتف.
*/

navLinks.forEach((link) => {

  link.addEventListener("click", () => {

    if (!mainNav || !menuToggle) {
      return;
    }


    mainNav.classList.remove("menu-open");

    menuToggle.classList.remove("active");


    menuToggle.setAttribute(
      "aria-expanded",
      "false"
    );


    menuToggle.setAttribute(
      "aria-label",
      "Open navigation menu"
    );

  });

});


/* ============================================================
   04 — CLOSE MENU WHEN CLICKING OUTSIDE
   ============================================================ */


/*
  إذا ضغط المستخدم خارج الـNavigation
  وخارج زر الـMenu، نقوم بإغلاق القائمة.
*/

document.addEventListener("click", (event) => {

  if (!mainNav || !menuToggle) {
    return;
  }


  const clickedInsideNav =
    mainNav.contains(event.target);

  const clickedMenuButton =
    menuToggle.contains(event.target);


  if (
    !clickedInsideNav &&
    !clickedMenuButton
  ) {

    mainNav.classList.remove("menu-open");

    menuToggle.classList.remove("active");


    menuToggle.setAttribute(
      "aria-expanded",
      "false"
    );


    menuToggle.setAttribute(
      "aria-label",
      "Open navigation menu"
    );

  }

});


/* ============================================================
   05 — HEADER ON SCROLL
   ============================================================ */


/*
  نضيف class "scrolled" إلى الـHeader
  عندما ينزل المستخدم أكثر من 30px.
*/

window.addEventListener("scroll", () => {

  if (!siteHeader) {
    return;
  }


  if (window.scrollY > 30) {

    siteHeader.classList.add("scrolled");

  } else {

    siteHeader.classList.remove("scrolled");

  }

});


/* ============================================================
   06 — HERO
   ============================================================ */


/*
  الحصول على عناصر الـHero.
*/

const heroEyebrow =
  document.querySelector("#hero-eyebrow");

const heroTitle =
  document.querySelector("#hero-title");

const heroDescription =
  document.querySelector("#hero-description");

const heroPrimaryButton =
  document.querySelector("#hero-primary-button");

const heroSecondaryButton =
  document.querySelector("#hero-secondary-button");

const heroImage =
  document.querySelector("#hero-image");


/*
  وضع البيانات داخل الـHTML.
*/

if (
  heroEyebrow &&
  heroTitle &&
  heroDescription &&
  heroPrimaryButton &&
  heroSecondaryButton &&
  heroImage
) {

  heroEyebrow.textContent =
    siteData.hero.eyebrow;

  heroTitle.textContent =
    siteData.hero.title;

  heroDescription.textContent =
    siteData.hero.description;


  /*
    Primary Button
  */

  heroPrimaryButton.textContent =
    siteData.hero.primaryButton.text;

  heroPrimaryButton.href =
    siteData.hero.primaryButton.link;


  /*
    Secondary Button
  */

  heroSecondaryButton.textContent =
    siteData.hero.secondaryButton.text;

  heroSecondaryButton.href =
    siteData.hero.secondaryButton.link;


  /*
    Hero Image
  */

  heroImage.src =
    siteData.hero.image.src;

  heroImage.alt =
    siteData.hero.image.alt;

  heroImage.loading =
    "eager";

  heroImage.decoding =
    "async";

  heroImage.setAttribute(
    "fetchpriority",
    "high"
  );

}


/* ============================================================
   07 — ABOUT
   ============================================================ */


/*
  الحصول على عناصر الـAbout.
*/

const aboutEyebrow =
  document.querySelector("#about-eyebrow");

const aboutTitle =
  document.querySelector("#about-title");

const aboutDescription =
  document.querySelector("#about-description");

const aboutImage =
  document.querySelector("#about-image");

const aboutContentTitle =
  document.querySelector("#about-content-title");

const aboutContentDescription =
  document.querySelector(
    "#about-content-description"
  );

const aboutButton =
  document.querySelector("#about-button");


/*
  وضع بيانات الـAbout داخل الـHTML.
*/

if (
  aboutEyebrow &&
  aboutTitle &&
  aboutDescription &&
  aboutImage &&
  aboutContentTitle &&
  aboutContentDescription &&
  aboutButton
) {

  aboutEyebrow.textContent =
    siteData.about.eyebrow;

  aboutTitle.textContent =
    siteData.about.title;

  aboutDescription.textContent =
    siteData.about.description;


  /*
    About Image
  */

  aboutImage.src =
    siteData.about.image.src;

  aboutImage.alt =
    siteData.about.image.alt;

  aboutImage.loading =
    "lazy";

  aboutImage.decoding =
    "async";


  /*
    About Content
  */

  aboutContentTitle.textContent =
    siteData.about.content.title;

  aboutContentDescription.textContent =
    siteData.about.content.description;


  /*
    About Button
  */

  aboutButton.textContent =
    siteData.about.button.text;

  aboutButton.href =
    siteData.about.button.link;

}


/* ============================================================
   08 — SERVICES
   ============================================================ */


/*
  نحدد المكان الذي سيتم داخله إنشاء
  Service Cards.
*/

const servicesGrid =
  document.querySelector("#services-grid");


if (servicesGrid) {

  siteData.services.forEach((service) => {

    const serviceCard =
      document.createElement("article");


    serviceCard.classList.add(
      "service-card",
      "reveal"
    );


    /*
      Service Icon
    */

    const serviceIcon =
      document.createElement("div");

    serviceIcon.classList.add(
      "service-icon"
    );

    serviceIcon.textContent =
      service.icon;


    /*
      Service Title
    */

    const serviceTitle =
      document.createElement("h3");

    serviceTitle.textContent =
      service.title;


    /*
      Service Description
    */

    const serviceDescription =
      document.createElement("p");

    serviceDescription.textContent =
      service.description;


    /*
      إضافة العناصر داخل الـCard.
    */

    serviceCard.appendChild(
      serviceIcon
    );

    serviceCard.appendChild(
      serviceTitle
    );

    serviceCard.appendChild(
      serviceDescription
    );


    servicesGrid.appendChild(
      serviceCard
    );

  });

}


/* ============================================================
   09 — PORTFOLIO
   ============================================================ */


/*
  نحدد المكان الذي سيتم داخله إنشاء
  Project Cards.
*/

const portfolioGrid =
  document.querySelector("#portfolio-grid");


if (portfolioGrid) {

  siteData.portfolio.forEach((project) => {

    const portfolioCard =
      document.createElement("article");


    portfolioCard.classList.add(
      "project-card",
      "reveal"
    );


    /*
      Project Image Container
    */

    const projectImage =
      document.createElement("div");

    projectImage.classList.add(
      "project-image"
    );


    /*
      Project Image
    */

    const projectImageElement =
      document.createElement("img");

    projectImageElement.src =
      project.image;

    projectImageElement.alt =
      project.title;

    projectImageElement.loading =
      "lazy";

    projectImageElement.decoding =
      "async";


    projectImage.appendChild(
      projectImageElement
    );


    /*
      Project Content
    */

    const projectContent =
      document.createElement("div");

    projectContent.classList.add(
      "project-content"
    );


    /*
      Project Category
    */

    const projectCategory =
      document.createElement("span");

    projectCategory.classList.add(
      "project-category"
    );

    projectCategory.textContent =
      project.category;


    /*
      Project Title
    */

    const projectTitle =
      document.createElement("h3");

    projectTitle.textContent =
      project.title;


    /*
      Project Description
    */

    const projectDescription =
      document.createElement("p");

    projectDescription.textContent =
      project.description;


    /*
      Project Link
    */

    const projectLink =
      document.createElement("a");

    projectLink.href =
      project.link;

    projectLink.classList.add(
      "project-link"
    );

    projectLink.textContent =
      "View Project";


    /*
      إذا كان الرابط خارجيًا
      نضيف الخصائص المناسبة.
    */

    if (
      project.link.startsWith("http://") ||
      project.link.startsWith("https://")
    ) {

      projectLink.target =
        "_blank";

      projectLink.rel =
        "noopener noreferrer";

    }


    /*
      إضافة العناصر داخل Project Content.
    */

    projectContent.appendChild(
      projectCategory
    );

    projectContent.appendChild(
      projectTitle
    );

    projectContent.appendChild(
      projectDescription
    );

    projectContent.appendChild(
      projectLink
    );


    /*
      إضافة محتوى الـCard.
    */

    portfolioCard.appendChild(
      projectImage
    );

    portfolioCard.appendChild(
      projectContent
    );


    portfolioGrid.appendChild(
      portfolioCard
    );

  });

}


/* ============================================================
   10 — TESTIMONIALS
   ============================================================ */


/*
  نحدد المكان الذي سيتم داخله إنشاء
  Testimonial Cards.
*/

const testimonialsGrid =
  document.querySelector(
    "#testimonials-grid"
  );


if (testimonialsGrid) {

  siteData.testimonials.forEach(
    (testimonial) => {

      const testimonialCard =
        document.createElement("article");


      testimonialCard.classList.add(
        "testimonial-card",
        "reveal"
      );


      /*
        Testimonial Message
      */

      const testimonialMessage =
        document.createElement("p");

      testimonialMessage.classList.add(
        "testimonial-message"
      );

      testimonialMessage.textContent =
        `"${testimonial.message}"`;


      /*
        Testimonial Author
      */

      const testimonialAuthor =
        document.createElement("div");

      testimonialAuthor.classList.add(
        "testimonial-author"
      );


      /*
        Author Name
      */

      const testimonialName =
        document.createElement("h3");

      testimonialName.textContent =
        testimonial.name;


      /*
        Author Role
      */

      const testimonialRole =
        document.createElement("span");

      testimonialRole.textContent =
        testimonial.role;


      /*
        إضافة البيانات داخل Author.
      */

      testimonialAuthor.appendChild(
        testimonialName
      );

      testimonialAuthor.appendChild(
        testimonialRole
      );


      /*
        إضافة المحتوى داخل الـCard.
      */

      testimonialCard.appendChild(
        testimonialMessage
      );

      testimonialCard.appendChild(
        testimonialAuthor
      );


      testimonialsGrid.appendChild(
        testimonialCard
      );

    }
  );

}


/* ============================================================
   11 — PRICING
   ============================================================ */


/*
  نحدد المكان الذي سيتم داخله إنشاء
  Pricing Cards.
*/

const pricingGrid =
  document.querySelector("#pricing-grid");


if (pricingGrid) {

  siteData.pricing.forEach((plan) => {

    const pricingCard =
      document.createElement("article");


    pricingCard.classList.add(
      "pricing-card",
      "reveal"
    );


    /*
      إذا كانت الخطة Featured
      نضيف class إضافية إليها.
    */

    if (plan.featured) {

      pricingCard.classList.add(
        "featured"
      );

    }


    /*
      Pricing Header
    */

    const pricingHeader =
      document.createElement("div");

    pricingHeader.classList.add(
      "pricing-header"
    );


    /*
      Plan Name
    */

    const planName =
      document.createElement("h3");

    planName.textContent =
      plan.name;


    /*
      Plan Description
    */

    const planDescription =
      document.createElement("p");

    planDescription.textContent =
      plan.description;


    /*
      Pricing Price Container
    */

    const pricingPrice =
      document.createElement("div");

    pricingPrice.classList.add(
      "pricing-price"
    );


    /*
      Price
    */

    const price =
      document.createElement("span");

    price.classList.add(
      "price"
    );

    price.textContent =
      plan.price;


    /*
      Period
    */

    const period =
      document.createElement("span");

    period.classList.add(
      "period"
    );

    period.textContent =
      plan.period;


    /*
      تجميع السعر.
    */

    pricingPrice.appendChild(
      price
    );

    pricingPrice.appendChild(
      period
    );


    /*
      تجميع Pricing Header.
    */

    pricingHeader.appendChild(
      planName
    );

    pricingHeader.appendChild(
      planDescription
    );

    pricingHeader.appendChild(
      pricingPrice
    );


    /*
      Pricing Features
    */

    const pricingFeatures =
      document.createElement("ul");

    pricingFeatures.classList.add(
      "pricing-features"
    );


    plan.features.forEach(
      (feature) => {

        const featureItem =
          document.createElement("li");

        featureItem.textContent =
          `✓ ${feature}`;

        pricingFeatures.appendChild(
          featureItem
        );

      }
    );


    /*
      Pricing Button
    */

    const pricingButton =
      document.createElement("a");

    pricingButton.href =
      plan.buttonLink;

    pricingButton.classList.add(
      "btn",
      "btn-primary"
    );

    pricingButton.textContent =
      plan.buttonText;


    /*
      إضافة جميع العناصر داخل Card.
    */

    pricingCard.appendChild(
      pricingHeader
    );

    pricingCard.appendChild(
      pricingFeatures
    );

    pricingCard.appendChild(
      pricingButton
    );


    pricingGrid.appendChild(
      pricingCard
    );

  });

}


/* ============================================================
   12 — FAQ
   ============================================================ */


/*
  نحدد المكان الذي سيتم داخله إنشاء
  FAQ Items.
*/

const faqList =
  document.querySelector("#faq-list");


if (faqList) {

  siteData.faq.forEach((item) => {

    const faqItem =
      document.createElement("details");


    faqItem.classList.add(
      "faq-item",
      "reveal"
    );


    /*
      FAQ Question
    */

    const faqQuestion =
      document.createElement("summary");

    faqQuestion.classList.add(
      "faq-question"
    );


    /*
      Question Text
    */

    const questionText =
      document.createElement("span");

    questionText.textContent =
      item.question;


    /*
      FAQ Icon
    */

    const faqIcon =
      document.createElement("span");

    faqIcon.classList.add(
      "faq-icon"
    );

    faqIcon.textContent =
      "+";


    /*
      إضافة السؤال والأيقونة.
    */

    faqQuestion.appendChild(
      questionText
    );

    faqQuestion.appendChild(
      faqIcon
    );


    /*
      FAQ Answer Container
    */

    const faqAnswer =
      document.createElement("div");

    faqAnswer.classList.add(
      "faq-answer"
    );


    /*
      FAQ Answer Text
    */

    const faqAnswerText =
      document.createElement("p");

    faqAnswerText.textContent =
      item.answer;


    faqAnswer.appendChild(
      faqAnswerText
    );


    /*
      إضافة السؤال والإجابة
      داخل FAQ Item.
    */

    faqItem.appendChild(
      faqQuestion
    );

    faqItem.appendChild(
      faqAnswer
    );


    faqList.appendChild(
      faqItem
    );

  });


  /*
    بعد إنشاء الـFAQ Items
    نحدد جميع العناصر حتى يعمل الـAccordion.
  */

  const faqItems =
    document.querySelectorAll(
      ".faq-item"
    );


  faqItems.forEach((item) => {

    item.addEventListener(
      "toggle",
      () => {

        if (item.open) {

          faqItems.forEach(
            (otherItem) => {

              if (
                otherItem !== item
              ) {

                otherItem.removeAttribute(
                  "open"
                );

              }

            }
          );

        }

      }
    );

  });

}


/* ============================================================
   13 — CTA
   ============================================================ */


/*
  الحصول على عناصر الـCTA.
*/

const ctaEyebrow =
  document.querySelector("#cta-eyebrow");

const ctaTitle =
  document.querySelector("#cta-title");

const ctaDescription =
  document.querySelector("#cta-description");

const ctaButton =
  document.querySelector("#cta-button");


/*
  وضع بيانات الـCTA داخل الـHTML.
*/

if (
  ctaEyebrow &&
  ctaTitle &&
  ctaDescription &&
  ctaButton
) {

  ctaEyebrow.textContent =
    siteData.cta.eyebrow;

  ctaTitle.textContent =
    siteData.cta.title;

  ctaDescription.textContent =
    siteData.cta.description;

  ctaButton.textContent =
    siteData.cta.button.text;

  ctaButton.href =
    siteData.cta.button.link;

}


/* ============================================================
   14 — CONTACT
   ============================================================ */


/*
  الحصول على عناصر الـContact.
*/

const contactEyebrow =
  document.querySelector(
    "#contact-eyebrow"
  );

const contactTitle =
  document.querySelector(
    "#contact-title"
  );

const contactDescription =
  document.querySelector(
    "#contact-description"
  );

const contactEmail =
  document.querySelector(
    "#contact-email"
  );

const contactPhone =
  document.querySelector(
    "#contact-phone"
  );

const contactAddress =
  document.querySelector(
    "#contact-address"
  );


/*
  وضع بيانات الـContact داخل الـHTML.
*/

if (
  contactEyebrow &&
  contactTitle &&
  contactDescription &&
  contactEmail &&
  contactPhone &&
  contactAddress
) {

  contactEyebrow.textContent =
    siteData.contact.eyebrow;

  contactTitle.textContent =
    siteData.contact.title;

  contactDescription.textContent =
    siteData.contact.description;


  /*
    Email
  */

  contactEmail.textContent =
    siteData.contact.email;

  contactEmail.href =
    `mailto:${siteData.contact.email}`;


  /*
    Phone
  */

  contactPhone.textContent =
    siteData.contact.phone;

  contactPhone.href =
    `tel:${siteData.contact.phone.replace(
      /\s/g,
      ""
    )}`;


  /*
    Address
  */

  contactAddress.textContent =
    siteData.contact.address;

}


/* ============================================================
   15 — CONTACT FORM
   ============================================================ */


/*
  الحصول على الـContact Form.
*/

const contactForm =
  document.querySelector(
    ".contact-form"
  );


if (contactForm) {

  contactForm.addEventListener(
    "submit",
    (event) => {

      /*
        منع الـForm من عمل Page Reload.
      */

      event.preventDefault();


      /*
        التحقق من صحة البيانات
        باستخدام HTML5 Validation.
      */

      if (!contactForm.checkValidity()) {

        contactForm.reportValidity();

        return;

      }


      /*
        الحصول على بيانات الـForm.
      */

      const formData =
        new FormData(contactForm);


      const name =
        formData.get("name");

      const email =
        formData.get("email");

      const message =
        formData.get("message");


      /*
        عرض بيانات الـForm داخل Console
        أثناء مرحلة التطوير والاختبار.

        لاحقًا عند ربط الـForm
        بخدمة إرسال حقيقية أو Backend
        يمكن إزالة هذه الـLogs.
      */

      console.log("Name:", name);

      console.log("Email:", email);

      console.log("Message:", message);


      /*
        رسالة مؤقتة للمستخدم.
      */

      alert(
        "Thank you! Your message has been received."
      );


      /*
        مسح بيانات الـForm.
      */

      contactForm.reset();

    }
  );

}


/* ============================================================
   16 — FOOTER
   ============================================================ */


/*
  الحصول على عناصر الـFooter.
*/

const footerBrandName =
  document.querySelector(
    "#footer-brand-name"
  );

const footerDescription =
  document.querySelector(
    "#footer-description"
  );

const footerSocialLinks =
  document.querySelector(
    "#footer-social-links"
  );

const footerCopyright =
  document.querySelector(
    "#footer-copyright"
  );


if (
  footerBrandName &&
  footerDescription &&
  footerSocialLinks &&
  footerCopyright
) {


  /*
    Brand Name
  */

  footerBrandName.textContent =
    siteData.footer.brandName;


  /*
    Description
  */

  footerDescription.textContent =
    siteData.footer.description;


  /*
    Social Links
  */

  siteData.footer.socialLinks.forEach(
    (social) => {

      const link =
        document.createElement("a");


      link.href =
        social.url;

      link.textContent =
        social.name;


      /*
        إذا كان الرابط خارجيًا
        نفتح الرابط في Tab جديدة.
      */

      if (
        social.url.startsWith("http://") ||
        social.url.startsWith("https://")
      ) {

        link.target =
          "_blank";

        link.rel =
          "noopener noreferrer";

      }


      /*
        تحسين Accessibility.
      */

      link.setAttribute(
        "aria-label",
        social.name
      );


      footerSocialLinks.appendChild(
        link
      );

    }
  );


  /*
    Copyright
  */

  footerCopyright.textContent =
    `© ${new Date().getFullYear()} ${
      siteData.footer.brandName
    }. ${siteData.footer.copyright}`;

}


/* ============================================================
   17 — SCROLL REVEAL
   ============================================================ */


/*
  نتحقق أولًا من دعم المتصفح
  لـIntersectionObserver.
*/

if (
  "IntersectionObserver" in window
) {


  /*
    IntersectionObserver
    يراقب العناصر ويكتشف متى تظهر داخل الشاشة.
  */

  const revealObserver =
    new IntersectionObserver(
      (entries, observer) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add(
              "reveal-visible"
            );

            observer.unobserve(
              entry.target
            );

          }

        });

      },
      {
        threshold: 0.15,
      }
    );


  /*
    دالة تقوم بإضافة جميع عناصر
    .reveal إلى الـObserver.
  */

  function observeRevealElements() {

    const revealElements =
      document.querySelectorAll(
        ".reveal"
      );


    revealElements.forEach(
      (element) => {

        revealObserver.observe(
          element
        );

      }
    );

  }


  /*
    تشغيل Scroll Reveal
    بعد إنشاء جميع الـDynamic Elements.
  */

  observeRevealElements();


} else {


  /*
    إذا كان المتصفح لا يدعم
    IntersectionObserver
    نظهر العناصر بشكل طبيعي.
  */

  const revealElements =
    document.querySelectorAll(
      ".reveal"
    );


  revealElements.forEach(
    (element) => {

      element.classList.add(
        "reveal-visible"
      );

    }
  );

}


/* ============================================================
   18 — CONSOLE MESSAGE
   ============================================================ */


/*
  رسالة تظهر للمطور داخل Console
  للتأكد أن الـJavaScript تم تحميله.
*/

console.log(
  "Website Template loaded successfully."
);