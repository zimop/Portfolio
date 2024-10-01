import React, { FC } from 'react'
import {motion} from "framer-motion"

interface AnimateProps{
    font_size: string;
    letters: string[];
    font_weight: string;
    idx: number;
}

const AnimateLetters: FC<AnimateProps> = ({letters, idx, font_size, font_weight}) => {
  return (
    <span style = {{ whiteSpace: 'nowrap'}}>
        {letters.map((letter, idx) => (
            <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.5 }}
                whileHover={{ 
                    scale: [null, 1.5, 1.4], 
                    color:"blue",
                    transition:{ duration: 0.2 }
                }}
                animate={{ opacity: 1, scale: 1 }}
                style = {{ 
                    display: 'inline-block',
                    width: letter === ' ' ? '0.3em' : 'auto',
                    fontSize:`${font_size}`, 
                    fontWeight: `${font_weight}` 
                }}
                transition={{
                    duration: 0.3,
                    ease: [0, 0.71, 0.2, 1.01],
                    scale: {
                    type: "spring",
                    damping: 3,
                    stiffness: 100,
                    restDelta: 0.001
                    }
                }}
            >
                {letter}
            </motion.span>
        ))}
    </span>
  )
}

export default AnimateLetters