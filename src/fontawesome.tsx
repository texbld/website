import {
  faDocker,
  faGithub,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faCloudArrowDown,
  faCloudArrowUp,
  faHouse,
  faLock,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Icon(props: { icon: any }) {
  return <FontAwesomeIcon icon={props.icon} />;
}

export default function () {
  library.add(
    faGithub,
    faHouse,
    faDocker,
    faSun,
    faMoon,
    faLock,
    faCloudArrowDown,
    faCloudArrowUp,
    faPython,
    faBars
  );
}
