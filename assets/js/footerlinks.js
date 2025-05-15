(function () {
    const footerContact = '<p>520 Grey Street, Brantford, ON N3S 0K1</p>\
                        <p>Canada</p>\
                        <p class="mt-3"><strong>Phone:</strong> <span><a href="tel:+14165789966" class="text-white">+1 416 578 9966</a></span></p>\
                        <p><strong>Email:</strong> <span>info@ayrum.ca</span></p>';

    const facebookLink = "https://www.facebook.com/people/Ayrum-Consulting/61576042030779/";
    const instaLink = "https://www.facebook.com/people/Ayrum-Consulting/61576042030779/";
    const linkedInLink = "https://www.linkedin.com/company/ayrum-it-consulting";

    const headerNavMenu = '<ul>\
                        <li><a href="index.html" class="">Home<br></a></li>\
                        <li><a href="index.html#about">About</a></li>\
                        <li class="dropdown">\
                            <a href="#services"><span>Services</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>\
                            <ul>\
                                <li><a href="web-app-development.html">Web App Development</a></li>\
                                <li><a href="mobile-app-development.html">Mobile App Dvelopment</a></li>\
                                <li><a href="websites-webportals.html">Websites & Portals Development </a></li>\
                                <li><a href="microsoft-365.html">Microsoft 365 Services</a></li>\
                                <li><a href="cloud-solutions.html">Cloud Solutions & Migration</a></li>\
                            </ul>\
                        <li><a href="blogs.html">Blogs</a></li>\
                    </ul>';

    const footerData = {
        usefulLinks: [
            { text: 'Home', url: 'index.html' },
            { text: 'About us', url: 'index.html#about' },
            { text: 'Services', url: 'index.html#services' },
            { text: 'Terms of service', url: 'terms-of-service.html' },
            { text: 'Privacy policy', url: 'privacy-policy.html' },
        ],
        services: [
            { text: 'Web Apps Services', url: 'web-app-development.html' },
            { text: 'Mobile Apps Services', url: 'mobile-app-development.html' },
            { text: 'Websites & Portals', url: 'websites-webportals.html' },
            { text: 'Microsoft 365 Services', url: 'microsoft-365.html' },
            { text: 'Cloud Solutions & Migration', url: 'cloud-solutions.html' },
        ],
        resources: [
            { text: 'Blogs', url: '#' },
            { text: 'About', url: '#' },
            { text: 'Case Studies', url: '#' },
            { text: 'Cost Calculator', url: '#' },
            { text: 'Careers', url: '#' },
        ],
        technologies: [
            { text: 'AI/ML', url: '#' },
            { text: 'Internet of Things (IoT)', url: '#' },
            { text: 'Cloud-Native Development', url: '#' },
            { text: 'Power Platform', url: '#' },
            { text: 'Copilot', url: '#' },
        ]
    };

    function populateList(selector, items) {
        const list = $(selector).find("ul");
        list.empty();
        items.forEach(item => {
            list.append(`<li><a href="${item.url}">${item.text}</a></li>`);
        });
    }
    function populateFooterContact(footerContactData) {
        $(".footer-contact").html(footerContactData);
    }
    populateList("#footer .footer-links:nth-of-type(2)", footerData.usefulLinks);
    populateList("#footer .footer-links:nth-of-type(3)", footerData.services);
    populateList("#footer .footer-links:nth-of-type(4)", footerData.resources);
    populateList("#footer .footer-links:nth-of-type(5)", footerData.technologies);
    populateFooterContact(footerContact);
    $('.social-links .facebook').attr('href', facebookLink);
    $('.social-links .instagram').attr('href', instaLink);
    $('.social-links .linkedin').attr('href', linkedInLink);
    $('#header #navmenu').html(headerNavMenu);
})();
