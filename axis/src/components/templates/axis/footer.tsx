"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
    const links = [
        { name: "Features", href: "#" },
        { name: "Usecases", href: "#" },
        { name: "Pricing", href: "#" },
        { name: "Customers", href: "#" }
    ];
    const socialLinks = [
        { label: "X", href: "#" },
        { label: "LinkedIn", href: "#" },
        { label: "Facebook", href: "#" },
        { label: "Instagram", href: "#" },
        { label: "TikTok", href: "#" },
    ];
    return (
        <motion.div
            className="flex flex-col gap-8 items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
            <div className="font-bold text-2xl tracking-tight">Axis</div>
            <ul className="grid grid-cols-4 gap-2 md:gap-8 items-center justify-center">
                {links.map((link) => (
                    <li key={link.name} className="flex flex-row items-center gap-1 hover:text-primary transition-all duration-300 text-muted-foreground">
                        <Link href={link.href}>{link.name}</Link>
                    </li>
                ))}
            </ul>
            <section className="flex flex-row gap-4">
                {socialLinks.map((link) => (
                    <Link key={link.label} href={link.href} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                        {link.label}
                    </Link>
                ))}
            </section>
            <p className="text-muted-foreground">&copy; {new Date().getFullYear()} Axis. All rights reserved.</p>
        </motion.div>
    );
};

export default Footer;
