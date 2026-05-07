import { animate, easeOut, motion, useInView, useMotionValue, useTransform } from "framer-motion"
import { useEffect, useRef } from "react";


const Statistic = ({ stat }) => {
    const { label, icon, value, suffixText } = stat;

    const count = useMotionValue(0);

    const rounded = useTransform(count, (latest) => Math.round(latest))

    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})

    useEffect(() => {
        if(isInView){
            const animation = animate(count, value, {
                duration: 3,
                ease: easeOut
            })
            return animation.stop
        }
        
    }, [isInView, value, count])

    return (
        <motion.div
        ref={ref}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
        >
            <div className="w-16 h-16 bg-white/10 rounded-full flex justify-center items-center mx-auto mb-4">
                <span className="text-3xl text-white">{icon}</span>
            </div>
            <div>
                <motion.span className="text-2xl lg:text-4xl english font-bold text-white">{rounded}</motion.span>
                <span className="text-xl lg:text-2xl font-bold english text-white">{suffixText}</span>
            </div>
            <p className=" lg:text-lg english font-semibold text-white/90">{label}</p>
        </motion.div>
    );
};

export default Statistic;