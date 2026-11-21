
import { motion, useReducedMotion } from "framer-motion";

const revealVariants = {
  hidden: {
    opacity: 0,
    y: 38,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.13,
      delayChildren: 0.08,
    },
  },
};

export function Reveal({
  children,
  as = "div",
  className,
  delay = 0,
  duration = 0.75,
  amount = 0.18,
  distance = 38,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  const variants = {
    hidden: {
      opacity: 0,
      y: distance,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "visible"}
      viewport={{
        once: false,
        amount,
        margin: "0px 0px -8% 0px",
      }}
      {...props}
    >
      {children}
    </MotionTag>
  );
}

export function Stagger({
  children,
  className,
  as = "div",
  amount = 0.12,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      className={className}
      variants={staggerVariants}
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "visible"}
      viewport={{
        once: false,
        amount,
        margin: "0px 0px -6% 0px",
      }}
      {...props}
    >
      {children}
    </MotionTag>
  );
}

export function RevealItem({
  children,
  className,
  ...props
}) {
  return (
    <motion.div
      className={className}
      variants={revealVariants}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function HeroReveal({ children, className, ...props }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? false : {
        opacity: 0,
        y: 24,
      }}
      animate={shouldReduceMotion ? undefined : {
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
