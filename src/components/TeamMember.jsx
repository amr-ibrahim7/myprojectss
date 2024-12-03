import { motion } from "framer-motion";

const TeamMember = ({ name, image, description, variants }) => (
  <motion.div
    initial="offscreen"
    whileInView={"onscreen"}
    variants={variants}
    className="border-2 border-primary"
  >
    <div className="p-4 text-center bg-gray-100 aspect-square dark:bg-tertiary -m-0.5 transition hover:-translate-y-3 hover:-translate-x-3">
      <img
        src={image}
        width={200}
        height={200}
        alt="team"
        className="mx-auto rounded-full"
        loading="lazy"
      />
      <h2 className="py-4 text-2xl font-semibold">{name}</h2>
      <p className="text-sm">{description}</p>
    </div>
  </motion.div>
);

export default TeamMember;
