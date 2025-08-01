import { Feature } from "@/types/feature";
import { pricingData } from "@/stripe/pricingData";

const productFeatures = pricingData.map((product, idx) => ({
  id: 100 + idx, // ensure unique id
  icon: (
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="3" y="7" width="18" height="13" rx="2" fill="#6366F1" />
      <rect x="1" y="3" width="22" height="4" rx="1" fill="#A5B4FC" />
      <rect x="7" y="11" width="10" height="2" rx="1" fill="white" />
      <rect x="7" y="15" width="6" height="2" rx="1" fill="white" />
    </svg>
  ),
  title: product.nickname,
  paragraph: product.offers?.[0] || product.nickname,
  btn: "Learn More",
  btnLink: "#pricing",
}));

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg
        width="35"
        height="35"
        viewBox="0 0 52 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M44.9313 11.7H38.9188C40.5438 10.9687 41.7626 9.99374 42.2501 8.69374C42.9001 6.98749 42.2501 5.19999 40.3001 3.33124C38.1876 1.29999 35.9938 0.568738 33.8001 1.13749C29.9813 2.11249 27.4626 7.06874 26.2438 9.99374C25.1063 7.06874 22.5876 2.11249 18.6876 1.13749C16.4938 0.568738 14.3001 1.29999 12.1876 3.33124C10.2376 5.19999 9.5876 6.98749 10.2376 8.69374C10.7251 9.99374 12.0251 10.9687 13.5688 11.7H7.06885C5.0376 11.7 3.4126 13.325 3.4126 15.3562V21.5312C3.4126 23.5625 5.0376 25.1875 7.06885 25.1875H7.71885V46.2312C7.71885 48.8312 9.83135 51.025 12.5126 51.025H40.1376C42.7376 51.025 44.9313 48.9125 44.9313 46.2312V25.1875C46.9626 25.1875 48.5876 23.5625 48.5876 21.5312V15.3562C48.5063 13.325 46.8813 11.7 44.9313 11.7ZM34.5313 3.98124C34.7751 3.89999 35.0188 3.89999 35.1813 3.89999C36.1563 3.89999 37.2126 4.38749 38.2688 5.52499C38.7563 6.01249 39.8126 7.06874 39.5688 7.79999C39.0001 9.34374 33.9626 10.6437 28.9251 11.05C30.0626 8.36874 32.1751 4.54999 34.5313 3.98124ZM13.0001 7.71874C12.7563 6.98749 13.8126 5.93124 14.3001 5.44374C15.4376 4.38749 16.4126 3.81874 17.3876 3.81874C17.6313 3.81874 17.8751 3.81874 18.0376 3.89999C20.4751 4.54999 22.5063 8.28749 23.6438 10.9687C18.6063 10.5625 13.5688 9.26249 13.0001 7.71874ZM42.0063 46.2312C42.0063 47.2875 41.1126 48.1812 40.0563 48.1812H12.4313C11.3751 48.1812 10.4813 47.2875 10.4813 46.2312V25.1875H41.9251V46.2312H42.0063ZM45.6626 21.5312C45.6626 22.0187 45.3376 22.3437 44.8501 22.3437H7.06885C6.6626 22.3437 6.25635 22.0187 6.25635 21.5312V15.3562C6.25635 14.95 6.6626 14.5437 7.06885 14.5437H44.8501C45.2563 14.5437 45.6626 14.8687 45.6626 15.3562V21.5312Z"
          fill="white"
        />
      </svg>
    ),
    title: "Custom Web Development",
    paragraph:
      "Ignite your online presence with blazing-fast, scalable web applications built for the Nepali market. We craft modern, secure, and SEO-optimized solutions using React, Next.js, and cutting-edge technologies—ensuring your business burns bright in the digital landscape.",
    fullDescription: `
## Why Custom Web Development?

In today's digital-first world, your website is often the first impression customers have of your business. A custom web application goes beyond a simple template, offering unique features, tailored user experiences, and seamless integration with your business processes.

### What We Offer
- **Modern, responsive design** for all devices
- **SEO optimization** to help you rank on Google
- **Performance-focused builds** for fast load times
- **Custom integrations** (APIs, payment gateways, CRMs)
- **Ongoing support and maintenance**

### Our Process
1. **Discovery & Planning:** We learn about your business, goals, and users.
2. **Design:** Wireframes and UI/UX mockups for feedback.
3. **Development:** Agile, transparent, and collaborative.
4. **Launch & Support:** We deploy, monitor, and improve your site.

Ready to ignite your online presence? [Contact us](#contact) for a free consultation.
`,
    btn: "View Projects",
    btnLink: "/#",
  },
  {
    id: 2,
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30.5998 1.01245H5.39981C2.98105 1.01245 0.956055 2.9812 0.956055 5.4562V30.6562C0.956055 33.075 2.9248 35.0437 5.39981 35.0437H30.5998C33.0186 35.0437 34.9873 33.075 34.9873 30.6562V5.39995C34.9873 2.9812 33.0186 1.01245 30.5998 1.01245ZM5.39981 3.48745H30.5998C31.6123 3.48745 32.4561 4.3312 32.4561 5.39995V11.1937H3.4873V5.39995C3.4873 4.38745 4.38731 3.48745 5.39981 3.48745ZM3.4873 30.6V13.725H23.0623V32.5125H5.39981C4.38731 32.5125 3.4873 31.6125 3.4873 30.6ZM30.5998 32.5125H25.5373V13.725H32.4561V30.6C32.5123 31.6125 31.6123 32.5125 30.5998 32.5125Z"
          fill="white"
        />
      </svg>
    ),
    title: "Mobile App Development",
    paragraph:
      "Spark engagement with stunning, high-performance mobile apps for iOS and Android. We design and develop intuitive, reliable applications using Flutter and React Native, empowering Nepali businesses to connect with customers anywhere, anytime—keeping your brand glowing in their pockets.",
    fullDescription: `
## Mobile App Development for Modern Businesses

Mobile apps are essential for reaching customers on the go. Our team specializes in building:

- **Cross-platform apps** (iOS & Android) with Flutter or React Native
- **Custom UI/UX** tailored to your brand
- **Secure authentication and payments**
- **Push notifications and real-time updates**

#### Why Choose Us?
We focus on performance, reliability, and user experience. From MVPs to enterprise-grade solutions, we deliver apps that help Nepali businesses grow.

**Let’s build your next big thing!** [Contact us](#contact) to get started.
`,
    btn: "View Projects",
    btnLink: "/#",
  },
  {
    id: 3,
    icon: (
      <svg
        width="37"
        height="37"
        viewBox="0 0 37 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M33.5613 21.4677L31.3675 20.1177C30.805 19.7239 30.0175 19.9489 29.6238 20.5114C29.23 21.1302 29.455 21.8614 30.0175 22.2552L31.48 23.2114L18.1488 31.5927L4.76127 23.2114L6.22377 22.2552C6.84252 21.8614 7.01127 21.0739 6.61752 20.5114C6.22377 19.8927 5.43627 19.7239 4.87377 20.1177L2.68002 21.4677C2.11752 21.8614 1.72377 22.4802 1.72377 23.1552C1.72377 23.8302 2.06127 24.5052 2.68002 24.8427L17.08 33.8989C17.4175 34.1239 17.755 34.1802 18.1488 34.1802C18.5425 34.1802 18.88 34.0677 19.2175 33.8989L33.5613 24.8989C34.1238 24.5052 34.5175 23.8864 34.5175 23.2114C34.5175 22.5364 34.18 21.8614 33.5613 21.4677Z"
          fill="white"
        />
        <path
          d="M20.1175 20.4552L18.1488 21.6364L16.18 20.3989C15.5613 20.0052 14.83 20.2302 14.4363 20.7927C14.0425 21.4114 14.2675 22.1427 14.83 22.5364L17.4738 24.1677C17.6988 24.2802 17.9238 24.3364 18.1488 24.3364C18.3738 24.3364 18.5988 24.2802 18.8238 24.1677L21.4675 22.5364C22.0863 22.1427 22.255 21.3552 21.8613 20.7927C21.4675 20.2302 20.68 20.0614 20.1175 20.4552Z"
          fill="white"
        />
        <path
          d="M7.74252 18.0927L11.455 20.4552C11.68 20.5677 11.905 20.6239 12.13 20.6239C12.5238 20.6239 12.9738 20.3989 13.1988 20.0052C13.5925 19.3864 13.3675 18.6552 12.805 18.2614L9.09252 15.8989C8.47377 15.5052 7.74252 15.7302 7.34877 16.2927C6.95502 16.9677 7.12377 17.7552 7.74252 18.0927Z"
          fill="white"
        />
        <path
          d="M5.04252 16.1802C5.43627 16.1802 5.88627 15.9552 6.11127 15.5614C6.50502 14.9427 6.28002 14.2114 5.71752 13.8177L4.81752 13.2552L5.71752 12.6927C6.33627 12.2989 6.50502 11.5114 6.11127 10.9489C5.71752 10.3302 4.93002 10.1614 4.36752 10.5552L1.72377 12.1864C1.33002 12.4114 1.10502 12.8052 1.10502 13.2552C1.10502 13.7052 1.33002 14.0989 1.72377 14.3239L4.36752 15.9552C4.53627 16.1239 4.76127 16.1802 5.04252 16.1802Z"
          fill="white"
        />
        <path
          d="M8.41752 10.7239C8.64252 10.7239 8.86752 10.6677 9.09252 10.5552L12.805 8.1927C13.4238 7.79895 13.5925 7.01145 13.1988 6.44895C12.805 5.8302 12.0175 5.66145 11.455 6.0552L7.74252 8.4177C7.12377 8.81145 6.95502 9.59895 7.34877 10.1614C7.57377 10.4989 7.96752 10.7239 8.41752 10.7239Z"
          fill="white"
        />
        <path
          d="M16.18 6.05522L18.1488 4.81772L20.1175 6.05522C20.3425 6.16772 20.5675 6.22397 20.7925 6.22397C21.1863 6.22397 21.6363 5.99897 21.8613 5.60522C22.255 4.98647 22.03 4.25522 21.4675 3.86147L18.8238 2.23022C18.43 1.94897 17.8675 1.94897 17.4738 2.23022L14.83 3.86147C14.2113 4.25522 14.0425 5.04272 14.4363 5.60522C14.83 6.16772 15.6175 6.44897 16.18 6.05522Z"
          fill="white"
        />
        <path
          d="M23.4925 8.19267L27.205 10.5552C27.43 10.6677 27.655 10.7239 27.88 10.7239C28.2738 10.7239 28.7238 10.4989 28.9488 10.1052C29.3425 9.48642 29.1175 8.75517 28.555 8.36142L24.8425 5.99892C24.28 5.60517 23.4925 5.83017 23.0988 6.39267C22.705 7.01142 22.8738 7.79892 23.4925 8.19267Z"
          fill="white"
        />
        <path
          d="M34.5738 12.1864L31.93 10.5552C31.3675 10.1614 30.58 10.3864 30.1863 10.9489C29.7925 11.5677 30.0175 12.2989 30.58 12.6927L31.48 13.2552L30.58 13.8177C29.9613 14.2114 29.7925 14.9989 30.1863 15.5614C30.4113 15.9552 30.8613 16.1802 31.255 16.1802C31.48 16.1802 31.705 16.1239 31.93 16.0114L34.5738 14.3802C34.9675 14.1552 35.1925 13.7614 35.1925 13.3114C35.1925 12.8614 34.9675 12.4114 34.5738 12.1864Z"
          fill="white"
        />
        <path
          d="M24.1675 20.624C24.3925 20.624 24.6175 20.5677 24.8425 20.4552L28.555 18.0927C29.1738 17.699 29.3425 16.9115 28.9488 16.349C28.555 15.7302 27.7675 15.5615 27.205 15.9552L23.4925 18.3177C22.8738 18.7115 22.705 19.499 23.0988 20.0615C23.3238 20.4552 23.7175 20.624 24.1675 20.624Z"
          fill="white"
        />
      </svg>
    ),
    title: "Cloud & DevOps",
    paragraph:
      "Fuel your digital transformation with blazing-fast cloud infrastructure and DevOps automation. We set up AWS, Azure, and Google Cloud environments, automate deployments, and implement enterprise-grade security—ensuring your business burns bright 24/7 with unmatched performance and reliability.",
    fullDescription: `
## Cloud & DevOps: Powering Your Digital Growth

Cloud and DevOps are the backbone of modern, scalable businesses. We help you:

- **Migrate to AWS, Azure, or Google Cloud**
- **Automate deployments** for faster releases
- **Implement CI/CD pipelines**
- **Monitor and secure your infrastructure**

#### Our Approach
We assess your needs, design a cloud architecture, and automate everything from code to deployment. Our DevOps practices ensure your business is always online, secure, and ready to scale.

**Let’s fuel your digital transformation!** [Contact us](#contact) for a free cloud assessment.
`,
    btn: "View Projects",
    btnLink: "/#",
  },
  {
    id: 4,
    icon: (
      <svg
        width="37"
        height="37"
        viewBox="0 0 37 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.355 2.0614H5.21129C3.29879 2.0614 1.72379 3.6364 1.72379 5.5489V12.6927C1.72379 14.6052 3.29879 16.1802 5.21129 16.1802H12.355C14.2675 16.1802 15.8425 14.6052 15.8425 12.6927V5.60515C15.8988 3.6364 14.3238 2.0614 12.355 2.0614ZM13.3675 12.7489C13.3675 13.3114 12.9175 13.7614 12.355 13.7614H5.21129C4.64879 13.7614 4.19879 13.3114 4.19879 12.7489V5.60515C4.19879 5.04265 4.64879 4.59265 5.21129 4.59265H12.355C12.9175 4.59265 13.3675 5.04265 13.3675 5.60515V12.7489Z"
          fill="white"
        />
        <path
          d="M31.0863 2.0614H23.9425C22.03 2.0614 20.455 3.6364 20.455 5.5489V12.6927C20.455 14.6052 22.03 16.1802 23.9425 16.1802H31.0863C32.9988 16.1802 34.5738 14.6052 34.5738 12.6927V5.60515C34.5738 3.6364 32.9988 2.0614 31.0863 2.0614ZM32.0988 12.7489C32.0988 13.3114 31.6488 13.7614 31.0863 13.7614H23.9425C23.38 13.7614 22.93 13.3114 22.93 12.7489V5.60515C22.93 5.04265 23.38 4.59265 23.9425 4.59265H31.0863C31.6488 4.59265 32.0988 5.04265 32.0988 5.60515V12.7489Z"
          fill="white"
        />
        <path
          d="M12.355 20.0051H5.21129C3.29879 20.0051 1.72379 21.5801 1.72379 23.4926V30.6364C1.72379 32.5489 3.29879 34.1239 5.21129 34.1239H12.355C14.2675 34.1239 15.8425 32.5489 15.8425 30.6364V23.5489C15.8988 21.5801 14.3238 20.0051 12.355 20.0051ZM13.3675 30.6926C13.3675 31.2551 12.9175 31.7051 12.355 31.7051H5.21129C4.64879 31.7051 4.19879 31.2551 4.19879 30.6926V23.5489C4.19879 22.9864 4.64879 22.5364 5.21129 22.5364H12.355C12.9175 22.5364 13.3675 22.9864 13.3675 23.5489V30.6926Z"
          fill="white"
        />
        <path
          d="M31.0863 20.0051H23.9425C22.03 20.0051 20.455 21.5801 20.455 23.4926V30.6364C20.455 32.5489 22.03 34.1239 23.9425 34.1239H31.0863C32.9988 34.1239 34.5738 32.5489 34.5738 30.6364V23.5489C34.5738 21.5801 32.9988 20.0051 31.0863 20.0051ZM32.0988 30.6926C32.0988 31.2551 31.6488 31.7051 31.0863 31.7051H23.9425C23.38 31.7051 22.93 31.2551 22.93 30.6926V23.5489C22.93 22.9864 23.38 22.5364 23.9425 22.5364H31.0863C31.6488 22.5364 32.0988 22.9864 32.0988 23.5489V30.6926Z"
          fill="white"
        />
      </svg>
    ),
    title: "Support & Maintenance",
    paragraph:
      "Keep your digital flame burning bright with proactive support and continuous improvement. We handle updates, security patches, bug fixes, and new features—ensuring your software runs smoothly, securely, and stays ahead of the competition in Nepal's dynamic digital landscape.",
    btn: "Get Support",
    btnLink: "/#",
  },
  // Product-based features (rewrite for each, using productList context)
  // {
  //   id: 101,
  //   icon: (
  //     <svg
  //       width="36"
  //       height="36"
  //       viewBox="0 0 24 24"
  //       fill="none"
  //       xmlns="http://www.w3.org/2000/svg"
  //     >
  //       <rect x="3" y="7" width="18" height="13" rx="2" fill="#6366F1" />
  //       <rect x="1" y="3" width="22" height="4" rx="1" fill="#A5B4FC" />
  //       <rect x="7" y="11" width="10" height="2" rx="1" fill="white" />
  //       <rect x="7" y="15" width="6" height="2" rx="1" fill="white" />
  //     </svg>
  //   ),
  //   title: "Local Business Website",
  //   paragraph:
  //     "Give your restaurant, salon, or fitness studio a modern online presence. Our local business websites feature beautiful landing pages, online booking, and customer reviews—helping you attract and retain more clients in your community.",
  //   btn: "Learn More",
  //   btnLink: "/services/local-business-website",
  // },
  // {
  //   id: 102,
  //   icon: (
  //     <svg
  //       width="36"
  //       height="36"
  //       viewBox="0 0 24 24"
  //       fill="none"
  //       xmlns="http://www.w3.org/2000/svg"
  //     >
  //       <rect x="3" y="7" width="18" height="13" rx="2" fill="#6366F1" />
  //       <rect x="1" y="3" width="22" height="4" rx="1" fill="#A5B4FC" />
  //       <rect x="7" y="11" width="10" height="2" rx="1" fill="white" />
  //       <rect x="7" y="15" width="6" height="2" rx="1" fill="white" />
  //     </svg>
  //   ),
  //   title: "Mobile App for Booking or Orders",
  //   paragraph:
  //     "Empower your customers to book appointments or place orders anytime, anywhere. Our custom mobile apps for freelancers, clinics, and delivery services include user authentication, booking systems, and optional payment integration for seamless experiences.",
  //   btn: "Learn More",
  //   btnLink: "/services/mobile-app-for-booking-or-orders",
  // },
  // {
  //   id: 103,
  //   icon: (
  //     <svg
  //       width="36"
  //       height="36"
  //       viewBox="0 0 24 24"
  //       fill="none"
  //       xmlns="http://www.w3.org/2000/svg"
  //     >
  //       <rect x="3" y="7" width="18" height="13" rx="2" fill="#6366F1" />
  //       <rect x="1" y="3" width="22" height="4" rx="1" fill="#A5B4FC" />
  //       <rect x="7" y="11" width="10" height="2" rx="1" fill="white" />
  //       <rect x="7" y="15" width="6" height="2" rx="1" fill="white" />
  //     </svg>
  //   ),
  //   title: "Admin Dashboard for Business",
  //   paragraph:
  //     "Take control of your business with a powerful admin dashboard. We build custom CRMs and analytics dashboards for SMEs, startups, and NGOs—featuring secure login, role management, and real-time insights to help you make smarter decisions.",
  //   btn: "Learn More",
  //   btnLink: "/services/admin-dashboard-for-business",
  // },
  // {
  //   id: 104,
  //   icon: (
  //     <svg
  //       width="36"
  //       height="36"
  //       viewBox="0 0 24 24"
  //       fill="none"
  //       xmlns="http://www.w3.org/2000/svg"
  //     >
  //       <rect x="3" y="7" width="18" height="13" rx="2" fill="#6366F1" />
  //       <rect x="1" y="3" width="22" height="4" rx="1" fill="#A5B4FC" />
  //       <rect x="7" y="11" width="10" height="2" rx="1" fill="white" />
  //       <rect x="7" y="15" width="6" height="2" rx="1" fill="white" />
  //     </svg>
  //   ),
  //   title: "E-commerce Frontend",
  //   paragraph:
  //     "Launch your online shop with a stunning, conversion-focused eCommerce frontend. Our solutions include product catalogs, shopping carts, and payment gateway integration—designed for Nepali businesses ready to sell online and grow revenue.",
  //   btn: "Learn More",
  //   btnLink: "/services/e-commerce-frontend",
  // },
  // {
  //   id: 105,
  //   icon: (
  //     <svg
  //       width="36"
  //       height="36"
  //       viewBox="0 0 24 24"
  //       fill="none"
  //       xmlns="http://www.w3.org/2000/svg"
  //     >
  //       <rect x="3" y="7" width="18" height="13" rx="2" fill="#6366F1" />
  //       <rect x="1" y="3" width="22" height="4" rx="1" fill="#A5B4FC" />
  //       <rect x="7" y="11" width="10" height="2" rx="1" fill="white" />
  //       <rect x="7" y="15" width="6" height="2" rx="1" fill="white" />
  //     </svg>
  //   ),
  //   title: "School or Learning Portal",
  //   paragraph:
  //     "Transform education with a digital learning portal. We create platforms for schools and e-learning providers featuring student dashboards, course management, and interactive quizzes—making learning accessible and engaging for all.",
  //   btn: "Learn More",
  //   btnLink: "/services/school-or-learning-portal",
  // },
  // {
  //   id: 106,
  //   icon: (
  //     <svg
  //       width="36"
  //       height="36"
  //       viewBox="0 0 24 24"
  //       fill="none"
  //       xmlns="http://www.w3.org/2000/svg"
  //     >
  //       <rect x="3" y="7" width="18" height="13" rx="2" fill="#6366F1" />
  //       <rect x="1" y="3" width="22" height="4" rx="1" fill="#A5B4FC" />
  //       <rect x="7" y="11" width="10" height="2" rx="1" fill="white" />
  //       <rect x="7" y="15" width="6" height="2" rx="1" fill="white" />
  //     </svg>
  //   ),
  //   title: "AI Tool / Automation Mockup",
  //   paragraph:
  //     "Boost productivity with smart automation tools. From AI-powered email responders to simple chatbots and data extractors, we help Nepali companies automate repetitive tasks and deliver faster, more efficient customer support.",
  //   btn: "Learn More",
  //   btnLink: "/services/ai-tool-automation-mockup",
  // },
  // {
  //   id: 107,
  //   icon: (
  //     <svg
  //       width="36"
  //       height="36"
  //       viewBox="0 0 24 24"
  //       fill="none"
  //       xmlns="http://www.w3.org/2000/svg"
  //     >
  //       <rect x="3" y="7" width="18" height="13" rx="2" fill="#6366F1" />
  //       <rect x="1" y="3" width="22" height="4" rx="1" fill="#A5B4FC" />
  //       <rect x="7" y="11" width="10" height="2" rx="1" fill="white" />
  //       <rect x="7" y="15" width="6" height="2" rx="1" fill="white" />
  //     </svg>
  //   ),
  //   title: "Portfolio Website Template",
  //   paragraph:
  //     "Showcase your work and attract new clients with a professional portfolio website. Our templates for freelancers and creators include project galleries, service listings, and contact forms—helping you stand out and win more business.",
  //   btn: "Learn More",
  //   btnLink: "/services/portfolio-website-template",
  // },
];
export default featuresData;
