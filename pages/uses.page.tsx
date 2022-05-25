import siteMetadata from "@/data/siteMetadata";

import { PageSEO } from "@/components/SEO";

export default function Uses() {
  return (
    <>
      <PageSEO
        title={`Uses - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Uses 📋
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            What I use to develop
          </p>
        </div>

        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h3 className="md:leading-16 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-3xl">
            💻Computer
          </h3>
          <li>
            <a href="https://www.apple.com/in/shop/buy-mac/macbook-pro/13-inch-macbook-pro">
              M1 Macbook Pro (16GB RAM, 512GB SSD)
            </a>
          </li>
          <a href="https://www.lg.com/in/monitors/lg-24ml600s-w">
            <li>24" LG Virtually Borderless Monitor </li>
          </a>

          <h3 className="md:leading-16 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-3xl">
            🛠 Development Tools & Softwares
          </h3>
          <br></br>

          <a href="https://ohmyz.sh/">
            <li>ZSH & oh-my-zsh - Shell</li>
          </a>
          <a href="https://code.visualstudio.com">
            <li>Visual Studio Code - Text Editor - Primary</li>
          </a>
          <a href="https://iterm2.com/">
            <li>iTerm 2 - Terminal]</li>
          </a>

          <a href="https://www.docker.com/">
            <li>Docker - Container Management</li>
          </a>
          <a href="https://rectangleapp.com/">
            <li>Rectangle - Window management</li>
          </a>

          <h3 className="md:leading-16 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-3xl">
            📑 Services
          </h3>
          <br></br>

          <a href="https://www.netlify.com/">
            <li>Netlify - I host this website here</li>
          </a>
          <a href="https://github.com/">
            <li>Github - Software Repository hosting</li>
          </a>
          <a href="https://www.namecheap.com/">
            <li>NameCheap - Domain Provider</li>
          </a>
          <a href="https://www.digitalocean.com/">
            <li>DigitalOcean - VPS provider</li>
          </a>

          <h3 className="md:leading-16 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-3xl">
            🛋 Desk
          </h3>
          <br></br>
          <a href="https://www.ikea.com/sg/en/p/thyge-desk-white-silver-colour-s19245192/">
            <li>IKEA Thyge height adjustable desk</li>
          </a>
        </div>
      </div>
    </>
  );
}
