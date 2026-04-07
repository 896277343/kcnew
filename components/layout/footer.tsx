import { Section, Container } from "@/components/craft";
import { mainMenu, contentMenu } from "@/menu.config";
import { siteConfig } from "@/site.config";
import Logo from "@/public/logo.svg";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer>
      <Section>
        <Container className="grid md:grid-cols-[1.5fr_0.5fr_0.5fr] gap-12">
          <div className="flex flex-col gap-6 not-prose">
            <Link href="/">
              <h3 className="sr-only">{siteConfig.site_name}</h3>
              <div className="flex items-center gap-2">
                <Image
                  src={Logo}
                  alt="Logo"
                  className="dark:invert"
                  width={42}
                  height={26.44}
                />
                <span className="text-xl font-bold">{siteConfig.site_name}</span>
              </div>
            </Link>
            <p className="max-w-xs">{siteConfig.site_description}</p>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>Email: sales@kcinduction.com</p>
              <p>Address: Industrial Zone, Zhengzhou, China</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <h5 className="font-medium text-base underline underline-offset-8 decoration-blue-600 mb-2">Company</h5>
            {Object.entries(mainMenu).map(([key, href]) => (
              <Link
                className="hover:text-blue-600 transition-colors capitalize"
                key={href}
                href={href}
              >
                {key}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <h5 className="font-medium text-base underline underline-offset-8 decoration-blue-600 mb-2">Products</h5>
            {Object.entries(contentMenu).map(([key, href]) => (
              <Link
                className="hover:text-blue-600 transition-colors capitalize"
                key={href}
                href={href}
              >
                {key}
              </Link>
            ))}
          </div>
        </Container>
        <Container className="border-t not-prose flex flex-col md:flex-row md:gap-2 gap-6 justify-between md:items-center py-8">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} {siteConfig.site_name}. All rights reserved.
          </p>
        </Container>
      </Section>
    </footer>
  );
}
