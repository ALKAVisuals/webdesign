"use client";

import { motion } from "framer-motion";

const features = [
    { title: "Clients, not leads", description: "See the full history of every client: conversations, proposals, projects, and past work." },
    { title: "Simple deal tracking", description: "Track proposals, retainers, and renewals without complex pipelines." },
    { title: "Clear next steps", description: "Always know who to follow up with and what needs to happen next." },
    { title: "Built for small teams", description: "Works just as well for solo consultants as it does for small firms." },
];

const Feature = () => {
    return (
        <motion.section
            className="relative mx-auto max-w-7xl px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
            <div className="mb-12 text-center lg:mb-16 max-lg:hidden">
                <h2 className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl">Axis is designed for you</h2>
                <p className="mt-4 text-sm text-muted-foreground sm:text-lg">Everything you need to manage clients and deals—nothing you don&apos;t</p>
            </div>
            <div className="hidden lg:grid lg:grid-cols-[1fr_2.5fr_1fr] lg:items-center lg:gap-12">
                <section className="flex flex-col gap-32 pb-24">
                    <div className="max-w-[240px]">
                        <h3 className="mb-2 text-lg font-medium text-foreground">{features[0].title}</h3>
                        <p className="text-sm leading-relaxed text-muted-foreground">{features[0].description}</p>
                    </div>
                    <div className="max-w-[240px]">
                        <h3 className="mb-2 text-lg font-medium text-foreground">{features[1].title}</h3>
                        <p className="text-sm leading-relaxed text-muted-foreground">{features[1].description}</p>
                    </div>
                </section>
                <section className="relative flex justify-center">
                    <div className="w-full max-w-[720px] h-64 lg:h-96 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-2xl flex items-center justify-center border border-border">
                        <span className="text-muted-foreground">Product Screenshot</span>
                    </div>
                </section>
                <section className="flex flex-col gap-32 pt-32">
                    <div className="max-w-xl">
                        <h3 className="mb-2 text-lg font-medium text-foreground">{features[2].title}</h3>
                        <p className="text-sm leading-relaxed text-muted-foreground">{features[2].description}</p>
                    </div>
                    <div className="max-w-xl">
                        <h3 className="mb-2 text-lg font-medium text-foreground">{features[3].title}</h3>
                        <p className="text-sm leading-relaxed text-muted-foreground">{features[3].description}</p>
                    </div>
                </section>
            </div>
            <div className="flex flex-col gap-8 lg:hidden">
                <section className="relative flex justify-center">
                    <div className="w-full h-48 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-2xl flex items-center justify-center border border-border">
                        <span className="text-muted-foreground">Product Screenshot</span>
                    </div>
                </section>
                <section className="flex flex-col gap-4">
                    <p className="text-center text-foreground text-2xl">Axis is designed for you</p>
                    <p className="text-center text-muted-foreground">Everything you need to manage clients and deals—nothing you don&apos;t</p>
                    <div className="flex flex-col">
                        {features.map((feature, index) => (
                            <div key={index} className="py-6">
                                <h3 className="mb-2 text-lg font-medium text-foreground">{feature.title}</h3>
                                <p className="leading-relaxed text-muted-foreground">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </motion.section>
    );
};

export default Feature;
