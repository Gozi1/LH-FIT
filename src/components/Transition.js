import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

const Transition = ({ children }) => {
	const { asPath } = useRouter();
	const variants = {
		out: {
			opacity: 0,
      
			transition: {
        ease: "easeInOut",
				duration: 0.75,
			},
		},
		in: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.75,
				delay: 0.4,
			},
		},
	};
	return (
		<div  >
			<AnimatePresence initial={false}>
				<motion.div
					key={asPath}
					variants={variants}
					animate='in'
					initial='out'
					exit='out'
				>
					{children}
				</motion.div>
			</AnimatePresence>
		</div>
	);
};

export default Transition;
