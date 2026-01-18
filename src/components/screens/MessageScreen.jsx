"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import GradientButton from "../GradientButton"
import { ArrowRight } from "lucide-react";

export default function MessageScreen({ onNext }) {
    const [flipped, setFlipped] = useState(false);

    return (
        <div className="px-4 md:px-6 py-10 text-center">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400 drop-shadow mb-6 leading-tight"
            >
                A Special Message
            </motion.h2>

            <div className="mx-auto relative w-full max-w-3xl flex justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className=" h-auto max-w-xl bg-gradient-to-br from-pink-200 via-pink-100 to-pink-50 rounded-2xl shadow-lg p-4 md:p-6 text-center"
                >
                    <p className="text-[#301733] text-base md:text-lg leading-relaxed overflow-y-auto max-h-[400px] pr-2">
                        Happiesstt birthdayy uzmii!!!✨💜🤌🏻 You are very special to me!!!🫂🌷We got soo muchh closee in less than a yearr!!!🫠💃🏻✨ I can't even think to lose you!! 🫶🏻👀And yeahh plss cutie don't ever leave the school!!😭🤌🏻 We will always be together in every situation!!🫂🤌🏻✨ You are the girl in our group who always laughs and also make us laugh😭🤌🏻✨, like yk how muchh luckyy i am to have you!!!🫠🫶🏻and you how you look , lemme show you "💎"this is you!!🫠🤌🏻✨And yeah thankkieee youhhh soo muchhh to listen my all that toxic past and you hve to listen in future also!! 😅I literally hve a frd who never judge me!!!😭🤌🏻✨ Btw pretyyyy gurll It's yourr dayy💃🏻💃🏻( divas halyo gyo but hu jyare kais tyare j birthday hase ) and enjoy it and you get everything you want(IYKYK🙂)
                    </p>
                </motion.div>
            </div>
        </div>
    )
}
