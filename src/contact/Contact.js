import { motion } from "framer-motion";
import React from "react";
import { staggerCont, textVar } from "../utils/motion";
import ContactForm from "./ContactForm";
import "./contact.css";

const Contact = () => {
    return (
        <section id="contact" className="pageContainer">
            <motion.div
                className="contact"
                variants={staggerCont}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{
                        once: true,
                        amount: 1,
                        margin: "0px 0px 0px 0px",
                    }}
                    className="sectionTitle"
                    transition={{ duration: 0.5, delay: 0 }}
                >
                    Contact
                </motion.div>
                <ContactForm />
            </motion.div>
        </section>
    );
};

export default Contact;
