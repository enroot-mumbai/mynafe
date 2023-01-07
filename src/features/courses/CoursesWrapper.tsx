import React from "react";
import classes from "./Courses.module.scss";

type Props = {
  children: React.ReactNode;
};

const CoursesWrapper = ({ children }: Props) => {
  return <section className={classes.courseWrapper}>{children}</section>;
};

export default CoursesWrapper;
