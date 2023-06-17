export const scrollToPoint = (reference) => {
  reference.current?.scrollIntoView({ behavior: "smooth" });
};
