import Link from "@/components/Link";
import SocialIcon from "@/components/social-icons";
import siteMetadata from "@/data/siteMetadata";
import React, { FC } from "react";

type Props = {};

export const Header: FC<Props> = () => {
  return (
    <>
      <div className="Header space-y-3">
        <h1 className="pb-6 text-3xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">
          Hi, I’m Prabhat.{" "}
          <span role="img" aria-label="donut">
            👋
          </span>
        </h1>
        <h2 className=" prose pb-6 text-lg text-gray-700 dark:text-gray-300">
          I’m a software engineer 🧑🏻‍💻 , who enjoys building things.
        </h2>
        <Link href="/about" className="text-black-500 font-bold">
          About me &rarr;
        </Link>
        <div className="!mt-4 flex">
          <div className="-m-4 flex flex-wrap p-2">
            <span className="p-2">
              <SocialIcon
                kind="twitter"
                href={siteMetadata.twitter}
                size={6}
                textColor="text-blue-500 hover:text-blue-400"
              />
            </span>
            <span className="p-2">
              <SocialIcon
                kind="linkedin"
                href={siteMetadata.linkedin}
                size={6}
                textColor="text-blue-500 hover:text-blue-400"
              />
            </span>

            <span className="p-2">
              <SocialIcon
                kind="stackoverflow"
                href={siteMetadata.stackoverflow}
                size={6}
                textColor="text-blue-500 hover:text-blue-400"
              />
            </span>
            <span className="p-2">
              <SocialIcon
                kind="mail"
                href={`mailto:${siteMetadata.email}`}
                size={6}
                textColor="text-blue-500 hover:text-blue-400"
              />
            </span>
            <span className="p-2">
              <SocialIcon
                kind="github"
                href={siteMetadata.github}
                size={6}
                textColor="text-blue-500 hover:text-blue-400"
              />
            </span>
            <span className="p-2">
              <SocialIcon
                kind="instagram"
                href={siteMetadata.instagram}
                size={6}
                textColor="text-blue-500 hover:text-blue-400"
              />
            </span>
            <span className="p-2">
              <SocialIcon
                kind="youtube"
                href={siteMetadata.youtube}
                size={6}
                textColor="text-blue-500 hover:text-blue-400"
              />
            </span>
          </div>
        </div>
      </div>
      {/* <div className="Header space-y-3">
        <div className="relative flex flex-row space-x-0 sm:space-x-3">
          <div className="cover-image relative min-h-full max-w-[150px] overflow-hidden rounded-bl-3xl rounded-tl-3xl sm:rounded-3xl  md:max-w-[200px]">
            <img
              src="/static/images/prabhat2.jpeg"
              alt="Prabhat"
              className="min-h-full object-cover object-[-20px] sm:object-center 2xs:object-left"
            />
          </div>

          <div className="flex flex-1 flex-col justify-center space-y-3 overflow-hidden rounded-tr-3xl rounded-br-3xl bg-primary-800 p-4 sm:rounded-3xl sm:p-6 md:p-7">
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl  md:text-5xl">
              Prabhat
            </h2>
            <p className="text-lg leading-7 text-white">
              Hi ! 👋 I’m a software engineer 🧑🏻‍💻 , who enjoys building
              things.{" "}
              <Link href="/about" className="font-bold text-slate-400">
                About me &rarr;
              </Link>
            </p>
            <div className="!mt-4 flex">
              <div className="-m-4 flex flex-wrap p-2">
                <span className="p-2">
                  <SocialIcon
                    kind="twitter"
                    href={siteMetadata.twitter}
                    size={6}
                    textColor="text-gray-200 hover:text-blue-400"
                  />
                </span>
                <span className="p-2">
                  <SocialIcon
                    kind="linkedin"
                    href={siteMetadata.linkedin}
                    size={6}
                    textColor="text-gray-200 hover:text-blue-400"
                  />
                </span>

                <span className="p-2">
                  <SocialIcon
                    kind="stackoverflow"
                    href={siteMetadata.stackoverflow}
                    size={6}
                    textColor="text-gray-200 hover:text-blue-400"
                  />
                </span>
                <span className="p-2">
                  <SocialIcon
                    kind="mail"
                    href={`mailto:${siteMetadata.email}`}
                    size={6}
                    textColor="text-gray-200 hover:text-blue-400"
                  />
                </span>
                <span className="p-2">
                  <SocialIcon
                    kind="github"
                    href={siteMetadata.github}
                    size={6}
                    textColor="text-gray-200 hover:text-blue-400"
                  />
                </span>
                <span className="p-2">
                  <SocialIcon
                    kind="instagram"
                    href={siteMetadata.instagram}
                    size={6}
                    textColor="text-gray-200 hover:text-blue-400"
                  />
                </span>
                <span className="p-2">
                  <SocialIcon
                    kind="youtube"
                    href={siteMetadata.youtube}
                    size={6}
                    textColor="text-gray-200 hover:text-blue-400"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};
