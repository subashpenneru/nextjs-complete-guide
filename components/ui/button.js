import Link from 'next/link';

import classes from './button.module.css';

function Button(props) {
  return props.link ? (
    <Link href={props.link}>
      <a className={classes.btn}>{props.children}</a>
    </Link>
  ) : (
    <button
      {...(props.onClick ? { onClick: props.onClick } : {})}
      className={classes.btn}>
      {props.children}
    </button>
  );
}

export default Button;
