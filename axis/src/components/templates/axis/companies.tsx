"use client";

import { motion } from "framer-motion";

const companies = [
    "Stripe", "Notion", "Linear", "Vercel", "Figma", "Slack"
];

const Companies = () => {
    return (
        <motion.div
            className="flex flex-col items-center gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
            <p className="text-sm text-muted-foreground">Trusted by teams at</p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                {companies.map((company) => (
                    <div key={company} className="text-lg font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                        {company}
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default Companies;
